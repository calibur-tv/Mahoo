(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{374:function(t,n,e){"use strict";e(20);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:function(){return{tag:null,children:null}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then((function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))})).catch((function(){}))}}}},441:function(t,n,e){},575:function(t,n,e){"use strict";var r=e(441);e.n(r).a},669:function(t,n,e){"use strict";e.r(n);e(14),e(5),e(67);var r=e(374),c=e(140),o=e(387),l=e(388),h=e(386),d={name:"ZoneGame",components:{Affix:o.a,TagHotList:h.a,PinFlowList:l.a},mixins:[r.a],data:function(){return{slug:"285"}},asyncData:function(t){var n=t.app,e=t.error;return Promise.all([Object(c.d)(n,{slug:"285"}),Object(c.e)(n,{slug:"285"})]).then((function(data){return{tag:data[0],children:data[1]}})).catch(e)}},f=(e(575),e(16)),component=Object(f.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?n("TagHotList",{attrs:{slug:this.slug,title:"热门游戏",children:this.children}}):this._e()],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);