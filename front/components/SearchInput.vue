<template>
  <v-row class="mb-4 search-wrapper">
    <v-col cols="12">
      <v-text-field
        v-model="searchTerm"
        label="Пошук по назві коворкінга"
        outlined
        dense
        bg-color="white"
        prepend-inner-icon="mdi-magnify"
        class="custom-search-input"
        variant="solo"
        clearable
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, provide } from 'vue';

const searchTerm = ref('');
provide('searchTerm', searchTerm);

const bus = useNuxtApp().$bus;

watch(searchTerm, (newValue) => {
  bus.$emit('searchTermUpdated', newValue);
});
</script>

<style scoped>
@import '../assets/src/styles.css';

.search-wrapper {
  padding: 0 16px;
}

.custom-search-input {
  margin-top: 40px;
}
</style>
