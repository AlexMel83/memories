<template>
  <section
    v-if="memories.length > 0"
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
      :max-zoom="19"
      :zoom="zoom"
      @ready="onMapReady"
    >
      <l-control-layers position="topright" />
      <LTileLayer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :attribution="tileProvider.attribution"
        :visible="tileProvider.visible"
        :name="tileProvider.name"
        :url="tileProvider.url"
        layer-type="base"
      />
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
});

const markerCoordinates = ref({ lat: null, lng: null });
const center = ref([49.230173, 28.447339]);
const config = useRuntimeConfig();
const searchResults = ref(null);
const resultMarker = ref(null);
const fetchCoords = ref(null);
const geoErrorMsg = ref(null);
const geoMarker = ref(null);
const geoError = ref(null);
const coords = ref(null);
const map = ref(null);
const zoom = ref(14);

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
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
  },
  {
    name: 'Mapbox satellite',
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'Mapbox hybrid',
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

const markerData = computed(() =>
  props.memories.map((memory) => ({
    id: memory.id,
    ...getCoordinatesFromLocation(memory.location),
    popupContent: createPopupContent(memory),
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

const createPopupContent = (memory) => {
  const photoURL = memory.memory_photos?.[0]?.url
    ? `${memory.memory_photos[0].url.includes('http') ? '' : baseURL}${memory.memory_photos[0].url}`
    : './default-coworking.png';

  return `
    <div class="popup-content" style="text-align: center;">
      <a href="/coworking/${memory.id}" target="_blank">
        <b style="display: block; font-weight: bold; font-size: 130%;">${memory.title}</b>
      </a>
      <p>
        <a href="https://www.google.com/maps?q=${encodeURIComponent(memory.address)}" target="_blank">${memory.address}</a>
      </p>
      <a href="/coworking/${memory.id}" target="_blank">
        <img src="${photoURL}" alt="${memory.title}" style="max-width: 100%; display: block;" />
      </a>
    </div>`;
};

const onMapReady = () => {
  const markers = markerData.value.map((memory) => {
    const marker = L.marker([memory.latitude, memory.longitude]);
    marker.bindPopup(memory.popupContent);
    return marker;
  });

  const markerClusterGroup = L.markerClusterGroup();
  markerClusterGroup.addLayers(markers);
  map.value.leafletObject.addLayer(markerClusterGroup);
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
      lat: newLatLng.lat.toFixed(4),
      lng: newLatLng.lng.toFixed(4),
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

const createSvgIcon = () => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" class="custom-map-pin">
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

const updateMarkers = (memories) => {
  if (map.value?.leafletObject) {
    map.value.leafletObject.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.value.leafletObject.removeLayer(layer);
      }
    });
    const markers = memories.map((memory) => {
      const { latitude, longitude } = getCoordinatesFromLocation(
        memory.location,
      );
      const marker = L.marker([latitude, longitude]).bindPopup(
        createPopupContent(memory),
      );
      return marker;
    });
    const markerClusterGroup = L.markerClusterGroup();
    markerClusterGroup.addLayers(markers);
    map.value.leafletObject.addLayer(markerClusterGroup);
  }
};

watch(
  () => props.memories,
  (newMemories) => {
    updateMarkers(newMemories);
  },
  { deep: true },
);
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
