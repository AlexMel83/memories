import axios from 'axios';
import { useAuthStore } from '~/stores/auth.store';

const baseURL = 'https://hub-api.intita.com';
// const baseURL = "http://localhost:4041"

let api;

export const initialDataToken = () => {
  const authStore = useAuthStore();
  api.defaults.headers.Authorization = `Bearer ${authStore.accessToken}`;
};

export const refreshToken = async () => {
  const authStore = useAuthStore();
  try {
    const response = await api.get('/refresh');
    authStore.setAccessToken(response.data.accessToken);
  } catch (error) {
    console.error(error);
    authStore.logOut();
    if (axios.isCancel(error)) {
      throw error;
    }
  }
};

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();

  api = axios.create({
    baseURL,
    headers: {
      Authorization: '',
    },
  });

  api.defaults.withCredentials = true;

  api.interceptors.request.use(async (config) => {
    initialDataToken();
    if (authStore.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    } else {
      config.headers.Authorization = '';
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status == 401 || error.response.status == 403) {
        await refreshToken();
        initialDataToken();
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${authStore.accessToken}`;
        return api(originalRequest);
      }
      return Promise.reject(error);
    },
  );

  return {
    provide: {
      api: api,
    },
  };
});
