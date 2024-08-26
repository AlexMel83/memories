<template>
  <section
    v-if="memories.length > 0"
    class="mapsection"
    name="image-map"
    style="height: 80vh"
  >
    <button class="location btn" @click="getLocation()">
      Get your Location
    </button>
    <span v-if="userLocationMarker.latLng && userLocationMarker.icon">
      {{ userLocationMarker?.latLng[0] }}, {{ userLocationMarker?.latLng[1] }}
    </span>
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      style="width: 100%; height: 100%"
      :scroll-wheel-zoom="false"
    >
      <l-tile-layer :url="osmUrl" :attribution="osmAttrib" />
      <l-marker
        v-if="userLocationMarker.latLng && userLocationMarker.icon"
        :key="'user'"
        :lat-lng="userLocationMarker.latLng"
        :icon="userIcon"
      >
        <l-popup v-if="userLocationMarker.latLng">
          Your location
          <p>
            {{ userLocationMarker.latLng[0] }},
            {{ userLocationMarker.latLng[1] }}
          </p>
        </l-popup>
      </l-marker>
      <l-marker
        v-for="memory in markerData"
        :key="memory.id"
        :lat-lng="[memory.latitude, memory.longitude]"
      >
        <l-popup :content="memory.popupContent" />
      </l-marker>
      <l-control-layers position="topright" />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
    </l-map>
  </section>
</template>

<script setup>
import {
  LMap,
  LTileLayer,
  LControlLayers,
  LMarker,
  LPopup,
} from '@vue-leaflet/vue-leaflet';
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const mapboxApiKey = config.public.apiKeyMapbox;
const props = defineProps({
  memories: {
    type: Array,
    default: () => [],
  },
});
const map = ref(null);
const zoom = ref(14);
const center = ref([49.230173, 28.447339]);
const userLocationMarker = reactive({ latLng: null, icon: null });
const osmUrl = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const osmAttrib = ref(
  '&copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors',
);
const tileProviders = ref([
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'Satellite',
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'Hybrid',
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
]);
let userIcon = null;
let isIconLoaded = false;

onMounted(async () => {
  if (process.client) {
    const L = await import('leaflet');
    import('leaflet').then(() => {
      userIcon = L.icon({
        iconUrl: 'location-icon.ico',
        iconSize: [35, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });
      userLocationMarker.icon = userIcon;
    });
  }
  isIconLoaded = true;
});

const markerData = computed(() => {
  return props.memories.map((memory) => {
    const regex = /POINT\(([^ ]+) ([^ ]+)\)/;
    const match = memory.location ? memory.location.match(regex) : null;
    const longitude = match ? parseFloat(match[1]) : 0;
    const latitude = match ? parseFloat(match[2]) : 0;
    const photoURL = memory.memory_photos?.[0]?.url
      ? `${memory.memory_photos[0].url.includes('http') ? '' : baseURL}${memory.memory_photos[0].url}`
      : './default-coworking.png';
    const popupContent = `
        <div class="popup-content" style="text-align: center; margin 0;">
            <a href="/coworking/${memory.id}" target="_blank" style="word-wrap: break-word; text-decoration: none;">
                <img src="${photoURL}" loading="lazy" alt="${memory.title}" style="max-width: 100%; height: auto; display: block; margin: auto;" />
                <b style="display: block; margin-top: 3px; font-weight: bold; font-size: 130%;">${memory.title}</b>
            </a>
            <p class="px-2" style="word-wrap: break-word;">
                <a href="https://www.google.com/maps?q=${encodeURIComponent(memory.address)}" target="_blank">${memory.address}</a>
            </p>
        </div>
        `;

    return {
      id: memory.id,
      latitude,
      longitude,
      popupContent,
    };
  });
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        center.value = [position.coords.latitude, position.coords.longitude];
        userLocationMarker.latLng = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        if (map.value && map.value.leafletObject) {
          map.value.leafletObject.setView(center.value, zoom.value);
        }
        if (!userLocationMarker.icon) {
          if (isIconLoaded) {
            userLocationMarker.icon = userIcon;
          }
        }
      },
      (error) => {
        console.error(`Error getting user's location:`, error);
        userLocationMarker.latLng = null;
      },
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
    userLocationMarker.latLng = null;
  }
}
</script>

<style scoped>
.btn {
  color: var(--white-color);
  background-color: var(--header-bg);
  cursor: pointer;
  margin-right: 20px;
}

:deep(.leaflet-popup-content p) {
  margin: 0 !important;
}

:deep(.leaflet-popup-content) {
  margin: 0 0 10px 0 !important;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 0 !important;
}

.btn:hover {
  background-color: var(--btn-border);
}
</style>
