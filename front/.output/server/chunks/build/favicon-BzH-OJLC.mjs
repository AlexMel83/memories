import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { q as useState, s as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, computed, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = {
  __name: "ColorMode",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8" })
            ];
          }
        })
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColorMode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("favicon.CIDYCzBN.ico");

export { _imports_0 as _, _sfc_main as a };
//# sourceMappingURL=favicon-BzH-OJLC.mjs.map
