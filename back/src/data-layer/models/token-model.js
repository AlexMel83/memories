const TokensTable = 'tokens';

export default {
  async getUserToken(userId, trx) {
    const data = await trx(TokensTable)
      .select('id', 'refreshtoken')
      .where('user_id', '=', userId.userId);
    return data;
  },

  async saveToken(userId, refreshToken, expToken, trx) {
    try {
      const userExist = await trx(TokensTable)
        .select('*')
        .where('user_id', '=', userId);
      if (userExist.length) {
        await trx(TokensTable)
          .where('user_id', '=', userId)
          .update({ refreshtoken: refreshToken, exp_token: expToken });
      } else {
        await trx(TokensTable).insert({
          user_id: userId,
          refreshtoken: refreshToken,
          exp_token: expToken,
        });
      }
      return refreshToken;
    } catch (error) {
      console.error('Помилка транзакції:', error);
      throw error;
    }
  },

  async deleteOneToken(refreshToken, trx) {
    try {
      const data = await trx(TokensTable)
        .where('refreshtoken', refreshToken)
        .del();
      return data;
    } catch (error) {
      console.error('Помилка транзакції:', error);
      throw error;
    }
  },

  async findOneToken(refreshToken, trx) {
    const data = await trx(TokensTable)
      .select('user_id', 'refreshtoken')
      .where('refreshtoken', refreshToken);
    return data;
  },
};
