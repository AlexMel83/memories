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
    <LMap
      ref="map"
      class="h-full z-[1]"
      :zoom="zoom"
      :max-zoom="19"
      :center="center"
      :use-global-leaflet="true"
      :scroll-wheel-zoom="false"
      :fade-animation="false"
      :marker-zoom-animation="false"
      @ready="onMapReady"
    >
      <l-control-layers position="topright" />
      <LTileLayer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
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

const center = ref([49.230173, 28.447339]);
let markerCoordinates = { lat: 0, lng: 0 };
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
      popupContent,
      latitude,
      longitude,
    };
  });
});

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

if (map.value && map.value.leafletObject) {
  map.value.leafletObject.on('moveend', closeSearchResults);
}

const createSvgIcon = () => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" class="custom-map-pin">
    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
  </svg>
`;

const createCustomIcon = (lat, lng) => {
  const icon = L.divIcon({
    html: createSvgIcon(),
    className: 'custom-div-icon',
    iconAnchor: [17, 35],
    iconSize: [35, 35],
  });
  const marker = L.marker([lat, lng], { icon, draggable: true });
  const popupContent = `<div class="px-1 text-center font-bold">Coordinates: <p>Lat: ${lat}, Lng: ${lng}</p></div>`;
  marker.bindPopup(popupContent, { offset: [0, -14] });
  markerCoordinates = { lat, lng };
  marker.on('moveend', (event) => {
    const newLatLng = event.target.getLatLng();
    const roundedLat = newLatLng.lat.toFixed(4);
    const roundedLng = newLatLng.lng.toFixed(4);
    markerCoordinates = { lat: roundedLat, lng: roundedLng };
    marker.setPopupContent(
      `<div class="px-1 text-center font-bold">Coordinates: <p>Lat: ${roundedLat}, Lng: ${roundedLng}</p></div>`,
    );
  });

  return marker;
};
const plotGeoLocation = (coords) => {
  if (map.value && map.value.leafletObject) {
    geoMarker.value = createCustomIcon(coords.lat, coords.lng).addTo(
      map.value.leafletObject,
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
    map.value.leafletObject.setView(
      [coords.coordinates[1], coords.coordinates[0]],
      zoom.value,
    );
    closeSearchResults();
  }
};

const closeGeoError = () => {
  geoErrorMsg.value = null;
  geoError.value = null;
};

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
