(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(e,t,n){},252:function(e,t,n){},257:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=(n(270),n(17)),component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?n("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:e.$resize(e.avatar||e.user.avatar,{width:e.size}),alt:e.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:e.$resize(e.avatar||e.user.avatar,{width:e.size}),alt:e.user.nickname}})])},[],!1,null,null,null);t.a=component.exports},270:function(e,t,n){"use strict";var r=n(251);n.n(r).a},271:function(e,t,n){"use strict";var r=n(252);n.n(r).a},272:function(e,t,n){},295:function(e,t,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},badge:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=(n(271),n(17)),component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix"},[e.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?n("span",{staticClass:"badge"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+e.sexClass.name,style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?n("span",{staticClass:"badge ic-level",domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e.badge?e._l(e.user.roles,function(t,r){return n("span",{key:r,staticClass:"badge ic-badge",domProps:{textContent:e._s(t)}})}):e._e()],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:e.$alias.user(e.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?n("span",{staticClass:"badge"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+e.sexClass.name,style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?n("span",{staticClass:"badge ic-level",domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e.badge?e._l(e.user.roles,function(t,r){return n("span",{key:r,staticClass:"badge ic-badge",domProps:{textContent:e._s(t)}})}):e._e()],2)],1)},[],!1,null,null,null);t.a=component.exports},317:function(e,t,n){"use strict";var r=n(272);n.n(r).a},352:function(e,t,n){"use strict";n.r(t);var r=n(62),l=n(257),c=n(295),o={name:"UserLayout",layout:"web",components:{UserAvatar:l.a,UserNickname:c.a},props:{slug:{type:String,required:!0}},head(){const{user:e}=this;return{title:e.nickname,meta:[{hid:"description",name:"description",content:"".concat(e.nickname,",").concat(e.signature,",").concat("咔哩吧是一个二次元社区")}]}},data:()=>({user:null}),computed:{isAuth(){return this.$store.state.isAuth},isMine(){return!!this.isAuth&&this.self.slug===this.slug},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){let e=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/")},{name:"喜好",icon:"like_fill",color:"#fb7299",route:"/user/".concat(this.slug,"/emotion/")}];return this.isMine&&(e=e.concat([{name:"消息",icon:"message_fill",color:"#02b5da",route:"/user/".concat(this.slug,"/message/")},{name:"通知",icon:"remind_fill",color:"#ff5d47",route:"/user/".concat(this.slug,"/notice/")},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting/")}])),e}},asyncData(e){let{app:t,error:n,params:l}=e;return Object(r.c)(t,{slug:l.slug}).then(e=>({user:e})).catch(n)},methods:{toMessage(){this.isAuth?this.isMine||window.open(this.$alias.user(this.self.slug,"message/?mailto=".concat(this.slug))):this.$channel.$emit("sign-in")}}},d=(n(317),n(17)),component=Object(d.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-layout"}},[n("div",{staticClass:"container",attrs:{id:"user-panel"}},[n("div",{staticClass:"banner",style:{backgroundImage:"url("+e.$resize(e.banner,{height:200,mode:2})+")"}},[n("div",{staticClass:"user"},[n("user-avatar",{attrs:{user:e.user,avatar:e.avatar,size:68}}),e._v(" "),n("div",{staticClass:"content"},[n("user-nickname",{attrs:{user:e.user,nickname:e.nickname,sex:e.sex}}),e._v(" "),n("p",{staticClass:"signature oneline",domProps:{textContent:e._s(e.signature)}})],1)],1),e._v(" "),n("div",{staticClass:"actions"},[n("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n          关注\n        ")]),e._v(" "),n("el-button",{attrs:{type:"info",size:"small"},on:{click:e.toMessage}},[e._v("\n          发消息\n        ")])],1)]),e._v(" "),n("v-switcher",{attrs:{headers:e.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},[e._l(e.headers,function(t,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:t.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+t.icon,style:{color:t.color}}),e._v(" "),n("span",{domProps:{textContent:e._s(t.name)}})])}),e._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[e._v("\n            关注数\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])]),e._v(" "),n("li",[n("div",{staticClass:"label"},[e._v("\n            粉丝数\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])]),e._v(" "),n("li",[n("div",{staticClass:"label"},[e._v("\n            曝光度\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])]),e._v(" "),n("li",[n("div",{staticClass:"label"},[e._v("\n            活跃度\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])])])],2)],1),e._v(" "),n("nuxt-child")],1)},[],!1,null,null,null);t.default=component.exports}}]);