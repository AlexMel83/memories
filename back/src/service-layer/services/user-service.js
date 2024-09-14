import ApiError from '../../middlewares/exceptions/api-errors.js';
import UserModel from '../../data-layer/models/user-model.js';
import UserDto from '../../data-layer/dtos/user-dto.js';
import tokenService from './token-service.js';
import mailService from './mail-service.js';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const { CLIENT_URL } = process.env;

class UserService {
  async login(email, password, trx, res) {
    const user = await UserModel.getUsersByConditions({ email, password });
    if (!user?.length) {
      throw ApiError.NotFound(`Користувач з email: ${email} не знайдений`);
    }
    if (!user[0].isactivated) {
      throw ApiError.BadRequest(`Обліковий запис: ${email} не активовано`);
    }
    const isPassEquals = await bcrypt.compare(password, user[0].password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Невірний пароль');
    }
    const tokens = tokenService.generateTokens({ ...user[0] });
    await tokenService.saveToken(
      user[0].id,
      tokens.refreshToken,
      tokens.expRfToken,
      trx,
      res,
    );
    return { user: user[0], tokens };
  }
  async registration(email, password, role, trx) {
    const candidate = await UserModel.getUsersByConditions({ email }, trx);
    if (candidate?.length) {
      throw ApiError.ConflictRequest(`Обліковий запис ${email} вже існує`);
    }
    if (role != 'user' && role != 'manager' && role != 'admin') {
      throw ApiError.BadRequest(`роль ${role} не дійсна`);
    }
    const activationlink = uuidv4();
    const hashPassword = await this.hashPassword(password);
    const [user] = await UserModel.createOrUpdateUser(
      { email, password: hashPassword, role, activationlink },
      trx,
    );
    await mailService.sendActivationMail(
      email,
      `${CLIENT_URL}/activate/${activationlink}`,
    );
    return {
      user: user,
    };
  }

  async activate(activationlink, trx) {
    const user = await UserModel.getUsersByConditions({
      activationlink,
    });
    if (user?.length && !user[0].isactivated) {
      const [activatedUser] = await UserModel.activateUser(user[0].email, trx);
      if (!activatedUser) {
        throw ApiError.BadRequest('Помилка активації');
      }
      return activatedUser;
    } else if (user[0].isactivated) {
      // throw ApiError.BadRequest('Користувач вже активований');
      return user;
    } else {
      throw ApiError.NotFound('Код активації недійсний');
    }
  }

  async logout(refreshToken, trx) {
    const token = await tokenService.removeToken(refreshToken, trx);
    return token;
  }

  async refresh(refreshToken, trx) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken, trx);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findUserByEmail(userData.email, trx);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.expRfToken,
      trx,
    );
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  async getUser(id) {
    const user = await UserModel.findUserById(id);
    if (!user) {
      throw ApiError.NotFound(`id: ${id} was not found`);
    }
    return user;
  }

  async hashPassword(password) {
    const hashPassword = await bcrypt.hash(password, 3);
    return hashPassword;
  }
}

export default new UserService();
