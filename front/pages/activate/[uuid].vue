<template>
  <div>
    <h1 class="text-center text-2xl mt-2">Активація аккаунту</h1>
    <p v-if="loading" class="text-center mt-1 mb-2">Активація...</p>
    <p v-if="error" class="text-red-500 text-center mt-1 mb-2">
      {{ error }}
    </p>
    <p v-if="success" class="mt-1 mb-2">
      <p class="text-green-500 text-center">Вітаємо Ваш аккаунт успішно активовано!</p>
      <div v-if="editMode" class="mt-4">
      <h2 class="text-center text-xl mb-2">Заповніть дані для завершення реєстрації</h2>
      <form @submit.prevent="updateUser">
        <div class="mb-2">
          <label for="name" class="block">Ім'я:</label>
          <input v-model="name" id="name" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <div class="mb-2">
          <label for="surname" class="block">Прізвище:</label>
          <input v-model="surname" id="surname" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <div class="mb-2">
          <label for="phone" class="block">Телефон:</label>
          <input v-model="phone" id="phone" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <div class="mb-2">
          <label for="picture" class="block">Фото профілю (URL):</label>
          <input v-model="picture" id="picture" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Зберегти
        </button>
      </form>
    </div>
    </p>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth.store';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const authStore = useAuthStore();
const { $api } = useNuxtApp();
const editMode = ref(false);
const success = ref(false);
const loading = ref(true);
const route = useRoute();
const error = ref(null);

const name = ref('');
const surname = ref('');
const phone = ref('');
const picture = ref('');

onMounted(async () => {
  try {
    const uuid = route.params.uuid;
    const response = await $api.auth.activate(uuid);
    console.log(response);
    if (
      response &&
      [200, 201].includes(response.status) &&
      ![400, 401, 403, 404, 500].includes(response.data.status)
    ) {
      const data = response.data;
      authStore.setUserData(data);
      console.log(data);
      success.value = true;
      if (!data.name || !data.surname || !data.phone || !data.picture) {
        name.value = data.name || '';
        surname.value = data.surname || '';
        phone.value = data.phone || '';
        picture.value = data.picture || '';
        editMode.value = true;
      }
    } else {
      error.value = 'Помилка активації.';
    }
  } catch (err) {
    error.value =
      'Помилка активації: ' +
      (err.response?.data?.message.includes('Error:')
        ? err.response.data.message.replace('Error: ', '')
        : err.response?.data?.message);
  } finally {
    loading.value = false;
  }
});

const updateUser = async () => {
  try {
    const response = await $api.auth.updateUser({
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      picture: picture.value,
    });
    if ([200, 201].includes(response.status)) {
      success.value = true;
      editMode.value = false;
    } else {
      error.value = 'Не вдалося оновити дані користувача.';
    }
  } catch (err) {
    error.value = 'Помилка оновлення: ' + (err.response?.data?.message || 'Невідома помилка.');
  }
};
</script>
