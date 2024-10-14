import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgBjVMBEcIwDOxQUBwUB8PBHICEOWAOmANAwbCAgkkAB5WwOQhfLmVptg5y93e5JM1/0tYYYURkgTPgabIn0AHOLBkSJ2AAeqABjkDFvudcs3SIZom0pk1qggQOtKqwDIwq1jCzM6zfi6RTM3o5H49y3cAvgZto3AMvYAvs2O9F/gEcDHetlOxSKaDIykujwDgCTu3CLvijiI1fzWoGz52P7Hci34WaSB02ZTkRHsGdYwMXWiW7jl0GfR1LFl+VDLSSNXMoXlMtg5aDl5WDXcImEpW+CsVGCZsq6D8bm8efcrO5OZJfQNMHcGbN5EMWjVpdV2QOS7m2KIq9+ccE0/BTYkZyncu/ATnHq9q9ei5oAAAAAElFTkSuQmCC";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACGSURBVHgB7VTBDYAgDCzGPXQUV3AC2UQ2gA1kJEfQCRyhXg0PQhSJ8ckll0LTa/vgIAKY2YIHv8NKvcJBIy6gB3d6Rg9O4ChTjLSgAoRppqEPqKIq+kHUpgk8yB5BRymvlNqyImAA5+guAp8VoatPi+7WW8NaYsScCbto8iVwBVaX78BJ/QnBNnoBo97JCAAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARSSURBVHgB7Zk/bBN3FMffO8emIIXaabPQxRkqBTOEDO2KUaWuTVRC1aEC1jKEbt2wt45kaNcaMSCUSGRihLAhGHCEMCAGzBAW/tgEEiDn+z1+72ef47PPvt/9iTkjPpJ957ufT/e9997vvfc7gM8EhIg4erWWNk2YAxQzRJjlQ2hAmgjS7UEEVUSoyp0yEK0nk4m18nymChEQSgjf/E4DFhEoTwB5CEYZSSyFFRVISFsA0jnHEw+JvF4pmTCKQQT5FpJbrp2PWkAvWKgsZIq+/qE7UFohu9Ogq7wLw0DGUiqBx3WtY+gMml6pnTItugvDEsEQ8IO7e/hKbU5nuKdF2JXkVQsQkh8mx+DHySRMpxPqc+jA7jPcNAneys/GloA3re0/69udt+npagOFRCGCBZzN7VdbPxxZqXUdGSymr2sdvvJiLqyIP77fB6Vj475FuEOFIyubp/qddRXCgW0kjP8hBGdzX8HfMwcgSogaF/je3M65Ctmx6EaY6fU76f9/SnfaA9KtmbOHHiEqLuSMASHYIxE2R3PLLwvdBx3B3soVTyAE40mEW7/4N+bGtnD8/vna60HD66kxnJI5pm4fcEShaYnzYetIP4H9b+UdrFZ34FmXCA2ki4lzcluwD7Rdi60hq9bTEBLOETpwnviv8j6IiBa4yDWf/astxDStPEQAu5YXt5834NLjDxAS2yqK3WBHYxEi4KCGkEd1C6IAAY/Z+0qIcqsh1lGbZlB3csI9kO1eSkhUbvUpMIWlikolhAwcXlUbMWQ1710JQcIZGFkwy99q0ifO5D7SR2cJ3s14yrvFOZg0Bl6DS3ou7bUwQBlB3X5u+ZXmv5rcP5GBvYSnZmc/MpB6ZWEio9UhDps7z00/w3dnrbih7VYdNIUg1CFGBEmYTSEiPkJYhC+LqJVLW4gBZYgJG9v+rIHUKQToKcSEBz7diuQaMm9VHkFBZUL9RMJ9RD9+OpTyLOXvyOr3dp+Z6fozXzOW9CxDeZMSIheQV2VnqL3YwH1EP7hf9xLCIgZdww+WBWu8Va7FLaO0xxqMGDI+yg9/by6ptvMIAd2EkQOX7L22kNSYcSFu+cQL262YthC1IkG0BKMCYsl2K8ZRooySVYQJjnVgh5DRsQoVO63B9BSNlYVvCnIGi02m70Fmcr7H7sOu1a/VwPk4uph8wHVh4XG3c65C2Gwo8C+IGULgmW6Xsunbj9w/mSmxL0JsoOKD3zKr/c4ObKyavhgHMVR0i4tOPDtEvkACP03MqJgwxBkvEYxWq3vvRGZVmDgLrdp/SJTlpDP78NdvSzqDtXt2DrLKyYmpvXY1tkLTlSZm+wW2G74XH9jMooFTssi8CBFiC9iSL3B0XKmbQK9bW0/q9PTlWiGRgLyspxeDLoJz+8CV95Ysj6rzE4HjMNR745agEn+kqCyL+nof5uVvXv3j9aZs1194fH1yP67LZdq1raR8YdXx+uwLko8zB71u5uJefQAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUzSURBVHgB3ZpNbBNHFMffW9uhRQ112nIJh5oDUgiqkh7aQy8EeuulpgSqSkWk11Zq4FYpSNi3HptKcI0rDhVKpHCtKCJcemgixRziJOJQc0gu/bCbyC54szt9b5w1/tiPmfXaWPyksKvd2fX85/1n5s0sAK8ICBExuVxKmiakAe0JITDFl9CApBCQbBQSUESEIp3kQYjHiURsJX9hpAgR0JUQrnztAGYRxJQAmIJw5FHY892KCiWkIQDFtZYW7xJ6Xy4RM7JhBGkLGV8s3YxaQCeYKVwayWo9oVqQopCqHYhlPoV+QH1pKIbnVKNjqBQaWypdNS2xDv0SwQjghls/fbeUVikeKIStZAiR662VPEmiIZa5DkEFfa1Vf4HIwEDg3288hZy++1caDWMZBgjE+MzG9LGfXO+5XeSOzX3iJdnJj/JQHN93GwBc+0jNEg8HUASTPBw5O+gQIvsFjRjQZz44HofvJo7C/U/ehI3pEXnuweT44t+Z9ost1jqcK/6APnEsgXDl1GtwfjQBY8lYx/0zSyWvR9liJ8liZedCvPmuadk3I8wjPeHWT797BM6fSEgxISCL2dfomHEuNN7S62hwhT9NDcHHo0NSSBDbZQs++3XPr0hLVBpvNE1rClBpotfCsc+Xp45otf6/pggq0hKVF02DxixECLf6N+OvK7W+G7sVK7AMAp51zmUI2FYiojwqTfbJnR2Wf34itsr+Fd2p2hAEr4F4ScHn8pe6tZWOffbJMnOrFVj98wB+oaHWq/x2OTgijGlbnFTmpBBh4CQEWrITbnHuvNyJVfz/YLcGN1ar8nyBIub3zK5CRBhhoXSSFIICJ3R06PrficKDXVNWnkW4zRvN7FTUhFDtU/xvPSI8kwc0qO7w6eBEYY/EqIpg4XumYtMaMMGHeo3QOyUJO3xyZW4V/oM7T5433qMigtlU7B+Sw5zQt2mvUOW/Jgvpzr6/U0e+QVZyRp4TRw348aM3lEQw2zpCQEGIroj2KDAsYmFqWB5V2alqCZHU345Qdrs5fX9PelwFjsJFKt+tCGarrC+kHhGbhGDn+oOt8e1vFYpKVSZ4nKV+eDwBw01RcotCNyIYLWvJnUtHiAF5vzUIjyD3ijX5x7DXRw8ruEaRaB9huhGhNWIBTx3NQkA81UnfOfR+4Q8rgtnUtJWgPWQ+yl9DmzaVI4IFhBXBaI5Y1PyGrLv8RdpAvgcRwf2K+0z45/WEWBas8FEK4cUJGWsFIuJ24RnMrVWU86VmdEYs6h/5rS/qOyoNDwgQjyBCeGCYWdmn43Ot5/SshfPOWUPIUNz4wWs+CQvbbG6tqhwd3RHLsRXTECLXvkLMQw9wosNrED+0RizEnGMrpmV46UVUHDg6M4/24fvHVc9W17GVbULLPnCLkF5GxYEzAE593Kx258kztZeAyDZHg3GdBc8s/rMu+vAthNf3vEDjLOEWjXS3VYZtmskLl9862X7ZNfu1DvCCkaAPOz3e/21Oe1SgVi9bFp5zu+c6BXPY0MbrMGDYNn7VbikHz1xi4/JIjr0IA4PIbn4+4pmBBGaK9Z1vDPz01VtEtnDp7YxfCaWU972lUtoCsQB9/mYi+4RhX9+6+E5OoawaYz+XUkZMPPTbqIiYvE2DjlefaCfEfxjordU4CpT3zQdZyeU5fTg6GLcztIl8FSLCEVCl7KLY9AFH4/nwsKBYDGjfWMyGnUB5+cCZd1gBTe+JBkeUDfakgbQFW9+9TDX9UJmulXl/QNjiqUEru0qC5sMuKv9K8j8dl2w1HzTScQAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "data:image/png;base64,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";
const _imports_6 = "" + buildAssetsURL("Avatar.B6kKElLk.png");
const _sfc_main = {
  name: "FooterComponent",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-wrapper" }, _attrs))} data-v-75a7761a><div class="footer" data-v-75a7761a><div class="contacts-wrapper" data-v-75a7761a><div class="contacts" data-v-75a7761a><div class="location" data-v-75a7761a><a href="https://maps.app.goo.gl/TV82VnCCFqWFcaM2A" class="sharing-item" target="_blank" data-v-75a7761a><img${ssrRenderAttr("src", _imports_0)} alt="icon" data-v-75a7761a></a><a href="https://maps.app.goo.gl/TV82VnCCFqWFcaM2A" target="_blank" data-v-75a7761a>\u043C. \u0410\u0432\u0434\u0456\u0457\u0432\u043A\u0430, \u0432\u0443\u043B. \u041C\u043E\u043B\u043E\u0434\u0456\u0436\u043D\u0430, 3\u0410</a></div><div class="phone-number" data-v-75a7761a><a href="tel:+380954664190" class="sharing-item" data-v-75a7761a><img${ssrRenderAttr("src", _imports_1)} alt="icon" data-v-75a7761a></a><a href="tel:+380954664190" data-v-75a7761a>+38 095 466-41-90</a></div></div><div class="sharing" data-v-75a7761a><a href="https://www.facebook.com/cfhopeua" target="_blank" class="sharing-item social" data-v-75a7761a><img${ssrRenderAttr("src", _imports_2)} alt="facebook" data-v-75a7761a></a><a href="https://t.me/cfhopeua" target="_blank" class="sharing-item social" data-v-75a7761a><img${ssrRenderAttr("src", _imports_3)} alt="telegram" data-v-75a7761a></a><a href="viber://chat?number=+380987654321" class="sharing-item social" target="_blank" data-v-75a7761a><img${ssrRenderAttr("src", _imports_4)} alt="viber" data-v-75a7761a></a><a href="https://www.instagram.com/cfhopeua/" class="sharing-item instagram social" target="_blank" data-v-75a7761a><img${ssrRenderAttr("src", _imports_5)} alt="instagram" data-v-75a7761a></a></div></div><div class="additional-links text-center" data-v-75a7761a>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/donation-service-terms",
    class: "terms-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F `);
      } else {
        return [
          createTextVNode(" \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/privacy-policy",
    class: "terms-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 `);
      } else {
        return [
          createTextVNode(" \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/howtohelp",
    class: "terms-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u042F\u043A \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 `);
      } else {
        return [
          createTextVNode(" \u042F\u043A \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="developers" data-v-75a7761a>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "developers-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="Avatar logo" width="50" height="50" data-v-75a7761a${_scopeId}><p class="text-center" data-v-75a7761a${_scopeId}> \u0420\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u043C \u041C\u0435\u043B\u0435\u0448\u043A\u043E <br data-v-75a7761a${_scopeId}> \u0432\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456 2024 \xA9 </p>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
            alt: "Avatar logo",
            width: "50",
            height: "50"
          }),
          createVNode("p", { class: "text-center" }, [
            createTextVNode(" \u0420\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u043C \u041C\u0435\u043B\u0435\u0448\u043A\u043E "),
            createVNode("br"),
            createTextVNode(" \u0432\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456 2024 \xA9 ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/FooterMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-75a7761a"]]);

export { FooterMain as default };
//# sourceMappingURL=FooterMain-frA8Td9N.mjs.map
