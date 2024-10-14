import { _ as __nuxt_component_0 } from "./nuxt-link-WQaQD4mm.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "tailwind-merge";
import "@iconify/vue";
import "axios";
import "mitt";
import "vue-recaptcha-v3";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 py-8" }, _attrs))}><h1 class="text-4xl font-bold text-center mb-8 dark:text-white"> Як допомогти </h1><div class="bg-gray-100 p-6 rounded-lg shadow-md mb-1"><h2 class="text-2xl font-semibold">Ми шукаємо волонтерів!</h2><p class="mt-2 text-lg"> Для розвитку нашого геопорталу ми шукаємо волонтерів, які допоможуть зробити його кориснішим для суспільства. Особливо нам потрібні: </p><ul class="list-disc list-inside mt-4 space-y-2 text-lg"><li><strong>Дизайнери</strong> — для покращення користувальницького інтерфейсу та загального візуального оформлення. </li><li><strong>Тестувальники</strong> — для забезпечення якості роботи порталу та виявлення помилок. </li><li><strong>Юристи</strong> — для наповнення тематичних розділів та довідників платформи, корисною інформацією та допомоги розроблення шаблонів документів націлених спростити ВПО отримання компенсації за втрачене або пошкоджене майно. </li><li><strong>Представники громадських та благодійних організацій</strong> — для наповнення контенту платформи та розроблення технічних завдань впровадження корисних послуг для ВПО та благодійних організацій. </li></ul><p class="mt-2 text-lg"> Якщо ви початківець, але маєте цікаві ідеї та бажання розвиватись в команді - звертайтесь до нас: <a href="mailto:admin@memory.p.ua" _blank>admin@memory.p.ua</a>, це гарна можливість напрацювати власне портфоліо. Функціональний сайт з потужною соціальною метою стане гарним приводом для ваших майбутніх роботодавців звернути увагу на вас і ваші здібності, цінності та мотивацію. </p></div><div class="bg-gray-100 p-6 rounded-lg shadow-md mb-1"><h2 class="text-2xl font-semibold">Фінансова підтримка</h2><p class="mt-2 text-lg"> Ваші пожертвування допоможуть сплачувати нам за послуги та інфраструктуру, необхідні для подальшого розвитку проекту. Ми будемо вдячні за будь-яку фінансову підтримку та поширення! </p></div><div class="bg-gray-100 p-6 rounded-lg shadow-md mb-1"><h3 class="text-2xl font-semibold">Приєднуйтесь до нашого проекту!</h3><p class="mt-2 text-lg"> Якщо ви хочете стати частиною нашої команди або надати фінансову підтримки, зв&#39;яжіться з нами <a href="mailto:admin@memory.p.ua" _blank>admin@memory.p.ua</a>. Ми будемо раді будь-якому внеску, незалежно від вашого досвіду чи можливостей! </p><p class="mt-2 text-lg"> Якщо ви хочете дізнатись більше про нашу команду: `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://cfhope.in.ua",
    class: "text-blue-500 underline hover:text-blue-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Благодійний фонд соціальних реформ та підтримки &quot;Надія&quot; `);
      } else {
        return [
          createTextVNode(' Благодійний фонд соціальних реформ та підтримки "Надія" ')
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`. </p></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/howtohelp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howtohelp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  howtohelp as default
};
//# sourceMappingURL=howtohelp-lHZzrJ7u.js.map
