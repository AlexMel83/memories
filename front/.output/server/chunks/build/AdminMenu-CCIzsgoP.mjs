import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  props: {
    adminCoworkingActive: {
      default: false,
      type: Boolean
    },
    adminUserActive: {
      default: false,
      type: Boolean
    },
    adminConstructorActive: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    admin() {
      return this.$store.state.admi;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-0de59279><button class="${ssrRenderClass([{ active: $props.adminCoworkingActive }, "btn"])}" data-v-0de59279> Coworking </button><button class="${ssrRenderClass([{ active: $props.adminUserActive }, "btn"])}" data-v-0de59279> User </button><button class="${ssrRenderClass([{ active: $props.adminConstructorActive }, "btn"])}" data-v-0de59279> Constructor </button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/menuAuthUsers/AdminMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0de59279"]]);

export { AdminMenu as default };
//# sourceMappingURL=AdminMenu-CCIzsgoP.mjs.map
