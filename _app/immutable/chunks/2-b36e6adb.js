import{S as w,i as y,s as E,k as d,q as h,a as m,l as f,m as k,r as _,h as r,c as j,n as J,b as o,E as v,B as p}from"./index-930291f4.js";function I(b){let t,i,l,s,q=`<code class="language-ccs">&lt;button
          class=&quot;upgrade&quot;
          on:click=&#123;() =&gt; &#123;
            if (clicks &gt;= upgrade.cost) &#123;
              if (upgrade.multiplier) &#123;
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
              &#125;
              if (upgrade.worker &amp;&amp; clicks) &#123;
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start &quot;clicking&quot; every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
              &#125;
            &#125; else &#123;
              alert(&quot;Click some more first!&quot;);
            &#125;
          &#125;&#125;
        &gt;</code>`,u,n,c;return{c(){t=d("p"),i=h(`Idag har jag försökt att förstå och utforskat hur “koden” bakom hemsidan fungerar och hur jag ska kunna ändra och justera det jag vill.
Jag har t.ex. försökt förstå hur olika buttons fungerar och hur jag ska kunna ändra deras olika funktioner då genom att förstå denna kod:`),l=m(),s=d("pre"),u=m(),n=d("p"),c=h("Jag har ändrat utseendet och försöker att få sidan att se bättre ut genom att försöka ändra stylen för upgrades och"),this.h()},l(a){t=f(a,"P",{});var e=k(t);i=_(e,`Idag har jag försökt att förstå och utforskat hur “koden” bakom hemsidan fungerar och hur jag ska kunna ändra och justera det jag vill.
Jag har t.ex. försökt förstå hur olika buttons fungerar och hur jag ska kunna ändra deras olika funktioner då genom att förstå denna kod:`),e.forEach(r),l=j(a),s=f(a,"PRE",{class:!0});var x=k(s);x.forEach(r),u=j(a),n=f(a,"P",{});var g=k(n);c=_(g,"Jag har ändrat utseendet och försöker att få sidan att se bättre ut genom att försöka ändra stylen för upgrades och"),g.forEach(r),this.h()},h(){J(s,"class","language-ccs")},m(a,e){o(a,t,e),v(t,i),o(a,l,e),o(a,s,e),s.innerHTML=q,o(a,u,e),o(a,n,e),v(n,c)},p,i:p,o:p,d(a){a&&r(t),a&&r(l),a&&r(s),a&&r(u),a&&r(n)}}}const C={title:"Onsdag",date:"2023-1-18"};class S extends w{constructor(t){super(),y(this,t,null,I,E,{})}}export{S as default,C as metadata};
