import{S as me,i as be,s as ke,k as f,q as T,a as N,l as u,m as _,r as R,h as i,c as S,n as I,p as ie,b as K,E as a,J as pe,u as L,B as he,K as fe}from"../../chunks/index-930291f4.js";function ue(r,l,o){const s=r.slice();return s[7]=l[o],s}function _e(r,l,o){const s=r.slice();return s[10]=l[o],s[11]=l,s[12]=o,s}function de(r){let l,o,s=r[10].name+"",n,h,d,g=r[10].cost+"",k,P,c,D,A;function y(){return r[6](r[10],r[11],r[12])}return{c(){l=f("button"),o=f("span"),n=T(s),h=N(),d=f("span"),k=T(g),P=N(),this.h()},l(m){l=u(m,"BUTTON",{class:!0,id:!0});var b=_(l);o=u(b,"SPAN",{});var H=_(o);n=R(H,s),H.forEach(i),h=S(b),d=u(b,"SPAN",{});var W=_(d);k=R(W,g),W.forEach(i),P=S(b),b.forEach(i),this.h()},h(){I(l,"class","upgrade svelte-1ud4bb2"),I(l,"id",c=r[10].name)},m(m,b){K(m,l,b),a(l,o),a(o,n),a(l,h),a(l,d),a(d,k),a(l,P),D||(A=pe(l,"click",y),D=!0)},p(m,b){r=m,b&16&&s!==(s=r[10].name+"")&&L(n,s),b&16&&g!==(g=r[10].cost+"")&&L(k,g),b&16&&c!==(c=r[10].name)&&I(l,"id",c)},d(m){m&&i(l),D=!1,A()}}}function ve(r){let l,o=r[7]+"",s;return{c(){l=f("div"),s=T(o),this.h()},l(n){l=u(n,"DIV",{class:!0});var h=_(l);s=R(h,o),h.forEach(i),this.h()},h(){I(l,"class","worker svelte-1ud4bb2")},m(n,h){K(n,l,h),a(l,s)},p(n,h){h&4&&o!==(o=n[7]+"")&&L(s,o)},d(n){n&&i(l)}}}function Ee(r){let l,o,s,n,h,d,g,k,P,c,D,A,y,m,b,H,W,F,V,C,J,M,Q,X,Y,O,Z,$,x,te,q=r[4],v=[];for(let t=0;t<q.length;t+=1)v[t]=de(_e(r,q,t));let U=r[2],p=[];for(let t=0;t<U.length;t+=1)p[t]=ve(ue(r,U,t));return{c(){l=f("h1"),o=T("Pug Clicker"),s=N(),n=f("article"),h=f("header"),d=f("div");for(let t=0;t<v.length;t+=1)v[t].c();g=N(),k=f("div"),P=f("button"),c=f("div"),D=f("span"),A=T(r[0]),y=N(),m=f("span"),b=T("PPC: "),H=T(r[1]),W=N(),F=f("footer"),V=f("div"),C=f("div"),J=f("span"),M=T("Workers"),Q=N(),X=f("hr"),Y=N(),O=f("div");for(let t=0;t<p.length;t+=1)p[t].c();Z=N(),$=f("hr"),this.h()},l(t){l=u(t,"H1",{});var E=_(l);o=R(E,"Pug Clicker"),E.forEach(i),s=S(t),n=u(t,"ARTICLE",{});var e=_(n);h=u(e,"HEADER",{});var w=_(h);d=u(w,"DIV",{class:!0});var le=_(d);for(let B=0;B<v.length;B+=1)v[B].l(le);le.forEach(i),w.forEach(i),g=S(e),k=u(e,"DIV",{class:!0});var se=_(k);P=u(se,"BUTTON",{class:!0});var ae=_(P);c=u(ae,"DIV",{style:!0});var z=_(c);D=u(z,"SPAN",{class:!0});var re=_(D);A=R(re,r[0]),re.forEach(i),y=S(z),m=u(z,"SPAN",{class:!0});var ee=_(m);b=R(ee,"PPC: "),H=R(ee,r[1]),ee.forEach(i),z.forEach(i),ae.forEach(i),se.forEach(i),W=S(e),F=u(e,"FOOTER",{});var oe=_(F);V=u(oe,"DIV",{class:!0});var G=_(V);C=u(G,"DIV",{});var j=_(C);J=u(j,"SPAN",{});var ne=_(J);M=R(ne,"Workers"),ne.forEach(i),Q=S(j),X=u(j,"HR",{}),Y=S(j),O=u(j,"DIV",{class:!0});var ce=_(O);for(let B=0;B<p.length;B+=1)p[B].l(ce);ce.forEach(i),j.forEach(i),Z=S(G),$=u(G,"HR",{}),G.forEach(i),oe.forEach(i),e.forEach(i),this.h()},h(){I(d,"class","grid svelte-1ud4bb2"),I(D,"class","clicks svelte-1ud4bb2"),I(m,"class","PPC svelte-1ud4bb2"),ie(c,"display","flex"),ie(c,"flex-direction","column"),I(P,"class","clicker svelte-1ud4bb2"),I(k,"class","game svelte-1ud4bb2"),I(O,"class","shop svelte-1ud4bb2"),I(V,"class","panelright svelte-1ud4bb2")},m(t,E){K(t,l,E),a(l,o),K(t,s,E),K(t,n,E),a(n,h),a(h,d);for(let e=0;e<v.length;e+=1)v[e].m(d,null);a(n,g),a(n,k),a(k,P),a(P,c),a(c,D),a(D,A),a(c,y),a(c,m),a(m,b),a(m,H),a(n,W),a(n,F),a(F,V),a(V,C),a(C,J),a(J,M),a(C,Q),a(C,X),a(C,Y),a(C,O);for(let e=0;e<p.length;e+=1)p[e].m(O,null);a(V,Z),a(V,$),x||(te=pe(P,"click",r[5]),x=!0)},p(t,[E]){if(E&63){q=t[4];let e;for(e=0;e<q.length;e+=1){const w=_e(t,q,e);v[e]?v[e].p(w,E):(v[e]=de(w),v[e].c(),v[e].m(d,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=q.length}if(E&1&&L(A,t[0]),E&2&&L(H,t[1]),E&4){U=t[2];let e;for(e=0;e<U.length;e+=1){const w=ue(t,U,e);p[e]?p[e].p(w,E):(p[e]=ve(w),p[e].c(),p[e].m(O,null))}for(;e<p.length;e+=1)p[e].d(1);p.length=U.length}},i:he,o:he,d(t){t&&i(l),t&&i(s),t&&i(n),fe(v,t),fe(p,t),x=!1,te()}}}function ge(r,l,o){let s=100,n=1,h=[],d=1,g=[{cost:15,name:"Add",multiplier:1,worker:0},{cost:5,name:"Worker",multiplier:0,worker:1}];function k(){o(0,s=s+n),console.log("click"+s)}return[s,n,h,d,g,k,(c,D,A)=>{s>=c.cost?(c.multiplier&&(o(1,n+=c.multiplier),o(0,s-=c.cost)),c.worker&&s&&(o(3,d=d*2),o(2,h=[c.name,...h]),setInterval(k,1e3),o(0,s-=c.cost)),o(4,D[A].cost=c.cost*2,g)):alert("Du har ju inte tillräckligt många kakor!")}]}class De extends me{constructor(l){super(),be(this,l,ge,Ee,ke,{})}}export{De as default};
