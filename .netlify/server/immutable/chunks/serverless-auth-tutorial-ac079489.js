import { c as create_ssr_component } from "./index-0082f715.js";
const metadata = {
  "slug": "serverless-auth-tutorial",
  "title": "Serverless authentication \u{1F511}",
  "description": "How to build a serverless REST API with user authentication and mongoDB Part 2",
  "createdAt": "Jul. 5, 2021",
  "published": true,
  "tags": [
    { "name": "node.js", "value": "node" },
    {
      "name": "serverless",
      "value": "serverless"
    }
  ]
};
const Serverless_auth_tutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Welcome to <em>part two</em> of my serverless api introduction, where we will tackle user login and registration.</p>
<blockquote><p>Check out <a href="${"/blog/serverless-api-tutorial"}">the first part</a> if you haven\u2019t - it contains all the setup for this article!</p></blockquote>
<p>Let\u2019s start with the former and create <code>api/auth/login.js</code>. Go ahead and also install <code>jsonwebtoken</code> and <code>bcrypt</code> as npm dependencies.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// api/auth/login.js</span>
<span class="token keyword">import</span> jwt <span class="token keyword">from</span> <span class="token string">'jsonwebtoken'</span>
<span class="token keyword">import</span> bcrypt <span class="token keyword">from</span> <span class="token string">'bcrypt'</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> connectToDatabase <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'../../utils/db'</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">'../../models/User'</span>

<span class="token comment">/**
 * Login Function
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">await</span> <span class="token function">connectToDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> body <span class="token punctuation">&#125;</span> <span class="token operator">=</span> req
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">NO BODY!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> body <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">await</span> <span class="token function">checkIfInputIsValid</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
		<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">email</span><span class="token operator">:</span> body<span class="token punctuation">.</span>email <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> res
				<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'User with that e-mail does not exist.'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

		<span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">comparePassword</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>password<span class="token punctuation">,</span> user<span class="token punctuation">.</span>password<span class="token punctuation">,</span> user<span class="token punctuation">.</span>_id<span class="token punctuation">)</span>

		res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> token<span class="token punctuation">,</span> user <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">error</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">checkIfInputIsValid</span><span class="token punctuation">(</span><span class="token parameter">eventBody</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>eventBody<span class="token punctuation">.</span>password <span class="token operator">&amp;&amp;</span> eventBody<span class="token punctuation">.</span>password<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
			<span class="token string">'Password error. Password needs to be longer than 8 characters.'</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>eventBody<span class="token punctuation">.</span>email <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> eventBody<span class="token punctuation">.</span>email <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Email error. Email must have valid characters.'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">comparePassword</span><span class="token punctuation">(</span><span class="token parameter">eventPassword<span class="token punctuation">,</span> userPassword<span class="token punctuation">,</span> userId</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> match <span class="token operator">=</span> <span class="token keyword">await</span> bcrypt<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>eventPassword<span class="token punctuation">,</span> userPassword<span class="token punctuation">)</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'The credentials do not match.'</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token function">signToken</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">signToken</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> id <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">JWT_SECRET</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token number">86400</span> <span class="token comment">// expires in 24 hours</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> login</code>`}<!-- HTML_TAG_END --></pre>
<p>Pretty straight forward, right? We check the request body to make sure the person trying to log in has actually provided credentials. We then use our Model from <a href="${"/blog/serverless-api-tutorial"}">the first part</a> to see, if there is a user with that email in our database. If that is the case, our API will return a signed token alongside the user object within the response.</p>
<h2>CORS detour</h2>
<p>something we have completely neglected are <a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}" target="${"_blank"}" rel="${"nofollower noreferer"}">CORS issues</a>.</p>
<p>To put it simply, let\u2019s imagine we are going to have our API \u201Cserving endpoints\u201D from some domain like <code>serverless-api.com</code>. But our client-application is running on <code>client-for-api.com</code> - now if these two domains could just share resources (information) as they pleased, we would have huge security flaws!</p>
<p>This is pretty much why Cross Origin Resource Sharing (<em>CORS</em>) exist - so that developers can specify which \u201Corigins\u201D should be able to have access.</p>
<p>I would still recommend checking out the <a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}" target="${"_blank"}" rel="${"nofollower noreferer"}">MDN article</a> on the topic, if you want to delve deep.</p>
<h2>Configuration and Middlewares</h2>
<p>Create a <code>verecel.json</code> file in the root of your project</p>
<pre class="${"language-json"}"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token comment">// vercel.json</span>
<span class="token punctuation">&#123;</span>
	<span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">&#123;</span>
			<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/api/(.*)"</span><span class="token punctuation">,</span>
			<span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">&#123;</span> <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Access-Control-Allow-Credentials"</span><span class="token punctuation">,</span> <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"true"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
				<span class="token punctuation">&#123;</span>
					<span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Access-Control-Allow-Methods"</span><span class="token punctuation">,</span>
					<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"GET,OPTIONS,PATCH,DELETE,POST,PUT"</span>
				<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
				<span class="token punctuation">&#123;</span>
					<span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Access-Control-Allow-Headers"</span><span class="token punctuation">,</span>
					<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"</span>
				<span class="token punctuation">&#125;</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you have done something similar before, you might have noticed we are missing (maybe the most important) header - <code>access-control-allow-origin</code> - it\u2019s one of my favorites, because of how much time it has cost me historically \u{1F605}</p>
<p>You can go ahead and set this header to <code>&quot;*&quot;</code> inside your vercel config file, but I like to set it explicitly with the requests origin. So let\u2019s create two files, <code>middleware/basic</code> and <code>middleware/auth</code>.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// middleware/basic</span>
<span class="token keyword">const</span> <span class="token function-variable function">basicMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">'OPTIONS'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// for preflight OPTION requests</span>
		<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> basicMiddleware</code>`}<!-- HTML_TAG_END --></pre>
<p>Now we can modify our <code>login.js</code> file to use our new middlware</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// api/auth/login.js</span>
<span class="token comment">// ...</span>
<span class="token keyword">import</span> basicMiddleware <span class="token keyword">from</span> <span class="token string">'../../middleware/basic'</span>
<span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">basicMiddleware</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>For authenticated requests, we will wrap the relevant routes inside our auth-middleware:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// middleware/auth</span>
<span class="token keyword">const</span> <span class="token function-variable function">authMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin <span class="token operator">||</span> <span class="token string">'*'</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">'OPTIONS'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Not Authenticated!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">isAuthenticated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		<span class="token operator">!</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization <span class="token operator">||</span>
		req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'Bearer '</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> authMiddleware</code>`}<!-- HTML_TAG_END --></pre>
<p>Modify <code>api/users/index.js</code> to use our new auth-middleware.</p>
<h2>Registration</h2>
<p>The part we have all been waiting for - <em>user creation</em>! You will need to create <code>api/auth/register</code>:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// api/auth/register</span>
<span class="token keyword">const</span> <span class="token function-variable function">register</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">await</span> <span class="token function">connectToDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// Check for empty body</span>
	<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> body <span class="token punctuation">&#125;</span> <span class="token operator">=</span> req

	<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">await</span> <span class="token function">checkIfInputIsValid</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>

		<span class="token comment">// Check if an e-mail is already taken</span>
		<span class="token keyword">const</span> existingUser <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">email</span><span class="token operator">:</span> body<span class="token punctuation">.</span>email <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>existingUser<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">303</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'User exists already!'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>

		<span class="token comment">// Create a new user with a hashed password</span>
		<span class="token keyword">const</span> hashedPass <span class="token operator">=</span> <span class="token keyword">await</span> bcrypt<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>password<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> newUser <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">username</span><span class="token operator">:</span> body<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
			<span class="token literal-property property">email</span><span class="token operator">:</span> body<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
			<span class="token literal-property property">password</span><span class="token operator">:</span> hashedPass
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

		<span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token function">signToken</span><span class="token punctuation">(</span>newUser<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		<span class="token comment">// Send back user + token (optional - you may want to have a "double opt-in" flow)</span>
		<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">user</span><span class="token operator">:</span> newUser<span class="token punctuation">,</span> token <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>I ommitted some stuff for clarity, but you can checkout the <a href="${"https://github.com/DennisSmuda/serverless-sample-api/blob/master/api/auth/register.js"}" target="${"_blank"}" rel="${"nofollower noreferer"}">full version here</a>.</p>
<p>It starts off very similar to our login function, by checking the request body for valid input. We make sure the same e-mail hasn\u2019t been registered to another user and create a new one with a hashed password.</p>
<blockquote><p><em>Never</em> store plain user passwords in your database!</p></blockquote>
<p>If you have a API testing tool (like <a href="${"https://insomnia.rest/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">insomnia</a>) you can now try to register your first user!</p>
<p><img src="${"/images/blog/insomnia_register.png"}" alt="${"Vercel Environment Variables"}"></p>
<p>If you want to test protected routes you will have to take the <code>token</code> you get from logging in, and put it inside the authorization header inside for your next requests - if you still want to use <code>curl</code>, you can also do that:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">curl</span> -H <span class="token string">"Authorization: Bearer &lt;ACCESS_TOKEN>"</span> -X GET http://localhost:3000/api/users</code>`}<!-- HTML_TAG_END --></pre>
<h2>That\u2019s it!</h2>
<p>We now have a full working node.js serverless API! If you want to check out the code in full, because I missed something or you want to give me a star, go to the</p>
<a href="${"https://github.com/DennisSmuda/serverless-sample-api"}" target="${"_blank"}" rel="${"nofollower noreferer"}">repository</a>.
<p>If you are wondering (like me) if you could build a \u201Cwhole application\u201D with a serverless API, the answer is yes, and yes I did exactly that. I built a small backing-track/jam-along app which is basically an extended version of this tutorials API. It has some relationships within the models and a couple of aggregation functions. You can <a href="${"https://backytracky.com/"}" target="${"_blank"}" rel="${"nofollower noreferer"}">check it out here</a>.</p>`;
});
var __glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Serverless_auth_tutorial,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export { Serverless_auth_tutorial as S, __glob_0_3 as _, metadata as m };
