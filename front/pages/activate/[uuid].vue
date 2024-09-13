<template>
  <div>
    <h1>Активація аккаунту</h1>
    <p v-if="loading">Активація...</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">Ваш аккаунт успішно активовано!</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
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
    error.value = 'Помилка активації.';
  } finally {
    loading.value = false;
  }
});
</script>
