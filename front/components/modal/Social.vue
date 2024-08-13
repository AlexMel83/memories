<template>
  <div class="wrapper-login-using">
    <p class="social-title">Увійти за допомогою соцмереж</p>
    <div class="login-using">
      <div class="login-using-item" @click="handleSocialLogin('google')">
        <img src="~assets/icon_google.png" alt="google" />
      </div>
      <div class="login-using-item" @click="handleSocialLogin('facebook')">
        <img src="~assets/icon_facebook.png" alt="facebook" />
      </div>
    </div>
    <div v-if="error" class="social-error">
      {{ error }} вже був зареєстрований <br />
      скористайтесь полями нижче для входу
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
const { $api } = useNuxtApp();
const error = ref('');

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const errorParam = urlParams.get('error');
  if (errorParam) {
    error.value = errorParam;
  }
});

const handleSocialLogin = async (provider) => {
  try {
    const response = await $api.get(`/social-login/${provider}`);
    if (response.data && response.data.url) {
      window.location.href = response.data.url;
    }
  } catch (error) {
    console.log('Social Login Error:', error);
  }
};
</script>

<style scoped>
.social-title {
  margin: 0 10px 10px 10px;
}
.social-error {
  color: red;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
}
.wrapper-login-using {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

.login-using {
  width: 166px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.login-using .login-using-item {
  height: 100%;
  width: 60px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
