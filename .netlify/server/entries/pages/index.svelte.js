import { c as create_ssr_component, b as subscribe, v as validate_component, h as each } from "../../immutable/chunks/index-0082f715.js";
import { s as spring } from "../../immutable/chunks/index-c894ed74.js";
import { P as Project, t as topProjects } from "../../immutable/chunks/index-a15ea047.js";
var name_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1avdj74.svelte-1avdj74{overflow:visible;margin-left:-0.25rem;cursor:none;pointer-events:none}svg.interactive.svelte-1avdj74.svelte-1avdj74{pointer-events:visible}.firstname.svelte-1avdj74 path.svelte-1avdj74{transition:transform 0.2s ease, fill 0.5s;fill:#16171A}.dark .firstname.svelte-1avdj74 path.svelte-1avdj74{fill:#FAFDFF}.firstname.svelte-1avdj74 path.svelte-1avdj74:hover{fill:#10D275}svg.interactive.svelte-1avdj74:hover .firstname path.svelte-1avdj74{transform:translateY(-32px)}svg.svelte-1avdj74 .firstname path.svelte-1avdj74:nth-child(5){transition-delay:0s}svg.svelte-1avdj74 .firstname path.svelte-1avdj74:nth-child(1){transition-delay:0.2s}svg.svelte-1avdj74 .firstname path.svelte-1avdj74:nth-child(2){transition-delay:0.15s}svg.svelte-1avdj74 .firstname path.svelte-1avdj74:nth-child(3){transition-delay:0.1s}svg.svelte-1avdj74 .firstname path.svelte-1avdj74:nth-child(4),svg.svelte-1avdj74 .firstname path.svelte-1avdj74:nth-child(6){transition-delay:0.05s}.lastname.svelte-1avdj74 path.svelte-1avdj74{-webkit-animation:colorChange 20s linear alternate infinite;animation:colorChange 20s linear alternate infinite}.dot.svelte-1avdj74.svelte-1avdj74{pointer-events:none}@-webkit-keyframes svelte-1avdj74-nameColorChange{0%{fill:var(--primary-color)}33%{fill:var(--accent-color)}66%{fill:var(--link-color)}100%{fill:var(--copy-color)}}@keyframes svelte-1avdj74-nameColorChange{0%{fill:var(--primary-color)}33%{fill:var(--accent-color)}66%{fill:var(--link-color)}100%{fill:var(--copy-color)}}svg.svelte-1avdj74 circle.svelte-1avdj74{fill:#FF8426}svg.svelte-1avdj74:hover circle.svelte-1avdj74{fill:#FAFDFF}.dark svg.svelte-1avdj74:hover circle.svelte-1avdj74{fill:#FAFDFF}svg.svelte-1avdj74:hover circle.svelte-1avdj74{mix-blend-mode:difference;mix-blend-mode:exclusion;transform:translateX(-3.5px) translateY(-2px)}.wrapper.svelte-1avdj74.svelte-1avdj74{overflow:visible;width:100%;height:100%}",
  map: null
};
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_coords;
  let $$unsubscribe_size;
  let coords = spring({ x: -200, y: -270 }, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_coords = subscribe(coords, (value) => value);
  let size = spring(13);
  $$unsubscribe_size = subscribe(size, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_coords();
  $$unsubscribe_size();
  return `
<div class="${"wrapper svelte-1avdj74"}"><svg viewBox="${"0 0 397 172"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${[
    "svelte-1avdj74",
    " "
  ].join(" ").trim()}"><title>Dennis Smuda</title><g class="${"firstname svelte-1avdj74"}">${``}</g>${``}</svg>
</div>`;
});
var hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".title.svelte-1vzz95g.svelte-1vzz95g{display:flex;flex-direction:column;align-items:center;overflow:visible;width:100%;max-width:420px}.intro.svelte-1vzz95g.svelte-1vzz95g{-webkit-user-select:none;-moz-user-select:none;user-select:none;max-width:380px}.intro__paragraph.svelte-1vzz95g.svelte-1vzz95g{display:block;text-align:center;font-size:1.25rem;line-height:1.75rem;font-weight:100;line-height:1.5}.intro__paragraph.svelte-1vzz95g a.svelte-1vzz95g{font-weight:500;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.intro__paragraph.svelte-1vzz95g a.svelte-1vzz95g:hover{--tw-text-opacity:1;color:rgb(255 38 116 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}.hero.svelte-1vzz95g .container.svelte-1vzz95g{max-width:1440px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:2rem;position:relative}@media(min-width: 768px){.hero.svelte-1vzz95g .container.svelte-1vzz95g{flex-direction:row;align-items:flex-end}.title.svelte-1vzz95g.svelte-1vzz95g{width:45vw;max-width:620px}.title.svelte-1vzz95g.svelte-1vzz95g,.intro__paragraph.svelte-1vzz95g.svelte-1vzz95g{text-align:left}.title.svelte-1vzz95g.svelte-1vzz95g{margin-bottom:-1.75vw}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<section class="${"px-8 pt-16 pb-16"}"><div class="${"hero -rotate-3 svelte-1vzz95g"}"><div class="${"container main-padding svelte-1vzz95g"}">
			<div class="${"title svelte-1vzz95g"}">${validate_component(Name, "Name").$$render($$result, {}, {}, {})}</div>
			<div class="${"intro svelte-1vzz95g"}">
				
				<p class="${"intro__paragraph svelte-1vzz95g"}"><span class="${"rainbow font-medium whitespace-nowrap"}">web developer</span>
					
					<span>based in </span>
					<span class="${"german-color-change"}">germany \u{1F1E9}\u{1F1EA}</span>
					<a href="${"/projects"}" class="${"svelte-1vzz95g"}">making \u{1F468}\u{1F3FB}\u200D\u{1F4BB}</a> things and
					<a href="${"/blog"}" class="${"svelte-1vzz95g"}">writing \u270F\uFE0F</a> about stuff. feel free to
					<a class="${"whitespace-nowrap svelte-1vzz95g"}" href="${"mailto:smuda.dennis@gmail.com"}">get in touch \u{1F4EB}</a>
					, or get to
					<a class="${"whitespace-nowrap svelte-1vzz95g"}" href="${"/about"}">know me \u{1F44B}</a>
					first.
				</p></div></div></div>
</section>`;
});
var sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".latest-post.svelte-h00kap.svelte-h00kap{margin-bottom:2rem;display:block;-webkit-text-decoration-line:none;text-decoration-line:none\n}.latest-post.svelte-h00kap:hover .latest-post__title.svelte-h00kap{-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px\n}.latest-post__date.svelte-h00kap.svelte-h00kap{font-size:0.875rem;line-height:1.25rem;opacity:0.5\n}.latest-post__title.svelte-h00kap.svelte-h00kap{margin-top:0px;line-height:1.5rem\n}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="${"flex flex-wrap mt-4 gap-4"}"><a href="${"blog"}" class="${"button tag-button tag-button--vue"}">Javascript </a>
	<a href="${"/blog"}" class="${"button tag-button tag-button--vue"}">Vue </a>
	<a href="${"/blog"}" class="${"button tag-button tag-button--vue"}">Svelte </a>
	<a href="${"/blog"}" class="${"button tag-button tag-button--css"}">CSS </a>
	<a href="${"/blog"}" class="${"button tag-button tag-button--vue"}">Godot </a>
	<a href="${"/blog"}" class="${"button tag-button tag-button--vue"}">Rust </a></div>


<h2 class="${"rotated md:pt-24"}">latest posts \u270F\uFE0F</h2>

<a class="${"latest-post mt-8 svelte-h00kap"}" href="${"/blog/bevy-run-get-started"}"><span class="${"latest-post__date svelte-h00kap"}">Mar. 20, 2022 </span>
	<h3 class="${"latest-post__title svelte-h00kap"}">Get started with Rust &amp; Bevy \u{1F3AE}</h3></a>
<a class="${"latest-post mt-8 svelte-h00kap"}" href="${"/blog/serverless-auth-tutorial"}"><span class="${"latest-post__date svelte-h00kap"}">Jul. 5, 2021 </span>
	<h3 class="${"latest-post__title svelte-h00kap"}">Serverless authentication \u{1F511}</h3></a>


<a class="${"marker-link mt-4"}" href="${"/blog"}">check out all posts \u{1F4D6}</a>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Dennis Smuda \u2013 Web-Developer based in Germany</title>`, ""}<meta name="${"description"}" content="${"Web Developer from Germany, with a frontend/design/ux focus. Also a\n    musician and bike-rider."}" data-svelte="svelte-1fy2ekk"><meta name="${"keywords"}" content="${"Development, Web, Frontend, Javascript"}" data-svelte="svelte-1fy2ekk">`, ""}


${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}


<section class="${"flex flex-col-reverse max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl"}"><article class="${"ds-prose col-span-7 md:mt-20"}"><h2 class="${"rotated"}">latest work \u{1F3C1}</h2>

		${each(topProjects, (project) => {
    return `${validate_component(Project, "Project").$$render($$result, {
      url: project.url,
      headline: project.headline,
      subline: project.subline,
      description: project.description
    }, {}, {})}`;
  })}</article>

	<aside class="${"ds-prose col-span-5 -mt-12"}"><h2 class="${"rotated"}">making things with \u{1F6E0}</h2>

		${validate_component(Sidebar, "HomeSidebar").$$render($$result, {}, {}, {})}</aside></section>`;
});
export { Routes as default };
