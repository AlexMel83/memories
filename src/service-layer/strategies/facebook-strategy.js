import UserModel from '../../data-layer/models/user-model.js';
import { generators } from 'openid-client';
import fetch from 'node-fetch';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export default class FacebookStrategy {
  constructor(clientId, clientSecret, redirectUri) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
  }

  async generateAuthUrl() {
    const codeVerifier = generators.codeVerifier();
    const state = crypto.randomBytes(8).toString('hex');
    const url = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&state=${state}&scope=public_profile,email`;
    return { url, state, codeVerifier };
  }

  async handleCallback(code) {
    const tokenResponse = await fetch(
      `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${this.clientId}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectUri}&code=${code}`,
    );
    const tokenData = await tokenResponse.json();
    if (tokenData.error) {
      throw new Error(tokenData.error.message);
    }
    const { access_token } = tokenData;
    const userInfoResponse = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`,
    );
    const userInfo = await userInfoResponse.json();
    if (userInfo.error) {
      throw new Error(userInfo.error.message);
    }
    const authLink = uuidv4();
    let user = await UserModel.getUsersByConditions({
      facebook_id: userInfo.id,
    });
    if (!user?.length) {
      user = await UserModel.createOrUpdateUser({
        email: userInfo?.email ? userInfo?.email : '',
        role: 'user',
        name: userInfo.given_name || userInfo.name.split(' ')[0],
        surname: userInfo.family_name || userInfo.name.split(' ')[1],
        phone: userInfo?.phone_number,
        picture: userInfo?.picture?.data?.url,
        activationlink: authLink,
        isactivated: true,
        social_login: true,
        facebook_id: userInfo.id ? userInfo.id : '',
      });
    } else {
      user = await UserModel.createOrUpdateUser({
        id: user.id,
        email: userInfo?.email ? userInfo?.email : '',
        activationlink: authLink,
      });
    }
    return user[0];
  }
}
