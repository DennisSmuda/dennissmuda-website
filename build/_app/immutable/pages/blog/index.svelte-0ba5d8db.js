import{S as F,i as G,s as J,e as E,k as D,t as T,c as q,a as w,d as v,m as V,h as B,b as p,g as H,H as u,j as O,X as z,w as K,O as L,x as Q,y as R,q as Y,o as Z,B as ee}from"../../chunks/index-2dbaace3.js";import{H as te}from"../../chunks/header-a5ebed0b.js";function P(c,e,n){const l=c.slice();return l[1]=e[n],l}function U(c,e,n){const l=c.slice();return l[4]=e[n],l}function W(c){let e,n=c[4].name+"",l,_,f;return{c(){e=E("button"),l=T(n),_=D(),this.h()},l(a){e=q(a,"BUTTON",{class:!0});var d=w(e);l=B(d,n),_=V(d),d.forEach(v),this.h()},h(){p(e,"class",f="button tag tag--"+c[4].value+" svelte-1qgy4kg")},m(a,d){H(a,e,d),u(e,l),u(e,_)},p(a,d){d&1&&n!==(n=a[4].name+"")&&O(l,n),d&1&&f!==(f="button tag tag--"+a[4].value+" svelte-1qgy4kg")&&p(e,"class",f)},d(a){a&&v(e)}}}function X(c){let e,n,l,_,f=c[1].createdAt+"",a,d,I,$=c[1].title+"",b,r,t,g=c[1].description+"",s,k,y,j,S,x=c[1].tags,m=[];for(let o=0;o<x.length;o+=1)m[o]=W(U(c,x,o));return{c(){e=E("a"),n=E("div"),l=D(),_=E("div"),a=T(f),d=D(),I=E("h2"),b=T($),r=D(),t=E("p"),s=T(g),k=D(),y=E("div");for(let o=0;o<m.length;o+=1)m[o].c();j=D(),this.h()},l(o){e=q(o,"A",{class:!0,href:!0,"sveltekit:prefetch":!0});var i=w(e);n=q(i,"DIV",{class:!0}),w(n).forEach(v),l=V(i),_=q(i,"DIV",{class:!0});var h=w(_);a=B(h,f),h.forEach(v),d=V(i),I=q(i,"H2",{class:!0});var A=w(I);b=B(A,$),A.forEach(v),r=V(i),t=q(i,"P",{class:!0});var M=w(t);s=B(M,g),M.forEach(v),k=V(i),y=q(i,"DIV",{class:!0});var N=w(y);for(let C=0;C<m.length;C+=1)m[C].l(N);N.forEach(v),j=V(i),i.forEach(v),this.h()},h(){p(n,"class","timeline__dot svelte-1qgy4kg"),p(_,"class","post__date svelte-1qgy4kg"),p(I,"class","post__headline svelte-1qgy4kg"),p(t,"class","post__subline svelte-1qgy4kg"),p(y,"class","flex"),p(e,"class","post svelte-1qgy4kg"),p(e,"href",S="/blog/"+c[1].path),p(e,"sveltekit:prefetch","")},m(o,i){H(o,e,i),u(e,n),u(e,l),u(e,_),u(_,a),u(e,d),u(e,I),u(I,b),u(e,r),u(e,t),u(t,s),u(e,k),u(e,y);for(let h=0;h<m.length;h+=1)m[h].m(y,null);u(e,j)},p(o,i){if(i&1&&f!==(f=o[1].createdAt+"")&&O(a,f),i&1&&$!==($=o[1].title+"")&&O(b,$),i&1&&g!==(g=o[1].description+"")&&O(s,g),i&1){x=o[1].tags;let h;for(h=0;h<x.length;h+=1){const A=U(o,x,h);m[h]?m[h].p(A,i):(m[h]=W(A),m[h].c(),m[h].m(y,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=x.length}i&1&&S!==(S="/blog/"+o[1].path)&&p(e,"href",S)},d(o){o&&v(e),z(m,o)}}}function le(c){let e,n,l,_,f,a,d,I,$;l=new te({props:{title:"writing \u270F\uFE0F",subtitle:"some thoughts and words"}});let b=c[0],r=[];for(let t=0;t<b.length;t+=1)r[t]=X(P(c,b,t));return{c(){e=E("meta"),n=D(),K(l.$$.fragment),_=D(),f=E("section"),a=E("div"),d=E("div"),I=D();for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){const g=L('[data-svelte="svelte-1xttcq4"]',document.head);e=q(g,"META",{name:!0,content:!0}),g.forEach(v),n=V(t),Q(l.$$.fragment,t),_=V(t),f=q(t,"SECTION",{class:!0});var s=w(f);a=q(s,"DIV",{class:!0});var k=w(a);d=q(k,"DIV",{class:!0}),w(d).forEach(v),I=V(k);for(let y=0;y<r.length;y+=1)r[y].l(k);k.forEach(v),s.forEach(v),this.h()},h(){document.title="Writing | Dennis Smuda",p(e,"name","description"),p(e,"content","My blog, where I write mostly about stuff I've learned on my journey."),p(d,"class","timeline svelte-1qgy4kg"),p(a,"class","ds-prose relative"),p(f,"class","container lg:max-w-4xl mx-auto px-8")},m(t,g){u(document.head,e),H(t,n,g),R(l,t,g),H(t,_,g),H(t,f,g),u(f,a),u(a,d),u(a,I);for(let s=0;s<r.length;s+=1)r[s].m(a,null);$=!0},p(t,[g]){if(g&1){b=t[0];let s;for(s=0;s<b.length;s+=1){const k=P(t,b,s);r[s]?r[s].p(k,g):(r[s]=X(k),r[s].c(),r[s].m(a,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=b.length}},i(t){$||(Y(l.$$.fragment,t),$=!0)},o(t){Z(l.$$.fragment,t),$=!1},d(t){v(e),t&&v(n),ee(l,t),t&&v(_),t&&v(f),z(r,t)}}}function se(c,e,n){let{posts:l}=e;return c.$$set=_=>{"posts"in _&&n(0,l=_.posts)},[l]}class oe extends F{constructor(e){super(),G(this,e,se,le,J,{posts:0})}}export{oe as default};