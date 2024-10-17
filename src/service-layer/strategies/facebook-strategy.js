import UserModel from '../../data-layer/models/user-model.js';
import { generators } from 'openid-client';
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

export default class FacebookStrategy {
  constructor(clientId, clientSecret, redirectUri) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
  }

  async generateAuthUrl(origin) {
    const codeVerifier = generators.codeVerifier();
    const state = Buffer.from(
      JSON.stringify({ codeVerifier, origin }),
    ).toString('base64');
    const url = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&state=${state}&scope=public_profile,email`;
    console.log('Generated Facebook Auth URL:', url);
    console.log('State:', state);

    return { url, state, codeVerifier };
  }

  async handleCallback(code, codeVerifier) {
    console.log('Handling Facebook callback');
    console.log('Code:', code);
    console.log('Code Verifier:', codeVerifier);

    try {
      const tokenResponse = await fetch(
        `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${this.clientId}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectUri}&code=${code}`,
      );
      const tokenData = await tokenResponse.json();
      if (tokenData.error) {
        throw new Error(tokenData.error.message);
      }
      console.log('Token Data:', tokenData);

      const { access_token } = tokenData;
      const userInfoResponse = await fetch(
        `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`,
      );
      const userInfo = await userInfoResponse.json();
      if (userInfo.error) {
        throw new Error(userInfo.error.message);
      }
      console.log('User Info:', userInfo);

      const authLink = uuidv4();
      let user = await UserModel.getUsersByConditions({
        facebook_id: userInfo.id,
      });

      if (!user?.length) {
        user = await UserModel.createOrUpdateUser({
          email: userInfo?.email ? userInfo?.email : '',
          role: 'user',
          name: userInfo.name.split(' ')[0],
          surname: userInfo.name.split(' ')[1] || '',
          picture: userInfo?.picture?.data?.url,
          activationlink: authLink,
          isactivated: true,
          social_login: true,
          facebook_id: userInfo.id,
        });
      } else {
        user = await UserModel.createOrUpdateUser({
          id: user[0].id,
          email: userInfo?.email ? userInfo?.email : '',
          activationlink: authLink,
        });
      }

      console.log('User after createOrUpdate:', user);
      return user[0];
    } catch (error) {
      console.error('Error in Facebook callback:', error);
      throw error;
    }
  }
}
