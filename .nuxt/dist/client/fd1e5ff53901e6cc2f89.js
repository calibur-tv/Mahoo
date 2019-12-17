(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{318:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){window.location.href=t.$alias.sign()}))}))}}},321:function(t,e,n){"use strict";n(63),n(64),n(5),n(66),n(67),n(48),n(68),n(20),n(19);var r,o=n(2),c=n(322);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,Object(c.a)(this);case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach((function(r,o){r.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(o,1),console.log(t))})),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach((function(n,r){n.uid===t.uid&&(e.uploadImageList.splice(r,1),e.uploadImageTotal--)}))},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach((function(r,o){r.uid===e.uid&&(n.uploadImageList[o]=Object.assign(r,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))})),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(63),n(64),n(5);var r=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},426:function(t,e,n){},564:function(t,e,n){"use strict";var r=n(426);n.n(r).a},664:function(t,e,n){"use strict";n.r(e);n(19);var r=n(2),o=(n(66),n(342)),c=n.n(o),l=n(507),d=n.n(l),m=n(330),h=n.n(m),f=n(323),v=n.n(f),E=n(145),U=n.n(E),k=n(27),x=n(321),I=n(318),_={name:"UserEdit",layout:"app",components:{ElSwitch:U.a,ElRadio:v.a,ElRadioGroup:h.a,ElDatePicker:d.a,ElUpload:c.a},mixins:[x.a,I.a],data:function(){return{submitting:!1,rule:{nickname:[{validator:function(t,e,n){var r=e.replace(/([\u4E00-\u9FA5])/g,"aa").trim().length;r?r<2?n(new Error("昵称至少为2个字符")):r>14&&n(new Error("昵称不能超过14个字符")):n(new Error("昵称不能为空")),n()},trigger:"submit"}],signature:[{validator:function(t,e,n){e.length>150&&n(new Error("签名最多 150 个字")),n()},trigger:"submit"}],birthday:[{validator:function(t,e,n){if(!e)return n();var r=new Date(e).getTime(),o=Date.now();r>=o?n(new Error("。。。")):o-r<31536e7?n(new Error("你应该大于10岁了吧...?")):o-r>126144e7&&n(new Error("你应该小于40岁的吧...?")),n()},trigger:"submit"}]}}},computed:{isAuth:function(){return this.$store.state.isAuth},user:function(){return this.$store.state.user},nickname:{get:function(){return this.user.nickname},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:t})}},birthday:{get:function(){return this.user.birthday},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:t})}},birthSecret:{get:function(){return this.user.birth_secret},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"birth_secret",value:t})}},sex:{get:function(){return this.user.sex},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:t})}},sexSecret:{get:function(){return this.user.sex_secret},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"sex_secret",value:t})}},signature:{get:function(){return this.user.signature},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:t.trim()})}}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:t.data.url})},bannerUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.$store.commit("UPDATE_USER_INFO",{key:"banner",value:t.data.url})},submit:function(){var t=this;this.$refs.form.validate(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=18;break}if(!t.submitting){e.next=3;break}return e.abrupt("return");case 3:return t.submitting=!0,e.prev=4,e.next=7,Object(k.j)(t,{nickname:t.nickname,signature:t.signature,birthday:new Date(t.$utils.adjustDate(t.birthday)).getTime()/1e3,birth_secret:t.birthSecret,sex_secret:t.sexSecret,sex:t.sex,avatar:t.user.avatar,banner:t.user.banner});case 7:t.$toast.success("设置成功"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),t.$toast.error(e.t0.message);case 13:return e.prev=13,t.submitting=!1,e.finish(13);case 16:e.next=19;break;case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[4,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}},head:{title:"个人简介"}},y=(n(564),n(16)),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-edit"}},[t.isAuth?n("ElForm",{ref:"form",attrs:{disabled:t.submitting,model:t.user,rules:t.rule,"label-position":"top"}},[n("ElFormItem",{attrs:{label:"头像"}},[n("div",{staticClass:"avatar-field"},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.user.avatar,{width:100})}}),t._v(" "),n("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[n("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击更换头像")+"\n          ")])],1)],1)]),t._v(" "),n("ElFormItem",{attrs:{label:"背景"}},[n("div",{staticClass:"banner-field"},[n("div",{staticClass:"banner-wrap"},[n("img",{staticClass:"banner",attrs:{src:t.$resize(t.user.banner,{height:100,mode:2})}})]),t._v(" "),n("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.bannerUploadSuccess,"on-error":t.handleImageUploadError}},[n("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击更换背景")+"\n          ")])],1)],1)]),t._v(" "),n("ElFormItem",{attrs:{label:"昵称",prop:"nickname"}},[n("ElInput",{model:{value:t.nickname,callback:function(e){t.nickname="string"==typeof e?e.trim():e},expression:"nickname"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"生日",prop:"birthday"}},[n("ElDatePicker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}}),t._v(" "),n("ElSwitch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:t.birthSecret,callback:function(e){t.birthSecret=e},expression:"birthSecret"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"性别"}},[n("ElRadioGroup",{model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[n("ElRadio",{attrs:{label:1}},[t._v("\n          男\n        ")]),t._v(" "),n("ElRadio",{attrs:{label:2}},[t._v("\n          女\n        ")])],1),t._v(" "),n("ElSwitch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:t.sexSecret,callback:function(e){t.sexSecret=e},expression:"sexSecret"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"签名",prop:"signature"}},[n("ElInput",{attrs:{rows:5,type:"textarea",placeholder:"留下自己想说的话",maxlength:"60","show-word-limit":"",resize:"none"},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}})],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"primary"},on:{click:t.submit}},[t._v("\n        提交\n      ")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);