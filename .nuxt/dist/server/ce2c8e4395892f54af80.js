exports.ids=[6],exports.modules={181:function(t,e){},283:function(t,e,r){"use strict";r.r(e);var n=r(181),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},395:function(t,e,r){"use strict";r.r(e);var n={name:"AppCategory",layout:"app",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},o=r(1);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app-category"}},[t._ssrNode('<p class="title">热门圈子</p> <div class="title-shim"></div> '),r("FlowLoader",{attrs:{func:"tagHottest",type:"page",query:{take:12,$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("VScroller",{staticClass:"tag-list clearfix",attrs:{throttle:-1}},t._l(n,(function(e){return r("li",{key:e.slug},[r("div",[r("figure",[r("img",{attrs:{src:t.$resize(e.avatar,{width:100})}})]),t._v(" "),r("p",{staticClass:"oneline",domProps:{innerHTML:t._s(e.name)}}),t._v(" "),r("span",[t._v(t._s(e.seen_user_count)+" 关注")])])])})),0)}}])})],2)}),[],!1,(function(t){var e=r(283);e.__inject__&&e.__inject__(t)}),null,"749602b0");e.default=component.exports}};