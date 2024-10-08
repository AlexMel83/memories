<template>
  <div class="panorama-page">
    <div v-if="panorama" class="panorama-container">
      <h1 class="text-3xl font-bold text-gray-900 text-center m-4">
        {{ panorama.title }}
      </h1>
      <div ref="streetViewContainer" class="street-view" />
      <div class="pagination">
        <UButton
          :disabled="currentId <= 1"
          class="mx-4"
          @click="previousPanorama"
        >
          Назад
        </UButton>
        <UButton class="mx-4" @click="nextPanorama"> Вперед </UButton>
      </div>
    </div>
    <div v-else class="loading">Загрузка панорамы...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const panorama = ref(null);
const streetViewContainer = ref(null);
const currentId = ref(parseInt(route.params.id));
const { $api } = useNuxtApp();

onMounted(async () => {
  await loadPanorama();
});

const loadPanorama = async () => {
  try {
    const response = await $api.panoramas.getPanoramaById(currentId.value);
    panorama.value = response.data[0];
    await nextTick();
    initStreetView();
  } catch (error) {
    console.error('Ошибка загрузки панорамы:', error);
  }
};

const initStreetView = () => {
  if (panorama.value && streetViewContainer.value) {
    const location = {
      lat: parseFloat(panorama.value.latitude),
      lng: parseFloat(panorama.value.longitude),
    };
    const streetView = new google.maps.StreetViewPanorama(
      streetViewContainer.value,
      {
        position: location,
        pov: {
          heading: parseFloat(panorama.value.heading) || 0,
          pitch: parseFloat(panorama.value.tilt) - 90 || 0,
        },
        zoom: 0,
      },
    );
    streetView.addListener('zoom_changed', () => {
      const currentZoom = streetView.getZoom();
      console.log('Current zoom:', currentZoom);
      if (document.fullscreenElement && currentZoom !== 0) {
        streetView.setZoom(0);
      }
    });
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        streetView.setZoom(0);
      }
    });
  } else {
    console.warn(
      'Контейнер для панорамы не готов или данные панорамы отсутствуют.',
    );
  }
};

const previousPanorama = () => {
  if (currentId.value > 1) {
    currentId.value -= 1;
    router.push({ name: 'panoramas-id', params: { id: currentId.value } });
    loadPanorama();
  }
};

const nextPanorama = () => {
  currentId.value += 1;
  router.push({ name: 'panoramas-id', params: { id: currentId.value } });
  loadPanorama();
};
</script>

<style scoped>
.panorama-container {
  display: flex;
  flex-direction: column;
}

.street-view {
  width: 100%;
  height: 500px;
}

.loading {
  text-align: center;
  font-size: 1.5em;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
