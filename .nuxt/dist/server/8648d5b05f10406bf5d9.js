exports.ids=[24],exports.modules={103:function(t,e,n){"use strict";var o=n(26),r={name:"CreateTagBtn",props:{title:{type:String,default:"新建分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入名称",this.title,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(o.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},l=n(1),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._t("default",[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",{domProps:{textContent:this._s(this.title)}})])],2)}),[],!1,null,null,"ed0a5c0a");e.a=component.exports},134:function(t,e){t.exports={notebook:"notebook_BLT0n",avatar:"avatar_1B6Ki",content:"content_GRaaJ","note-title":"note-title_322ba",noteTitle:"note-title_322ba",desc:"desc_2LjUO",meta:"meta_YNWVA","skeleton-loading":"skeleton-loading_3BHwz",skeletonLoading:"skeleton-loading_3BHwz",skeleton:"skeleton_21Nd2"}},135:function(t,e){t.exports={bangumi:"bangumi_27LZB",avatar:"avatar_1pux0",content:"content_3LQoH",name:"name_1kYyu",desc:"desc_ygyPf","skeleton-loading":"skeleton-loading_1aI5z",skeletonLoading:"skeleton-loading_1aI5z",skeleton:"skeleton_gzCKp"}},136:function(t,e){t.exports={game:"game_3Zz4J",name:"name_3l0-N","skeleton-loading":"skeleton-loading_3URmW",skeletonLoading:"skeleton-loading_3URmW",skeleton:"skeleton_1pKMc"}},137:function(t,e){t.exports={topic:"topic_-gkYU",name:"name_3XaYR","skeleton-loading":"skeleton-loading_23JMb",skeletonLoading:"skeleton-loading_23JMb",skeleton:"skeleton_RElLn"}},199:function(t,e,n){"use strict";n.r(e);var o=n(134),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},200:function(t,e,n){"use strict";n.r(e);var o=n(135),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},201:function(t,e,n){"use strict";n.r(e);var o=n(136),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},202:function(t,e,n){"use strict";n.r(e);var o=n(137),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},203:function(t,e){},242:function(t,e,n){"use strict";var o={name:"TopicItem",props:{item:{type:Object,required:!0}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.topic},[n("NLink",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"40",height:"40",alt:t.item.name}})],1),t._ssrNode(" "),t._ssrNode("<p"+t._ssrClass("oneline",t.$style.name)+">","</p>",[n("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1)],2)}),[],!1,(function(t){var e=n(202);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"2f580c9e");e.a=component.exports},244:function(t,e,n){"use strict";var o={name:"NotebookItem",props:{item:{type:Object,required:!0}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.notebook},[n("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"117",height:"88",alt:t.item.name}})],1),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[t._ssrNode('<div class="note-title oneline">',"</div>",[n("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._ssrNode(" <p"+t._ssrAttr("title",t.item.intro)+t._ssrClass("oneline",t.$style.desc)+">"+t._ssrEscape(t._s(t.item.intro||"暂无简介"))+"</p> <div"+t._ssrClass(null,t.$style.meta)+'><div><i class="iconfont ic-order_fill"></i> <span>'+t._ssrEscape("文章数："+t._s(t.item.pin_count||0))+"</span></div></div>")],2)],2)}),[],!1,(function(t){var e=n(199);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"4c798c8f");e.a=component.exports},246:function(t,e,n){"use strict";var o={name:"BangumiItem",props:{item:{type:Object,required:!0}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.bangumi},[n("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"110",height:"144",alt:t.item.name}})],1),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[t._ssrNode('<div class="oneline">',"</div>",[n("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._ssrNode(" <p"+t._ssrClass(null,t.$style.desc)+">"+t._ssrEscape(t._s(t.item.intro))+"</p>")],2)],2)}),[],!1,(function(t){var e=n(200);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"71a2a45b");e.a=component.exports},247:function(t,e,n){"use strict";var o={name:"GameItem",props:{item:{type:Object,required:!0}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.game},[n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"150",height:"150",alt:t.item.name}}),t._v(" "),n("p",{staticClass:"oneline fade-link",class:t.$style.name,domProps:{innerHTML:t._s(t.item.name)}})],1)],1)}),[],!1,(function(t){var e=n(201);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"19f64c26");e.a=component.exports},289:function(t,e,n){"use strict";n.r(e);var o=n(203),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},339:function(t,e,n){"use strict";n.r(e);var o=n(26),r=n(103),l=n(244),c=n(246),_=n(247),d=n(242),m={name:"UserEmotion",components:{CreateTagBtn:r.a,NotebookItem:l.a,BangumiItem:c.a,GameItem:_.a,TopicItem:d.a},props:{user:{type:Object,required:!0}},asyncData:({app:t,error:e,params:n})=>Object(o.a)(t,n).then(t=>({tags:t})).catch(e),data:()=>({tags:null}),computed:{isMine(){return this.$store.getters.isMine(this.user.slug)},TA(){return this.$utils.convertTA(this.user.sex,this.isMine)}},beforeMount(){this.batchPatch()},methods:{handleCreateNotebook(data){this.tags.notebook.unshift(data)},batchPatch(){let t=[];const e=[4,5,12,4];Object.keys(this.tags).forEach((n,o)=>{t=t.concat(this.tags[n].map(t=>t.slug).slice(0,e[o]))}),this.$axios.$get("v1/tag/batch_patch",{params:{slug:t.join(",")}}).then(data=>{Object.keys(this.tags).forEach(t=>{this.tags[t].forEach((e,n)=>{Object.keys(data).forEach(o=>{e.slug===o&&(this.$set(this.tags[t],n,Object.assign(e,data[o])),this.$refs[t][n].$forceUpdate())})})})}).catch(()=>{})}}},f=n(1);var component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags?n("div",{attrs:{id:"user-emotion"}},[t._ssrNode('<div class="block">',"</div>",[t._ssrNode('<div class="block-title">',"</div>",[n("NLink",{staticClass:"text",attrs:{to:"category/bangumi",append:""}},[n("span",{staticClass:"fade-link"},[t._v("看过的动漫")]),t._v(" "),t.tags.bangumi.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.bangumi.length)}}):t._e()]),t._ssrNode(" "),t.tags.bangumi.length>4?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/bangumi",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.bangumi.length?t._e():[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"还不是一个动漫迷~")]),t._v(" "),n("span")]],2),t._ssrNode(" "),t.tags.bangumi.length?t._ssrNode('<ul class="bangumis clearfix">',"</ul>",t._l(t.tags.bangumi.slice(0,4),(function(t){return n("BangumiItem",{key:t.slug,ref:"bangumi",refInFor:!0,attrs:{item:t}})})),1):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="block">',"</div>",[t._ssrNode('<div class="block-title">',"</div>",[n("NLink",{staticClass:"text",attrs:{to:"category/game",append:""}},[n("span",{staticClass:"fade-link"},[t._v("玩过的游戏")]),t._v(" "),t.tags.game.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.game.length)}}):t._e()]),t._ssrNode(" "),t.tags.game.length>5?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/game",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.game.length?t._e():[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"从来不玩游戏~")]),t._v(" "),n("span")]],2),t._ssrNode(" "),t.tags.game.length?t._ssrNode('<ul class="games clearfix">',"</ul>",t._l(t.tags.game.slice(0,5),(function(t){return n("GameItem",{key:t.slug,ref:"game",refInFor:!0,attrs:{item:t}})})),1):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="block">',"</div>",[t._ssrNode('<div class="block-title">',"</div>",[n("NLink",{staticClass:"text",attrs:{to:"category/topic",append:""}},[n("span",{staticClass:"fade-link"},[t._v("参与的话题")]),t._v(" "),t.tags.topic.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.topic.length)}}):t._e()]),t._ssrNode(" "),t.tags.topic.length>12?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/topic",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.topic.length?t._e():[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"不喜欢参与任何话题~")]),t._v(" "),n("span")]],2),t._ssrNode(" "),t.tags.topic.length?t._ssrNode('<ul class="topics clearfix">',"</ul>",t._l(t.tags.topic.slice(0,12),(function(t){return n("TopicItem",{key:t.slug,ref:"topic",refInFor:!0,attrs:{item:t}})})),1):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="block">',"</div>",[t._ssrNode('<div class="block-title">',"</div>",[n("NLink",{staticClass:"text",attrs:{to:"category/notebook",append:""}},[n("span",{staticClass:"fade-link"},[t._v("发表的专栏")]),t._v(" "),t.tags.notebook.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.notebook.length)}}):t._e()]),t._ssrNode(" "),t.tags.notebook.length?t._ssrNode("<div>","</div>",[t.isMine?n("CreateTagBtn",{staticClass:"create-btn fade-link",attrs:{title:"新建专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}):n("span"),t._ssrNode(" "),t.tags.notebook.length>4?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/notebook",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t._e()],2):[t._ssrNode('<p class="empty">'+t._ssrEscape(t._s(t.TA)+"还没写过文章~")+"</p> "),t.isMine?n("CreateTagBtn",{staticClass:"create-btn fade-link",attrs:{title:"新建专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}):n("span")]],2),t._ssrNode(" "),t.tags.notebook.length?t._ssrNode('<ul class="notebooks">',"</ul>",t._l(t.tags.notebook.slice(0,4),(function(t){return n("NotebookItem",{key:t.slug,ref:"notebook",refInFor:!0,attrs:{item:t}})})),1):t._e()],2)],2):t._e()}),[],!1,(function(t){var e=n(289);e.__inject__&&e.__inject__(t)}),null,"a205a9ce");e.default=component.exports}};