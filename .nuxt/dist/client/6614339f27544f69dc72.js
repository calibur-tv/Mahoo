(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{329:function(t,e,n){"use strict";var l=n(136),o={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate:function(){var t=this;this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(function(e){var n=e.value.trim();if(n.length>32)return t.$toast.error("名字不能超过32个字");Object(l.b)(t,{name:n,parent_slug:t.parent}).then(function(data){t.$emit("create",data)}).catch(function(e){t.$toast.error(e.message)})}).catch(function(){})}}},r=n(15),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);e.a=component.exports},366:function(t,e,n){},432:function(t,e,n){"use strict";var l=n(366);n.n(l).a},502:function(t,e,n){"use strict";n.r(e);var l=n(136),o={name:"UserEmotion",components:{CreateTagBtn:n(329).a},props:{user:{type:Object,required:!0}},data:function(){return{tags:null}},computed:{TA:function(){return this.$utils.convertTA(this.user.sex,this.$store.getters.isMine(this.slug))}},asyncData:function(t){var e=t.app,n=t.error,o=t.params;return Object(l.a)(e,o).then(function(t){return{tags:t}}).catch(n)},methods:{handleCreateNotebook:function(data){this.tags.notebook.unshift(data)}}},r=(n(432),n(15)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags?n("div",{attrs:{id:"user-emotion"}},[n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("nuxt-link",{staticClass:"text",attrs:{to:"bangumi",append:""}},[n("span",{staticClass:"fade-link"},[t._v("看过的动漫")]),t._v(" "),t.tags.bangumi.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.bangumi.length)}}):t._e()]),t._v(" "),t.tags.bangumi.length>4?n("nuxt-link",{staticClass:"more fade-link",attrs:{to:"bangumi",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.bangumi.length?t._e():[n("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"还不是一个动漫迷~\n        ")]),t._v(" "),n("span")]],2),t._v(" "),t.tags.bangumi.length?n("ul",{staticClass:"bangumis clearfix"},t._l(t.tags.bangumi.slice(0,4),function(e){return n("li",{key:e.slug},[n("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(e.slug)}},[n("v-img",{attrs:{src:e.avatar,width:"110",height:"114",alt:e.name}})],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"oneline"},[n("nuxt-link",{staticClass:"name fade-link",attrs:{target:"_blank",to:t.$alias.tag(e.slug)},domProps:{textContent:t._s(e.name)}})],1),t._v(" "),n("p",{staticClass:"desc",domProps:{textContent:t._s(e.extra.intro)}})])],1)}),0):t._e()]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("nuxt-link",{staticClass:"text",attrs:{to:"game",append:""}},[n("span",{staticClass:"fade-link"},[t._v("玩过的游戏")]),t._v(" "),t.tags.game.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.game.length)}}):t._e()]),t._v(" "),t.tags.game.length>5?n("nuxt-link",{staticClass:"more fade-link",attrs:{to:"game",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.game.length?t._e():[n("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"从来不玩游戏~\n        ")]),t._v(" "),n("span")]],2),t._v(" "),t.tags.game.length?n("ul",{staticClass:"games clearfix"},t._l(t.tags.game.slice(0,5),function(e){return n("li",{key:e.slug},[n("nuxt-link",{attrs:{target:"_blank",to:t.$alias.tag(e.slug)}},[n("v-img",{attrs:{src:e.avatar,width:"150",height:"150",alt:e.name}}),t._v(" "),n("p",{staticClass:"oneline fade-link",domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e()]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("nuxt-link",{staticClass:"text",attrs:{to:"topic",append:""}},[n("span",{staticClass:"fade-link"},[t._v("参与的话题")]),t._v(" "),t.tags.topic.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.topic.length)}}):t._e()]),t._v(" "),t.tags.topic.length>12?n("nuxt-link",{staticClass:"more fade-link",attrs:{to:"topic",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.topic.length?t._e():[n("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"不喜欢参与任何话题~\n        ")]),t._v(" "),n("span")]],2),t._v(" "),t.tags.topic.length?n("ul",{staticClass:"topics clearfix"},t._l(t.tags.topic.slice(0,12),function(e){return n("li",{key:e.slug},[n("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(e.slug)}},[n("v-img",{attrs:{src:e.avatar,width:"40",height:"40",alt:e.name}})],1),t._v(" "),n("div",{staticClass:"name oneline"},[n("nuxt-link",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(e.slug)},domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e()]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("nuxt-link",{staticClass:"text",attrs:{to:"notebook",append:""}},[n("span",{staticClass:"fade-link"},[t._v("发表的专栏")]),t._v(" "),t.tags.notebook.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.notebook.length)}}):t._e()]),t._v(" "),t.tags.notebook.length?n("div",[n("create-tag-btn",{staticClass:"create-btn fade-link",attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}),t._v(" "),t.tags.notebook.length>4?n("nuxt-link",{staticClass:"more fade-link",attrs:{to:"notebook",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t._e()],1):[n("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"还没写过文章~\n        ")]),t._v(" "),n("create-tag-btn",{staticClass:"create-btn fade-link",attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}})]],2),t._v(" "),t.tags.notebook.length?n("ul",{staticClass:"notebooks clearfix"},t._l(t.tags.notebook.slice(0,4),function(e){return n("li",{key:e.slug},[n("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(e.slug)}},[n("v-img",{attrs:{src:e.avatar,width:"117",height:"88",alt:e.name}})],1),t._v(" "),n("div",{staticClass:"content clearfix"},[n("div",{staticClass:"note-title oneline"},[n("nuxt-link",{staticClass:"name fade-link",attrs:{target:"_blank",to:t.$alias.tag(e.slug)},domProps:{textContent:t._s(e.name)}})],1),t._v(" "),n("p",{staticClass:"desc oneline",attrs:{title:e.extra.intro},domProps:{textContent:t._s(e.extra.intro||"暂无简介")}}),t._v(" "),n("div",{staticClass:"meta oneline"},[t._v("\n            -\n          ")])])],1)}),0):t._e()])]):t._e()},[],!1,null,null,null);e.default=component.exports}}]);