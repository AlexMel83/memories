import FacebookStrategy from '../strategies/facebook-strategy.js';
import ApiError from '../../middlewares/exceptions/api-errors.js';
import UserModel from '../../data-layer/models/user-model.js';
import GoogleStrategy from '../strategies/google-strategy.js';
import UserDto from '../../data-layer/dtos/user-dto.js';
import { rFcookieOptions } from '../../../config/config.js';
import tokenService from './token-service.js';

const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const emailRegex = /\(email\)=\(([^)]+)\)/;
const {
  CLIENT_URL,
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

  async generateAuthUrl(provider) {
    try {
      const strategy = this.getStrategy(provider);
      return await strategy.generateAuthUrl();
    } catch (error) {
      console.error(`Failed to generate auth URL for ${provider}:`, error);
      throw new Error(`Authentication service unaviable for ${provider}`);
    }
  }

  async handleCallback(provider, code, codeVerifier, res) {
    try {
      const strategy = this.getStrategy(provider);
      const user = await strategy.handleCallback(code, codeVerifier);
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(
        user.id,
        tokens.refreshToken,
        tokens.expRfToken,
      );
      res.cookie('refreshToken', tokens.refreshToken, rFcookieOptions);
      const frontendRedirectUri = `${CLIENT_URL}?authLink=${user.activationlink}`;
      return res.redirect(frontendRedirectUri);
    } catch (error) {
      console.error(`Error in ${provider} callback:`, error);
      if (error.name === 'TypeError' && error.code === 'ERR_NETWORK') {
        return res.redirect(
          `${CLIENT_URL}?error=${encodeURIComponent('Network error: Please check your internet connection')}`,
        );
      }
      if (error && typeof error === 'object' && error.detail) {
        const match = error.detail.match(emailRegex);
        if (match) {
          const email = match[1];
          const errorMessage = email;
          return res.redirect(
            `${CLIENT_URL}?email=${email}&error=${encodeURIComponent(errorMessage)}`,
          );
        }
      }
      return res.redirect(
        `${CLIENT_URL}?error=${encodeURIComponent('An error occurred during authentication')}`,
      );
    }
  }

  async getAuthUser(authLink, res, next) {
    if (!uuidRegex.test(authLink)) {
      return next(ApiError.BadRequest('Wrong auth link'));
    }
    try {
      const userData = await UserModel.findUserByActivationLink(authLink);
      if (!userData) {
        return next(ApiError.BadRequest('Wrong auth link'));
      }
      return res.json(userData);
    } catch (error) {
      console.error('Error in getAuthUser:', error);
      return next(
        ApiError.IntServError('An error occurred while fetching user data'),
      );
    }
  }
}

export default new SocialLoginService();
