(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{347:function(t,n,e){"use strict";e(35);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},data:function(){return{tag:null,children:[]}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}}},387:function(t,n,e){},503:function(t,n,e){"use strict";var o=e(387);e.n(o).a},577:function(t,n,e){"use strict";e.r(n);var o=e(16),c=e(347),r=e(137),l=e(358),h=e(356),f=e(357),d={name:"ZoneGame",components:{Affix:l.a,TagHotList:f.a,PinFlowList:h.a},mixins:[c.a],data:function(){return{slug:"285"}},asyncData:function(t){var n=t.app,e=t.error;return Object(r.e)(n,{slug:"285"}).then(function(data){return Object(o.a)({},data)}).catch(e)},created:function(){},mounted:function(){},methods:{}},m=(e(503),e(18)),component=Object(m.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[n("TagHotList",{attrs:{slug:this.slug,title:"热门游戏",list:this.children}})],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{span:5}})],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);