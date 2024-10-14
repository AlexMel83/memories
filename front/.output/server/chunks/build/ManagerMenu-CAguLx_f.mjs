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
    manager() {
      return this.$store.state.manager;
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
  if ($options.manager) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-b0f6fc1c><button class="${ssrRenderClass([{ active: $options.activeTab === "profileActive" }, "btn"])}" data-v-b0f6fc1c> \u041F\u0440\u043E\u0444\u0456\u043B\u044C </button><button class="${ssrRenderClass([{ active: $options.activeTab === "coworkingActive" }, "btn"])}" data-v-b0f6fc1c> \u041A\u043E\u0432\u043E\u0440\u043A\u0456\u043D\u0433 </button><button class="${ssrRenderClass([{ active: $options.activeTab === "booksActive" }, "btn"])}" data-v-b0f6fc1c> \u0411\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F </button><button class="${ssrRenderClass([{ active: $options.activeTab === "reviewsActive" }, "btn"])}" data-v-b0f6fc1c> \u0412\u0456\u0434\u0433\u0443\u043A\u0438 </button></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/menuAuthUsers/ManagerMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ManagerMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b0f6fc1c"]]);

export { ManagerMenu as default };
//# sourceMappingURL=ManagerMenu-CAguLx_f.mjs.map
