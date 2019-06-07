(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{254:function(e,t,r){"use strict";r(61),r(58),r(59);var n=r(2),o=r(105);t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(e){e&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var e=this;return Object(n.a)(function*(){let t=e.$cookie.get("UPLOAD-TOKEN");t?e.uploadHeaders.token=e.$cookie.get("UPLOAD-TOKEN"):(t=yield Object(o.b)(e),e.uploadHeaders.token=t,e.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(e,t){this.uploadImageList.forEach((r,n)=>{r.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(e))}),this.$toast.error("图片：".concat(t.name," 上传失败"))},handleImageUploadRemove(e){this.uploadImageList.forEach((t,r)=>{t.uid===e.uid&&(this.uploadImageList.splice(r,1),this.uploadImageTotal--)})},handleImageUploadSuccess(e,t){this.uploadImageList.forEach((r,n)=>{r.uid===t.uid&&(this.uploadImageList[n]=Object.assign(r,{data:e.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(e.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(e=>{let{slug:t,file:r}=e;return"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())})({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0}}}},288:function(e,t,r){},341:function(e,t,r){"use strict";var n=r(288);r.n(n).a},365:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(58),r(265)),l=r.n(o),c=r(337),d=r.n(c),m=r(264),h=r.n(m),f=r(258),v=r.n(f),U=r(340),k=r.n(U),y=r(102),_=r(254),x={name:"UserBasicSetting",components:{"el-switch":k.a,"el-radio":v.a,"el-radio-group":h.a,"el-date-picker":d.a,"el-upload":l.a},mixins:[_.a],data:()=>({submitting:!1,rule:{nickname:[{validator:(e,t,r)=>{const n=t.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;n?n<2?r(new Error("昵称至少为2个字符")):n>14&&r(new Error("昵称不能超过14个字符")):r(new Error("昵称不能为空")),r()},trigger:"submit"}],signature:[{validator:(e,t,r)=>{t.length>150&&r(new Error("签名最多 150 个字")),r()},trigger:"submit"}],birthday:[{validator:(e,t,r)=>{const n=new Date(t).getTime(),o=Date.now();n>=o?r(new Error("。。。")):o-n<31536e7?r(new Error("你应该大于10岁了吧...?")):o-n>126144e7&&r(new Error("你应该小于40岁的吧...?")),r()},trigger:"submit"}]}}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},nickname:{get(){return this.user.nickname},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:e})}},birthday:{get(){return this.user.birthday},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:e})}},birthSecret:{get(){return this.user.birth_secret},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"birth_secret",value:e})}},sex:{get(){return this.user.sex},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:e})}},sexSecret:{get(){return this.user.sex_secret},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex_secret",value:e})}},signature:{get(){return this.user.signature},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:e.trim()})}}},methods:{avatarUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:e.data.url})},bannerUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"banner",value:e.data.url})},submit(){var e=this;this.$refs.form.validate(function(){var t=Object(n.a)(function*(t){if(!t)return!1;if(!e.submitting){e.submitting=!0;try{yield Object(y.i)(e,{nickname:e.nickname,signature:e.signature,birthday:new Date(e.birthday).getTime()/1e3,birth_secret:e.birthSecret,sex_secret:e.sexSecret,sex:e.sex,avatar:e.user.avatar,banner:e.user.banner}),e.$toast.success("设置成功")}catch(t){e.$toast.error(t.message)}finally{e.submitting=!1}}});return function(e){return t.apply(this,arguments)}}())}}},I=(r(341),r(17)),component=Object(I.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-basic-setting"}},[e.isAuth?r("el-form",{ref:"form",attrs:{disabled:e.submitting,model:e.user,rules:e.rule,"label-position":"top"}},[r("el-form-item",{attrs:{label:"头像"}},[r("div",{staticClass:"avatar-field"},[r("img",{staticClass:"avatar",attrs:{src:e.$resize(e.user.avatar,{width:100})}}),e._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.avatarUploadSuccess,"on-error":e.handleImageUploadError}},[r("el-button",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击更换头像")+"\n          ")])],1)],1)]),e._v(" "),r("el-form-item",{attrs:{label:"背景"}},[r("div",{staticClass:"banner-field"},[r("div",{staticClass:"banner-wrap"},[r("img",{staticClass:"banner",attrs:{src:e.$resize(e.user.banner,{height:100,mode:2})}})]),e._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.bannerUploadSuccess,"on-error":e.handleImageUploadError}},[r("el-button",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击更换背景")+"\n          ")])],1)],1)]),e._v(" "),r("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[r("el-input",{model:{value:e.nickname,callback:function(t){e.nickname="string"==typeof t?t.trim():t},expression:"nickname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[r("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}),e._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.birthSecret,callback:function(t){e.birthSecret=t},expression:"birthSecret"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[r("el-radio",{attrs:{label:1}},[e._v("\n          男\n        ")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("\n          女\n        ")])],1),e._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.sexSecret,callback:function(t){e.sexSecret=t},expression:"sexSecret"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"签名",prop:"signature"}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:"留下自己想说的话",maxlength:"60","show-word-limit":"",resize:"none"},model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{loading:e.submitting,type:"primary"},on:{click:e.submit}},[e._v("\n        提交\n      ")])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=component.exports}}]);