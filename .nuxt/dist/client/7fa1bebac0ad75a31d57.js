(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{357:function(t,n,e){"use strict";e(18);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:function(){return{tag:null,children:[]}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}}},399:function(t,n,e){},535:function(t,n,e){"use strict";var c=e(399);e.n(c).a},641:function(t,n,e){"use strict";e.r(n);var c=e(17),o=e(357),r=e(137),l=e(371),h=e(370),d=e(368),f={name:"ZoneGame",components:{Affix:l.a,TagHotList:d.a,PinFlowList:h.a},mixins:[o.a],data:function(){return{slug:"285"}},asyncData:function(t){var n=t.app,e=t.error;return Object(r.d)(n,{slug:"285"}).then(function(data){return Object(c.a)({},data)}).catch(e)},created:function(){},mounted:function(){},methods:{}},m=(e(535),e(15)),component=Object(m.a)(f,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[n("TagHotList",{attrs:{slug:this.slug,title:"热门游戏",children:this.children}})],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);