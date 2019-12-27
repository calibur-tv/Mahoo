exports.ids=[6],exports.modules={171:function(t,e){t.exports={undefined:void 0}},287:function(t,e,o){"use strict";o.r(e);var n=o(171),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},378:function(t,e,o){"use strict";o.r(e);var n=o(55),r=o.n(n),l=o(56),d=o.n(l),m=o(94),c={name:"CreateBangumi",layout:"app",components:{ElUpload:d.a,ElSelect:r.a},mixins:[m.a],data(){return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:(t,e,o)=>{e&&e.length||o(new Error("别名不能为空")),~e.indexOf(this.tag.name)||o(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&o(new Error("别名不能包含英文逗号")),e.join("").length>100&&o(new Error("别名最多100个字符")),o()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},fetch(){this.tag.id&&(this.$toast.loading("抓取中..."),this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then(t=>{t&&t.name&&(this.tag={...this.tag,...t},this.$toast.stop())}).catch(t=>400===t.statusCode?(this.$toast.stop(),void this.$confirm("该番剧已存在，是否跳转？").then(()=>{(/qq/.test(window.navigator.userAgent.toLowerCase())?window.qq:window.wx).miniProgram.navigateTo({url:`/pages/bangumi/show/index?slug=${t.message}`})}).catch(()=>{})):this.$toast.error(t.message)))},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,this.$axios.$post("v1/bangumi/create",{...this.tag,alias:[this.tag.name,...this.tag.alias]}).then(t=>{this.$toast.info("创建成功"),(/qq/.test(window.navigator.userAgent.toLowerCase())?window.qq:window.wx).miniProgram.navigateTo({url:`/pages/bangumi/show/index?slug=${t}`})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}},head:{title:"创建番剧"}},h=o(1);var component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"create-bangumi"}},[o("ElForm",{ref:"form",staticClass:"edit-tag-info-form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[o("ElFormItem",{attrs:{label:"来源",required:""}},[o("ElInput",{attrs:{placeholder:"去 bgm.tv 寻找那个番剧吧！"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.fetch}},[t._v("\n        抓取资源\n      ")])],1),t._v(" "),o("ElFormItem",{attrs:{label:"头像",required:""}},[o("div",{staticClass:"avatar-field"},[t.tag.avatar?o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}):t._e(),t._v(" "),o("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],1)]),t._v(" "),o("ElFormItem",{attrs:{label:"名称",required:""}},[o("ElInput",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"别名",prop:"alias",required:""}},[o("p",{staticClass:"form-tip"},[t._v("\n        提示：按回车键生效\n      ")]),t._v(" "),o("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"简介",required:""}},[o("ElInput",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"500",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n        保存更改\n      ")])],1)],1)],1)}),[],!1,(function(t){var e=o(287);e.__inject__&&e.__inject__(t)}),null,"4133347a");e.default=component.exports},94:function(t,e,o){"use strict";var n=o(95);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(n.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},95:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));const n=t=>t.$axios.$get("v1/image/uptoken"),r=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}};