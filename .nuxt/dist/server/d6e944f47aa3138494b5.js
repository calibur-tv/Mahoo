exports.ids=[21],exports.modules={102:function(e,t){e.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu","skeleton-loading":"skeleton-loading_3wvbo",skeletonLoading:"skeleton-loading_3wvbo",skeleton:"skeleton_3yQuF"}},103:function(e,t){e.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk","skeleton-loading":"skeleton-loading_W_WF0",skeletonLoading:"skeleton-loading_W_WF0",skeleton:"skeleton_3dcSj"}},104:function(e,t){e.exports={paragraph:"paragraph_1OWG2","skeleton-loading":"skeleton-loading_3Hgsp",skeletonLoading:"skeleton-loading_3Hgsp",skeleton:"skeleton_2H5RA"}},105:function(e,t){e.exports={list:"list_rxwoA","skeleton-loading":"skeleton-loading_hADmg",skeletonLoading:"skeleton-loading_hADmg",skeleton:"skeleton_3a9b2"}},106:function(e,t){e.exports={delimiter:"delimiter_3ksS5","skeleton-loading":"skeleton-loading_1lzJ0",skeletonLoading:"skeleton-loading_1lzJ0",skeleton:"skeleton_jIhh3"}},107:function(e,t){e.exports={checklist:"checklist_35Trq","skeleton-loading":"skeleton-loading_2NnRn",skeletonLoading:"skeleton-loading_2NnRn",skeleton:"skeleton_RKAJg"}},108:function(e,t){e.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1","skeleton-loading":"skeleton-loading_Q1SbS",skeletonLoading:"skeleton-loading_Q1SbS",skeleton:"skeleton_13H0b"}},109:function(e,t){e.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj","skeleton-loading":"skeleton-loading_DCN-u",skeletonLoading:"skeleton-loading_DCN-u",skeleton:"skeleton_1YNsK"}},110:function(e,t){e.exports={music:"music_1aU_y","skeleton-loading":"skeleton-loading_3yST_",skeletonLoading:"skeleton-loading_3yST_",skeleton:"skeleton_3Zagh"}},111:function(e,t){e.exports={baidu:"baidu_3yD19",logo:"logo_3fZIb",content:"content_2vYlq","skeleton-loading":"skeleton-loading_2_Vpm",skeletonLoading:"skeleton-loading_2_Vpm",skeleton:"skeleton_Yoxzs"}},122:function(e,t,n){"use strict";t.a={beforeMount(){const e=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)return void e();const t=this.$watch("$store.state.isAuth",n=>{n&&(e(),t())})}}},125:function(e,t,n){"use strict";var r={name:"JsonHeader",props:{item:{type:Object,required:!0}},render(e){const t=this.item.data.level;return e("h"+this.item.data.level,{class:this.$style[`h${t}`],domProps:{innerHTML:this.item.data.text}})}},o=n(2);var header=Object(o.a)(r,void 0,void 0,!1,function(e){var t=n(144);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"0447caaa").exports,l={name:"JsonImage",props:{item:{type:Object,required:!0}}};var c=Object(o.a)(l,function(){var e,t,n=this,r=n.$createElement,o=n._self._c||r;return o("div",{class:n.$style.image},[n._ssrNode("<div"+n._ssrClass(null,[(e={},e[n.$style.border]=n.item.data.withBorder,e),(t={},t[n.$style.bg]=n.item.data.withBackground,t)])+">","</div>",[n._ssrNode("<div>","</div>",[o("VImg",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._ssrNode(" "+(n.item.data.caption?"<p>"+n._ssrEscape(n._s(n.item.data.caption))+"</p>":"\x3c!----\x3e"))],2)},[],!1,function(e){var t=n(145);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"1df9eca6").exports,d={name:"JsonParagraph",props:{item:{type:Object,required:!0}}};var h=Object(o.a)(d,function(){var e=this.$createElement;return(this._self._c||e)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}},[])},[],!1,function(e){var t=n(146);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"18788980").exports,m={name:"JsonList",props:{item:{type:Object,required:!0}}};var f=Object(o.a)(m,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$style.list},[e._ssrNode("ordered"===e.item.data.style?"<ol>"+e._ssrList(e.item.data.items,function(li,t){return"<li>"+e._ssrEscape(e._s(li))+"</li>"})+"</ol>":"<ul>"+e._ssrList(e.item.data.items,function(li,t){return"<li>"+e._ssrEscape(e._s(li))+"</li>"})+"</ul>")])},[],!1,function(e){var t=n(147);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"86987c88").exports,_={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}};var v=Object(o.a)(_,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.$style.delimiter},[])},[],!1,function(e){var t=n(148);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"9239394e").exports,$={name:"JsonChecklist",props:{item:{type:Object,required:!0}}};var y=Object(o.a)($,function(){var e=this,t=e.$createElement;return(e._self._c||t)("ul",{class:e.$style.checklist},[e._ssrNode(e._ssrList(e.item.data.items,function(option,t){return"<li>"+(option.checked?"<i></i>":"<em></em>")+" <div>"+e._ssrEscape(e._s(option.text))+"</div></li>"}))])},[],!1,function(e){var t=n(149);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"169c3110").exports,k={name:"JsonLink",props:{item:{type:Object,required:!0}}};var x=Object(o.a)(k,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$style.link},[e._ssrNode('<a target="_blank"'+e._ssrAttr("href",e.item.data.link)+">"+(e.item.data.meta.image&&e.item.data.meta.image.url?"<img"+e._ssrAttr("src",e.item.data.meta.image.url)+' width="65" height="65"'+e._ssrClass(null,e.$style.logo)+">":"\x3c!----\x3e")+" <div"+e._ssrClass(null,e.$style.content)+"><h3>"+e._ssrEscape(e._s(e.item.data.meta.title))+'</h3> <p class="oneline">'+e._ssrEscape(e._s(e.item.data.meta.description))+"</p> <span>"+e._ssrEscape(e._s(e.item.data.link.replace(/https?:\/\//,"")))+"</span></div></a>")])},[],!1,function(e){var t=n(150);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"98a699d0").exports,w={name:"JsonVideo",props:{item:{type:Object,required:!0}}};var video=Object(o.a)(w,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$style.video},[e._ssrNode("<div"+e._ssrClass(null,e.$style.wrap)+"><iframe"+e._ssrAttr("src",e.item.data.embed)+' scrolling="no" border="0" frameborder="no" framespacing="0" allowtransparency="true" allowfullscreen="allowfullscreen"></iframe></div> '+(e.item.data.caption?"<p>"+e._ssrEscape(e._s(e.item.data.caption))+"</p>":"\x3c!----\x3e"))])},[],!1,function(e){var t=n(151);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"74cde4cd").exports,C={name:"JsonMusic",props:{item:{type:Object,required:!0}}};var j=Object(o.a)(C,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$style.music},[e._ssrNode("<iframe"+e._ssrAttr("src",e.item.data.embed)+' scrolling="no" border="0" frameborder="no" framespacing="0" allowtransparency="true" allowfullscreen="allowfullscreen" width="330" height="86"></iframe> '+(e.item.data.caption?"<p>"+e._ssrEscape(e._s(e.item.data.caption))+"</p>":"\x3c!----\x3e"))])},[],!1,function(e){var t=n(152);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"3c9bd977").exports,M={name:"JsonBaidu",props:{item:{type:Object,required:!0},reward:{type:Boolean,required:!0}}};class E{constructor({minLength:e,shareLink:t}={}){this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:e||140,shareLink:t||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}bind(e,{minLength:t,authorNickname:n,shareLink:r,appendStr:o}={}){e.addEventListener("copy",e=>{const l=t||this.config.minLength,c=r||this.config.shareLink,d=o||this.config.appendStr,h=window.getSelection().getRangeAt(0),m=this.getHTMLParser("");m&&m.appendChild(h.cloneContents());const f=h.toString().trim(),_=m?m.innerHTML:this.getRangeHtml(h);if(document.createElement("div").innerHTML=_,f.length>=l){const t=this.getCopyHtml(_,c,n,d),r=this.getCopyText(f,c,n,d);void 0===e.clipboardData&&this.hack(t,h);try{e.clipboardData.setData("text/plain",r),e.clipboardData.setData("text/html",t),e.preventDefault()}catch(e){this.hack(t,h)}}})}abort(e){e.addEventListener("copy",e=>(e.stopPropagation(),e.preventDefault(),e.cancelBubble=!1,!1))}hack(text,e){const t=document.createElement("div");t.innerHTML=text,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),window.getSelection().selectAllChildren(t),setTimeout(()=>{try{window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}catch(e){}document.body.removeChild(t)},0)}getCopyHtml(html,e,t,n){return`<div><div>${html}</div>${this.getExtraCopyright(e,t,n).join("<br>")}</div>`}getCopyText(text,e,t,n){return text+this.getExtraCopyright(e,t,n).join("\n")}getExtraCopyright(e,t,n){return t?["","",`${this.prefix.author}：${t}`,`${this.prefix.link}：${e}`,`${this.prefix.org}：${this.config.org}`,n]:["","",`${this.prefix.link}：${e}`,`${this.prefix.org}：${this.config.org}`,n]}getRangeHtml(text){const div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}getHTMLParser(e){try{return(new window.DOMParser).parseFromString(e,"text/html").body}catch(t){const n=document.implementation.createHTMLDocument("");return n.body.innerHTML=e,n.body}}}var S={name:"JsonContent",components:{"v-header":header,"v-image":c,"v-paragraph":h,"v-list":f,"v-delimiter":v,"v-checklist":y,"v-link":x,"v-video":video,"v-music":j,"v-baidu":Object(o.a)(M,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$style.baidu},[e._ssrNode("<a"+e._ssrAttr("href",e.item.data.url)+' target="_blank"><i'+e._ssrClass("iconfont ic-baidu-cloud",e.$style.logo)+"></i> <div"+e._ssrClass(null,e.$style.content)+">"+(0===e.item.data.visit_type||e.reward?e._ssrEscape("\n        密码："+e._s(e.item.data.password)+"\n      "):"\n        密码投食后可见\n      ")+"</div></a>")])},[],!1,function(e){var t=n(153);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"b0eaa326").exports},props:{content:{required:!0,type:Array},reward:{type:Boolean,default:!1}},mounted(){(new E).bind(this.$el)}},L=Object(o.a)(S,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"json-content"},e._l(e.content,function(t,r){return n("v-"+t.type,{key:r,tag:"component",attrs:{item:t,reward:e.reward}})}),1)},[],!1,null,null,"db874c02");t.a=L.exports},144:function(e,t,n){"use strict";n.r(t);var r=n(102),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},145:function(e,t,n){"use strict";n.r(t);var r=n(103),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},146:function(e,t,n){"use strict";n.r(t);var r=n(104),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},147:function(e,t,n){"use strict";n.r(t);var r=n(105),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},148:function(e,t,n){"use strict";n.r(t);var r=n(106),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},149:function(e,t,n){"use strict";n.r(t);var r=n(107),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},150:function(e,t,n){"use strict";n.r(t);var r=n(108),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},151:function(e,t,n){"use strict";n.r(t);var r=n(109),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},152:function(e,t,n){"use strict";n.r(t);var r=n(110),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},153:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},155:function(e,t,n){e.exports=n.p+"img/e82d3e7.png"},173:function(e,t){},174:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t){},237:function(e,t,n){"use strict";n.r(t);var r=n(173),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},238:function(e,t){},239:function(e,t,n){"use strict";n.r(t);var r=n(174),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},240:function(e,t,n){"use strict";n.r(t);var r=n(175),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},241:function(e,t,n){"use strict";n.r(t);var r=n(176),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},242:function(e,t,n){"use strict";n.r(t);var r=n(177),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},243:function(e,t,n){"use strict";n.r(t);var r=n(178),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},264:function(e,t,n){"use strict";n.r(t);var r=n(64),o=n.n(r),l=n(26),c={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:()=>({menuWatcher:null,timeWatcher:null,friends:[]}),computed:{menu(){return this.$store.state.messageMenu.list}},mounted(){this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(e,t)=>{e>t&&!this.$store.state.socket.isConnected&&this.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",()=>{this.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{async initChatRoom(){const e=o.a.service({target:this.$el});await this.getUserFriends(),await this.$store.dispatch("getMessageMenu"),e.close()},async getUserFriends(){const e=()=>{Object(l.getUserRelation)({$axios:this.$axios,slug:this.slug,relation:"friend"}).then(data=>{data.result.forEach(e=>this.$cache.setUserSessionStore(e)),this.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})};try{const t=sessionStorage.getItem("user-friends-list");if(!t)return void await e();const n=JSON.parse(t);n.forEach(e=>this.$cache.setUserSessionStore(e)),this.friends=n}catch(t){await e()}},deleteChannel(e){this.$axios.$post("v1/message/delete_channel",{channel:e.channel}).then(()=>{this.$store.commit("DELETE_MESSAGE_MENU",e.channel)}).catch(()=>{})}}},d=n(2);var h=Object(d.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"message-menu"},e._l(e.menu,function(t){return e._ssrNode("<li>","</li>",[n("NLink",{staticClass:"room-item clearfix",attrs:{to:e.$alias.user(e.$route.params.slug,"message/?mailto="+t.channel+"&name="+t.user.nickname)}},[t.user.avatar?n("VImg",{attrs:{src:t.user.avatar,width:"42",height:"42",radius:"50%",alt:t.user.nickname}}):e._e(),e._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{textContent:e._s(t.user.nickname)}}),e._v(" "),n("div",{staticClass:"footer"},[t.count?n("div",{staticClass:"read-badge",domProps:{textContent:e._s(t.count)}}):e._e()])])],1),e._ssrNode(' <div class="close">\n      ×\n    </div>')],2)}),0)},[],!1,function(e){var t=n(237);t.__inject__&&t.__inject__(e)},null,"04b91794").exports,m=n(65),f=n.n(m),_=(n(238),{name:"ChatAvatar",components:{UserAvatar:n(81).a},props:{item:{type:Object,required:!0}},computed:{isMine(){return this.$store.state.user.slug===this.item.slug}}});var v=Object(d.a)(_,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[t("UserAvatar",{attrs:{user:this.item,size:36}})],1)},[],!1,function(e){var t=n(239);t.__inject__&&t.__inject__(e)},null,"630a9f70").exports,$={name:"ChatMessage",components:{JsonContent:n(125).a},props:{item:{type:Object,required:!0}}};var y=Object(d.a)($,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-message"},[t("JsonContent",{attrs:{content:this.item.content}})],1)},[],!1,function(e){var t=n(240);t.__inject__&&t.__inject__(e)},null,"959e5200").exports,k=n(66),x=n.n(k),w=n(67),C=n.n(w),j={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data(){this.refresh()}},mounted(){setTimeout(()=>{this._initScroll()},20)},beforeDestroy(){this.scroll&&this.scroll.destroy()},methods:{_initScroll(){this.$refs.wrapper&&(x.a.use(C.a),this.scroll=new x.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",()=>{this.scroll.y>-50&&this.$emit("top"),this.scroll.y<=this.scroll.maxScrollY+50&&this.$emit("bottom")}))},enable(){this.scroll&&this.scroll.enable()},disable(){this.scroll&&this.scroll.disable()},refresh(){return new Promise(e=>{this.$nextTick(()=>{setTimeout(()=>{this.scroll&&this.scroll.refresh(),this.$nextTick(()=>{e()})},20)})})},scrollTo(){setTimeout(()=>{this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},0)},scrollToElement(){setTimeout(()=>{this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},0)}}};var M={name:"MessageRoom",components:{Scroll:Object(d.a)(j,function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,function(e){var t=n(241);t.__inject__&&t.__inject__(e)},null,"2a757871").exports,ChatRoom:f.a},props:{mailto:{type:String,required:!0},name:{type:String,required:!0},slug:{type:String,required:!0}},data:()=>({message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}),computed:{query(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:()=>v,messageComps:()=>({message:y}),computeHelperTxt:()=>"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"},watch:{$route(){this.initRoom()}},beforeMount(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted(){this.initRoom()},methods:{initRoom(){this.$nextTick(async()=>{this.$refs.room&&this.$refs.room.clearMessage(),await this.$refs.loader.initData(),await this.$refs.loader.loadMore({force:!0}),this.clearUnreadCount(),this.watchMessageLoop()})},clearUnreadCount(){const menu=this.$store.state.messageMenu.list.filter(e=>e.channel===this.mailto)[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},watchMessageLoop(){this.stopWatcher&&this.stopWatcher();const e=this,t=e.mailto;this.stopWatcher=this.$watch(function(){return e.$store.state.messageRoom[e.mailto].time},function(){if(t!==e.mailto)return void this.stopWatcher();const n=e.$store.state.messageRoom[e.mailto].data;e.$store.state.socket.isConnected&&n?e.appendMessage(n):e.$refs.loader.loadMore({force:!0}),e.screenScroll(),e.clearUnreadCount()})},handleScrollUp(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad({data:data,args:e}){0!==e.is_up||data.result.length||(this.noMore=!0),this.$nextTick(()=>{1===e.is_up?(data.result.map(e=>e).reverse().map(e=>{this.appendMessage(e,!1)}),this.screenScroll(!1)):(data.result.map(e=>{this.appendMessage(e)}),this.screenScroll())})},screenScroll(e=!0){this.$refs.scroll&&this.$refs.scroll.refresh().then(()=>{const t=this.$refs.room.$el.clientHeight,n=this.$refs.wrap.clientHeight;t<n||(this.lastChatsHeight&&!e?this.$refs.scroll.scrollTo(0,this.lastChatsHeight-t):this.$refs.scroll.scrollTo(0,n-t),this.lastChatsHeight=t)})},appendMessage(e,t=!0){this.$refs.room.addMessage({id:e.id,type:"message",float:e.user.slug===this.slug?"right":"left",color:2===e.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:e},t)},handleAddBubble(){if(!this.message.trim())return;const e=[{type:"paragraph",data:{text:this.message.trim()}}],t=Math.random().toString(10).substring(3,6);this.appendMessage({id:t,user:this.$store.state.user,content:e,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:e}).then(e=>{this.$refs.room.updateMessage(t,{id:e.id}),this.$refs.loader.append(e)}).catch(()=>{this.$refs.room.updateMessage(t,{status:"error"})})},handleNewLine(){this.message&&(this.message+="\n")}}};var E=Object(d.a)(M,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room"},[e._ssrNode('<div class="room-header">'+e._ssrEscape("\n    "+e._s(e.name)+"\n  ")+"</div> "),n("no-ssr",[n("FlowLoader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:e.query,callback:e.handleMessageLoad,"cache-timeout":86400,auto:0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("div",{ref:"wrap",staticClass:"room-chats"},[n("Scroll",{ref:"scroll",attrs:{data:r},on:{top:e.handleScrollUp}},[n("ChatRoom",{ref:"room",attrs:{"avatar-component":e.avatarComp,"message-components":e.messageComps}})],1)],1)}}])}),e._v(" "),n("div",{staticClass:"room-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:e.message},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.handleAddBubble(t))},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.handleAddBubble(t)):null}],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?(t.preventDefault(),e.handleNewLine(t)):null},input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("div",{staticClass:"helper"},[n("span",{domProps:{textContent:e._s(e.computeHelperTxt)}}),e._v(" "),n("button",{on:{click:e.handleAddBubble}},[e._v("\n          发送\n        ")])])])],1)],2)},[],!1,function(e){var t=n(242);t.__inject__&&t.__inject__(e)},null,"174bc1b2").exports,S=n(122),L={name:"UserMessage",components:{MessageMenu:h,MessageRoom:E},mixins:[n(89).a,S.a],props:{slug:{type:String,required:!0}},computed:{mailto(){return this.$route.query.mailto},name(){return this.$route.query.name}}};var O=Object(d.a)(L,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-message"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("MessageMenu",{attrs:{slug:e.slug}}),e._v("\n       \n    ")],1),e._v(" "),r("ElCol",{attrs:{span:18}},[r("div",{staticClass:"room-adjust"},[e.mailto?r("MessageRoom",{attrs:{mailto:e.mailto,name:e.name,slug:e.slug}}):r("div",{staticClass:"need-pick"},[r("img",{attrs:{src:n(155)}}),e._v(" "),r("p",[e._v("未选择聊天")])])],1)])],1)],1)},[],!1,function(e){var t=n(243);t.__inject__&&t.__inject__(e)},null,"1992ef02");t.default=O.exports},75:function(e,t){},81:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=n(2);var component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?n("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)},[],!1,function(e){var t=n(83);t.__inject__&&t.__inject__(e)},null,"8c0ebd70");t.a=component.exports},83:function(e,t,n){"use strict";n.r(t);var r=n(75),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},89:function(e,t,n){"use strict";t.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}}};
//# sourceMappingURL=d6e944f47aa3138494b5.js.map