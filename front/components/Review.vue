<template>
  <v-container>
    <div
      v-if="authUser().role === 'user'"
      class="review-container"
    >
      <h2 class="white-text">
        Залишити відгук
      </h2>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <div class="rating-box">
            <p class="white-text">
              Ваша оцінка
            </p>
            <v-rating
              v-model="rating.value.value"
              length="5"
              color="#AF3800"
              background-color="white"
              active-color="#AF3800"
              large
              :error-messages="rating.errorMessage.value"
            />
            <span
              v-if="rating.errorMessage.value"
              class="error"
            >{{
              rating.errorMessage.value
            }}</span>
          </div>
          <v-text-field
            v-if="!authUser().name"
            v-model="name.value.value"
            label="Ім'я"
            variant="solo"
            dense
            :error-messages="name.errorMessage.value"
          />
          <v-textarea
            v-model="text.value.value"
            label="Текст відгуку"
            variant="solo"
            dense
            :error-messages="text.errorMessage.value"
          />
          <v-btn type="submit">
            Залишити відгук
          </v-btn>
        </v-form>
      </v-card-text>
    </div>
    <div
      v-else
      class="review-container"
    >
      <h2>Відгуки та рейтинг</h2>
      <br>
      <h3 class="text-center text-mob">
        Для оцінки коворкінгу, будь ласка,
        <span @click="openReg">зареєструйтесь.</span>
      </h3>
      <h3 class="text-center text-desk">
        Для оцінки коворкінгу, будь ласка,
        <span @click="openLogin">авторизуйтеся</span>
        або
        <span @click="openReg">зареєструйтесь.</span>
      </h3>
    </div>
    <Login
      v-if="menuLogin"
      :initial-email="email"
      @open-reg-component="changeCompenent"
    />
    <ModalComponents
      :initial-email="email"
      @close-modal="closeModal"
    />
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useForm, useField } from 'vee-validate';
import { useRoute } from 'vue-router';
import ModalComponents from '~/components/modal/ModalComponents.vue';
import Login from '~/components/modal/Login.vue';

const menuLogin = ref('');
const email = ref('');

const bus = useNuxtApp().$bus;
const { $api } = useNuxtApp();
const route = useRoute();
const store = useStore();
const authUser = () => {
  return store.state.authUser;
};

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    rating(value) {
      if (value > 0) return true;
      return 'Оцінка не повинна бути пустою.';
    },
    name(value) {
      if (authUser().name || value?.length >= 2) return true;
      return "Ім'я не повинно бути менше 2-х символів.";
    },
    text(value) {
      if (value?.length >= 5) return true;
      return 'Текст відгуку не повинен бути менше 5-ти символів.';
    },
  },
});

const rating = useField('rating');
const name = useField('name');
const text = useField('text');

const submit = handleSubmit(async ({ rating, text, name }) => {
  try {
    if (name) {
      const response = await $api.put('/users/', {
        id: authUser().id,
        email: authUser().email,
        name,
      });
      store.commit('setUserData', response.data);
    }
    const coworkingId = route.params.id;
    const reviewData = {
      coworkingId,
      rating,
      content: text,
    };
    await $api.post('/reviews', reviewData);
    bus.$emit('refreshReviews');
    handleReset();
  } catch (error) {
    alert('Помилка при відправці відгуку. Спробуйте ще раз.');
    console.error(error);
  }
});

const openLogin = () => {
  if (window.innerWidth > 768) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    bus.$emit('Modal', {
      showLogin: true,
      openModal: true,
    });
  }
};

const openReg = () => {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  bus.$emit('Modal', {
    showRegistration: true,
    openModal: true,
  });
};

const changeCompenent = () => {
  menuLogin.value = !menuLogin.value;
};

const closeModal = () => {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  bus.$emit('Modal', {
    openModal: false,
  });
};
</script>

<style scoped>
.review-container h2 {
  font-size: 32px;
}

.rating-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.rating-box p {
  font-size: 20px;
}

.v-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.v-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.v-btn.v-btn--density-default {
  padding: 8px 12px;
  background-color: var(--btn-hover);
  text-transform: none;
  color: var(--white-color);
  letter-spacing: normal;
  font-size: 18px;
  font-weight: 400;
  height: 38px;
  border-radius: 4px;
  align-self: flex-end;
}

.rating-box span {
  color: #b00020;
  font-size: 12px;
}

.text-center span {
  cursor: pointer;
  color: var(--btn-border);
}

.text-desk {
  display: none;
}

.text-mob {
  display: none;
}

@media (min-width: 768px) {
  .rating-box {
    flex-direction: row;
  }

  .review-container {
    padding: 0 40px;
  }

  .text-mob {
    display: none;
  }

  .text-desk {
    display: block;
  }
}
</style>
