<template>
  <section
    v-if="memories.length > 0 || panoramas.length > 0"
    class="mapsection h-96 relative"
    name="image-map"
  >
    <modal-geo-error
      v-if="geoError"
      :geo-error-msg="geoErrorMsg"
      @close-geo-error="closeGeoError"
    />
    <map-features
      :search-results="searchResults || false"
      :fetch-coords="fetchCoords || false"
      :coords="coords || {}"
      @toggle-search-results="toggleSearchResults"
      @get-geo-location="getGeoLocation"
      @remove-result="removeResult"
      @plot-result="plotResult"
    />
    <LMap
      ref="map"
      class="z-[1]"
      :marker-zoom-animation="false"
      :use-global-leaflet="true"
      :scroll-wheel-zoom="false"
      :fade-animation="false"
      :center="center"
      :zoom="zoom"
      @ready="onMapReady"
    >
      <l-control position="topright">
        <div
          class="absolute top-2 right-2 z-[1000] bg-white p-4 rounded shadow-lg"
        >
          <label>
            <input v-model="showMemoryMarkers" type="checkbox" />
            Спогади
          </label>
          <br />
          <label>
            <input v-model="showPanoramaMarkers" type="checkbox" />
            Панорами
          </label>
        </div>
      </l-control>
      <l-control-layers position="bottomleft" />
      <LTileLayer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :attribution="tileProvider.attribution"
        :max-zoom="20 || tileProvider.maxZoom"
        :min-zoom="3 || tileProvider.minZoom"
        :max-native-zoom="18 || tileProvider.maxNativeZoom"
        :min-native-zoom="3 || tileProvider.minNativeZoom"
        :visible="false || tileProvider.visible"
        :name="tileProvider.name"
        :url="tileProvider.url"
        layer-type="base"
      />
      <LControlScale position="bottomright" :imperial="false" :metric="true" />
    </LMap>
  </section>
</template>

<script setup>
import L from 'leaflet';
import 'leaflet.markercluster';

const props = defineProps({
  memories: {
    type: Array,
    default: () => [],
  },
  panoramas: {
    type: Array,
    default: () => [],
  },
});

const markerCoordinates = ref({ lat: null, lng: null });
const center = ref([48.1304779, 37.7444687]);
const markerClusterGroup = ref(null);
const showPanoramaMarkers = ref(true);
const showMemoryMarkers = ref(true);
const config = useRuntimeConfig();
const searchResults = ref(null);
const resultMarker = ref(null);
const fetchCoords = ref(null);
const geoErrorMsg = ref(null);
const geoMarker = ref(null);
const geoError = ref(null);
const coords = ref(null);
const map = ref(null);
const zoom = ref(15);

const mapboxApiKey = config.public.apiKeyMapbox;
const baseURL = config.public.apiBase;

const tileProviders = ref([
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'ArcGIS satellite',
    visible: false,
    maxZoom: 22,
    minZoom: 3,
    minNativeZoom: 3,
    maxNativeZoom: 18,
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
  },
  {
    name: 'Mapbox satellite',
    visible: false,
    maxZoom: 19,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'Mapbox hybrid',
    visible: false,
    maxZoom: 19,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    maxZoom: 18,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
]);

const markerMemoryData = computed(() =>
  props.memories.map((memory) => ({
    id: memory.id,
    ...getCoordinatesFromLocation(memory.location),
    popupContent: createMemoryPopupContent(memory),
  })),
);

const markerPanoramaData = computed(() =>
  props.panoramas.map((panorama) => ({
    id: panorama.id,
    latitude: panorama.latitude,
    longitude: panorama.longitude,
    address: panorama.address,
    title: panorama.title,
    thumbnail_url: panorama.thumbnail_url,
  })),
);

const getCoordinatesFromLocation = (location) => {
  const regex = /POINT\(([^ ]+) ([^ ]+)\)/;
  const match = location ? location.match(regex) : null;
  return {
    longitude: match ? parseFloat(match[1]) : 0,
    latitude: match ? parseFloat(match[2]) : 0,
  };
};

const createMemoryPopupContent = (memory) => {
  const photoURL = memory.memory_photos?.[0]?.url
    ? `${memory.memory_photos[0].url.includes('http') ? '' : baseURL}${memory.memory_photos[0].url}`
    : './default-memory.png';

  return `
    <div class="popup-content" style="text-align: center;">
      <a href="/memories/${memory.memory_id}">
        <b style="display: block; font-weight: bold; font-size: 130%;">${memory.title}</b>
      </a>
      <p>
        <a href="https://www.google.com/maps?q=${encodeURIComponent(memory.address)}" target="_blank">${memory.address}</a>
      </p>
      <a href="/memories/${memory.memory_id}">
        <img src="${photoURL}" alt="${memory.title}" style="max-width: 100%; display: block;" />
      </a>
    </div>`;
};

const createPanoramaPopupContent = (panorama) => {
  const photoURL = panorama.thumbnail_url
    ? panorama.thumbnail_url
    : './default-memory.png';
  const address = panorama.address
    ? `<p><a href="https://www.google.com/maps?q=${encodeURIComponent(panorama.address)}" target="_blank">${panorama.address}</a></p>`
    : '';

  return `
    <div class="popup-content" style="text-align: center;">
      <a href="/panoramas/${panorama.memory_id}">
        <b style="display: block; font-weight: bold; font-size: 130%;">${panorama.title}</b>
      </a>
      ${address}
      <a href="/panoramas/${panorama.id}">
        <img src="${photoURL}" alt="${panorama.title}" style="max-width: 100%; display: block;" />
      </a>
    </div>`;
};

const onMapReady = () => {
  if (!map.value?.leafletObject) return;
  markerClusterGroup.value = L.markerClusterGroup();
  updateMarkers();
  map.value.leafletObject.addLayer(markerClusterGroup.value);
};

const plotGeoLocation = (coords) => {
  if (map.value?.leafletObject) {
    geoMarker.value = createCustomIcon(coords.lat, coords.lng).addTo(
      map.value.leafletObject,
    );
    geoMarker.value.bindPopup(
      `<p class="text-center">your coordinates:</p><p class="text-center px-1">Lat: ${coords.lat}, Lng: ${coords.lng}</p>`,
      {
        offset: [0, -20],
      },
    );
    map.value.leafletObject.setView([coords.lat, coords.lng], zoom.value);
  }
};

const plotResult = (coords) => {
  if (resultMarker.value && map.value?.leafletObject) {
    map.value.leafletObject.removeLayer(resultMarker.value);
  }
  if (map.value?.leafletObject) {
    resultMarker.value = createCustomIcon(
      coords.coordinates[1],
      coords.coordinates[0],
    ).addTo(map.value.leafletObject);
    resultMarker.value.bindPopup(
      createCoordinatesPopupContent({
        lat: coords.coordinates[1].toFixed(4),
        lng: coords.coordinates[0].toFixed(4),
      }),
      {
        offset: [0, -20],
      },
    );
    map.value.leafletObject.setView(
      [coords.coordinates[1], coords.coordinates[0]],
      zoom.value,
    );
    closeSearchResults();
  }
};

const createCustomIcon = (lat, lng) => {
  const icon = L.divIcon({
    html: createSvgIcon(),
    className: 'custom-div-icon',
    iconAnchor: [17, 35],
    iconSize: [35, 35],
  });
  const marker = L.marker([lat, lng], { icon, draggable: true });
  markerCoordinates.value = { lat, lng };
  marker.on('moveend', (event) => {
    const newLatLng = event.target.getLatLng();
    markerCoordinates.value = {
      lat: newLatLng.lat.toFixed(7),
      lng: newLatLng.lng.toFixed(7),
    };
    marker.setPopupContent(
      createCoordinatesPopupContent(markerCoordinates.value),
      {
        offset: [0, -20],
      },
    );
  });

  return marker;
};

const createSvgIcon = (color = '#ef4444') => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" class="custom-map-pin">
    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
  </svg>
`;

const createCoordinatesPopupContent = ({ lat, lng }) =>
  `<div class="px-1 text-center font-bold">Coordinates: <p>Lat: ${lat}, Lng: ${lng}</p></div>`;

const closeGeoError = () => {
  geoErrorMsg.value = null;
  geoError.value = null;
};

if (map.value && map.value.leafletObject) {
  map.value.leafletObject.on('moveend', closeSearchResults);
}

const getGeoLocation = () => {
  if (coords.value) {
    resetCoords();
  } else if (sessionStorage.getItem('coords')) {
    setCoordsFromSession();
  } else {
    requestGeoLocation();
  }
};

const resetCoords = () => {
  coords.value = null;
  sessionStorage.removeItem('coords');
  map.value?.leafletObject?.removeLayer(geoMarker.value);
};

const setCoordsFromSession = () => {
  coords.value = JSON.parse(sessionStorage.getItem('coords'));
  plotGeoLocation(coords.value);
};

const requestGeoLocation = () => {
  fetchCoords.value = true;
  navigator.geolocation.getCurrentPosition(setCoords, handleGeoError);
};

const setCoords = (position) => {
  fetchCoords.value = null;
  coords.value = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  sessionStorage.setItem('coords', JSON.stringify(coords.value));
  plotGeoLocation(coords.value);
};

const handleGeoError = (error) => {
  geoErrorMsg.value = error.message;
  geoError.value = true;
  fetchCoords.value = null;
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
    resultMarker.value = null;
  }
};

const updateMarkers = () => {
  if (!map.value?.leafletObject || !markerClusterGroup.value) return;

  markerClusterGroup.value.clearLayers();

  if (showMemoryMarkers.value) {
    const memoryMarkers = markerMemoryData.value.map((memory) => {
      const marker = L.marker([memory.latitude, memory.longitude]);
      marker.bindPopup(memory.popupContent);
      return marker;
    });
    markerClusterGroup.value.addLayers(memoryMarkers);
  }

  if (showPanoramaMarkers.value) {
    const panoramaMarkers = markerPanoramaData.value.map((panorama) => {
      const icon = L.divIcon({
        html: createSvgIcon('#0000ff'),
        className: 'custom-div-icon',
        iconAnchor: [16, 32],
        iconSize: [32, 32],
      });

      const marker = L.marker([panorama.latitude, panorama.longitude], {
        icon: icon,
      });

      marker.bindPopup(createPanoramaPopupContent(panorama));
      return marker;
    });
    markerClusterGroup.value.addLayers(panoramaMarkers);
  }
};

watch(
  () => [
    showMemoryMarkers.value,
    showPanoramaMarkers.value,
    props.memories,
    props.panoramas,
  ],
  () => {
    updateMarkers();
  },
  { deep: true },
);

onMounted(() => {
  if (map.value?.leafletObject) {
    onMapReady();
  }
});
</script>

<style scoped>
.custom-div-icon {
  background: none;
  border: none;
}

.custom-map-pin {
  width: 35px;
  height: 35px;
}

.btn {
  color: var(--white-color);
  background-color: var(--header-bg);
  cursor: pointer;
  margin-right: 20px;
}

:deep(.leaflet-popup-content p) {
  margin: 0 !important;
  min-width: 200px !important;
  min-width: 200px !important;
}

:deep(.leaflet-popup-content) {
  margin: 0 0 10px 0 !important;
  min-width: 200px !important;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 0 !important;
  min-width: 200px !important;
  max-width: 300px;
}

.btn:hover {
  background-color: var(--btn-border);
}
</style>
