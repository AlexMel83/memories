<template>
  <div>
    <h1 class="text-center text-2xl mt-2">Активація аккаунту</h1>
    <p v-if="loading" class="text-center mt-1 mb-2">Активація...</p>
    <p v-if="error" class="text-red-500 text-center mt-1 mb-2">
      {{ error }}
    </p>
    <p v-if="success" class="text-green-500 text-center mt-1 mb-2">
      Вітаємо Ваш аккаунт успішно активовано!
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const route = useRoute();
const { $api } = useNuxtApp();
const loading = ref(true);
const error = ref(null);
const success = ref(false);

onMounted(async () => {
  try {
    const uuid = route.params.uuid;
    const response = await $api.auth.activate(uuid);
    console.log(response);
    if (response.status === 200) {
      success.value = true;
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
</script>
