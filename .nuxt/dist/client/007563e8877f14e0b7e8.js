(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{400:function(t,n,e){"use strict";e(27),e(30);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:function(){return{tag:null,children:null}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then((function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))})).catch((function(){}))}}}},440:function(t,n,e){},578:function(t,n,e){"use strict";var r=e(440);e.n(r).a},689:function(t,n,e){"use strict";e.r(n);e(8),e(36),e(38);var r=e(400),c=e(162),o=e(410),l=e(411),h=e(412),d={name:"ZoneGame",components:{Affix:o.a,TagHotList:h.a,PinFlowList:l.a},mixins:[r.a],asyncData:function(t){var n=t.app,e=t.error;return Promise.all([Object(c.d)(n,{slug:"285"}),Object(c.e)(n,{slug:"285"})]).then((function(data){return{tag:data[0],children:data[1]}})).catch(e)},data:function(){return{slug:"285"}}},f=(e(578),e(19)),component=Object(f.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?n("TagHotList",{attrs:{slug:this.slug,title:"热门游戏",children:this.children}}):this._e()],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);