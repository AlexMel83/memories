import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))} data-v-1a38eb69><div class="bg-white shadow" data-v-1a38eb69><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" data-v-1a38eb69><h1 class="text-3xl font-bold text-gray-900 text-center" data-v-1a38eb69> \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 </h1></div></div><div class="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8" data-v-1a38eb69><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg" data-v-1a38eb69><div class="p-6 bg-white border-b border-gray-200" data-v-1a38eb69><h2 class="text-2xl font-semibold text-gray-800 text-center mb-4" data-v-1a38eb69> \u041C\u0430\u043F\u0430 \u043F\u0430\u043C&#39;\u044F\u0442\u0456: \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u0442\u0430 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0441\u0442\u0456 </h2><h3 class="text-xl font-medium text-gray-700 text-center mb-6" data-v-1a38eb69> \u0411\u043B\u0430\u0433\u043E\u0434\u0456\u0439\u043D\u0438\u0439 \u0444\u043E\u043D\u0434 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0445 \u0440\u0435\u0444\u043E\u0440\u043C &quot;\u041D\u0430\u0434\u0456\u044F&quot; </h3><p class="mb-4" data-v-1a38eb69> \u041D\u0430\u0448 \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442: <a href="https://cfhope.in.ua" class="text-blue-600 hover:text-blue-800" data-v-1a38eb69>https://cfhope.in.ua</a></p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u0417\u0431\u0456\u0440 \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 </h2><p class="mb-4" data-v-1a38eb69> \u041C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u043B\u0438\u0448\u0435 \u0442\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0430 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0430 \u0434\u043B\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443 \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433. \u0426\u0435 \u043C\u043E\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u0438 \u0432\u0430\u0448\u0435 \u0456\u043C&#39;\u044F, \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443 \u0442\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0443 \u0432\u0438 \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443. </p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u0424\u0430\u0439\u043B\u0438 cookie </h2><p class="mb-4" data-v-1a38eb69> \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0444\u0430\u0439\u043B\u0438 cookie HttpOnly \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u0441\u0432\u0456\u0434\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0444\u0430\u0439\u043B\u0438 cookie \u0443 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0430\u043B\u0435 \u0446\u0435 \u043C\u043E\u0436\u0435 \u0432\u043F\u043B\u0438\u043D\u0443\u0442\u0438 \u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0441\u0430\u0439\u0442\u0443. </p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0456\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 </h2><p class="mb-4" data-v-1a38eb69> \u041D\u0430\u0448 \u0441\u0430\u0439\u0442 \u043C\u043E\u0436\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0456\u043D\u0448\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438. \u041C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0430\u0431\u043E \u0437\u043C\u0456\u0441\u0442 \u0446\u0438\u0445 \u0441\u0430\u0439\u0442\u0456\u0432. </p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u0430\u043D\u0438\u0445 </h2><p class="mb-4" data-v-1a38eb69> \u041C\u0438 \u0432\u0436\u0438\u0432\u0430\u0454\u043C\u043E \u0432\u0441\u0456\u0445 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432 \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0432\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443, \u0437\u043C\u0456\u043D\u0438, \u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F \u0447\u0438 \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F. </p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u0412\u0430\u0448\u0456 \u043F\u0440\u0430\u0432\u0430 </h2><p class="mb-4" data-v-1a38eb69> \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0441\u0432\u043E\u0457\u0445 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0457\u0445 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F. \u0414\u043B\u044F \u0446\u044C\u043E\u0433\u043E, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432&#39;\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E. </p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u0417\u043C\u0456\u043D\u0438 \u0443 \u043F\u043E\u043B\u0456\u0442\u0438\u0446\u0456 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 </h2><p class="mb-4" data-v-1a38eb69> \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0447\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443. \u0423\u0441\u0456 \u0437\u043C\u0456\u043D\u0438 \u0431\u0443\u0434\u0443\u0442\u044C \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u0456 \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456. </p><h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4" data-v-1a38eb69> \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438 </h2><p class="mb-4" data-v-1a38eb69> \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432&#39;\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E: <a href="mailto:admin@memory.pp.ua" class="text-blue-600 hover:text-blue-800" data-v-1a38eb69>admin@memory.pp.ua</a></p></div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a38eb69"]]);

export { privacyPolicy as default };
//# sourceMappingURL=privacy-policy-BM9yNCr7.mjs.map
