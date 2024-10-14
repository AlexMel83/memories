import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { e as useAuthStore, c as useNuxtApp } from "../server.mjs";
import { useRouter, useRoute } from "vue-router";
import { ref, useSSRContext } from "vue";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
import "@vue/devtools-api";
import "@formkit/auto-animate/vue";
import "@vueuse/core";
import "tailwind-merge";
import "@iconify/vue";
import "axios";
import "mitt";
import "vue-recaptcha-v3";
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
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-center text-2xl mt-2">Активація аккаунту</h1>`);
      if (loading.value) {
        _push(`<p class="text-center mt-1 mb-2">Активація...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-500 text-center mt-1 mb-2">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (success.value && !error.value) {
        _push(`<p class="mt-1 mb-2 text-green-500 text-center"> Вітаємо Ваш аккаунт успішно активовано! </p>`);
      } else {
        _push(`<!---->`);
      }
      if (editMode.value) {
        _push(`<div class="mt-4"><h2 class="text-center text-xl mb-2"> Заповніть дані для завершення реєстрації </h2><form class="w-1/2 mx-auto mb-2"><div class="mb-2"><label for="name" class="block">Ім&#39;я:</label><input id="name"${ssrRenderAttr("value", name.value)} type="text" class="border rounded px-2 py-1 w-full"></div><div class="mb-2"><label for="surname" class="block">Прізвище:</label><input id="surname"${ssrRenderAttr("value", surname.value)} type="text" class="border rounded px-2 py-1 w-full"></div><div class="mb-2"><label for="phone" class="block">Телефон:</label><input id="phone"${ssrRenderAttr("value", phone.value)} type="text" class="border rounded px-2 py-1 w-full"></div><div class="mb-2"><label for="picture" class="block">Фото профілю (URL):</label><input id="picture"${ssrRenderAttr("value", picture.value)} type="text" class="border rounded px-2 py-1 w-full"></div><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-2"> Зберегти </button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && (error.value || success.value)) {
        _push(`<p class="text-center"><a href="/">Повернутися на головну</a></p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activate/[uuid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_uuid_-CDX-dzDt.js.map
