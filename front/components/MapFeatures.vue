<template>
  <div
    class="w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent"
  >
    <!--Search-->
    <div class="relative flex-1 md:min-w-[350px]">
      <input
        class="pl-9 pr-4 py-3 text-sm focus:outline-none w-full shadow-md rounded-md"
        type="text"
        placeholder="Пошук"
        v-model="searchQuery"
        @input="search"
        @focus="$emit('toggleSearchResults')"
      />
      <!--Search icon-->
      <UIcon
        name="i-heroicons-magnifying-glass-20-solid"
        class="absolute top-0 left-[8px] h-full flex items-center"
      />
      <!--Search result-->
      <div class="absolute mt-2 w-full">
        <!--Results-->
        <div
          v-if="searchQuery && searchResults"
          class="max-h-[200px] overflow-y-auto overflow-x-hidden bg-white rounded-md"
        >
          <!--Loading-->
          <LoadingSpinner v-if="!searchData" />
          <div v-else>
            <div
              v-for="(result, index) in searchData"
              :key="index"
              @click="selectResult(result)"
              class="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-600 hover:text-white"
            >
              <UIcon name="i-heroicons-map-pin-solid" class="w-6 h-6" />
              <p class="text-xs">{{ result.place_name_uk }}</p>
            </div>
          </div>
        </div>
        <!--Selected Search Result-->
        <div v-if="selectedResult" class="mt-2 px-3 py-3 bg-white rounded-md">
          <UIcon
            @click="removeResult"
            class="flex justify-end"
            name="i-heroicons-x-mark-20-solid"
          />
          <h1 class="text-lg">{{ selectedResult.text }}</h1>
          <p class="text-xs mb-1">{{ selectedResult.place_name }},</p>
          <p class="text-xs">{{ selectedResult.properties.category }}</p>
        </div>
      </div>
    </div>
    <!--Geolocation-->
    <div
      class="px-2 bg-white flex items-center shadow-md rounded-md min-h-[40px]"
      :class="{ 'bg-slate-600': coords }"
      @click="$emit('getGeoLocation')"
    >
      <UIcon
        name="i-humbleicons:navigation"
        class="text-state-600 text-[30px]"
        :class="{ 'text-white': coords, 'animate-pulse': fetchCoords }"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';
export default {
  props: ['coords', 'fetchCoords', 'searchResults'],
  components: { LoadingSpinner },
  setup(props, { emit }) {
    const searchQuery = ref(null);
    const searchData = ref(null);
    const queryTimeout = ref(null);
    const selectedResult = ref(null);
    const search = () => {
      clearTimeout(queryTimeout.value);
      searchData.value = null;
      queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value !== '') {
          const params = new URLSearchParams({
            fuzzyMatch: true,
            language: 'uk',
            limit: 10,
            proximity: props.coords
              ? `${props.coords.lng},${props.coords.lat}`
              : '0,0',
          });
          const getData = await axios.get(
            `http://localhost:4041/geosearch/${searchQuery.value}?${params}`,
          );
          searchData.value = getData.data.features;
          console.log(searchData.value);
        }
      }, 750);
    };

    const selectResult = (result) => {
      selectedResult.value = result;
      emit('plotResult', result.geometry);
    };

    const removeResult = () => {
      selectedResult.value = null;
      emit('removeResult');
    };
    return {
      searchQuery,
      searchData,
      queryTimeout,
      search,
      selectResult,
      selectedResult,
      removeResult,
    };
  },
};
</script>
