<template>
  <UButton @click="toggleAccordion" class="accordion-button mb-2">
    {{ isExpanded ? 'Свернуть панорамы' : 'Развернуть панорамы' }}
    <template #trailing>
      <UIcon
        :name="
          isExpanded ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'
        "
        class="w-5 h-5"
      />
    </template>
  </UButton>
  <div v-show="isExpanded">
    <div v-if="panoramas.length > 0 && !isLoading">
      <div
        v-auto-animate
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        <div
          v-for="panorama in filteredPanoramas"
          :key="panorama.id"
          class="bg-white shadow-md rounded-lg"
        >
          <nuxt-link class="container" :to="'/panoramas/' + panorama.id">
            <div class="photo">
              <img
                v-if="panorama.thumbnail_url"
                :src="panorama.thumbnail_url"
                loading="lazy"
              />
              <img v-else src="./../public/default-memory.png" />
              <div class="title">
                <h2 class="memory-title">
                  {{ panorama.title }}
                </h2>
              </div>
            </div>
            <div v-auto-animate class="info-card">
              <div v-if="panorama.description" class="description-container">
                <p class="description">
                  {{ panorama.description }}
                </p>
              </div>
              <div v-if="panorama.address" class="map" @click.stop>
                <a
                  :href="
                    'https://maps.google.com/?q=' +
                    encodeURIComponent(panorama.address)
                  "
                  target="_blank"
                >
                  <img
                    src="~assets/spaces_images/location-marker.png"
                    loading="lazy"
                    alt="local"
                  />
                  <span>{{ panorama.address }}</span>
                </a>
              </div>
              <div class="icons-container up">
                <div class="time">
                  <img
                    src="~assets/spaces_images/time.svg"
                    loading="lazy"
                    alt="time icon"
                  />
                  <div flex>
                    Створено:{{ formatDate(panorama.created_at) }}
                    <div v-if="panorama.updated_at !== panorama.created_at">
                      Оновлено: {{ formatDate(panorama.updated_at) }}
                    </div>
                    <div v-if="panorama.shooting_date">
                      Дата зйомки:
                      {{ formatDate(panorama.shooting_date) }}
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link :to="'/'" class="btn"> Переглянути </nuxt-link>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex justify-center pagination">
        <UPagination
          v-model="currentPage"
          :page-count="perPage"
          :total="Math.ceil(panoramas.length)"
          size="md"
          rounded
          class="custom-pagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const isExpanded = ref(true);

const props = defineProps({
  panoramas: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  searchTerm: {
    type: String,
    default: '',
  },
});

const currentPage = ref(1);
const perPage = 9;

const formatDate = (dateString) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(dateString).toLocaleString('ru-RU', options);
};

const filteredPanoramas = computed(() => {
  const lowerCaseSearchTerm = props.searchTerm.toLowerCase();
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return props.panoramas
    .filter((panorama) =>
      panorama.title.toLowerCase().includes(lowerCaseSearchTerm),
    )
    .slice(startIndex, endIndex);
});

watch(currentPage, () => {
  window.scrollTo(0, 0);
});

const toggleAccordion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.description-container {
  padding: 0 5px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
  -webkit-line-clamp: 3; /* Показывает только 3 строки */
  text-overflow: ellipsis; /* Добавляет "..." в конце */
  max-height: calc(1.5em * 3); /* Высота для 3 строк текста */
}

.pagination {
  margin-top: 10px;
}
.blurred {
  filter: blur(5px);
  pointer-events: none;
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

.photo {
  width: 100%;
  max-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grecaptcha-badge {
  display: none !important;
}

.memory-title {
  text-align: center;
  font-size: 20px;
}

.title {
  display: flex;
  max-width: 92%;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 15px;
}

.info-card {
  padding: 10px 3px 20px 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.time {
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

.info-item {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
}

.btn {
  opacity: 0;
  text-transform: capitalize;
  font-size: 18px;
  line-height: normal;
  border-radius: 4px;
  background-color: var(--header-bg);
  color: var(--white-color);
  display: flex;
  max-width: 182px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.btn:hover {
  background-color: var(--btn-border);
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

.container:hover .btn {
  opacity: 1;
}

@media (min-width: 768px) {
  .blurred {
    filter: none;
    pointer-events: auto;
  }
}

@media (min-width: 1024px) {
  .btn {
    opacity: 0;
  }

  .photo {
    max-height: 274px;
  }

  .container {
    margin-bottom: 15px;
    width: 95%;
  }
  .icons-container.down img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }
}
</style>
