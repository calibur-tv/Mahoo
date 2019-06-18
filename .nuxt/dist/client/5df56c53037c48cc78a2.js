(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{268:function(t,e,o){"use strict";o(64),o(62),o(36);var l=o(2),n=o(108);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(t){t&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(l.a)(function*(){let e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(n.b)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(t,e){this.uploadImageList.forEach((o,l)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(l,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,l)=>{o.uid===e.uid&&(this.uploadImageList[l]=Object.assign(o,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:o}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(o.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},288:function(t,e,o){},332:function(t,e,o){"use strict";var l=o(288);o.n(l).a},382:function(t,e,o){"use strict";o.r(e);o(36);var l=o(322),n=o.n(l),r=o(276),c=o.n(r),d=o(268),m={name:"CreateTalkForm",components:{"el-upload":c.a,"el-cascader":n.a},mixins:[d.a],props:{tag:{type:String,default:""},options:{type:Array,default:()=>[]}},data(){return{uploadImageLimit:9,title:"",content:"",area:this.tag?this.tag.split("-"):["topic","ugf6"],loading:!1}},methods:{customImageUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.uploadImageList=this.uploadImageList.filter(t=>"success"===t.status&&t.data.width>=420&&t.data.height>=420||"success"!==t.status),this.uploadImageTotal=this.uploadImageList.length},submit(){this.loading||(this.tag||this.title.trim().length?this.content.trim().length<2?this.$toast.error("内容至少要两个字"):(this.loading=!0,this.$axios.$post("v1/pin/create/daily",{title:this.title.trim(),content:this.content.trim(),images:this.uploadImageList.map(t=>t.data),area:this.area[1]}).then(t=>{window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})):this.$toast.error("请为文章起个标题"))}}},h=(o(332),o(18)),f={name:"CreateDaily",components:{CreateTalkForm:Object(h.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{staticClass:"create-talk-form",attrs:{"label-position":"top"}},[t.tag?t._e():[o("el-form-item",{attrs:{label:"标题"}},[o("el-input",{attrs:{placeholder:"请输入标题（建议30字以内）",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"分区"}},[o("p",{staticClass:"form-tip"},[t._v("\n        提示：只能选择你通过了考验的分区\n      ")]),t._v(" "),o("el-cascader",{attrs:{placeholder:"选择分区，如约会大作战",options:t.options,filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.node,data=e.data;return[l.isLeaf?[o("span",[t._v(t._s(data.label))])]:[o("span",[t._v(t._s(data.label))]),t._v(" "),o("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}],null,!1,4151453342),model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1)],t._v(" "),o("el-form-item",{attrs:{label:t.tag?"":"正文"}},[o("div",{staticClass:"content-wrap"},[t.tag?o("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("\n        点击"),o("br"),t._v("发送\n      ")]):t._e(),t._v(" "),o("div",{staticClass:"input-wrap"},[o("el-input",{attrs:{type:"textarea",autosize:t.tag?{minRows:3}:{minRows:8},"show-word-limit":!0,maxlength:t.tag?1e3:1e4,placeholder:"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])]),t._v(" "),o("el-form-item",[o("el-upload",{attrs:{multiple:"","list-type":"picture-card",action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,"file-list":t.uploadImageList,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError,"on-remove":t.handleImageUploadRemove,"on-exceed":t.handleImageUploadExceed}},[o("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),t.tag?t._e():o("el-form-item",[o("div",{staticClass:"bottom-btn"},[o("el-button",{attrs:{type:"primary",round:"",loading:t.loading},on:{click:t.submit}},[t._v("\n        点击发送\n      ")])],1)])],2)},[],!1,null,null,null).exports},props:{tags:{type:Array,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},I=Object(h.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("create-talk-form",{attrs:{options:this.tags}})},[],!1,null,null,null);e.default=I.exports}}]);