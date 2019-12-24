exports.ids=[43],exports.modules={132:function(t,e){t.exports={container:"container_38LTS",header:"header_1m5og",title:"title_20O3t",close:"close_uLA1x",content:"content_37QpV",loading:"loading_32o64","no-more":"no-more_2gF1n",noMore:"no-more_2gF1n",footer:"footer_2bdAt",cancel:"cancel_3BYdT",submit:"submit_1MUgK","skeleton-loading":"skeleton-loading_O1luh",skeletonLoading:"skeleton-loading_O1luh",skeleton:"skeleton_3GqAO"}},147:function(t,e,o){"use strict";var n=o(66),l={name:"VDialog",components:{ElDialog:o.n(n).a},props:{value:{type:Boolean,default:!1,required:!0},customClass:{type:String,default:""},close:{type:Boolean,default:!0},width:{type:String,default:"620px"},height:{type:String,default:""},title:{type:String,default:"提示"},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},submitText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},scroll:{type:Function,default:null},fullscreen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},theme:{type:String,validator:t=>~["success","danger"].indexOf(t),default:"success"}},data(){return{dialogVisible:this.value}},computed:{computeDialogHeight(){return this.height?{height:this.height}:this.scroll?{height:"600px"}:{height:"auto"}}},mounted(){this.$watch("value",t=>{this.dialogVisible=t,window.__closeImageLazy__=t}),this.$watch("dialogVisible",t=>{this.$emit("input",t),window.__closeImageLazy__=t})},methods:{beforeClose(t){t(),this.$emit("cancel"),this.dialogVisible=!1},cancel(){this.$emit("cancel"),this.dialogVisible=!1},submit(){this.$emit("submit")},handleScroll(t){if(!this.scroll||this.loading||this.noMore)return;if(!this.$refs.ul)return;const main=t.currentTarget||t.target;this.$refs.ul.clientHeight-main.clientHeight-main.scrollTop<30&&this.scroll()}}},r=o(1);var component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ElDialog",{staticClass:"v-dialog",attrs:{width:t.width,"custom-class":t.customClass,"show-close":!1,visible:t.dialogVisible,"before-close":t.beforeClose,fullscreen:t.fullscreen,"modal-append-to-body":!1,"append-to-body":!1,"close-on-click-modal":t.clickClose,"close-on-press-escape":t.clickClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("section",{class:t.$style.container},[t.header?o("header",{class:t.$style.header,attrs:{slot:"header"},slot:"header"},[t._t("title",[o("h4",{class:t.$style.title,domProps:{textContent:t._s(t.title)}})])],2):t._e(),t._v(" "),!t.clickClose||t.close?o("button",{class:t.$style.close,on:{click:t.cancel}},[t._v("\n      ×\n    ")]):t._e(),t._v(" "),o("main",{class:t.$style.content,style:t.computeDialogHeight,on:{scroll:t.handleScroll}},[t.scroll?[o("ul",{ref:"ul"},[t._t("default")],2),t._v(" "),t.loading?t._t("loading",[o("p",[t._v("加载中...")])]):t.noMore?t._t("nomore",[o("p",[t._v("没有更多了")])]):t._e()]:t._t("default")],2),t._v(" "),t.footer?o("footer",{class:t.$style.footer},[t._t("footer",[t.cancelText?o("button",{class:t.$style.cancel,domProps:{textContent:t._s(t.cancelText)},on:{click:t.cancel}}):t._e(),t._v(" "),o("button",{class:[t.$style.submit,"btn-"+t.theme],attrs:{loading:t.loading},domProps:{textContent:t._s(t.submitText)},on:{click:t.submit}})])],2):t._e()])])}),[],!1,(function(t){var e=o(200);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"5669612c");e.a=component.exports},200:function(t,e,o){"use strict";o.r(e);var n=o(132),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=l.a},224:function(t,e){},322:function(t,e,o){"use strict";o.r(e);var n=o(224),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=l.a},363:function(t,e,o){"use strict";o.r(e);var n=o(3),l=o(26),r={name:"UserAuthSetting",components:{VDialog:o(147).a},data:()=>({phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user}},methods:{bindUserQQ(){this.user.providers.bind_qq||(window.location.href=`https://api.calibur.tv/callback/oauth2/qq?from=bind&token=${Object(l.a)()}&redirect=${encodeURIComponent(window.location.href)}`)},bindUserWechat(){this.user.providers.bind_wechat||(window.location.href=`https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=${Object(l.a)()}&redirect=${encodeURIComponent(window.location.href)}`)},bindUserPhone(){this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(async({value:t})=>{this.phone=t;try{await Object(n.i)(this,{type:"bind_phone",phone_number:t}),this.showInfoForm=!0}catch(t){this.$toast.error(t.message)}finally{this.timeout=60;const t=setInterval(()=>{--this.timeout||clearInterval(t)},1e3)}}).catch(()=>{}))},async submitBindPhone(){if(!this.user.providers.bind_phone){if(6!==this.authCode.length)return this.$toast.warn("请输入正确的短信验证码");if(this.password.length<6)return this.$toast.warn("密码不能小于6位");if(this.password.length>16)return this.$toast.warn("密码不能大于16位");if(!this.loadingBindPhone){this.loadingBindPhone=!0;try{await Object(n.a)(this,{slug:this.user.slug,phone:this.phone,password:this.password,authCode:this.authCode}),this.$toast.success("手机号绑定成功").then(()=>{this.showInfoForm=!1,window.location.reload()})}catch(t){this.$toast.error(t.message)}finally{this.loadingBindPhone=!1}}}}}},c=o(1);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-auth-setting"}},[t._ssrNode((t.isAuth?'<ul class="providers"><li><i'+t._ssrClass("iconfont ic-qq",{"is-bind":t.user.providers.bind_qq})+"></i></li> <li><i"+t._ssrClass("iconfont ic-v-chat",{"is-bind":t.user.providers.bind_wechat})+"></i></li> <li><i"+t._ssrClass("iconfont ic-phone",{"is-bind":t.user.providers.bind_phone})+"></i></li></ul>":"\x3c!----\x3e")+" "),o("VDialog",{attrs:{width:"400px",title:"填写信息"},on:{submit:t.submitBindPhone},model:{value:t.showInfoForm,callback:function(e){t.showInfoForm=e},expression:"showInfoForm"}},[o("ElInput",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:t.authCode,callback:function(e){t.authCode="string"==typeof e?e.trim():e},expression:"authCode"}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("ElInput",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.password,callback:function(e){t.password="string"==typeof e?e.trim():e},expression:"password"}})],1)],2)}),[],!1,(function(t){var e=o(322);e.__inject__&&e.__inject__(t)}),null,"756df4a2");e.default=component.exports}};