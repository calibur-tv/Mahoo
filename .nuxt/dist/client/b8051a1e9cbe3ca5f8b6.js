(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{278:function(t,e,n){t.exports={"pin-article-pc-media":"pin-article-pc-media_EdOoY",pinArticlePcMedia:"pin-article-pc-media_EdOoY",desc:"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d",pinArticlePc:"pin-article-pc_n9l6d",title:"title_11AiS",badge:"badge_33AUe",link:"link_2zXb9",area:"area_1BjFz",media:"media_2oWmK",text:"text_2wAMb",music:"music_3Ur6b",video:"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp",pinArticleH5:"pin-article-h5_2Chnp",user:"user_1ugeY",intro:"intro_3P9uJ","skeleton-loading":"skeleton-loading_LpB2j",skeletonLoading:"skeleton-loading_LpB2j",skeleton:"skeleton_3OUSt"}},283:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},296:function(t,e,n){"use strict";var r=n(278),l=n.n(r);e.default=l.a},300:function(t,e,n){"use strict";var r={name:"PinArticle",mixins:[n(283).a]},l=n(296),o=n(9);var component=Object(o.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("li",{class:e.$style["pin-article"]},[r("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e.item.media&&e.item.media.banner?r("header",{style:{paddingTop:e.item.media.banner.height/e.item.media.banner.width*100+"%"}},[r("img",{attrs:{src:e.$resize(e.item.media.banner.url,{width:400,mode:2})}})]):e._e(),e._v(" "),r("main",[r("div",{class:e.$style.user},[e.showUser?r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1),e._v(" "),r("span",{class:e.$style.title,domProps:{innerHTML:e._s(e.item.title.text)}})]),e._v(" "),e.item.intro?r("footer",[r("p",{class:e.$style.intro,domProps:{innerHTML:e._s(e.item.intro)}})]):e._e()]),e._v(" "),r("div",{staticClass:"only-pc",class:[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)]},[r("h2",{class:e.$style.title},[r("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),e.showZone?r("div",{class:e.$style.area},[e.item.area?r("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?r("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._v(" "),r("p",{staticClass:"oneline",class:e.$style.link},[r("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{innerHTML:e._s(e.item.title.text)}})],1)]),e._v(" "),r("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?r("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?r("div",{class:e.$style.video},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?r("div",{class:e.$style.music},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),r("div",{class:e.$style.text},[r("i",{staticClass:"iconfont ic-video"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-camera"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),r("div",{class:e.$style.desc},[r("main",[r("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),r("footer",[e.showUser?r("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.a=component.exports},301:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},302:function(t,e,n){t.exports=n.p+"img/3251725.png"},459:function(t,e,n){},460:function(t,e,n){},461:function(t,e,n){},462:function(t,e,n){},463:function(t,e,n){},464:function(t,e,n){},588:function(t,e,n){"use strict";var r=n(459);n.n(r).a},589:function(t,e,n){"use strict";var r=n(460);n.n(r).a},590:function(t,e,n){"use strict";var r=n(461);n.n(r).a},591:function(t,e,n){"use strict";var r=n(462);n.n(r).a},592:function(t,e,n){"use strict";var r=n(463);n.n(r).a},593:function(t,e,n){"use strict";var r=n(464);n.n(r).a},604:function(t,e,n){"use strict";n.r(e);var r=n(2),l={name:"PinPoster",props:{item:{type:Object,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},o=(n(588),n(9)),c={name:"PinGridList",components:{PinPoster:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"pin-poster"},[n("NLink",{staticClass:"poster",attrs:{target:"_blank",to:t.$alias.pin(t.item.slug)}},[t.item.media&&t.item.media.banner?n("VImg",{attrs:{src:t.item.media.banner.url,width:"160",height:"100"}}):n("VImg",{staticClass:"default-poster",attrs:{src:"default-poster",width:"160",height:"100"}}),t._v(" "),n("div",{staticClass:"mask"},[n("div",[n("i",{staticClass:"iconfont ic-good_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.like_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-mark_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.mark_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-reward_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.reward_count)}})]),t._v(" "),n("p",{staticClass:"author oneline",domProps:{innerHTML:t._s(t.item.author.nickname)}})])],1),t._v(" "),n("NLink",{staticClass:"user",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,width:"45",height:"45"}})],1),t._v(" "),n("div",{staticClass:"text"},[n("NLink",{staticClass:"title fade-link",attrs:{target:"_blank",to:t.$alias.pin(t.item.slug)},domProps:{innerHTML:t._s(t.item.title.text)}}),t._v(" "),n("div",{staticClass:"mask"},[n("div",[n("i",{staticClass:"iconfont ic-browse_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.visit_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-message_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.comment_count)}})])])],1)],1)}),[],!1,null,null,null).exports},props:{sort:{type:String,required:!0},slug:{type:String,required:!0}},methods:{initData(){this.$refs.loader&&this.$refs.loader.initData()},handlePatch(t){var{data:data}=t;this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}},d=(n(589),Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FlowLoader",{ref:"loader",staticClass:"pin-grid-list",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",auto:0,query:{$axios:t.$axios,slug:t.slug,take:10,changing:"slug",time:"3-day",sort:t.sort},callback:t.handlePatch},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,(function(t){return r("PinPoster",{key:t.slug,attrs:{item:t}})})),1)}}])},[t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(301)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(302)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)}),[],!1,null,null,null).exports),m={name:"PinRanker",props:{index:{type:Number,required:!0},item:{type:Object,required:!0},show:{type:Boolean,default:!1}}},_=(n(590),{name:"PinRankList",components:{PinRanker:Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"pin-ranker",class:[t.show?"show":"hide"]},[n("div",{staticClass:"rank",class:{highlight:t.index<3},domProps:{textContent:t._s(t.index+1)}}),t._v(" "),n("NLink",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"content",attrs:{to:t.$alias.pin(t.item.slug),target:"_blank"}},[n("div",{staticClass:"poster"},[n("VImg",{attrs:{src:t.item.media&&t.item.media.banner?t.item.media.banner.url:"default-poster",width:"80",height:"50"}})],1),t._v(" "),n("div",{staticClass:"text"},[n("p",{domProps:{innerHTML:t._s(t.item.title.text)}}),t._v(" "),n("div",[t._v("综合评分："+t._s(+t.item.visit_count+2*t.item.comment_count+2*t.item.like_count+2*t.item.mark_count+5*t.item.reward_count))])])]),t._v(" "),n("NLink",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"content oneline",attrs:{to:t.$alias.pin(t.item.slug),target:"_blank"},domProps:{innerHTML:t._s(t.item.title.text)}})],1)}),[],!1,null,null,null).exports},props:{slug:{type:String,required:!0},time:{type:String,required:!0},take:{type:Number,default:10}},data:()=>({defaultActive:0}),methods:{initData(){this.$refs.loader&&this.$refs.loader.initData()},handleMove(t){this.defaultActive=t}}}),h=(n(591),{name:"GridArea",components:{PinGridList:d,PinRankList:Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{ref:"loader",staticClass:"pin-rank-list",attrs:{func:"getTagFlows",type:"seenIds",auto:0,query:{$axios:t.$axios,slug:t.slug,take:t.take,changing:"slug",time:t.time,sort:"hottest"},"cache-timeout":3600},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow,l=e.count;return n("ul",{on:{mouseleave:function(e){t.defaultActive=0}}},[t._l(r,(function(e,r){return n("PinRanker",{key:e.slug,attrs:{index:r,item:e,show:t.defaultActive===r},nativeOn:{mouseenter:function(e){return t.handleMove(r)}}})})),t._v(" "),l?n("NLink",{staticClass:"more",attrs:{to:t.$alias.tag(t.slug),target:"_blank"}},[n("span",[t._v("查看更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t._e()],2)}}])})}),[],!1,null,null,null).exports},props:{slug:{type:String,required:!0},name:{type:String,required:!0}},computed:{headers:()=>["有新动态","最新投稿"]},methods:{switchContent(t){1===t&&this.$refs.newest.initData()},switchRank(t){1===t&&this.$refs.rank7.initData()},handle(){this.$refs.rank3.initData(),this.$refs.active.initData()}}}),v=(n(592),{name:"Homepage",layout:"web",components:{GridArea:Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"lazyload",rawName:"v-lazyload:pc",value:t.handle,expression:"handle",arg:"pc"}],staticClass:"area-wrap grid-area"},[n("div",{staticClass:"area-right"},[n("VSwitcher",{attrs:{headers:["三日","一周"],"header-trigger":"hover",animated:!0},on:{change:t.switchRank}},[n("template",{slot:"header-before"},[t._v("\n        排行\n      ")]),t._v(" "),n("template",{slot:"0"},[n("PinRankList",{ref:"rank3",attrs:{slug:t.slug,time:"3-day",take:7}})],1),t._v(" "),n("template",{slot:"1"},[n("PinRankList",{ref:"rank7",attrs:{slug:t.slug,time:"7-day",take:7,auto:!1}})],1)],2)],1),t._v(" "),n("div",{staticClass:"area-left"},[n("VSwitcher",{attrs:{headers:t.headers},on:{change:t.switchContent}},[n("template",{slot:"header-before"},[n("NLink",{staticClass:"title fade-link",attrs:{to:t.$alias.tag(t.slug),target:"_blank"},domProps:{textContent:t._s(t.name)}})],1),t._v(" "),n("template",{slot:"header-after"},[n("NLink",{staticClass:"more",attrs:{to:t.$alias.tag(t.slug),target:"_blank"}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})])],1),t._v(" "),n("template",{slot:"0"},[n("PinGridList",{ref:"active",attrs:{slug:t.slug,sort:"active"}})],1),t._v(" "),n("template",{slot:"1"},[n("PinGridList",{ref:"newest",attrs:{slug:t.slug,sort:"newest",auto:!1}})],1)],2)],1)])}),[],!1,null,null,null).exports,PinArticle:n(300).a},computed:{tags(){return this.$store.state.global.hottest_tags}},asyncData:t=>Object(r.a)((function*(){var{store:e}=t;yield e.dispatch("global/getHottestTags")}))(),methods:{handleTabSwitch(t){this.$refs.loader[t]&&this.$refs.loader[t].initData()},handlePatch(t){var{data:data}=t;this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}}),f=(n(593),Object(o.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"homepage"}},[r("div",{staticClass:"only-pc container"},[t._l(t.tags,(function(t){return r(t.type+"-area",{key:t.slug,tag:"component",attrs:{name:t.name,slug:t.slug}})})),t._v(" "),r("p",{staticClass:"beian"},[t._v("\n      互联网 ICP 备案：沪 ICP 备 17050785 号 - 1\n    ")])],2),t._v(" "),r("div",{staticClass:"only-h5"},[r("div",{staticClass:"main-content"},[r("VSwitcher",{attrs:{headers:t.tags,"anchor-padding":5},on:{change:t.handleTabSwitch}},t._l(t.tags,(function(e,l){return r("FlowLoader",{key:e.slug,ref:"loader",refInFor:!0,attrs:{slot:""+l,func:"getTagFlows",type:"seenIds",query:{$axios:t.$axios,slug:e.slug,take:10,changing:"slug",time:"3-day",sort:"active"},callback:t.handlePatch},slot:""+l,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{staticClass:"pin-list"},t._l(n,(function(t){return r("PinArticle",{key:t.slug,attrs:{item:t}})})),1)}}],null,!0)},[t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(301)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(302)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)})),1)],1)])])}),[],!1,null,null,null));e.default=f.exports}}]);