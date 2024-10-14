import { _ as _export_sfc, b as navigateTo } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
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
import 'vue-router';
import '@formkit/auto-animate/vue';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'axios';
import 'mitt';
import 'vue-recaptcha-v3';

const _sfc_main = {
  computed: {
    user() {
      return this.$store.state.user;
    },
    activeTab() {
      return this.$store.state.activeTabAuthUserMenu;
    }
  },
  methods: {
    goTo(to) {
      navigateTo(to);
      this.$store.state.menuOpen = !this.$store.state.menuOpen;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-07bd53a2><button class="${ssrRenderClass([{ active: $options.activeTab === "profileActive" }, "btn"])}" data-v-07bd53a2> \u041F\u0440\u043E\u0444\u0456\u043B\u044C </button><button class="${ssrRenderClass([{ active: $options.activeTab === "favoriteActive" }, "btn"])}" data-v-07bd53a2> \u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456 </button><button class="${ssrRenderClass([{ active: $options.activeTab === "historyActive" }, "btn"])}" data-v-07bd53a2> \u0406\u0441\u0442\u043E\u0440\u0456\u044F </button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/menuAuthUsers/UserMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-07bd53a2"]]);

export { UserMenu as default };
//# sourceMappingURL=UserMenu-CmioRHjJ.mjs.map
