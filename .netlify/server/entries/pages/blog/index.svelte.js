import { c as create_ssr_component, v as validate_component, h as each, e as escape } from "../../../immutable/chunks/index-0082f715.js";
import { H as Header } from "../../../immutable/chunks/header-5fa0d2bd.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post.svelte-1qgy4kg.svelte-1qgy4kg{position:relative;left:-0.5rem;right:-0.5rem;margin-top:4rem;margin-bottom:4rem;display:block;border-radius:0.5rem;padding-left:0.5rem;padding-right:0.5rem;-webkit-text-decoration-line:none;text-decoration-line:none}@media(min-width: 768px){.post.svelte-1qgy4kg.svelte-1qgy4kg{margin-top:8rem;margin-bottom:8rem}}.post__date.svelte-1qgy4kg.svelte-1qgy4kg{position:absolute;line-height:1;opacity:0.5;top:-25px}@media(min-width: 768px){.post__date.svelte-1qgy4kg.svelte-1qgy4kg{top:-27px}}.post__headline.svelte-1qgy4kg.svelte-1qgy4kg{margin-bottom:0px}.post.svelte-1qgy4kg:hover .post__headline.svelte-1qgy4kg{-webkit-text-decoration-line:underline;text-decoration-line:underline}.post__subline.svelte-1qgy4kg.svelte-1qgy4kg{pointer-events:none;margin-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;opacity:0.5}.post.svelte-1qgy4kg:hover .timeline__dot.svelte-1qgy4kg{--tw-scale-x:1.5;--tw-scale-y:1.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(255 38 116 / var(--tw-bg-opacity))}.timeline.svelte-1qgy4kg.svelte-1qgy4kg{top:-1.5rem}.timeline__dot.svelte-1qgy4kg.svelte-1qgy4kg{top:-1.5rem;left:-1rem;transition-duration:200ms}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Writing | Dennis Smuda</title>`, ""}<meta name="${"description"}" content="${"My blog, where I write mostly about stuff I've learned on my journey."}" data-svelte="svelte-1xttcq4">`, ""}

${validate_component(Header, "Header").$$render($$result, {
    title: "writing \u270F\uFE0F",
    subtitle: "some thoughts and words"
  }, {}, {})}

<section class="${"container lg:max-w-4xl mx-auto px-8"}"><div class="${"ds-prose relative"}" id="${"blog-post-list"}"><div class="${"timeline svelte-1qgy4kg"}"></div>
		${each(posts, (post) => {
    return `<a class="${"post svelte-1qgy4kg"}" href="${"/blog/" + escape(post.path, true)}" sveltekit:prefetch><div class="${"timeline__dot svelte-1qgy4kg"}"></div>
				<div class="${"post__date svelte-1qgy4kg"}">${escape(post.createdAt)}</div>
				<h2 class="${"post__headline svelte-1qgy4kg"}">${escape(post.title)}</h2>
				<p class="${"post__subline svelte-1qgy4kg"}">${escape(post.description)}</p>
				<div class="${"flex"}">${each(post.tags, (tag) => {
      return `<button class="${"button tag tag--" + escape(tag.value, true) + " svelte-1qgy4kg"}">${escape(tag.name)}
						</button>`;
    })}</div>
			</a>`;
  })}</div>
</section>`;
});
export { Blog as default };
