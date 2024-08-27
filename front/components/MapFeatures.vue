<template>
  <div
    class="w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent"
  >
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
