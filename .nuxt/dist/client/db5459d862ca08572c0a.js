(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(t,e,n){},318:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(r,l,function(e){return t[e]}.bind(null,l));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=117)}({0:function(t,e,n){"use strict";function r(t,e,n,r,l,o,c,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),o&&(h._scopeId="data-v-"+o),c?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},h._ssrRegister=f):l&&(f=d?function(){l.call(this,this.$root.$options.shadowRoot)}:l),f)if(h.functional){h._injectStyles=f;var _=h.render;h.render=function(t,e){return f.call(e),_(t,e)}}else{var v=h.beforeCreate;h.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return r})},117:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[t.showIcon?n("i",{staticClass:"el-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),n("div",{staticClass:"el-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"el-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"el-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"el-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"el-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){t.close()}}},[t._v(t._s(t.closeText))])])])])};r._withStripped=!0;var l={success:"el-icon-success",warning:"el-icon-warning",error:"el-icon-error"},o={name:"ElAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return"el-alert--"+this.type},iconClass:function(){return l[this.type]||"el-icon-info"},isBigIcon:function(){return this.description||this.$slots.default?"is-big":""},isBoldTitle:function(){return this.description||this.$slots.default?"is-bold":""}}},c=n(0),component=Object(c.a)(o,r,[],!1,null,null,null);component.options.__file="packages/alert/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},319:function(t,e,n){},320:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},324:function(t,e,n){"use strict";n(193);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=(n(342),n(18)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,null,null,null);e.a=component.exports},342:function(t,e,n){"use strict";var r=n(315);n.n(r).a},351:function(t,e,n){"use strict";n(193);var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=(n(356),n(357)),o=n(18);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("NLink",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);e.a=component.exports},356:function(t,e,n){"use strict";var r=n(319);n.n(r).a},357:function(t,e,n){"use strict";var r=n(320),l=n.n(r);e.default=l.a},359:function(t,e,n){"use strict";n(19);var r=n(2),l={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state:function(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)},btnText:function(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick:function(){var t=this;this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(function(){return t.submit()}).catch(function(){}):this.submit()):this.$channel.$emit("sign-in")},submit:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("social/toggle",{type:"user-follow",slug:this.slug,action:"is_following",params:{target_slug:this.slug,target_type:"user",method_type:"follow"}});case 2:(data=t.sent).success&&this.$emit("change",data.result);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},o=n(18),component=Object(o.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()},[],!1,null,null,null);e.a=component.exports},444:function(t,e,n){},466:function(t,e,n){"use strict";var r=n(324),l=n(351),o=n(359),c=n(473),d={name:"UserRelationItem",components:{UserAvatar:r.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},f=(n(559),n(18)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"user-rel-item clearfix"},[n("div",{staticClass:"avatar"},[n("UserAvatar",{attrs:{user:t.user,size:60}})],1),t._v(" "),n("div",{staticClass:"intro"},[n("UserNickname",{attrs:{user:t.user}}),t._v(" "),n("p",{staticClass:"oneline intro",domProps:{textContent:t._s(t.user.signature)}})],1),t._v(" "),n("div",{staticClass:"control"},[n("UserFollowBtn",{attrs:{slug:t.user.slug}}),t._v(" "),n("SendMailBtn",{attrs:{slug:t.user.slug,nickname:t.user.nickname}})],1)])},[],!1,null,null,null);e.a=component.exports},473:function(t,e,n){"use strict";var r={name:"SendMailBtn",props:{slug:{type:String,required:!0},nickname:{type:String,required:!0}},computed:{isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage:function(){var t=this;if(this.isAuth)if(this.isMine)this.$toast.info("不能给自己发消息");else{var e=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(function(n){e.location=t.$alias.user(t.$store.state.user.slug,"message?mailto=".concat(n,"&name=").concat(t.nickname))}).catch(function(n){t.$toast.error(n.message),e.close()})}else this.$channel.$emit("sign-in")}}},l=n(18),component=Object(l.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null);e.a=component.exports},559:function(t,e,n){"use strict";var r=n(444);n.n(r).a}}]);