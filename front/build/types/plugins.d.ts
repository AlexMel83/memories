// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.server.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client.js").default> &
  InjectionType<typeof import("../../node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js").default> &
  InjectionType<typeof import("../../node_modules/@formkit/auto-animate/nuxt/runtime/plugin.mjs").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui/dist/runtime/plugins/slideovers.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui/dist/runtime/plugins/modals.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/ui/dist/runtime/plugins/colors.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/icon/dist/runtime/plugin.js").default> &
  InjectionType<typeof import("../../plugins/01.axios.js").default> &
  InjectionType<typeof import("../../plugins/02.errorHandler.js").default> &
  InjectionType<typeof import("../../plugins/event-bus").default> &
  InjectionType<typeof import("../../plugins/google-recaptcha").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | '@nuxt/icon'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
