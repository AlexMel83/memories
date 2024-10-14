import { _ as _export_sfc, b as navigateTo } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "@formkit/auto-animate/vue";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue";
import "axios";
import "mitt";
import "vue-recaptcha-v3";
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
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-b0f6fc1c><button class="${ssrRenderClass([{ active: $options.activeTab === "profileActive" }, "btn"])}" data-v-b0f6fc1c> Профіль </button><button class="${ssrRenderClass([{ active: $options.activeTab === "coworkingActive" }, "btn"])}" data-v-b0f6fc1c> Коворкінг </button><button class="${ssrRenderClass([{ active: $options.activeTab === "booksActive" }, "btn"])}" data-v-b0f6fc1c> Бронювання </button><button class="${ssrRenderClass([{ active: $options.activeTab === "reviewsActive" }, "btn"])}" data-v-b0f6fc1c> Відгуки </button></div>`);
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
export {
  ManagerMenu as default
};
//# sourceMappingURL=ManagerMenu-CAguLx_f.js.map
