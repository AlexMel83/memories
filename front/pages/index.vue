<template>
  <main>
    <section class="search">
      <SearchInput />
    </section>
    <section class="coworkings-list" :class="{ blurred: authStore.isMenuOpen }">
      <div class="spaces-wrapper">
        <template v-if="filteredSpaces.length > 0 && !isLoading">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="space in filteredSpaces"
              :key="space.id"
              class="spaces-col p-4 bg-white shadow-md rounded-lg"
            >
              <nuxt-link class="container" :to="'/'">
                <div class="photo">
                  <img
                    v-if="space.coworking_photo"
                    :src="`${baseURL}/${space.coworking_photo}`"
                  />
                  <img v-else src="./../public/default-coworking.png" />
                  <div class="rating">
                    <v-rating
                      readonly
                      :length="5"
                      half-increments
                      size="x-small"
                      density="comfortable"
                      :model-value="space.averageRating"
                      color="#AF3800"
                      background-color="white"
                      active-color="#AF3800"
                      class="custom-rating"
                    />
                  </div>
                  <div class="title">
                    <h2 class="space-title">
                      {{ space.coworking_name }}
                    </h2>
                  </div>
                </div>
                <div class="info-card">
                  <div class="icons-container down">
                    <img
                      v-for="advantage in space.advantages.slice(0, 7)"
                      :key="advantage.name"
                      :title="advantage.description"
                      :src="`${baseURL}/${advantage.icon}`"
                    />
                    <v-icon
                      v-if="space.advantages.length > 7"
                      color="var(--header-bg)"
                      class="dots-icon"
                    >
                      mdi-dots-horizontal
                    </v-icon>
                  </div>
                  <div v-if="space.address" class="map" @click.stop>
                    <a
                      :href="
                        'https://maps.google.com/?q=' +
                        encodeURIComponent(space.address)
                      "
                      target="_blank"
                    >
                      <img
                        src="~assets/spaces_images/location-marker.png"
                        alt="local"
                      />
                      <span>{{ space.address }}</span>
                    </a>
                  </div>
                  <div class="icons-container up">
                    <div
                      v-if="space.workday_start && space.workday_end"
                      class="time"
                    >
                      <img
                        src="~assets/spaces_images/time.svg"
                        alt="time icon"
                      />
                      {{ space.workday_start }} - {{ space.workday_end }}
                    </div>
                  </div>
                  <nuxt-link
                    :to="'/'"
                    class="btn"
                    :class="{ visible: isHovered }"
                  >
                    Переглянути
                  </nuxt-link>
                </div>
              </nuxt-link>
            </div>
          </div>
          <v-pagination
            v-model="page"
            :length="Math.ceil(spacesDataApi.length / perPage)"
            rounded="0"
            color="#1A679A"
            class="custom-pagination"
          />
          <Map :coworkings="spacesDataApi || []" />
        </template>
        <template v-else>
          <div v-if="isLoad" class="no-results-message">
            <h3 class="text-center">На жаль нічого не знайдено...</h3>
            <br />
            <h3 class="text-center">
              Спробуйте змінити запит <v-icon>mdi-magnify</v-icon>
            </h3>
          </div>
        </template>
        <Loader v-if="isLoad" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch, inject } from 'vue';
import { useAuthStore } from '@/stores/auth.store.ts';
import SearchInput from '@/components/SearchInput.vue';
import useFallbackReviews from '@/mixins/useFallbackReviews';

const isLoading = ref(false);
const isLoad = ref(false);
const { $api } = useNuxtApp();
const isHovered = ref(false);
const spacesDataApi = ref([]);
const authStore = useAuthStore();
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const searchTerm = inject('searchTerm', ref(''));
const page = ref(1);
const perPage = 12;
const bus = useNuxtApp().$bus;
const averageRating = ref(0);

const { getFallbackReviews } = useFallbackReviews();

onMounted(async () => {
  await fetchCoworkings();
  await getAllAdvantages();

  bus.$on('searchTermUpdated', (newSearchTerm) => {
    searchTerm.value = newSearchTerm;
    fetchCoworkings(newSearchTerm);
  });
});

watch(searchTerm, async (newValue) => {
  await fetchCoworkings(newValue);
});

const fetchCoworkings = async (searchQuery = null) => {
  isLoading.value = true;
  try {
    const response = await $api.coworkings.getCoworkings(searchQuery);
    const coworkings = response.data.filter(
      (space) => space.published === true,
    );

    for (let coworking of coworkings) {
      const reviewsResponse = await $api.coworkings.getReviews(coworking.id);
      let reviews = reviewsResponse.data;
      if (reviews.length === 0) {
        reviews = getFallbackReviews(coworking.id);
      }
      coworking.averageRating =
        reviews.length > 0
          ? (
              reviews.reduce((sum, review) => sum + review.rating, 0) /
              reviews.length
            ).toFixed(1)
          : null;
    }

    spacesDataApi.value = coworkings;
  } catch (error) {
    console.error('Error fetching coworkings data:', error);
  } finally {
    isLoading.value = false;
  }
};

const filteredSpaces = computed(() => {
  const lowerCaseSearchTerm = searchTerm.value?.toLowerCase() || '';
  const startIndex = (page.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return spacesDataApi.value
    .filter((space) =>
      space.coworking_name.toLowerCase().includes(lowerCaseSearchTerm),
    )
    .slice(startIndex, endIndex);
});

const getAllAdvantages = async () => {
  try {
    const response = await $api.coworkings.getAdvantages();
    authStore.setAllAdvantages(response.data);
  } catch (error) {
    console.error('An error occurred while fetching advantages:', error);
  }
};

bus.$on('averageRatingUpdated', (newAverageRating) => {
  averageRating.value = newAverageRating;
});
</script>

<style scoped>
@import '../assets/src/styles.css';

.blurred {
  filter: blur(5px);
  pointer-events: none;
}

.search {
  background-color: var(--header-bg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.coworkings-list {
  background-color: var(--space-bg-mob);
}

.spaces-wrapper {
  margin: 0 auto;
  min-height: 100vh;
  padding: 24px 0px;
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
  width: 92%;
  margin: 0 auto;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.photo {
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rating {
  position: absolute;
  right: 0px;
  top: 20px;
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 20px 0px 0px 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}

.grecaptcha-badge {
  display: none !important;
}

.space-title {
  text-align: center;
  padding: 5px;
  font-size: 20px;
}

.title {
  display: flex;
  width: 92%;
  max-width: 316px;
  padding: 4px 24px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 0px 20px 20px 0px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  position: absolute;
  left: -1px;
  bottom: 20px;
}

.info-card {
  padding: 16px 3px 30px 3px;
  position: relative;
}

.icons-container.up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  color: var(--black-color);
}

.icons-container.up img {
  margin-right: 7px;
}

.time,
.money {
  display: flex;
  align-items: center;
}

.icons-container.down {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  margin-bottom: 16px;
  padding: 4px 0;
  min-height: 32px;
}

.icons-container.down img {
  width: 27px;
  height: 26px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: var(--header-bg);
}

.map {
  display: flex;
  margin-bottom: 10px;
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

.info-item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
}

.btn {
  text-transform: capitalize;
  font-size: 18px;
  line-height: normal;
  border-radius: 4px;
  background-color: var(--header-bg);
  color: var(--white-color);
  display: flex;
  width: 182px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.btn:active {
  border: 2px solid var(--icons-contact-bg);
  background-color: var(--header-bg);
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.custom-search-input {
  margin-top: 40px;
}

.icons-container .down {
  position: relative;
}

.dots-icon::before {
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
}

@media (min-width: 768px) {
  .blurred {
    filter: none;
    pointer-events: auto;
  }
}

@media (min-width: 1024px) {
  .spaces-wrapper {
    padding: 40px;
  }

  .search {
    padding: 0 40px;
  }

  .search-wrapper {
    padding: 0 8px;
  }

  .spaces-col {
    padding: 0;
    margin: 0;
  }

  .title {
    width: 75%;
  }

  .btn {
    opacity: 0;
  }

  .photo {
    height: 274px;
  }

  .btn:hover {
    background-color: var(--btn-border);
  }

  .container {
    margin-bottom: 40px;
    width: 95%;
  }

  .container:hover .btn {
    opacity: 1;
  }

  .info-card {
    padding: 24px 24px 32px;
    min-height: 174px;
  }

  .icons-container.down img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }
}

@media (min-width: 1440px) {
  .spaces-wrapper {
    padding: 40px 65px;
  }

  .search {
    padding: 0 65px;
  }
}
</style>
