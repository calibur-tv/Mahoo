(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{319:function(t,e,n){"use strict";n(23);var r=n(2),o=n(59);e.a={beforeMount:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){r.$store.state.isAuth?(r.$channel.$fire("user-signed"),e()):r.$toast.error("继续操作前请先登录").then(function(){window.location.href=r.$alias.sign()})}),t.next=10;break;case 4:return n=Object(o.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(function(){window.location.href=r.$alias.sign()});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},327:function(t,e,n){"use strict";n(32),n(91);e.a={beforeMount:function(){var t=this,e=function(){t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}})};if(this.$store.state.isAuth)e();else var n=this.$watch("$store.state.isAuth",function(t){t&&(e(),n())})}}},367:function(t,e,n){t.exports={"pin-flow-item-pc":"pin-flow-item-pc_35MjJ",pinFlowItemPc:"pin-flow-item-pc_35MjJ",title:"title_2hr0j",media:"media_1UNrz",desc:"desc_1pJ1J"}},433:function(t,e,n){"use strict";var r=n(367),o=n.n(r);e.default=o.a},482:function(t,e,n){"use strict";n.r(e);var r=n(327),o=n(319),l={name:"PinFlowItem",components:{},props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=n(433),f=n(15);var m={name:"UserDraft",components:{PinFlowItem:Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("nuxt-link",{staticClass:"only-h5",class:t.$style["pin-flow-item-h5"],attrs:{to:t.$alias.pin(t.secretLink||t.item.slug)}},[t._v("\n    "+t._s(t.item.title.text)+"\n  ")]),t._v(" "),n("div",{staticClass:"only-pc",class:t.$style["pin-flow-item-pc"]},[n("h2",{class:t.$style.title},[n("nuxt-link",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.pin(t.secretLink||t.item.slug)},domProps:{textContent:t._s(t.item.title.text)}})],1),t._v(" "),n("div",{staticClass:"clearfix",class:t.$style.content},[t.item.media?n("div",{class:t.$style.media},[n("nuxt-link",{attrs:{target:"_blank",to:t.$alias.pin(t.secretLink||t.item.slug)}},[n("v-img",{attrs:{src:t.item.media.data.url,width:"190",height:"105"}})],1)],1):t._e(),t._v(" "),n("div",{class:t.$style.desc},[t._v("\n        "+t._s(t.item.intro)+"\n      ")])])])],1)},[],!1,function(t){this.$style=c.default.locals||c.default},null,null).exports},mixins:[o.a,r.a],props:{slug:{type:String,required:!0}}},d=Object(f.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-draft"}},[n("flow-loader",{attrs:{func:"getUserDrafts",type:"page",query:{count:10,$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow,o=e.extra;return n("ul",{},t._l(r,function(t,e){return n("pin-flow-item",{key:t.slug,attrs:{item:t,"secret-link":o[e]}})}),1)}}])})],1)},[],!1,null,null,null);e.default=d.exports}}]);