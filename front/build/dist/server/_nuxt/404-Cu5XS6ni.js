import { _ as __nuxt_component_0 } from "./nuxt-link-WQaQD4mm.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
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
const _imports_0 = "" + __buildAssetsURL("404.CA5AlxB7.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "box-fail" }, _attrs))} data-v-1bf3c87d><p class="text-whoops" data-v-1bf3c87d>Упс</p><img class="fail-404"${ssrRenderAttr("src", _imports_0)} alt="404" data-v-1bf3c87d><p data-v-1bf3c87d>Сторінка, яку ви шукали, не існує.</p>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` На головну `);
      } else {
        return [
          createTextVNode(" На головну ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1bf3c87d"]]);
export {
  _404 as default
};
//# sourceMappingURL=404-Cu5XS6ni.js.map
