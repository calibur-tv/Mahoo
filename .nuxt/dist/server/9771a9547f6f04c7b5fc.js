exports.ids=[7],exports.modules={51:function(t,e,o){"use strict";o.d(e,"d",function(){return r}),o.d(e,"a",function(){return n}),o.d(e,"e",function(){return l}),o.d(e,"c",function(){return d}),o.d(e,"b",function(){return c});const r=(t,{slug:e})=>t.$axios.get("v1/tag/show",{params:{slug:e}}),n=(t,{name:e,parent_slug:o})=>t.$axios.post("v1/tag/create",{name:e,parent_slug:o}),l=(t,{name:e,slug:o,avatar:r,alias:n,intro:l})=>t.$axios.post("v1/tag/update",{name:e,slug:o,avatar:r,alias:n,intro:l}),d=(t,{slug:e,target_slug:o})=>t.$axios.post("v1/tag/relink",{slug:e,target_slug:o}),c=(t,{slug:e})=>t.$axios.post("v1/tag/delete",{slug:e})},53:function(t,e){},54:function(t,e){},55:function(t,e){},56:function(t,e){},57:function(t,e){},58:function(t,e,o){"use strict";e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user}},mounted(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{async getUpToken(){try{this.uploadHeaders.token=await this.$axios.get("v1/image/uptoken")}catch(t){}},handleImageUploadError(t,e){this.uploadImageList.forEach((o,r)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(r,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,r)=>{o.uid===e.uid&&(this.uploadImageList[r]=Object.assign(o,{data:t.data,status:"success",url:`${this.imagePrefix}/${t.data.url}`}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.warn(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.currentUser)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},61:function(t,e){},79:function(t,e,o){"use strict";o.r(e);var r=o(61),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},88:function(t,e,o){"use strict";o.r(e);o(54),o(3);var r=o(39),n=o.n(r),l=(o(53),o(38)),d=o.n(l),c=(o(55),o(40)),m=o.n(c),h=(o(56),o(41)),f=o.n(h),v=(o(57),o(42)),$=o.n(v),U=o(58),x=o(51),I={name:"",layout:"web",components:{"el-upload":$.a,"el-input":f.a,"el-form":m.a,"el-select":d.a,"el-form-item":n.a},mixins:[U.a],props:{slug:{type:String,required:!0}},data(){return{tag:null,parent:null,children:[],rules:{alias:[{validator:(t,e,o)=>{e&&e.length||o(new Error("别名不能为空")),~e.indexOf(this.tag.name)||o(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&o(new Error("别名不能包含英文逗号")),e.join("").length>100&&o(new Error("别名最多100个字符")),o()},trigger:"submit"}]},submitting:!1}},asyncData:({app:t,error:e,params:o})=>Object(x.d)(t,{slug:o.slug}).then(data=>({...data})).catch(e),methods:{avatarUploadSuccess(t){this.tag.avatar=t.data.url},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,Object(x.e)(this,{slug:this.tag.slug,name:this.tag.name,avatar:this.tag.avatar,alias:this.tag.alias.join(","),intro:this.tag.intro}).then(()=>{this.$toast.success("修改成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}}},_=o(1);var component=Object(_.a)(I,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"tag-edit"}},[o("el-row",[o("el-col",{attrs:{span:12,offset:6}},[o("el-form",{ref:"form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[o("el-form-item",{attrs:{label:"头像"}},[o("div",{staticClass:"avatar-field"},[o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:200,height:200})}}),t._v(" "),o("el-upload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("el-button",{attrs:{type:"success",plain:"",round:"",size:"mini"}},[t._v("\n                上传标签封面\n              ")])],1)],1)]),t._v(" "),o("el-form-item",{attrs:{label:"名称"}},[o("el-input",{attrs:{disabled:""},model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"别名",prop:"alias"}},[o("p",{staticClass:"form-tip"},[t._v("\n            提示：按回车键生效\n          ")]),t._v(" "),o("el-select",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"简介"}},[o("el-input",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n            保存更改\n          ")])],1)],1)],1)],1)],1)},[],!1,function(t){var e=o(79);e.__inject__&&e.__inject__(t)},null,"3e70d9c8");e.default=component.exports}};
//# sourceMappingURL=9771a9547f6f04c7b5fc.js.map