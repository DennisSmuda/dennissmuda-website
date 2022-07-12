import{S as Cn,i as xn,s as Sn,e as o,t,k as i,c as l,a as r,h as n,d as s,m as f,b as u,W as qn,g as c,H as a,E as Et}from"../../../chunks/index-2dbaace3.js";function On(dn){let M,j,Us,ve,Cs,xs,Ee,Ss,qs,Je,w,Os,A,Hs,Rs,be,Bs,Ls,Ke,Z,Vs,Qe,y,Ws,T,Ns,Gs,D,Fs,Js,Ye,N,kn=`<code class="language-bash"><span class="token function">mkdir</span> my-api
<span class="token builtin class-name">cd</span> my-api
<span class="token function">npm</span> init -y
<span class="token function">mkdir</span> api</code>`,Xe,k,Ks,_e,Qs,Ys,Ie,Xs,zs,Pe,Zs,$s,ze,G,mn=`<code class="language-js"><span class="token comment">// api/users/index.js</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jane Doe'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Max Poe'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span> <span class="token comment">// hardcoded users for now</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> users <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getUsers</code>`,Ze,$,ea,$e,F,wn=`<code class="language-bash"><span class="token comment"># follow the instructions and link your project</span>
npx vercel dev</code>`,es,ee,sa,ss,h,aa,ge,ta,na,je,oa,la,as,J,yn='<code class="language-bash"><span class="token function">curl</span> -X GET http://localhost:3000/api/users</code>',ts,v,ra,U,pa,ca,Me,ua,ia,ns,se,fa,os,C,da,x,ka,ma,ls,d,wa,Ae,ya,ha,Te,va,Ea,De,ba,_a,Ue,Ia,Pa,rs,K,hn=`<code class="language-bash"><span class="token comment"># look for a collection string that looks like this:</span>
mongodb+srv://<span class="token operator">&lt;</span>DB_USER<span class="token operator">></span>:<span class="token operator">&lt;</span>PASSWORD<span class="token operator">></span>@cluster0.m1wek.mongodb.net/<span class="token operator">&lt;</span>DB_NAME<span class="token operator">></span>?retryWrites<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">w</span><span class="token operator">=</span>majority</code>`,ps,m,ga,S,ja,Ma,Ce,Aa,Ta,xe,Da,Ua,cs,ae,te,bt,us,E,Ca,Se,xa,Sa,q,qa,Oa,is,ne,Ha,fs,O,Ra,qe,Ba,La,ds,Q,vn=`<code class="language-bash"><span class="token function">npm</span> i --save mongodb mongoose
<span class="token function">npm</span> i --save-dev @types/mongoose

<span class="token function">mkdir</span> models <span class="token operator">&amp;&amp;</span> mdkir utils
<span class="token function">touch</span> models/User.js
<span class="token function">touch</span> utils/db.js</code>`,ks,b,Va,Oe,Wa,Na,He,Ga,Fa,ms,Y,En=`<code class="language-js"><span class="token comment">// models/User.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> model<span class="token punctuation">,</span> Schema <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'mongoose'</span>

<span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token function">model</span><span class="token punctuation">(</span>
	<span class="token string">'User'</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
		<span class="token literal-property property">username</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
		<span class="token literal-property property">password</span><span class="token operator">:</span> String
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> User</code>`,ws,H,Ja,Re,Ka,Qa,ys,X,bn=`<code class="language-js"><span class="token comment">// utils/db.js</span>
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

<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> connectToDatabase <span class="token punctuation">&#125;</span></code>`,hs,R,Ya,Be,Xa,za,vs,z,_n=`<code class="language-js"><span class="token comment">// api/users/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> connectToDatabase <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'../../utils/db'</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">'../../models/User'</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">await</span> <span class="token function">connectToDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> users <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">authMiddleware</span><span class="token punctuation">(</span>getUsers<span class="token punctuation">)</span></code>`,Es,_,Za,Le,$a,et,Ve,st,at,bs,B,tt,We,nt,ot,_s,I,lt,Ne,rt,pt,Ge,ct,ut,Is,oe,le,it,re,ft,Ps,pe,dt,gs,P,kt,Fe,mt,wt,L,yt,ht;return{c(){M=o("blockquote"),j=o("p"),Us=t("We will be using "),ve=o("em"),Cs=t("Vercel and MongoDB"),xs=t(" - cloud software which is "),Ee=o("em"),Ss=t("fast and free"),qs=t(", but requires you to create some accounts and do stuff via their ui."),Je=i(),w=o("p"),Os=t("In this Post I will show you, how to get started with API development using "),A=o("a"),Hs=t("Vercel"),Rs=t(` and node.js.
I recommend you `),be=o("em"),Bs=t("head over there and create an account"),Ls=t(", because we will have to connect our git repo to vercel, so it can deploy your API whenever you push changes!"),Ke=i(),Z=o("h2"),Vs=t("Create a new project"),Qe=i(),y=o("p"),Ws=t("In order for any of this to work, you need to have "),T=o("a"),Ns=t("git"),Gs=t(" and "),D=o("a"),Fs=t("node.js"),Js=t(" installed on your machine. If you do and have been doing web dev for some time, these steps should look very familiar to you:"),Ye=i(),N=o("pre"),Xe=i(),k=o("p"),Ks=t("By default, everything inside the api-directory will get picked up as an actual API-route. So,let\u2019s start by "),_e=o("em"),Qs=t("creating the file"),Ys=i(),Ie=o("code"),Xs=t("api/users/index.js"),zs=t(". Inside our API this file will represent the "),Pe=o("code"),Zs=t("/users"),$s=t("-endpoint."),ze=i(),G=o("pre"),Ze=i(),$=o("p"),ea=t("We now have our first restful API route with minimal code! To test things out all you need to do now is start the Vercel development environment:"),$e=i(),F=o("pre"),es=i(),ee=o("p"),sa=t("Vercel will ask you to link accounts/projects. It\u2019s pretty straightforward and you should be up and running in a couple of minutes."),ss=i(),h=o("p"),aa=t("By default your app will get served to "),ge=o("code"),ta=t("localhost:3000"),na=t(". By sending a request to "),je=o("code"),oa=t("/api/users"),la=t(" we should be able to see our two users within the response."),as=i(),J=o("pre"),ts=i(),v=o("p"),ra=t("I recommend using a tool like "),U=o("a"),pa=t("insomnia"),ca=t(" to develop your API locally. It has a lot of useful features and is of course "),Me=o("em"),ua=t("free"),ia=t("."),ns=i(),se=o("h2"),fa=t("Database setup"),os=i(),C=o("p"),da=t("Let\u2019s create our database now! Head over to "),x=o("a"),ka=t("mongodb.com"),ma=t(", create a new cluster and stay within the free tier."),ls=i(),d=o("p"),wa=t("Inside the UI of your cluster, under "),Ae=o("code"),ya=t("collections"),ha=t(" you can "),Te=o("em"),va=t("create a new database"),Ea=t(". Afterwards, you can find the "),De=o("code"),ba=t("connect"),_a=t(" button and "),Ue=o("em"),Ia=t("connect your application"),Pa=t("."),rs=i(),K=o("pre"),ps=i(),m=o("p"),ga=t("Now head over to "),S=o("a"),ja=t("Vercel"),Ma=t(" you will need to create some "),Ce=o("em"),Aa=t("environment variables"),Ta=t(", which you can find within your project under the "),xe=o("em"),Da=t("settings tab"),Ua=t("."),cs=i(),ae=o("p"),te=o("img"),us=i(),E=o("p"),Ca=t("For the "),Se=o("code"),xa=t("JWT_SECRET"),Sa=t(" you can go ahead and just generate some random password ("),q=o("a"),qa=t("github issue"),Oa=t(" if you want to know why)."),is=i(),ne=o("h2"),Ha=t("Mongoose Models"),fs=i(),O=o("p"),Ra=t("In our repo, need need to install some packages and create some more files and folders to prepare for our "),qe=o("em"),Ba=t("real users"),La=t("."),ds=i(),Q=o("pre"),ks=i(),b=o("p"),Va=t("Inside our "),Oe=o("code"),Wa=t("models/User.js"),Na=t(" we will now create our Models, which are \u201Cfancy constructors compiled from "),He=o("code"),Ga=t("Schema"),Fa=t(" definitions\u201D - to quote them directly."),ms=i(),Y=o("pre"),ws=i(),H=o("p"),Ja=t("Next, we will modify our "),Re=o("code"),Ka=t("utils/db.js"),Qa=t(" like so:"),ys=i(),X=o("pre"),hs=i(),R=o("p"),Ya=t("This is pretty much all you need to start talking to your database inside your endpoint. We can now "),Be=o("em"),Xa=t("get real users"),za=t(" by connnecting to our database and basically using our User model to query it:"),vs=i(),z=o("pre"),Es=i(),_=o("p"),Za=t("There you go! If everything went right, you can try out our "),Le=o("code"),$a=t("curl"),et=t(" from earlier and you will probably get an empty response, "),Ve=o("em"),st=t("but that\u2019s okay"),at=t(" because we have no users stored inside our database yet!"),bs=i(),B=o("p"),tt=t("If you really want, you can create some users by hand inside your clusters web ui, but I don\u2019t recommend doing that. Instead, we should rather "),We=o("em"),nt=t("create new users"),ot=t(" whenever a user registers a new account within your application."),_s=i(),I=o("p"),lt=t("In the next blog post we will handle the "),Ne=o("em"),rt=t("authentication"),pt=t(" part of our API, which will include "),Ge=o("em"),ct=t("login/register"),ut=t(" routes and some middlewares to handle access control."),Is=i(),oe=o("blockquote"),le=o("p"),it=t("Check out "),re=o("a"),ft=t("the next part"),Ps=i(),pe=o("h2"),dt=t("FYI"),gs=i(),P=o("p"),kt=t("If you want to see the "),Fe=o("em"),mt=t("end result"),wt=t(" we are going to build "),L=o("a"),yt=t("check out the repo"),ht=t("."),this.h()},l(e){M=l(e,"BLOCKQUOTE",{});var p=r(M);j=l(p,"P",{});var ce=r(j);Us=n(ce,"We will be using "),ve=l(ce,"EM",{});var _t=r(ve);Cs=n(_t,"Vercel and MongoDB"),_t.forEach(s),xs=n(ce," - cloud software which is "),Ee=l(ce,"EM",{});var It=r(Ee);Ss=n(It,"fast and free"),It.forEach(s),qs=n(ce,", but requires you to create some accounts and do stuff via their ui."),ce.forEach(s),p.forEach(s),Je=f(e),w=l(e,"P",{});var ue=r(w);Os=n(ue,"In this Post I will show you, how to get started with API development using "),A=l(ue,"A",{href:!0,target:!0,rel:!0});var Pt=r(A);Hs=n(Pt,"Vercel"),Pt.forEach(s),Rs=n(ue,` and node.js.
I recommend you `),be=l(ue,"EM",{});var gt=r(be);Bs=n(gt,"head over there and create an account"),gt.forEach(s),Ls=n(ue,", because we will have to connect our git repo to vercel, so it can deploy your API whenever you push changes!"),ue.forEach(s),Ke=f(e),Z=l(e,"H2",{});var jt=r(Z);Vs=n(jt,"Create a new project"),jt.forEach(s),Qe=f(e),y=l(e,"P",{});var ie=r(y);Ws=n(ie,"In order for any of this to work, you need to have "),T=l(ie,"A",{href:!0,target:!0,rel:!0});var Mt=r(T);Ns=n(Mt,"git"),Mt.forEach(s),Gs=n(ie," and "),D=l(ie,"A",{href:!0,target:!0,rel:!0});var At=r(D);Fs=n(At,"node.js"),At.forEach(s),Js=n(ie," installed on your machine. If you do and have been doing web dev for some time, these steps should look very familiar to you:"),ie.forEach(s),Ye=f(e),N=l(e,"PRE",{class:!0});var In=r(N);In.forEach(s),Xe=f(e),k=l(e,"P",{});var V=r(k);Ks=n(V,"By default, everything inside the api-directory will get picked up as an actual API-route. So,let\u2019s start by "),_e=l(V,"EM",{});var Tt=r(_e);Qs=n(Tt,"creating the file"),Tt.forEach(s),Ys=f(V),Ie=l(V,"CODE",{});var Dt=r(Ie);Xs=n(Dt,"api/users/index.js"),Dt.forEach(s),zs=n(V,". Inside our API this file will represent the "),Pe=l(V,"CODE",{});var Ut=r(Pe);Zs=n(Ut,"/users"),Ut.forEach(s),$s=n(V,"-endpoint."),V.forEach(s),ze=f(e),G=l(e,"PRE",{class:!0});var Pn=r(G);Pn.forEach(s),Ze=f(e),$=l(e,"P",{});var Ct=r($);ea=n(Ct,"We now have our first restful API route with minimal code! To test things out all you need to do now is start the Vercel development environment:"),Ct.forEach(s),$e=f(e),F=l(e,"PRE",{class:!0});var gn=r(F);gn.forEach(s),es=f(e),ee=l(e,"P",{});var xt=r(ee);sa=n(xt,"Vercel will ask you to link accounts/projects. It\u2019s pretty straightforward and you should be up and running in a couple of minutes."),xt.forEach(s),ss=f(e),h=l(e,"P",{});var fe=r(h);aa=n(fe,"By default your app will get served to "),ge=l(fe,"CODE",{});var St=r(ge);ta=n(St,"localhost:3000"),St.forEach(s),na=n(fe,". By sending a request to "),je=l(fe,"CODE",{});var qt=r(je);oa=n(qt,"/api/users"),qt.forEach(s),la=n(fe," we should be able to see our two users within the response."),fe.forEach(s),as=f(e),J=l(e,"PRE",{class:!0});var jn=r(J);jn.forEach(s),ts=f(e),v=l(e,"P",{});var de=r(v);ra=n(de,"I recommend using a tool like "),U=l(de,"A",{href:!0,target:!0,rel:!0});var Ot=r(U);pa=n(Ot,"insomnia"),Ot.forEach(s),ca=n(de," to develop your API locally. It has a lot of useful features and is of course "),Me=l(de,"EM",{});var Ht=r(Me);ua=n(Ht,"free"),Ht.forEach(s),ia=n(de,"."),de.forEach(s),ns=f(e),se=l(e,"H2",{});var Rt=r(se);fa=n(Rt,"Database setup"),Rt.forEach(s),os=f(e),C=l(e,"P",{});var js=r(C);da=n(js,"Let\u2019s create our database now! Head over to "),x=l(js,"A",{href:!0,target:!0,rel:!0});var Bt=r(x);ka=n(Bt,"mongodb.com"),Bt.forEach(s),ma=n(js,", create a new cluster and stay within the free tier."),js.forEach(s),ls=f(e),d=l(e,"P",{});var g=r(d);wa=n(g,"Inside the UI of your cluster, under "),Ae=l(g,"CODE",{});var Lt=r(Ae);ya=n(Lt,"collections"),Lt.forEach(s),ha=n(g," you can "),Te=l(g,"EM",{});var Vt=r(Te);va=n(Vt,"create a new database"),Vt.forEach(s),Ea=n(g,". Afterwards, you can find the "),De=l(g,"CODE",{});var Wt=r(De);ba=n(Wt,"connect"),Wt.forEach(s),_a=n(g," button and "),Ue=l(g,"EM",{});var Nt=r(Ue);Ia=n(Nt,"connect your application"),Nt.forEach(s),Pa=n(g,"."),g.forEach(s),rs=f(e),K=l(e,"PRE",{class:!0});var Mn=r(K);Mn.forEach(s),ps=f(e),m=l(e,"P",{});var W=r(m);ga=n(W,"Now head over to "),S=l(W,"A",{href:!0,target:!0,rel:!0});var Gt=r(S);ja=n(Gt,"Vercel"),Gt.forEach(s),Ma=n(W," you will need to create some "),Ce=l(W,"EM",{});var Ft=r(Ce);Aa=n(Ft,"environment variables"),Ft.forEach(s),Ta=n(W,", which you can find within your project under the "),xe=l(W,"EM",{});var Jt=r(xe);Da=n(Jt,"settings tab"),Jt.forEach(s),Ua=n(W,"."),W.forEach(s),cs=f(e),ae=l(e,"P",{});var Kt=r(ae);te=l(Kt,"IMG",{src:!0,alt:!0}),Kt.forEach(s),us=f(e),E=l(e,"P",{});var ke=r(E);Ca=n(ke,"For the "),Se=l(ke,"CODE",{});var Qt=r(Se);xa=n(Qt,"JWT_SECRET"),Qt.forEach(s),Sa=n(ke," you can go ahead and just generate some random password ("),q=l(ke,"A",{href:!0,target:!0,rel:!0});var Yt=r(q);qa=n(Yt,"github issue"),Yt.forEach(s),Oa=n(ke," if you want to know why)."),ke.forEach(s),is=f(e),ne=l(e,"H2",{});var Xt=r(ne);Ha=n(Xt,"Mongoose Models"),Xt.forEach(s),fs=f(e),O=l(e,"P",{});var Ms=r(O);Ra=n(Ms,"In our repo, need need to install some packages and create some more files and folders to prepare for our "),qe=l(Ms,"EM",{});var zt=r(qe);Ba=n(zt,"real users"),zt.forEach(s),La=n(Ms,"."),Ms.forEach(s),ds=f(e),Q=l(e,"PRE",{class:!0});var An=r(Q);An.forEach(s),ks=f(e),b=l(e,"P",{});var me=r(b);Va=n(me,"Inside our "),Oe=l(me,"CODE",{});var Zt=r(Oe);Wa=n(Zt,"models/User.js"),Zt.forEach(s),Na=n(me," we will now create our Models, which are \u201Cfancy constructors compiled from "),He=l(me,"CODE",{});var $t=r(He);Ga=n($t,"Schema"),$t.forEach(s),Fa=n(me," definitions\u201D - to quote them directly."),me.forEach(s),ms=f(e),Y=l(e,"PRE",{class:!0});var Tn=r(Y);Tn.forEach(s),ws=f(e),H=l(e,"P",{});var As=r(H);Ja=n(As,"Next, we will modify our "),Re=l(As,"CODE",{});var en=r(Re);Ka=n(en,"utils/db.js"),en.forEach(s),Qa=n(As," like so:"),As.forEach(s),ys=f(e),X=l(e,"PRE",{class:!0});var Dn=r(X);Dn.forEach(s),hs=f(e),R=l(e,"P",{});var Ts=r(R);Ya=n(Ts,"This is pretty much all you need to start talking to your database inside your endpoint. We can now "),Be=l(Ts,"EM",{});var sn=r(Be);Xa=n(sn,"get real users"),sn.forEach(s),za=n(Ts," by connnecting to our database and basically using our User model to query it:"),Ts.forEach(s),vs=f(e),z=l(e,"PRE",{class:!0});var Un=r(z);Un.forEach(s),Es=f(e),_=l(e,"P",{});var we=r(_);Za=n(we,"There you go! If everything went right, you can try out our "),Le=l(we,"CODE",{});var an=r(Le);$a=n(an,"curl"),an.forEach(s),et=n(we," from earlier and you will probably get an empty response, "),Ve=l(we,"EM",{});var tn=r(Ve);st=n(tn,"but that\u2019s okay"),tn.forEach(s),at=n(we," because we have no users stored inside our database yet!"),we.forEach(s),bs=f(e),B=l(e,"P",{});var Ds=r(B);tt=n(Ds,"If you really want, you can create some users by hand inside your clusters web ui, but I don\u2019t recommend doing that. Instead, we should rather "),We=l(Ds,"EM",{});var nn=r(We);nt=n(nn,"create new users"),nn.forEach(s),ot=n(Ds," whenever a user registers a new account within your application."),Ds.forEach(s),_s=f(e),I=l(e,"P",{});var ye=r(I);lt=n(ye,"In the next blog post we will handle the "),Ne=l(ye,"EM",{});var on=r(Ne);rt=n(on,"authentication"),on.forEach(s),pt=n(ye," part of our API, which will include "),Ge=l(ye,"EM",{});var ln=r(Ge);ct=n(ln,"login/register"),ln.forEach(s),ut=n(ye," routes and some middlewares to handle access control."),ye.forEach(s),Is=f(e),oe=l(e,"BLOCKQUOTE",{});var rn=r(oe);le=l(rn,"P",{});var vt=r(le);it=n(vt,"Check out "),re=l(vt,"A",{href:!0});var pn=r(re);ft=n(pn,"the next part"),pn.forEach(s),vt.forEach(s),rn.forEach(s),Ps=f(e),pe=l(e,"H2",{});var cn=r(pe);dt=n(cn,"FYI"),cn.forEach(s),gs=f(e),P=l(e,"P",{});var he=r(P);kt=n(he,"If you want to see the "),Fe=l(he,"EM",{});var un=r(Fe);mt=n(un,"end result"),un.forEach(s),wt=n(he," we are going to build "),L=l(he,"A",{href:!0,target:!0,rel:!0});var fn=r(L);yt=n(fn,"check out the repo"),fn.forEach(s),ht=n(he,"."),he.forEach(s),this.h()},h(){u(A,"href","https://vercel.com/"),u(A,"target","_blank"),u(A,"rel","nofollower noreferer"),u(T,"href","https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"),u(T,"target","_blank"),u(T,"rel","nofollower noreferer"),u(D,"href","https://nodejs.org/en/"),u(D,"target","_blank"),u(D,"rel","nofollower noreferer"),u(N,"class","language-bash"),u(G,"class","language-js"),u(F,"class","language-bash"),u(J,"class","language-bash"),u(U,"href","https://insomnia.rest/"),u(U,"target","_blank"),u(U,"rel","nofollower noreferer"),u(x,"href","https://www.mongodb.com/"),u(x,"target","_blank"),u(x,"rel","nofollower noreferer"),u(K,"class","language-bash"),u(S,"href","https://vercel.com/"),u(S,"target","_blank"),u(S,"rel","nofollower noreferer"),qn(te.src,bt="images/blog/vercel_env_variables.png")||u(te,"src",bt),u(te,"alt","Vercel Environment Variables"),u(q,"href","https://github.com/dwyl/hapi-auth-jwt2/issues/48#issuecomment-109944109"),u(q,"target","_blank"),u(q,"rel","nofollower noreferer"),u(Q,"class","language-bash"),u(Y,"class","language-js"),u(X,"class","language-js"),u(z,"class","language-js"),u(re,"href","/blog/serverless-auth-tutorial"),u(L,"href","https://github.com/DennisSmuda/serverless-sample-api"),u(L,"target","_blank"),u(L,"rel","nofollower noreferer")},m(e,p){c(e,M,p),a(M,j),a(j,Us),a(j,ve),a(ve,Cs),a(j,xs),a(j,Ee),a(Ee,Ss),a(j,qs),c(e,Je,p),c(e,w,p),a(w,Os),a(w,A),a(A,Hs),a(w,Rs),a(w,be),a(be,Bs),a(w,Ls),c(e,Ke,p),c(e,Z,p),a(Z,Vs),c(e,Qe,p),c(e,y,p),a(y,Ws),a(y,T),a(T,Ns),a(y,Gs),a(y,D),a(D,Fs),a(y,Js),c(e,Ye,p),c(e,N,p),N.innerHTML=kn,c(e,Xe,p),c(e,k,p),a(k,Ks),a(k,_e),a(_e,Qs),a(k,Ys),a(k,Ie),a(Ie,Xs),a(k,zs),a(k,Pe),a(Pe,Zs),a(k,$s),c(e,ze,p),c(e,G,p),G.innerHTML=mn,c(e,Ze,p),c(e,$,p),a($,ea),c(e,$e,p),c(e,F,p),F.innerHTML=wn,c(e,es,p),c(e,ee,p),a(ee,sa),c(e,ss,p),c(e,h,p),a(h,aa),a(h,ge),a(ge,ta),a(h,na),a(h,je),a(je,oa),a(h,la),c(e,as,p),c(e,J,p),J.innerHTML=yn,c(e,ts,p),c(e,v,p),a(v,ra),a(v,U),a(U,pa),a(v,ca),a(v,Me),a(Me,ua),a(v,ia),c(e,ns,p),c(e,se,p),a(se,fa),c(e,os,p),c(e,C,p),a(C,da),a(C,x),a(x,ka),a(C,ma),c(e,ls,p),c(e,d,p),a(d,wa),a(d,Ae),a(Ae,ya),a(d,ha),a(d,Te),a(Te,va),a(d,Ea),a(d,De),a(De,ba),a(d,_a),a(d,Ue),a(Ue,Ia),a(d,Pa),c(e,rs,p),c(e,K,p),K.innerHTML=hn,c(e,ps,p),c(e,m,p),a(m,ga),a(m,S),a(S,ja),a(m,Ma),a(m,Ce),a(Ce,Aa),a(m,Ta),a(m,xe),a(xe,Da),a(m,Ua),c(e,cs,p),c(e,ae,p),a(ae,te),c(e,us,p),c(e,E,p),a(E,Ca),a(E,Se),a(Se,xa),a(E,Sa),a(E,q),a(q,qa),a(E,Oa),c(e,is,p),c(e,ne,p),a(ne,Ha),c(e,fs,p),c(e,O,p),a(O,Ra),a(O,qe),a(qe,Ba),a(O,La),c(e,ds,p),c(e,Q,p),Q.innerHTML=vn,c(e,ks,p),c(e,b,p),a(b,Va),a(b,Oe),a(Oe,Wa),a(b,Na),a(b,He),a(He,Ga),a(b,Fa),c(e,ms,p),c(e,Y,p),Y.innerHTML=En,c(e,ws,p),c(e,H,p),a(H,Ja),a(H,Re),a(Re,Ka),a(H,Qa),c(e,ys,p),c(e,X,p),X.innerHTML=bn,c(e,hs,p),c(e,R,p),a(R,Ya),a(R,Be),a(Be,Xa),a(R,za),c(e,vs,p),c(e,z,p),z.innerHTML=_n,c(e,Es,p),c(e,_,p),a(_,Za),a(_,Le),a(Le,$a),a(_,et),a(_,Ve),a(Ve,st),a(_,at),c(e,bs,p),c(e,B,p),a(B,tt),a(B,We),a(We,nt),a(B,ot),c(e,_s,p),c(e,I,p),a(I,lt),a(I,Ne),a(Ne,rt),a(I,pt),a(I,Ge),a(Ge,ct),a(I,ut),c(e,Is,p),c(e,oe,p),a(oe,le),a(le,it),a(le,re),a(re,ft),c(e,Ps,p),c(e,pe,p),a(pe,dt),c(e,gs,p),c(e,P,p),a(P,kt),a(P,Fe),a(Fe,mt),a(P,wt),a(P,L),a(L,yt),a(P,ht)},p:Et,i:Et,o:Et,d(e){e&&s(M),e&&s(Je),e&&s(w),e&&s(Ke),e&&s(Z),e&&s(Qe),e&&s(y),e&&s(Ye),e&&s(N),e&&s(Xe),e&&s(k),e&&s(ze),e&&s(G),e&&s(Ze),e&&s($),e&&s($e),e&&s(F),e&&s(es),e&&s(ee),e&&s(ss),e&&s(h),e&&s(as),e&&s(J),e&&s(ts),e&&s(v),e&&s(ns),e&&s(se),e&&s(os),e&&s(C),e&&s(ls),e&&s(d),e&&s(rs),e&&s(K),e&&s(ps),e&&s(m),e&&s(cs),e&&s(ae),e&&s(us),e&&s(E),e&&s(is),e&&s(ne),e&&s(fs),e&&s(O),e&&s(ds),e&&s(Q),e&&s(ks),e&&s(b),e&&s(ms),e&&s(Y),e&&s(ws),e&&s(H),e&&s(ys),e&&s(X),e&&s(hs),e&&s(R),e&&s(vs),e&&s(z),e&&s(Es),e&&s(_),e&&s(bs),e&&s(B),e&&s(_s),e&&s(I),e&&s(Is),e&&s(oe),e&&s(Ps),e&&s(pe),e&&s(gs),e&&s(P)}}}const Rn={slug:"serverless-api-tutorial",title:"Intro to serverless APIs \u{1F36A}",description:"How to build a serverless REST API with user authentication and mongoDB Part 1",createdAt:"Jul. 4, 2021",published:!0,tags:[{name:"node.js",value:"node"},{name:"serverless",value:"serverless"}]};class Bn extends Cn{constructor(M){super(),xn(this,M,null,On,Sn,{})}}export{Bn as default,Rn as metadata};
