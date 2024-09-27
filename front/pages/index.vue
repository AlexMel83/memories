<template>
  <div class="index-page">
    <main>
      <section class="search">
        <SearchInput />
      </section>
      <section class="memories-list" :class="{ blurred: authStore.isMenuOpen }">
        <Map
          :memories="filteredMemories || []"
          :panoramas="panoramasDataApi || []"
        />
        <div v-auto-animate class="memories-wrapper">
          <Panoramas
            :panoramas="panoramasDataApi"
            :is-loading="isLoading"
            :search-term="searchTerm"
          />
        </div>
        <div v-auto-animate class="memories-wrapper">
          <Memories
            :memories="filteredMemories"
            :is-loading="isLoading"
            :search-term="searchTerm"
          />
          <Loader v-if="isLoad" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store.ts';
import SearchInput from '@/components/SearchInput.vue';

const isLoading = ref(false);
const isLoad = ref(false);
const { $api } = useNuxtApp();
const memoriesDataApi = ref([]);
const panoramasDataApi = ref([]);
const authStore = useAuthStore();
const searchTerm = inject('searchTerm', ref(''));
const page = ref(1);
const perPage = 9;
const bus = useNuxtApp().$bus;

onMounted(async () => {
  try {
    await fetchPanoramas();
    if (!searchTerm.value) {
      await fetchMemories();
    }

    bus.$on('searchTermUpdated', (newSearchTerm) => {
      searchTerm.value = newSearchTerm;
      fetchMemories(newSearchTerm);
    });
  } catch (error) {
    console.error('Error in onMounted:', error);
  }
});

const fetchMemories = async (searchQuery = null) => {
  isLoading.value = true;
  try {
    const response = await $api.memories.getMemories(searchQuery);
    const memories = response.data.filter(
      (memory) => memory.published === true,
    );
    memoriesDataApi.value = memories;
  } catch (error) {
    console.error('Error fetching memories data:', error);
  } finally {
    isLoading.value = false;
  }
};

const fetchPanoramas = async (searchQuery = null) => {
  isLoading.value = true;
  try {
    const response = await $api.panoramas.getPanoramas(searchQuery);

    panoramasDataApi.value = response.data;
  } catch (error) {
    console.error('Error fetching panoramas data:', error);
  } finally {
    isLoading.value = false;
  }
};

const filteredMemories = computed(() => {
  const lowerCaseSearchTerm = searchTerm.value?.toLowerCase() || '';
  const startIndex = (page.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return memoriesDataApi.value
    .filter((memory) =>
      memory.title.toLowerCase().includes(lowerCaseSearchTerm),
    )
    .slice(startIndex, endIndex);
});

watch(page, () => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
@import '../assets/src/styles.css';

.index-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1;
}

.memories-wrapper {
  padding: 5px 25px 5px 25px;
}

.search {
  background-color: var(--header-bg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  padding: 0 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background: var(--white-color);
  width: 95%;
  margin: 10px auto;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.grecaptcha-badge {
  display: none !important;
}

.map {
  display: flex;
  margin-bottom: 5px;
}

.map img {
  width: 25px;
  height: 25px;
}

.map a {
  display: flex;
  align-items: center;
  column-gap: 7px;
}

.custom-search-input {
  margin-top: 40px;
}

@media (min-width: 768px) {
  .blurred {
    filter: none;
    pointer-events: auto;
  }
}

@media (min-width: 1024px) {
  .search {
    padding: 0 10px;
  }

  .search-wrapper {
    padding: 0 8px;
  }
}

@media (min-width: 1440px) {
  .memories-wrapper {
    padding: 20px 25px;
  }
}
</style>
