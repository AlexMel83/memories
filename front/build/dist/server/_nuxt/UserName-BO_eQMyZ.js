import { _ as __nuxt_component_2 } from "./Icon-DAERXBl-.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-WQaQD4mm.js";
import { ref, watch, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, e as useAuthStore } from "../server.mjs";
import { useRoute } from "vue-router";
import "./index-BIbsiujd.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
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
  __name: "UserName",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useAuthStore();
    const menuOpen = ref(false);
    const route = useRoute();
    const userName = ref("");
    const userSurname = ref("");
    const updateUserData = () => {
      userName.value = store.userData.user.name;
      userSurname.value = store.userData.user.surname;
    };
    watch(
      () => localStorage.getItem("userData"),
      (newVal) => {
        if (newVal) {
          updateUserData();
        }
      },
      { immediate: true }
    );
    const isInCabinet = computed(() => {
      const currentPath = route.path;
      return currentPath.startsWith("/manager") || currentPath.startsWith("/user") || currentPath.startsWith("/admin");
    });
    const setRout = () => {
      switch (store.userData.user.role) {
        case "manager":
          return "/manager";
        case "user":
          return "/user";
        case "admin":
          return "/admin";
        default:
          return "/";
      }
    };
    const goOut = () => {
      menuOpen.value = false;
      store.logOut();
      localStorage.removeItem("userData");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_2;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-user-auth-name" }, _attrs))} data-v-d2fe7e9c><div class="item main-user-auth-name" data-v-d2fe7e9c><span data-v-d2fe7e9c>${ssrInterpolate(userName.value)}</span>  <span data-v-d2fe7e9c>${ssrInterpolate(userSurname.value)}</span></div><div class="${ssrRenderClass([{ active: isInCabinet.value }, "item cabinet"])}" data-v-d2fe7e9c><a${ssrRenderAttr("href", setRout())} data-v-d2fe7e9c><span class="flex items-center" data-v-d2fe7e9c>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-user-solid",
        class: "icon"
      }, null, _parent));
      _push(`Кабінет</span></a></div><div class="item exit" data-v-d2fe7e9c>`);
      _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center" data-v-d2fe7e9c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-right-start-on-rectangle-solid",
              class: "icon"
            }, null, _parent2, _scopeId));
            _push2(`Вихід</span>`);
          } else {
            return [
              createVNode("span", {
                class: "flex items-center",
                onClick: goOut
              }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-right-start-on-rectangle-solid",
                  class: "icon"
                }),
                createTextVNode("Вихід")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/UserName.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserName = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2fe7e9c"]]);
export {
  UserName as default
};
//# sourceMappingURL=UserName-BO_eQMyZ.js.map
