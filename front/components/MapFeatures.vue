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
      />
      <!--Search icon-->
      <UIcon
        name="i-heroicons-magnifying-glass-20-solid"
        class="absolute top-0 left-[8px] h-full flex items-center"
      />
      <!--Search result-->
      <div class="absolute mt-2 w-full">
        <!--Result-->
        <div class="h-[200px] overflow-scroll bg-white rounded-md">
          <div
            class="px-4 py-2 flex items-center gap=x-2 cursor-pointer hover:bg-slate-600 hover:text-white"
          >
            <UIcon name="i-heroicons-map-pin-solid" class="w-6 h-6" />
            <p class="text-xs">Testing Result</p>
          </div>
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
export default {
  props: ['coords', 'fetchCoords'],
};
</script>
