(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{359:function(e,t,o){e.exports=JSON.parse('{"container":"container_38LTS","header":"header_1m5og","title":"title_20O3t","close":"close_uLA1x","content":"content_37QpV","loading":"loading_32o64","no-more":"no-more_2gF1n","noMore":"no-more_2gF1n","footer":"footer_2bdAt","cancel":"cancel_3BYdT","submit":"submit_1MUgK","skeleton-loading":"skeleton-loading_O1luh","skeletonLoading":"skeleton-loading_O1luh","skeleton":"skeleton_3GqAO"}')},384:function(e,t,o){"use strict";var dialog=o(449),n={name:"VDialog",components:{ElDialog:o.n(dialog).a},props:{value:{type:Boolean,default:!1,required:!0},customClass:{type:String,default:""},close:{type:Boolean,default:!0},width:{type:String,default:"620px"},height:{type:String,default:""},title:{type:String,default:"提示"},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},submitText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},scroll:{type:Function,default:null},fullscreen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},theme:{type:String,validator:function(e){return~["success","danger"].indexOf(e)},default:"success"}},data:function(){return{dialogVisible:this.value}},computed:{computeDialogHeight:function(){return this.height?{height:this.height}:this.scroll?{height:"600px"}:{height:"auto"}}},mounted:function(){var e=this;this.$watch("value",(function(t){e.dialogVisible=t,window.__closeImageLazy__=t})),this.$watch("dialogVisible",(function(t){e.$emit("input",t),window.__closeImageLazy__=t}))},methods:{beforeClose:function(e){e(),this.$emit("cancel"),this.dialogVisible=!1},cancel:function(){this.$emit("cancel"),this.dialogVisible=!1},submit:function(){this.$emit("submit")},handleScroll:function(e){if(this.scroll&&!this.loading&&!this.noMore&&this.$refs.ul){var main=e.currentTarget||e.target;this.$refs.ul.clientHeight-main.clientHeight-main.scrollTop<30&&this.scroll()}}}},r=o(450),l=o(16);var component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ElDialog",{staticClass:"v-dialog",attrs:{width:e.width,"custom-class":e.customClass,"show-close":!1,visible:e.dialogVisible,"before-close":e.beforeClose,fullscreen:e.fullscreen,"modal-append-to-body":!1,"append-to-body":!1,"close-on-click-modal":e.clickClose,"close-on-press-escape":e.clickClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("section",{class:e.$style.container},[e.header?o("header",{class:e.$style.header,attrs:{slot:"header"},slot:"header"},[e._t("title",[o("h4",{class:e.$style.title,domProps:{textContent:e._s(e.title)}})])],2):e._e(),e._v(" "),!e.clickClose||e.close?o("button",{class:e.$style.close,on:{click:e.cancel}},[e._v("\n      ×\n    ")]):e._e(),e._v(" "),o("main",{class:e.$style.content,style:e.computeDialogHeight,on:{scroll:e.handleScroll}},[e.scroll?[o("ul",{ref:"ul"},[e._t("default")],2),e._v(" "),e.loading?e._t("loading",[o("p",[e._v("加载中...")])]):e.noMore?e._t("nomore",[o("p",[e._v("没有更多了")])]):e._e()]:e._t("default")],2),e._v(" "),e.footer?o("footer",{class:e.$style.footer},[e._t("footer",[e.cancelText?o("button",{class:e.$style.cancel,domProps:{textContent:e._s(e.cancelText)},on:{click:e.cancel}}):e._e(),e._v(" "),o("button",{class:[e.$style.submit,"btn-"+e.theme],attrs:{loading:e.loading},domProps:{textContent:e._s(e.submitText)},on:{click:e.submit}})])],2):e._e()])])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.a=component.exports},449:function(e,t,o){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/dist/",o(o.s=89)}({0:function(e,t,o){"use strict";function n(e,t,o,n,r,l,c,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=o,f._compiled=!0),n&&(f.functional=!0),l&&(f._scopeId="data-v-"+l),c?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},f._ssrRegister=h):r&&(h=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(e,t){return h.call(t),m(e,t)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,h):[h]}return{exports:e,options:f}}o.d(t,"a",(function(){return n}))},11:function(e,t){e.exports=o(140)},15:function(e,t){e.exports=o(141)},4:function(e,t){e.exports=o(104)},89:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-dialog__wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleWrapperClick(t)}}},[o("div",{key:e.key,ref:"dialog",class:["el-dialog",{"is-fullscreen":e.fullscreen,"el-dialog--center":e.center},e.customClass],style:e.style,attrs:{role:"dialog","aria-modal":"true","aria-label":e.title||"dialog"}},[o("div",{staticClass:"el-dialog__header"},[e._t("title",[o("span",{staticClass:"el-dialog__title"},[e._v(e._s(e.title))])]),e.showClose?o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:e.handleClose}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]):e._e()],2),e.rendered?o("div",{staticClass:"el-dialog__body"},[e._t("default")],2):e._e(),e.$slots.footer?o("div",{staticClass:"el-dialog__footer"},[e._t("footer")],2):e._e()])])])};n._withStripped=!0;var r=o(15),l=o.n(r),c=o(11),d=o.n(c),h=o(4),f=o.n(h),m={name:"ElDialog",mixins:[l.a,f.a,d.a],props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1},destroyOnClose:Boolean},data:function(){return{closed:!1,key:0}},watch:{visible:function(e){var t=this;e?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick((function(){t.$refs.dialog.scrollTop=0})),this.appendToBody&&document.body.appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"),this.destroyOnClose&&this.$nextTick((function(){t.key++})))}},computed:{style:function(){var style={};return this.fullscreen||(style.marginTop=this.top,this.width&&(style.width=this.width)),style}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(e){!1!==e&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:function(){this.broadcast("ElSelectDropdown","updatePopper"),this.broadcast("ElDropdownMenu","updatePopper")},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&document.body.appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},_=o(0),component=Object(_.a)(m,n,[],!1,null,null,null);component.options.__file="packages/dialog/src/component.vue";var v=component.exports;v.install=function(e){e.component(v.name,v)};t.default=v}})},450:function(e,t,o){"use strict";var n=o(359),r=o.n(n);t.default=r.a},476:function(e,t,o){},609:function(e,t,o){"use strict";var n=o(476);o.n(n).a},677:function(e,t,o){"use strict";o.r(t);o(20);var n,r=o(2),l=o(28),c=o(74),d={name:"UserAuthSetting",components:{VDialog:o(384).a},data:function(){return{phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}},computed:{isAuth:function(){return this.$store.state.isAuth},user:function(){return this.$store.state.user}},methods:{bindUserQQ:function(){this.user.providers.bind_qq||(window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=bind&token=".concat(Object(c.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserWechat:function(){this.user.providers.bind_wechat||(window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=".concat(Object(c.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserPhone:function(){var e=this;this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(o){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.value,e.phone=n,t.prev=2,t.next=5,Object(l.i)(e,{type:"bind_phone",phone_number:n});case 5:e.showInfoForm=!0,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.$toast.error(t.t0.message);case 11:return t.prev=11,e.timeout=60,r=setInterval((function(){--e.timeout||clearInterval(r)}),1e3),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[2,8,11,15]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(){})))},submitBindPhone:(n=Object(r.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user.providers.bind_phone){e.next=2;break}return e.abrupt("return");case 2:if(6===this.authCode.length){e.next=4;break}return e.abrupt("return",this.$toast.warn("请输入正确的短信验证码"));case 4:if(!(this.password.length<6)){e.next=6;break}return e.abrupt("return",this.$toast.warn("密码不能小于6位"));case 6:if(!(this.password.length>16)){e.next=8;break}return e.abrupt("return",this.$toast.warn("密码不能大于16位"));case 8:if(!this.loadingBindPhone){e.next=10;break}return e.abrupt("return");case 10:return this.loadingBindPhone=!0,e.prev=11,e.next=14,Object(l.a)(this,{slug:this.user.slug,phone:this.phone,password:this.password,authCode:this.authCode});case 14:this.$toast.success("手机号绑定成功").then((function(){t.showInfoForm=!1,window.location.reload()})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),this.$toast.error(e.t0.message);case 20:return e.prev=20,this.loadingBindPhone=!1,e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[11,17,20,23]])}))),function(){return n.apply(this,arguments)})}},h=(o(609),o(16)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"user-auth-setting"}},[e.isAuth?o("ul",{staticClass:"providers"},[o("li",{on:{click:e.bindUserQQ}},[o("i",{staticClass:"iconfont ic-qq",class:{"is-bind":e.user.providers.bind_qq}})]),e._v(" "),o("li",{on:{click:e.bindUserWechat}},[o("i",{staticClass:"iconfont ic-v-chat",class:{"is-bind":e.user.providers.bind_wechat}})]),e._v(" "),o("li",{on:{click:e.bindUserPhone}},[o("i",{staticClass:"iconfont ic-phone",class:{"is-bind":e.user.providers.bind_phone}})])]):e._e(),e._v(" "),o("VDialog",{attrs:{width:"400px",title:"填写信息"},on:{submit:e.submitBindPhone},model:{value:e.showInfoForm,callback:function(t){e.showInfoForm=t},expression:"showInfoForm"}},[o("ElInput",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:e.authCode,callback:function(t){e.authCode="string"==typeof t?t.trim():t},expression:"authCode"}}),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("ElInput",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:e.password,callback:function(t){e.password="string"==typeof t?t.trim():t},expression:"password"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);