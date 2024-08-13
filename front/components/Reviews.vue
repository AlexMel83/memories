<template>
  <div class="reviews-container" v-if="allReviews.length > 0">
    <v-container>
      <div class="ratings-distribution">
        <div v-for="n in [5, 4, 3, 2, 1]" :key="n" class="rating-distribution">
          <div class="star-box">{{ n }} <i class="mdi mdi-star"></i></div>
          <div class="bar">
            <div class="filled" :style="{ width: ratingsDistribution[n] + '%' }"></div>
          </div>
          <div class="percentage">{{ Math.round(ratingsDistribution[n]) }}%</div>
        </div>
      </div>

      <div class="sort">
        <v-select
          label="Сортувати за"
          :items="['За датою', 'За рейтингом']"
          v-model="sortBy"
          @change="sortReviews"
          variant="outlined"
        ></v-select>

        <v-select
          v-if="sortBy === 'За датою'"
          label="За датою"
          :items="['Спочатку нові', 'Спочатку старі']"
          v-model="sortDate"
          @change="sortReviews"
          variant="outlined"
        ></v-select>

        <v-select
          v-if="sortBy === 'За рейтингом'"
          label="За рейтингом"
          :items="['По зростанню', 'По спаданню']"
          v-model="sortRating"
          @change="sortReviews"
          variant="outlined"
        ></v-select>
      </div>

      <div v-for="review in sortedReviews" :key="review.id" class="review flex">
        <p class="review-name">{{ review.name }}</p>
        <div class="review-info">
          <div class="review-data flex">
            <p>
              <v-rating
                v-model="review.rating"
                length="5"
                color="#AF3800"
                background-color="white"
                active-color="#AF3800"
                readonly
                size="small"
                density="comfortable"
              ></v-rating>
            </p>
            <p class="review-date">{{ formatDate(review.updated_at) }}</p>
          </div>
          <p>{{ review.content }}</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
import useFallbackReviews from '@/mixins/useFallbackReviews'; 

const route = useRoute();
const bus = useNuxtApp().$bus;
const { $api } = useNuxtApp();
const reviews = ref([]);
const sortBy = ref('За датою'); 
const sortDate = ref('Спочатку нові'); 
const sortRating = ref('По зростанню'); 

const { getFallbackReviews } = useFallbackReviews();

onMounted(async () => {
  await fetchReviews();
  bus.$on('refreshReviews', fetchReviews);
});

const fetchReviews = async () => {
  try {
    const coworkingId = route.params.id;
    const response = await $api.get("/reviews?coworkingId=" + coworkingId);
    reviews.value = response.data.length > 0 ? response.data : getFallbackReviews(coworkingId);
    emitAverageRating();
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

const averageRating = computed(() => {
  if (reviews.value.length === 0) return 0;
  const totalRating = reviews.value.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviews.value.length).toFixed(1);
});

const emitAverageRating = () => {
  bus.$emit('averageRatingUpdated', averageRating.value);
};

const ratingsDistribution = computed(() => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.value.forEach(review => {
    distribution[review.rating]++;
  });
  const totalReviews = reviews.value.length;
  for (const rating in distribution) {
    distribution[rating] = ((distribution[rating] / totalReviews) * 100);
  }
  return distribution;
});

const sortedReviews = computed(() => {
  let sorted = [...reviews.value];

  if (sortBy.value === 'За датою') {
    if (sortDate.value === 'Спочатку нові') {
      sorted = sorted.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    } else if (sortDate.value === 'Спочатку старі') {
      sorted = sorted.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
    }
  } else if (sortBy.value === 'За рейтингом') {
    if (sortRating.value === 'По зростанню') {
      sorted = sorted.sort((a, b) => a.rating - b.rating);
    } else if (sortRating.value === 'По спаданню') {
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    }
  }

  return sorted;
});

watch([sortBy, sortDate, sortRating], () => {
  sortReviews();
});

const sortReviews = () => {
  sortedReviews.value; 
};

const allReviews = computed(() => reviews.value.length > 0 ? reviews.value : getFallbackReviews(route.params.id));
</script>



<style scoped>
.v-container {
  max-width: 1168px;
  margin: 0 auto;
  padding: 40px 0px;
}

.review {
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
  flex-direction: column;
  gap: 20px;
}

.review-date {
  opacity: 0.6;
  font-size: 14px;
}

.flex {
  display: flex;
  gap: 20px;
}

.review-name {
  font-size: 20px;
  min-width: 120px;
}

.review-data {
  align-items: center;
  margin-bottom: 20px;
}

.reviews-container {
  padding: 20px;
}

.average-rating {
  margin-bottom: 20px;
}

.ratings-distribution {
  margin-bottom: 20px;
}

.rating-distribution {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.star-box {
  background-color: #ccc;
  padding: 5px 10px;
  color: var(--header-bg);
  border-radius: 8px;
}

.mdi-star {
  color: #AF3800;
}

.bar {
  flex: 1;
  height: 16px;
  background-color: #ccc;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  border-radius: 4px;
}

.filled {
  height: 100%;
  background-color: var(--btn-border);
  border-radius: 4px;
}

.percentage {
  width: 40px;
  font-size: 20px;
}

.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 60px;
  max-width: 600px;
}

.v-select .v-field.v-field {
  width: 200px;
}

@media (min-width: 768px) {
  .review {
    flex-direction: row;
    padding: 40px 0;  
    align-items: center;
  }

  .reviews-container {
    padding: 0px 64px;
  }
}

</style>
