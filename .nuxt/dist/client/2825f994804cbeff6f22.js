(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{311:function(t,e,n){t.exports={"pin-1-pc-media":"pin-1-pc-media_36tsQ",pin1PcMedia:"pin-1-pc-media_36tsQ",desc:"desc_2iLTt","pin-1-pc":"pin-1-pc_2vpWi",pin1Pc:"pin-1-pc_2vpWi",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp"}},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){"use strict";var o=n(311),l=n.n(o);e.default=l.a},319:function(t,e,n){"use strict";var o={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}},l={name:"PinArticle",mixins:[o]},c=n(317),r=n(18);var m={name:"PinFlowItem",components:{Type1:Object(r.a)(l,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("li",{class:e.$style["pin-1"]},[o("NLink",{staticClass:"only-h5",class:e.$style["pin-1-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e._v("\n    "+e._s(e.item.title.text)+"\n  ")]),e._v(" "),o("div",{staticClass:"only-pc",class:[e.$style["pin-1-pc"],(t={},t[e.$style["pin-1-pc-media"]]=e.item.media,t)]},[o("h2",{class:e.$style.title},[o("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}}),e._v(" "),e.showArea?[e.item.area?o("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?o("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()]:e._e()],2),e._v(" "),o("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?o("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?o("div",{class:e.$style.video},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?o("div",{class:e.$style.music},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}),e._v(" "),o("div",{class:e.$style.text},[o("i",{staticClass:"iconfont ic-video"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-camera"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),o("div",{class:e.$style.desc},[o("main",[o("p",{domProps:{textContent:e._s(e.item.intro)}})]),e._v(" "),o("footer",[e.showUser?o("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),o("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),o("div",[o("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)},[],!1,function(t){this.$style=c.default.locals||c.default},null,null).exports},mixins:[o],data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},h=Object(r.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("type-"+this.item.content_type,{tag:"component",attrs:{item:this.item,"show-user":this.showUser,"show-area":this.showArea,"secret-link":this.secretLink}}):this._e()},[],!1,null,null,null);e.a=h.exports},329:function(t,e,n){"use strict";var o=n(315);n.n(o).a},330:function(t,e,n){"use strict";var o=n(316);n.n(o).a},338:function(t,e,n){"use strict";n(189);function o(t,e){var n=e?"scrollTop":"scrollLeft",o=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof o&&(o=window.document.documentElement[n]),o}var l={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:function(){return{affix:!1,styles:{},slot:!1,slotStyle:{}}},computed:{offsetType:function(){var t="top";return this.bottom>=0&&(t="bottom"),t},classes:function(){return[{"v-affix":this.affix}]}},mounted:function(){var t=this,e=this._getScrollTarget();this.$utils.on(e,"scroll",this.handleScroll),this.$utils.on(e,"resize",this.handleScroll),this.$nextTick(function(){t.handleScroll({type:"scroll"})})},beforeDestroy:function(){var t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget:function(){var t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){var e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll:function(t){var e=this.affix,n=o(window,!0),l=function(element){var rect=element.getBoundingClientRect(),t=o(window,!0),e=o(window),n=window.document.body,l=n.clientTop||0,c=n.clientLeft||0;return{top:rect.top+t-l,left:rect.left+e-c}}(this.$el),c=window.innerHeight,r=this.$el.getElementsByTagName("div")[0].offsetHeight,m=!e||"resize"===t.type;l.top-this.top<n&&"top"===this.offsetType&&m?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:"".concat(this.top,"px"),left:"".concat(l.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):l.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),l.top+this.bottom+r>n+c&&"bottom"===this.offsetType&&m?(this.affix=!0,this.styles={bottom:"".concat(this.bottom,"px"),left:"".concat(l.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):l.top+this.bottom+r<n+c&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},c=(n(329),n(18)),component=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"point",class:this.classes,style:this.styles},[this._t("default")],2),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.slot,expression:"slot"}],style:this.slotStyle})])},[],!1,null,null,null);e.a=component.exports},339:function(t,e,n){"use strict";n(189);var o={name:"PinFlowList",components:{PinFlowItem:n(319).a},props:{slug:{type:String,required:!0},loop:{type:Number,default:0}},data:function(){return{time:"all",sort:"hottest"}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,loop:this.loop,time:this.time,take:10,changing:"slug"}}},watch:{},created:function(){},mounted:function(){},methods:{}},l=(n(330),n(18)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pin-flow-list"},[n("FlowLoader",{attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("ul",{staticClass:"flows"},t._l(o,function(e){return n("PinFlowItem",{key:e.slug,attrs:{"show-area":!!t.loop,item:e}})}),1)}}])})],1)},[],!1,null,null,null);e.a=component.exports},343:function(t,e,n){"use strict";n(33);e.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},data:function(){return{tag:null,parent:null,children:[]}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}}},370:function(t,e,n){},465:function(t,e,n){"use strict";var o=n(370);n.n(o).a},551:function(t,e,n){"use strict";n.r(e);var o=n(16),l=n(343),c=n(134),r=n(338),m=n(339),h={name:"ZoneGame",components:{Affix:r.a,PinFlowList:m.a},mixins:[l.a],data:function(){return{slug:"285"}},asyncData:function(t){var e=t.app,n=t.error;return Object(c.e)(e,{slug:"285"}).then(function(data){return Object(o.a)({},data)}).catch(n)},created:function(){},mounted:function(){},methods:{}},d=(n(465),n(18)),component=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{staticClass:"left-aside",attrs:{span:5}},[n("Affix",{attrs:{top:50}},[t.children.length?n("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return n("li",{key:e.slug,staticClass:"node"},[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("VImg",{attrs:{src:e.avatar,width:"32",height:"32",alt:e.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[n("PinFlowList",{attrs:{slug:t.slug,loop:2}})],1),t._v(" "),n("ElCol",{attrs:{span:5}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);