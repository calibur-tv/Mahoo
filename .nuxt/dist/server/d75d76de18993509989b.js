exports.ids=[21],exports.modules={100:function(t,e){},101:function(t,e,r){"use strict";e.a={beforeMount(){const t=this.$watch("isAuth",e=>{e&&(this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}}),t())})}}},102:function(t,e){},126:function(t,e,r){t.exports=r.p+"img/e82d3e7.png"},127:function(t,e,r){"use strict";r.r(e);var n=r(91),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},128:function(t,e){},129:function(t,e,r){"use strict";r.r(e);var n=r(92),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},130:function(t,e,r){"use strict";r.r(e);var n=r(93),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},131:function(t,e,r){"use strict";r.r(e);var n=r(94),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},132:function(t,e,r){"use strict";r.r(e);var n=r(95),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},133:function(t,e,r){"use strict";r.r(e);var n=r(96),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},134:function(t,e,r){"use strict";r.r(e);var n=r(97),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},135:function(t,e,r){"use strict";r.r(e);var n=r(98),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},136:function(t,e,r){"use strict";r.r(e);var n=r(99),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},137:function(t,e,r){"use strict";r.r(e);var n=r(100),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},138:function(t,e,r){"use strict";r.r(e);var n=r(102),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},152:function(t,e,r){"use strict";r.r(e);var n=r(54),o=r.n(n),c=r(25),l=r(24),h={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:()=>({menuWatcher:null,timeWatcher:null,friends:[]}),computed:{menu(){return this.$store.state.messageMenu.list}},mounted(){this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(t,e)=>{t>e&&!this.$store.state.socket.isConnected&&this.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",()=>{this.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{async initChatRoom(){const t=o.a.service({target:this.$el});await this.getUserFriends(),await this.$store.dispatch("getMessageMenu"),t.close()},async getUserFriends(){const t=()=>{Object(c.getUserRelation)({$axios:this.$axios,slug:this.slug,relation:"friend"}).then(data=>{data.result.forEach(t=>Object(l.b)(t)),this.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})};try{const e=sessionStorage.getItem("user-friends-list");if(!e)return void await t();const r=JSON.parse(e);r.forEach(t=>Object(l.b)(t)),this.friends=r}catch(e){await t()}},deleteChannel(t){this.$axios.$post("v1/message/delete_channel",{channel:t.channel}).then(()=>{this.$store.commit("DELETE_MESSAGE_MENU",t.channel)}).catch(()=>{})}}},d=r(2);var m=Object(d.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return t._ssrNode("<li>","</li>",[r("nuxt-link",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.channel)}},[r("img",{staticClass:"avatar",attrs:{src:t.$resize(e.user.avatar,{width:42}),alt:e.user.nickname}}),t._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"nickname oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),r("div",{staticClass:"footer"},[e.count?r("div",{staticClass:"read-badge",domProps:{textContent:t._s(e.count)}}):t._e()])])]),t._ssrNode(' <div class="close">\n      ×\n    </div>')],2)}),0)},[],!1,function(t){var e=r(127);e.__inject__&&e.__inject__(t)},null,"04b91794").exports,f=r(55),_=r.n(f),v=(r(128),r(68)),$={name:"ChatAvatar",components:{UserAvatar:v.a},props:{item:{type:Object,required:!0}},computed:{isMine(){return this.$store.state.user.slug===this.item.slug}}};var x=Object(d.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,function(t){var e=r(129);e.__inject__&&e.__inject__(t)},null,"630a9f70").exports,C={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}};var y=Object(d.a)(C,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"json-content-txt-parser"},[this._ssrNode("<p>"+this._s(this.item.content.replace(/\r?\n/g,"<br>"))+"</p>")])},[],!1,function(t){var e=r(130);e.__inject__&&e.__inject__(t)},null,"a8aa203e").exports,j={name:"JsonContentImgParser",props:{item:{type:Object,required:!0}}};var w=Object(d.a)(j,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"json-content-img-parser"},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.item.url))+t._ssrAttr("width",t.item.width)+t._ssrAttr("height",t.item.height)+t._ssrAttr("alt",t.item.text)+"> "+(t.item.text?'<p class="img-tip">'+t._ssrEscape(t._s(t.item.text))+"</p>":"\x3c!----\x3e"))])},[],!1,function(t){var e=r(131);e.__inject__&&e.__inject__(t)},null,"f06b0d18").exports,M={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}};var k=Object(d.a)(M,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"json-content-txt-parser"},[this._ssrNode("<blockquote>"+this._s(this.item.text)+"</blockquote>")])},[],!1,function(t){var e=r(132);e.__inject__&&e.__inject__(t)},null,"8b617b90").exports,E={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}};var O=Object(d.a)(E,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"json-content-txt-parser"},[this._ssrNode(this.item.text?"<h3>"+this._ssrEscape(this._s(this.item.text))+"</h3>":"\x3c!----\x3e")])},[],!1,function(t){var e=r(133);e.__inject__&&e.__inject__(t)},null,"55f76f49").exports,S={name:"JsonContentListParser",props:{item:{type:Object,required:!0}},computed:{list(){let t=this.item.text;if(!t)return[];for(;/\n\n/.test(t);)t=t.replace(/\n\n/g,"\n");return t.split("\n")}}};var T={name:"JsonContent",components:{TitleParser:O,TxtParser:y,ImgParser:w,UseParser:k,ListParser:Object(d.a)(S,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"json-content-list-parser"},[t._ssrNode("1"===t.item.sort?"<ol>"+t._ssrList(t.list,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ol>":"<ul>"+t._ssrList(t.list,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ul>")])},[],!1,function(t){var e=r(134);e.__inject__&&e.__inject__(t)},null,"0247939b").exports},props:{content:{required:!0,type:Array},show:{type:Boolean,default:!0}}},N={name:"ChatMessage",components:{JsonContent:Object(d.a)(T,function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"json-content"},this._l(this.content,function(t,r){return e(t.type+"-parser",{key:r,tag:"component",attrs:{item:t}})}),1):this._e()},[],!1,null,null,"db874c02").exports},props:{item:{type:Object,required:!0}}};var A=Object(d.a)(N,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("json-content",{attrs:{content:this.item.content}})],1)},[],!1,function(t){var e=r(135);e.__inject__&&e.__inject__(t)},null,"959e5200").exports,U=r(72),L=r(56),R=r.n(L),P=r(57),z=r.n(P),W={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data(){this.refresh()}},mounted(){setTimeout(()=>{this._initScroll()},20)},beforeDestroy(){this.scroll&&this.scroll.destroy()},methods:{_initScroll(){this.$refs.wrapper&&(R.a.use(z.a),this.scroll=new R.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",()=>{this.scroll.y>-50&&this.$emit("top"),this.scroll.y<=this.scroll.maxScrollY+50&&this.$emit("bottom")}))},enable(){this.scroll&&this.scroll.enable()},disable(){this.scroll&&this.scroll.disable()},refresh(){return new Promise(t=>{this.$nextTick(()=>{setTimeout(()=>{this.scroll&&this.scroll.refresh(),this.$nextTick(()=>{t()})},20)})})},scrollTo(){setTimeout(()=>{this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},0)},scrollToElement(){setTimeout(()=>{this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},0)}}};var J={name:"MessageRoom",components:{Scroll:Object(d.a)(W,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,function(t){var e=r(136);e.__inject__&&e.__inject__(t)},null,"2a757871").exports,ChatRoom:_.a,UserAvatar:v.a,UserNickname:U.a},props:{mailto:{type:String,required:!0},slug:{type:String,required:!0}},data:()=>({message:"",target:null,chatsHeight:0,stopWatcher:null}),computed:{query(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:()=>x,messageComps:()=>({message:A}),computeHelperTxt:()=>"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"},beforeMount(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted(){this.initRoom()},methods:{initRoom(){this.$nextTick(async()=>{this.$refs.room&&this.$refs.room.clearMessage(),await this.$refs.loader.initData(),await this.$refs.loader.loadMore({force:!0}),this.clearUnreadCount(),this.watchMessageLoop()})},clearUnreadCount(){const menu=this.$store.state.messageMenu.list.filter(t=>t.channel===this.mailto)[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},switchRoom(){this.stopWatcher(),this.initRoom()},watchMessageLoop(){const t=this,e=t.mailto;this.stopWatcher=this.$watch(function(){return t.$store.state.messageRoom[t.mailto].time},function(){if(e!==t.mailto)return void this.switchRoom();const r=t.$store.state.messageRoom[t.mailto].data;t.$store.state.socket.isConnected&&r?t.appendMessage(r):t.$refs.loader.loadMore({force:!0}),t.screenScroll(),t.clearUnreadCount()})},handleScrollUp(){this.$refs.loader.loadBefore({force:!0})},handleMessageLoad({data:data,args:t}){this.$nextTick(()=>{1===t.is_up?(data.result.map(t=>t).reverse().map(t=>{this.appendMessage(t,!1)}),this.screenScroll(!1)):(data.result.map(t=>{this.appendMessage(t)}),this.screenScroll())})},screenScroll(t=!0){this.$refs.scroll&&this.$refs.scroll.refresh().then(()=>{const e=this.$refs.room.$el.clientHeight;this.lastChatsHeight&&!t?this.$refs.scroll.scrollTo(0,this.lastChatsHeight-e):this.$refs.scroll.scrollTo(0,this.$refs.wrap.clientHeight-e),this.lastChatsHeight=e})},appendMessage(t,e=!0){this.$refs.room.addMessage({id:t.id,type:"message",float:t.user.slug===this.slug?"right":"left",color:2===t.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:t},e)},handleAddBubble(){if(!this.message.trim())return;const t=[{type:"txt",content:this.message.trim()}],e=Math.random().toString(10).substring(3,6);this.appendMessage({id:e,user:this.$store.state.user,content:t,created_at:Date.now()}),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:t}).then(t=>{this.$refs.room.updateMessage(e,{id:t.id}),this.$refs.loader.append(t),this.screenScroll()}).catch(()=>{this.$refs.room.updateMessage(e,{status:"error"}),this.screenScroll()})},handleNewLine(){this.message&&(this.message+="\n")}}};var I=Object(d.a)(J,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"room"},[t._ssrNode('<div class="room-header">',"</div>",[t.target?r("user-avatar",{attrs:{user:t.target,size:36}}):t._e(),t._ssrNode(" "),t.target?r("user-nickname",{staticClass:"nickname-wrap",attrs:{user:t.target}}):t._e()],2),t._ssrNode(" "),r("no-ssr",[r("flow-loader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:t.query,callback:t.handleMessageLoad,"cache-timeout":864e5,auto:0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("div",{ref:"wrap",staticClass:"room-chats"},[r("scroll",{ref:"scroll",attrs:{data:n},on:{top:t.handleScrollUp}},[r("chat-room",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}})],1)],1)}}])})],1),t._ssrNode(' <div class="room-footer"><textarea maxlength="500" placeholder="say it...">'+t._ssrEscape(t._s(t.message))+'</textarea> <div class="helper"><span>'+t._ssrEscape(t._s(t.computeHelperTxt))+"</span> <button>\n        发送\n      </button></div></div>")],2)},[],!1,function(t){var e=r(137);e.__inject__&&e.__inject__(t)},null,"174bc1b2").exports,H=r(101),B={name:"UserMessage",components:{MessageMenu:m,MessageRoom:I},mixins:[r(77).a,H.a],props:{slug:{type:String,required:!0}},computed:{mailto(){return this.$route.query.mailto}}};var D=Object(d.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-message"}},[n("el-row",{staticClass:"column-wrap"},[n("el-col",{attrs:{span:6}},[n("message-menu",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"room-adjust"},[t.mailto?n("message-room",{attrs:{mailto:t.mailto,slug:t.slug}}):n("div",{staticClass:"need-pick"},[n("img",{attrs:{src:r(126)}}),t._v(" "),n("p",[t._v("未选择聊天")])])],1)])],1)],1)},[],!1,function(t){var e=r(138);e.__inject__&&e.__inject__(t)},null,"1992ef02");e.default=D.exports},64:function(t,e){},65:function(t,e){},66:function(t,e){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},68:function(t,e,r){"use strict";var n={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=r(2);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.disabled?r("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.avatar||t.user.avatar,{width:t.size}))+t._ssrAttr("alt",t.user.nickname)+' class="avatar">')],2):r("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[r("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,function(t){var e=r(69);e.__inject__&&e.__inject__(t)},null,"8c0ebd70");e.a=component.exports},69:function(t,e,r){"use strict";r.r(e);var n=r(64),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},70:function(t,e,r){"use strict";r.r(e);var n=r(65),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},71:function(t,e,r){"use strict";r.r(e);var n=r(66),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},72:function(t,e,r){"use strict";var n={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=r(2);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clearfix"},[t.disabled?t._ssrNode('<div class="user-nickname">',"</div>",[t._ssrNode('<div class="nickname"><p class="oneline">'+t._ssrEscape(t._s(t.nickname||t.user.nickname))+"</p></div> "+(t.sex?"<span"+t._ssrClass(null,t.$style.title)+"><i"+t._ssrClass("iconfont",[t.$style["ic-sex"],"ic-"+t.sexClass.name])+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(t.level?"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-level"]])+">"+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+t._ssrList(t.user.roles,function(e,r){return"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-title"]])+">"+t._ssrEscape(t._s(e))+"</span>"}))],2):r("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[r("div",{staticClass:"nickname"},[r("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?r("span",{class:t.$style.title},[r("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?r("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,n){return r("span",{key:n,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){var e=r(70);e.__inject__&&e.__inject__(t);var n=r(71);n.__inject__&&n.__inject__(t),this.$style=n.locals||n},null,"5b0047c6");e.a=component.exports},77:function(t,e,r){"use strict";var n=r(22);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?t():this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})})}else{const t=Object(n.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")||this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})}}}},91:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e){},97:function(t,e){},98:function(t,e){},99:function(t,e){}};
//# sourceMappingURL=d75d76de18993509989b.js.map