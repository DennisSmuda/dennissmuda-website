import { c as create_ssr_component } from "./index-0082f715.js";
const metadata = {
  "slug": "serverless-api-tutorial",
  "title": "Intro to serverless APIs \u{1F36A}",
  "description": "How to build a serverless REST API with user authentication and mongoDB Part 1",
  "createdAt": "Jul. 4, 2021",
  "published": true,
  "tags": [
    { "name": "node.js", "value": "node" },
    {
      "name": "serverless",
      "value": "serverless"
    }
  ]
};
const Serverless_api_tutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote><p>We will be using <em>Vercel and MongoDB</em> - cloud software which is <em>fast and free</em>, but requires you to create some accounts and do stuff via their ui.</p></blockquote>
<p>In this Post I will show you, how to get started with API development using <a href="${"https://vercel.com/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">Vercel</a> and node.js.
I recommend you <em>head over there and create an account</em>, because we will have to connect our git repo to vercel, so it can deploy your API whenever you push changes!</p>
<h2>Create a new project</h2>
<p>In order for any of this to work, you need to have <a href="${"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}" target="${"_blank"}" rel="${"nofollower noreferer"}">git</a> and <a href="${"https://nodejs.org/en/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">node.js</a> installed on your machine. If you do and have been doing web dev for some time, these steps should look very familiar to you:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">mkdir</span> my-api
<span class="token builtin class-name">cd</span> my-api
<span class="token function">npm</span> init -y
<span class="token function">mkdir</span> api</code>`}<!-- HTML_TAG_END --></pre>
<p>By default, everything inside the api-directory will get picked up as an actual API-route. So,let\u2019s start by <em>creating the file</em> <code>api/users/index.js</code>. Inside our API this file will represent the <code>/users</code>-endpoint.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// api/users/index.js</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jane Doe'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Max Poe'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span> <span class="token comment">// hardcoded users for now</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> users <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getUsers</code>`}<!-- HTML_TAG_END --></pre>
<p>We now have our first restful API route with minimal code! To test things out all you need to do now is start the Vercel development environment:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token comment"># follow the instructions and link your project</span>
npx vercel dev</code>`}<!-- HTML_TAG_END --></pre>
<p>Vercel will ask you to link accounts/projects. It\u2019s pretty straightforward and you should be up and running in a couple of minutes.</p>
<p>By default your app will get served to <code>localhost:3000</code>. By sending a request to <code>/api/users</code> we should be able to see our two users within the response.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">curl</span> -X GET http://localhost:3000/api/users</code>`}<!-- HTML_TAG_END --></pre>
<p>I recommend using a tool like <a href="${"https://insomnia.rest/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">insomnia</a> to develop your API locally. It has a lot of useful features and is of course <em>free</em>.</p>
<h2>Database setup</h2>
<p>Let\u2019s create our database now! Head over to <a href="${"https://www.mongodb.com/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">mongodb.com</a>, create a new cluster and stay within the free tier.</p>
<p>Inside the UI of your cluster, under <code>collections</code> you can <em>create a new database</em>. Afterwards, you can find the <code>connect</code> button and <em>connect your application</em>.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token comment"># look for a collection string that looks like this:</span>
mongodb+srv://<span class="token operator">&lt;</span>DB_USER<span class="token operator">></span>:<span class="token operator">&lt;</span>PASSWORD<span class="token operator">></span>@cluster0.m1wek.mongodb.net/<span class="token operator">&lt;</span>DB_NAME<span class="token operator">></span>?retryWrites<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">w</span><span class="token operator">=</span>majority</code>`}<!-- HTML_TAG_END --></pre>
<p>Now head over to <a href="${"https://vercel.com/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">Vercel</a> you will need to create some <em>environment variables</em>, which you can find within your project under the <em>settings tab</em>.</p>
<p><img src="${"images/blog/vercel_env_variables.png"}" alt="${"Vercel Environment Variables"}"></p>
<p>For the <code>JWT_SECRET</code> you can go ahead and just generate some random password (<a href="${"https://github.com/dwyl/hapi-auth-jwt2/issues/48#issuecomment-109944109"}" target="${"_blank"}" rel="${"nofollower noreferer"}">github issue</a> if you want to know why).</p>
<h2>Mongoose Models</h2>
<p>In our repo, need need to install some packages and create some more files and folders to prepare for our <em>real users</em>.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> i --save mongodb mongoose
<span class="token function">npm</span> i --save-dev @types/mongoose

<span class="token function">mkdir</span> models <span class="token operator">&amp;&amp;</span> mdkir utils
<span class="token function">touch</span> models/User.js
<span class="token function">touch</span> utils/db.js</code>`}<!-- HTML_TAG_END --></pre>
<p>Inside our <code>models/User.js</code> we will now create our Models, which are \u201Cfancy constructors compiled from <code>Schema</code> definitions\u201D - to quote them directly.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// models/User.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> model<span class="token punctuation">,</span> Schema <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'mongoose'</span>

<span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token function">model</span><span class="token punctuation">(</span>
	<span class="token string">'User'</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
		<span class="token literal-property property">username</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
		<span class="token literal-property property">password</span><span class="token operator">:</span> String
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> User</code>`}<!-- HTML_TAG_END --></pre>
<p>Next, we will modify our <code>utils/db.js</code> like so:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// utils/db.js</span>
<span class="token keyword">import</span> mongoose <span class="token keyword">from</span> <span class="token string">'mongoose'</span>
<span class="token keyword">let</span> isConnected

<span class="token keyword">const</span> <span class="token function-variable function">connectToDatabase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>isConnected<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> mongoose
		<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MONGO_URI</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
			<span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">db</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
			isConnected <span class="token operator">=</span> db<span class="token punctuation">.</span>connections<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>readyState
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> connectToDatabase <span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is pretty much all you need to start talking to your database inside your endpoint. We can now <em>get real users</em> by connnecting to our database and basically using our User model to query it:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// api/users/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> connectToDatabase <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'../../utils/db'</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">'../../models/User'</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">await</span> <span class="token function">connectToDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> users <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">authMiddleware</span><span class="token punctuation">(</span>getUsers<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>There you go! If everything went right, you can try out our <code>curl</code> from earlier and you will probably get an empty response, <em>but that\u2019s okay</em> because we have no users stored inside our database yet!</p>
<p>If you really want, you can create some users by hand inside your clusters web ui, but I don\u2019t recommend doing that. Instead, we should rather <em>create new users</em> whenever a user registers a new account within your application.</p>
<p>In the next blog post we will handle the <em>authentication</em> part of our API, which will include <em>login/register</em> routes and some middlewares to handle access control.</p>
<blockquote><p>Check out <a href="${"/blog/serverless-auth-tutorial"}">the next part</a></p></blockquote>
<h2>FYI</h2>
<p>If you want to see the <em>end result</em> we are going to build <a href="${"https://github.com/DennisSmuda/serverless-sample-api"}" target="${"_blank"}" rel="${"nofollower noreferer"}">check out the repo</a>.</p>`;
});
var __glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Serverless_api_tutorial,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export { Serverless_api_tutorial as S, __glob_0_2 as _, metadata as m };
