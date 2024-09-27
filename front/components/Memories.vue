<template>
  <div>
    <button @click="toggleCollapse">
      {{ isCollapsed ? 'Развернуть воспоминания' : 'Свернуть воспоминания' }}
    </button>
    <div v-if="!isCollapsed" v-auto-animate>
      <div
        v-auto-animate
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        <div
          v-for="memory in filteredMemories"
          :key="memory.memory_id"
          class="bg-white shadow-md rounded-lg"
        >
          <nuxt-link class="container" :to="'/memories/' + memory.memory_id">
            <!-- Воспоминание -->
            <div class="photo">
              <img
                v-if="memory.memory_photos.length"
                :src="`${memory.memory_photos[0].url}`"
                loading="lazy"
              />
              <img v-else src="./../public/default-memory.png" />
              <div class="title">
                <h2 class="memory-title">
                  {{ memory.title }}
                </h2>
              </div>
            </div>
            <!-- Информация -->
            <div v-auto-animate class="info-card">
              <p class="description">
                {{ memory.description }}
              </p>
              <nuxt-link :to="'/'" class="btn"> Переглянути </nuxt-link>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- Пагинация -->
      <div class="flex justify-center pagination">
        <UPagination
          :model-value="page"
          :page-count="Math.ceil(perPage)"
          :total="Math.ceil(memoriesDataApi.length)"
          size="md"
          rounded
          class="custom-pagination"
          @update:model-value="page = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const isCollapsed = ref(false);
const page = ref(1);
const perPage = 9;

defineProps({
  memoriesDataApi: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  memoriesDataApi.value = memoriesDataApi.value;
  console.log(memoriesDataApi.value);
});

const filteredMemories = computed(() => {
  const startIndex = (page.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return memoriesDataApi.value.slice(startIndex, endIndex);
});

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.collapsible-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: var(--header-bg);
  padding: 10px;
  color: var(--white-color);
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
