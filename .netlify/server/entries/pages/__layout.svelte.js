import { c as create_ssr_component, a as add_attribute, g as getContext, b as subscribe, v as validate_component, e as escape } from "../../immutable/chunks/index-0082f715.js";
import { s as spring } from "../../immutable/chunks/index-c894ed74.js";
var backgroundShape_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".background-shape-wrapper.svelte-1a0h3oe{position:absolute;top:0px;left:0px;right:0px;z-index:0;height:100%;overflow:hidden}.background-shape.svelte-1a0h3oe{position:relative;left:0;right:0;width:100%;height:14rem;transform:rotate(-4deg) scaleX(1.8) scaleY(3) translateX(10%);transform-origin:center;opacity:0.5}.svg-shape-wrapper.svelte-1a0h3oe{pointer-events:none;position:fixed;top:0px;left:0px;right:0px;z-index:50;height:100%;overflow:hidden;display:none;mix-blend-mode:difference}@media(min-width: 768px){.svg-shape-wrapper.svelte-1a0h3oe{display:block}}svg.svelte-1a0h3oe{width:100%;height:100%;position:fixed;z-index:0}circle.svelte-1a0h3oe{fill:#FFD100}",
  map: null
};
const Background_shape = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { coords } = $$props;
  let { size } = $$props;
  if ($$props.coords === void 0 && $$bindings.coords && coords !== void 0)
    $$bindings.coords(coords);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$5);
  return `<div class="${"background-shape-wrapper svelte-1a0h3oe"}"><div class="${"background-shape svelte-1a0h3oe"}"></div>
	<div class="${"circle"}"></div></div>
<div class="${"svg-shape-wrapper svelte-1a0h3oe"}"><svg class="${"svelte-1a0h3oe"}"><circle${add_attribute("cx", coords.x, 0)}${add_attribute("cy", coords.y, 0)}${add_attribute("r", size, 0)} class="${"svelte-1a0h3oe"}"></circle></svg>
</div>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".logo.svelte-cz10kx.svelte-cz10kx{display:flex;align-items:center;justify-content:center;font-size:2.25rem;line-height:2.5rem;font-weight:900;margin:0px;height:3rem;cursor:pointer;border-radius:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;letter-spacing:-2.3px\n}.logo.svelte-cz10kx span.svelte-cz10kx{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.logo[aria-current].svelte-cz10kx span.svelte-cz10kx{--tw-text-opacity:1;color:rgb(255 132 38 / var(--tw-text-opacity))\n}.logo.svelte-cz10kx:hover span.svelte-cz10kx{--tw-translate-y:-0.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.logo.svelte-cz10kx:focus span.svelte-cz10kx{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:75ms\n}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$4);
  return `<a href="${"/"}" class="${"logo button svelte-cz10kx"}"${add_attribute("aria-current", active ? "true" : void 0, 0)}>ds
	<span class="${"svelte-cz10kx"}">.</span>
</a>`;
});
var themeToggle_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-oujm4u span.svelte-oujm4u{font-size:1.5rem;line-height:2rem\n}",
  map: null
};
const Theme_toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkButton;
  let lightButton;
  $$result.css.add(css$3);
  return `<button id="${"theme-toggle"}" type="${"button"}" class="${"w-9 h-9 flex items-center justify-center color-black dark:color-white ml-1 svelte-oujm4u"}"><span class="${"sr-only svelte-oujm4u"}">theme color toggle</span>
	<span class="${"dark-button svelte-oujm4u"}"${add_attribute("this", darkButton, 0)}>\u{1F318} </span>
	<span class="${"light-button svelte-oujm4u"}"${add_attribute("this", lightButton, 0)}>\u{1F60E} </span>
</button>`;
});
var navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".header.svelte-1lsyeqg.svelte-1lsyeqg{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding-top:1rem;padding-bottom:1rem\n}.header__nav.svelte-1lsyeqg.svelte-1lsyeqg{display:flex;align-items:center;justify-content:center\n}.header__nav.svelte-1lsyeqg>span.svelte-1lsyeqg{margin-left:0.25rem;margin-right:0.25rem;display:none;opacity:0.5\n}.header__nav.svelte-1lsyeqg a.svelte-1lsyeqg{margin-left:0.25rem;margin-right:0.25rem;border-radius:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;font-weight:500\n}@media(min-width: 640px){.header__nav.svelte-1lsyeqg a.svelte-1lsyeqg{margin-left:0.5rem;margin-right:0.5rem;padding-left:0.75rem;padding-right:0.75rem\n    }}.header__nav.svelte-1lsyeqg a.svelte-1lsyeqg:hover{--tw-text-opacity:1;color:rgb(255 38 116 / var(--tw-text-opacity))\n}.header__nav.svelte-1lsyeqg a span.svelte-1lsyeqg:first-child{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0\n}@media(min-width: 640px){.header__nav.svelte-1lsyeqg a span.svelte-1lsyeqg:first-child{position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal;margin-right:0.5rem\n    }}.header__nav.svelte-1lsyeqg a span.svelte-1lsyeqg:last-child{display:flex;font-size:1.5rem;line-height:2rem\n}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path;
  $$result.css.add(css$2);
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<header class="${"header p-4 svelte-1lsyeqg"}">${validate_component(Logo, "Logo").$$render($$result, { active: path === "/" }, {}, {})}
	

	<div class="${"header__nav svelte-1lsyeqg"}"><a class="${"button nav-button svelte-1lsyeqg"}" href="${"/blog"}"${add_attribute("aria-current", path === "/blog" ? true : void 0, 0)}><span class="${"svelte-1lsyeqg"}">writing </span>
			<span class="${"svelte-1lsyeqg"}">\u270F\uFE0F </span></a>
		<span class="${"svelte-1lsyeqg"}">|</span>
		<a class="${"button nav-button svelte-1lsyeqg"}" href="${"/about"}"${add_attribute("aria-current", path === "/about" ? true : void 0, 0)}><span class="${"svelte-1lsyeqg"}">about</span>
			<span class="${"svelte-1lsyeqg"}">\u{1F468}\u{1F3FB}\u200D\u{1F4BB} </span></a>
		<span class="${"svelte-1lsyeqg"}">|</span>
		<a class="${"button nav-button svelte-1lsyeqg"}" href="${"/work"}"${add_attribute("aria-current", path === "/work" ? true : void 0, 0)}><span class="${"svelte-1lsyeqg"}">work </span>
			<span class="${"svelte-1lsyeqg"}">\u{1F3CB}\uFE0F\u200D\u2640\uFE0F </span></a>
		<span class="${"svelte-1lsyeqg"}">|</span>
		${validate_component(Theme_toggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div>
</header>`;
});
var tailwind = "";
var app = "";
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".brand.svelte-1afqnls.svelte-1afqnls{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:2rem;font-weight:700;letter-spacing:-2.3px;text-decoration:none;border-radius:0.5rem;line-height:1.5;padding:0 0.5rem;margin-left:-0.5rem}.links.svelte-1afqnls.svelte-1afqnls{display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.links.svelte-1afqnls a.svelte-1afqnls{margin-top:1rem;margin-right:1rem;display:inline-flex;align-items:center;justify-content:center;border-radius:0.5rem}@media(min-width: 768px){.links.svelte-1afqnls a.svelte-1afqnls{margin-right:2rem}}.links.svelte-1afqnls a.svelte-1afqnls{font-size:0;position:relative}.links.svelte-1afqnls svg.svelte-1afqnls{width:2rem;height:2rem;padding:0.25rem;pointer-events:none;overflow:visible;fill:currentColor}.internal.svelte-1afqnls.svelte-1afqnls{display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end}@media(min-width: 768px){.internal.svelte-1afqnls.svelte-1afqnls{flex-direction:row;align-items:baseline}}.internal.svelte-1afqnls .button.svelte-1afqnls{margin-bottom:1rem;font-size:0.75rem;line-height:1rem}@media(min-width: 768px){.internal.svelte-1afqnls .button.svelte-1afqnls{margin-bottom:-0.5rem;margin-right:1rem}}.footer.svelte-1afqnls.svelte-1afqnls{position:relative;margin-top:5rem;overflow:hidden}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const date = new Date().getFullYear();
  $$result.css.add(css$1);
  return `<footer class="${"footer transition-opacity duration-700 svelte-1afqnls"}"><div class="${"p-8 grid grid-cols-4 items-end"}"><div class="${"links col-span-3 svelte-1afqnls"}" id="${"social-links"}">
			<div class="${"flex flex-row w-full mb-4"}"><a href="${"https://github.com/dennissmuda"}" target="${"_blank"}" class="${"svelte-1afqnls"}">github
					<svg role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1afqnls"}"><title>GitHub</title><path d="${"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}"></path></svg></a>
				<a href="${"mailto:smuda.dennis@gmail.com"}" class="${"svelte-1afqnls"}">e-mail
					<svg role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1afqnls"}"><title>Mail.Ru</title><path d="${"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"}"></path></svg></a>
				<a href="${"https://discordapp.com/users/dennis_butz#6737"}" class="${"svelte-1afqnls"}">discord
					<svg role="${"img"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1afqnls"}"><title>Discord</title><path d="${"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"}"></path></svg></a>
				<a href="${"https://dennissmuda.itch.io/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-1afqnls"}">itch.io
					<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"235.452"}" width="${"261.728"}" viewBox="${"0 0 245.371 220.736"}" class="${"svelte-1afqnls"}"><path d="${"M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08C57.534 94.073 72.867 94.073 76.7 94.073zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z"}" color="${"currentColor"}"></path></svg></a></div>
			<span class="${"text-xs opacity-50"}">\xA9${escape(date)} built and designed with \u2665\uFE0F by me.
			</span></div>

		<div class="${"w-full mt-0 flex justify-end flex-wrap items-baseline "}"><div class="${"internal w-full svelte-1afqnls"}"><a href="${"/blog"}" class="${"button svelte-1afqnls"}"${add_attribute("aria-current", void 0, 0)}>writing
				</a>
				<a href="${"/about"}" class="${"button svelte-1afqnls"}"${add_attribute("aria-current", void 0, 0)}>about
				</a>
				<a href="${"/work"}" class="${"button svelte-1afqnls"}"${add_attribute("aria-current", void 0, 0)}>work
				</a>
				<a href="${"/imprint"}" class="${"button svelte-1afqnls"}"${add_attribute("aria-current", void 0, 0)}>imprint
				</a>
				<a href="${"./"}" class="${"brand text-black dark:text-white -mb-2 svelte-1afqnls"}">ds.</a></div></div></div>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{position:relative;min-height:100vh;--tw-bg-opacity:1;background-color:rgb(250 253 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(22 23 26 / var(--tw-text-opacity))\n}.dark body{--tw-bg-opacity:1;background-color:rgb(22 23 26 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(250 253 255 / var(--tw-text-opacity))\n}body{overflow-x:hidden;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:700ms\n}body::-webkit-scrollbar{z-index:50;width:0.25rem\n}body::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(255 132 38 / var(--tw-bg-opacity));outline-color:#FF8426\n}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $size, $$unsubscribe_size;
  let $coords, $$unsubscribe_coords;
  let coords = spring({ x: 50, y: 50 }, { stiffness: 0.12, damping: 0.225 });
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  let size = spring(10, { stiffness: 0.15 });
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  $$result.css.add(css);
  $$unsubscribe_size();
  $$unsubscribe_coords();
  return `${$$result.head += `<link href="${"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-gqax24">`, ""}

<div class="${"app-wrapper"}">${validate_component(Background_shape, "BackgroundShape").$$render($$result, { size: $size, coords: $coords }, {}, {})}

	<main class="${"relative"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

		${slots.default ? slots.default({}) : ``}

		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>
</div>`;
});
export { _layout as default };
