(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{372:function(t,n,e){"use strict";e(20);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:function(){return{tag:null,children:null}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then((function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))})).catch((function(){}))}}}},415:function(t,n,e){},553:function(t,n,e){"use strict";var c=e(415);e.n(c).a},655:function(t,n,e){"use strict";e.r(n);e(14),e(5),e(69);var c=e(372),r=e(139),o=e(380),l=e(381),h=e(382),d={name:"ZoneTopic",components:{PinFlowList:l.a,TagHotList:h.a,Affix:o.a},mixins:[c.a],asyncData:function(t){var n=t.app,e=t.error;return Promise.all([Object(r.d)(n,{slug:"3p6"}),Object(r.e)(n,{slug:"3p6"})]).then((function(data){return{tag:data[0],children:data[1]}})).catch(e)},data:function(){return{slug:"3p6"}}},f=(e(553),e(16)),component=Object(f.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-topic"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?n("TagHotList",{attrs:{slug:this.slug,title:"热门话题",children:this.children}}):this._e()],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);