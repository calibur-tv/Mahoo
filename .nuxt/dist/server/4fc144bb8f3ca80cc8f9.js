exports.ids=[38],exports.modules={103:function(e,t,r){"use strict";var n=r(104);t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let e=this.$cookie.get("UPLOAD-TOKEN");e?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(e=await Object(n.a)(this),this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(e,t){this.uploadImageList.forEach((r,n)=>{r.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(e))}),this.$toast.error(`图片：${t.name} 上传失败`)},handleImageUploadRemove(e){this.uploadImageList.forEach((t,r)=>{t.uid===e.uid&&(this.uploadImageList.splice(r,1),this.uploadImageTotal--)})},handleImageUploadSuccess(e,t){this.uploadImageList.forEach((r,n)=>{r.uid===t.uid&&(this.uploadImageList[n]=Object.assign(r,{data:e.data,status:"success",url:this.$resize(`${this.imagePrefix}${e.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(e.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:e,file:t})=>`${e}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${t.type.split("/").pop()}`)({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},104:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const n=e=>e.$axios.$get("v1/image/uptoken"),o=(e,t)=>e.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})},222:function(e,t){e.exports={undefined:void 0}},318:function(e,t,r){"use strict";r.r(t);var n=r(222),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},383:function(e,t,r){"use strict";r.r(t);var n=r(57),o=r.n(n),l=r(66),d=r.n(l),c=r(59),m=r.n(c),h=r(60),v=r.n(h),E=r(27),f=r.n(E),U=r(3),_=r(103),I={name:"UserBasicSetting",components:{ElSwitch:f.a,ElRadio:v.a,ElRadioGroup:m.a,ElDatePicker:d.a,ElUpload:o.a},mixins:[_.a],data:()=>({submitting:!1,rule:{nickname:[{validator:(e,t,r)=>{const n=t.replace(/([\u4E00-\u9FA5])/g,"aa").trim().length;n?n<2?r(new Error("昵称至少为2个字符")):n>14&&r(new Error("昵称不能超过14个字符")):r(new Error("昵称不能为空")),r()},trigger:"submit"}],signature:[{validator:(e,t,r)=>{t.length>150&&r(new Error("签名最多 150 个字")),r()},trigger:"submit"}],birthday:[{validator:(e,t,r)=>{if(!t)return r();const n=new Date(t).getTime(),o=Date.now();n>=o?r(new Error("。。。")):o-n<31536e7?r(new Error("你应该大于10岁了吧...?")):o-n>126144e7&&r(new Error("你应该小于40岁的吧...?")),r()},trigger:"submit"}]}}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},nickname:{get(){return this.user.nickname},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:e})}},birthday:{get(){return this.user.birthday},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:e})}},birthSecret:{get(){return this.user.birth_secret},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"birth_secret",value:e})}},sex:{get(){return this.user.sex},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:e})}},sexSecret:{get(){return this.user.sex_secret},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex_secret",value:e})}},signature:{get(){return this.user.signature},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:e.trim()})}}},methods:{avatarUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:e.data.url})},bannerUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"banner",value:e.data.url})},submit(){this.$refs.form.validate(async e=>{if(!e)return!1;if(!this.submitting){this.submitting=!0;try{await Object(U.j)(this,{nickname:this.nickname,signature:this.signature,birthday:new Date(this.$utils.adjustDate(this.birthday)).getTime()/1e3,birth_secret:this.birthSecret,sex_secret:this.sexSecret,sex:this.sex,avatar:this.user.avatar,banner:this.user.banner}),this.$toast.success("设置成功")}catch(e){this.$toast.error(e.message)}finally{this.submitting=!1}}})}}},k=r(1);var component=Object(k.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-basic-setting"}},[e.isAuth?r("ElForm",{ref:"form",attrs:{disabled:e.submitting,model:e.user,rules:e.rule,"label-position":"top"}},[r("ElFormItem",{attrs:{label:"头像"}},[r("div",{staticClass:"avatar-field"},[r("img",{staticClass:"avatar",attrs:{src:e.$resize(e.user.avatar,{width:100})}}),e._v(" "),r("ElUpload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.avatarUploadSuccess,"on-error":e.handleImageUploadError}},[r("ElButton",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击更换头像")+"\n          ")])],1)],1)]),e._v(" "),r("ElFormItem",{attrs:{label:"背景"}},[r("div",{staticClass:"banner-field"},[r("div",{staticClass:"banner-wrap"},[r("img",{staticClass:"banner",attrs:{src:e.$resize(e.user.banner,{height:100,mode:2})}})]),e._v(" "),r("ElUpload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.bannerUploadSuccess,"on-error":e.handleImageUploadError}},[r("ElButton",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击更换背景")+"\n          ")])],1)],1)]),e._v(" "),r("ElFormItem",{attrs:{label:"昵称",prop:"nickname"}},[r("ElInput",{model:{value:e.nickname,callback:function(t){e.nickname="string"==typeof t?t.trim():t},expression:"nickname"}})],1),e._v(" "),r("ElFormItem",{attrs:{label:"生日",prop:"birthday"}},[r("ElDatePicker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}),e._v(" "),r("ElSwitch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.birthSecret,callback:function(t){e.birthSecret=t},expression:"birthSecret"}})],1),e._v(" "),r("ElFormItem",{attrs:{label:"性别"}},[r("ElRadioGroup",{model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[r("ElRadio",{attrs:{label:1}},[e._v("\n          男\n        ")]),e._v(" "),r("ElRadio",{attrs:{label:2}},[e._v("\n          女\n        ")])],1),e._v(" "),r("ElSwitch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.sexSecret,callback:function(t){e.sexSecret=t},expression:"sexSecret"}})],1),e._v(" "),r("ElFormItem",{attrs:{label:"签名",prop:"signature"}},[r("ElInput",{attrs:{rows:5,type:"textarea",placeholder:"留下自己想说的话",maxlength:"60","show-word-limit":"",resize:"none"},model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}})],1),e._v(" "),r("ElFormItem",[r("ElButton",{attrs:{loading:e.submitting,type:"primary"},on:{click:e.submit}},[e._v("\n        提交\n      ")])],1)],1):e._e()],1)}),[],!1,(function(e){var t=r(318);t.__inject__&&t.__inject__(e)}),null,"5148d06a");t.default=component.exports}};