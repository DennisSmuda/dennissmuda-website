import{S as be,i as Ee,s as we,e as g,k as $,F as R,c as p,a as i,d as r,m as k,G as F,b as e,g as W,H as t,E as ee,I as Qe,t as E,h as w,J as Ie,K as Ue,L as Ye,w as ye,x as $e,y as ke,q as _e,o as me,B as qe,M as Ce,N as Xe,O as Ze,P as We,Q as et,R as tt,T as st}from"../chunks/index-2dbaace3.js";import{s as Je}from"../chunks/index-49e9c59f.js";import"../chunks/index-87c96118.js";function at(l){let s,c,n,a,o,f,d,h,m,y;return{c(){s=g("div"),c=g("div"),n=$(),a=g("div"),o=$(),f=g("div"),d=R("svg"),h=R("circle"),this.h()},l(_){s=p(_,"DIV",{class:!0});var u=i(s);c=p(u,"DIV",{class:!0}),i(c).forEach(r),n=k(u),a=p(u,"DIV",{class:!0}),i(a).forEach(r),u.forEach(r),o=k(_),f=p(_,"DIV",{class:!0});var b=i(f);d=F(b,"svg",{class:!0});var A=i(d);h=F(A,"circle",{cx:!0,cy:!0,r:!0,class:!0}),i(h).forEach(r),A.forEach(r),b.forEach(r),this.h()},h(){e(c,"class","background-shape svelte-1a0h3oe"),e(a,"class","circle"),e(s,"class","background-shape-wrapper svelte-1a0h3oe"),e(h,"cx",m=l[0].x),e(h,"cy",y=l[0].y),e(h,"r",l[1]),e(h,"class","svelte-1a0h3oe"),e(d,"class","svelte-1a0h3oe"),e(f,"class","svg-shape-wrapper svelte-1a0h3oe")},m(_,u){W(_,s,u),t(s,c),t(s,n),t(s,a),W(_,o,u),W(_,f,u),t(f,d),t(d,h)},p(_,[u]){u&1&&m!==(m=_[0].x)&&e(h,"cx",m),u&1&&y!==(y=_[0].y)&&e(h,"cy",y),u&2&&e(h,"r",_[1])},i:ee,o:ee,d(_){_&&r(s),_&&r(o),_&&r(f)}}}function rt(l,s,c){let{coords:n}=s,{size:a}=s;return l.$$set=o=>{"coords"in o&&c(0,n=o.coords),"size"in o&&c(1,a=o.size)},[n,a]}class lt extends be{constructor(s){super(),Ee(this,s,rt,at,we,{coords:0,size:1})}}const nt=()=>{const l=Qe("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},ot={subscribe(l){return nt().page.subscribe(l)}};function ct(l){let s,c,n,a,o;return{c(){s=g("a"),c=E(`ds
	`),n=g("span"),a=E("."),this.h()},l(f){s=p(f,"A",{href:!0,class:!0,"aria-current":!0});var d=i(s);c=w(d,`ds
	`),n=p(d,"SPAN",{class:!0});var h=i(n);a=w(h,"."),h.forEach(r),d.forEach(r),this.h()},h(){e(n,"class","svelte-cz10kx"),e(s,"href","/"),e(s,"class","logo button svelte-cz10kx"),e(s,"aria-current",o=l[0]?"true":void 0)},m(f,d){W(f,s,d),t(s,c),t(s,n),t(n,a)},p(f,[d]){d&1&&o!==(o=f[0]?"true":void 0)&&e(s,"aria-current",o)},i:ee,o:ee,d(f){f&&r(s)}}}function it(l,s,c){let{active:n}=s;return l.$$set=a=>{"active"in a&&c(0,n=a.active)},[n]}class ut extends be{constructor(s){super(),Ee(this,s,it,ct,we,{active:0})}}function dt(l){let s,c,n,a,o,f,d,h,m,y,_;return{c(){s=g("button"),c=g("span"),n=E("theme color toggle"),a=$(),o=g("span"),f=E("\u{1F318}"),d=$(),h=g("span"),m=E("\u{1F60E}"),this.h()},l(u){s=p(u,"BUTTON",{id:!0,type:!0,class:!0});var b=i(s);c=p(b,"SPAN",{class:!0});var A=i(c);n=w(A,"theme color toggle"),A.forEach(r),a=k(b),o=p(b,"SPAN",{class:!0});var q=i(o);f=w(q,"\u{1F318}"),q.forEach(r),d=k(b),h=p(b,"SPAN",{class:!0});var v=i(h);m=w(v,"\u{1F60E}"),v.forEach(r),b.forEach(r),this.h()},h(){e(c,"class","sr-only svelte-oujm4u"),e(o,"class","dark-button svelte-oujm4u"),e(h,"class","light-button svelte-oujm4u"),e(s,"id","theme-toggle"),e(s,"type","button"),e(s,"class","w-9 h-9 flex items-center justify-center color-black dark:color-white ml-1 svelte-oujm4u")},m(u,b){W(u,s,b),t(s,c),t(c,n),t(s,a),t(s,o),t(o,f),l[4](o),t(s,d),t(s,h),t(h,m),l[5](h),y||(_=Ie(s,"click",function(){Ue(l[3](!l[2]))&&l[3](!l[2]).apply(this,arguments)}),y=!0)},p(u,[b]){l=u},i:ee,o:ee,d(u){u&&r(s),l[4](null),l[5](null),y=!1,_()}}}function ft(l,s,c){let n,a,o;const f=m=>{c(2,o=m),console.log("Toggle",o),localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))};function d(m){Ye[m?"unshift":"push"](()=>{n=m,c(0,n)})}function h(m){Ye[m?"unshift":"push"](()=>{a=m,c(1,a)})}return[n,a,o,f,d,h]}class ht extends be{constructor(s){super(),Ee(this,s,ft,dt,we,{})}}function vt(l){let s,c,n,a,o,f,d,h,m,y,_,u,b,A,q,v,S,B,D,K,M,Y,ne,H,oe,T,C,P,J,ce,L,ie,te,ue,Q,U,x,V,O;return c=new ut({props:{active:l[0]==="/"}}),V=new ht({}),{c(){s=g("header"),ye(c.$$.fragment),n=$(),a=g("div"),o=g("a"),f=g("span"),d=E("writing"),h=$(),m=g("span"),y=E("\u270F\uFE0F"),u=$(),b=g("span"),A=E("|"),q=$(),v=g("a"),S=g("span"),B=E("about"),D=$(),K=g("span"),M=E("\u{1F468}\u{1F3FB}\u200D\u{1F4BB}"),ne=$(),H=g("span"),oe=E("|"),T=$(),C=g("a"),P=g("span"),J=E("work"),ce=$(),L=g("span"),ie=E("\u{1F3CB}\uFE0F\u200D\u2640\uFE0F"),ue=$(),Q=g("span"),U=E("|"),x=$(),ye(V.$$.fragment),this.h()},l(N){s=p(N,"HEADER",{class:!0});var z=i(s);$e(c.$$.fragment,z),n=k(z),a=p(z,"DIV",{class:!0});var I=i(a);o=p(I,"A",{class:!0,href:!0,"aria-current":!0});var se=i(o);f=p(se,"SPAN",{class:!0});var G=i(f);d=w(G,"writing"),G.forEach(r),h=k(se),m=p(se,"SPAN",{class:!0});var he=i(m);y=w(he,"\u270F\uFE0F"),he.forEach(r),se.forEach(r),u=k(I),b=p(I,"SPAN",{class:!0});var ve=i(b);A=w(ve,"|"),ve.forEach(r),q=k(I),v=p(I,"A",{class:!0,href:!0,"aria-current":!0});var j=i(v);S=p(j,"SPAN",{class:!0});var ge=i(S);B=w(ge,"about"),ge.forEach(r),D=k(j),K=p(j,"SPAN",{class:!0});var pe=i(K);M=w(pe,"\u{1F468}\u{1F3FB}\u200D\u{1F4BB}"),pe.forEach(r),j.forEach(r),ne=k(I),H=p(I,"SPAN",{class:!0});var X=i(H);oe=w(X,"|"),X.forEach(r),T=k(I),C=p(I,"A",{class:!0,href:!0,"aria-current":!0});var ae=i(C);P=p(ae,"SPAN",{class:!0});var re=i(P);J=w(re,"work"),re.forEach(r),ce=k(ae),L=p(ae,"SPAN",{class:!0});var de=i(L);ie=w(de,"\u{1F3CB}\uFE0F\u200D\u2640\uFE0F"),de.forEach(r),ae.forEach(r),ue=k(I),Q=p(I,"SPAN",{class:!0});var fe=i(Q);U=w(fe,"|"),fe.forEach(r),x=k(I),$e(V.$$.fragment,I),I.forEach(r),z.forEach(r),this.h()},h(){e(f,"class","svelte-1lsyeqg"),e(m,"class","svelte-1lsyeqg"),e(o,"class","button nav-button svelte-1lsyeqg"),e(o,"href","/blog"),e(o,"aria-current",_=l[0]==="/blog"?!0:void 0),e(b,"class","svelte-1lsyeqg"),e(S,"class","svelte-1lsyeqg"),e(K,"class","svelte-1lsyeqg"),e(v,"class","button nav-button svelte-1lsyeqg"),e(v,"href","/about"),e(v,"aria-current",Y=l[0]==="/about"?!0:void 0),e(H,"class","svelte-1lsyeqg"),e(P,"class","svelte-1lsyeqg"),e(L,"class","svelte-1lsyeqg"),e(C,"class","button nav-button svelte-1lsyeqg"),e(C,"href","/work"),e(C,"aria-current",te=l[0]==="/work"?!0:void 0),e(Q,"class","svelte-1lsyeqg"),e(a,"class","header__nav svelte-1lsyeqg"),e(s,"class","header p-4 svelte-1lsyeqg")},m(N,z){W(N,s,z),ke(c,s,null),t(s,n),t(s,a),t(a,o),t(o,f),t(f,d),t(o,h),t(o,m),t(m,y),t(a,u),t(a,b),t(b,A),t(a,q),t(a,v),t(v,S),t(S,B),t(v,D),t(v,K),t(K,M),t(a,ne),t(a,H),t(H,oe),t(a,T),t(a,C),t(C,P),t(P,J),t(C,ce),t(C,L),t(L,ie),t(a,ue),t(a,Q),t(Q,U),t(a,x),ke(V,a,null),O=!0},p(N,[z]){const I={};z&1&&(I.active=N[0]==="/"),c.$set(I),(!O||z&1&&_!==(_=N[0]==="/blog"?!0:void 0))&&e(o,"aria-current",_),(!O||z&1&&Y!==(Y=N[0]==="/about"?!0:void 0))&&e(v,"aria-current",Y),(!O||z&1&&te!==(te=N[0]==="/work"?!0:void 0))&&e(C,"aria-current",te)},i(N){O||(_e(c.$$.fragment,N),_e(V.$$.fragment,N),O=!0)},o(N){me(c.$$.fragment,N),me(V.$$.fragment,N),O=!1},d(N){N&&r(s),qe(c),qe(V)}}}function gt(l,s,c){let n;Ce(l,ot,o=>c(1,n=o));let a;return l.$$.update=()=>{l.$$.dirty&2&&c(0,a=n.url.pathname)},[a,n]}class pt extends be{constructor(s){super(),Ee(this,s,gt,vt,we,{})}}function _t(l){let s,c,n,a,o,f,d,h,m,y,_,u,b,A,q,v,S,B,D,K,M,Y,ne,H,oe,T,C,P,J,ce,L,ie,te,ue,Q,U,x,V,O,N,z,I,se,G,he,ve,j,ge,pe,X,ae;return{c(){s=g("footer"),c=g("div"),n=g("div"),a=g("div"),o=g("a"),f=E(`github
					`),d=R("svg"),h=R("title"),m=E("GitHub"),y=R("path"),_=$(),u=g("a"),b=E(`e-mail
					`),A=R("svg"),q=R("title"),v=E("Mail.Ru"),S=R("path"),B=$(),D=g("a"),K=E(`discord
					`),M=R("svg"),Y=R("title"),ne=E("Discord"),H=R("path"),oe=$(),T=g("a"),C=E(`itch.io
					`),P=R("svg"),J=R("path"),ce=$(),L=g("span"),ie=E("\xA9"),te=E(l[0]),ue=E(" built and designed with \u2665\uFE0F by me."),Q=$(),U=g("div"),x=g("div"),V=g("a"),O=E("writing"),N=$(),z=g("a"),I=E("about"),se=$(),G=g("a"),he=E("work"),ve=$(),j=g("a"),ge=E("imprint"),pe=$(),X=g("a"),ae=E("ds."),this.h()},l(re){s=p(re,"FOOTER",{class:!0});var de=i(s);c=p(de,"DIV",{class:!0});var fe=i(c);n=p(fe,"DIV",{class:!0,id:!0});var Ae=i(n);a=p(Ae,"DIV",{class:!0});var le=i(a);o=p(le,"A",{href:!0,target:!0,class:!0});var Ne=i(o);f=w(Ne,`github
					`),d=F(Ne,"svg",{role:!0,viewBox:!0,xmlns:!0,class:!0});var ze=i(d);h=F(ze,"title",{});var Le=i(h);m=w(Le,"GitHub"),Le.forEach(r),y=F(ze,"path",{d:!0}),i(y).forEach(r),ze.forEach(r),Ne.forEach(r),_=k(le),u=p(le,"A",{href:!0,class:!0});var De=i(u);b=w(De,`e-mail
					`),A=F(De,"svg",{role:!0,viewBox:!0,xmlns:!0,class:!0});var xe=i(A);q=F(xe,"title",{});var Me=i(q);v=w(Me,"Mail.Ru"),Me.forEach(r),S=F(xe,"path",{d:!0}),i(S).forEach(r),xe.forEach(r),De.forEach(r),B=k(le),D=p(le,"A",{href:!0,class:!0});var Pe=i(D);K=w(Pe,`discord
					`),M=F(Pe,"svg",{role:!0,viewBox:!0,xmlns:!0,class:!0});var Be=i(M);Y=F(Be,"title",{});var Te=i(Y);ne=w(Te,"Discord"),Te.forEach(r),H=F(Be,"path",{d:!0}),i(H).forEach(r),Be.forEach(r),Pe.forEach(r),oe=k(le),T=p(le,"A",{href:!0,target:!0,rel:!0,class:!0});var Ve=i(T);C=w(Ve,`itch.io
					`),P=F(Ve,"svg",{xmlns:!0,height:!0,width:!0,viewBox:!0,class:!0});var je=i(P);J=F(je,"path",{d:!0,color:!0}),i(J).forEach(r),je.forEach(r),Ve.forEach(r),le.forEach(r),ce=k(Ae),L=p(Ae,"SPAN",{class:!0});var Se=i(L);ie=w(Se,"\xA9"),te=w(Se,l[0]),ue=w(Se," built and designed with \u2665\uFE0F by me."),Se.forEach(r),Ae.forEach(r),Q=k(fe),U=p(fe,"DIV",{class:!0});var Re=i(U);x=p(Re,"DIV",{class:!0});var Z=i(x);V=p(Z,"A",{href:!0,class:!0,"aria-current":!0});var Fe=i(V);O=w(Fe,"writing"),Fe.forEach(r),N=k(Z),z=p(Z,"A",{href:!0,class:!0,"aria-current":!0});var He=i(z);I=w(He,"about"),He.forEach(r),se=k(Z),G=p(Z,"A",{href:!0,class:!0,"aria-current":!0});var Oe=i(G);he=w(Oe,"work"),Oe.forEach(r),ve=k(Z),j=p(Z,"A",{href:!0,class:!0,"aria-current":!0});var Ge=i(j);ge=w(Ge,"imprint"),Ge.forEach(r),pe=k(Z),X=p(Z,"A",{href:!0,class:!0});var Ke=i(X);ae=w(Ke,"ds."),Ke.forEach(r),Z.forEach(r),Re.forEach(r),fe.forEach(r),de.forEach(r),this.h()},h(){e(y,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),e(d,"role","img"),e(d,"viewBox","0 0 24 24"),e(d,"xmlns","http://www.w3.org/2000/svg"),e(d,"class","svelte-1afqnls"),e(o,"href","https://github.com/dennissmuda"),e(o,"target","_blank"),e(o,"class","svelte-1afqnls"),e(S,"d","M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"),e(A,"role","img"),e(A,"viewBox","0 0 24 24"),e(A,"xmlns","http://www.w3.org/2000/svg"),e(A,"class","svelte-1afqnls"),e(u,"href","mailto:smuda.dennis@gmail.com"),e(u,"class","svelte-1afqnls"),e(H,"d","M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"),e(M,"role","img"),e(M,"viewBox","0 0 24 24"),e(M,"xmlns","http://www.w3.org/2000/svg"),e(M,"class","svelte-1afqnls"),e(D,"href","https://discordapp.com/users/dennis_butz#6737"),e(D,"class","svelte-1afqnls"),e(J,"d","M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08C57.534 94.073 72.867 94.073 76.7 94.073zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z"),e(J,"color","currentColor"),e(P,"xmlns","http://www.w3.org/2000/svg"),e(P,"height","235.452"),e(P,"width","261.728"),e(P,"viewBox","0 0 245.371 220.736"),e(P,"class","svelte-1afqnls"),e(T,"href","https://dennissmuda.itch.io/"),e(T,"target","_blank"),e(T,"rel","noreferrer"),e(T,"class","svelte-1afqnls"),e(a,"class","flex flex-row w-full mb-4"),e(L,"class","text-xs opacity-50"),e(n,"class","links col-span-3 svelte-1afqnls"),e(n,"id","social-links"),e(V,"href","/blog"),e(V,"class","button svelte-1afqnls"),e(V,"aria-current",void 0),e(z,"href","/about"),e(z,"class","button svelte-1afqnls"),e(z,"aria-current",void 0),e(G,"href","/work"),e(G,"class","button svelte-1afqnls"),e(G,"aria-current",void 0),e(j,"href","/imprint"),e(j,"class","button svelte-1afqnls"),e(j,"aria-current",void 0),e(X,"href","./"),e(X,"class","brand text-black dark:text-white -mb-2 svelte-1afqnls"),e(x,"class","internal w-full svelte-1afqnls"),e(U,"class","w-full mt-0 flex justify-end flex-wrap items-baseline "),e(c,"class","p-8 grid grid-cols-4 items-end"),e(s,"class","footer transition-opacity duration-700 svelte-1afqnls")},m(re,de){W(re,s,de),t(s,c),t(c,n),t(n,a),t(a,o),t(o,f),t(o,d),t(d,h),t(h,m),t(d,y),t(a,_),t(a,u),t(u,b),t(u,A),t(A,q),t(q,v),t(A,S),t(a,B),t(a,D),t(D,K),t(D,M),t(M,Y),t(Y,ne),t(M,H),t(a,oe),t(a,T),t(T,C),t(T,P),t(P,J),t(n,ce),t(n,L),t(L,ie),t(L,te),t(L,ue),t(c,Q),t(c,U),t(U,x),t(x,V),t(V,O),t(x,N),t(x,z),t(z,I),t(x,se),t(x,G),t(G,he),t(x,ve),t(x,j),t(j,ge),t(x,pe),t(x,X),t(X,ae)},p:ee,i:ee,o:ee,d(re){re&&r(s)}}}function mt(l){return[new Date().getFullYear()]}class bt extends be{constructor(s){super(),Ee(this,s,mt,_t,we,{})}}function Et(l){let s,c,n,a,o,f,d,h,m,y,_,u,b;a=new lt({props:{size:l[0],coords:l[1]}}),d=new pt({});const A=l[5].default,q=Xe(A,l,l[4],null);return y=new bt({}),{c(){s=g("link"),c=$(),n=g("div"),ye(a.$$.fragment),o=$(),f=g("main"),ye(d.$$.fragment),h=$(),q&&q.c(),m=$(),ye(y.$$.fragment),this.h()},l(v){const S=Ze('[data-svelte="svelte-gqax24"]',document.head);s=p(S,"LINK",{href:!0,rel:!0}),S.forEach(r),c=k(v),n=p(v,"DIV",{class:!0});var B=i(n);$e(a.$$.fragment,B),o=k(B),f=p(B,"MAIN",{class:!0});var D=i(f);$e(d.$$.fragment,D),h=k(D),q&&q.l(D),m=k(D),$e(y.$$.fragment,D),D.forEach(r),B.forEach(r),this.h()},h(){e(s,"href","https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"),e(s,"rel","stylesheet"),e(f,"class","relative"),e(n,"class","app-wrapper")},m(v,S){t(document.head,s),W(v,c,S),W(v,n,S),ke(a,n,null),t(n,o),t(n,f),ke(d,f,null),t(f,h),q&&q.m(f,null),t(f,m),ke(y,f,null),_=!0,u||(b=[Ie(n,"mousemove",l[6]),Ie(n,"mousedown",l[7]),Ie(n,"mouseup",l[8])],u=!0)},p(v,[S]){const B={};S&1&&(B.size=v[0]),S&2&&(B.coords=v[1]),a.$set(B),q&&q.p&&(!_||S&16)&&We(q,A,v,v[4],_?tt(A,v[4],S,null):et(v[4]),null)},i(v){_||(_e(a.$$.fragment,v),_e(d.$$.fragment,v),_e(q,v),_e(y.$$.fragment,v),_=!0)},o(v){me(a.$$.fragment,v),me(d.$$.fragment,v),me(q,v),me(y.$$.fragment,v),_=!1},d(v){r(s),v&&r(c),v&&r(n),qe(a),qe(d),q&&q.d(v),qe(y),u=!1,st(b)}}}function wt(l,s,c){let n,a,{$$slots:o={},$$scope:f}=s,d=Je({x:50,y:50},{stiffness:.12,damping:.225});Ce(l,d,u=>c(1,a=u));let h=Je(10,{stiffness:.15});Ce(l,h,u=>c(0,n=u));const m=u=>{d.set({x:u.clientX,y:u.clientY});const b=u.target.tagName.toLowerCase();b==="button"||b==="a"?h.set(25):h.set(10)},y=()=>h.set(50),_=()=>h.set(10);return l.$$set=u=>{"$$scope"in u&&c(4,f=u.$$scope)},[n,a,d,h,f,o,m,y,_]}class qt extends be{constructor(s){super(),Ee(this,s,wt,Et,we,{})}}export{qt as default};