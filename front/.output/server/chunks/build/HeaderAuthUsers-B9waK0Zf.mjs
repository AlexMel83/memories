import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as _imports_0, a as _sfc_main$1 } from './favicon-BzH-OJLC.mjs';
import { _ as __nuxt_component_2 } from './Button-CVML3TA3.mjs';
import { _ as __nuxt_component_2$1 } from './Icon-DAERXBl-.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, e as useAuthStore } from './server.mjs';
import UserName from './UserName-BO_eQMyZ.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'tailwind-merge';
import './index-BIbsiujd.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@formkit/auto-animate/vue';
import '@vueuse/core';
import 'axios';
import 'mitt';
import 'vue-recaptcha-v3';

const _sfc_main = {
  __name: "HeaderAuthUsers",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useAuthStore();
    const route = useRoute();
    const isHomePage = computed(() => route.path === "/");
    const isMenuOpen = computed(() => store.menuOpen);
    const toggleMenu = () => {
      store.menuOpen = !store.menuOpen;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ColorMode = _sfc_main$1;
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "header-main": true, "home-page": unref(isHomePage) }
      }, _attrs))} data-v-2ce0e295><div class="header-wrapper px-2 pt-2" data-v-2ce0e295><div class="logo-container" data-v-2ce0e295><div class="cursor-pointer logo" data-v-2ce0e295>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-10 h-10" data-v-2ce0e295${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "w-10 h-10"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header-buttons" data-v-2ce0e295><div class="auth-user-name" data-v-2ce0e295>`);
      _push(ssrRenderComponent(UserName, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ColorMode, null, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "",
        class: "burger",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(isMenuOpen)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                key: "bars",
                name: "i-heroicons-bars-3",
                class: "icon w-10 h-10"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-x-mark",
                class: "icon w-10 h-10"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !unref(isMenuOpen) ? (openBlock(), createBlock(_component_UIcon, {
                key: "bars",
                name: "i-heroicons-bars-3",
                class: "icon w-10 h-10"
              })) : (openBlock(), createBlock(_component_UIcon, {
                key: 1,
                name: "i-heroicons-x-mark",
                class: "icon w-10 h-10"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(isMenuOpen)) {
        _push(`<div class="menu" data-v-2ce0e295><div class="mobile-auth-user-name" data-v-2ce0e295>`);
        _push(ssrRenderComponent(UserName, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="mt-6 text-center text-gray-200 header-text" data-v-2ce0e295><span class="font-bold" data-v-2ce0e295>\u041C\u0430\u043F\u0430 \u043F\u0430\u043C&#39;\u044F\u0442\u0456:</span> \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u0442\u0430 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0441\u0442\u0456 </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderAuthUsers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderAuthUsers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ce0e295"]]);

export { HeaderAuthUsers as default };
//# sourceMappingURL=HeaderAuthUsers-B9waK0Zf.mjs.map
