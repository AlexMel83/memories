import { defineComponent, createElementBlock, toRef, computed, mergeProps, useSSRContext, ref, resolveDirective, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, withDirectives, withModifiers, createCommentVNode, isRef, provide, watch, vShow, inject } from "vue";
import { b as button, _ as __nuxt_component_2$1, u as useUI } from "./Button-CVML3TA3.js";
import { _ as __nuxt_component_2$2 } from "./Icon-DAERXBl-.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-WQaQD4mm.js";
import { _ as _export_sfc, m as mergeConfig, f as appConfig, d as useRuntimeConfig, c as useNuxtApp, e as useAuthStore } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass } from "vue/server-renderer";
import { _ as __nuxt_component_6 } from "./Input-DrGHuVr9.js";
import debounce from "lodash.debounce";
import "ohash";
import "tailwind-merge";
import "./index-BIbsiujd.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
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
import "axios";
import "mitt";
import "vue-recaptcha-v3";
const __nuxt_component_1 = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$4 = defineComponent({
  components: {
    UButton: __nuxt_component_2$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    to: {
      type: Function,
      default: null
    },
    activeButton: {
      type: Object,
      default: () => config.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    divider: {
      type: String,
      default: "…"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r;
      const r2 = current + r;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r2 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i = 1; i <= totalPages; i++) {
          items.push(i);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped) items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r + 2 - totalPages;
        for (let i = current - r - addedItems; i <= current - r - 1; i++) {
          items.push(i);
        }
      }
      for (let i = Math.max(2, r1); i <= Math.min(totalPages, r2); i++) {
        items.push(i);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r - 2);
        for (let i = current + r + 1; i <= current + r + addedItems; i++) {
          items.push(i);
        }
      }
      if (afterWrapped) items.push(props.divider);
      if (r2 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", { onClick: _ctx.onClickFirst }, () => {
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", { onClick: _ctx.onClickPrev }, () => {
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index2) => {
    var _a;
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index2}`,
      to: typeof page === "number" ? (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, page) : null,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`,
      ref_for: true
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", { onClick: _ctx.onClickNext }, () => {
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", { onClick: _ctx.onClickLast }, () => {
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const perPage$1 = 9;
const _sfc_main$3 = {
  __name: "Memories",
  __ssrInlineRender: true,
  props: {
    memories: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    searchTerm: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const config2 = useRuntimeConfig();
    const isDocker = config2.public.isDocker;
    const isExpanded = ref(true);
    const currentPage = ref(1);
    const props = __props;
    const getThumbnailUrl = (thumbnailUrl) => {
      return isDocker ? thumbnailUrl : `./_nuxt/public${thumbnailUrl}`;
    };
    const toggleAccordion = () => {
      isExpanded.value = !isExpanded.value;
    };
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
    const paginatedMemories = computed(() => {
      const start = (currentPage.value - 1) * perPage$1;
      const end = start + perPage$1;
      return props.memories.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2$1;
      const _component_UIcon = __nuxt_component_2$2;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_UPagination = __nuxt_component_3$1;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UButton, {
        class: "accordion-button mb-2",
        onClick: toggleAccordion
      }, {
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(isExpanded) ? "i-heroicons-chevron-up" : "i-heroicons-chevron-down",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: unref(isExpanded) ? "i-heroicons-chevron-up" : "i-heroicons-chevron-down",
                class: "w-5 h-5"
              }, null, 8, ["name"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isExpanded) ? "Згорнути спогади" : "Розгорнути спогади")} `);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isExpanded) ? "Згорнути спогади" : "Розгорнути спогади") + " ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle(unref(isExpanded) ? null : { display: "none" })}" data-v-0e73c088>`);
      if (__props.memories.length > 0 && !__props.isLoading) {
        _push(`<div data-v-0e73c088><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" data-v-0e73c088><!--[-->`);
        ssrRenderList(unref(paginatedMemories), (memory) => {
          _push(`<div class="bg-white dark:bg-slate-800 shadow-md rounded-lg" data-v-0e73c088>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "container rounded-b-lg",
            to: "/memories/" + memory.memory_id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="photo rounded-t-lg" data-v-0e73c088${_scopeId}>`);
                if (memory.memory_photos.length) {
                  _push2(`<img${ssrRenderAttr("src", getThumbnailUrl(memory.memory_photos[0].url))} loading="lazy" data-v-0e73c088${_scopeId}>`);
                } else {
                  _push2(`<img${ssrRenderAttr(
                    "src",
                    unref(isDocker) ? "default-memory.png" : "./../public/default-memory.png"
                  )} data-v-0e73c088${_scopeId}>`);
                }
                _push2(`<div class="title" data-v-0e73c088${_scopeId}><h2 class="memory-title" data-v-0e73c088${_scopeId}>${ssrInterpolate(memory.title)}</h2></div></div><div${ssrRenderAttrs(mergeProps({ class: "info-card dark:text-white dark:bg-slate-600 rounded-b-lg" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-0e73c088${_scopeId}><div class="description-container" data-v-0e73c088${_scopeId}><p class="description" data-v-0e73c088${_scopeId}>${ssrInterpolate(memory.description)}</p></div>`);
                if (memory.address) {
                  _push2(`<div class="map" data-v-0e73c088${_scopeId}><a class="dark:text-white flex flex-row items-center mb-1"${ssrRenderAttr(
                    "href",
                    "https://maps.google.com/?q=" + encodeURIComponent(memory.address)
                  )} target="_blank" data-v-0e73c088${_scopeId}><svg class="mr-2" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-v-0e73c088${_scopeId}><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" data-v-0e73c088${_scopeId}></path></svg><span data-v-0e73c088${_scopeId}>${ssrInterpolate(memory.address)}</span></a></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="icons-container up dark:text-white" data-v-0e73c088${_scopeId}><div class="time" data-v-0e73c088${_scopeId}><svg class="mr-2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0e73c088${_scopeId}><path d="M13 8V13L16.75 16.75M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-0e73c088${_scopeId}></path></svg><div flex data-v-0e73c088${_scopeId}> Створено:${ssrInterpolate(formatDate(memory.created_at))} `);
                if (memory.updated_at !== memory.created_at) {
                  _push2(`<div data-v-0e73c088${_scopeId}> Оновлено: ${ssrInterpolate(formatDate(memory.updated_at))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (memory.date_event) {
                  _push2(`<div data-v-0e73c088${_scopeId}> Дата події: ${ssrInterpolate(formatDate(memory.date_event))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
                _push2(ssrRenderComponent(_component_nuxt_link, {
                  to: "/",
                  class: "btn"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Переглянути `);
                    } else {
                      return [
                        createTextVNode(" Переглянути ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "photo rounded-t-lg" }, [
                    memory.memory_photos.length ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: getThumbnailUrl(memory.memory_photos[0].url),
                      loading: "lazy"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: unref(isDocker) ? "default-memory.png" : "./../public/default-memory.png"
                    }, null, 8, ["src"])),
                    createVNode("div", { class: "title" }, [
                      createVNode("h2", { class: "memory-title" }, toDisplayString(memory.title), 1)
                    ])
                  ]),
                  withDirectives((openBlock(), createBlock("div", { class: "info-card dark:text-white dark:bg-slate-600 rounded-b-lg" }, [
                    createVNode("div", { class: "description-container" }, [
                      createVNode("p", { class: "description" }, toDisplayString(memory.description), 1)
                    ]),
                    memory.address ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "map",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, [
                      createVNode("a", {
                        class: "dark:text-white flex flex-row items-center mb-1",
                        href: "https://maps.google.com/?q=" + encodeURIComponent(memory.address),
                        target: "_blank"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "mr-2",
                          width: "26",
                          height: "26",
                          viewBox: "0 0 26 26",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createVNode("span", null, toDisplayString(memory.address), 1)
                      ], 8, ["href"])
                    ], 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode("div", { class: "icons-container up dark:text-white" }, [
                      createVNode("div", { class: "time" }, [
                        (openBlock(), createBlock("svg", {
                          class: "mr-2",
                          width: "26",
                          height: "26",
                          viewBox: "0 0 26 26",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M13 8V13L16.75 16.75M24.25 13C24.25 19.2132 19.2132 24.25 13 24.25C6.7868 24.25 1.75 19.2132 1.75 13C1.75 6.7868 6.7868 1.75 13 1.75C19.2132 1.75 24.25 6.7868 24.25 13Z",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ])),
                        createVNode("div", { flex: "" }, [
                          createTextVNode(" Створено:" + toDisplayString(formatDate(memory.created_at)) + " ", 1),
                          memory.updated_at !== memory.created_at ? (openBlock(), createBlock("div", { key: 0 }, " Оновлено: " + toDisplayString(formatDate(memory.updated_at)), 1)) : createCommentVNode("", true),
                          memory.date_event ? (openBlock(), createBlock("div", { key: 1 }, " Дата події: " + toDisplayString(formatDate(memory.date_event)), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode(_component_nuxt_link, {
                      to: "/",
                      class: "btn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Переглянути ")
                      ]),
                      _: 1
                    })
                  ])), [
                    [_directive_auto_animate]
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="flex justify-center pagination" data-v-0e73c088>`);
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(currentPage),
          "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
          "page-count": perPage$1,
          total: Math.ceil(__props.memories.length),
          size: "md",
          rounded: "",
          class: "custom-pagination"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Memories.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0e73c088"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lds-facebook" }, _attrs))} data-v-692466f2><div data-v-692466f2></div><div data-v-692466f2></div><div data-v-692466f2></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-692466f2"]]);
const _sfc_main$1 = {
  __name: "SearchInput",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm = ref("");
    provide("searchTerm", searchTerm);
    const bus = useNuxtApp().$bus;
    watch(
      searchTerm,
      debounce((newValue) => {
        bus.$emit("searchTermUpdated", newValue);
      }, 500)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_6;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-wrapper" }, _attrs))} data-v-008309a0>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchTerm),
        "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
        name: "searchTerm",
        placeholder: "Пошук по назві",
        icon: "i-heroicons-magnifying-glass-20-solid",
        autocomplete: "off",
        ui: { icon: { trailing: { pointer: "" } } },
        class: "custom-search-input"
      }, {
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              style: unref(searchTerm) !== "" ? null : { display: "none" },
              color: "gray",
              variant: "link",
              icon: "i-heroicons-x-mark-20-solid",
              padded: false,
              onClick: ($event) => searchTerm.value = ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(_component_UButton, {
                color: "gray",
                variant: "link",
                icon: "i-heroicons-x-mark-20-solid",
                padded: false,
                onClick: ($event) => searchTerm.value = ""
              }, null, 8, ["onClick"]), [
                [vShow, unref(searchTerm) !== ""]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SearchInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-008309a0"]]);
const perPage = 9;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const isLoad = ref(false);
    useNuxtApp();
    const memoriesDataApi = ref([]);
    const panoramasDataApi = ref([]);
    const authStore = useAuthStore();
    const searchTerm = inject("searchTerm", ref(""));
    const page = ref(1);
    useNuxtApp().$bus;
    const filteredMemories = computed(() => {
      var _a;
      const lowerCaseSearchTerm = ((_a = searchTerm.value) == null ? void 0 : _a.toLowerCase()) || "";
      const startIndex = (page.value - 1) * perPage;
      const endIndex = startIndex + perPage;
      return memoriesDataApi.value.filter(
        (memory) => memory.title.toLowerCase().includes(lowerCaseSearchTerm)
      ).slice(startIndex, endIndex);
    });
    watch(page, () => {
      (void 0).scrollTo(0, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Map = __nuxt_component_1;
      const _component_Panoramas = __nuxt_component_1;
      const _component_Memories = __nuxt_component_2;
      const _component_Loader = __nuxt_component_3;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "index-page" }, _attrs))} data-v-ad89463b><main data-v-ad89463b><section class="search" data-v-ad89463b>`);
      _push(ssrRenderComponent(SearchInput, null, null, _parent));
      _push(`</section><section class="${ssrRenderClass([{ blurred: unref(authStore).isMenuOpen }, "memories-list"])}" data-v-ad89463b>`);
      _push(ssrRenderComponent(_component_Map, {
        memories: unref(filteredMemories) || [],
        panoramas: unref(panoramasDataApi) || []
      }, null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "memories-wrapper" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-ad89463b>`);
      _push(ssrRenderComponent(_component_Panoramas, {
        panoramas: unref(panoramasDataApi),
        "is-loading": unref(isLoading),
        "search-term": unref(searchTerm)
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "memories-wrapper" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-ad89463b>`);
      _push(ssrRenderComponent(_component_Memories, {
        memories: unref(filteredMemories),
        "is-loading": unref(isLoading),
        "search-term": unref(searchTerm)
      }, null, _parent));
      if (unref(isLoad)) {
        _push(ssrRenderComponent(_component_Loader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad89463b"]]);
export {
  index as default
};
//# sourceMappingURL=index-DawvY8Ja.js.map
