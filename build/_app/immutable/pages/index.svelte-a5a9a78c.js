import{S as mt,i as gt,s as bt,F as B,G as J,a as f,d as a,b as e,g as Z,Y as W,Z as F,E as tt,H as s,e as E,t as z,c as y,h as A,_ as Ct,$ as It,J as ut,q as O,T as Pt,M as At,v as Nt,w as dt,k as I,x as pt,m as P,y as vt,o as rt,B as _t,O as Gt,p as Tt,X as Bt,n as Jt}from"../chunks/index-2dbaace3.js";import{s as St}from"../chunks/index-49e9c59f.js";import{t as xt,P as Rt}from"../chunks/index-ddbad8de.js";import"../chunks/index-87c96118.js";function Wt(m){const t=m-1;return t*t*t+1}function X(m,{delay:t=0,duration:l=400,easing:n=Wt,x:_=0,y:h=0,opacity:b=0}={}){const p=getComputedStyle(m),r=+p.opacity,i=p.transform==="none"?"":p.transform,u=r*(1-b);return{delay:t,duration:l,easing:n,css:(o,c)=>`
			transform: ${i} translate(${(1-o)*_}px, ${(1-o)*h}px);
			opacity: ${r-u*c}`}}function Mt(m){let t,l,n,_,h,b,p,r,i,u,o,c;return{c(){t=B("path"),n=B("path"),h=B("path"),p=B("path"),i=B("path"),o=B("path"),this.h()},l(C){t=J(C,"path",{d:!0,class:!0}),f(t).forEach(a),n=J(C,"path",{d:!0,class:!0}),f(n).forEach(a),h=J(C,"path",{d:!0,class:!0}),f(h).forEach(a),p=J(C,"path",{d:!0,class:!0}),f(p).forEach(a),i=J(C,"path",{d:!0,class:!0}),f(i).forEach(a),o=J(C,"path",{d:!0,class:!0}),f(o).forEach(a),this.h()},h(){e(t,"d",`M14.36 68.4C14.36 61.52 15.64 55.48 18.2 50.28C20.84 45.08 24.4
          41.08 28.88 38.28C33.36 35.48 38.36 34.08 43.88 34.08C48.28 34.08
          52.28 35 55.88 36.84C59.56 38.68 62.44 41.16 64.52
          44.28V13.2H85.04V102H64.52V92.4C62.6 95.6 59.84 98.16 56.24
          100.08C52.72 102 48.6 102.96 43.88 102.96C38.36 102.96 33.36 101.56
          28.88 98.76C24.4 95.88 20.84 91.84 18.2 86.64C15.64 81.36 14.36 75.28
          14.36 68.4ZM64.52 68.52C64.52 63.4 63.08 59.36 60.2 56.4C57.4 53.44
          53.96 51.96 49.88 51.96C45.8 51.96 42.32 53.44 39.44 56.4C36.64 59.28
          35.24 63.28 35.24 68.4C35.24 73.52 36.64 77.6 39.44 80.64C42.32 83.6
          45.8 85.08 49.88 85.08C53.96 85.08 57.4 83.6 60.2 80.64C63.08 77.68
          64.52 73.64 64.52 68.52Z`),e(t,"class","svelte-1avdj74"),e(n,"d",`M154.56 67.44C154.56 69.36 154.44 71.36 154.2 73.44H107.76C108.08
          77.6 109.4 80.8 111.72 83.04C114.12 85.2 117.04 86.28 120.48
          86.28C125.6 86.28 129.16 84.12 131.16 79.8H153C151.88 84.2 149.84
          88.16 146.88 91.68C144 95.2 140.36 97.96 135.96 99.96C131.56 101.96
          126.64 102.96 121.2 102.96C114.64 102.96 108.8 101.56 103.68
          98.76C98.56 95.96 94.56 91.96 91.68 86.76C88.8 81.56 87.36 75.48 87.36
          68.52C87.36 61.56 88.76 55.48 91.56 50.28C94.44 45.08 98.44 41.08
          103.56 38.28C108.68 35.48 114.56 34.08 121.2 34.08C127.68 34.08 133.44
          35.44 138.48 38.16C143.52 40.88 147.44 44.76 150.24 49.8C153.12 54.84
          154.56 60.72 154.56 67.44ZM133.56 62.04C133.56 58.52 132.36 55.72
          129.96 53.64C127.56 51.56 124.56 50.52 120.96 50.52C117.52 50.52 114.6
          51.52 112.2 53.52C109.88 55.52 108.44 58.36 107.88 62.04H133.56Z`),e(n,"class","svelte-1avdj74"),e(h,"d",`M197.24 34.32C205.08 34.32 211.32 36.88 215.96 42C220.68 47.04
          223.04 54 223.04 62.88V102H202.64V65.64C202.64 61.16 201.48 57.68
          199.16 55.2C196.84 52.72 193.72 51.48 189.8 51.48C185.88 51.48 182.76
          52.72 180.44 55.2C178.12 57.68 176.96 61.16 176.96
          65.64V102H156.44V35.04H176.96V43.92C179.04 40.96 181.84 38.64 185.36
          36.96C188.88 35.2 192.84 34.32 197.24 34.32Z`),e(h,"class","svelte-1avdj74"),e(p,"d",`M267.24 34.32C275.08 34.32 281.32 36.88 285.96 42C290.68 47.04
          293.04 54 293.04 62.88V102H272.64V65.64C272.64 61.16 271.48 57.68
          269.16 55.2C266.84 52.72 263.72 51.48 259.8 51.48C255.88 51.48 252.76
          52.72 250.44 55.2C248.12 57.68 246.96 61.16 246.96
          65.64V102H226.44V35.04H246.96V43.92C249.04 40.96 251.84 38.64 255.36
          36.96C258.88 35.2 262.84 34.32 267.24 34.32Z`),e(p,"class","svelte-1avdj74"),e(i,"d","M317.96 35.04V102H297.44V35.04H317.96Z"),e(i,"class","svelte-1avdj74"),e(o,"d",`M349.68 102.96C343.84 102.96 338.64 101.96 334.08 99.96C329.52
          97.96 325.92 95.24 323.28 91.8C320.64 88.28 319.16 84.36 318.84
          80.04H339.12C339.36 82.36 340.44 84.24 342.36 85.68C344.28 87.12
          346.64 87.84 349.44 87.84C352 87.84 353.96 87.36 355.32 86.4C356.76
          85.36 357.48 84.04 357.48 82.44C357.48 80.52 356.48 79.12 354.48
          78.24C352.48 77.28 349.24 76.24 344.76 75.12C339.96 74 335.96 72.84
          332.76 71.64C329.56 70.36 326.8 68.4 324.48 65.76C322.16 63.04 321
          59.4 321 54.84C321 51 322.04 47.52 324.12 44.4C326.28 41.2 329.4 38.68
          333.48 36.84C337.64 35 342.56 34.08 348.24 34.08C356.64 34.08 363.24
          36.16 368.04 40.32C372.92 44.48 375.72 50 376.44 56.88H357.48C357.16
          54.56 356.12 52.72 354.36 51.36C352.68 50 350.44 49.32 347.64
          49.32C345.24 49.32 343.4 49.8 342.12 50.76C340.84 51.64 340.2 52.88
          340.2 54.48C340.2 56.4 341.2 57.84 343.2 58.8C345.28 59.76 348.48
          60.72 352.8 61.68C357.76 62.96 361.8 64.24 364.92 65.52C368.04 66.72
          370.76 68.72 373.08 71.52C375.48 74.24 376.72 77.92 376.8 82.56C376.8
          86.48 375.68 90 373.44 93.12C371.28 96.16 368.12 98.56 363.96
          100.32C359.88 102.08 355.12 102.96 349.68 102.96Z`),e(o,"class","svelte-1avdj74")},m(C,V){Z(C,t,V),Z(C,n,V),Z(C,h,V),Z(C,p,V),Z(C,i,V),Z(C,o,V)},i(C){l||W(()=>{l=F(t,X,{y:-20,delay:0}),l.start()}),_||W(()=>{_=F(n,X,{y:-20,delay:50}),_.start()}),b||W(()=>{b=F(h,X,{y:-20,delay:100}),b.start()}),r||W(()=>{r=F(p,X,{y:-20,delay:200}),r.start()}),u||W(()=>{u=F(i,X,{y:-20,delay:300}),u.start()}),c||W(()=>{c=F(o,X,{y:-20,delay:400}),c.start()})},o:tt,d(C){C&&a(t),C&&a(n),C&&a(h),C&&a(p),C&&a(i),C&&a(o)}}}function jt(m){let t,l,n,_,h,b,p,r,i,u,o,c,C,V,M;return{c(){t=B("g"),l=B("path"),_=B("path"),b=B("path"),r=B("path"),u=B("path"),c=B("circle"),this.h()},l(k){t=J(k,"g",{class:!0});var w=f(t);l=J(w,"path",{d:!0,class:!0}),f(l).forEach(a),_=J(w,"path",{d:!0,class:!0}),f(_).forEach(a),b=J(w,"path",{d:!0,class:!0}),f(b).forEach(a),r=J(w,"path",{d:!0,class:!0}),f(r).forEach(a),u=J(w,"path",{d:!0,class:!0}),f(u).forEach(a),w.forEach(a),c=J(k,"circle",{cx:!0,cy:!0,r:!0,class:!0}),f(c).forEach(a),this.h()},h(){e(l,"d",`M34.68 154.96C28.84 154.96 23.64 153.96 19.08 151.96C14.52 149.96
          10.92 147.24 8.28 143.8C5.64 140.28 4.16 136.36 3.84
          132.04H24.12C24.36 134.36 25.44 136.24 27.36 137.68C29.28 139.12 31.64
          139.84 34.44 139.84C37 139.84 38.96 139.36 40.32 138.4C41.76 137.36
          42.48 136.04 42.48 134.44C42.48 132.52 41.48 131.12 39.48 130.24C37.48
          129.28 34.24 128.24 29.76 127.12C24.96 126 20.96 124.84 17.76
          123.64C14.56 122.36 11.8 120.4 9.48 117.76C7.16 115.04 6 111.4 6
          106.84C6 103 7.04 99.52 9.12 96.4C11.28 93.2 14.4 90.68 18.48
          88.84C22.64 87 27.56 86.08 33.24 86.08C41.64 86.08 48.24 88.16 53.04
          92.32C57.92 96.48 60.72 102 61.44 108.88H42.48C42.16 106.56 41.12
          104.72 39.36 103.36C37.68 102 35.44 101.32 32.64 101.32C30.24 101.32
          28.4 101.8 27.12 102.76C25.84 103.64 25.2 104.88 25.2 106.48C25.2
          108.4 26.2 109.84 28.2 110.8C30.28 111.76 33.48 112.72 37.8
          113.68C42.76 114.96 46.8 116.24 49.92 117.52C53.04 118.72 55.76 120.72
          58.08 123.52C60.48 126.24 61.72 129.92 61.8 134.56C61.8 138.48 60.68
          142 58.44 145.12C56.28 148.16 53.12 150.56 48.96 152.32C44.88 154.08
          40.12 154.96 34.68 154.96Z`),e(l,"class","svelte-1avdj74"),e(_,"d",`M149.88 86.32C158.2 86.32 164.8 88.84 169.68 93.88C174.64 98.92
          177.12 105.92 177.12 114.88V154H156.72V117.64C156.72 113.32 155.56 110
          153.24 107.68C151 105.28 147.88 104.08 143.88 104.08C139.88 104.08
          136.72 105.28 134.4 107.68C132.16 110 131.04 113.32 131.04
          117.64V154H110.64V117.64C110.64 113.32 109.48 110 107.16 107.68C104.92
          105.28 101.8 104.08 97.8 104.08C93.8 104.08 90.64 105.28 88.32
          107.68C86.08 110 84.96 113.32 84.96
          117.64V154H64.44V87.04H84.96V95.44C87.04 92.64 89.76 90.44 93.12
          88.84C96.48 87.16 100.28 86.32 104.52 86.32C109.56 86.32 114.04 87.4
          117.96 89.56C121.96 91.72 125.08 94.8 127.32 98.8C129.64 95.12 132.8
          92.12 136.8 89.8C140.8 87.48 145.16 86.32 149.88 86.32Z`),e(_,"class","svelte-1avdj74"),e(b,"d",`M246.96 87.04V154H226.44V144.88C224.36 147.84 221.52 150.24 217.92
          152.08C214.4 153.84 210.48 154.72 206.16 154.72C201.04 154.72 196.52
          153.6 192.6 151.36C188.68 149.04 185.64 145.72 183.48 141.4C181.32
          137.08 180.24 132 180.24 126.16V87.04H200.64V123.4C200.64 127.88 201.8
          131.36 204.12 133.84C206.44 136.32 209.56 137.56 213.48 137.56C217.48
          137.56 220.64 136.32 222.96 133.84C225.28 131.36 226.44 127.88 226.44
          123.4V87.04H246.96Z`),e(b,"class","svelte-1avdj74"),e(r,"d",`M247.36 120.4C247.36 113.52 248.64 107.48 251.2 102.28C253.84 97.08
          257.4 93.08 261.88 90.28C266.36 87.48 271.36 86.08 276.88 86.08C281.28
          86.08 285.28 87 288.88 88.84C292.56 90.68 295.44 93.16 297.52
          96.28V65.2H318.04V154H297.52V144.4C295.6 147.6 292.84 150.16 289.24
          152.08C285.72 154 281.6 154.96 276.88 154.96C271.36 154.96 266.36
          153.56 261.88 150.76C257.4 147.88 253.84 143.84 251.2 138.64C248.64
          133.36 247.36 127.28 247.36 120.4ZM297.52 120.52C297.52 115.4 296.08
          111.36 293.2 108.4C290.4 105.44 286.96 103.96 282.88 103.96C278.8
          103.96 275.32 105.44 272.44 108.4C269.64 111.28 268.24 115.28 268.24
          120.4C268.24 125.52 269.64 129.6 272.44 132.64C275.32 135.6 278.8
          137.08 282.88 137.08C286.96 137.08 290.4 135.6 293.2 132.64C296.08
          129.68 297.52 125.64 297.52 120.52Z`),e(r,"class","svelte-1avdj74"),e(u,"d",`M318.36 120.4C318.36 113.52 319.64 107.48 322.2 102.28C324.84 97.08
          328.4 93.08 332.88 90.28C337.36 87.48 342.36 86.08 347.88 86.08C352.6
          86.08 356.72 87.04 360.24 88.96C363.84 90.88 366.6 93.4 368.52
          96.52V87.04H389.04V154H368.52V144.52C366.52 147.64 363.72 150.16
          360.12 152.08C356.6 154 352.48 154.96 347.76 154.96C342.32 154.96
          337.36 153.56 332.88 150.76C328.4 147.88 324.84 143.84 322.2
          138.64C319.64 133.36 318.36 127.28 318.36 120.4ZM368.52 120.52C368.52
          115.4 367.08 111.36 364.2 108.4C361.4 105.44 357.96 103.96 353.88
          103.96C349.8 103.96 346.32 105.44 343.44 108.4C340.64 111.28 339.24
          115.28 339.24 120.4C339.24 125.52 340.64 129.6 343.44 132.64C346.32
          135.6 349.8 137.08 353.88 137.08C357.96 137.08 361.4 135.6 364.2
          132.64C367.08 129.68 368.52 125.64 368.52 120.52Z`),e(u,"class","svelte-1avdj74"),e(t,"class","lastname color-change svelte-1avdj74"),e(c,"cx",C=m[5].x),e(c,"cy",V=m[5].y),e(c,"r",m[6]),e(c,"class","dot svelte-1avdj74")},m(k,w){Z(k,t,w),s(t,l),s(t,_),s(t,b),s(t,r),s(t,u),Z(k,c,w)},p(k,w){w&32&&C!==(C=k[5].x)&&e(c,"cx",C),w&32&&V!==(V=k[5].y)&&e(c,"cy",V),w&64&&e(c,"r",k[6])},i(k){n||W(()=>{n=F(l,X,{y:20,delay:500}),n.start()}),h||W(()=>{h=F(_,X,{y:20,delay:400}),h.start()}),p||W(()=>{p=F(b,X,{y:20,delay:300}),p.start()}),i||W(()=>{i=F(r,X,{y:20,delay:200}),i.start()}),o||W(()=>{o=F(u,X,{y:20,delay:100}),o.start()}),M||W(()=>{M=F(c,X,{y:0,delay:250}),M.start()})},o:tt,d(k){k&&a(t),k&&a(c)}}}function Ot(m){let t,l,n,_,h,b,p,r,i=m[3]&&Mt(),u=m[3]&&jt(m);return{c(){t=E("div"),l=B("svg"),n=B("title"),_=z("Dennis Smuda"),h=B("g"),i&&i.c(),u&&u.c(),this.h()},l(o){t=y(o,"DIV",{class:!0});var c=f(t);l=J(c,"svg",{viewBox:!0,fill:!0,xmlns:!0,class:!0});var C=f(l);n=J(C,"title",{});var V=f(n);_=A(V,"Dennis Smuda"),V.forEach(a),h=J(C,"g",{class:!0});var M=f(h);i&&i.l(M),M.forEach(a),u&&u.l(C),C.forEach(a),c.forEach(a),this.h()},h(){e(h,"class","firstname svelte-1avdj74"),e(l,"viewBox","0 0 397 172"),e(l,"fill","none"),e(l,"xmlns","http://www.w3.org/2000/svg"),e(l,"class","svelte-1avdj74"),Ct(l,"expanded",m[2]===!0),Ct(l,"interactive",m[4]===!0),e(t,"class","wrapper svelte-1avdj74"),W(()=>m[15].call(t))},m(o,c){Z(o,t,c),s(t,l),s(l,n),s(n,_),s(l,h),i&&i.m(h,null),u&&u.m(l,null),b=It(t,m[15].bind(t)),p||(r=[ut(l,"click",m[10]),ut(l,"mousemove",m[11]),ut(l,"mouseleave",m[12]),ut(l,"mousedown",m[13]),ut(l,"mouseup",m[14])],p=!0)},p(o,[c]){o[3]?i?c&8&&O(i,1):(i=Mt(),i.c(),O(i,1),i.m(h,null)):i&&(i.d(1),i=null),o[3]?u?(u.p(o,c),c&8&&O(u,1)):(u=jt(o),u.c(),O(u,1),u.m(l,null)):u&&(u.d(1),u=null),c&4&&Ct(l,"expanded",o[2]===!0),c&16&&Ct(l,"interactive",o[4]===!0)},i(o){O(i),O(u)},o:tt,d(o){o&&a(t),i&&i.d(),u&&u.d(),b(),p=!1,Pt(r)}}}const qt=397;function Ft(m,t,l){let n,_,h,b,p=!1,r=!1,i=!1,u=St({x:-200,y:-270},{stiffness:.1,damping:.25});At(m,u,v=>l(5,n=v));let o=St(13);At(m,o,v=>l(6,_=v)),Nt(()=>{l(3,r=!0),setTimeout(()=>{u.set({x:308,y:17}),o.set(13),l(4,i=!0)},700)});function c(v){const G=h/qt;u.set({x:v.offsetX/G,y:v.offsetY/G})}const C=()=>l(2,p=!p),V=v=>c(v),M=v=>{u.set({x:308,y:17}),o.set(12)},k=()=>{o.set(64)},w=()=>o.set(32);function D(){h=this.clientWidth,b=this.clientHeight,l(0,h),l(1,b)}return[h,b,p,r,i,n,_,u,o,c,C,V,M,k,w,D]}class Xt extends mt{constructor(t){super(),gt(this,t,Ft,Ot,bt,{})}}function Yt(m){let t,l,n,_,h,b,p,r,i,u,o,c,C,V,M,k,w,D,v,G,d,$,g,j,K,q,N,Y,Q,R;return h=new Xt({}),{c(){t=E("section"),l=E("div"),n=E("div"),_=E("div"),dt(h.$$.fragment),b=I(),p=E("div"),r=E("p"),i=E("span"),u=z("web developer"),o=I(),c=E("span"),C=z("based in"),V=I(),M=E("span"),k=z("germany \u{1F1E9}\u{1F1EA}"),w=I(),D=E("a"),v=z("making \u{1F468}\u{1F3FB}\u200D\u{1F4BB}"),G=z(` things and
					`),d=E("a"),$=z("writing \u270F\uFE0F"),g=z(` about stuff. feel free to
					`),j=E("a"),K=z("get in touch \u{1F4EB}"),q=z(`
					, or get to
					`),N=E("a"),Y=z("know me \u{1F44B}"),Q=z(`
					first.`),this.h()},l(T){t=y(T,"SECTION",{class:!0});var U=f(t);l=y(U,"DIV",{class:!0});var st=f(l);n=y(st,"DIV",{class:!0});var L=f(n);_=y(L,"DIV",{class:!0});var at=f(_);pt(h.$$.fragment,at),at.forEach(a),b=P(L),p=y(L,"DIV",{class:!0});var et=f(p);r=y(et,"P",{class:!0});var x=f(r);i=y(x,"SPAN",{class:!0});var lt=f(i);u=A(lt,"web developer"),lt.forEach(a),o=P(x),c=y(x,"SPAN",{});var H=f(c);C=A(H,"based in"),H.forEach(a),V=P(x),M=y(x,"SPAN",{class:!0});var S=f(M);k=A(S,"germany \u{1F1E9}\u{1F1EA}"),S.forEach(a),w=P(x),D=y(x,"A",{href:!0,class:!0});var nt=f(D);v=A(nt,"making \u{1F468}\u{1F3FB}\u200D\u{1F4BB}"),nt.forEach(a),G=A(x,` things and
					`),d=y(x,"A",{href:!0,class:!0});var ot=f(d);$=A(ot,"writing \u270F\uFE0F"),ot.forEach(a),g=A(x,` about stuff. feel free to
					`),j=y(x,"A",{class:!0,href:!0});var ct=f(j);K=A(ct,"get in touch \u{1F4EB}"),ct.forEach(a),q=A(x,`
					, or get to
					`),N=y(x,"A",{class:!0,href:!0});var it=f(N);Y=A(it,"know me \u{1F44B}"),it.forEach(a),Q=A(x,`
					first.`),x.forEach(a),et.forEach(a),L.forEach(a),st.forEach(a),U.forEach(a),this.h()},h(){e(_,"class","title svelte-1vzz95g"),e(i,"class","rainbow font-medium whitespace-nowrap"),e(M,"class","german-color-change"),e(D,"href","/projects"),e(D,"class","svelte-1vzz95g"),e(d,"href","/blog"),e(d,"class","svelte-1vzz95g"),e(j,"class","whitespace-nowrap svelte-1vzz95g"),e(j,"href","mailto:smuda.dennis@gmail.com"),e(N,"class","whitespace-nowrap svelte-1vzz95g"),e(N,"href","/about"),e(r,"class","intro__paragraph svelte-1vzz95g"),e(p,"class","intro svelte-1vzz95g"),e(n,"class","container main-padding svelte-1vzz95g"),e(l,"class","hero -rotate-3 svelte-1vzz95g"),e(t,"class","px-8 pt-16 pb-16")},m(T,U){Z(T,t,U),s(t,l),s(l,n),s(n,_),vt(h,_,null),s(n,b),s(n,p),s(p,r),s(r,i),s(i,u),s(r,o),s(r,c),s(c,C),s(r,V),s(r,M),s(M,k),s(r,w),s(r,D),s(D,v),s(r,G),s(r,d),s(d,$),s(r,g),s(r,j),s(j,K),s(r,q),s(r,N),s(N,Y),s(r,Q),R=!0},p:tt,i(T){R||(O(h.$$.fragment,T),R=!0)},o(T){rt(h.$$.fragment,T),R=!1},d(T){T&&a(t),_t(h)}}}function Lt(m){return[]}class Kt extends mt{constructor(t){super(),gt(this,t,Lt,Yt,bt,{})}}function Qt(m){let t,l,n,_,h,b,p,r,i,u,o,c,C,V,M,k,w,D,v,G,d,$,g,j,K,q,N,Y,Q,R,T,U,st,L,at,et,x,lt;return{c(){t=E("div"),l=E("a"),n=z("Javascript"),_=I(),h=E("a"),b=z("Vue"),p=I(),r=E("a"),i=z("Svelte"),u=I(),o=E("a"),c=z("CSS"),C=I(),V=E("a"),M=z("Godot"),k=I(),w=E("a"),D=z("Rust"),v=I(),G=E("h2"),d=z("latest posts \u270F\uFE0F"),$=I(),g=E("a"),j=E("span"),K=z("Mar. 20, 2022"),q=I(),N=E("h3"),Y=z("Get started with Rust & Bevy \u{1F3AE}"),Q=I(),R=E("a"),T=E("span"),U=z("Jul. 5, 2021"),st=I(),L=E("h3"),at=z("Serverless authentication \u{1F511}"),et=I(),x=E("a"),lt=z("check out all posts \u{1F4D6}"),this.h()},l(H){t=y(H,"DIV",{class:!0});var S=f(t);l=y(S,"A",{href:!0,class:!0});var nt=f(l);n=A(nt,"Javascript"),nt.forEach(a),_=P(S),h=y(S,"A",{href:!0,class:!0});var ot=f(h);b=A(ot,"Vue"),ot.forEach(a),p=P(S),r=y(S,"A",{href:!0,class:!0});var ct=f(r);i=A(ct,"Svelte"),ct.forEach(a),u=P(S),o=y(S,"A",{href:!0,class:!0});var it=f(o);c=A(it,"CSS"),it.forEach(a),C=P(S),V=y(S,"A",{href:!0,class:!0});var Et=f(V);M=A(Et,"Godot"),Et.forEach(a),k=P(S),w=y(S,"A",{href:!0,class:!0});var yt=f(w);D=A(yt,"Rust"),yt.forEach(a),S.forEach(a),v=P(H),G=y(H,"H2",{class:!0});var Vt=f(G);d=A(Vt,"latest posts \u270F\uFE0F"),Vt.forEach(a),$=P(H),g=y(H,"A",{class:!0,href:!0});var ft=f(g);j=y(ft,"SPAN",{class:!0});var wt=f(j);K=A(wt,"Mar. 20, 2022"),wt.forEach(a),q=P(ft),N=y(ft,"H3",{class:!0});var Ht=f(N);Y=A(Ht,"Get started with Rust & Bevy \u{1F3AE}"),Ht.forEach(a),ft.forEach(a),Q=P(H),R=y(H,"A",{class:!0,href:!0});var ht=f(R);T=y(ht,"SPAN",{class:!0});var kt=f(T);U=A(kt,"Jul. 5, 2021"),kt.forEach(a),st=P(ht),L=y(ht,"H3",{class:!0});var $t=f(L);at=A($t,"Serverless authentication \u{1F511}"),$t.forEach(a),ht.forEach(a),et=P(H),x=y(H,"A",{class:!0,href:!0});var zt=f(x);lt=A(zt,"check out all posts \u{1F4D6}"),zt.forEach(a),this.h()},h(){e(l,"href","blog"),e(l,"class","button tag-button tag-button--vue"),e(h,"href","/blog"),e(h,"class","button tag-button tag-button--vue"),e(r,"href","/blog"),e(r,"class","button tag-button tag-button--vue"),e(o,"href","/blog"),e(o,"class","button tag-button tag-button--css"),e(V,"href","/blog"),e(V,"class","button tag-button tag-button--vue"),e(w,"href","/blog"),e(w,"class","button tag-button tag-button--vue"),e(t,"class","flex flex-wrap mt-4 gap-4"),e(G,"class","rotated md:pt-24"),e(j,"class","latest-post__date svelte-h00kap"),e(N,"class","latest-post__title svelte-h00kap"),e(g,"class","latest-post mt-8 svelte-h00kap"),e(g,"href","/blog/bevy-run-get-started"),e(T,"class","latest-post__date svelte-h00kap"),e(L,"class","latest-post__title svelte-h00kap"),e(R,"class","latest-post mt-8 svelte-h00kap"),e(R,"href","/blog/serverless-auth-tutorial"),e(x,"class","marker-link mt-4"),e(x,"href","/blog")},m(H,S){Z(H,t,S),s(t,l),s(l,n),s(t,_),s(t,h),s(h,b),s(t,p),s(t,r),s(r,i),s(t,u),s(t,o),s(o,c),s(t,C),s(t,V),s(V,M),s(t,k),s(t,w),s(w,D),Z(H,v,S),Z(H,G,S),s(G,d),Z(H,$,S),Z(H,g,S),s(g,j),s(j,K),s(g,q),s(g,N),s(N,Y),Z(H,Q,S),Z(H,R,S),s(R,T),s(T,U),s(R,st),s(R,L),s(L,at),Z(H,et,S),Z(H,x,S),s(x,lt)},p:tt,i:tt,o:tt,d(H){H&&a(t),H&&a(v),H&&a(G),H&&a($),H&&a(g),H&&a(Q),H&&a(R),H&&a(et),H&&a(x)}}}class Ut extends mt{constructor(t){super(),gt(this,t,null,Qt,bt,{})}}function Zt(m,t,l){const n=m.slice();return n[0]=t[l],n}function Dt(m){let t,l;return t=new Rt({props:{url:m[0].url,headline:m[0].headline,subline:m[0].subline,description:m[0].description}}),{c(){dt(t.$$.fragment)},l(n){pt(t.$$.fragment,n)},m(n,_){vt(t,n,_),l=!0},p:tt,i(n){l||(O(t.$$.fragment,n),l=!0)},o(n){rt(t.$$.fragment,n),l=!1},d(n){_t(t,n)}}}function te(m){let t,l,n,_,h,b,p,r,i,u,o,c,C,V,M,k,w;_=new Kt({});let D=xt,v=[];for(let d=0;d<D.length;d+=1)v[d]=Dt(Zt(m,D,d));const G=d=>rt(v[d],1,1,()=>{v[d]=null});return k=new Ut({}),{c(){t=E("meta"),l=E("meta"),n=I(),dt(_.$$.fragment),h=I(),b=E("section"),p=E("article"),r=E("h2"),i=z("latest work \u{1F3C1}"),u=I();for(let d=0;d<v.length;d+=1)v[d].c();o=I(),c=E("aside"),C=E("h2"),V=z("making things with \u{1F6E0}"),M=I(),dt(k.$$.fragment),this.h()},l(d){const $=Gt('[data-svelte="svelte-1fy2ekk"]',document.head);t=y($,"META",{name:!0,content:!0}),l=y($,"META",{name:!0,content:!0}),$.forEach(a),n=P(d),pt(_.$$.fragment,d),h=P(d),b=y(d,"SECTION",{class:!0});var g=f(b);p=y(g,"ARTICLE",{class:!0});var j=f(p);r=y(j,"H2",{class:!0});var K=f(r);i=A(K,"latest work \u{1F3C1}"),K.forEach(a),u=P(j);for(let Y=0;Y<v.length;Y+=1)v[Y].l(j);j.forEach(a),o=P(g),c=y(g,"ASIDE",{class:!0});var q=f(c);C=y(q,"H2",{class:!0});var N=f(C);V=A(N,"making things with \u{1F6E0}"),N.forEach(a),M=P(q),pt(k.$$.fragment,q),q.forEach(a),g.forEach(a),this.h()},h(){document.title="Dennis Smuda \u2013 Web-Developer based in Germany",e(t,"name","description"),e(t,"content",`Web Developer from Germany, with a frontend/design/ux focus. Also a
    musician and bike-rider.`),e(l,"name","keywords"),e(l,"content","Development, Web, Frontend, Javascript"),e(r,"class","rotated"),e(p,"class","ds-prose col-span-7 md:mt-20"),e(C,"class","rotated"),e(c,"class","ds-prose col-span-5 -mt-12"),e(b,"class","flex flex-col-reverse max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl")},m(d,$){s(document.head,t),s(document.head,l),Z(d,n,$),vt(_,d,$),Z(d,h,$),Z(d,b,$),s(b,p),s(p,r),s(r,i),s(p,u);for(let g=0;g<v.length;g+=1)v[g].m(p,null);s(b,o),s(b,c),s(c,C),s(C,V),s(c,M),vt(k,c,null),w=!0},p(d,[$]){if($&0){D=xt;let g;for(g=0;g<D.length;g+=1){const j=Zt(d,D,g);v[g]?(v[g].p(j,$),O(v[g],1)):(v[g]=Dt(j),v[g].c(),O(v[g],1),v[g].m(p,null))}for(Jt(),g=D.length;g<v.length;g+=1)G(g);Tt()}},i(d){if(!w){O(_.$$.fragment,d);for(let $=0;$<D.length;$+=1)O(v[$]);O(k.$$.fragment,d),w=!0}},o(d){rt(_.$$.fragment,d),v=v.filter(Boolean);for(let $=0;$<v.length;$+=1)rt(v[$]);rt(k.$$.fragment,d),w=!1},d(d){a(t),a(l),d&&a(n),_t(_,d),d&&a(h),d&&a(b),Bt(v,d),_t(k)}}}class re extends mt{constructor(t){super(),gt(this,t,null,te,bt,{})}}export{re as default};
