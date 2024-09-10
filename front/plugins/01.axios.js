import axios from 'axios';
import { useAuthStore } from '~/stores/auth.store';
import apiModule from '../api/index.ts';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  let baseURL;
  if (process.client) {
    if (window.location.hostname === 'memory.pp.ua') {
      baseURL = 'https://api.' + window.location.hostname;
    } else {
      baseURL = config.public.apiBase || 'http://localhost:4040';
    }
  } else {
    baseURL = config.public.apiBase || 'http://localhost:4040';
  }

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
