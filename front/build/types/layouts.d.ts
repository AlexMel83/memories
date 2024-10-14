import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "404" | "default" | "footers-footer-main" | "headers-header-auth-users" | "headers-header-main" | "headers-user-name" | "menu-auth-users-admin-menu" | "menu-auth-users-manager-menu" | "menu-auth-users-user-menu"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}