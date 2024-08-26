import axios from 'axios';
import { useAuthStore } from '~/stores/auth.store';
import apiModule from '../api/index.ts';

// const baseURL = 'https://hub-api.intita.com';
// const baseURL = "http://localhost:4041"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase || 'https://hub-api.intita.com';

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: '',
    },
    withCredentials: true,
  });

  const api = apiModule(axiosInstance);

  const initialDataToken = () => {
    const authStore = useAuthStore();
    axiosInstance.defaults.headers.Authorization = `Bearer ${authStore.accessToken}`;
  };

  const refreshToken = async () => {
    const authStore = useAuthStore();
    try {
      const response = await api.auth.refresh(authStore.refreshToken);
      authStore.setAccessToken(response.data.accessToken);
    } catch (error) {
      console.error(error);
      authStore.logOut();
      if (axios.isCancel(error)) {
        throw error;
      }
    }
  };

  axiosInstance.interceptors.request.use(async (config) => {
    initialDataToken();
    const authStore = useAuthStore();
    if (authStore.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    } else {
      config.headers.Authorization = '';
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        await refreshToken();
        initialDataToken();
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${useAuthStore().accessToken}`;
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    },
  );

  nuxtApp.provide('api', api);
});
