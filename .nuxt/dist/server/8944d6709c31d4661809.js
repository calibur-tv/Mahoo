exports.ids=[9],exports.modules={104:function(t,e){},149:function(t,e,o){"use strict";var l=o(54),n={name:"AreaPicker",components:{"el-cascader":o.n(l).a},props:{value:{type:Array,required:!0},placeholder:{type:String,default:"添加作品分区，如约会大作战"}},data(){return{selected:this.value}},computed:{options(){return this.$store.state.global.myTags}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$store.dispatch("global/getMyTags"),this.$channel.$on("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},r=o(2),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-cascader",{attrs:{placeholder:t.placeholder,options:t.options,filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.node,data=e.data;return[l.isLeaf?[o("span",[t._v(t._s(data.label))])]:[o("span",[t._v(t._s(data.label))]),t._v(" "),o("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},[],!1,null,null,"d07163b4");e.a=component.exports},152:function(t,e,o){"use strict";o.r(e);var l=o(104),n=o.n(l);for(var r in l)"default"!==r&&function(t){o.d(e,t,function(){return l[t]})}(r);e.default=n.a},187:function(t,e,o){"use strict";o.r(e);var l=o(50),n=o.n(l),r=o(82),d={name:"CreateTalkForm",components:{AreaPicker:o(149).a,"el-upload":n.a},mixins:[r.a],props:{tag:{type:String,default:""},options:{type:Array,default:()=>[]}},data(){return{uploadImageLimit:9,title:"",content:"",area:this.tag?this.tag.split("-"):["topic","ugf6"],loading:!1}},methods:{customImageUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.uploadImageList=this.uploadImageList.filter(t=>"success"===t.status&&t.data.width>=420&&t.data.height>=420||"success"!==t.status),this.uploadImageTotal=this.uploadImageList.length},submit(){this.loading||(this.tag||this.title.trim().length?this.content.trim().length<2?this.$toast.error("内容至少要两个字"):(this.loading=!0,this.$axios.$post("v1/pin/create/daily",{title:this.title.trim(),content:this.content.trim(),images:this.uploadImageList.map(t=>t.data),area:this.area[1]}).then(data=>{this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1})):this.$toast.error("请为文章起个标题"))}}},c=o(2);var m={name:"CreateDaily",components:{CreateTalkForm:Object(c.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{staticClass:"create-talk-form",attrs:{"label-position":"top"}},[t.tag?t._e():[o("el-form-item",{attrs:{label:"标题"}},[o("el-input",{attrs:{placeholder:"请输入标题（建议30字以内）",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"分区"}},[o("p",{staticClass:"form-tip"},[t._v("\n        提示：只能选择你通过了考验的分区\n      ")]),t._v(" "),o("area-picker",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1)],t._v(" "),o("el-form-item",{attrs:{label:t.tag?"":"正文"}},[o("div",{staticClass:"content-wrap"},[t.tag?o("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("\n        点击"),o("br"),t._v("发送\n      ")]):t._e(),t._v(" "),o("div",{staticClass:"input-wrap"},[o("el-input",{attrs:{type:"textarea",autosize:t.tag?{minRows:3}:{minRows:8},"show-word-limit":!0,maxlength:t.tag?1e3:1e4,placeholder:"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])]),t._v(" "),o("el-form-item",[o("el-upload",{attrs:{multiple:"","list-type":"picture-card",action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,"file-list":t.uploadImageList,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError,"on-remove":t.handleImageUploadRemove,"on-exceed":t.handleImageUploadExceed}},[o("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),t.tag?t._e():o("el-form-item",[o("div",{staticClass:"bottom-btn"},[o("el-button",{attrs:{type:"primary",round:"",loading:t.loading},on:{click:t.submit}},[t._v("\n        点击发送\n      ")])],1)])],2)},[],!1,function(t){var e=o(152);e.__inject__&&e.__inject__(t)},null,"4456a552").exports},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}};var h=Object(c.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("create-talk-form")},[],!1,function(t){},null,"0e6fb44d");e.default=h.exports},82:function(t,e,o){"use strict";var l=o(83);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(t){t&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(l.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((o,l)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(l,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,l)=>{o.uid===e.uid&&(this.uploadImageList[l]=Object.assign(o,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},83:function(t,e,o){"use strict";o.d(e,"a",function(){return l}),o.d(e,"b",function(){return n});const l=t=>t.$axios.$get("v1/image/uptoken"),n=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}};
//# sourceMappingURL=8944d6709c31d4661809.js.map