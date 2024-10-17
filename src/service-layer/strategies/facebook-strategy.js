import UserModel from '../../data-layer/models/user-model.js';
import { generators } from 'openid-client';
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

    return { url, state };
  }

  async handleCallback(code, state) {
    const { codeVerifier } = JSON.parse(
      Buffer.from(state, 'base64').toString(),
    );

    console.log('Handling Facebook callback');
    console.log('Code:', code);
    console.log('Code Verifier:', codeVerifier);

    const authLink = uuidv4();
    const tokenUrl = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&client_secret=${this.clientSecret}&code=${code}`;

    try {
      const tokenResponse = await fetch(tokenUrl, {
        method: 'GET',
      });
      if (!tokenResponse.ok) {
        throw new Error('Failed to fetch access token');
      }
      const tokenData = await tokenResponse.json();
      console.log('Token Data:', tokenData);
      const userInfoUrl = `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${tokenData.access_token}`;
      const userInfoResponse = await fetch(userInfoUrl, {
        method: 'GET',
      });
      if (!userInfoResponse.ok) {
        throw new Error('Failed to fetch user info');
      }
      const userInfo = await userInfoResponse.json();

      console.log('User Info:', userInfo);

      let user = await UserModel.getUsersByConditions({
        facebook_id: userInfo.id,
      });

      if (user) {
        user = await UserModel.createOrUpdateUser({
          id: user[0].id,
          email: user[0].email,
          activationlink: authLink,
        });
      } else {
        user = await UserModel.createOrUpdateUser({
          email: userInfo.email ? userInfo.email : '',
          role: 'user',
          name: userInfo.name.split(' ')[0],
          surname: userInfo.name.split(' ')[1],
          picture: userInfo.picture.data.url,
          activationlink: authLink,
          isactivated: true,
          social_login: true,
          facebook_id: userInfo.id,
        });
      }

      return user[0];
    } catch (error) {
      console.error('Error in Facebook callback:', error);
      throw error;
    }
  }
}
