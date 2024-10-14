import { _ as __nuxt_component_0$3 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as _imports_0, a as _sfc_main$c } from './favicon-BzH-OJLC.mjs';
import { _ as __nuxt_component_2 } from './Icon-DAERXBl-.mjs';
import { defineComponent, ref, computed, onMounted, onUnmounted, h as h$1, Fragment, watchEffect, watch, provide, unref, inject, getCurrentInstance, Teleport, reactive, normalizeClass, toRef, useSSRContext, cloneVNode, nextTick, mergeProps, withCtx, createVNode, shallowRef, resolveDynamicComponent, createTextVNode, toDisplayString, resolveDirective, isRef, openBlock, createBlock, createCommentVNode, withDirectives, resolveComponent, renderSlot, createSlots, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderTeleport } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { m as mergeConfig, f as appConfig, q as useState, _ as _export_sfc, c as useNuxtApp, e as useAuthStore } from './server.mjs';
import { u as useUI, _ as __nuxt_component_2$1 } from './Button-CVML3TA3.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { useEventBus, createSharedComposable, useActiveElement, useTimestamp, useDebounceFn, useEventListener } from '@vueuse/core';
import { _ as __nuxt_component_6 } from './Input-DrGHuVr9.mjs';
import { logicNot, logicAnd } from '@vueuse/math';
import { object, string, ref as ref$1 } from 'yup';
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
import './index-BIbsiujd.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@formkit/auto-animate/vue';
import 'axios';
import 'mitt';
import 'vue-recaptcha-v3';

const ATTR_KEY = "data-n-ids";
const SEPARATOR = "-";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = `n${key.slice(1)}`;
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._genId || (nuxtApp._genId = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + SEPARATOR + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + SEPARATOR + nuxtApp._genId++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const notification = {
  wrapper: "w-full pointer-events-auto",
  container: "relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium text-gray-900 dark:text-white",
  description: "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    color: "text-{color}-500 dark:text-{color}-400"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  progress: {
    base: "absolute bottom-0 end-0 start-0 h-1",
    background: "bg-{color}-500 dark:bg-{color}-400"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transform ease-out duration-300 transition",
    enterFromClass: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  default: {
    color: "primary",
    icon: null,
    timeout: 5e3,
    closeButton: {
      icon: "i-heroicons-x-mark-20-solid",
      color: "gray",
      variant: "link",
      padded: false
    },
    actionButton: {
      size: "xs",
      color: "white"
    }
  }
};
const notifications = {
  wrapper: "fixed flex flex-col justify-end z-[55]",
  position: "bottom-0 end-0",
  width: "w-full sm:w-96",
  container: "px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"
};
function t$5(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$2() {
  let a2 = [], s3 = { addEventListener(e2, t2, r, i2) {
    return e2.addEventListener(t2, r, i2), s3.add(() => e2.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$5(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$2();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r of a2.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s3;
}
let t$4 = Symbol("headlessui.useid"), i$5 = 0;
function I$1() {
  return inject(t$4, () => `${++i$5}`)();
}
function l$3(e2) {
  provide(t$4, e2);
}
function o$1(e2) {
  var l2;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$5(r, n2, ...a2) {
  if (r in n2) {
    let e2 = n2[r];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$5), t2;
}
var i$4 = Object.defineProperty;
var d$4 = (t2, e2, r) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e2] = r;
var n$3 = (t2, e2, r) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r), r);
let s$3 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$2 = new s$3();
function i$3(r) {
  if (c$2.isServer)
    return null;
  if (r instanceof Node)
    return r.ownerDocument;
  if (r != null && r.hasOwnProperty("value")) {
    let n2 = o$1(r);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$4 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$4 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$2(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$1)).sort((r, t2) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$5(r, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r, t2;
  return (t2 = (r = e2 == null ? void 0 : e2.matches) == null ? void 0 : r.call(e2, H$2)) != null ? t2 : false;
}
function O(e2, r = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r(t2), i2 = r(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$2(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r & 5)
      return 1;
    if (r & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r & 1)
      return 0;
    if (r & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0)
      return 0;
    let s3 = p + a2;
    if (r & 16)
      s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d2)
        return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$3() || i$2();
}
function u$4(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r) {
    if (!l2.value || e2.defaultPrevented)
      return;
    let t2 = r(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$4("pointerdown", (e2) => {
    var r, t2;
    l2.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$4("mousedown", (e2) => {
    var r, t2;
    l2.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$4("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$4("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$2({ visible: r = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r || t2 & 2 && n2.static)
    return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$5(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p, true);
      for (let s3 in p)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e2 = {};
  for (let i2 of r)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function T$1(r, t2 = []) {
  let e2 = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
var u$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$3 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r = d2["aria-hidden"]) != null ? r : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$2({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o || {});
let t$1 = [];
function E$1(n2, e2, o2, r) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d$3 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o$1(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$1({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$1(o2);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$5(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value)
      return;
    let T2 = B(t2.containers);
    o$1(o2) instanceof HTMLElement && T2.add(o$1(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s3.value ? P(o$1(o2), u$5(f2.value, { [d$3.Forwards]: () => N$4.Next, [d$3.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable })]);
  };
} }), { features: A$1 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$5(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $$1({ ownerDocument: t2 }, n2) {
  let r = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value)
        return;
      let f2 = o$1(n2);
      f2 && t$5(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o$1(r), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$4.First | N$4.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value)
      return;
    let m2 = B(r);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r of t2)
    if (r.contains(n2))
      return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o$2();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e2 = t2.target.closest("a");
            if (!e2)
              return;
            let { hash: f2 } = new URL(e2.href), i2 = r.querySelector(f2);
            i2 && !a2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && a2(e2.parentElement); )
              e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT")
            return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$2(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2)
      return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$1(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$1, { features: u$3.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$2({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${I$1()}`, r = w();
  return onMounted(() => onUnmounted(r.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$2({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2)
    return l2;
  let r = t2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r = ref(null), i2 = computed(() => i$3(r)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$1, null), g2 = false, b2 = getCurrentInstance();
  return watch(r, () => {
    if (g2 || !v2)
      return;
    let a2 = o$1(r);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$2({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r(o2);
  }
  function r(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r), () => {
    let { target: i2, ...o2 } = e2;
    return A$2({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${I$1()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r || (r = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog")
      return u$5(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie.value && (e2.defaultPrevented || e2.key === o.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue$1 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue$1, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0)
      return;
    let a2 = o$1(m2);
    if (!a2)
      return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$5(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h$1(X, {}, () => A$2({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$1(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${I$1()}`, s3 = T("DialogOverlay");
  function n2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r } = t2;
    return A$2({ ourProps: { id: p, "aria-hidden": true, onClick: n2 }, theirProps: r, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r;
  let s3 = (r = t2.id) != null ? r : `headlessui-dialog-backdrop-${I$1()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($, () => A$2({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r;
  let s3 = (r = t2.id) != null ? r : `headlessui-dialog-panel-${I$1()}`, n2 = T("DialogPanel");
  p({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$2({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${I$1()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$2({ ourProps: { id: p }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$2();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$2(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$5(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2())
    return () => h$1(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = I$1(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$5(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _ = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r(), v2.value || f2(), o2(v2.value ? L$1(p, j2, M2, X, _, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p) => {
      te(p), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$5(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$2.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$2({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$2({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$b = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
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
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$5, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    l$3(() => useId("$HAJMhYDoe7"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$a = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$4);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]);
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$9 = defineComponent({
  components: {
    UIcon: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$3.default.icon
    },
    size: {
      type: String,
      default: () => config$3.default.size,
      validator(value) {
        return Object.keys(config$3.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$3.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$3.default.chipPosition,
      validator(value) {
        return Object.keys(config$3.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
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
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$3);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
function useTimer(cb, interval, options) {
  let timer = null;
  const { pause: tPause, resume: tResume, timestamp } = useTimestamp({ ...{}, controls: true });
  const startTime = ref(null);
  const remaining = computed(() => {
    if (!startTime.value) {
      return 0;
    }
    return interval - (timestamp.value - startTime.value);
  });
  function set(...args) {
    timer = setTimeout(() => {
      timer = null;
      startTime.value = null;
      cb(...args);
    }, remaining.value);
  }
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function start() {
    startTime.value = Date.now();
    set();
  }
  function stop() {
    clear();
    tPause();
  }
  function pause() {
    clear();
    tPause();
  }
  function resume() {
    set();
    tResume();
    startTime.value = (startTime.value || 0) + (Date.now() - timestamp.value);
  }
  start();
  return {
    start,
    stop,
    pause,
    resume,
    remaining
  };
}
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.notification, notification);
const _sfc_main$8 = defineComponent({
  components: {
    UIcon: __nuxt_component_2,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_2$1
  },
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$2.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config$2.default.closeButton
    },
    timeout: {
      type: Number,
      default: () => config$2.default.timeout
    },
    actions: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: null
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
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
  emits: ["close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("notification", toRef(props, "ui"), config$2);
    let timer = null;
    const remaining = ref(props.timeout);
    const wrapperClass = computed(() => {
      var _a, _b;
      return twMerge(twJoin(
        ui.value.wrapper,
        (_a = ui.value.background) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.rounded,
        ui.value.shadow,
        (_b = ui.value.ring) == null ? void 0 : _b.replaceAll("{color}", props.color)
      ), props.class);
    });
    const progressClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.progress.base,
        (_a = ui.value.progress.background) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    const progressStyle = computed(() => {
      const remainingPercent = remaining.value / props.timeout * 100;
      return { width: `${remainingPercent || 0}%` };
    });
    const iconClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.icon.base,
        (_a = ui.value.icon.color) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    function onMouseover() {
      if (timer) {
        timer.pause();
      }
    }
    function onMouseleave() {
      if (timer) {
        timer.resume();
      }
    }
    function onClose() {
      if (timer) {
        timer.stop();
      }
      if (props.callback) {
        props.callback();
      }
      emit("close");
    }
    function onAction(action) {
      if (timer) {
        timer.stop();
      }
      if (action.click) {
        action.click();
      }
      emit("close");
    }
    function initTimer() {
      if (timer) {
        timer.stop();
      }
      if (!props.timeout) {
        return;
      }
      timer = useTimer(() => {
        onClose();
      }, props.timeout);
      watchEffect(() => {
        remaining.value = timer.remaining.value;
      });
    }
    watch(() => props.timeout, initTimer);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      progressClass,
      progressStyle,
      iconClass,
      onMouseover,
      onMouseleave,
      onClose,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_2$1;
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    class: _ctx.wrapperClass,
    role: "status"
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.rounded, _ctx.ui.ring])}"><div class="${ssrRenderClass([[_ctx.ui.padding, _ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !_ctx.title && !_ctx.$slots.title && "mt-0 leading-5"))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        key: index,
        ref_for: true
      }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({
          key: index,
          ref_for: true
        }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, { onClick: _ctx.onClose }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.timeout) {
    _push(`<div class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></template>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
function useToast() {
  const notifications2 = useState("notifications", () => []);
  function add(notification2) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      ...notification2
    };
    const index = notifications2.value.findIndex((n2) => n2.id === body.id);
    if (index === -1) {
      notifications2.value.push(body);
    }
    return body;
  }
  function remove(id) {
    notifications2.value = notifications2.value.filter((n2) => n2.id !== id);
  }
  function update(id, notification2) {
    const index = notifications2.value.findIndex((n2) => n2.id === id);
    if (index !== -1) {
      const previous = notifications2.value[index];
      notifications2.value.splice(index, 1, { ...previous, ...notification2 });
    }
  }
  function clear() {
    notifications2.value = [];
  }
  return {
    add,
    remove,
    update,
    clear
  };
}
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.notifications, notifications);
const _sfc_main$7 = defineComponent({
  components: {
    UNotification: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("notifications", toRef(props, "ui"), config$1);
    const toast = useToast();
    const notifications2 = useState("notifications", () => []);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.position,
        ui.value.width
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toast,
      notifications: notifications2,
      wrapperClass
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UNotification = __nuxt_component_0$1;
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div${ssrRenderAttrs(mergeProps({
      class: _ctx.wrapperClass,
      role: "region"
    }, _ctx.attrs))}>`);
    if (_ctx.notifications.length) {
      _push2(`<div class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
      ssrRenderList(_ctx.notifications, (notification2) => {
        _push2(`<div>`);
        _push2(ssrRenderComponent(_component_UNotification, mergeProps({ ref_for: true }, notification2, {
          class: notification2.click && "cursor-pointer",
          onClick: ($event) => notification2.click && notification2.click(notification2),
          onClose: ($event) => _ctx.toast.remove(notification2.id)
        }), createSlots({ _: 2 }, [
          renderList(_ctx.$slots, (_, name) => {
            return {
              name,
              fn: withCtx((slotData, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push3, _parent2, _scopeId);
                } else {
                  return [
                    renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                  ];
                }
              })
            };
          })
        ]), _parent));
        _push2(`</div>`);
      });
      _push2(`<!--]--></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div>`);
  }, "body", false, _parent);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notifications.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  name: "LogosGoogleIcon"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 262"
  }, _attrs))}><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/LogosGoogleIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LogosGoogleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  name: "LogosFacebook"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256"
  }, _attrs))}><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/LogosFacebook.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LogosFacebook = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  __name: "Social",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const errors = reactive({
      textError: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UNotifications = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper-login-using" }, _attrs))} data-v-f09d198b><div class="login-using m-2" data-v-f09d198b><div class="login-using-item dark:text-white bg-slate-100 dark:bg-slate-600" data-v-f09d198b>`);
      _push(ssrRenderComponent(LogosGoogleIcon, { class: "social-icon" }, null, _parent));
      _push(`<span class="login-text" data-v-f09d198b>\u0417\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E<br data-v-f09d198b>Google</span></div><div class="login-using-item dark:text-white bg-slate-100 dark:bg-slate-600" data-v-f09d198b>`);
      _push(ssrRenderComponent(LogosFacebook, { class: "social-icon" }, null, _parent));
      _push(`<span class="login-text" data-v-f09d198b>\u0417\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E<br data-v-f09d198b>Facebook</span></div></div>`);
      if (unref(errors).textError) {
        _push(ssrRenderComponent(_component_UNotifications, {
          color: "red",
          timeout: 3e3
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors).textError)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors).textError), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/Social.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f09d198b"]]);
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$3 = defineComponent({
  props: {
    schema: {
      type: [Object, Function],
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId("$Z55GngiEgp");
    const bus = useEventBus(`form-${formId}`);
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (errors.value.length > 0) {
        if (opts.silent)
          return false;
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        event.data = props.state;
        emit("submit", event);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return "_parse" in schema || "_run" in schema || typeof schema === "function" && "schema" in schema;
}
async function getValibotError(state, schema) {
  var _a;
  const result = await ("_parse" in schema ? schema._parse(state) : "_run" in schema ? schema._run({ typed: false, value: state }, {}) : schema(state));
  return ((_a = result.issues) == null ? void 0 : _a.map((issue) => {
    var _a2;
    return {
      // We know that the key for a form schema is always a string or a number
      path: ((_a2 = issue.path) == null ? void 0 : _a2.map((item) => item.key).join(".")) || "",
      message: issue.message
    };
  })) || [];
}
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : config.default.size];
    });
    const inputId = ref(useId("$K7dDJpdOWE"));
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _useShortcuts = () => {
  const macOS = computed(() => false);
  const metaSymbol = ref(" ");
  const activeElement = useActiveElement();
  const usingInput = computed(() => {
    var _a, _b, _c;
    const tagName = (_a = activeElement.value) == null ? void 0 : _a.tagName;
    const contentEditable = (_b = activeElement.value) == null ? void 0 : _b.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return ((_c = activeElement.value) == null ? void 0 : _c.name) || true;
    }
    return false;
  });
  return {
    macOS,
    metaSymbol,
    activeElement,
    usingInput
  };
};
const useShortcuts = createSharedComposable(_useShortcuts);
const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
const defineShortcuts = (config2, options = {}) => {
  var _a;
  const { macOS, usingInput } = useShortcuts();
  let shortcuts = [];
  const chainedInputs = ref([]);
  const clearChainedInput = () => {
    chainedInputs.value.splice(0, chainedInputs.value.length);
  };
  const debouncedClearChainedInput = useDebounceFn(clearChainedInput, (_a = options.chainDelay) != null ? _a : 800);
  const onKeyDown = (e2) => {
    if (!e2.key) {
      return;
    }
    const alphabeticalKey = /^[a-z]{1}$/i.test(e2.key);
    let chainedKey;
    chainedInputs.value.push(e2.key);
    if (chainedInputs.value.length >= 2) {
      chainedKey = chainedInputs.value.slice(-2).join("-");
      for (const shortcut of shortcuts.filter((s3) => s3.chained)) {
        if (shortcut.key !== chainedKey) {
          continue;
        }
        if (shortcut.condition.value) {
          e2.preventDefault();
          shortcut.handler();
        }
        clearChainedInput();
        return;
      }
    }
    for (const shortcut of shortcuts.filter((s3) => !s3.chained)) {
      if (e2.key.toLowerCase() !== shortcut.key) {
        continue;
      }
      if (e2.metaKey !== shortcut.metaKey) {
        continue;
      }
      if (e2.ctrlKey !== shortcut.ctrlKey) {
        continue;
      }
      if (alphabeticalKey && e2.shiftKey !== shortcut.shiftKey) {
        continue;
      }
      if (shortcut.condition.value) {
        e2.preventDefault();
        shortcut.handler();
      }
      clearChainedInput();
      return;
    }
    debouncedClearChainedInput();
  };
  shortcuts = Object.entries(config2).map(([key, shortcutConfig]) => {
    var _a2, _b;
    if (!shortcutConfig) {
      return null;
    }
    let shortcut;
    if (key.includes("-") && key !== "-" && !((_a2 = key.match(chainedShortcutRegex)) == null ? void 0 : _a2.length)) {
      console.trace(`[Shortcut] Invalid key: "${key}"`);
    }
    if (key.includes("_") && key !== "_" && !((_b = key.match(combinedShortcutRegex)) == null ? void 0 : _b.length)) {
      console.trace(`[Shortcut] Invalid key: "${key}"`);
    }
    const chained = key.includes("-") && key !== "-";
    if (chained) {
      shortcut = {
        key: key.toLowerCase(),
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      };
    } else {
      const keySplit = key.toLowerCase().split("_").map((k2) => k2);
      shortcut = {
        key: keySplit.filter((k2) => !["meta", "ctrl", "shift", "alt"].includes(k2)).join("_"),
        metaKey: keySplit.includes("meta"),
        ctrlKey: keySplit.includes("ctrl"),
        shiftKey: keySplit.includes("shift"),
        altKey: keySplit.includes("alt")
      };
    }
    shortcut.chained = chained;
    if (!macOS.value && shortcut.metaKey && !shortcut.ctrlKey) {
      shortcut.metaKey = false;
      shortcut.ctrlKey = true;
    }
    if (typeof shortcutConfig === "function") {
      shortcut.handler = shortcutConfig;
    } else if (typeof shortcutConfig === "object") {
      shortcut = { ...shortcut, handler: shortcutConfig.handler };
    }
    if (!shortcut.handler) {
      console.trace("[Shortcut] Invalid value");
      return null;
    }
    const conditions = [];
    if (!shortcutConfig.usingInput) {
      conditions.push(logicNot(usingInput));
    } else if (typeof shortcutConfig.usingInput === "string") {
      conditions.push(computed(() => usingInput.value === shortcutConfig.usingInput));
    }
    shortcut.condition = logicAnd(...conditions, ...shortcutConfig.whenever || []);
    return shortcut;
  }).filter(Boolean);
  useEventListener("keydown", onKeyDown);
};
const minPwd = 4;
const _sfc_main$1 = {
  __name: "LoginRegistration",
  __ssrInlineRender: true,
  emits: ["modalClosed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const authStore = useAuthStore();
    const { $api, $load } = useNuxtApp();
    const isOpen = ref(false);
    const isLoading = ref(false);
    const emailActive = ref(false);
    const passwordActive = ref(false);
    const passConfirmActive = ref(false);
    const userIsNotRegistered = ref(false);
    const sendActivationEmail = ref(false);
    const togglePasswordVisibility = ref(false);
    const emit = __emit;
    const state = reactive({
      email: "",
      password: "",
      passConfirm: ""
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = computed(() => emailRegex.test(state.email));
    const errors = reactive({
      form: "",
      email: "",
      password: ""
    });
    const clearErrors = () => {
      errors.form = "";
      errors.email = "";
      errors.password = "";
    };
    const clearVars = (email) => {
      state.email = email || "";
      state.password = "";
      state.passConfirm = "";
      isLoading.value = false;
      userIsNotRegistered.value = false;
      sendActivationEmail.value = false;
      togglePasswordVisibility.value = false;
    };
    const handleTogglePasswordVisibility = async () => {
      togglePasswordVisibility.value = !togglePasswordVisibility.value;
    };
    const loginSchema = object({
      email: string().email("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email").required("\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D Email"),
      password: string().min(minPwd, `\u041F\u0430\u0440\u043E\u043B\u044C \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 ${minPwd} \u0441\u0438\u043C\u043E\u0432\u043B\u0456\u0432`).required("\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u043F\u0430\u0440\u043E\u043B\u044C")
    });
    const registrationSchema = object({
      email: string().email("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email").required("\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D Email"),
      password: string().min(minPwd, `\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 ${minPwd} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432`).required("\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u043F\u0430\u0440\u043E\u043B\u044C"),
      passConfirm: string().oneOf(
        [ref$1("password"), ""],
        "\u041F\u0430\u0440\u043E\u043B\u0456 \u043D\u0435 \u0441\u043F\u0456\u0432\u043F\u0430\u0434\u0430\u044E\u0442\u044C"
      )
    });
    const schema = computed(
      () => userIsNotRegistered.value ? registrationSchema : loginSchema
    );
    const openModal = () => {
      isOpen.value = !isOpen.value;
    };
    const closeModal = () => {
      isOpen.value = false;
      clearErrors();
      clearVars();
      emit("modalClosed");
    };
    __expose({ openModal });
    defineShortcuts({
      escape: {
        usingInput: true,
        whenever: [isOpen],
        handler: closeModal
      }
    });
    const handleFocus = (field) => {
      if (field === "email")
        emailActive.value = true;
      if (field === "password")
        passwordActive.value = true;
      if (field === "passConfirm")
        passConfirmActive.value = true;
    };
    const handleBlur = (field) => {
      if (field === "email" && !state.email)
        emailActive.value = false;
      if (field === "password" && !state.password)
        passwordActive.value = false;
      if (field === "passConfirm" && !state.passConfirm)
        passConfirmActive.value = false;
    };
    const handleSubmit = async (event) => {
      if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
      }
      isLoading.value = true;
      clearErrors();
      const payload = {
        email: state.email,
        password: state.password,
        role: "user"
      };
      try {
        if (userIsNotRegistered.value && state.passConfirm !== state.password) {
          errors.password = "\u041F\u043E\u0440\u0442\u0456\u0431\u043D\u043E \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C";
          if (state.passConfirm)
            errors.passConfirm = "\u041F\u0430\u0440\u043E\u043B\u0456 \u043D\u0435 \u0441\u043F\u0456\u0432\u043F\u0430\u0434\u0430\u044E\u0442\u044C";
          isLoading.value = false;
          return;
        }
        const res = await $load(
          () => userIsNotRegistered.value ? $api.auth.signUp(payload) : $api.auth.signIn(payload),
          errors
        );
        if (res && [200, 201].includes(res.status) && ![400, 401, 403, 404, 500].includes(res.data.status)) {
          const data = res.data;
          if (!userIsNotRegistered.value) {
            authStore.saveUserData(data);
          }
          if (data.user.isactivated === false) {
            sendActivationEmail.value = true;
          } else {
            isOpen.value = false;
            clearVars(userIsNotRegistered.value ? state.email : "");
          }
          isLoading.value = false;
        }
        if (errors) {
          if (errors.email.includes("\u0426\u0435\u0439 email \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E")) {
            userIsNotRegistered.value = true;
          }
          console.log(errors);
        }
      } catch (error) {
        console.log(error);
        if (error) {
          errors.email = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043E";
        }
      }
      isLoading.value = false;
    };
    watch(isOpen, (newValue) => {
      if (!newValue) {
        togglePasswordVisibility.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$2;
      const _component_UCard = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_2$1;
      const _component_ModalSocial = __nuxt_component_3;
      const _component_UForm = __nuxt_component_4;
      const _component_UFormGroup = __nuxt_component_5;
      const _component_UInput = __nuxt_component_6;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b38ca310>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "prevent-close": "",
        ui: { wrapper: "z-500" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(sendActivationEmail)) {
              _push2(ssrRenderComponent(_component_UCard, { ui: {
                ring: "",
                divide: "divide-y divide-gray-100 dark:divide-gray-800"
              } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center" data-v-b38ca310${_scopeId2}><h3 class="ml-10 flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" data-v-b38ca310${_scopeId2}> \u0423\u0432\u0456\u0439\u0442\u0438 \u0434\u043E \u043C\u0430\u043F\u0438 \u043F\u0430\u043C&#39;\u044F\u0442\u0456 </h3>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "flex items-center justify-center w-8 h-8 ml-2",
                      onClick: closeModal
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_ModalSocial, null, null, _parent3, _scopeId2));
                    _push3(`<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" data-v-b38ca310${_scopeId2}> \u0410\u0431\u043E \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443 </h3>`);
                    _push3(ssrRenderComponent(_component_UForm, mergeProps({
                      schema: unref(schema),
                      state: unref(state),
                      class: "space-y-4",
                      onSubmit: handleSubmit
                    }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="space-y-3 mt-2" data-v-b38ca310${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UFormGroup, {
                            name: "email",
                            error: unref(errors).email,
                            class: {
                              "has-value": unref(state).email !== "" || unref(emailActive),
                              "form-group": true,
                              "text-right": true
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UInput, {
                                  modelValue: unref(state).email,
                                  "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                  icon: "i-heroicons-envelope",
                                  variant: "none",
                                  color: "primary",
                                  autocomplete: "new-email",
                                  ui: {
                                    base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                    input: "bg-transparent",
                                    rounded: "rounded-none"
                                  },
                                  onFocus: ($event) => handleFocus("email"),
                                  onBlur: ($event) => handleBlur("email")
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<label data-v-b38ca310${_scopeId5}>Email</label>`);
                                    } else {
                                      return [
                                        createVNode("label", null, "Email")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UInput, {
                                    modelValue: unref(state).email,
                                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                    icon: "i-heroicons-envelope",
                                    variant: "none",
                                    color: "primary",
                                    autocomplete: "new-email",
                                    ui: {
                                      base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                      input: "bg-transparent",
                                      rounded: "rounded-none"
                                    },
                                    onFocus: ($event) => handleFocus("email"),
                                    onBlur: ($event) => handleBlur("email")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, "Email")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (unref(isEmailValid)) {
                            _push4(ssrRenderComponent(_component_UFormGroup, {
                              name: "password",
                              error: unref(errors).password,
                              class: {
                                "has-value": unref(state).password !== "" || unref(passwordActive),
                                "form-group": true,
                                "text-right": true,
                                "dark:text-[#999]": true
                              }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="password-input-wrapper" data-v-b38ca310${_scopeId4}>`);
                                  if (!unref(togglePasswordVisibility)) {
                                    _push5(ssrRenderComponent(_component_UInput, {
                                      modelValue: unref(state).password,
                                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                      type: "password",
                                      icon: "i-heroicons-lock-closed",
                                      variant: "none",
                                      color: "primary",
                                      ui: {
                                        base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                        input: "bg-transparent",
                                        rounded: "rounded-none"
                                      },
                                      "password-visible": false,
                                      onFocus: ($event) => handleFocus("password"),
                                      onBlur: ($event) => handleBlur("password")
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<label data-v-b38ca310${_scopeId5}>\u041F\u0430\u0440\u043E\u043B\u044C</label>`);
                                        } else {
                                          return [
                                            createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(ssrRenderComponent(_component_UInput, {
                                      modelValue: unref(state).password,
                                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                      type: "text",
                                      icon: "i-heroicons-lock-closed",
                                      variant: "none",
                                      color: "primary",
                                      ui: {
                                        base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                        input: "bg-transparent",
                                        rounded: "rounded-none"
                                      },
                                      onFocus: ($event) => handleFocus("password"),
                                      onBlur: ($event) => handleBlur("password")
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<label data-v-b38ca310${_scopeId5}>\u041F\u0430\u0440\u043E\u043B\u044C</label>`);
                                        } else {
                                          return [
                                            createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent5, _scopeId4));
                                  }
                                  _push5(ssrRenderComponent(_component_UButton, {
                                    color: "gray",
                                    variant: "ghost",
                                    icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                    class: "password-toggle hover:bg-primary-600 dark:hover:bg-primary-500",
                                    onClick: handleTogglePasswordVisibility
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "password-input-wrapper" }, [
                                      !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                        key: 0,
                                        modelValue: unref(state).password,
                                        "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                        type: "password",
                                        icon: "i-heroicons-lock-closed",
                                        variant: "none",
                                        color: "primary",
                                        ui: {
                                          base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                          input: "bg-transparent",
                                          rounded: "rounded-none"
                                        },
                                        "password-visible": false,
                                        onFocus: ($event) => handleFocus("password"),
                                        onBlur: ($event) => handleBlur("password")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                        key: 1,
                                        modelValue: unref(state).password,
                                        "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                        type: "text",
                                        icon: "i-heroicons-lock-closed",
                                        variant: "none",
                                        color: "primary",
                                        ui: {
                                          base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                          input: "bg-transparent",
                                          rounded: "rounded-none"
                                        },
                                        onFocus: ($event) => handleFocus("password"),
                                        onBlur: ($event) => handleBlur("password")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                                      createVNode(_component_UButton, {
                                        color: "gray",
                                        variant: "ghost",
                                        icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                        class: "password-toggle hover:bg-primary-600 dark:hover:bg-primary-500",
                                        onClick: handleTogglePasswordVisibility
                                      }, null, 8, ["icon"])
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                          if (unref(userIsNotRegistered) && unref(isEmailValid)) {
                            _push4(ssrRenderComponent(_component_UFormGroup, {
                              name: "passConfirm",
                              error: unref(errors).passConfirm,
                              class: {
                                "has-value": unref(state).passConfirm !== "" || unref(passConfirmActive),
                                "form-group": true,
                                "text-right": true,
                                "dark:text-[#999]": true
                              }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="password-input-wrapper" data-v-b38ca310${_scopeId4}>`);
                                  if (!unref(togglePasswordVisibility)) {
                                    _push5(ssrRenderComponent(_component_UInput, {
                                      modelValue: unref(state).passConfirm,
                                      "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                      type: "password",
                                      error: unref(errors).passConfirm,
                                      icon: "i-heroicons-lock-closed",
                                      variant: "none",
                                      color: "primary",
                                      ui: {
                                        base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                        input: "bg-transparent",
                                        rounded: "rounded-none"
                                      },
                                      onFocus: ($event) => handleFocus("passConfirm"),
                                      onBlur: ($event) => handleBlur("passConfirm")
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<label data-v-b38ca310${_scopeId5}>\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</label>`);
                                        } else {
                                          return [
                                            createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(ssrRenderComponent(_component_UInput, {
                                      modelValue: unref(state).passConfirm,
                                      "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                      type: "text",
                                      icon: "i-heroicons-lock-closed",
                                      variant: "none",
                                      color: "primary",
                                      ui: {
                                        base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                        input: "bg-transparent",
                                        rounded: "rounded-none"
                                      },
                                      onFocus: ($event) => handleFocus("passConfirm"),
                                      onBlur: ($event) => handleBlur("passConfirm")
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<label data-v-b38ca310${_scopeId5}>\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</label>`);
                                        } else {
                                          return [
                                            createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent5, _scopeId4));
                                  }
                                  _push5(ssrRenderComponent(_component_UButton, {
                                    color: "gray",
                                    variant: "ghost",
                                    icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                    class: "password-toggle dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-primary-500",
                                    onClick: handleTogglePasswordVisibility
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "password-input-wrapper" }, [
                                      !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                        key: 0,
                                        modelValue: unref(state).passConfirm,
                                        "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                        type: "password",
                                        error: unref(errors).passConfirm,
                                        icon: "i-heroicons-lock-closed",
                                        variant: "none",
                                        color: "primary",
                                        ui: {
                                          base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                          input: "bg-transparent",
                                          rounded: "rounded-none"
                                        },
                                        onFocus: ($event) => handleFocus("passConfirm"),
                                        onBlur: ($event) => handleBlur("passConfirm")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "error", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                        key: 1,
                                        modelValue: unref(state).passConfirm,
                                        "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                        type: "text",
                                        icon: "i-heroicons-lock-closed",
                                        variant: "none",
                                        color: "primary",
                                        ui: {
                                          base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                          input: "bg-transparent",
                                          rounded: "rounded-none"
                                        },
                                        onFocus: ($event) => handleFocus("passConfirm"),
                                        onBlur: ($event) => handleBlur("passConfirm")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                                      createVNode(_component_UButton, {
                                        color: "gray",
                                        variant: "ghost",
                                        icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                        class: "password-toggle dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-primary-500",
                                        onClick: handleTogglePasswordVisibility
                                      }, null, 8, ["icon"])
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(isEmailValid) && unref(state).password.length >= minPwd) {
                            _push4(ssrRenderComponent(_component_UButton, {
                              class: "dark:text-white dark:bg-slate-600 hover:bg-primary-600 dark:hover:bg-primary-500",
                              type: "submit",
                              color: "black",
                              loading: unref(isLoading)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(isEmailValid) && unref(userIsNotRegistered) ? "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C" : "\u0423\u0432\u0456\u0439\u0442\u0438")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(isEmailValid) && unref(userIsNotRegistered) ? "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C" : "\u0423\u0432\u0456\u0439\u0442\u0438"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { class: "space-y-3 mt-2" }, [
                              createVNode(_component_UFormGroup, {
                                name: "email",
                                error: unref(errors).email,
                                class: {
                                  "has-value": unref(state).email !== "" || unref(emailActive),
                                  "form-group": true,
                                  "text-right": true
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UInput, {
                                    modelValue: unref(state).email,
                                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                    icon: "i-heroicons-envelope",
                                    variant: "none",
                                    color: "primary",
                                    autocomplete: "new-email",
                                    ui: {
                                      base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                      input: "bg-transparent",
                                      rounded: "rounded-none"
                                    },
                                    onFocus: ($event) => handleFocus("email"),
                                    onBlur: ($event) => handleBlur("email")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, "Email")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                                ]),
                                _: 1
                              }, 8, ["error", "class"]),
                              unref(isEmailValid) ? (openBlock(), createBlock(_component_UFormGroup, {
                                key: 0,
                                name: "password",
                                error: unref(errors).password,
                                class: {
                                  "has-value": unref(state).password !== "" || unref(passwordActive),
                                  "form-group": true,
                                  "text-right": true,
                                  "dark:text-[#999]": true
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "password-input-wrapper" }, [
                                    !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                      key: 0,
                                      modelValue: unref(state).password,
                                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                      type: "password",
                                      icon: "i-heroicons-lock-closed",
                                      variant: "none",
                                      color: "primary",
                                      ui: {
                                        base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                        input: "bg-transparent",
                                        rounded: "rounded-none"
                                      },
                                      "password-visible": false,
                                      onFocus: ($event) => handleFocus("password"),
                                      onBlur: ($event) => handleBlur("password")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                      key: 1,
                                      modelValue: unref(state).password,
                                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                      type: "text",
                                      icon: "i-heroicons-lock-closed",
                                      variant: "none",
                                      color: "primary",
                                      ui: {
                                        base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                        input: "bg-transparent",
                                        rounded: "rounded-none"
                                      },
                                      onFocus: ($event) => handleFocus("password"),
                                      onBlur: ($event) => handleBlur("password")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                                    createVNode(_component_UButton, {
                                      color: "gray",
                                      variant: "ghost",
                                      icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                      class: "password-toggle hover:bg-primary-600 dark:hover:bg-primary-500",
                                      onClick: handleTogglePasswordVisibility
                                    }, null, 8, ["icon"])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["error", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(userIsNotRegistered) && unref(isEmailValid) ? (openBlock(), createBlock(_component_UFormGroup, {
                              key: 0,
                              name: "passConfirm",
                              error: unref(errors).passConfirm,
                              class: {
                                "has-value": unref(state).passConfirm !== "" || unref(passConfirmActive),
                                "form-group": true,
                                "text-right": true,
                                "dark:text-[#999]": true
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "password-input-wrapper" }, [
                                  !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                    key: 0,
                                    modelValue: unref(state).passConfirm,
                                    "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                    type: "password",
                                    error: unref(errors).passConfirm,
                                    icon: "i-heroicons-lock-closed",
                                    variant: "none",
                                    color: "primary",
                                    ui: {
                                      base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                      input: "bg-transparent",
                                      rounded: "rounded-none"
                                    },
                                    onFocus: ($event) => handleFocus("passConfirm"),
                                    onBlur: ($event) => handleBlur("passConfirm")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "error", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                    key: 1,
                                    modelValue: unref(state).passConfirm,
                                    "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                    type: "text",
                                    icon: "i-heroicons-lock-closed",
                                    variant: "none",
                                    color: "primary",
                                    ui: {
                                      base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                      input: "bg-transparent",
                                      rounded: "rounded-none"
                                    },
                                    onFocus: ($event) => handleFocus("passConfirm"),
                                    onBlur: ($event) => handleBlur("passConfirm")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                                  createVNode(_component_UButton, {
                                    color: "gray",
                                    variant: "ghost",
                                    icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                    class: "password-toggle dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-primary-500",
                                    onClick: handleTogglePasswordVisibility
                                  }, null, 8, ["icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["error", "class"])) : createCommentVNode("", true),
                            unref(isEmailValid) && unref(state).password.length >= minPwd ? (openBlock(), createBlock(_component_UButton, {
                              key: 1,
                              class: "dark:text-white dark:bg-slate-600 hover:bg-primary-600 dark:hover:bg-primary-500",
                              type: "submit",
                              color: "black",
                              loading: unref(isLoading)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(isEmailValid) && unref(userIsNotRegistered) ? "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C" : "\u0423\u0432\u0456\u0439\u0442\u0438"), 1)
                              ]),
                              _: 1
                            }, 8, ["loading"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("h3", { class: "ml-10 flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u0423\u0432\u0456\u0439\u0442\u0438 \u0434\u043E \u043C\u0430\u043F\u0438 \u043F\u0430\u043C'\u044F\u0442\u0456 "),
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          icon: "i-heroicons-x-mark-20-solid",
                          class: "flex items-center justify-center w-8 h-8 ml-2",
                          onClick: closeModal
                        })
                      ]),
                      createVNode(_component_ModalSocial),
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u0410\u0431\u043E \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443 "),
                      withDirectives((openBlock(), createBlock(_component_UForm, {
                        schema: unref(schema),
                        state: unref(state),
                        class: "space-y-4",
                        onSubmit: handleSubmit
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-3 mt-2" }, [
                            createVNode(_component_UFormGroup, {
                              name: "email",
                              error: unref(errors).email,
                              class: {
                                "has-value": unref(state).email !== "" || unref(emailActive),
                                "form-group": true,
                                "text-right": true
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).email,
                                  "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                  icon: "i-heroicons-envelope",
                                  variant: "none",
                                  color: "primary",
                                  autocomplete: "new-email",
                                  ui: {
                                    base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                    input: "bg-transparent",
                                    rounded: "rounded-none"
                                  },
                                  onFocus: ($event) => handleFocus("email"),
                                  onBlur: ($event) => handleBlur("email")
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", null, "Email")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                              ]),
                              _: 1
                            }, 8, ["error", "class"]),
                            unref(isEmailValid) ? (openBlock(), createBlock(_component_UFormGroup, {
                              key: 0,
                              name: "password",
                              error: unref(errors).password,
                              class: {
                                "has-value": unref(state).password !== "" || unref(passwordActive),
                                "form-group": true,
                                "text-right": true,
                                "dark:text-[#999]": true
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "password-input-wrapper" }, [
                                  !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                    key: 0,
                                    modelValue: unref(state).password,
                                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                    type: "password",
                                    icon: "i-heroicons-lock-closed",
                                    variant: "none",
                                    color: "primary",
                                    ui: {
                                      base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                      input: "bg-transparent",
                                      rounded: "rounded-none"
                                    },
                                    "password-visible": false,
                                    onFocus: ($event) => handleFocus("password"),
                                    onBlur: ($event) => handleBlur("password")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                    key: 1,
                                    modelValue: unref(state).password,
                                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                    type: "text",
                                    icon: "i-heroicons-lock-closed",
                                    variant: "none",
                                    color: "primary",
                                    ui: {
                                      base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                      input: "bg-transparent",
                                      rounded: "rounded-none"
                                    },
                                    onFocus: ($event) => handleFocus("password"),
                                    onBlur: ($event) => handleBlur("password")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                                  createVNode(_component_UButton, {
                                    color: "gray",
                                    variant: "ghost",
                                    icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                    class: "password-toggle hover:bg-primary-600 dark:hover:bg-primary-500",
                                    onClick: handleTogglePasswordVisibility
                                  }, null, 8, ["icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["error", "class"])) : createCommentVNode("", true)
                          ]),
                          unref(userIsNotRegistered) && unref(isEmailValid) ? (openBlock(), createBlock(_component_UFormGroup, {
                            key: 0,
                            name: "passConfirm",
                            error: unref(errors).passConfirm,
                            class: {
                              "has-value": unref(state).passConfirm !== "" || unref(passConfirmActive),
                              "form-group": true,
                              "text-right": true,
                              "dark:text-[#999]": true
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "password-input-wrapper" }, [
                                !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                  key: 0,
                                  modelValue: unref(state).passConfirm,
                                  "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                  type: "password",
                                  error: unref(errors).passConfirm,
                                  icon: "i-heroicons-lock-closed",
                                  variant: "none",
                                  color: "primary",
                                  ui: {
                                    base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                    input: "bg-transparent",
                                    rounded: "rounded-none"
                                  },
                                  onFocus: ($event) => handleFocus("passConfirm"),
                                  onBlur: ($event) => handleBlur("passConfirm")
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "error", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                  key: 1,
                                  modelValue: unref(state).passConfirm,
                                  "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                                  type: "text",
                                  icon: "i-heroicons-lock-closed",
                                  variant: "none",
                                  color: "primary",
                                  ui: {
                                    base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                    input: "bg-transparent",
                                    rounded: "rounded-none"
                                  },
                                  onFocus: ($event) => handleFocus("passConfirm"),
                                  onBlur: ($event) => handleBlur("passConfirm")
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                                createVNode(_component_UButton, {
                                  color: "gray",
                                  variant: "ghost",
                                  icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                  class: "password-toggle dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-primary-500",
                                  onClick: handleTogglePasswordVisibility
                                }, null, 8, ["icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["error", "class"])) : createCommentVNode("", true),
                          unref(isEmailValid) && unref(state).password.length >= minPwd ? (openBlock(), createBlock(_component_UButton, {
                            key: 1,
                            class: "dark:text-white dark:bg-slate-600 hover:bg-primary-600 dark:hover:bg-primary-500",
                            type: "submit",
                            color: "black",
                            loading: unref(isLoading)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isEmailValid) && unref(userIsNotRegistered) ? "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C" : "\u0423\u0432\u0456\u0439\u0442\u0438"), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["schema", "state"])), [
                        [_directive_auto_animate]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UCard, { ui: {
                ring: "",
                divide: "divide-y divide-gray-100 dark:divide-gray-800"
              } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center" data-v-b38ca310${_scopeId2}><h3 class="flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" data-v-b38ca310${_scopeId2}> \u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0437 \u0443\u0441\u043F\u0456\u0448\u043D\u043E\u044E \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044E! </h3>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "flex items-center justify-center w-8 h-8 ml-2",
                      onClick: () => {
                        isOpen.value = false;
                        clearVars();
                      }
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" data-v-b38ca310${_scopeId2}> \u041B\u0438\u0441\u0442 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0456\u0457 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043D\u0430 ${ssrInterpolate(unref(state).email)}</h3>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("h3", { class: "flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0437 \u0443\u0441\u043F\u0456\u0448\u043D\u043E\u044E \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044E! "),
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          icon: "i-heroicons-x-mark-20-solid",
                          class: "flex items-center justify-center w-8 h-8 ml-2",
                          onClick: () => {
                            isOpen.value = false;
                            clearVars();
                          }
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u041B\u0438\u0441\u0442 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0456\u0457 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043D\u0430 " + toDisplayString(unref(state).email), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              !unref(sendActivationEmail) ? (openBlock(), createBlock(_component_UCard, {
                key: 0,
                ui: {
                  ring: "",
                  divide: "divide-y divide-gray-100 dark:divide-gray-800"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("h3", { class: "ml-10 flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u0423\u0432\u0456\u0439\u0442\u0438 \u0434\u043E \u043C\u0430\u043F\u0438 \u043F\u0430\u043C'\u044F\u0442\u0456 "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "flex items-center justify-center w-8 h-8 ml-2",
                      onClick: closeModal
                    })
                  ]),
                  createVNode(_component_ModalSocial),
                  createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u0410\u0431\u043E \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443 "),
                  withDirectives((openBlock(), createBlock(_component_UForm, {
                    schema: unref(schema),
                    state: unref(state),
                    class: "space-y-4",
                    onSubmit: handleSubmit
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-3 mt-2" }, [
                        createVNode(_component_UFormGroup, {
                          name: "email",
                          error: unref(errors).email,
                          class: {
                            "has-value": unref(state).email !== "" || unref(emailActive),
                            "form-group": true,
                            "text-right": true
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(state).email,
                              "onUpdate:modelValue": ($event) => unref(state).email = $event,
                              icon: "i-heroicons-envelope",
                              variant: "none",
                              color: "primary",
                              autocomplete: "new-email",
                              ui: {
                                base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                input: "bg-transparent",
                                rounded: "rounded-none"
                              },
                              onFocus: ($event) => handleFocus("email"),
                              onBlur: ($event) => handleBlur("email")
                            }, {
                              default: withCtx(() => [
                                createVNode("label", null, "Email")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                          ]),
                          _: 1
                        }, 8, ["error", "class"]),
                        unref(isEmailValid) ? (openBlock(), createBlock(_component_UFormGroup, {
                          key: 0,
                          name: "password",
                          error: unref(errors).password,
                          class: {
                            "has-value": unref(state).password !== "" || unref(passwordActive),
                            "form-group": true,
                            "text-right": true,
                            "dark:text-[#999]": true
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "password-input-wrapper" }, [
                              !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                                key: 0,
                                modelValue: unref(state).password,
                                "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                type: "password",
                                icon: "i-heroicons-lock-closed",
                                variant: "none",
                                color: "primary",
                                ui: {
                                  base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                  input: "bg-transparent",
                                  rounded: "rounded-none"
                                },
                                "password-visible": false,
                                onFocus: ($event) => handleFocus("password"),
                                onBlur: ($event) => handleBlur("password")
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                                key: 1,
                                modelValue: unref(state).password,
                                "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                type: "text",
                                icon: "i-heroicons-lock-closed",
                                variant: "none",
                                color: "primary",
                                ui: {
                                  base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                  input: "bg-transparent",
                                  rounded: "rounded-none"
                                },
                                onFocus: ($event) => handleFocus("password"),
                                onBlur: ($event) => handleBlur("password")
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                              createVNode(_component_UButton, {
                                color: "gray",
                                variant: "ghost",
                                icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                                class: "password-toggle hover:bg-primary-600 dark:hover:bg-primary-500",
                                onClick: handleTogglePasswordVisibility
                              }, null, 8, ["icon"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["error", "class"])) : createCommentVNode("", true)
                      ]),
                      unref(userIsNotRegistered) && unref(isEmailValid) ? (openBlock(), createBlock(_component_UFormGroup, {
                        key: 0,
                        name: "passConfirm",
                        error: unref(errors).passConfirm,
                        class: {
                          "has-value": unref(state).passConfirm !== "" || unref(passConfirmActive),
                          "form-group": true,
                          "text-right": true,
                          "dark:text-[#999]": true
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "password-input-wrapper" }, [
                            !unref(togglePasswordVisibility) ? (openBlock(), createBlock(_component_UInput, {
                              key: 0,
                              modelValue: unref(state).passConfirm,
                              "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                              type: "password",
                              error: unref(errors).passConfirm,
                              icon: "i-heroicons-lock-closed",
                              variant: "none",
                              color: "primary",
                              ui: {
                                base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                input: "bg-transparent",
                                rounded: "rounded-none"
                              },
                              onFocus: ($event) => handleFocus("passConfirm"),
                              onBlur: ($event) => handleBlur("passConfirm")
                            }, {
                              default: withCtx(() => [
                                createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "error", "onFocus", "onBlur"])) : (openBlock(), createBlock(_component_UInput, {
                              key: 1,
                              modelValue: unref(state).passConfirm,
                              "onUpdate:modelValue": ($event) => unref(state).passConfirm = $event,
                              type: "text",
                              icon: "i-heroicons-lock-closed",
                              variant: "none",
                              color: "primary",
                              ui: {
                                base: "border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0",
                                input: "bg-transparent",
                                rounded: "rounded-none"
                              },
                              onFocus: ($event) => handleFocus("passConfirm"),
                              onBlur: ($event) => handleBlur("passConfirm")
                            }, {
                              default: withCtx(() => [
                                createVNode("label", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])),
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "ghost",
                              icon: unref(togglePasswordVisibility) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                              class: "password-toggle dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-primary-500",
                              onClick: handleTogglePasswordVisibility
                            }, null, 8, ["icon"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["error", "class"])) : createCommentVNode("", true),
                      unref(isEmailValid) && unref(state).password.length >= minPwd ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        class: "dark:text-white dark:bg-slate-600 hover:bg-primary-600 dark:hover:bg-primary-500",
                        type: "submit",
                        color: "black",
                        loading: unref(isLoading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(isEmailValid) && unref(userIsNotRegistered) ? "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C" : "\u0423\u0432\u0456\u0439\u0442\u0438"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["schema", "state"])), [
                    [_directive_auto_animate]
                  ])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_UCard, {
                key: 1,
                ui: {
                  ring: "",
                  divide: "divide-y divide-gray-100 dark:divide-gray-800"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("h3", { class: "flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0437 \u0443\u0441\u043F\u0456\u0448\u043D\u043E\u044E \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044E! "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "flex items-center justify-center w-8 h-8 ml-2",
                      onClick: () => {
                        isOpen.value = false;
                        clearVars();
                      }
                    }, null, 8, ["onClick"])
                  ]),
                  createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center" }, " \u041B\u0438\u0441\u0442 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0456\u0457 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043D\u0430 " + toDisplayString(unref(state).email), 1)
                ]),
                _: 1
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/LoginRegistration.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LoginRegistration = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b38ca310"]]);
const _sfc_main = {
  __name: "HeaderMain",
  __ssrInlineRender: true,
  setup(__props) {
    const loginRegistrationRef = ref(null);
    const authStore = useAuthStore();
    const menuOpen = ref(false);
    const route = useRoute();
    const isHomePage = computed(() => route.path === "/");
    const isAuthed = computed(() => authStore.isAuthed);
    const handleModalClosed = () => {
      menuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_ColorMode = _sfc_main$c;
      const _component_UIcon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "home-page": unref(isHomePage) }, "header-main bg-gray-100"]
      }, _attrs))} data-v-e6f11569><div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-2" data-v-e6f11569><div class="flex justify-between items-center" data-v-e6f11569><div class="flex items-center" data-v-e6f11569><div class="cursor-pointer logo" data-v-e6f11569>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-10 h-10" data-v-e6f11569${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "w-10 h-10"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center space-x-4 header-buttons text-white" data-v-e6f11569><span \u0441lass="cursor-pointer font-bold" data-v-e6f11569>Ua</span><span data-v-e6f11569>|</span><span data-v-e6f11569>En</span>`);
      _push(ssrRenderComponent(_component_ColorMode, null, null, _parent));
      _push(`<button class="md:hidden p-2 rounded-full hover:bg-gray-200 focus:outline-none" data-v-e6f11569>`);
      if (!unref(menuOpen)) {
        _push(ssrRenderComponent(_component_UIcon, {
          key: "bars",
          name: "i-heroicons-bars-3",
          class: "icon w-10 h-10"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-x-mark",
          class: "icon w-10 h-10"
        }, null, _parent));
      }
      _push(`</button>`);
      if (!unref(isAuthed)) {
        _push(`<button class="hidden md:block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none" data-v-e6f11569> \u0423\u0432\u0456\u0439\u0442\u0438 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-4" data-v-e6f11569>`);
      _push(ssrRenderComponent(LoginRegistration, {
        ref_key: "loginRegistrationRef",
        ref: loginRegistrationRef,
        onModalClosed: handleModalClosed
      }, null, _parent));
      _push(`</div><p class="mt-6 text-center text-gray-200 header-text" data-v-e6f11569><span class="font-bold" data-v-e6f11569>\u041C\u0430\u043F\u0430 \u043F\u0430\u043C&#39;\u044F\u0442\u0456:</span> \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u0442\u0430 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0441\u0442\u0456 </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6f11569"]]);

export { HeaderMain as default };
//# sourceMappingURL=HeaderMain-DYfKKYm2.mjs.map
