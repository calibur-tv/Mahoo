(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{277:function(t,e,n){},279:function(t,e,n){},280:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},284:function(t,e,n){"use strict";var l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(285),n(9)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,null,null,null);e.a=component.exports},285:function(t,e,n){"use strict";var l=n(277);n.n(l).a},288:function(t,e,n){t.exports=function(t){var e={};function n(l){if(e[l])return e[l].exports;var r=e[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(l,r,function(e){return t[e]}.bind(null,r));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function l(t,e,n,l,r,o,c,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),l&&(h.functional=!0),o&&(h._scopeId="data-v-"+o),c?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},h._ssrRegister=f):r&&(f=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(h.functional){h._injectStyles=f;var _=h.render;h.render=function(t,e){return f.call(e),_(t,e)}}else{var v=h.beforeCreate;h.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return l})},97:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[t.showIcon?n("i",{staticClass:"el-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),n("div",{staticClass:"el-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"el-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"el-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"el-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"el-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){t.close()}}},[t._v(t._s(t.closeText))])])])])};l._withStripped=!0;var r={success:"el-icon-success",warning:"el-icon-warning",error:"el-icon-error"},o={name:"ElAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return"el-alert--"+this.type},iconClass:function(){return r[this.type]||"el-icon-info"},isBigIcon:function(){return this.description||this.$slots.default?"is-big":""},isBoldTitle:function(){return this.description||this.$slots.default?"is-bold":""}}},c=n(0),component=Object(c.a)(o,l,[],!1,null,null,null);component.options.__file="packages/alert/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},297:function(t,e,n){"use strict";var l={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(n(300),n(301)),o=n(9);var component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("NLink",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=r.default.locals||r.default},null,null);e.a=component.exports},300:function(t,e,n){"use strict";var l=n(279);n.n(l).a},301:function(t,e,n){"use strict";var l=n(280),r=n.n(l);e.default=r.a},329:function(t,e,n){"use strict";var l=n(2),r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},submit(){var t=this;return Object(l.a)(function*(){var data=yield t.$store.dispatch("social/toggle",{type:"user-follow",slug:t.slug,action:"is_following",params:{target_slug:t.slug,target_type:"user",method_type:"follow"}});data.success&&t.$emit("change",data.result)})()}}},o=n(9),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()},[],!1,null,null,null);e.a=component.exports},419:function(t,e,n){},446:function(t,e,n){"use strict";var l=n(284),r=n(297),o=n(329),c=n(456),d={name:"UserRelationItem",components:{UserAvatar:l.a,UserNickname:r.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},f=(n(555),n(9)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"user-rel-item clearfix"},[n("div",{staticClass:"avatar"},[n("UserAvatar",{attrs:{user:t.user,size:60}})],1),t._v(" "),n("div",{staticClass:"intro"},[n("UserNickname",{attrs:{user:t.user}}),t._v(" "),n("p",{staticClass:"oneline intro",domProps:{textContent:t._s(t.user.signature)}})],1),t._v(" "),n("div",{staticClass:"control"},[n("UserFollowBtn",{attrs:{slug:t.user.slug}}),t._v(" "),n("SendMailBtn",{attrs:{slug:t.user.slug,nickname:t.user.nickname}})],1)])},[],!1,null,null,null);e.a=component.exports},456:function(t,e,n){"use strict";var l={name:"SendMailBtn",props:{slug:{type:String,required:!0},nickname:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(this.isAuth)if(this.isMine)this.$toast.info("不能给自己发消息");else{var t=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(e=>{t.location=this.$alias.user(this.$store.state.user.slug,"message?mailto=".concat(e,"&name=").concat(this.nickname))}).catch(e=>{this.$toast.error(e.message),t.close()})}else this.$channel.$emit("sign-in")}}},r=n(9),component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null);e.a=component.exports},555:function(t,e,n){"use strict";var l=n(419);n.n(l).a}}]);