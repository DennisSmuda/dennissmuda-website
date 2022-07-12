import{_ as A}from"../../chunks/preload-helper-96c8edfa.js";import{S as H,i as U,s as N,e as h,k as L,w as C,O as j,c as E,d as l,m as M,x as V,a as I,b as s,H as y,g as S,y as b,o as B,p as z,q as O,B as R,n as F}from"../../chunks/index-2dbaace3.js";import{H as G}from"../../chunks/header-a5ebed0b.js";function J(n){switch(n){case"./content/bevy-run-get-started.md":return A(()=>import("./content/bevy-run-get-started.md-200e045a.js"),["immutable/pages/blog/content/bevy-run-get-started.md-200e045a.js","immutable/chunks/index-2dbaace3.js"]);case"./content/hello-world.md":return A(()=>import("./content/hello-world.md-e12bd671.js"),["immutable/pages/blog/content/hello-world.md-e12bd671.js","immutable/chunks/index-2dbaace3.js"]);case"./content/serverless-api-tutorial.md":return A(()=>import("./content/serverless-api-tutorial.md-cfc4297b.js"),["immutable/pages/blog/content/serverless-api-tutorial.md-cfc4297b.js","immutable/chunks/index-2dbaace3.js"]);case"./content/serverless-auth-tutorial.md":return A(()=>import("./content/serverless-auth-tutorial.md-11f30857.js"),["immutable/pages/blog/content/serverless-auth-tutorial.md-11f30857.js","immutable/chunks/index-2dbaace3.js"]);default:return new Promise(function(o,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function K(n){let o,r,_,i,c,d,D,P,u,T,f,v,p,e,m;document.title=o=n[1].title+" - Blog | Dennis Smuda",u=new G({props:{title:n[1].title,subtitle:""}});var g=n[0];function k(t){return{}}return g&&(e=new g(k())),{c(){r=h("meta"),i=h("meta"),d=h("meta"),P=L(),C(u.$$.fragment),T=L(),f=h("section"),v=h("div"),p=h("article"),e&&C(e.$$.fragment),this.h()},l(t){const a=j('[data-svelte="svelte-6gi59i"]',document.head);r=E(a,"META",{name:!0,content:!0}),i=E(a,"META",{property:!0,content:!0}),d=E(a,"META",{property:!0,content:!0}),a.forEach(l),P=M(t),V(u.$$.fragment,t),T=M(t),f=E(t,"SECTION",{class:!0});var $=I(f);v=E($,"DIV",{class:!0});var w=I(v);p=E(w,"ARTICLE",{class:!0});var q=I(p);e&&V(e.$$.fragment,q),q.forEach(l),w.forEach(l),$.forEach(l),this.h()},h(){s(r,"name","description"),s(r,"content",_=n[1].description),s(i,"property","og:title"),s(i,"content",c=n[1].title+" - Blog |\xA0Dennis Smmuda"),s(d,"property","og:description"),s(d,"content",D=n[1].description),s(p,"class","ds-prose"),s(v,"class","ds-prose "),s(f,"class","container lg:max-w-4xl mx-auto px-8")},m(t,a){y(document.head,r),y(document.head,i),y(document.head,d),S(t,P,a),b(u,t,a),S(t,T,a),S(t,f,a),y(f,v),y(v,p),e&&b(e,p,null),m=!0},p(t,[a]){(!m||a&2)&&o!==(o=t[1].title+" - Blog | Dennis Smuda")&&(document.title=o),(!m||a&2&&_!==(_=t[1].description))&&s(r,"content",_),(!m||a&2&&c!==(c=t[1].title+" - Blog |\xA0Dennis Smmuda"))&&s(i,"content",c),(!m||a&2&&D!==(D=t[1].description))&&s(d,"content",D);const $={};if(a&2&&($.title=t[1].title),u.$set($),g!==(g=t[0])){if(e){F();const w=e;B(w.$$.fragment,1,0,()=>{R(w,1)}),z()}g?(e=new g(k()),C(e.$$.fragment),O(e.$$.fragment,1),b(e,p,null)):e=null}},i(t){m||(O(u.$$.fragment,t),e&&O(e.$$.fragment,t),m=!0)},o(t){B(u.$$.fragment,t),e&&B(e.$$.fragment,t),m=!1},d(t){l(r),l(i),l(d),t&&l(P),R(u,t),t&&l(T),t&&l(f),e&&R(e)}}}const Z=async({params:n})=>{try{const o=await J(`./content/${n.slug}.md`);return console.log("load post with params",n),{props:{PostContent:o.default,meta:{...o.metadata,slug:n.slug}}}}catch(o){return{status:404,error:o.message}}};function Q(n,o,r){let{PostContent:_}=o,{meta:i}=o;return n.$$set=c=>{"PostContent"in c&&r(0,_=c.PostContent),"meta"in c&&r(1,i=c.meta)},[_,i]}class x extends H{constructor(o){super(),U(this,o,Q,K,N,{PostContent:0,meta:1})}}export{x as default,Z as load};