(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{262:function(t,e,o){"use strict";o(64),o(63),o(36);var n=o(2),r=o(107);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(t){t&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(n.a)(function*(){let e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(r.b)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:o}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(o.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},279:function(t,e,o){},326:function(t,e,o){"use strict";var n=o(279);o.n(n).a},392:function(t,e,o){"use strict";o.r(e);o(106);var n=o(262),r=o(107),l={name:"JsonEditor",mixins:[n.a],props:{source:{type:Object,default:null},autofocus:{type:Boolean,default:!1}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([o.e(43).then(o.t.bind(null,380,7)),o.e(44).then(o.t.bind(null,381,7)),o.e(47).then(o.t.bind(null,382,7)),o.e(42).then(o.t.bind(null,383,7)),o.e(48).then(o.t.bind(null,384,7)),o.e(46).then(o.t.bind(null,385,7)),o.e(45).then(o.t.bind(null,386,7))]).then(t=>{const e=this;let data={};e.source?data=e.source:e.$cache.has("editor_local_draft")&&(data=e.$cache.get("editor_local_draft"));const[o,n,l,d,c,h,m]=t.map(t=>t.default),f=new o({data:data,holder:"codex-editor",placeholder:"请输入内容",autofocus:e.autofocus,tools:{header:{class:n,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:m,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:t=>new Promise((o,n)=>{const l=new FormData;l.append("file",t),l.append("token",e.uploadHeaders.token),Object(r.c)(e,l).then(data=>{data.url="https://m1.calibur.tv/".concat(data.url),o({success:1,file:data})}).catch(n)})}}},linkTool:{class:h,shortcut:"CMD+SHIFT+L",config:{endpoint:"".concat("https://api.calibur.tv/","v1/pin/editor/fetch_site")}},delimiter:d,list:{class:l,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},marker:{class:c,shortcut:"CMD+SHIFT+M"}}});f.isReady.then(()=>{this.editor=f,this.bindSaveEvent()}).catch(t=>{this.$toast.error("编辑器初始化失败：".concat(t))})})},bindSaveEvent(){document.addEventListener("keydown",t=>{83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(t=>{this.$cache.set("editor_local_draft",t)}).catch(()=>{this.$toast.error("保存失败")})}}},d=(o(326),o(18)),c={name:"CreateATField",components:{Editor:Object(d.a)(l,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor-wrap"},[e("div",{staticClass:"mousetrap",attrs:{id:"codex-editor"}})])}],!1,null,null,null).exports},props:{tags:{type:Array,required:!0}},computed:{},watch:{},created(){}},h=Object(d.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"create-atfield"}},[e("editor")],1)},[],!1,null,null,null);e.default=h.exports}}]);