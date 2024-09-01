<template>
  <form
    class="wrapper"
    @submit="onSubmit"
  >
    <Social />
    <h1>Або увійти через логін</h1>
    <div class="input-wrapper indent">
      <label>E-mail*</label>
      <div>
        <input
          v-if="emailProps && emailProps.length > 0"
          name="email"
          type="email"
          :class="{ 'input-error': errors.emailValidation }"
          maxlength="30"
          v-bind="emailValidation"
          @input="textErrorLogin = ''"
        >
        <input
          v-else
          name="email"
          type="email"
          :class="{ 'input-error': errors.emailValidation }"
          maxlength="30"
          v-bind="emailValidation"
          @input="textErrorLogin = ''"
        >
        <div class="error-text">
          {{ errors.emailValidation }}
          {{ textErrorLogin }}
        </div>
      </div>
    </div>
    <div class="input-wrapper">
      <label>Пароль*</label>
      <div class="password">
        <div
          class="input-password"
          :class="{ 'input-error': errors.passwordValidation }"
        >
          <input
            name="password"
            :type="showPassword ? 'text' : 'password'"
            maxlength="30"
            v-bind="passwordValidation"
            @input="textPasswordError = ''"
          >
          <div class="show-password">
            <img
              v-if="showPassword"
              src="~assets/icon_show_password.png"
              alt="show"
              @click="isShow"
            >
            <img
              v-else
              src="~assets/icon_close_password.png"
              alt="close"
              @click="isShow"
            >
          </div>
        </div>
        <div class="error-text">
          {{ errors.passwordValidation }}
          {{ textPasswordError }}
        </div>
      </div>
    </div>
    <div class="remind-password">
      <span
        :style="{
          cursor:
            textPasswordError || textErrorLogin ? 'pointer' : 'not-allowed',
          color:
            textPasswordError || textErrorLogin ? 'var(--btn-border)' : 'grey',
        }"
        @click="openResetPassword"
      >Забули свій пароль?</span>
    </div>
    <RegLoginButton text-content="Увійти" />
    <button
      class="link-btn"
      @click="openReg"
    >
      Зареєструватися
    </button>
  </form>
</template>

<script setup>
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import RegLoginButton from '~/components/modal/RegLoginButton.vue';
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store.ts';
import Social from './Social.vue';
import { useLocalStorage } from '@vueuse/core';
const accessToken = useLocalStorage('access_token', '');
const userId = useLocalStorage('userId', '');
const email = useLocalStorage('email', '');

const authStore = useAuthStore();

const bus = useNuxtApp().$bus;

const props = defineProps({
  initialEmail: {
    type: String,
    required: false,
    default: '',
  },
});

const emailProps = ref(props.initialEmail || '');

const { defineInputBinds, errors, handleSubmit } = useForm({
  validationSchema: yup.object({
    emailValidation: yup
      .string()
      .email('поле заповнено некоректно')
      .min(2, 'Це поле є обов’язковим для заповнення')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        'Поле заповнено невірно',
      ),
    passwordValidation: yup
      .string()
      .required('Це поле є обов’язковим для заповнення')
      .min(3, 'Пароль повинен містити принаймні 4 символа'),
  }),
});
const emailValidation = defineInputBinds('emailValidation', emailProps.value);
const passwordValidation = defineInputBinds('passwordValidation');
let showPassword = ref(false);
let textErrorLogin = ref('');
let textPasswordError = ref('');

if (emailProps.value && emailProps.value.length) {
  emailValidation.value.value = emailProps.value;
}

const { $api } = useNuxtApp();

function isShow() {
  showPassword.value = !showPassword.value;
}

const onSubmit = handleSubmit(async (values) => {
  const postObject = {
    email: values.emailValidation,
    password: values.passwordValidation,
  };
  if (emailProps.value === emailValidation.value.value) {
    postObject.email = emailProps.value;
  }
  try {
    await $api.post('/login', postObject).then((response) => {
      if (
        response.data.status == 500 &&
        response.data.message.includes('Користувач з email', 'не знайдений')
      ) {
        textErrorLogin.value = 'даний email незареєстрований';
      } else if (
        response.data.status == 400 &&
        response.data.message.includes('Обліковий запис', 'не активовано')
      ) {
        textErrorLogin.value = 'обліковий запис не активовано, перевірте пошту';
      } else if (
        response.data.status == 400 &&
        response.data.message.includes('Невірний пароль')
      ) {
        textPasswordError.value = 'невірний пароль';
      } else if (response.data.statusCode !== 401) {
        authStore.getUserData(response.data.user);
        accessToken.value = response.data.accessToken;
        userId.value = response.data.user.id;
        authStore.setRole(response.data.user.role);
        email.value = emailValidation.value.value;
        textErrorLogin.value = '';
        if (bus) {
          bus.$emit('Modal', { openModal: false });
        }
        if (typeof window !== 'undefined') {
          document.documentElement.style.overflow = '';
          document.body.style.position = '';
        }
      }
    });
  } catch (error) {
    console.error('Ошибка при входе:', error);
    if (error.response) {
      console.error('Ответ сервера:', error.response.data);
    }
  }
});
</script>

<style scoped>
.error-text {
  color: red;
  font-size: 12px;
}
.wrapper .input-wrapper .input-error,
.wrapper .input-wrapper input.input-error {
  border: 1px solid red;
}

.wrapper {
  width: 100%;
  height: 100%;
  padding: 0px 16px 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  color: var(--white-color);
  font-weight: 400;
  line-height: 140%;
}

.wrapper h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 32px;
}

.wrapper-login-using {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 78px;
  font-size: 16px;
  margin-top: 12px;
}

.indent {
  margin-bottom: 12px;
}

.link-btn,
.input-wrapper div {
  height: 48px;
  width: 100%;
}

input {
  width: 100%;
  height: 100%;
  padding: 0 0 0 8px;
  border: none;
  border-radius: 10px;
  background-color: var(--white-color);
  font-size: 18px;
}

input:focus {
  outline: none;
}

.input-password {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: var(--white-color);
}

.input-password input {
  border: none;
}

.password {
  width: 100%;
  height: 100%;
}

.password .show-password {
  height: 100%;
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link-btn,
.show-password img {
  cursor: pointer;
}

.remind-password {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
}

.remind-password span {
  cursor: pointer;
  color: var(--btn-bg);
  text-align: center;
  font-size: 16px;
}

.link-btn {
  margin-top: 24px;
  margin-bottom: 32px;
  font-size: 18px;
  border-radius: 10px;
}

input:autofill {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: black;
}

@media (min-width: 375px) {
  .wrapper {
    width: 375px;
  }
  .user-registration .else .login-line {
    width: 131px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    width: 525px;
    padding: 0px 24px;
    color: var(--black-color);
  }
  .wrapper h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  input {
    border: 1px solid var(--text-color);
    background-color: transparent;
  }

  .input-password {
    border: 1px solid var(--text-color);
    background-color: transparent;
  }

  .link-btn {
    display: none;
  }
}
</style>
