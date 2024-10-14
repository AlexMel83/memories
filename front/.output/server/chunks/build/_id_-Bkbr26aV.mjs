import { _ as __nuxt_component_2, u as useUI } from './Button-CVML3TA3.mjs';
import { defineComponent, toRef, ref, computed, useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { twMerge } from 'tailwind-merge';
import { m as mergeConfig, f as appConfig, _ as _export_sfc, c as useNuxtApp, k as useRoute } from './server.mjs';
import { useScroll, useElementSize, useResizeObserver } from '@vueuse/core';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import './nuxt-link-WQaQD4mm.mjs';
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
import './Icon-DAERXBl-.mjs';
import './index-BIbsiujd.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'axios';
import 'mitt';
import 'vue-recaptcha-v3';

const carousel = {
  wrapper: "relative",
  container: "relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
  item: "flex flex-none snap-center",
  arrows: {
    wrapper: "flex items-center justify-between"
  },
  indicators: {
    wrapper: "absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",
    base: "rounded-full h-3 w-3",
    active: "bg-primary-500 dark:bg-primary-400",
    inactive: "bg-gray-100 dark:bg-gray-800"
  },
  default: {
    prevButton: {
      color: "black",
      class: "rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "black",
      class: "rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-right-20-solid "
    }
  }
};
const useCarouselScroll = (el) => {
  ref(0);
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.carousel, carousel);
const _sfc_main$1 = defineComponent({
  components: {
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    arrows: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  setup(props, { expose }) {
    const { ui, attrs } = useUI("carousel", toRef(props, "ui"), config, toRef(props, "class"));
    const carouselRef = ref();
    const itemWidth = ref(0);
    const { x } = useScroll(carouselRef, { behavior: "smooth" });
    const { width: carouselWidth } = useElementSize(carouselRef);
    useCarouselScroll();
    useResizeObserver(carouselRef, (entries) => {
      var _a, _b;
      const [entry] = entries;
      itemWidth.value = ((_b = (_a = entry == null ? void 0 : entry.target) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.clientWidth) || 0;
    });
    const currentPage = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      return Math.round(x.value / itemWidth.value) + 1;
    });
    const pages = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      return props.items.length - Math.round(carouselWidth.value / itemWidth.value) + 1;
    });
    const isFirst = computed(() => currentPage.value <= 1);
    const isLast = computed(() => currentPage.value === pages.value);
    function onClickNext() {
      x.value += itemWidth.value;
    }
    function onClickPrev() {
      x.value -= itemWidth.value;
    }
    function onClick(page) {
      x.value = (page - 1) * itemWidth.value;
    }
    expose({
      pages,
      page: currentPage,
      prev: onClickPrev,
      next: onClickNext,
      select: onClick
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isFirst,
      isLast,
      carouselRef,
      pages,
      currentPage,
      onClickNext,
      onClickPrev,
      onClick,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))} data-v-ea54307d><div class="${ssrRenderClass([_ctx.ui.container, "no-scrollbar"])}" data-v-ea54307d><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(`<div class="${ssrRenderClass(_ctx.ui.item)}"${ssrRenderAttr("role", _ctx.indicators ? "tabpanel" : null)} data-v-ea54307d>`);
    ssrRenderSlot(_ctx.$slots, "default", {
      item,
      index
    }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.arrows) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.arrows.wrapper)}" data-v-ea54307d>`);
    ssrRenderSlot(_ctx.$slots, "prev", {
      onClick: _ctx.onClickPrev,
      disabled: _ctx.isFirst
    }, () => {
      var _a;
      if (_ctx.prevButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isFirst }, { ..._ctx.ui.default.prevButton, ..._ctx.prevButton }, {
          class: _ctx.twMerge(_ctx.ui.default.prevButton.class, (_a = _ctx.prevButton) == null ? void 0 : _a.class),
          "aria-label": "Prev",
          onClick: _ctx.onClickPrev
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    ssrRenderSlot(_ctx.$slots, "next", {
      onClick: _ctx.onClickNext,
      disabled: _ctx.isLast
    }, () => {
      var _a;
      if (_ctx.nextButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isLast }, { ..._ctx.ui.default.nextButton, ..._ctx.nextButton }, {
          class: _ctx.twMerge(_ctx.ui.default.nextButton.class, (_a = _ctx.nextButton) == null ? void 0 : _a.class),
          "aria-label": "Next",
          onClick: _ctx.onClickNext
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.indicators) {
    _push(`<div role="tablist" class="${ssrRenderClass(_ctx.ui.indicators.wrapper)}" data-v-ea54307d><!--[-->`);
    ssrRenderList(_ctx.pages, (page) => {
      ssrRenderSlot(_ctx.$slots, "indicator", {
        onClick: _ctx.onClick,
        active: page === _ctx.currentPage,
        page
      }, () => {
        _push(`<button type="button" role="tab"${ssrRenderAttr("aria-selected", page === _ctx.currentPage)} class="${ssrRenderClass([
          _ctx.ui.indicators.base,
          page === _ctx.currentPage ? _ctx.ui.indicators.active : _ctx.ui.indicators.inactive
        ])}"${ssrRenderAttr("aria-label", `set slide ${page}`)} data-v-ea54307d></button>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea54307d"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    useRoute();
    const carouselRef = ref();
    const memory = ref(null);
    ref([]);
    const memory_photos_urls = ref([]);
    const formatDate = (dateString) => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      };
      return new Date(dateString).toLocaleString("ru-RU", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "memory-page" }, _attrs))} data-v-f54effa7><main data-v-f54effa7><section class="memory-details" data-v-f54effa7>`);
      if (memory.value) {
        _push(`<div data-v-f54effa7><div class="photo-slider mb-6" data-v-f54effa7>`);
        _push(ssrRenderComponent(_component_UCarousel, {
          ref_key: "carouselRef",
          ref: carouselRef,
          items: memory_photos_urls.value,
          ui: {
            item: "basis-full",
            container: "rounded-lg"
          },
          "prev-button": {
            color: "gray",
            icon: "i-heroicons-arrow-left-20-solid"
          },
          "next-button": {
            color: "gray",
            icon: "i-heroicons-arrow-right-20-solid"
          },
          indicators: "",
          arrows: ""
        }, {
          default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item)} class="w-full" draggable="false" data-v-f54effa7${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: item,
                  class: "w-full",
                  draggable: "false"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><h1 class="text-3xl font-bold mb-4 dark:text-white" data-v-f54effa7>${ssrInterpolate(memory.value.title)}</h1><p class="text-lg mb-6 dark:text-white" data-v-f54effa7>${ssrInterpolate(memory.value.description)}</p><div class="info dark:text-white" data-v-f54effa7><p data-v-f54effa7><strong data-v-f54effa7>\u0410\u0434\u0440\u0435\u0441\u0430:</strong> ${ssrInterpolate(memory.value.address || "\u0410\u0434\u0440\u0435\u0441 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D")}</p>`);
        if (memory.value.date_event) {
          _push(`<p data-v-f54effa7><strong data-v-f54effa7>\u0414\u0430\u0442\u0430 \u043F\u043E\u0434\u0456\u0457:</strong> ${ssrInterpolate(formatDate(memory.value.date_event))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p data-v-f54effa7><strong data-v-f54effa7>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E:</strong> ${ssrInterpolate(formatDate(memory.value.created_at))}</p>`);
        if (memory.value.updated_at !== memory.value.created_at) {
          _push(`<p data-v-f54effa7><strong data-v-f54effa7>\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E:</strong> ${ssrInterpolate(formatDate(memory.value.updated_at))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/memories/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f54effa7"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Bkbr26aV.mjs.map
