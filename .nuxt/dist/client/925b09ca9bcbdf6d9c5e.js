(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{344:function(t,n,e){"use strict";e(34);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},data:function(){return{tag:null,parent:null,children:[]}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}}},380:function(t,n,e){},477:function(t,n,e){"use strict";var o=e(380);e.n(o).a},550:function(t,n,e){"use strict";e.r(n);var o=e(16),c=e(344),r=e(135),l=e(355),d={name:"ZoneTopic",components:{PinFlowList:e(354).a,Affix:l.a},mixins:[c.a],data:function(){return{slug:"3p6"}},asyncData:function(t){var n=t.app,e=t.error;return Object(r.e)(n,{slug:"3p6"}).then(function(data){return Object(o.a)({},data)}).catch(e)},created:function(){},mounted:function(){},methods:{}},h=(e(477),e(18)),component=Object(h.a)(d,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"zone-topic"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{staticClass:"left-aside",attrs:{span:5}},[e("Affix",{attrs:{top:50}},[t.children.length?e("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(n){return e("li",{key:n.slug,staticClass:"node"},[e("NLink",{attrs:{to:"/tag/"+n.slug}},[e("VImg",{attrs:{src:n.avatar,width:"32",height:"32",alt:n.name}}),t._v(" "),e("span",{domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[e("PinFlowList",{attrs:{slug:t.slug,loop:2}})],1),t._v(" "),e("ElCol",{attrs:{span:5}})],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);