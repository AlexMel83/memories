import FacebookStrategy from '../strategies/facebook-strategy.js';
import ApiError from '../../middlewares/exceptions/api-errors.js';
import UserModel from '../../data-layer/models/user-model.js';
import GoogleStrategy from '../strategies/google-strategy.js';
import { rFcookieOptions } from '../../../config/config.js';
import knex from './../../../config/knex.config.js';
import tokenService from './token-service.js';

const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const emailRegex = /\(email\)=\(([^)]+)\)/;
const {
  API_BASE,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
} = process.env;

class SocialLoginService {
  constructor() {
    this.strategies = {};
  }

  getStrategy(provider) {
    if (!this.strategies[provider]) {
      try {
        switch (provider) {
          case 'google':
            this.strategies[provider] = new GoogleStrategy(
              GOOGLE_CLIENT_ID,
              GOOGLE_CLIENT_SECRET,
              `${API_BASE}/social-login/google/callback`,
            );
            break;
          case 'facebook':
            this.strategies[provider] = new FacebookStrategy(
              FACEBOOK_CLIENT_ID,
              FACEBOOK_CLIENT_SECRET,
              `${API_BASE}/social-login/facebook/callback`,
            );
            break;
          default:
            throw new Error(`Unsupported provider: ${provider}`);
        }
      } catch (error) {
        console.error(`Failed to initialize ${provider} strategy:`, error);
        throw new Error(`Authentication service unaviable for ${provider}`);
      }
    }
    return this.strategies[provider];
  }

  async generateAuthUrl(provider, origin) {
    try {
      const strategy = this.getStrategy(provider);
      return await strategy.generateAuthUrl(origin);
    } catch (error) {
      console.error(`Failed to generate auth URL for ${provider}:`, error);
      throw new Error(`Authentication service unaviable for ${provider}`);
    }
  }

  async handleCallback(provider, code, codeVerifier, res, origin) {
    const trx = await knex.transaction();
    try {
      const strategy = this.getStrategy(provider);
      const user = await strategy.handleCallback(code, codeVerifier);
      const tokens = tokenService.generateTokens({ ...user });
      await tokenService.saveToken(
        user.id,
        tokens.refreshToken,
        tokens.expRfToken,
        trx,
        res,
      );
      res.cookie('refreshToken', tokens.refreshToken, rFcookieOptions);
      const frontendRedirectUri = `${origin}/callback/${user.activationlink}`;
      await trx.commit();
      return res.redirect(frontendRedirectUri);
    } catch (error) {
      await trx.rollback();
      console.error(`Error in ${provider} callback:`, error);
      if (error.name === 'TypeError' && error.code === 'ERR_NETWORK') {
        return res.redirect(
          `${origin}?error=${encodeURIComponent('Network error: Please check your internet connection')}`,
        );
      }
      if (error && typeof error === 'object' && error.detail) {
        const match = error.detail.match(emailRegex);
        if (match) {
          const email = match[1];
          const errorMessage = email;
          return res.redirect(
            `${origin}?email=${email}&error=${encodeURIComponent(errorMessage)}`,
          );
        }
      }
      return res.redirect(
        `${origin}?error=${encodeURIComponent('An error occurred during authentication')}`,
      );
    }
  }

  async getAuthUser(authLink, res, next) {
    if (!uuidRegex.test(authLink)) {
      return next(ApiError.BadRequest('Wrong auth link'));
    }
    const trx = await knex.transaction();
    try {
      const user = await UserModel.getUsersByConditions({
        activationlink: authLink,
      });
      if (!user.length) {
        return next(ApiError.BadRequest('Wrong auth link'));
      }
      const tokens = tokenService.generateTokens({ ...user[0] });
      await tokenService.saveToken(
        user[0].id,
        tokens.refreshToken,
        tokens.expRfToken,
        trx,
        res,
      );
      delete tokens.refreshToken;
      delete tokens.expRfToken;
      const userData = {
        user: user[0],
        tokens,
      };
      await trx.commit();
      return res.json(userData);
    } catch (error) {
      await trx.rollback();
      console.error('Error in getAuthUser:', error);
      return next(
        ApiError.IntServError('An error occurred while fetching user data'),
      );
    }
  }
}

export default new SocialLoginService();
