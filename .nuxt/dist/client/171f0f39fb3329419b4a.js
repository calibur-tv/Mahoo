(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{313:function(t,e,n){},315:function(t,e,n){t.exports=JSON.parse('{"pin-article-pc-media":"pin-article-pc-media_EdOoY","pinArticlePcMedia":"pin-article-pc-media_EdOoY","desc":"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d","pinArticlePc":"pin-article-pc_n9l6d","title":"title_11AiS","badge":"badge_33AUe","link":"link_2zXb9","area":"area_1BjFz","media":"media_2oWmK","text":"text_2wAMb","music":"music_3Ur6b","video":"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp","pinArticleH5":"pin-article-h5_2Chnp","user":"user_1ugeY","intro":"intro_3P9uJ","skeleton-loading":"skeleton-loading_LpB2j","skeletonLoading":"skeleton-loading_LpB2j","skeleton":"skeleton_3OUSt"}')},318:function(t,e,n){},319:function(t,e,n){t.exports=JSON.parse('{"title":"title_1yLHa","ic-sex":"ic-sex_19eCo","icSex":"ic-sex_19eCo","ic-level":"ic-level_3KuJr","icLevel":"ic-level_3KuJr","ic-title":"ic-title_Uq8in","icTitle":"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd","skeletonLoading":"skeleton-loading_12Xrd","skeleton":"skeleton_2qRlz"}')},321:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},323:function(t,e,n){"use strict";var l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(324),n(11)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)}),[],!1,null,null,null);e.a=component.exports},324:function(t,e,n){"use strict";var l=n(313);n.n(l).a},328:function(t,e,n){"use strict";var l=n(315),r=n.n(l);e.default=r.a},330:function(t,e,n){"use strict";var l={name:"PinArticle",mixins:[n(321).a]},r=n(328),o=n(11);var component=Object(o.a)(l,(function(){var t,e=this,n=e.$createElement,l=e._self._c||n;return l("li",{class:e.$style["pin-article"]},[l("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e.item.media&&e.item.media.banner?l("header",{style:{paddingTop:e.item.media.banner.height/e.item.media.banner.width*100+"%"}},[l("img",{attrs:{src:e.$resize(e.item.media.banner.url,{width:400,mode:2})}})]):e._e(),e._v(" "),l("main",[l("div",{class:e.$style.user},[e.showUser?l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),l("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1),e._v(" "),l("span",{class:e.$style.title,domProps:{innerHTML:e._s(e.item.title.text)}})]),e._v(" "),e.item.intro?l("footer",[l("p",{class:e.$style.intro,domProps:{innerHTML:e._s(e.item.intro)}})]):e._e()]),e._v(" "),l("div",{staticClass:"only-pc",class:[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)]},[l("h2",{class:e.$style.title},[l("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),e.showZone?l("div",{class:e.$style.area},[e.item.area?l("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?l("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._v(" "),l("p",{staticClass:"oneline",class:e.$style.link},[l("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{innerHTML:e._s(e.item.title.text)}})],1)]),e._v(" "),l("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?l("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?l("div",{class:e.$style.video},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?l("div",{class:e.$style.music},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),l("div",{class:e.$style.text},[l("i",{staticClass:"iconfont ic-video"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-camera"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),l("div",{class:e.$style.desc},[l("main",[l("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),l("footer",[e.showUser?l("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),l("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},331:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},332:function(t,e,n){t.exports=n.p+"img/3251725.png"},334:function(t,e,n){"use strict";var l={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(n(336),n(337)),o=n(11);var component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix oneline"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,(function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})}))],2):n("NLink",{staticClass:"user-nickname active",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,(function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})}))],2)],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},336:function(t,e,n){"use strict";var l=n(318);n.n(l).a},337:function(t,e,n){"use strict";var l=n(319),r=n.n(l);e.default=r.a},377:function(t,e,n){t.exports=JSON.parse('{"tag-search-item-pc":"tag-search-item-pc_27u_h","tagSearchItemPc":"tag-search-item-pc_27u_h","poster":"poster_3Y-JX","content":"content_3Wm6c","title":"title_I7vrW","intro":"intro_19T3p","tag-search-item-h5":"tag-search-item-h5_Wq3Nu","tagSearchItemH5":"tag-search-item-h5_Wq3Nu","skeleton-loading":"skeleton-loading_3fbDj","skeletonLoading":"skeleton-loading_3fbDj","skeleton":"skeleton_1B5BV"}')},378:function(t,e,n){t.exports=JSON.parse('{"user-search-item-pc":"user-search-item-pc_26Tuc","userSearchItemPc":"user-search-item-pc_26Tuc","poster":"poster_GQrUb","content":"content_2b0D0","title":"title_2czgk","badge":"badge_2aCNk","intro":"intro_1OUEs","user-search-item-h5":"user-search-item-h5_3qxE0","userSearchItemH5":"user-search-item-h5_3qxE0","skeleton-loading":"skeleton-loading_3TDI_","skeletonLoading":"skeleton-loading_3TDI_","skeleton":"skeleton_37PC-"}')},379:function(t,e,n){},513:function(t,e,n){"use strict";var l=n(377),r=n.n(l);e.default=r.a},514:function(t,e,n){"use strict";var l=n(378),r=n.n(l);e.default=r.a},515:function(t,e,n){"use strict";var l=n(379);n.n(l).a},647:function(t,e,n){"use strict";n.r(e);var l=n(375),r=n.n(l),o=n(179),c=n(330),m={name:"TagSearchItem",props:{item:{type:Object,required:!0}}},_=n(513),d=n(11);var v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-search-item"]},[n("div",{staticClass:"only-pc",class:t.$style["tag-search-item-pc"]},[n("NLink",{class:t.$style.poster,attrs:{to:t.$alias.tag(t.item.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.avatar,width:105,height:105,radius:"5px"}})],1),t._v(" "),n("div",{class:t.$style.content},[n("h3",{class:t.$style.title},[n("span",[t._v("分区")]),t._v(" "),n("NLink",{staticClass:"fade-link oneline",attrs:{to:t.$alias.tag(t.item.slug),target:"_blank"},domProps:{innerHTML:t._s(t.item.name)}})],1),t._v(" "),n("p",{class:t.$style.intro,domProps:{textContent:t._s(t.item.intro)}}),t._v(" "),n("footer",[n("span",[t._v("帖子数："+t._s(t.item.pin_count||0))]),t._v(" "),n("span",[t._v("关注数："+t._s(t.item.seen_user_count||0))])])])],1),t._v(" "),n("NLink",{staticClass:"only-h5",class:t.$style["tag-search-item-h5"],attrs:{to:t.$alias.tag(t.item.slug)}},[n("VImg",{class:t.$style.poster,attrs:{src:t.item.avatar,width:80,height:80,radius:"5px"}}),t._v(" "),n("div",{class:t.$style.content},[n("h3",{class:t.$style.title},[n("span",[t._v("分区")]),t._v(" "),n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.item.name)}})]),t._v(" "),n("p",{class:t.$style.intro,domProps:{textContent:t._s(t.item.intro)}}),t._v(" "),n("footer",[n("span",[t._v("帖子数："+t._s(t.item.pin_count||0))]),t._v(" "),n("span",[t._v("关注数："+t._s(t.item.seen_user_count||0))])])])],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null).exports,h=n(323),f=n(334),y={name:"UserSearchItem",components:{UserAvatar:h.a,UserNickname:f.a},props:{item:{type:Object,required:!0}}},k=n(514);var $=Object(d.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["user-search-item"]},[n("div",{staticClass:"only-pc",class:t.$style["user-search-item-pc"]},[n("UserAvatar",{class:t.$style.poster,attrs:{size:105,user:t.item}}),t._v(" "),n("div",{class:t.$style.content},[n("h3",{class:t.$style.title},[n("span",{class:t.$style.badge},[t._v("用户")]),t._v(" "),n("UserNickname",{attrs:{user:t.item}})],1),t._v(" "),n("p",{class:t.$style.intro,domProps:{textContent:t._s(t.item.signature)}}),t._v(" "),n("footer",[n("span",[t._v("粉丝数："+t._s(t.item.followers_count||0))]),t._v(" "),n("span",[t._v("关注数："+t._s(t.item.followers_count||0))])])])],1),t._v(" "),n("NLink",{staticClass:"only-h5",class:t.$style["user-search-item-h5"],attrs:{to:t.$alias.user(t.item.slug)}},[n("UserAvatar",{class:t.$style.poster,attrs:{size:80,user:t.item}}),t._v(" "),n("div",{class:t.$style.content},[n("h3",{class:t.$style.title},[n("span",{class:t.$style.badge},[t._v("用户")]),t._v(" "),n("UserNickname",{attrs:{user:t.item}})],1),t._v(" "),n("p",{class:t.$style.intro,domProps:{textContent:t._s(t.item.signature)}}),t._v(" "),n("footer",[n("span",[t._v("粉丝数："+t._s(t.item.followers_count||0))]),t._v(" "),n("span",[t._v("关注数："+t._s(t.item.followers_count||0))])])])],1)],1)}),[],!1,(function(t){this.$style=k.default.locals||k.default}),null,null).exports,C={name:"Search",layout:"web",components:{ElPagination:r.a,VSearch:o.a,PinItem:c.a,TagItem:v,UserItem:$},data(){return{selectedType:this.$route.query.type||"all",words:this.$route.query.q}},computed:{query(){return{$axios:this.$axios,type:this.selectedType,q:this.words}}},watch:{$route(){this.$refs.loader&&this.$refs.loader.initData()}},methods:{handleJump(t){this.$refs.loader.jump(t)}}},x=(n(515),Object(d.a)(C,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"search"}},[l("ElRow",{staticClass:"container"},[l("div",{staticClass:"search-panel"},[l("div",{staticClass:"before only-pc"},[l("img",{attrs:{src:"https://file.calibur.tv/logo.png",alt:"logo"}}),t._v(" "),l("span",[t._v("搜索")])]),t._v(" "),l("div",{staticClass:"v-search"},[l("VSearch",{attrs:{type:t.selectedType},model:{value:t.words,callback:function(e){t.words=e},expression:"words"}},[l("template",{slot:"submit-btn"},[l("i",{staticClass:"iconfont ic-search"}),t._v(" "),l("span",{staticClass:"only-pc"},[t._v("搜索")])])],2)],1)])]),t._v(" "),l("ElRow",[l("ElCol",{staticClass:"only-pc",attrs:{span:6}},[l("br")]),t._v(" "),l("ElCol",{attrs:{span:12,xs:24}},[l("FlowLoader",{ref:"loader",attrs:{func:"getMixinSearch",type:"page",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return l("ul",{staticClass:"flow-list"},t._l(n,(function(t){return l(t.type+"-item",{key:t.data.slug,tag:"component",attrs:{item:t.data}})})),1)}},{key:"footer",fn:function(e){var source=e.source;return l("footer",{},[l("ElPagination",{attrs:{layout:"prev, pager, next, jumper",total:source.total,"page-size":10,background:!0,"current-page":source.page,"hide-on-single-page":!0,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleJump}})],1)}}])},[t._v(" "),l("template",{slot:"nothing"},[l("img",{attrs:{src:n(331)}}),t._v(" "),l("p",[t._v("这里什么都没有")])]),t._v(" "),l("template",{slot:"error"},[l("img",{attrs:{src:n(332)}}),t._v(" "),l("p",[t._v("遇到错误了，点击重试")])])],2)],1),t._v(" "),l("ElCol",{staticClass:"only-pc",attrs:{span:6}},[l("br")])],1)],1)}),[],!1,null,null,null));e.default=x.exports}}]);