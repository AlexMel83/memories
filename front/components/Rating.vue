<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
});
const getStarColor = (index, rating) => {
  const fullStars = Math.floor(rating);
  const percentage = ((rating - fullStars) * 100).toFixed(2);

  if (index <= fullStars) {
    return '#f5b301';
  }
  if (index === fullStars + 1 && rating > fullStars) {
    return `linear-gradient(to right, #f5b301 ${percentage}%, #d3d3d3 ${100 - percentage}%)`;
  }
  return '#d3d3d3';
};
</script>

<template>
  <div class="rating">
    <div class="stars">
      <UIcon
        v-for="n in 5"
        :key="n"
        name="i-heroicons-star-solid"
        class="star-icon"
        :style="{
          backgroundImage:
            n === Math.floor(props.rating) + 1 &&
            props.rating > Math.floor(props.rating)
              ? getStarColor(n, props.rating)
              : 'none',
          color:
            n <= Math.floor(props.rating) ||
            (n === Math.floor(props.rating) + 1 &&
              props.rating > Math.floor(props.rating))
              ? getStarColor(n, props.rating)
              : '#d3d3d3',
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.rating {
  position: absolute;
  right: 0px;
  top: 20px;
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(5px);
}
</style>
