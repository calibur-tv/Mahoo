(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{315:function(t,e,n){t.exports=JSON.parse('{"pin-article-pc-media":"pin-article-pc-media_EdOoY","pinArticlePcMedia":"pin-article-pc-media_EdOoY","desc":"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d","pinArticlePc":"pin-article-pc_n9l6d","title":"title_11AiS","badge":"badge_33AUe","link":"link_2zXb9","area":"area_1BjFz","media":"media_2oWmK","text":"text_2wAMb","music":"music_3Ur6b","video":"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp","pinArticleH5":"pin-article-h5_2Chnp","user":"user_1ugeY","intro":"intro_3P9uJ","skeleton-loading":"skeleton-loading_LpB2j","skeletonLoading":"skeleton-loading_LpB2j","skeleton":"skeleton_3OUSt"}')},321:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},328:function(t,e,n){"use strict";var r=n(315),o=n.n(r);e.default=o.a},330:function(t,e,n){"use strict";var r={name:"PinArticle",mixins:[n(321).a]},o=n(328),l=n(11);var component=Object(l.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("li",{class:e.$style["pin-article"]},[r("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e.item.media&&e.item.media.banner?r("header",{style:{paddingTop:e.item.media.banner.height/e.item.media.banner.width*100+"%"}},[r("img",{attrs:{src:e.$resize(e.item.media.banner.url,{width:400,mode:2})}})]):e._e(),e._v(" "),r("main",[r("div",{class:e.$style.user},[e.showUser?r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1),e._v(" "),r("span",{class:e.$style.title,domProps:{innerHTML:e._s(e.item.title.text)}})]),e._v(" "),e.item.intro?r("footer",[r("p",{class:e.$style.intro,domProps:{innerHTML:e._s(e.item.intro)}})]):e._e()]),e._v(" "),r("div",{staticClass:"only-pc",class:[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)]},[r("h2",{class:e.$style.title},[r("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),e.showZone?r("div",{class:e.$style.area},[e.item.area?r("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?r("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._v(" "),r("p",{staticClass:"oneline",class:e.$style.link},[r("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{innerHTML:e._s(e.item.title.text)}})],1)]),e._v(" "),r("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?r("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?r("div",{class:e.$style.video},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?r("div",{class:e.$style.music},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),r("div",{class:e.$style.text},[r("i",{staticClass:"iconfont ic-video"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-camera"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),r("div",{class:e.$style.desc},[r("main",[r("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),r("footer",[e.showUser?r("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.a=component.exports},443:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=123)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,l,c,m){var d,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=n,_._compiled=!0),r&&(_.functional=!0),l&&(_._scopeId="data-v-"+l),c?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},_._ssrRegister=d):o&&(d=m?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(_.functional){_._injectStyles=d;var f=_.render;_.render=function(t,e){return d.call(e),f(t,e)}}else{var v=_.beforeCreate;_.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:_}}n.d(e,"a",(function(){return r}))},123:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"el-timeline-item"},[n("div",{staticClass:"el-timeline-item__tail"}),t.$slots.dot?t._e():n("div",{staticClass:"el-timeline-item__node",class:["el-timeline-item__node--"+(t.size||""),"el-timeline-item__node--"+(t.type||"")],style:{backgroundColor:t.color}},[t.icon?n("i",{staticClass:"el-timeline-item__icon",class:t.icon}):t._e()]),t.$slots.dot?n("div",{staticClass:"el-timeline-item__dot"},[t._t("dot")],2):t._e(),n("div",{staticClass:"el-timeline-item__wrapper"},[t.hideTimestamp||"top"!==t.placement?t._e():n("div",{staticClass:"el-timeline-item__timestamp is-top"},[t._v("\n      "+t._s(t.timestamp)+"\n    ")]),n("div",{staticClass:"el-timeline-item__content"},[t._t("default")],2),t.hideTimestamp||"bottom"!==t.placement?t._e():n("div",{staticClass:"el-timeline-item__timestamp is-bottom"},[t._v("\n      "+t._s(t.timestamp)+"\n    ")])])])};r._withStripped=!0;var o={name:"ElTimelineItem",inject:["timeline"],props:{timestamp:String,hideTimestamp:{type:Boolean,default:!1},placement:{type:String,default:"bottom"},type:String,color:String,size:{type:String,default:"normal"},icon:String}},l=n(0),component=Object(l.a)(o,r,[],!1,null,null,null);component.options.__file="packages/timeline/src/item.vue";var c=component.exports;c.install=function(t){t.component(c.name,c)};e.default=c}})},444:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=126)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,l,c,m){var d,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=n,_._compiled=!0),r&&(_.functional=!0),l&&(_._scopeId="data-v-"+l),c?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},_._ssrRegister=d):o&&(d=m?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(_.functional){_._injectStyles=d;var f=_.render;_.render=function(t,e){return d.call(e),f(t,e)}}else{var v=_.beforeCreate;_.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:_}}n.d(e,"a",(function(){return r}))},126:function(t,e,n){"use strict";n.r(e);var r={name:"ElTimeline",props:{reverse:{type:Boolean,default:!1}},provide:function(){return{timeline:this}},render:function(){var t=arguments[0],e=this.reverse,n={"el-timeline":!0,"is-reverse":e},r=this.$slots.default||[];return e&&(r=r.reverse()),t("ul",{class:n},[r])}},o=n(0),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);component.options.__file="packages/timeline/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},469:function(t,e,n){},470:function(t,e,n){},471:function(t,e,n){},472:function(t,e,n){},606:function(t,e,n){"use strict";var r=n(469);n.n(r).a},607:function(t,e,n){"use strict";var r=n(470);n.n(r).a},608:function(t,e,n){"use strict";var r=n(471);n.n(r).a},609:function(t,e,n){"use strict";var r=n(472);n.n(r).a},645:function(t,e,n){"use strict";n.r(e);var r=n(443),o=n.n(r),l=n(444),c=n.n(l),m={name:"JoinUs",props:{item:{type:[Object,null],required:!0}}},d=(n(606),n(11)),_=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-timeline-0"},[t.item?[t._v(" 由 "),n("NLink",{attrs:{target:"_blank",to:t.$alias.user(t.item.slug)},domProps:{innerHTML:t._s(t.item.nickname)}}),t._v("邀请加入 calibur！ ")]:[t._v("\n    加入 calibur！\n  ")]],2)}),[],!1,null,null,null).exports,f={name:"TagBookmark",props:{item:{type:Object,required:!0}},data:()=>({notebookSlug:"uh4f"}),computed:{},watch:{},created(){},mounted(){},methods:{}},v=(n(607),Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-timeline-1"},[n("span",[t._v(t._s(t.item.parent_slug===t.notebookSlug?"关注专栏":"加入专区"))]),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{textContent:t._s(t.item.name)}})],1)}),[],!1,null,null,null).exports),h={name:"TagCreate",props:{item:{type:Object,required:!0}},data:()=>({notebookSlug:"uh4f"}),computed:{},watch:{},created(){},mounted(){},methods:{}},y=(n(608),Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-timeline-2"},[n("span",[t._v(t._s(t.item.parent_slug===t.notebookSlug?"新建专栏":"创建专区"))]),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{textContent:t._s(t.item.name)}})],1)}),[],!1,null,null,null).exports),C={name:"PinCreate",components:{PinArticle:n(330).a},props:{item:{type:Object,required:!0}},computed:{title:()=>"发表文章"}},$=Object(d.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-timeline-3"},[e("p",{domProps:{textContent:this._s(this.title)}}),this._v(" "),e("PinArticle",{attrs:{item:this.item,"show-user":!1}})],1)}),[],!1,null,null,null).exports,k={name:"UserTimeline",components:{ElTimeline:c.a,ElTimelineItem:o.a,type0:_,type1:v,type2:y,type3:$},props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},x=(n(609),Object(d.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-timeline"}},[n("FlowLoader",{attrs:{func:"getUserTimeline",type:"page",query:{$axios:t.$axios,slug:t.slug,count:10}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("ElTimeline",{},t._l(r,(function(e){return n("ElTimelineItem",{key:e.type+"-"+e.slug,attrs:{timestamp:t.$utils.timeAgo(e.created_at),placement:"top"}},[n("type-"+e.type,{tag:"component",attrs:{item:e.data}})],1)})),1)}}])})],1)}),[],!1,null,null,null));e.default=x.exports}}]);