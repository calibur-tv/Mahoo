(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{349:function(t,e,v){},432:function(t,e,v){"use strict";var n=v(349);v.n(n).a},434:function(t,e,v){},526:function(t,e,v){"use strict";var n={name:"Header",props:{title:{type:String,default:""},back:{type:Boolean,default:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{goBack:function(){this.$router.back()}}},_=(v(432),v(16)),component=Object(_.a)(n,(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"header"},[v("div",{staticClass:"header-shim"}),t._v(" "),v("div",{staticClass:"header-core"},[v("div",{staticClass:"header-left"},[t.back?v("div",{staticClass:"header-back",on:{click:t.goBack}},[v("i",{staticClass:"el-icon-arrow-left"})]):t._e(),t._v(" "),t._t("left")],2),t._v(" "),v("p",{staticClass:"header-text oneline",domProps:{textContent:t._s(t.title)}}),t._v(" "),v("div",{staticClass:"header-right"},[t._t("right")],2)])])}),[],!1,null,null,null);e.a=component.exports},572:function(t,e,v){"use strict";var n=v(434);v.n(n).a},683:function(t,e,v){"use strict";v.r(e);var n=v(526),_=v(140),r={name:"AppZone",components:{Header:n.a},props:{},data:function(){return{tag:null}},computed:{},watch:{},asyncData:function(t){var e=t.app,v=t.error,n=t.query.slug;return Object(_.d)(e,{slug:n}).then((function(t){return{tag:t}})).catch(v)},created:function(){},mounted:function(){},methods:{}},c=(v(572),v(16)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{attrs:{id:"app-zone"}},[v("div",{staticClass:"page-header"},[v("Header"),t._v(" "),v("div",{staticClass:"background",style:{backgroundImage:"url("+t.$resize(t.tag.avatar,{width:100})+")"}}),t._v(" "),v("div",{staticClass:"intro"},[v("img",{attrs:{src:t.$resize(t.tag.avatar,{width:100})}})])],1),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")])])}),[],!1,null,null,null);e.default=component.exports}}]);