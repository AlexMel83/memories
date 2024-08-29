<template>
  <section
    v-if="memories.length > 0"
    class="mapsection h-screen relative"
    name="image-map"
  >
    <modal-geo-error
      v-if="geoError"
      :geo-error-msg="geoErrorMsg"
      @close-geo-error="closeGeoError"
    />
    <map-features
      :coords="coords"
      :fetch-coords="fetchCoords"
      :search-results="searchResults"
      @get-geo-location="getGeoLocation"
      @plotResult="plotResult"
      @toggleSearchResults="toggleSearchResults"
      @removeResult="removeResult"
    />
    <span v-if="userLocationMarker.latLng && userLocationMarker.icon">
      {{ userLocationMarker?.latLng[0] }}, {{ userLocationMarker?.latLng[1] }}
    </span>
    <l-map
      ref="map"
      class="h-full z-[1]"
      :zoom="zoom"
      :center="center"
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
import customIconLocationUrl from '@/public/location-icon.ico';
import {
  LMap,
  LTileLayer,
  LControlLayers,
  LMarker,
  LPopup,
} from '@vue-leaflet/vue-leaflet';

const coords = ref(null);
const fetchCoords = ref(null);
const geoMarker = ref(null);
const resultMarker = ref(null);
const searchResults = ref(null);
const geoError = ref(null);
const geoErrorMsg = ref(null);

const closeGeoError = () => {
  geoError.value = null;
  geoErrorMsg.value = null;
};

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
let userIcon = null;
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
  {
    name: 'ESRI ArcGIS Imagery',
    visible: false,
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
  },
]);

const getGeoLocation = () => {
  if (coords.value) {
    coords.value = null;
    sessionStorage.removeItem('coords');
    if (map.value && map.value.leafletObject && geoMarker.value) {
      map.value.leafletObject.removeLayer(geoMarker.value);
    }
    return;
  }
  if (sessionStorage.getItem('coords')) {
    coords.value = JSON.parse(sessionStorage.getItem('coords'));
    plotGeoLocation(coords.value);
    return;
  }
  fetchCoords.value = true;
  navigator.geolocation.getCurrentPosition(setCoords, getLocError);
};

const setCoords = (position) => {
  fetchCoords.value = null;
  const setSessionCoords = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  sessionStorage.setItem('coords', JSON.stringify(setSessionCoords));
  coords.value = setSessionCoords;
  plotGeoLocation(coords.value);
};

const getLocError = (error) => {
  fetchCoords.value = null;
  geoError.value = true;
  geoErrorMsg.value = error.message;
};

const plotGeoLocation = (coords) => {
  const customMarker = L.icon({
    iconUrl: customIconLocationUrl,
    iconSize: [35, 35],
  });
  if (map.value && map.value.leafletObject) {
    geoMarker.value = L.marker([coords.lat, coords.lng], {
      icon: customMarker,
    }).addTo(map.value.leafletObject); // Используем leafletObject
    map.value.leafletObject.setView([coords.lat, coords.lng], zoom.value); // Устанавливаем вид на карте
  }
};

const plotResult = (coords) => {
  if (resultMarker.value && map.value?.leafletObject) {
    map.value.leafletObject.removeLayer(resultMarker.value);
  }
  const customMarker = L.icon({
    iconUrl: customIconLocationUrl,
    iconSize: [35, 35],
  });
  if (map.value?.leafletObject) {
    resultMarker.value = L.marker(
      [coords.coordinates[1], coords.coordinates[0]],
      {
        icon: customMarker,
      },
    ).addTo(map.value.leafletObject);
    map.value.leafletObject.setView(
      [coords.coordinates[1], coords.coordinates[0]],
      zoom.value,
    );
    closeSearchResults();
  }
};

const toggleSearchResults = () => {
  searchResults.value = !searchResults.value;
};

const closeSearchResults = () => {
  searchResults.value = null;
};

const removeResult = () => {
  if (resultMarker.value && map.value?.leafletObject) {
    map.value.leafletObject.removeLayer(resultMarker.value);
  }
};

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

    getGeoLocation();

    if (map.value && map.value.leafletObject) {
      map.value.leafletObject.on('moveend', closeSearchResults);
    }
  }
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
            <b style="display: block; margin-top: 3px; font-weight: bold; font-size: 130%;">${memory.title}</b>
          </a>
          <p class="px-2" style="word-wrap: break-word;">
              <a href="https://www.google.com/maps?q=${encodeURIComponent(memory.address)}" target="_blank">${memory.address}</a>
          </p>
          <a href="/coworking/${memory.id}" target="_blank" style="word-wrap: break-word; text-decoration: none;">
              <img src="${photoURL}" loading="lazy" alt="${memory.title}" style="max-width: 100%; height: auto; display: block; margin: auto;" />
          </a>
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
