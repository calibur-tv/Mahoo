exports.ids=[39],exports.modules={100:function(t,e,n){t.exports=n.p+"img/3251725.png"},101:function(t,e,n){"use strict";n.r(e);var l=n(82),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},105:function(t,e,n){"use strict";var l={name:"SkeletonArticle",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},r=n(1);var component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-article"},[this._ssrNode('<div class="only-pc"><div class="header"><div class="title gray"></div> <div class="area gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div> <div class="metas"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div></div></div> <div class="only-h5"><div class="header"><div class="avatar gray"></div> <div class="title gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div></div></div> <div class="footer"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div>')])},[],!1,function(t){var e=n(101);e.__inject__&&e.__inject__(t)},null,"53cbe552");e.a=component.exports},111:function(t,e,n){"use strict";n.r(e);var l=n(86),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},112:function(t,e,n){"use strict";n.r(e);var l=n(87),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},113:function(t,e,n){"use strict";n.r(e);var l=n(88),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},131:function(t,e,n){"use strict";function l(t,e){const n=e?"scrollTop":"scrollLeft";let l=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof l&&(l=window.document.documentElement[n]),l}var r={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){if(window.screen.width<789)return;const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,n=l(window,!0),r=function(element){const rect=element.getBoundingClientRect(),t=l(window,!0),e=l(window),n=window.document.body,r=n.clientTop||0,o=n.clientLeft||0;return{top:rect.top+t-r,left:rect.left+e-o}}(this.$el),o=window.innerHeight,c=this.$el.getElementsByTagName("div")[0].offsetHeight,d=!e||"resize"===t.type;r.top-this.top<n&&"top"===this.offsetType&&d?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${r.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):r.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),r.top+this.bottom+c>n+o&&"bottom"===this.offsetType&&d?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${r.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):r.top+this.bottom+c<n+o&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=n(111);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},132:function(t,e,n){"use strict";var l=n(57),r=n.n(l),o=n(56),c=n.n(o),d=n(105),m=n(95),h={name:"PinFlowList",components:{ElSelect:c.a,ElOption:r.a,PinArticle:m.a,SkeletonArticle:d.a},props:{slug:{type:String,required:!0},showArea:{type:Boolean,default:!0}},data:()=>({time:"3-day",sort:"active"}),computed:{sortOpts:()=>[{label:"热门",value:"active"},{label:"最新",value:"newest"},{label:"热榜",value:"hottest"}],timeOpts:()=>[{label:"3天内",value:"3-day"},{label:"7天内",value:"7-day"},{label:"30天内",value:"30-day"},{label:"全部",value:"all"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,time:this.time,take:10,changing:"slug"}}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()}))},changeTime(){this.$nextTick(()=>{this.$refs.loader.refresh()})},patchPin({data:data}){this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}},_=n(1);var component=Object(_.a)(h,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pin-flow-list"},[t._ssrNode('<ul class="sortable">',"</ul>",[t._ssrNode(t._ssrList(t.sortOpts,function(e){return"<li"+t._ssrClass(null,{"is-active":e.value===t.sort})+">"+t._ssrEscape(t._s(e.label))+"</li>"})+" "),"hottest"===t.sort?l("ElSelect",{attrs:{size:"mini"},on:{change:t.changeTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},t._l(t.timeOpts,function(t){return l("ElOption",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):t._e()],2),t._ssrNode(" "),l("FlowLoader",{ref:"loader",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",query:t.query,callback:t.patchPin},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return l("ul",{staticClass:"flows"},t._l(n,function(e){return l("PinArticle",{key:e.slug,attrs:{"show-area":t.showArea,item:e}})}),1)}}])},[t._v(" "),l("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),l("template",{slot:"nothing"},[l("img",{attrs:{src:n(99)}}),t._v(" "),l("p",[t._v("这里什么都没有")])]),t._v(" "),l("template",{slot:"error"},[l("img",{attrs:{src:n(100)}}),t._v(" "),l("p",[t._v("遇到错误了，点击重试")])])],2)],2)},[],!1,function(t){var e=n(112);e.__inject__&&e.__inject__(t)},null,"d8539a20");e.a=component.exports},133:function(t,e,n){"use strict";var l={name:"TagHotList",components:{CreateTagBtn:n(90).a},props:{slug:{type:String,required:!0},title:{type:String,default:"热门分区"},list:{type:Array,required:!0}},computed:{isAdmin(){return this.$store.getters.isAdmin}},methods:{handleCreate(data){this.list.unshift(data),this.$toast.success("创建成功")}}},r=n(1);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length?n("div",{staticClass:"tag-hot-list"},[t._ssrNode('<h3 class="title only-pc">',"</h3>",[t._ssrNode("<span>"+t._ssrEscape(t._s(t.title))+"</span> "),t.isAdmin?n("CreateTagBtn",{attrs:{parent:t.slug},on:{create:t.handleCreate}},[n("i",{staticClass:"el-icon-plus fade-link"})]):t._e()],2),t._ssrNode(" "),t._ssrNode('<ul class="child-node">',"</ul>",t._l(t.list.slice(0,10),function(e){return t._ssrNode('<li class="node">',"</li>",[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("img",{attrs:{src:t.$resize(e.avatar,{width:50}),width:"50",height:"50",alt:e.name}}),t._v(" "),n("span",{staticClass:"only-pc",domProps:{textContent:t._s(e.name)}})])],1)}),0)],2):t._e()},[],!1,function(t){var e=n(113);e.__inject__&&e.__inject__(t)},null,"4c31d956");e.a=component.exports},134:function(t,e,n){"use strict";e.a={layout:"web",head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:`${t.name},${t.intro}`},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:()=>({tag:null,children:[]}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},158:function(t,e){},251:function(t,e,n){"use strict";n.r(e);var l=n(158),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},325:function(t,e,n){"use strict";n.r(e);var l=n(134),r=n(23),o=n(131),c=n(132),d=n(133),m={name:"ZoneTopic",components:{PinFlowList:c.a,TagHotList:d.a,Affix:o.a},mixins:[l.a],data:()=>({slug:"3p6"}),asyncData:({app:t,error:e})=>Object(r.d)(t,{slug:"3p6"}).then(data=>({...data})).catch(e),created(){},mounted(){},methods:{}},h=n(1);var component=Object(h.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"zone-topic"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{xs:24,span:5}},[e("Affix",{staticClass:"left-aside",attrs:{top:70}},[e("TagHotList",{attrs:{slug:this.slug,title:"热门话题",list:this.children}})],1)],1),this._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[e("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),e("ElCol",{attrs:{xs:24,span:5}},[e("br")])],1)],1)},[],!1,function(t){var e=n(251);e.__inject__&&e.__inject__(t)},null,"9a963c60");e.default=component.exports},80:function(t,e){t.exports={"pin-article-pc-media":"pin-article-pc-media_2mDHv",pinArticlePcMedia:"pin-article-pc-media_2mDHv",desc:"desc_2iLTt","pin-article-pc":"pin-article-pc_3EDYx",pinArticlePc:"pin-article-pc_3EDYx",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp","pin-article-h5":"pin-article-h5_2nBRB",pinArticleH5:"pin-article-h5_2nBRB",zone:"zone_2Cdiw","skeleton-loading":"skeleton-loading_h2GMS",skeletonLoading:"skeleton-loading_h2GMS",skeleton:"skeleton_3xDfV"}},82:function(t,e){},85:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}}},86:function(t,e){},87:function(t,e){},88:function(t,e){},90:function(t,e,n){"use strict";var l=n(23),r={name:"CreateTagBtn",props:{title:{type:String,default:"新建分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入名称",this.title,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(l.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},o=n(1),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._t("default",[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",{domProps:{textContent:this._s(this.title)}})])],2)},[],!1,null,null,"5cda1a3b");e.a=component.exports},92:function(t,e,n){"use strict";n.r(e);var l=n(80),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},95:function(t,e,n){"use strict";var l={name:"PinArticle",mixins:[n(85).a]},r=n(1);var component=Object(r.a)(l,function(){var t,e=this,n=e.$createElement,l=e._self._c||n;return l("li",{class:e.$style["pin-article"]},[l("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[l("header",{staticClass:"oneline"},[e.showUser?l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.title.text)}})],1),e._v(" "),l("main",[e.item.media?l("div",{class:e.$style.media},[e.item.media.first_video?l("div",{class:e.$style.video},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?l("div",{class:e.$style.music},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}})],1):e._e(),e._v(" "),l("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),l("footer",[e.showArea?l("span",{staticClass:"oneline",class:e.$style.zone},[e._v("\n        "+e._s(e.item.area?e.item.area.name:e.item.topic?e.item.topic.name:"")+"\n      ")]):e._e(),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.visit_count)}})])])]),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("only-pc",[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)])+">","</div>",[e._ssrNode("<h2"+e._ssrClass(null,e.$style.title)+">","</h2>",[l("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}}),e._ssrNode(" "),e.showArea?[e.item.area?l("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?l("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()]:e._e()],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("clearfix",e.$style.content)+">","</div>",[e.item.media?l("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?l("div",{class:e.$style.video},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?l("div",{class:e.$style.music},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),l("div",{class:e.$style.text},[l("i",{staticClass:"iconfont ic-video"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-camera"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.desc)+">","</div>",[e._ssrNode("<main><p>"+e._s(e.item.intro)+"</p></main> "),e._ssrNode("<footer>","</footer>",[e.showUser?l("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),l("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+e._ssrEscape(e._s(e.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+e._ssrEscape(e._s(e.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+e._ssrEscape(e._s(e.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+e._ssrEscape(e._s(e.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)},[],!1,function(t){var e=n(92);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1ffbcd38");e.a=component.exports},99:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"}};
//# sourceMappingURL=4d13d73e4dab58b31a97.js.map