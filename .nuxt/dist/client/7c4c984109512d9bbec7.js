(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{315:function(t,e,n){t.exports={"pin-1-pc-media":"pin-1-pc-media_36tsQ",pin1PcMedia:"pin-1-pc-media_36tsQ",desc:"desc_2iLTt","pin-1-pc":"pin-1-pc_2vpWi",pin1Pc:"pin-1-pc_2vpWi",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp","skeleton-loading":"skeleton-loading_h2GMS",skeletonLoading:"skeleton-loading_h2GMS",skeleton:"skeleton_3xDfV"}},346:function(t,e,n){"use strict";var o=n(315),r=n.n(o);e.default=r.a},349:function(t,e,n){"use strict";var o={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}},r={name:"PinArticle",mixins:[o]},l=n(346),c=n(18);var m={name:"PinFlowItem",components:{Type1:Object(c.a)(r,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("li",{class:e.$style["pin-1"]},[o("NLink",{staticClass:"only-h5",class:e.$style["pin-1-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e._v("\n    "+e._s(e.item.title.text)+"\n  ")]),e._v(" "),o("div",{staticClass:"only-pc",class:[e.$style["pin-1-pc"],(t={},t[e.$style["pin-1-pc-media"]]=e.item.media,t)]},[o("h2",{class:e.$style.title},[o("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}}),e._v(" "),e.showArea?[e.item.area?o("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?o("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()]:e._e()],2),e._v(" "),o("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?o("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?o("div",{class:e.$style.video},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?o("div",{class:e.$style.music},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}),e._v(" "),o("div",{class:e.$style.text},[o("i",{staticClass:"iconfont ic-video"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-camera"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),o("div",{class:e.$style.desc},[o("main",[o("p",{domProps:{textContent:e._s(e.item.intro)}})]),e._v(" "),o("footer",[e.showUser?o("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),o("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null).exports},mixins:[o],data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},d=Object(c.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("type-"+this.item.content_type,{tag:"component",attrs:{item:this.item,"show-user":this.showUser,"show-area":this.showArea,"secret-link":this.secretLink}}):this._e()},[],!1,null,null,null);e.a=d.exports},423:function(t,e,n){},424:function(t,e,n){},425:function(t,e,n){},426:function(t,e,n){},515:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=95)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,l,c,m){var d,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=n,_._compiled=!0),o&&(_.functional=!0),l&&(_._scopeId="data-v-"+l),c?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},_._ssrRegister=d):r&&(d=m?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(_.functional){_._injectStyles=d;var f=_.render;_.render=function(t,e){return d.call(e),f(t,e)}}else{var v=_.beforeCreate;_.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:_}}n.d(e,"a",function(){return o})},95:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"el-timeline-item"},[n("div",{staticClass:"el-timeline-item__tail"}),t.$slots.dot?t._e():n("div",{staticClass:"el-timeline-item__node",class:["el-timeline-item__node--"+(t.size||""),"el-timeline-item__node--"+(t.type||"")],style:{backgroundColor:t.color}},[t.icon?n("i",{staticClass:"el-timeline-item__icon",class:t.icon}):t._e()]),t.$slots.dot?n("div",{staticClass:"el-timeline-item__dot"},[t._t("dot")],2):t._e(),n("div",{staticClass:"el-timeline-item__wrapper"},[t.hideTimestamp||"top"!==t.placement?t._e():n("div",{staticClass:"el-timeline-item__timestamp is-top"},[t._v("\n      "+t._s(t.timestamp)+"\n    ")]),n("div",{staticClass:"el-timeline-item__content"},[t._t("default")],2),t.hideTimestamp||"bottom"!==t.placement?t._e():n("div",{staticClass:"el-timeline-item__timestamp is-bottom"},[t._v("\n      "+t._s(t.timestamp)+"\n    ")])])])};o._withStripped=!0;var r={name:"ElTimelineItem",inject:["timeline"],props:{timestamp:String,hideTimestamp:{type:Boolean,default:!1},placement:{type:String,default:"bottom"},type:String,color:String,size:{type:String,default:"normal"},icon:String}},l=n(0),component=Object(l.a)(r,o,[],!1,null,null,null);component.options.__file="packages/timeline/src/item.vue";var c=component.exports;c.install=function(t){t.component(c.name,c)};e.default=c}})},516:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=120)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,l,c,m){var d,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=n,_._compiled=!0),o&&(_.functional=!0),l&&(_._scopeId="data-v-"+l),c?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},_._ssrRegister=d):r&&(d=m?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(_.functional){_._injectStyles=d;var f=_.render;_.render=function(t,e){return d.call(e),f(t,e)}}else{var v=_.beforeCreate;_.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:_}}n.d(e,"a",function(){return o})},120:function(t,e,n){"use strict";n.r(e);var o={name:"ElTimeline",props:{reverse:{type:Boolean,default:!1}},provide:function(){return{timeline:this}},render:function(){var t=arguments[0],e=this.reverse,n={"el-timeline":!0,"is-reverse":e},o=this.$slots.default||[];return e&&(o=o.reverse()),t("ul",{class:n},[o])}},r=n(0),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);component.options.__file="packages/timeline/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},517:function(t,e,n){"use strict";var o=n(423);n.n(o).a},518:function(t,e,n){"use strict";var o=n(424);n.n(o).a},519:function(t,e,n){"use strict";var o=n(425);n.n(o).a},520:function(t,e,n){"use strict";var o=n(426);n.n(o).a},548:function(t,e,n){"use strict";n.r(e);var o=n(515),r=n.n(o),l=n(516),c=n.n(l),m={name:"JoinUs",props:{item:{type:[Object,null],required:!0}}},d=(n(517),n(18)),_=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-timeline-0"},[t.item?[t._v("\n    由 "),n("NLink",{attrs:{target:"_blank",to:t.$alias.user(t.item.slug)},domProps:{textContent:t._s(t.item.nickname)}}),t._v("邀请加入 calibur！\n  ")]:[t._v("\n    加入 calibur！\n  ")]],2)},[],!1,null,null,null).exports,f={name:"TagBookmark",props:{item:{type:Object,required:!0}},data:function(){return{notebookSlug:"uh4f"}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},v=(n(518),Object(d.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-timeline-1"},[n("span",[t._v(t._s(t.item.parent_slug===t.notebookSlug?"关注专栏":"加入专区"))]),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{textContent:t._s(t.item.name)}})],1)},[],!1,null,null,null).exports),h={name:"TagCreate",props:{item:{type:Object,required:!0}},data:function(){return{notebookSlug:"uh4f"}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},y=(n(519),Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-timeline-2"},[n("span",[t._v(t._s(t.item.parent_slug===t.notebookSlug?"新建专栏":"创建专区"))]),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{textContent:t._s(t.item.name)}})],1)},[],!1,null,null,null).exports),C={name:"PinCreate",components:{PinFlowItem:n(349).a},props:{item:{type:Object,required:!0}}},x=Object(d.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-timeline-3"},[e("p",[this._v("发表文章")]),this._v(" "),e("div",[e("PinFlowItem",{attrs:{item:this.item,"show-user":!1}})],1)])},[],!1,null,null,null).exports,$={name:"UserTimeline",components:{ElTimeline:c.a,ElTimelineItem:r.a,type0:_,type1:v,type2:y,type3:x},props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},k=(n(520),Object(d.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-timeline"}},[n("FlowLoader",{attrs:{func:"getUserTimeline",type:"page",query:{$axios:t.$axios,slug:t.slug,count:10}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("ElTimeline",{},t._l(o,function(e){return n("ElTimelineItem",{key:e.type+"-"+e.slug,attrs:{timestamp:t.$utils.timeAgo(e.created_at),placement:"top"}},[n("type-"+e.type,{tag:"component",attrs:{item:e.data}})],1)}),1)}}])})],1)},[],!1,null,null,null));e.default=k.exports}}]);