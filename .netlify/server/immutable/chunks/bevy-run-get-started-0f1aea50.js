import { c as create_ssr_component } from "./index-0082f715.js";
const metadata = {
  "slug": "bevy-run-get-started",
  "title": "Get started with Rust & Bevy \u{1F3AE}",
  "description": "Getting started with the Bevy game engine. Build a small app with input handling and game states",
  "createdAt": "Mar. 20, 2022",
  "published": true,
  "tags": [
    { "name": "gamedev", "value": "gamedev" },
    { "name": "rust", "value": "rust" },
    { "name": "bevy", "value": "bevy" }
  ]
};
const Bevy_run_get_started = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote><p>Check out the <a href="${"https://github.com/DennisSmuda/run_bevy_tutorial"}" target="${"_blank"}">source code</a>! You can run/inspect both, the end result and the code for this post. I suggest to keep it handy while reading.</p></blockquote>
<p><a href="${"https://bevyengine.org/"}" rel="${"nofollow"}">Bevy</a> is a <span class="${"keyword"}">data-driven game engine</span> for Rust. It provides a fully custom <em>ECS</em> - Entity Component System - a popular design-pattern in games. Pretty much like MVC <s>is</s> was a popular design-pattern for Web-Applications.</p>
<p>It helps to have some prior game-dev experience. Especially if your project grows in size and complexity, the ECS-approach helps (and forces you) to keep your code lean and decoupled while also giving you ways to <span class="${"keyword"}">compose</span> functionality across different Entities.</p>
<blockquote class="${"disclaimer"}"><p>In order to follow this tutorial you will need to <a href="${"https://doc.rust-lang.org/book/ch01-01-installation.html"}" target="${"_blank"}">get setup</a> with Rust and at least be able to run your very first example \`hello world\` code!
  </p></blockquote>
<h2>Create a new project</h2>
<p>If you have gone thrugh Rust\u2019s installation, you know that creating a new project is just one command away:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">cargo new bevy_run_tutorial
<span class="token builtin class-name">cd</span> bevy_run_tutorial

cargo run</code>`}<!-- HTML_TAG_END --></pre>
<span class="${"keyword"}">Cargo</span> for Rust is <i>kind of</i> like <span class="${"keyword"}">npm</span> for Node. You can just add dependencies to your cargo file and they will get installed automatically.
<p>Go ahead, and edit your <code>Cargo.toml</code> dependencies as follows:</p>
<pre class="${"language-toml"}"><!-- HTML_TAG_START -->${`<code class="language-toml">// <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
<span class="token key property">bevy</span> <span class="token punctuation">=</span> <span class="token string">"0.6.1"</span>
<span class="token key property">rand</span> <span class="token punctuation">=</span> <span class="token string">"0.8"</span>
<span class="token key property">bevy-inspector-egui</span> <span class="token punctuation">=</span> <span class="token string">"0.9"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Just by adding these few lines, we now have access to all of Bevy\u2019s features. <code>rand</code> is a library to help us with random number generation and <code>bevy-inspector-egui</code> is a very useful debugging-tool as it shows you what entities are present within your ecs.</p>
<p>Let\u2019s edit <code>src/main.rs</code> to actually use some Bevy features:</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token keyword">use</span> <span class="token namespace">bevy<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token class-name">App</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">add_plugins</span><span class="token punctuation">(</span><span class="token class-name">DefaultPlugins</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>You should now <code>cargo run</code> your project and confirm everything was done correctly. It will probably take a while on your first go, subsequent runs will be faster, once the dependencies are installed.</p>
<h2>Making a window</h2>
<p>Let\u2019s setup some constants for our game first! Create <code>src/constants.rs</code> and enter the following:</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token keyword">use</span> <span class="token namespace">bevy<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token class-name">Color</span><span class="token punctuation">;</span>

<span class="token comment">// Dimensions</span>
<span class="token keyword">pub</span> <span class="token keyword">const</span> <span class="token constant">WINDOW_WIDTH</span><span class="token punctuation">:</span> <span class="token keyword">f32</span> <span class="token operator">=</span> <span class="token number">720</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token keyword">pub</span> <span class="token keyword">const</span> <span class="token constant">WINDOW_HEIGHT</span><span class="token punctuation">:</span> <span class="token keyword">f32</span> <span class="token operator">=</span> <span class="token number">420</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token comment">// Colors</span>
<span class="token keyword">pub</span> <span class="token keyword">const</span> <span class="token constant">BG_COLOR</span><span class="token punctuation">:</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">::</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">38</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">pub</span> <span class="token keyword">const</span> <span class="token constant">PLAYER_COLOR</span><span class="token punctuation">:</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">::</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">228</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">pub</span> <span class="token keyword">const</span> <span class="token constant">ENEMY_COLOR</span><span class="token punctuation">:</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">::</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">163</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">.</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And in your <code>main.rs</code>:</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token keyword">use</span> <span class="token namespace">bevy<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">mod</span> <span class="token module-declaration namespace">constants</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">constants<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> <span class="token keyword">mut</span> app <span class="token operator">=</span> <span class="token class-name">App</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Window setup</span>
  app
    <span class="token punctuation">.</span><span class="token function">insert_resource</span><span class="token punctuation">(</span><span class="token class-name">ClearColor</span><span class="token punctuation">(</span><span class="token constant">BG_COLOR</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">insert_resource</span><span class="token punctuation">(</span><span class="token class-name">WindowDescriptor</span> <span class="token punctuation">&#123;</span>
      title<span class="token punctuation">:</span> <span class="token string">"Run Rust!"</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      width<span class="token punctuation">:</span> <span class="token constant">WINDOW_WIDTH</span><span class="token punctuation">,</span>
      height<span class="token punctuation">:</span> <span class="token constant">WINDOW_HEIGHT</span><span class="token punctuation">,</span>
      <span class="token punctuation">..</span><span class="token class-name">Default</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token comment">// Bevy default plugins</span>
    <span class="token punctuation">.</span><span class="token function">add_plugins</span><span class="token punctuation">(</span><span class="token class-name">DefaultPlugins</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Startup system (cameras)</span>
  app<span class="token punctuation">.</span><span class="token function">add_startup_system</span><span class="token punctuation">(</span>camera_setup<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Run the app</span>
  app<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">fn</span> <span class="token function-definition function">camera_setup</span><span class="token punctuation">(</span><span class="token keyword">mut</span> commands<span class="token punctuation">:</span> <span class="token class-name">Commands</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// 2D orthographic camera</span>
  commands<span class="token punctuation">.</span><span class="token function">spawn_bundle</span><span class="token punctuation">(</span><span class="token class-name">OrthographicCameraBundle</span><span class="token punctuation">::</span><span class="token function">new_2d</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// UI Camera</span>
  commands<span class="token punctuation">.</span><span class="token function">spawn_bundle</span><span class="token punctuation">(</span><span class="token class-name">UiCameraBundle</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This code should spawn a <code>720 x 420</code> window with a title and two cameras. Pretty much \u201Cstandard\u201D bevy setup code - if this seems too daunting right now, you might want to go through <a href="${"https://bevyengine.org/learn/book/getting-started/"}" target="${"_blank"}">bevy\u2019s own getting started guide</a> to get comfortable with the basics first.</p>
<h2>Changing \u201CScreens\u201D</h2>
<p>Pretty much in any game I have ever <em>tried</em> to make I needed some way to go from one \u201Cscreen\u201D to another. In <a href="${"https://godotengine.org/"}" target="${"blank"}">Godot</a> you can implement a <code>SceneManager</code> that will transition from one <code>Node</code> to another. <a href="${"https://unity.com/"}" target="${"_blank"}">Unity</a> has <code>Scenes</code> and <a href="${"https://www.yoyogames.com/en"}" target="${"_blank"}">GameMaker</a> has <code>rooms</code> - but they all do very similar things for your game.</p>
<p>In Bevy, we can create an <code>enum AppState</code> to help us keep track of \u201Cwhere we are\u201D in our game. We only need three in total (for now) - <code>Menu, InGame &amp; GameOver</code>.</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token comment">// constants.rs</span>

<span class="token comment">//...</span>

<span class="token attribute attr-name">#[derive(Debug, Clone, Eq, PartialEq, Hash)]</span>
<span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">AppState</span> <span class="token punctuation">&#123;</span>
  <span class="token class-name">Menu</span><span class="token punctuation">,</span>
  <span class="token class-name">InGame</span><span class="token punctuation">,</span>
  <span class="token class-name">GameOver</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">//...</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Now the fun part! Bevy-\u201DSystems\u201D are just Rust-functions, <em>but</em> you can \u201Cquery\u201D for all kinds of game-resources by just defining the function signature. So in any system that needs to change the <code>AppState</code>, like when the player has died and we want to enter the GameOver state, we can define it as such:</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token comment">// just example code</span>
<span class="token keyword">fn</span> <span class="token function-definition function">some_game_system</span><span class="token punctuation">(</span><span class="token keyword">mut</span> state<span class="token punctuation">:</span> <span class="token class-name">ResMut</span><span class="token operator">&lt;</span><span class="token class-name">State</span><span class="token operator">&lt;</span><span class="token class-name">AppState</span><span class="token operator">>></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has_just_died<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">GameOver</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Now we need to tell Bevy what systems to run depending on our <code>AppState</code>. In your <code>main.rs</code> you could add these lines to the bottom of your AppBuilder-chain:</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  app
    <span class="token comment">// just example code</span>
    <span class="token punctuation">.</span><span class="token function">add_system_set</span><span class="token punctuation">(</span><span class="token class-name">SystemSet</span><span class="token punctuation">::</span><span class="token function">on_enter</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">with_system</span><span class="token punctuation">(</span>setup_menu<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">add_system_set</span><span class="token punctuation">(</span><span class="token class-name">SystemSet</span><span class="token punctuation">::</span><span class="token function">on_update</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">with_system</span><span class="token punctuation">(</span>update_menu<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">add_system_set</span><span class="token punctuation">(</span><span class="token class-name">SystemSet</span><span class="token punctuation">::</span><span class="token function">on_exit</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">with_system</span><span class="token punctuation">(</span>teardown_state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>As you can see, <code>SystemSet</code> provides useful \u201CLifecycle-Hooks\u201D so you can run different systems when you enter/exit the AppState as well!</p>
<p>One thing we actually need, is the <code>teardown_state</code> function - our first system!</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token comment">// main.rs</span>

<span class="token comment">// ..</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">teardown_state</span><span class="token punctuation">(</span>
  <span class="token keyword">mut</span> commands<span class="token punctuation">:</span> <span class="token class-name">Commands</span><span class="token punctuation">,</span>
  entities<span class="token punctuation">:</span> <span class="token class-name">Query</span><span class="token operator">&lt;</span><span class="token class-name">Entity</span><span class="token punctuation">,</span> <span class="token class-name">Without</span><span class="token operator">&lt;</span><span class="token class-name">Camera</span><span class="token operator">>></span>
<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">for</span> entity <span class="token keyword">in</span> entities<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    commands<span class="token punctuation">.</span><span class="token function">entity</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">despawn_recursive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>teardown_state</code> function will be used for all our <code>on_exit</code> state logic. Here you can see, we don\u2019t have to worry about <i>supplying</i> the correct parameters to call the function. Rather, we only have to <code>define</code> what parameters a <s>function</s> system needs, and Bevy will take care of the rest. Also, it will try to be smart about how to run your code and try to optimize/cache queries - but that\u2019s above my skill level and beyond the scope of this post \u{1F605}.</p>
<h2>Implementing States</h2>
<p>We are going to setup the structure right away - so go ahead and create three directories containing a <code>mod.rs</code> which will be the \u201Centry-point\u201D of every Screen. One for each AppState:</p>
<ul><li><code>game/mod.rs</code></li>
<li><code>main_menu/mod.rs</code></li>
<li><code>game_over/mod.rs</code></li></ul>
<p>Each of these are what\u2019s called a <span class="${"keyword"}">Plugin</span> in Bevy. You can use plugins to organize your code. We are going to make <em>every</em> AppState a Plugin, but you are free to get creative of course.</p>
<p>Depending on your game you might even need a seperate <code>DamagePlugin</code> that can run multiple <code>DamageSystems</code> in order to combine lots of different status effects and buffs with a singular blow.</p>
<p>Let\u2019s start with the <code>MainMenuPlugin</code></p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token comment">// src/main_menu/mod.rs</span>

<span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">MainMenuPlugin</span><span class="token punctuation">;</span>

<span class="token keyword">impl</span> <span class="token class-name">Plugin</span> <span class="token keyword">for</span> <span class="token class-name">MainMenuPlugin</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">fn</span> <span class="token function-definition function">build</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> app<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">App</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    app
      <span class="token punctuation">.</span><span class="token function">add_system_set</span><span class="token punctuation">(</span><span class="token class-name">SystemSet</span><span class="token punctuation">::</span><span class="token function">on_enter</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">with_system</span><span class="token punctuation">(</span>setup_menu_system<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">add_system_set</span><span class="token punctuation">(</span><span class="token class-name">SystemSet</span><span class="token punctuation">::</span><span class="token function">on_update</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">with_system</span><span class="token punctuation">(</span>update_menu_system<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">add_system_set</span><span class="token punctuation">(</span><span class="token class-name">SystemSet</span><span class="token punctuation">::</span><span class="token function">on_exit</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">with_system</span><span class="token punctuation">(</span>teardown_state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">///</span>
<span class="token comment">/// Setup Main Menu</span>
<span class="token keyword">fn</span> <span class="token function-definition function">setup_menu_system</span><span class="token punctuation">(</span><span class="token keyword">mut</span> commands<span class="token punctuation">:</span> <span class="token class-name">Commands</span><span class="token punctuation">,</span> asset_server<span class="token punctuation">:</span> <span class="token class-name">Res</span><span class="token operator">&lt;</span><span class="token class-name">AssetServer</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// Headline</span>
  commands<span class="token punctuation">.</span><span class="token function">spawn_bundle</span><span class="token punctuation">(</span><span class="token class-name">TextBundle</span> <span class="token punctuation">&#123;</span>
    style<span class="token punctuation">:</span> <span class="token class-name">Style</span> <span class="token punctuation">&#123;</span>
      position_type<span class="token punctuation">:</span> <span class="token class-name">PositionType</span><span class="token punctuation">::</span><span class="token class-name">Absolute</span><span class="token punctuation">,</span>
      position<span class="token punctuation">:</span> <span class="token class-name">Rect</span> <span class="token punctuation">&#123;</span>
        top<span class="token punctuation">:</span> <span class="token class-name">Val</span><span class="token punctuation">::</span><span class="token class-name">Px</span><span class="token punctuation">(</span><span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        left<span class="token punctuation">:</span> <span class="token class-name">Val</span><span class="token punctuation">::</span><span class="token class-name">Px</span><span class="token punctuation">(</span><span class="token number">24.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">..</span><span class="token class-name">Default</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">..</span><span class="token class-name">Default</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    text<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">::</span><span class="token function">with_section</span><span class="token punctuation">(</span>
      <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">"Run in Rust"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token class-name">TextStyle</span> <span class="token punctuation">&#123;</span>
        font<span class="token punctuation">:</span> asset_server<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"fonts/Efforts.ttf"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        font_size<span class="token punctuation">:</span> <span class="token number">64.0</span><span class="token punctuation">,</span>
        color<span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">::</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token class-name">TextAlignment</span> <span class="token punctuation">&#123;</span>
        horizontal<span class="token punctuation">:</span> <span class="token class-name">HorizontalAlign</span><span class="token punctuation">::</span><span class="token class-name">Center</span><span class="token punctuation">,</span>
        vertical<span class="token punctuation">:</span> <span class="token class-name">VerticalAlign</span><span class="token punctuation">::</span><span class="token class-name">Center</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">..</span><span class="token class-name">Default</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">///</span>
<span class="token comment">/// Update Main Menu</span>
<span class="token keyword">fn</span> <span class="token function-definition function">update_menu_system</span><span class="token punctuation">(</span><span class="token keyword">mut</span> state<span class="token punctuation">:</span> <span class="token class-name">ResMut</span><span class="token operator">&lt;</span><span class="token class-name">State</span><span class="token operator">&lt;</span><span class="token class-name">AppState</span><span class="token operator">>></span><span class="token punctuation">,</span> keyboard_input<span class="token punctuation">:</span> <span class="token class-name">Res</span><span class="token operator">&lt;</span><span class="token class-name">Input</span><span class="token operator">&lt;</span><span class="token class-name">KeyCode</span><span class="token operator">>></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> keyboard_input<span class="token punctuation">.</span><span class="token function">just_released</span><span class="token punctuation">(</span><span class="token class-name">KeyCode</span><span class="token punctuation">::</span><span class="token class-name">Space</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">InGame</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is it! Our very first state. I think you can finish off the other states by yourself. You make it so that every screen has a different headline-text and have to press <code>Escape</code> to go back to the main menu.</p>
<p>The last thing to do is to tell Bevy to use our new plugins. So in your <code>main.rs</code>:</p>
<pre class="${"language-rust"}"><!-- HTML_TAG_START -->${`<code class="language-rust"><span class="token keyword">use</span> <span class="token namespace">bevy<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">mod</span> <span class="token module-declaration namespace">constants</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">constants<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token comment">///</span>
<span class="token comment">/// State Plugins</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">main_menu</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">main_menu<span class="token punctuation">::</span></span><span class="token class-name">MainMenuPlugin</span><span class="token punctuation">;</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">game</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">game<span class="token punctuation">::</span></span><span class="token class-name">GamePlugin</span><span class="token punctuation">;</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">game_over</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">game_over<span class="token punctuation">::</span></span><span class="token class-name">GameOverPlugin</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> <span class="token keyword">mut</span> app <span class="token operator">=</span> <span class="token class-name">App</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Window setup</span>
  app
    <span class="token punctuation">.</span><span class="token function">insert_resource</span><span class="token punctuation">(</span><span class="token class-name">ClearColor</span><span class="token punctuation">(</span><span class="token constant">BG_COLOR</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">insert_resource</span><span class="token punctuation">(</span><span class="token class-name">WindowDescriptor</span> <span class="token punctuation">&#123;</span>
      title<span class="token punctuation">:</span> <span class="token string">"Run Rust!"</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      width<span class="token punctuation">:</span> <span class="token constant">WINDOW_WIDTH</span><span class="token punctuation">,</span>
      height<span class="token punctuation">:</span> <span class="token constant">WINDOW_HEIGHT</span><span class="token punctuation">,</span>
      <span class="token punctuation">..</span><span class="token class-name">Default</span><span class="token punctuation">::</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token comment">// Bevy default plugins</span>
    <span class="token punctuation">.</span><span class="token function">add_plugins</span><span class="token punctuation">(</span><span class="token class-name">DefaultPlugins</span><span class="token punctuation">)</span>
    <span class="token comment">// States</span>
    <span class="token punctuation">.</span><span class="token function">add_plugin</span><span class="token punctuation">(</span><span class="token class-name">MainMenuPlugin</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">add_plugin</span><span class="token punctuation">(</span><span class="token class-name">GamePlugin</span><span class="token punctuation">)</span>

    <span class="token punctuation">.</span><span class="token function">add_state</span><span class="token punctuation">(</span><span class="token class-name">AppState</span><span class="token punctuation">::</span><span class="token class-name">Menu</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This is the state we start in!</span>
  <span class="token comment">// ...</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Thanks for sticking with me if you got this far. I hope I have provided some insight on how to get started with a new game in Bevy, and keep your code organized. In the next post, we will go over the actual game-code. How to spawn actual entities with components, player-input and enemies.</p>
<blockquote class="${"disclaimer"}"><span>Disclaimer</span>
  <p>I&#39;m no expert on Rust nor Bevy! If you have any feedback on how to improve, please reach out directly, or open issues/pull requests in <a href="${"https://github.com/DennisSmuda/run_bevy_tutorial"}" target="${"_blank"}">on github</a>.
  </p></blockquote>`;
});
var __glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Bevy_run_get_started,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export { Bevy_run_get_started as B, __glob_0_0 as _, metadata as m };
