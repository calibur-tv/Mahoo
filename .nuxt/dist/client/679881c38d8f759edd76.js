(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{319:function(t,e,n){"use strict";n(19);var o=n(2),r=n(59);e.a={beforeMount:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){o.$store.state.isAuth?(o.$channel.$fire("user-signed"),e()):o.$toast.error("继续操作前请先登录").then(function(){window.location.href=o.$alias.sign()})}),t.next=10;break;case 4:return n=Object(r.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(function(){window.location.href=o.$alias.sign()});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},327:function(t,e,n){t.exports={"pin-1":"pin-1_1-w9q",pin1:"pin-1_1-w9q","pin-1-pc":"pin-1-pc_2vpWi",pin1Pc:"pin-1-pc_2vpWi",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp",desc:"desc_2iLTt"}},335:function(t,e,n){"use strict";n(33),n(93);e.a={beforeMount:function(){var t=this,e=function(){t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}})};if(this.$store.state.isAuth)e();else var n=this.$watch("$store.state.isAuth",function(t){t&&(e(),n())})}}},385:function(t,e,n){"use strict";var o=n(327),r=n.n(o);e.default=r.a},406:function(t,e,n){"use strict";var o={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}},r={name:"PinArticle",mixins:[o]},c=n(385),l=n(18);var m={name:"PinFlowItem",components:{Type1:Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style["pin-1"]},[n("NLink",{staticClass:"only-h5",class:t.$style["pin-1-h5"],attrs:{to:t.$alias.pin(t.secretLink||t.item.slug)}},[t._v("\n    "+t._s(t.item.title.text)+"\n  ")]),t._v(" "),n("div",{staticClass:"only-pc",class:t.$style["pin-1-pc"]},[n("h2",{class:t.$style.title},[n("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.pin(t.secretLink||t.item.slug)},domProps:{textContent:t._s(t.item.title.text)}})],1),t._v(" "),n("div",{staticClass:"clearfix",class:t.$style.content},[t.item.media?n("NLink",{class:t.$style.media,attrs:{to:t.$alias.pin(t.secretLink||t.item.slug),target:"_blank"}},[t.item.media.first_video?n("div",{class:t.$style.video},[t.item.media.banner?n("VImg",{attrs:{src:t.item.media.banner.url,width:"187",height:"105"}}):t._e(),t._v(" "),n("i",{staticClass:"iconfont ic-bilibili",class:t.$style.badge})],1):t.item.media.first_music?n("div",{class:t.$style.music},[t.item.media.banner?n("VImg",{attrs:{src:t.item.media.banner.url,width:"187",height:"105"}}):t._e(),t._v(" "),n("i",{staticClass:"iconfont ic-netease",class:t.$style.badge})],1):n("VImg",{attrs:{src:t.item.media.banner.url,width:"187",height:"105"}}),t._v(" "),n("div",{class:t.$style.text},[n("i",{staticClass:"iconfont ic-video"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.media.video_count)}}),t._v(" "),n("i",{staticClass:"iconfont ic-systemprompt"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.media.music_count)}}),t._v(" "),n("i",{staticClass:"iconfont ic-camera"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.media.image_count)}})])],1):t._e(),t._v(" "),n("div",{class:t.$style.desc},[n("main",[n("span",{domProps:{textContent:t._s(t.item.intro)}})]),t._v(" "),n("footer",[t.showUser?n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n             \n            "),n("span",{domProps:{textContent:t._s(t.item.author.nickname)}})],1):t._e(),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-message_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.comment_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-good_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.like_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-mark_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.mark_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-browse_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.visit_count)}})])],1)])],1)])],1)},[],!1,function(t){this.$style=c.default.locals||c.default},null,null).exports},mixins:[o],data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},d=Object(l.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("type-"+this.item.content_type,{tag:"component",attrs:{item:this.item,"show-user":this.showUser,"show-area":this.showArea,"secret-link":this.secretLink}})},[],!1,null,null,null);e.a=d.exports},535:function(t,e,n){"use strict";n.r(e);var o=n(335),r=n(319),c={name:"UserDraft",components:{PinFlowItem:n(406).a},mixins:[r.a,o.a],props:{slug:{type:String,required:!0}}},l=n(18),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-draft"}},[n("FlowLoader",{attrs:{func:"getUserDrafts",type:"page",query:{count:10,$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow,r=e.extra;return n("ul",{},t._l(o,function(t,e){return n("PinFlowItem",{key:t.slug,attrs:{item:t,"show-user":!1,"secret-link":r[e]}})}),1)}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);