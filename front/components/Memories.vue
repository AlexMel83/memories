<template>
  <UButton class="accordion-button mb-2" @click="toggleAccordion">
    {{ isExpanded ? 'Згорнути спогади' : 'Розгорнути спогади' }}
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
    <div v-if="memories.length > 0 && !isLoading">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="memory in paginatedMemories"
          :key="memory.memory_id"
          class="bg-white dark:bg-slate-800 shadow-md rounded-lg"
        >
          <nuxt-link
            class="container rounded-b-lg"
            :to="'/memories/' + memory.memory_id"
          >
            <div class="photo rounded-t-lg">
              <!-- <img
                v-if="memory.memory_photos.length"
                :src="`${memory.memory_photos[0].url.includes('http') ? '' : baseURL}${memory.memory_photos[0].url}`"
                loading="lazy"
              /> -->
              <img
                v-if="memory.memory_photos.length"
                :src="getThumbnailUrl(memory.memory_photos[0].url)"
                loading="lazy"
              />
              <img
                v-else
                :src="
                  isDocker
                    ? 'default-memory.png'
                    : './../public/' + 'default-memory.png'
                "
              />
              <!-- <img v-else src="./../public/default-memory.png" loading="lazy" /> -->
              <div class="title">
                <h2 class="memory-title">
                  {{ memory.title }}
                </h2>
              </div>
            </div>
            <div
              v-auto-animate
              class="info-card dark:text-white dark:bg-slate-600 rounded-b-lg"
            >
              <div class="description-container">
                <p class="description">
                  {{ memory.description }}
                </p>
              </div>
              <div v-if="memory.address" class="map" @click.stop>
                <a
                  class="dark:text-white flex flex-row items-center mb-1"
                  :href="
                    'https://maps.google.com/?q=' +
                    encodeURIComponent(memory.address)
                  "
                  target="_blank"
                >
                  <svg
                    class="mr-2"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{{ memory.address }}</span>
                </a>
              </div>
              <div class="icons-container up dark:text-white">
                <div class="time">
                  <svg
                    class="mr-2"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 8V13L16.75 16.75M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div flex>
                    Створено:{{ formatDate(memory.created_at) }}
                    <div v-if="memory.updated_at !== memory.created_at">
                      Оновлено: {{ formatDate(memory.updated_at) }}
                    </div>
                    <div v-if="memory.date_event">
                      Дата події: {{ formatDate(memory.date_event) }}
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
          :total="Math.ceil(memories.length)"
          size="md"
          rounded
          class="custom-pagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const isDocker = config.public.isDocker === 'true';
const isExpanded = ref(true);
const perPage = 9;
const currentPage = ref(1);
const props = defineProps({
  memories: {
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

const getThumbnailUrl = (thumbnailUrl) => {
  return isDocker ? thumbnailUrl : `./_nuxt/public${thumbnailUrl}`;
};

const toggleAccordion = () => {
  isExpanded.value = !isExpanded.value;
};
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
const paginatedMemories = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.memories.slice(start, end);
});
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
.memories-list {
  background-color: var(--space-bg-mob);
}

.memory-title {
  text-align: center;
  font-size: 20px;
}

.blurred {
  filter: blur(5px);
  pointer-events: none;
}
.spaces-wrapper {
  margin: 0 auto;
  min-height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  overflow: hidden;
  position: relative;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  backdrop-filter: blur(25px);
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
