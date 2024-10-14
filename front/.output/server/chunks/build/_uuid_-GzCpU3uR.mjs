import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { e as useAuthStore, c as useNuxtApp } from './server.mjs';
import { useRouter, useRoute } from 'vue-router';
import { ref, useSSRContext } from 'vue';
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
import '@formkit/auto-animate/vue';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'axios';
import 'mitt';
import 'vue-recaptcha-v3';

const _sfc_main = {
  __name: "[uuid]",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useNuxtApp();
    const editMode = ref(false);
    const success = ref(false);
    useRouter();
    const loading = ref(true);
    useRoute();
    const error = ref(null);
    const name = ref("");
    const surname = ref("");
    const phone = ref("");
    const picture = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-center text-2xl mt-2">\u0410\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F</h1>`);
      if (loading.value) {
        _push(`<p class="text-center mt-1 mb-2">\u0410\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-500 text-center mt-1 mb-2">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (success.value && !error.value) {
        _push(`<p class="mt-1 mb-2 text-green-500 text-center"> \u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u044F \u043F\u0440\u043E\u0439\u0448\u043B\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E! </p>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="mt-4"><h2 class="text-center text-xl mb-2"> \u0410\u043B\u0435 \u0434\u0430\u043D\u0456 \u0412\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044E \u043D\u0435\u043F\u043E\u0432\u043D\u0456. <br>\u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u0440\u043E \u0441\u0435\u0431\u0435, \u0449\u043E\u0431 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u044E. </h2><form class="w-1/2 mx-auto mb-2"><div class="mb-2"><label for="name" class="block">\u0406\u043C&#39;\u044F:</label><input id="name"${ssrRenderAttr("value", name.value)} type="text" class="border rounded px-2 py-1 w-full"></div><div class="mb-2"><label for="surname" class="block">\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435:</label><input id="surname"${ssrRenderAttr("value", surname.value)} type="text" class="border rounded px-2 py-1 w-full"></div><div class="mb-2"><label for="phone" class="block">\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</label><input id="phone"${ssrRenderAttr("value", phone.value)} type="text" class="border rounded px-2 py-1 w-full"></div><div class="mb-2"><label for="picture" class="block">\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044E (URL):</label><input id="picture"${ssrRenderAttr("value", picture.value)} type="text" class="border rounded px-2 py-1 w-full"></div><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-2"> \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 </button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && (error.value || success.value)) {
        _push(`<p class="text-center"><a href="/">\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443</a></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/callback/[uuid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_uuid_-GzCpU3uR.mjs.map
