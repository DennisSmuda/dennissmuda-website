import { c as create_ssr_component, e as escape } from "./index-0082f715.js";
var header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".subtitle.svelte-1jz5zk5{display:block;font-size:1.25rem;line-height:1.75rem;line-height:1.5\n}@media(min-width: 768px){.subtitle.svelte-1jz5zk5{font-size:1.5rem;line-height:2rem\n    }}.subtitle.svelte-1jz5zk5{margin-left:0.5rem;width:10rem;opacity:0.5\n}@media(min-width: 768px){.subtitle.svelte-1jz5zk5{margin-left:1rem;width:14rem\n    }}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  $$result.css.add(css);
  return `<section class="${""}"><div class="${"container mx-auto px-6 md:px-8 pt-8"}"><div class="${"-rotate-3 flex flex-col relative md:-inset-x-4"}"><h1 class="${"main-heading color-change"}">${escape(title)}</h1>
			<p class="${"subtitle mb-2 svelte-1jz5zk5"}">${escape(subtitle)}</p></div></div>
</section>`;
});
export { Header as H };
