(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{274:function(e,t,r){"use strict";var o=r(2),n=r(39);t.a={beforeMount(){var e=this;return Object(o.a)(function*(){if(e.$store.state.logging){const t=e.$watch("$store.state.logging",()=>{e.$store.state.isAuth?(e.$channel.$fire("user-signed"),t()):e.$toast.error("继续操作前请先登录").then(()=>{window.location.href=e.$alias.sign()})})}else{const t=Object(n.a)();e.$store.commit("SET_USER_TOKEN",t),(yield e.$store.dispatch("initAuth"))?e.$channel.$fire("user-signed"):e.$toast.error("继续操作前请先登录").then(()=>{window.location.href=e.$alias.sign()})}})()}}},286:function(e,t,r){"use strict";r(68);t.a={beforeMount(){const e=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)return void e();const t=this.$watch("$store.state.isAuth",r=>{r&&(e(),t())})}}},329:function(e,t,r){},330:function(e,t,r){},331:function(e,t,r){},332:function(e,t,r){},333:function(e,t,r){},334:function(e,t,r){},392:function(e,t,r){e.exports=r.p+"img/e82d3e7.png"},395:function(e,t,r){"use strict";var o=r(329);r.n(o).a},398:function(e,t,r){"use strict";var o=r(330);r.n(o).a},399:function(e,t,r){"use strict";var o=r(331);r.n(o).a},402:function(e,t,r){"use strict";var o=r(332);r.n(o).a},403:function(e,t,r){"use strict";var o=r(333);r.n(o).a},404:function(e,t,r){"use strict";var o=r(334);r.n(o).a},432:function(e,t,r){"use strict";r.r(t);var o=r(393),n=r.n(o),l=r(2),c=r(125),h={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:()=>({menuWatcher:null,timeWatcher:null,friends:[]}),computed:{menu(){return this.$store.state.messageMenu.list}},mounted(){this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(e,t)=>{e>t&&!this.$store.state.socket.isConnected&&this.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",()=>{this.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom(){var e=this;return Object(l.a)(function*(){const t=n.a.service({target:e.$el});yield e.getUserFriends(),yield e.$store.dispatch("getMessageMenu"),t.close()})()},getUserFriends(){var e=this;return Object(l.a)(function*(){const t=()=>{Object(c.getUserRelation)({$axios:e.$axios,slug:e.slug,relation:"friend"}).then(data=>{data.result.forEach(t=>e.$cache.setUserSessionStore(t)),e.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})};try{const r=sessionStorage.getItem("user-friends-list");if(!r)return void(yield t());const o=JSON.parse(r);o.forEach(t=>e.$cache.setUserSessionStore(t)),e.friends=o}catch(e){yield t()}})()},deleteChannel(e){this.$axios.$post("v1/message/delete_channel",{channel:e.channel}).then(()=>{this.$store.commit("DELETE_MESSAGE_MENU",e.channel)}).catch(()=>{})}}},m=(r(395),r(7)),d=Object(m.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"message-menu"},e._l(e.menu,function(t){return r("li",{key:t.channel},[r("nuxt-link",{staticClass:"room-item clearfix",attrs:{to:e.$alias.user(e.$route.params.slug,"message/?mailto="+t.channel)}},[t.user.avatar?r("v-img",{attrs:{src:t.user.avatar,width:"42",height:"42",radius:"50%",alt:t.user.nickname}}):e._e(),e._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"nickname oneline",domProps:{textContent:e._s(t.user.nickname)}}),e._v(" "),r("div",{staticClass:"footer"},[t.count?r("div",{staticClass:"read-badge",domProps:{textContent:e._s(t.count)}}):e._e()])])],1),e._v(" "),r("div",{staticClass:"close",on:{click:function(r){return e.deleteChannel(t)}}},[e._v("\n      ×\n    ")])],1)}),0)},[],!1,null,null,null).exports,f=(r(38),r(396)),$=r.n(f),v=(r(397),r(272)),y={name:"ChatAvatar",components:{UserAvatar:v.a},props:{item:{type:Object,required:!0}},computed:{isMine(){return this.$store.state.user.slug===this.item.slug}}},_=(r(398),Object(m.a)(y,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[t("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,null,null,null).exports),C={name:"ChatMessage",components:{JsonContent:r(358).a},props:{item:{type:Object,required:!0}}},M=(r(399),Object(m.a)(C,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-message"},[t("json-content",{attrs:{content:this.item.content}})],1)},[],!1,null,null,null).exports),w=r(273),x=r(400),k=r(401),S={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data(){this.refresh()}},mounted(){setTimeout(()=>{this._initScroll()},20)},beforeDestroy(){this.scroll&&this.scroll.destroy()},methods:{_initScroll(){this.$refs.wrapper&&(x.a.use(k.a),this.scroll=new x.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",()=>{this.scroll.y>-50&&this.$emit("top"),this.scroll.y<=this.scroll.maxScrollY+50&&this.$emit("bottom")}))},enable(){this.scroll&&this.scroll.enable()},disable(){this.scroll&&this.scroll.disable()},refresh(){return new Promise(e=>{this.$nextTick(()=>{setTimeout(()=>{this.scroll&&this.scroll.refresh(),this.$nextTick(()=>{e()})},20)})})},scrollTo(){setTimeout(()=>{this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},0)},scrollToElement(){setTimeout(()=>{this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},0)}}},E=(r(402),{name:"MessageRoom",components:{Scroll:Object(m.a)(S,function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,null,null,null).exports,ChatRoom:$.a,UserAvatar:v.a,UserNickname:w.a},props:{mailto:{type:String,required:!0},slug:{type:String,required:!0}},data:()=>({message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}),computed:{query(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:()=>_,messageComps:()=>({message:M}),computeHelperTxt:()=>"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"},beforeMount(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted(){this.initRoom()},methods:{initRoom(){var e=this;this.$nextTick(Object(l.a)(function*(){e.$refs.room&&e.$refs.room.clearMessage(),yield e.$refs.loader.initData(),yield e.$refs.loader.loadMore({force:!0}),e.clearUnreadCount(),e.watchMessageLoop()}))},clearUnreadCount(){const menu=this.$store.state.messageMenu.list.filter(e=>e.channel===this.mailto)[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},switchRoom(){this.stopWatcher(),this.initRoom()},watchMessageLoop(){const e=this,t=e.mailto;this.stopWatcher=this.$watch(function(){return e.$store.state.messageRoom[e.mailto].time},function(){if(t!==e.mailto)return void this.switchRoom();const r=e.$store.state.messageRoom[e.mailto].data;e.$store.state.socket.isConnected&&r?e.appendMessage(r):e.$refs.loader.loadMore({force:!0}),e.screenScroll(),e.clearUnreadCount()})},handleScrollUp(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad(e){let{data:data,args:t}=e;0!==t.is_up||data.result.length||(this.noMore=!0),this.$nextTick(()=>{1===t.is_up?(data.result.map(e=>e).reverse().map(e=>{this.appendMessage(e,!1)}),this.screenScroll(!1)):(data.result.map(e=>{this.appendMessage(e)}),this.screenScroll())})},screenScroll(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.scroll&&this.$refs.scroll.refresh().then(()=>{const t=this.$refs.room.$el.clientHeight,r=this.$refs.wrap.clientHeight;t<r||(this.lastChatsHeight&&!e?this.$refs.scroll.scrollTo(0,this.lastChatsHeight-t):this.$refs.scroll.scrollTo(0,r-t),this.lastChatsHeight=t)})},appendMessage(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$refs.room.addMessage({id:e.id,type:"message",float:e.user.slug===this.slug?"right":"left",color:2===e.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:e},t)},handleAddBubble(){if(!this.message.trim())return;const e=[{type:"paragraph",data:{text:this.message.trim()}}],t=Math.random().toString(10).substring(3,6);this.appendMessage({id:t,user:this.$store.state.user,content:e,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:e}).then(e=>{this.$refs.room.updateMessage(t,{id:e.id}),this.$refs.loader.append(e)}).catch(()=>{this.$refs.room.updateMessage(t,{status:"error"})})},handleNewLine(){this.message&&(this.message+="\n")}}}),T=(r(403),Object(m.a)(E,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"room"},[r("div",{staticClass:"room-header"},[e.target?r("user-avatar",{attrs:{user:e.target,size:36}}):e._e(),e._v(" "),e.target?r("user-nickname",{staticClass:"nickname-wrap",attrs:{user:e.target}}):e._e()],1),e._v(" "),r("no-ssr",[r("flow-loader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:e.query,callback:e.handleMessageLoad,"cache-timeout":864e5,auto:0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.flow;return r("div",{ref:"wrap",staticClass:"room-chats"},[r("scroll",{ref:"scroll",attrs:{data:o},on:{top:e.handleScrollUp}},[r("chat-room",{ref:"room",attrs:{"avatar-component":e.avatarComp,"message-components":e.messageComps}})],1)],1)}}])})],1),e._v(" "),r("div",{staticClass:"room-footer"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:e.message},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.handleAddBubble(t))},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.handleAddBubble(t)):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?(t.preventDefault(),e.handleNewLine(t)):null}],input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),r("div",{staticClass:"helper"},[r("span",{domProps:{textContent:e._s(e.computeHelperTxt)}}),e._v(" "),r("button",{on:{click:e.handleAddBubble}},[e._v("\n        发送\n      ")])])])],1)},[],!1,null,null,null).exports),O=r(286),A={name:"UserMessage",components:{MessageMenu:d,MessageRoom:T},mixins:[r(274).a,O.a],props:{slug:{type:String,required:!0}},computed:{mailto(){return this.$route.query.mailto}}},R=(r(404),Object(m.a)(A,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"user-message"}},[o("el-row",{staticClass:"column-wrap"},[o("el-col",{attrs:{span:6}},[o("message-menu",{attrs:{slug:e.slug}}),e._v("\n       \n    ")],1),e._v(" "),o("el-col",{attrs:{span:18}},[o("div",{staticClass:"room-adjust"},[e.mailto?o("message-room",{attrs:{mailto:e.mailto,slug:e.slug}}):o("div",{staticClass:"need-pick"},[o("img",{attrs:{src:r(392)}}),e._v(" "),o("p",[e._v("未选择聊天")])])],1)])],1)],1)},[],!1,null,null,null));t.default=R.exports}}]);