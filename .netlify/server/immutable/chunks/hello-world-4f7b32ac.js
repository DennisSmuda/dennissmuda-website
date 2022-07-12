import { c as create_ssr_component } from "./index-0082f715.js";
const metadata = {
  "slug": "hello-world",
  "title": "Hello World \u{1F44B}",
  "description": "Introducing my new website, and a quick story about how I animated my name.",
  "createdAt": "Sept. 21, 2020",
  "published": true,
  "tags": [
    { "name": "casual", "value": "casual" },
    { "name": "svelte", "value": "svelte" }
  ]
};
const Hello_world = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Cool, you made it! Welcome to my website, I hope you like what you\u2019ve seen so far. Continue reading if you\u2019d like to kow more about it.</p>
<p>Of course, I\u2019m most excited about trying out (and loving) <a href="${"https://svelte.dev/"}" target="${"_blank"}">svelte</a>. I highly recommend checking it out - the interactive tutorial is perfect to get your feet wet, with no setup whatsoever.</p>
<h2>Enter Svelte</h2>
<p><code>SvelteKit</code> is a framework on top of <code>svelte</code> like <code>next.js</code> is a framework based on <code>react</code> - to put it simply.
It comes \u201Cbatteries included\u201D and still manages to come across as something with a very small surface area.</p>
<p>If you want to try it out yourself, this is how you get started:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token comment"># in your terminal</span>
<span class="token function">npm</span> init svelte@next my-app
<span class="token builtin class-name">cd</span> my-app
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev -- --open</code>`}<!-- HTML_TAG_END --></pre>
<h2>Goodies</h2>
<p>One of the best parts about working with svelte is it\u2019s ease of use. After years of working with nuxt/vue.js, I always valued the fact that state-management and routing were \u201Cfirst-party\u201D - unlike in react-land, where you can find, mix and match packages however you choose. And there is <em>a lot</em> to chose from.</p>
<p>Svelte takes things a bit further. Because everything gets \u201Ccompiled away\u201D, they even provide first-party animation classes. No additional dependencies required, this is how my name gets animated on the <a href="${"/"}">homepage</a>:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span> <span class="token comment">// lifecycle</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> fly <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte/transition'</span> <span class="token comment">// transition</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> spring <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte/motion'</span> <span class="token comment">// spring-animation</span>

<span class="token keyword">const</span> sizeSpring <span class="token operator">=</span> <span class="token function">spring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	mounted <span class="token operator">=</span> <span class="token boolean">true</span>

	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		sizeSpring<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>mounted</code> variable will make sure that our letters get appended to the DOM after the component has mounted.
Within the markup, we can now setup events on the svg element similar to a lot of other current frameworks.</p>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
    <span class="token attr-name"><span class="token namespace">on:</span>mousedown</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> size<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name"><span class="token namespace">on:</span>mouseup</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> size<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
  <span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> mounted<span class="token punctuation">&#125;</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span>
          <span class="token attr-name"><span class="token namespace">in:</span>fly</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>
          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M14.36 68.4C14.36 61.52 15.6...<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>As you can see - it\u2019s pretty simple to understand if you know basic javascript and a few concepts from single page applications. Plus, I didn\u2019t even have to install anything, and I can trust the compiler, that only the code that is \u201Cneeded\u201D, actually gets send to the client.</p>
<p>So far, I\u2019m having a blast trying out svelte - I even made a \u201Cfull app\u201D with it - it\u2019s called BackyTracky and you can check it out <a href="${"https://backytracky.com/"}" target="${"_blank"}">here</a>.</p>
<h2>Further Information</h2>
<p>If you want to know more about svelte, I highly recommend watching this <a href="${"https://www.youtube.com/watch?v=AdNJ3fydeao"}" target="${"_blank"}">talk by Richard Harris</a>, the creator of svelte himself.</p>`;
});
var __glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Hello_world,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export { Hello_world as H, __glob_0_1 as _, metadata as m };
