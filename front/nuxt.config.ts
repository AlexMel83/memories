import 'dotenv/config';
import * as path from 'path';

export default defineNuxtConfig({
  buildDir: path.resolve(__dirname, './build'),
  plugins: [
    '~/plugins/01.axios',
    '~/plugins/02.errorHandler.js',
    '~/plugins/google-maps.js',
  ],

  devtools: { enabled: true },

  css: [
    'leaflet.markercluster/dist/MarkerCluster.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/src/tailwind.css',
    '~/assets/src/styles.css',
  ],

  modules: [
    "@nuxt/ui",
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode', 
    '@nuxtjs/leaflet',
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  leaflet: {
    markerCluster: true
  },
  app: {
    head: {
      title: 'Memories',
      meta: [
        { name: 'description', content: 'The project aims to collect and preserve the memories of residents of cities that suffered from the military aggression of the Russian Federation. It also creates a database of housing destruction to provide an evidence base for the registers of damage caused by this aggression.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=', crossorigin: '' },
      ],
      script: [
      ],
    }
  },
  colorMode: {
    preference: 'light'
  },

  runtimeConfig: {
    public: {
      apiKeyMapbox: process.env.APIKEY_MAPBOX,
      apiBase: process.env.API_BASE || 'https://api.memory.pp.ua',
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      isDocker: process.env.NUXT_PUBLIC_IS_DOCKER || 'false',
    },
    private: {
      // Значения здесь доступны только на стороне сервера
    },
  },
  devServer: {
    port: parseInt(process.env.NUXT_PORT as string, 10) || 3000,
    host: process.env.NUXT_HOST || '0.0.0.0',
  },
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        host: 'memory.pp.ua',
        port: parseInt(process.env.NUXT_PORT as string, 10) || 3000,
      },
    },
  },
  compatibilityDate: '2024-08-13',
});
