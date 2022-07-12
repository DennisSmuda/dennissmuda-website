import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, m as missing_component } from "../../../immutable/chunks/index-0082f715.js";
import { H as Header } from "../../../immutable/chunks/header-5fa0d2bd.js";
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "./content/bevy-run-get-started.md":
      return import("./content/bevy-run-get-started.md.js");
    case "./content/hello-world.md":
      return import("./content/hello-world.md.js");
    case "./content/serverless-api-tutorial.md":
      return import("./content/serverless-api-tutorial.md.js");
    case "./content/serverless-auth-tutorial.md":
      return import("./content/serverless-auth-tutorial.md.js");
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntime0__(`./content/${params.slug}.md`);
    console.log("load post with params", params);
    return {
      props: {
        PostContent: post.default,
        meta: { ...post.metadata, slug: params.slug }
      }
    };
  } catch (error) {
    return { status: 404, error: error.message };
  }
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { PostContent } = $$props;
  let { meta } = $$props;
  if ($$props.PostContent === void 0 && $$bindings.PostContent && PostContent !== void 0)
    $$bindings.PostContent(PostContent);
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  return `


${$$result.head += `${$$result.title = `<title>${escape(meta.title)} - Blog | Dennis Smuda</title>`, ""}<meta name="${"description"}"${add_attribute("content", meta.description, 0)} data-svelte="svelte-6gi59i"><meta property="${"og:title"}" content="${escape(meta.title, true) + " - Blog |\xA0Dennis Smmuda"}" data-svelte="svelte-6gi59i"><meta property="${"og:description"}"${add_attribute("content", meta.description, 0)} data-svelte="svelte-6gi59i">`, ""}

${validate_component(Header, "Header").$$render($$result, { title: meta.title, subtitle: "" }, {}, {})}

<section class="${"container lg:max-w-4xl mx-auto px-8"}"><div class="${"ds-prose "}"><article class="${"ds-prose"}">${validate_component(PostContent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>
		</div></section>`;
});
export { U5Bslugu5D as default, load };
