exports.ids=[33],exports.modules={230:function(t,e){},328:function(t,e,r){"use strict";r.r(e);var n=r(230),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},375:function(t,e,r){"use strict";r.r(e);var n={name:"CategoryLayout",props:{slug:{type:String,required:!0}},computed:{headers(){const t=`/user/${this.slug}/emotion/category/`;return[{route:`${t}bangumi`,name:"动漫"},{route:`${t}game`,name:"游戏"},{route:`${t}topic`,name:"话题"},{route:`${t}notebook`,name:"专栏"}]}},watch:{},created(){},mounted(){},methods:{}},o=r(1);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"category-layout"}},[r("VSwitcher",{attrs:{headers:t.headers,routable:!0,"anchor-padding":15,align:"start"}},t._l(t.headers,(function(e,n){return r("NLink",{key:n,attrs:{slot:"tab-"+n,to:e.route},domProps:{textContent:t._s(e.name)},slot:"tab-"+n})})),1),t._ssrNode(" "),r("NuxtChild")],2)}),[],!1,(function(t){var e=r(328);e.__inject__&&e.__inject__(t)}),null,"9fcd74f2");e.default=component.exports}};