import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
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

const _imports_0 = "" + buildAssetsURL("404.CA5AlxB7.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "box-fail" }, _attrs))} data-v-1bf3c87d><p class="text-whoops" data-v-1bf3c87d>\u0423\u043F\u0441</p><img class="fail-404"${ssrRenderAttr("src", _imports_0)} alt="404" data-v-1bf3c87d><p data-v-1bf3c87d>\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430, \u044F\u043A\u0443 \u0432\u0438 \u0448\u0443\u043A\u0430\u043B\u0438, \u043D\u0435 \u0456\u0441\u043D\u0443\u0454.</p>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443 `);
      } else {
        return [
          createTextVNode(" \u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443 ")
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

export { _404 as default };
//# sourceMappingURL=404-Cu5XS6ni.mjs.map
