<template>
  <div class="container-user-auth-name">
    <div class="item main-user-auth-name">
      <span> {{ userName }}</span> &nbsp;<span>{{ userSurname }}</span>
    </div>
    <div
      class="item cabinet"
      :class="{ active: isInCabinet }"
    >
      <a :href="setRout()">
        <span
          class="flex items-center"
          @click="menuOpen = false"
        >
          <UIcon
            name="i-heroicons-user-solid"
            class="icon"
          />Кабінет</span>
      </a>
    </div>
    <div class="item exit">
      <nuxt-link href="/">
        <span
          class="flex items-center"
          @click="goOut"
        >
          <UIcon
            name="i-heroicons-arrow-right-start-on-rectangle-solid"
            class="icon"
          />Вихід</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store.ts';
import { useRoute } from 'vue-router';

const store = useAuthStore();
const route = useRoute();
const menuOpen = ref(false);

const authUser = inject('authUser');
const isUserDataReady = inject('isUserDataReady');

const userRole = computed(() => store.userRole);
const userName = ref('');
const userSurname = ref('');
watchEffect(() => {
  if (isUserDataReady.value && authUser.value) {
    const userData =
      typeof authUser.value === 'string'
        ? JSON.parse(authUser.value)
        : authUser.value;

    userName.value = userData.user.name;
    userSurname.value = userData.user.surname;
  }
});

const isInCabinet = computed(() => {
  const currentPath = route.path;
  return (
    currentPath.startsWith('/manager') ||
    currentPath.startsWith('/user') ||
    currentPath.startsWith('/admin')
  );
});

const setRout = () => {
  if (userRole.value === 'manager') {
    return '/manager/coworking';
  } else if (userRole.value === 'user') {
    return '/user';
  } else if (userRole.value === 'admin') {
    return '/admin';
  }
};

const goOut = () => {
  menuOpen.value = false;
  store.logOut();
};
</script>

<style scoped>
.container-user-auth-name {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
}

.main-user-auth-name {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.icon {
  margin-right: 5px;
  width: 24px;
  height: 24px;
}

img {
  margin-right: 5px;
}

.cabinet:hover,
.exit:hover {
  transform: scale(1.1);
}

.item.active {
  display: none;
}

@media (min-width: 768px) {
  .container-user-auth-name {
    flex-direction: row;
    align-items: center;
  }
}
</style>
