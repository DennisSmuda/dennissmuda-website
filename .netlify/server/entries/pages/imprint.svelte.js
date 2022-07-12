import { c as create_ssr_component, v as validate_component } from "../../immutable/chunks/index-0082f715.js";
import { H as Header } from "../../immutable/chunks/header-5fa0d2bd.js";
const Imprint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Impressum | Dennis Smuda</title>`, ""}<meta name="${"description"}" content="${"Imprint | legally required content."}" data-svelte="svelte-19hee9b"><meta property="${"og:title"}" content="${"Impressum \u2013 Dennis Smuda"}" data-svelte="svelte-19hee9b"><meta property="${"og:description"}" content="${"Imprint | legally required content."}" data-svelte="svelte-19hee9b">`, ""}

${validate_component(Header, "Header").$$render($$result, {
    title: "Impressum",
    subtitle: "muss halt"
  }, {}, {})}

<section class="${"container p-8 mx-auto"}"><div class="${"ds-prose"}"><p>Dennis Smuda
			<br>
			Prinzenstra\xDFe 13
			<br>
			44809 Bochum | Germany
		</p>
		<p><a href="${"mailto:smuda.dennis@gmail.com"}">smuda.dennis@gmail.com</a></p>

		<h2>Journalistisch-redaktionelle Angebote</h2>
		<p>Inhaltlich verantwortlich: Dennis Smuda (Adresse wie oben)</p>

		<h2>Haftungs- und Urheberrechtshinweise</h2>
		<p>Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden sorgf\xE4ltig
			und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der
			Information und entfalten keine rechtlich bindende Wirkung, sofern es sich
			nicht um gesetzlich verpflichtende Informationen (z.B. das Impressum, die
			Datenschutzerkl\xE4rung, AGB oder Widerrufsbelehrungen f\xFCr Verbraucher)
			handelt. Wir behalten uns vor, die Inhalte vollst\xE4ndig oder teilweise zu
			\xE4ndern oder zu l\xF6schen, soweit vertragliche Verpflichtungen unber\xFChrt
			bleiben. Alle Angebote sind freibleibend und unverbindlich.
		</p>

		<h3>Links auf fremde Webseiten:</h3>
		<p>Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen,
			liegen au\xDFerhalb unseres Verantwortungsbereiches und machen wir uns nicht
			zu Eigen. F\xFCr alle Inhalte und insbesondere f\xFCr Sch\xE4den, die aus der
			Nutzung der in den verlinkten Webseiten aufrufbaren Informationen
			entstehen, haftet allein der Anbieter der verlinkten Webseiten.
		</p></div></section>`;
});
export { Imprint as default };
