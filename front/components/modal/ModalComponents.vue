<template>
  <div v-if="modal" class="modal-registration-wrapper" @click.self="closeModal">
    <div class="registration">
      <button class="close" @click="closeModal">
        <img src="~/assets/icon_close_modal.png" alt="close" />
      </button>
      <Registration v-if="openRegistration" />
      <Login v-if="openLogin" :initial-email="initialEmail" />
      <LoginRegistration
        v-if="openLoginRegistration"
        :isOpen="isLoginModalOpen"
        @update:isOpen="isLoginModalOpen = $event"
      />
      <p>{{ textModalMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import Registration from '~/components/modal/Registration.vue';
import Login from '~/components/modal/Login.vue';
import LoginRegistration from '~/components/modal/LoginRegistration.vue';
import { useAuthStore } from '@/stores/auth.store.ts';

defineProps({
  initialEmail: {
    type: String,
    default: '',
  },
});

const store = useAuthStore();
const emit = defineEmits(['closeModal']);

// Переменные состояния модального окна
const modal = ref(false);
const openLoginRegistration = ref(false);
const openRegistration = ref(false);
const openLogin = ref(false);
const textModalMessage = ref('');
const isLoginModalOpen = ref(false);

// Работа с глобальной шиной событий
const bus = useNuxtApp().$bus;
bus.$on('Modal', (data) => {
  modal.value = data.openModal;
  openRegistration.value = data.showRegistration;
  openLogin.value = data.showLogin;
  openBook.value = data.showBook;
  openBookSpace.value = data.showBookSpace;
  textModalMessage.value = data.textModalMessage;
  openLoginRegistration.value = data.showLoginRegistration;
});

// Метод закрытия модального окна
function closeModal() {
  emit('closeModal');
  document.body.style.position = '';
  bus.$emit('Modal', { openModal: false });
}

const openModal = () => {
  isLoginModalOpen.value = true;
};
</script>

<style scoped>
.modal-registration-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background-color: var(--background-modal);
}

.registration {
  min-width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 0px 32px 0px;
}

.registration .close {
  position: absolute;
  background-color: transparent;
  top: 25px;
  right: 25px;
  width: 23px;
}
.registration .close:focus {
  border: none;
}

.modal-registration-wrapper .registration p {
  margin: 20px;
  text-align: center;
}
</style>
