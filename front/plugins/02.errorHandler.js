export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('load', async (action, errHandler) => {
    try {
      const response = await action();
      return response;
    } catch (error) {
      if (errHandler) {
        if (error.response) {
          const message =
            error.response?.data?.message || 'Unknown error occurred';
          if (message.includes('Невірний пароль')) {
            errHandler.password = 'Невірний пароль';
          } else if (message.includes('mail-server')) {
            errHandler.email = 'Проблеми з сервером пошти';
          } else if (message.includes('вже існує')) {
            errHandler.email = 'Ця пошта вже зареєстрована';
          } else if (message.includes('не знайдений')) {
            errHandler.email =
              'Цей email не зареєстровано, будь ласка зареєструйтесь';
          } else {
            errHandler.form = message;
          }
        } else if (error.request) {
          console.log('Error', error);
          alert('Error: ' + JSON.stringify(error));
          errHandler.textError = errHandler.email =
            'Server is not responding. Please try again later.';
        } else {
          errHandler.textError = error.message || 'An unknown error occurred.';
        }
        return errHandler;
      } else {
        console.error('An error occurred:', error);
        return error;
      }
    }
  });
});
