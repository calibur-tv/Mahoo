(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{319:function(e,t,v){},321:function(e,t,v){},322:function(e,t,v){e.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},323:function(e,t,v){"use strict";v(194);var _={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},n=(v(324),v(16)),component=Object(n.a)(_,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return e.disabled?v("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[v("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):v("NLink",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[v("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)}),[],!1,null,null,null);t.a=component.exports},324:function(e,t,v){"use strict";var _=v(319);v.n(_).a},333:function(e,t,v){"use strict";v(194);var _={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},n=(v(336),v(337)),r=v(16);var component=Object(r.a)(_,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"clearfix oneline"},[e.disabled?v("div",{staticClass:"user-nickname"},[v("div",{staticClass:"nickname"},[v("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?v("span",{class:e.$style.title},[v("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?v("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,(function(t,_){return v("span",{key:_,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})}))],2):v("NLink",{staticClass:"user-nickname active",attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[v("div",{staticClass:"nickname"},[v("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?v("span",{class:e.$style.title},[v("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?v("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,(function(t,_){return v("span",{key:_,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})}))],2)],1)}),[],!1,(function(e){this.$style=n.default.locals||n.default}),null,null);t.a=component.exports},336:function(e,t,v){"use strict";var _=v(321);v.n(_).a},337:function(e,t,v){"use strict";var _=v(322),n=v.n(_);t.default=n.a},421:function(e,t,v){},422:function(e,t,v){},423:function(e,t,v){},556:function(e,t,v){"use strict";var _=v(421);v.n(_).a},557:function(e,t,v){"use strict";var _=v(422);v.n(_).a},558:function(e,t,v){"use strict";var _=v(423);v.n(_).a},663:function(e,t,v){"use strict";v.r(t);v(62);var _=v(323),n=v(333),r={name:"PinRecommendedItem",components:{UserAvatar:_.a,UserNickname:n.a},props:{item:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=(v(556),v(16)),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"pin-rec-item"},[v("div",{staticClass:"header"},[v("NLink",{attrs:{to:"/app/user?slug="+e.item.author.slug}},[v("UserAvatar",{attrs:{disabled:"",user:e.item.author,size:30}})],1),e._v(" "),v("NLink",{attrs:{to:"/app/user?slug="+e.item.author.slug}},[v("UserNickname",{attrs:{disabled:"",user:e.item.author}})],1)],1),e._v(" "),v("div",{staticClass:"content"},[v("NLink",{attrs:{to:"/app/pin?slug="+e.item.slug}},[v("div",{staticClass:"text",domProps:{innerHTML:e._s(e.item.intro)}}),e._v(" "),e.item.media?v("div",{staticClass:"media"},[e.item.media.image_count?[1===e.item.media.image_count?v("div",{staticClass:"image-1"},[v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[0].url,{width:200,mode:2})+")"}},["image/gif"===e.item.media.images[0].mime?v("div",{staticClass:"badge"},[v("span",[e._v("GIF")])]):e._e()])]):2===e.item.media.image_count?v("div",{staticClass:"image-2"},[v("div",{staticClass:"wrap"},[v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[0].url,{width:200,mode:2})+")"}},["image/gif"===e.item.media.images[0].mime?v("div",{staticClass:"badge"},[v("span",[e._v("GIF")])]):e._e()]),e._v(" "),v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[1].url,{width:200,mode:2})+")"}},["image/gif"===e.item.media.images[1].mime?v("div",{staticClass:"badge"},[v("span",[e._v("GIF")])]):e._e()])])]):v("div",{staticClass:"image-3"},[v("div",{staticClass:"wrap"},[v("div",{staticClass:"img big",style:{backgroundImage:"url("+e.$resize(e.item.media.images[0].url,{width:300,mode:2})+")"}},["image/gif"===e.item.media.images[0].mime?v("div",{staticClass:"badge"},[v("span",[e._v("GIF")])]):e._e()]),e._v(" "),v("div",{staticClass:"small"},[v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[1].url,{width:150,mode:2})+")"}},["image/gif"===e.item.media.images[1].mime?v("div",{staticClass:"badge"},[v("span",[e._v("GIF")])]):e._e()]),e._v(" "),v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[2].url,{width:150,mode:2})+")"}},[e.item.media.image_count-3>0?v("div",{staticClass:"badge"},[v("i",{staticClass:"el-icon-picture-outline"}),e._v(" "),v("span",[e._v("+"+e._s(e.item.media.image_count-3))])]):"image/gif"===e.item.media.images[2].mime?v("div",{staticClass:"badge"},[v("span",[e._v("GIF")])]):e._e()])])])])]:e._e()],2):e._e()]),e._v(" "),v("div",{staticClass:"zone oneline"},[e.item.area?v("NLink",{attrs:{to:"/app/zone?slug="+e.item.area.slug},domProps:{textContent:e._s(e.item.area.name)}}):e._e(),e._v(" "),e.item.topic?v("NLink",{attrs:{to:"/app/zone?slug="+e.item.topic.slug},domProps:{textContent:e._s(e.item.topic.name)}}):e._e(),e._v(" "),e.item.notebook?v("NLink",{attrs:{to:"/app/zone?slug="+e.item.notebook.slug},domProps:{textContent:e._s(e.item.notebook.name)}}):e._e()],1)],1),e._v(" "),v("div",{staticClass:"footer"},[v("div",[v("i",{staticClass:"iconfont ic-browse"}),e._v(" "),v("span",{domProps:{textContent:e._s(e.item.visit_count)}})]),e._v(" "),v("div",[v("i",{staticClass:"iconfont ic-message"}),e._v(" "),v("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),v("div",[v("i",{staticClass:"iconfont ic-good"}),e._v(" "),v("span",{domProps:{textContent:e._s(e.item.like_count)}})])])])}),[],!1,null,null,null).exports,c={name:"Refresher",data:function(){return{height:0,translate:!1,refreshing:!1}},computed:{style:function(){return this.refreshing?{height:"100px"}:{height:"".concat(this.height/2+Math.sqrt(this.height),"px")}}},methods:{start:function(e){this.translate=!1,this.height=e},next:function(){this.translate=!0,this.height<100?this.height=0:(this.height=100,this.refreshing=!0,this.$emit("refresh"))},end:function(){var e=this;this.height=0,setTimeout((function(){e.refreshing=!1}),500)},refresh:function(){this.refreshing||(this.refreshing=!0,this.translate=!0,this.height=100,this.$emit("refresh"))}}},d=(v(557),Object(l.a)(c,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"refresher",class:{translate:e.translate,refreshing:e.refreshing},style:e.style},[e.refreshing?e._e():[v("br"),e._v(" "),v("i",{staticClass:"el-icon-bottom",class:{rotate:e.height>=100}}),e._v(" "),v("p",{domProps:{textContent:e._s(e.height<100?"下拉刷新":"松开刷新")}})]],2)}),[],!1,null,null,null).exports),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="0123456789".replace(e,"");return t[Math.floor(Math.random()*t.length)]},h={name:"AppHome",layout:"app",components:{PinRecommendedItem:o,Refresher:d},data:function(){return{activeIndex:1,randId:m(),newRandId:""}},mounted:function(){this.watchRefresh()},methods:{handleSwitch:function(e){this.activeIndex=e},watchRefresh:function(){var e=this;this.$channel.$on("main-tab-refresh",(function(t){var v,_,n,r,l,element,o,c,d,m,time,h;0===t&&(1===e.activeIndex&&(e.$refs.refresher&&e.$refs.refresher.refresh(),e.$refs.scroller&&(v=0,_=100,n=e.$refs.scroller.$el,l=0,element=n||window,o=n?n.scrollTop:window.scrollY,c=v||0,d=_||2e3,m=r||"easeOutSine",time=Math.max(.1,Math.min(Math.abs(o-c)/d,.8)),h={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}},element.requestAnimFrame||(element.requestAnimFrame=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}).bind(window)),function e(){var p=(l+=1/60)/time,t=h[m](p);p<1?(element.requestAnimFrame(e),element.scrollTo(0,o+(c-o)*t)):element.scrollTo(0,c)}())))}))},refreshMove:function(e){var t=e.offset;this.$refs.refresher.start(t)},refreshEnd:function(){this.$refs.refresher.next()},handleRefresh:function(){this.newRandId=m(this.randId),this.$store.dispatch("flow/initData",{func:"getFlowRecommendedIndex",type:"seenIds",query:{__refresh__:!0,$axios:this.$axios,changing:"slug",rand_id:this.newRandId},callback:this.handleCallback})},handleCallback:function(e){var t=this,v=e.refresh,data=e.data;v&&setTimeout((function(){t.randId=t.newRandId,t.$toast.info("".concat(data.result.length," 条新内容")),t.$refs.refresher&&t.$refs.refresher.end()}),1e3)}}},f=(v(558),Object(l.a)(h,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{attrs:{id:"app-found"}},[v("VSwitcher",{attrs:{headers:["关注","推荐","漫友圈"],sticky:"",swipe:"",animated:"","fixed-top":0,"default-index":e.activeIndex,"anchor-padding":10},on:{change:e.handleSwitch}},[v("VScroller",{attrs:{slot:"0"},slot:"0"},[v("p",[e._v("start")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("end")])]),e._v(" "),v("VScroller",{ref:"scroller",attrs:{slot:"1"},on:{refresh:e.refreshMove,"refresh-end":e.refreshEnd},slot:"1"},[v("Refresher",{ref:"refresher",on:{refresh:e.handleRefresh}}),e._v(" "),v("FlowLoader",{ref:"recommended",attrs:{func:"getFlowRecommendedIndex",type:"seenIds",query:{$axios:e.$axios,changing:"slug",rand_id:e.randId},callback:e.handleCallback},scopedSlots:e._u([{key:"default",fn:function(t){var _=t.flow;return v("ul",{},e._l(_,(function(e){return v("PinRecommendedItem",{key:e.slug,attrs:{item:e}})})),1)}}])})],1),e._v(" "),v("VScroller",{attrs:{slot:"2"},slot:"2"},[v("p",[e._v("start")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("end")])]),e._v(" "),v("template",{slot:"header-after"},[v("NLink",{attrs:{to:"/app/search"}},[v("i",{staticClass:"iconfont ic-search"})])],1)],2)],1)}),[],!1,null,null,null));t.default=f.exports}}]);