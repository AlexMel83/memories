export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('load', async (action, errHandler) => {
    try {
      const response = await action();
      return response;
    } catch (error) {
      if (errHandler) {
        if (error.response) {
          console.log(error.response);
          const message =
            error.response.data?.message || 'Unknown error occured';
          if (message.includes('Невірний пароль')) {
            errHandler.password = message;
          } else if (message.includes('mail-server')) {
            errHandler.email =
              'mail server is not responding, activation-email was not sent';
          } else if (message.includes('вже існує')) {
            errHandler.email = message;
          } else if (res.data.message.includes('не знайдений')) {
            errHandler.email = 'даний email не зареєстровано';
          } else if (res.data.message.includes('Помилка при валідації')) {
            errHandler.email = 'Помилка при валідації';
          } else {
            errHandler.email = message;
          }
        } else if (error.request) {
          errHandler.textError = errHandler.email =
            'Server is not responding. Please try again later.';
        } else {
          errHandler.textError = error.message || 'An unknown error occurred.';
        }
      } else {
        console.error('An error occurred:', error);
      }
    }
  });
});