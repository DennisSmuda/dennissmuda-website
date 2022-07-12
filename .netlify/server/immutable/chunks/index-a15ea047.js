import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-0082f715.js";
var project_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.project.svelte-1p9kd7g.svelte-1p9kd7g{position:relative;margin-bottom:4rem;display:block;-webkit-text-decoration-line:none;text-decoration-line:none}@media(min-width: 1024px){a.project.svelte-1p9kd7g.svelte-1p9kd7g{margin-bottom:6rem}}.project.svelte-1p9kd7g.svelte-1p9kd7g:focus{-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(22 23 26 / var(--tw-ring-opacity));--tw-ring-offset-width:2px;--tw-ring-offset-color:#16171A}.project.svelte-1p9kd7g:focus .project__headline.svelte-1p9kd7g,.project.svelte-1p9kd7g:hover .project__headline.svelte-1p9kd7g{-webkit-text-decoration-line:underline;text-decoration-line:underline}.project__headline.svelte-1p9kd7g.svelte-1p9kd7g{pointer-events:none;margin-bottom:0px;text-underline-offset:2px}.project__subline.svelte-1p9kd7g.svelte-1p9kd7g{pointer-events:none;margin-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;opacity:0.5}.project__description.svelte-1p9kd7g.svelte-1p9kd7g{pointer-events:none;margin-top:0px;max-width:20rem;font-size:0.875rem;line-height:1.25rem}.visit.svelte-1p9kd7g.svelte-1p9kd7g{position:absolute;bottom:100%;left:-0.5rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-translate-y:1rem;--tw-rotate:0deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0}.project.svelte-1p9kd7g:hover .visit.svelte-1p9kd7g{--tw-translate-y:0px;--tw-rotate:-3deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { headline } = $$props;
  let { subline } = $$props;
  let { description } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.headline === void 0 && $$bindings.headline && headline !== void 0)
    $$bindings.headline(headline);
  if ($$props.subline === void 0 && $$bindings.subline && subline !== void 0)
    $$bindings.subline(subline);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `<a class="${"project svelte-1p9kd7g"}"${add_attribute("href", url, 0)} target="${"_blank"}" rel="${"noreferrer"}"><span class="${"visit svelte-1p9kd7g"}">visit \u{1F440}</span>
	<h2 class="${"project__headline svelte-1p9kd7g"}"><!-- HTML_TAG_START -->${headline}<!-- HTML_TAG_END --></h2>
	<p class="${"project__subline svelte-1p9kd7g"}">${escape(subline)}</p>
	<p class="${"project__description svelte-1p9kd7g"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>
</a>`;
});
const projects = [
  {
    url: "https://dennissmuda.itch.io/generic-rogue-shooter",
    headline: `I put a <span class="emphasis">game</span> on itch \u{1F3AE}`,
    subline: "generic roguelike shooter to play in your browser",
    description: "see how many waves you can survive... check it out, and let me know how it went."
  },
  {
    url: "https://lukasgorgon.com/",
    headline: 'A website for a <span class="emphasis">drone pilot</span> \u{1F681}',
    subline: "static next.js + tailwind website",
    description: `Lukas is a buddy of mine and makes awesome drone videos! I
			built a small website that let's him showcase his work.`
  },
  {
    url: "https://www.tri-deals.de/",
    headline: `(Tri)Deals for <span class="emphasis">triathletes</span> \u{1F4AA}`,
    subline: `vue.js frontend`,
    description: `a website that has handpicked deals for very sporty people`
  },
  {
    url: "https://kontakthelfer.de/",
    headline: `We've built <span class="emphasis">KontaktHelfer</span> \u{1F4D2}`,
    subline: `vue.js, graphql and qr-codes`,
    description: `a platform to handle <span class="emphasis">contact-list</span> keeping via qr-codes.`
  },
  {
    url: "https://backytracky.com/",
    headline: `Practice music with <span class="emphasis">BackyTracky</span> \u{1F3B9}`,
    subline: `svelte frontend + serverless API`,
    description: `something to help you practice solos, scales and licks.
				create your own tracks, or jam to other peoples <span class="emphasis">backing tracks</span>!`
  }
];
const topProjects = projects.slice(0, 3);
export { Project as P, projects as p, topProjects as t };
