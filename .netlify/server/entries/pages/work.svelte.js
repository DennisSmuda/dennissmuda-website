import { c as create_ssr_component, h as each, v as validate_component } from "../../immutable/chunks/index-0082f715.js";
import { H as Header } from "../../immutable/chunks/header-5fa0d2bd.js";
import { P as Project, p as projects } from "../../immutable/chunks/index-a15ea047.js";
const Project_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article class="${"ds-prose"}" id="${"project-list"}">${each(projects, (project) => {
    return `${validate_component(Project, "Project").$$render($$result, {
      url: project.url,
      headline: project.headline,
      subline: project.subline,
      description: project.description
    }, {}, {})}`;
  })}
</article>`;
});
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Work | Dennis Smuda</title>`, ""}<meta name="${"description"}" content="${"Work | Dennis Smuda, a programmer from Germany!"}" data-svelte="svelte-2nwvzr">`, ""}

${validate_component(Header, "Header").$$render($$result, {
    title: "work \u{1F3C1}",
    subtitle: "past projects"
  }, {}, {})}

<section class="${"container lg:max-w-4xl mx-auto px-8"}">${validate_component(Project_list, "ProjectList").$$render($$result, {}, {}, {})}</section>`;
});
export { Work as default };
