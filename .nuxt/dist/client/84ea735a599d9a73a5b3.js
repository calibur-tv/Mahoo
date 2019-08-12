/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{312:function(t,e,n){t.exports={"pin-article-pc-media":"pin-article-pc-media_EdOoY",pinArticlePcMedia:"pin-article-pc-media_EdOoY",desc:"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d",pinArticlePc:"pin-article-pc_n9l6d",title:"title_11AiS",badge:"badge_33AUe",link:"link_2zXb9",area:"area_1BjFz",media:"media_2oWmK",text:"text_2wAMb",music:"music_3Ur6b",video:"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp",pinArticleH5:"pin-article-h5_2Chnp",zone:"zone_1dseY","skeleton-loading":"skeleton-loading_LpB2j",skeletonLoading:"skeleton-loading_LpB2j",skeleton:"skeleton_3OUSt"}},316:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}}},318:function(t,e,n){},321:function(t,e,n){"use strict";var r=n(312),o=n.n(r);e.default=o.a},323:function(t,e,n){"use strict";var r={name:"PinArticle",mixins:[n(316).a]},o=n(321),l=n(15);var component=Object(l.a)(r,function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("li",{class:e.$style["pin-article"]},[r("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[r("header",{staticClass:"oneline"},[e.showUser?r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),r("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.title.text)}})],1),e._v(" "),r("main",[e.item.media?r("div",{class:e.$style.media},[e.item.media.first_video?r("div",{class:e.$style.video},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?r("div",{class:e.$style.music},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}})],1):e._e(),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),r("footer",[e.showArea?r("span",{staticClass:"oneline",class:e.$style.zone},[e._v("\n        "+e._s(e.item.area?e.item.area.name:e.item.topic?e.item.topic.name:"")+"\n      ")]):e._e(),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.visit_count)}})])])]),e._v(" "),r("div",{staticClass:"only-pc",class:[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)]},[r("h2",{class:e.$style.title},[r("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),e.showArea?r("div",{class:e.$style.area},[e.item.area?r("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?r("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._v(" "),r("NLink",{staticClass:"fade-link oneline",class:e.$style.link,attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}})],1),e._v(" "),r("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?r("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?r("div",{class:e.$style.video},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?r("div",{class:e.$style.music},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),r("div",{class:e.$style.text},[r("i",{staticClass:"iconfont ic-video"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-camera"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),r("div",{class:e.$style.desc},[r("main",[r("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),r("footer",[e.showUser?r("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),r("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},324:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},325:function(t,e,n){t.exports=n.p+"img/3251725.png"},355:function(t,e,n){"use strict";var r=n(318);n.n(r).a},359:function(t,e,n){"use strict";var r={name:"SkeletonArticle",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=(n(355),n(15)),component=Object(o.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skeleton-article"},[n("div",{staticClass:"only-pc"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title gray"}),t._v(" "),n("div",{staticClass:"area gray"})]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"image gray"}),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"text"},[n("div",{staticClass:"text-long gray"}),t._v(" "),n("div",{staticClass:"text-shorten gray"})]),t._v(" "),n("div",{staticClass:"metas"},[n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"})])])])]),t._v(" "),n("div",{staticClass:"only-h5"},[n("div",{staticClass:"header"},[n("div",{staticClass:"avatar gray"}),t._v(" "),n("div",{staticClass:"title gray"})]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"image gray"}),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"text"},[n("div",{staticClass:"text-long gray"}),t._v(" "),n("div",{staticClass:"text-shorten gray"})])])]),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"})])])])}],!1,null,null,null);e.a=component.exports},460:function(t,e,n){},461:function(t,e,n){},462:function(t,e,n){},463:function(t,e,n){},464:function(t,e,n){},465:function(t,e,n){},585:function(t,e,n){"use strict";var r=n(460);n.n(r).a},586:function(t,e,n){"use strict";var r=n(461);n.n(r).a},587:function(t,e,n){"use strict";var r=n(462);n.n(r).a},588:function(t,e,n){"use strict";var r=n(463);n.n(r).a},589:function(t,e,n){"use strict";var r=n(464);n.n(r).a},590:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({f6fd:function(t,e){!function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})}(document)},fb15:function(t,e,n){"use strict";var r;n.r(e),"undefined"!=typeof window&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o={name:"VScroller",props:{preloadTop:{type:Number,default:50},preloadBottom:{type:Number,default:50},eventStep:{type:Number,default:1},throttle:{type:Number,default:0},tag:{type:String,default:"div"}},data:function(){return{lastScrollTop:0,lastTouchY:0,refreshing:!1}},beforeMount:function(){!function(){if("undefined"!=typeof window&&!window.__ios_scroll_fixed__){window.__ios_scroll_fixed__=!0;var t=document.createElement("div");document.documentElement.appendChild(t),t.style.WebkitOverflowScrolling="touch";var e="getComputedStyle"in window&&"touch"===window.getComputedStyle(t)["-webkit-overflow-scrolling"];if(document.documentElement.removeChild(t),e){var n=0,r=!1;try{var o=Object.defineProperty({},"passive",{get:function(){return r=!0,null}});window.addEventListener("test",null,o)}catch(t){}window.addEventListener("touchstart",function(t){n=t.touches?t.touches[0].screenY:t.screenY},!!r&&{passive:!1}),window.addEventListener("touchmove",function(t){var e=t.target,r=window.innerWidth/window.document.documentElement.clientWidth;if(!(t.touches.length>1||1!==r)){for(;e!==document.body&&e!==document;){var o=window.getComputedStyle(e);if(!o)break;if("INPUT"===e.nodeName&&"range"===e.getAttribute("type"))return;var i=o.getPropertyValue("-webkit-overflow-scrolling"),l=o.getPropertyValue("overflow-y"),u=parseInt(o.getPropertyValue("height"),10),c="touch"===i&&("auto"===l||"scroll"===l),s=e.scrollHeight>e.offsetHeight;if(c&&s){var d=t.touches?t.touches[0].screenY:t.screenY,a=n<=d&&0===e.scrollTop,m=n>=d&&e.scrollHeight-e.scrollTop===u;return void((a||m)&&t.preventDefault())}e=e.parentNode}t.preventDefault()}},!!r&&{passive:!1})}}}()},render:function(t){var e={},n=this.throttle;return n>=0&&(e["&scroll"]=n>0?function(t,e,n,r){var o,i=!1,l=0;function u(){o&&clearTimeout(o)}function s(){var c=this,s=Date.now()-l,d=arguments;function a(){l=Date.now(),n.apply(c,d)}i||(r&&!o&&a(),u(),void 0===r&&s>t?a():!0!==e&&(o=setTimeout(r?function(){o=void 0}:a,void 0===r?t-s:t)))}return"boolean"!=typeof e&&(r=n,n=e,e=void 0),s.cancel=function(){u(),i=!0},s}(n,this.handleScroll):this.handleScroll,e["&touchstart"]=this.handleStart,e["&touchmove"]=this.handleMove,e["&touchend"]=this.handleEnd),t(this.tag,{style:{height:"100%","overflow-y":"auto","-webkit-overflow-scrolling":"touch"},class:"v-scroller",on:e},this.$slots.default)},methods:{handleStart:function(t){this.lastTouchY=t.touches[0].clientY},handleMove:function(t){var e=t.touches[0].clientY,n=e-this.lastTouchY;if(n>0&&this.lastScrollTop<=0){if(!this.refreshing&&n<this.eventStep)return;this.refreshing=!0,this.$emit("refresh",{event:t,offset:n})}},handleEnd:function(){this.refreshing&&(this.$emit("refresh-end"),this.refreshing=!1)},handleScroll:function(t){var e=t.target.scrollTop,n=this.lastScrollTop-e,r=n>0;if(r)e>0&&(e<=this.preloadTop&&n>=this.eventStep&&this.$emit("top"),this.$emit("scroll-up"));else{e>0&&this.$emit("scroll-down");var o=this.$el;o.scrollHeight-o.clientHeight-e<=this.preloadBottom&&this.$emit("bottom")}this.lastScrollTop=e,this.$emit("scroll",{offsetTop:e,isUp:r})}}};e.default=o}})},591:function(t,e,n){"use strict";var r=n(465);n.n(r).a},601:function(t,e,n){"use strict";n.r(e);var r={name:"PinPoster",props:{item:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=(n(585),n(15)),l={name:"PinGridList",components:{PinPoster:Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"pin-poster"},[n("NLink",{staticClass:"poster",attrs:{target:"_blank",to:t.$alias.pin(t.item.slug)}},[t.item.media&&t.item.media.banner?n("VImg",{attrs:{src:t.item.media.banner.url,width:"160",height:"100"}}):t._e(),t._v(" "),n("div",{staticClass:"mask"},[n("div",[n("i",{staticClass:"iconfont ic-good_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.like_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-mark_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.mark_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-reward_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.reward_count)}})])])],1),t._v(" "),n("NLink",{staticClass:"user",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,width:"45",height:"45"}})],1),t._v(" "),n("div",{staticClass:"text"},[n("NLink",{staticClass:"title fade-link",attrs:{target:"_blank",to:t.$alias.pin(t.item.slug)},domProps:{textContent:t._s(t.item.title.text)}}),t._v(" "),n("div",{staticClass:"mask"},[n("div",[n("i",{staticClass:"iconfont ic-browse_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.visit_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-message_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.comment_count)}})])])],1)],1)},[],!1,null,null,null).exports},props:{sort:{type:String,required:!0},slug:{type:String,required:!0}},methods:{initData:function(){this.$refs.loader&&this.$refs.loader.initData()},handlePatch:function(t){var e=this,data=t.data;this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(function(t){return t.slug}).join(",")}}).then(function(t){e.$refs.loader.patch(t)}).catch(function(){})}}},c=(n(586),Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FlowLoader",{ref:"loader",staticClass:"pin-grid-list",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",auto:0,query:{$axios:t.$axios,slug:t.slug,take:10,changing:"slug",time:"3-day",sort:t.sort},callback:t.handlePatch},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,function(t){return r("PinPoster",{key:t.slug,attrs:{item:t}})}),1)}}])},[t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(324)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(325)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)},[],!1,null,null,null).exports),d=(n(190),{name:"PinRanker",props:{index:{type:Number,required:!0},item:{type:Object,required:!0},show:{type:Boolean,default:!1}}}),m=(n(587),{name:"PinRankList",components:{PinRanker:Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"pin-ranker",class:[t.show?"show":"hide"]},[n("div",{staticClass:"rank",class:{highlight:t.index<3},domProps:{textContent:t._s(t.index+1)}}),t._v(" "),n("NLink",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"content",attrs:{to:t.$alias.pin(t.item.slug),target:"_blank"}},[n("div",{staticClass:"poster"},[n("VImg",{attrs:{src:t.item.media&&t.item.media.banner?t.item.media.banner.url:"default-poster",width:"80",height:"50"}})],1),t._v(" "),n("div",{staticClass:"text"},[n("p",{domProps:{textContent:t._s(t.item.title.text)}}),t._v(" "),n("div",[t._v("综合评分："+t._s(+t.item.visit_count+2*t.item.comment_count+2*t.item.like_count+2*t.item.mark_count+5*t.item.reward_count))])])]),t._v(" "),n("NLink",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"content oneline",attrs:{to:t.$alias.pin(t.item.slug),target:"_blank"},domProps:{textContent:t._s(t.item.title.text)}})],1)},[],!1,null,null,null).exports},props:{slug:{type:String,required:!0},time:{type:String,required:!0},take:{type:Number,default:10}},data:function(){return{defaultActive:0}},methods:{initData:function(){this.$refs.loader&&this.$refs.loader.initData()},handleMove:function(t){this.defaultActive=t}}}),v=(n(588),{name:"GridArea",components:{PinGridList:c,PinRankList:Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{ref:"loader",staticClass:"pin-rank-list",attrs:{func:"getTagFlows",type:"seenIds",auto:0,query:{$axios:t.$axios,slug:t.slug,take:t.take,changing:"slug",time:t.time,sort:"hottest"},"cache-timeout":3600},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow,o=e.count;return n("ul",{},[t._l(r,function(e,r){return n("PinRanker",{key:e.slug,attrs:{index:r,item:e,show:t.defaultActive===r},nativeOn:{mouseenter:function(e){return t.handleMove(r)}}})}),t._v(" "),o?n("NLink",{staticClass:"more",attrs:{to:t.$alias.tag(t.slug),target:"_blank"}},[n("span",[t._v("查看更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t._e()],2)}}])})},[],!1,null,null,null).exports},props:{slug:{type:String,required:!0},name:{type:String,required:!0}},computed:{headers:function(){return["有新动态","最新投稿"]}},methods:{switchContent:function(t){1===t&&this.$refs.newest.initData()},switchRank:function(t){1===t&&this.$refs.rank7.initData()},handle:function(){this.$refs.rank3.initData(),this.$refs.active.initData()}}}),f=(n(589),Object(o.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"lazyload",rawName:"v-lazyload:pc",value:t.handle,expression:"handle",arg:"pc"}],staticClass:"area-wrap grid-area"},[n("div",{staticClass:"area-right"},[n("VSwitcher",{attrs:{headers:["三日","一周"],"header-trigger":"hover",animated:!0},on:{change:t.switchRank}},[n("template",{slot:"header-before"},[t._v("\n        排行\n      ")]),t._v(" "),n("template",{slot:"0"},[n("PinRankList",{ref:"rank3",attrs:{slug:t.slug,time:"3-day",take:7}})],1),t._v(" "),n("template",{slot:"1"},[n("PinRankList",{ref:"rank7",attrs:{slug:t.slug,time:"7-day",take:7,auto:!1}})],1)],2)],1),t._v(" "),n("div",{staticClass:"area-left"},[n("VSwitcher",{attrs:{headers:t.headers},on:{change:t.switchContent}},[n("template",{slot:"header-before"},[n("NLink",{staticClass:"title fade-link",attrs:{to:t.$alias.tag(t.slug),target:"_blank"},domProps:{textContent:t._s(t.name)}})],1),t._v(" "),n("template",{slot:"header-after"},[n("NLink",{staticClass:"more",attrs:{to:t.$alias.tag(t.slug),target:"_blank"}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})])],1),t._v(" "),n("template",{slot:"0"},[n("PinGridList",{ref:"active",attrs:{slug:t.slug,sort:"active"}})],1),t._v(" "),n("template",{slot:"1"},[n("PinGridList",{ref:"newest",attrs:{slug:t.slug,sort:"newest",auto:!1}})],1)],2)],1)])},[],!1,null,null,null).exports),h=n(590),_=n.n(h),y=n(323),C=n(359),w={name:"Homepage",layout:"web",components:{GridArea:f,VScroller:_.a,PinArticle:y.a,SkeletonArticle:C.a},data:function(){return{tags:[]}},computed:{category:function(){return this.tags.map(function(t){return t.type="grid",t})}},asyncData:function(t){var e=t.app,n=t.error;return e.$axios.$get("v1/tag/hottest").then(function(t){return{tags:t}}).catch(n)},methods:{handleTabSwitch:function(t){this.$refs.loader[t]&&this.$refs.loader[t].initData()},handlePatch:function(t){var e=this,data=t.data;this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(function(t){return t.slug}).join(",")}}).then(function(t){e.$refs.loader.patch(t)}).catch(function(){})}}},k=(n(591),Object(o.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"homepage"}},[r("div",{staticClass:"only-pc container"},[t._l(t.category,function(t){return r(t.type+"-area",{key:t.slug,tag:"component",attrs:{name:t.name,slug:t.slug}})}),t._v(" "),r("p",{staticClass:"beian"},[t._v("\n      互联网 ICP 备案：沪 ICP 备 17050785 号 - 1\n    ")])],2),t._v(" "),r("div",{staticClass:"only-h5"},[r("div",{staticClass:"main-content"},[r("VSwitcher",{attrs:{headers:t.tags,"anchor-padding":16,"fixed-top":50},on:{change:t.handleTabSwitch}},t._l(t.tags,function(e,o){return r("FlowLoader",{key:e.slug,ref:"loader",refInFor:!0,attrs:{slot:""+o,func:"getTagFlows",type:"seenIds",query:{$axios:t.$axios,slug:e.slug,take:10,changing:"slug",time:"3-day",sort:"active"},callback:t.handlePatch},slot:""+o,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{staticClass:"pin-list"},t._l(n,function(t){return r("PinArticle",{key:t.slug,attrs:{item:t}})}),1)}}],null,!0)},[t._v(" "),r("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(324)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(325)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)}),1)],1)])])},[],!1,null,null,null));e.default=k.exports}}]);