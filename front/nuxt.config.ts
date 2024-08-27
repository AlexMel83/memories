import 'dotenv/config';

export default defineNuxtConfig({
  plugins: [
    '~/plugins/01.axios',
    '~/plugins/02.errorHandler.js',
    { src: '~/plugins/leaflet.client.js', mode: 'client' },
  ],

  devtools: { enabled: true },

  css: [
    '~/assets/src/tailwind.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/src/styles.css',
  ],

  modules: [
    '@formkit/auto-animate/nuxt',
    "@nuxt/ui",
    "@nuxt/image",
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode', 
    "@pinia/nuxt",
  ],
  app: {
    head: {
      title: 'Memories',
      meta: [
        { name: 'description', content: 'The project aims to collect and preserve the memories of residents of cities that suffered from the military aggression of the Russian Federation. It also creates a database of housing destruction to provide an evidence base for the registers of damage caused by this aggression.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=', crossorigin: '' }
      ],
    }
  },
  colorMode: {
    preference: 'light'
  },

  runtimeConfig: {
    public: {
      apiKeyMapbox: process.env.APIKEY_MAPBOX,
      apiBase: process.env.API_BASE || 'http://localhost:3000',
    },
    private: {
      // Значения здесь доступны только на стороне сервера
    },
  },

  compatibilityDate: '2024-08-13',
});
