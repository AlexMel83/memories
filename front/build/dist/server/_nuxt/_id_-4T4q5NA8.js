import { _ as __nuxt_component_2 } from "./Button-CVML3TA3.js";
import { _ as _export_sfc, c as useNuxtApp } from "../server.mjs";
import { ref, withCtx, createTextVNode, useSSRContext, nextTick } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import "./nuxt-link-WQaQD4mm.js";
import "ufo";
import "hookable";
import "ohash";
import "./Icon-DAERXBl-.js";
import "./index-BIbsiujd.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "@formkit/auto-animate/vue";
import "@vueuse/core";
import "tailwind-merge";
import "axios";
import "mitt";
import "vue-recaptcha-v3";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const panorama = ref(null);
    const streetViewContainer = ref(null);
    const currentId = ref(parseInt(route.params.id));
    const errorMessage = ref("");
    const { $api, $loadGoogleMaps } = useNuxtApp();
    const formatDate = (dateString) => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      };
      return new Date(dateString).toLocaleString("ru-RU", options);
    };
    const initStreetView = async () => {
      await $loadGoogleMaps();
      if (panorama.value && streetViewContainer.value) {
        const location = {
          lat: parseFloat(panorama.value.latitude),
          lng: parseFloat(panorama.value.longitude)
        };
        const streetView = new google.maps.StreetViewPanorama(
          streetViewContainer.value,
          {
            position: location,
            pov: {
              heading: parseFloat(panorama.value.heading) || 0,
              pitch: parseFloat(panorama.value.tilt) - 90 || 0
            },
            zoom: 0
          }
        );
        streetView.addListener("zoom_changed", () => {
          const currentZoom = streetView.getZoom();
          console.log("Current zoom:", currentZoom);
          if ((void 0).fullscreenElement && currentZoom !== 0) {
            streetView.setZoom(0);
          }
        });
        (void 0).addEventListener("fullscreenchange", () => {
          if ((void 0).fullscreenElement) {
            streetView.setZoom(0);
          }
        });
      } else {
        console.warn(
          "Контейнер для панорамы не готов или данные панорамы отсутствуют."
        );
      }
    };
    const loadPanorama = async () => {
      try {
        const response = await $api.panoramas.getPanoramaById(currentId.value);
        panorama.value = response.data[0];
        await nextTick();
        initStreetView();
      } catch (error) {
        console.error("Ошибка загрузки панорамы:", error);
      }
    };
    const previousPanorama = () => {
      if (currentId.value > 1) {
        currentId.value -= 1;
        router.push({ name: "panoramas-id", params: { id: currentId.value } });
        loadPanorama();
      }
    };
    const nextPanorama = () => {
      currentId.value += 1;
      router.push({ name: "panoramas-id", params: { id: currentId.value } });
      loadPanorama();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-95599bc5>`);
      if (panorama.value) {
        _push(`<div class="panorama-container" data-v-95599bc5><h1 class="text-3xl font-bold text-gray-900 text-center m-4 dark:text-white" data-v-95599bc5>${ssrInterpolate(panorama.value.title)}</h1><div class="street-view mb-2" data-v-95599bc5></div>`);
        if (errorMessage.value) {
          _push(`<div class="error-message text-red-500 text-center mt-4 dark:text-white" data-v-95599bc5>${ssrInterpolate(errorMessage.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (panorama.value.address) {
          _push(`<div class="text-center mb-4 dark:text-white" data-v-95599bc5> Адреса: ${ssrInterpolate(panorama.value.address)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (panorama.value.description) {
          _push(`<div class="text-center mb-4 dark:text-white" data-v-95599bc5> Опис: ${ssrInterpolate(panorama.value.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (panorama.value.shooting_date) {
          _push(`<div class="text-center mb-4 dark:text-white" data-v-95599bc5> Дата зйомки: ${ssrInterpolate(formatDate(panorama.value.shooting_date))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pagination" data-v-95599bc5>`);
        _push(ssrRenderComponent(_component_UButton, {
          disabled: currentId.value <= 1,
          class: "mx-4",
          onClick: previousPanorama
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Назад `);
            } else {
              return [
                createTextVNode(" Назад ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          class: "mx-4",
          onClick: nextPanorama
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вперед `);
            } else {
              return [
                createTextVNode(" Вперед ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="loading" data-v-95599bc5>Загрузка панорамы...</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panoramas/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95599bc5"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-4T4q5NA8.js.map
