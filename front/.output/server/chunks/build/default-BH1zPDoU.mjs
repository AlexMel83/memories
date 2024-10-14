import { e as useAuthStore, p as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import FooterMain from './FooterMain-frA8Td9N.mjs';
import HeaderAuthUsers from './HeaderAuthUsers-B9waK0Zf.mjs';
import HeaderMain from './HeaderMain-DYfKKYm2.mjs';
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
import './nuxt-link-WQaQD4mm.mjs';
import './favicon-BzH-OJLC.mjs';
import './Button-CVML3TA3.mjs';
import './Icon-DAERXBl-.mjs';
import './index-BIbsiujd.mjs';
import '@iconify/utils/lib/css/icon';
import './UserName-BO_eQMyZ.mjs';
import './Input-DrGHuVr9.mjs';
import '@vueuse/math';
import 'yup';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useAuthStore();
    const isScrollToTopInFooter = ref(false);
    const showScrollToTop = ref(false);
    const footerRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))}><div class="content-wrap">`);
      if ((_c = (_b = (_a = unref(store)) == null ? void 0 : _a.userData) == null ? void 0 : _b.user) == null ? void 0 : _c.isactivated) {
        _push(ssrRenderComponent(HeaderAuthUsers, null, null, _parent));
      } else {
        _push(ssrRenderComponent(HeaderMain, null, null, _parent));
      }
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(FooterMain, {
        ref_key: "footerRef",
        ref: footerRef
      }, null, _parent));
      _push(`<button id="scrollToTop" class="${ssrRenderClass({ "in-footer": unref(isScrollToTopInFooter), show: unref(showScrollToTop) })}"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="49" height="49" rx="24.5"${ssrRenderAttr(
        "stroke",
        unref(isScrollToTopInFooter) ? "var(--white-color)" : "var(--footer-bg)"
      )}></rect><rect x="3.5" y="3.5" width="43" height="43" rx="21.5"${ssrRenderAttr(
        "stroke",
        unref(isScrollToTopInFooter) ? "var(--white-color)" : "var(--footer-bg)"
      )}></rect><path d="M26.0607 18.9596C25.4749 18.3738 24.5251 18.3738 23.9393 18.9596L14.3934 28.5055C13.8076 29.0913 13.8076 30.0411 14.3934 30.6269C14.9792 31.2127 15.9289 31.2127 16.5147 30.6269L25 22.1416L33.4853 30.6269C34.0711 31.2127 35.0208 31.2127 35.6066 30.6269C36.1924 30.0411 36.1924 29.0913 35.6066 28.5055L26.0607 18.9596ZM26.5 21.0203L26.5 20.0203L23.5 20.0203L23.5 21.0203L26.5 21.0203Z"${ssrRenderAttr(
        "fill",
        unref(isScrollToTopInFooter) ? "var(--white-color)" : "var(--footer-bg)"
      )}></path></svg></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BH1zPDoU.mjs.map
