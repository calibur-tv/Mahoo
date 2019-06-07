/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{294:function(t,e,n){"use strict";var r=n(3),o=n(20),l=n(27),c=n(181),f=n(84),d=n(11),m=n(85).f,h=n(127).f,v=n(13).f,_=n(300).trim,C=r.Number,x=C,y=C.prototype,$="Number"==l(n(126)(y)),k="trim"in String.prototype,w=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&($?d(function(){y.valueOf.call(n)}):"Number"!=l(n))?c(new x(w(e)),n,C):w(e)};for(var O,j=n(7)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;j.length>M;M++)o(x,O=j[M])&&!o(C,O)&&v(C,O,h(x,O));C.prototype=y,y.constructor=C,n(14)(r,"Number",C)}},295:function(t,e,n){},296:function(t,e,n){},297:function(t,e,n){"use strict";n(36);var r=n(4),o=n(52);e.a={beforeMount:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){r.$store.state.isAuth?e():r.$toast.error("继续操作前请先登录").then(function(){window.location.href="/"})}),t.next=10;break;case 4:return n=Object(o.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent||this.$toast.error("继续操作前请先登录").then(function(){window.location.href="/"});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},300:function(t,e,n){var r=n(9),o=n(26),l=n(11),c=n(301),f="["+c+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t,e,n){var o={},f=l(function(){return!!c[t]()||"​"!="​"[t]()}),d=o[t]=f?e(v):c[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},301:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},302:function(t,e,n){"use strict";n(37),n(79);e.a={beforeMount:function(){var t=this,e=this.$watch("isAuth",function(n){n&&(t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}}),e())})}}},305:function(t,e,n){"use strict";n(294);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(318),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},318:function(t,e,n){"use strict";var r=n(295);n.n(r).a},319:function(t,e,n){"use strict";var r=n(296);n.n(r).a},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){},329:function(t,e,n){},330:function(t,e,n){},331:function(t,e,n){},345:function(t,e,n){"use strict";n(294);var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=(n(319),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,null,null,null);e.a=component.exports},369:function(t,e,n){"use strict";var r=n(322);n.n(r).a},370:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"09b1":function(t,e,n){"use strict";var r=n("b242"),i=n.n(r);i.a},5870:function(t,e,n){},"7f7f":function(t,e,n){"use strict";var r=n("5870"),i=n.n(r);i.a},9520:function(t,e,n){"use strict";var r=n("da2c"),i=n.n(r);i.a},b242:function(t,e,n){},da2c:function(t,e,n){},f6fd:function(t,e){!function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})}(document)},fb15:function(t,e,n){"use strict";var r;n.r(e),"undefined"!=typeof window&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o={name:"LoadingMsg"};function l(t,e,n,r,i,s,o,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:u}}n("7f7f");var p=l(o,function(){var t=this;return t.$createElement,t._self._c,t._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-msg"},[e("i",{staticClass:"dot"}),e("i",{staticClass:"dot"}),e("i",{staticClass:"dot"})])}],!1,null,null,null),c=p.exports,g={name:"MsgBubble",components:{LoadingMsg:c},props:{color:{type:Object,required:!0},float:{type:String,required:!0,validator:function(t){return~["left","right"].indexOf(t)}},loading:{type:Boolean,required:!0}},computed:{wrapperStyle:function(){return{backgroundColor:this.color.bg,color:this.color.text}}}},f=g,d=(n("9520"),l(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg-box",class:"msg-box-"+t.float},[n("div",{staticClass:"msg-avatar"},[t._t("avatar")],2),n("div",{staticClass:"msg-body"},[t._t("header"),n("div",{staticClass:"msg-bubble",style:t.wrapperStyle},[t.loading?t._t("loading",[n("loading-msg")]):t._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._t("default")],2)],2),t._t("footer")],2)])},[],!1,null,null,null)),m=d.exports,h={name:"TextMsg",props:{item:{type:Object,required:!0}}},v=h,_=l(v,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-msg",domProps:{innerHTML:t._s(t.item.content)}})},[],!1,null,null,null),C=_.exports,x={name:"ChatRoom",components:{Bubble:m},props:{avatarComponent:{type:Object,default:null},loadingComponent:{type:Object,default:null},messageComponents:{type:Object,default:function(){}},widgetComponents:{type:Object,default:function(){}},headerComponents:{type:Object,default:function(){}},footerComponents:{type:Object,default:function(){}},colors:{type:Array,default:function(){return[{bg:"#12b7f5",text:"#fff"},{bg:"#ff8eb3",text:"#fff"}]}}},data:function(){return{list:[],last_pending_id:0,resolver:null}},computed:{msgTypes:function(){return Object.assign({"text-msg":C},this.messageComponents)}},methods:{addMessage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.type||"text-msg",r=t.id||Math.random().toString(10).substring(3,6),i=t.footer||"",s=t.header||"",o=t.loading||!1,a=t.pending||!1,l={id:r,isBubble:!0,message:this.msgTypes[n],header:s?this.headerComponents[s]:null,footer:i?this.footerComponents[i]:null,float:t.float||"left",color:this._computeBubbleColor(t),loading:o,item:t.data,next:null};e?this.list.push(l):this.list.unshift(l),o||a||this._handleResolve(t.data),a&&(this.last_pending_id=r,this._setResolve())},addWidget:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.type||"divide-line",r=t.id||Math.random().toString(10).substring(3,6),i={id:r,isBubble:!1,message:this.widgetComponents[n],item:t.data};e?this.list.push(i):this.list.unshift(i)},_setResolve:function(){var t=this;setTimeout(function(){t.last_pending_id&&t.list.forEach(function(e,n){e.id===t.last_pending_id&&(t.list[n].next=new Promise(function(e){t.resolver=e}))})},0)},_handleResolve:function(t){this.last_pending_id&&(this.resolver(t),this._setResolve())},_handleMsgLoaded:function(t){this.list[t].loading=!1,this.list[t].next||this._handleResolve(this.list[t].item)},_handleMsgResolve:function(t){this.last_pending_id===t&&(this.last_pending_id=0,this.resolver=null)},_computeBubbleColor:function(t){return t.color?t.color:t.data&&t.data.user&&t.data.user.id?this.colors[t.data.user.id%this.colors.length]:this.colors[t.id%this.colors.length]}}},y=x,$=(n("09b1"),l(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{staticClass:"chat-room",attrs:{tag:"div",name:"msg-fade"}},[t._l(t.list,function(e,r){return[e.isBubble?n("Bubble",{key:r+"-"+e.id,attrs:{color:e.color,loading:e.loading,float:e.float}},[t.avatarComponent&&e.item.user?n(t.avatarComponent,{tag:"component",attrs:{slot:"avatar",item:e.item.user},slot:"avatar"}):t._e(),e.header&&e.item.user?n(e.header,{tag:"component",attrs:{slot:"header",item:e.item.user},slot:"header"}):t._e(),t.loadingComponent?n(t.loadingComponent,{tag:"component",attrs:{slot:"loading"},slot:"loading"}):t._e(),n(e.message,{key:e.id,tag:"component",attrs:{item:e.item,next:e.next},on:{loaded:function(e){return t._handleMsgLoaded(r)},resolve:function(n){return t._handleMsgResolve(e.id)}}}),e.footer?n(e.footer,{tag:"component",attrs:{slot:"footer",item:e.item},slot:"footer"}):t._e()],1):n(e.message,{key:e.id,tag:"component",attrs:{item:e.item}})]})],2)},[],!1,null,null,null)),k=$.exports;e.default=k}}).default},371:function(t,e,n){},372:function(t,e,n){"use strict";var r=n(323);n.n(r).a},373:function(t,e,n){"use strict";var r=n(324);n.n(r).a},374:function(t,e,n){"use strict";var r=n(325);n.n(r).a},375:function(t,e,n){"use strict";var r=n(326);n.n(r).a},376:function(t,e,n){"use strict";var r=n(327);n.n(r).a},377:function(t,e,n){"use strict";var r=n(328);n.n(r).a},378:function(t,e,n){"use strict";var r=n(329);n.n(r).a},379:function(t,e,n){"use strict";var r=n(330);n.n(r).a},380:function(t,e,n){"use strict";var r=n(331);n.n(r).a},399:function(t,e,n){"use strict";n.r(e);var r={name:"MessageMenu",props:{},data:function(){return{menu:[]}},computed:{},watch:{},created:function(){},mounted:function(){this.getMessageMenu()},methods:{getMessageMenu:function(){var t=this;this.$axios.$get("v1/message/menu").then(function(data){t.menu=data})}}},o=(n(369),n(25)),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return n("li",{key:e.channel},[n("nuxt-link",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(e.user.avatar,{width:40}),alt:e.user.nickname}}),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),n("div",{staticClass:"read-badge"},[t._v("\n          "+t._s(e.count>99?"99+":e.count)+"\n        ")])])])],1)}),0)},[],!1,null,null,null).exports,c=(n(79),n(82),n(83),n(12),n(370)),f=n.n(c),d=(n(371),n(124)),m=n(305),h={name:"ChatAvatar",components:{UserAvatar:m.a},props:{item:{type:Object,required:!0}},computed:{isMine:function(){return this.$store.state.user.slug===this.item.slug}}},v=(n(372),Object(o.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,null,null,null).exports),_={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}},C=(n(373),Object(o.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content-txt-parser"},[e("p",{domProps:{innerHTML:this._s(this.item.content)}})])},[],!1,null,null,null).exports),x={name:"JsonContentImgParser",props:{item:{type:Object,required:!0}}},y=(n(374),Object(o.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-content-img-parser"},[n("img",{attrs:{src:t.$resize(t.item.url),width:t.item.width,height:t.item.height,alt:t.item.text}}),t._v(" "),t.item.text?n("p",{staticClass:"img-tip",domProps:{textContent:t._s(t.item.text)}}):t._e()])},[],!1,null,null,null).exports),$={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}},k=(n(375),Object(o.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content-txt-parser"},[e("blockquote",{domProps:{innerHTML:this._s(this.item.text)}})])},[],!1,null,null,null).exports),w={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}},O=(n(376),Object(o.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content-txt-parser"},[this.item.text?e("h3",{domProps:{textContent:this._s(this.item.text)}}):this._e()])},[],!1,null,null,null).exports),j=(n(80),{name:"JsonContentListParser",props:{item:{type:Object,required:!0}},computed:{list:function(){var t=this.item.text;if(!t)return[];for(;/\n\n/.test(t);)t=t.replace(/\n\n/g,"\n");return t.split("\n")}}}),M=(n(377),{name:"JsonContent",components:{TitleParser:O,TxtParser:C,ImgParser:y,UseParser:k,ListParser:Object(o.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-content-list-parser"},["1"===t.item.sort?n("ol",t._l(t.list,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.list,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,null,null,null).exports},props:{content:{required:!0,type:Array},show:{type:Boolean,default:!0}}}),E={name:"ChatMessage",components:{JsonContent:Object(o.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"json-content"},this._l(this.content,function(t,n){return e(t.type+"-parser",{key:n,tag:"component",attrs:{item:t}})}),1):this._e()},[],!1,null,null,null).exports},props:{item:{type:Object,required:!0}}},P=(n(378),Object(o.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("json-content",{attrs:{content:this.item.content}})],1)},[],!1,null,null,null).exports),N=n(52),S=n(345),T={name:"MessageRoom",components:{ChatRoom:f.a,UserAvatar:m.a,UserNickname:S.a},props:{mailto:{type:String,required:!0}},data:function(){return{message:"",target:null}},computed:{avatarComp:function(){return v},messageComps:function(){return{message:P}},status:function(){return this.$store.state.socket.reconnectError?"error":this.$store.state.socket.isConnected?"ok":"warn"}},watch:{"$store.state.socket.lastGetAt":function(){this.appendMessage(this.$store.state.socket.message)}},created:function(){},mounted:function(){this.getMailtoUser()},methods:{getMailtoUser:function(){var t=this;this.mailto&&Object(d.c)(this,{slug:this.mailto}).then(function(e){t.target=e}).catch(function(e){t.$toast.error(e.message)})},appendMessage:function(t){this.$refs.room.addMessage({type:"message",float:"left",id:Math.random().toString(10).substring(3,6),color:2===t.from_user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:{content:t.content,created_at:t.created_at,user:t.from_user}})},handleAddBubble:function(){if("warn"!==this.status)if("error"!==this.status){if(this.message.trim()){var t=this.$store.state.user,e=[{type:"txt",content:this.message.trim().replace(/\r?\n/g,"<br>")}];this.$refs.room.addMessage({type:"message",float:"right",id:Math.random().toString(10).substring(3,6),color:2===t.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:{content:e,created_at:Date.now(),user:t}}),this.message="",this.$channel.send({message_type:1,to_user_slug:this.mailto,from_user_token:Object(N.a)(),content:e})}}else this.$toast.error("请稍候再试");else this.$toast.info("正在连接服务器")},handleNewLine:function(){this.message&&(this.message+="\n")}}},R=(n(379),Object(o.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-room"},[n("div",{staticClass:"message-header"},[t.target?n("user-avatar",{attrs:{user:t.target}}):t._e(),t._v(" "),n("div",{staticClass:"status",class:"status-"+t.status}),t._v(" "),t.target?n("user-nickname",{staticClass:"nickname-wrap",attrs:{user:t.target}}):t._e()],1),t._v(" "),n("ChatRoom",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}}),t._v(" "),n("div",[n("el-input",{attrs:{type:"textarea",rows:5,resize:"none",maxlength:"500",placeholder:"say it..."},nativeOn:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null}]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)},[],!1,null,null,null).exports),A=n(302),I={name:"UserMessage",components:{MessageMenu:l,MessageRoom:R},mixins:[n(297).a,A.a],computed:{mailto:function(){return this.$route.query.mailto}}},B=(n(380),Object(o.a)(I,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-message"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[this._v("\n       \n      "),e("message-menu")],1),this._v(" "),e("el-col",{attrs:{span:18}},[this.mailto?e("message-room",{attrs:{mailto:this.mailto}}):[this._v("\n        ... chat\n      ")]],2)],1)],1)},[],!1,null,null,null));e.default=B.exports}}]);