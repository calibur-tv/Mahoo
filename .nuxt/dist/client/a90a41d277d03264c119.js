(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{276:function(e,t,r){"use strict";r(38),r(67),r(37);var l=r(2),o=r(111);t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(e){e&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var e=this;return Object(l.a)(function*(){let t=e.$cookie.get("UPLOAD-TOKEN");t?e.uploadHeaders.token=e.$cookie.get("UPLOAD-TOKEN"):(t=yield Object(o.b)(e),e.uploadHeaders.token=t,e.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(e,t){this.uploadImageList.forEach((r,l)=>{r.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(l,1),console.log(e))}),this.$toast.error("图片：".concat(t.name," 上传失败"))},handleImageUploadRemove(e){this.uploadImageList.forEach((t,r)=>{t.uid===e.uid&&(this.uploadImageList.splice(r,1),this.uploadImageTotal--)})},handleImageUploadSuccess(e,t){this.uploadImageList.forEach((r,l)=>{r.uid===t.uid&&(this.uploadImageList[l]=Object.assign(r,{data:e.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(e.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(e=>{let{slug:t,file:r}=e;return"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())})({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0}}}},281:function(e,t,r){},298:function(e,t,r){"use strict";var l=r(281);r.n(l).a},306:function(e,t,r){e.exports=function(e){var t={};function r(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="/dist/",r(r.s=99)}({0:function(e,t,r){"use strict";function l(e,t,r,l,o,n,c,d){var m,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=r,f._compiled=!0),l&&(f.functional=!0),n&&(f._scopeId="data-v-"+n),c?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},f._ssrRegister=m):o&&(m=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),m)if(f.functional){f._injectStyles=m;var h=f.render;f.render=function(e,t){return m.call(t),h(e,t)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,m):[m]}return{exports:e,options:f}}r.d(t,"a",function(){return l})},4:function(e,t){e.exports=r(35)},99:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"el-radio-group",attrs:{role:"radiogroup"},on:{keydown:this.handleKeydown}},[this._t("default")],2)};l._withStripped=!0;var o=r(4),n=r.n(o),c=Object.freeze({LEFT:37,UP:38,RIGHT:39,DOWN:40}),d={name:"ElRadioGroup",componentName:"ElRadioGroup",inject:{elFormItem:{default:""}},mixins:[n.a],props:{value:{},size:String,fill:String,textColor:String,disabled:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},radioGroupSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size}},created:function(){var e=this;this.$on("handleChange",function(t){e.$emit("change",t)})},mounted:function(){var e=this.$el.querySelectorAll("[type=radio]"),t=this.$el.querySelectorAll("[role=radio]")[0];![].some.call(e,function(e){return e.checked})&&t&&(t.tabIndex=0)},methods:{handleKeydown:function(e){var t=e.target,r="INPUT"===t.nodeName?"[type=radio]":"[role=radio]",l=this.$el.querySelectorAll(r),o=l.length,n=[].indexOf.call(l,t),d=this.$el.querySelectorAll("[role=radio]");switch(e.keyCode){case c.LEFT:case c.UP:e.stopPropagation(),e.preventDefault(),0===n?(d[o-1].click(),d[o-1].focus()):(d[n-1].click(),d[n-1].focus());break;case c.RIGHT:case c.DOWN:n===o-1?(e.stopPropagation(),e.preventDefault(),d[0].click(),d[0].focus()):(d[n+1].click(),d[n+1].focus())}}},watch:{value:function(e){this.dispatch("ElFormItem","el.form.change",[this.value])}}},m=r(0),component=Object(m.a)(d,l,[],!1,null,null,null);component.options.__file="packages/radio/src/radio-group.vue";var f=component.exports;f.install=function(e){e.component(f.name,f)};t.default=f}})},307:function(e,t,r){},340:function(e,t,r){"use strict";var l=r(343),o={name:"AreaPicker",components:{"el-cascader":r.n(l).a},props:{value:{type:Array,required:!0},placeholder:{type:String,default:"添加作品分区，如约会大作战"},blocked:{type:String,default:""}},data(){return{selected:this.value}},computed:{options(){let e=this.$store.state.global.myTags.filter(e=>"notebook"!==e.slug);return this.blocked&&(e=e.filter(e=>e.slug!==this.blocked)),e}},watch:{value(e){this.selected=e},selected(e){this.$emit("input",e)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},n=(r(298),r(7)),component=Object(n.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"area-picker"},[r("p",{staticClass:"tip"},[e._v("\n    提示：只能选择你通过了考试的分区\n  ")]),e._v(" "),r("el-cascader",{attrs:{placeholder:e.placeholder,options:e.options,props:{value:"slug",label:"name"},filterable:""},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.node,data=t.data;return[l.isLeaf?[r("span",[e._v(e._s(data.name))])]:[r("span",[e._v(e._s(data.name))]),e._v(" "),r("span",[e._v(" ("+e._s(data.children.length)+") ")])]]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},[],!1,null,null,null);t.a=component.exports},366:function(e,t){e.exports=function(e){var t={};function r(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="/dist/",r(r.s=131)}({131:function(e,t,r){"use strict";r.r(t);var main={functional:!0,name:"ElDivider",props:{direction:{type:String,default:"horizontal",validator:function(e){return-1!==["horizontal","vertical"].indexOf(e)}},contentPosition:{type:String,default:"center",validator:function(e){return-1!==["left","center","right"].indexOf(e)}}},render:function(e,t){var r=t.slots(),l=t.props,o=l.direction,n=l.contentPosition;return e("div",{class:["el-divider","el-divider--"+o]},[r.default&&"vertical"!==o?e("div",{class:["el-divider__text","is-"+n]},[r.default]):null])},install:function(e){e.component(main.name,main)}};t.default=main}})},367:function(e,t,r){"use strict";var l=r(307);r.n(l).a},434:function(e,t,r){"use strict";r.r(t);var l=r(366),o=r.n(l),n=r(346),c=r.n(n),d=r(299),m=r.n(d),f=r(306),h=r.n(f),v=r(288),_=r.n(v),y=r(286),k=r.n(y),I=r(276),x={name:"CreateCosplay",layout:"web",components:{AreaPicker:r(340).a,"el-upload":k.a,"el-radio":_.a,"el-radio-group":h.a,"el-select":m.a,"el-option":c.a,"el-divider":o.a},mixins:[I.a],data:()=>({contentType:1,users:{coser:[],dresser:[],worker:[],ender:[],weapon:[]},formItem:{title:"",is_secret:0,textarea:"",area:[],tags:[]},cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}]}),methods:{handleSubmit(){},customImageUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.uploadImageList=this.uploadImageList.filter(e=>"success"===e.status&&e.data.width>=420&&e.data.height>=420||"success"!==e.status),this.uploadImageTotal=this.uploadImageList.length}}},w=(r(367),r(7)),component=Object(w.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"create-cosplay"}},[r("el-form",{ref:"form",attrs:{model:e.formItem,"label-position":"right","label-width":"80px"}},[r("p",{staticClass:"form-tip"},[e._v("\n      提示：标记 "),r("span",[e._v("*")]),e._v(" 为必填项，否则无法发布哦\n    ")]),e._v(" "),r("el-form-item",{attrs:{label:"上传图片",required:""}}),e._v(" "),r("div",{staticClass:"uploader",class:"uploader-count-"+(e.uploadImageTotal+e.uploadPending)},[r("el-upload",{attrs:{multiple:"",drag:"","list-type":"picture-card",action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,"file-list":e.uploadImageList,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.customImageUploadSuccess,"on-error":e.handleImageUploadError,"on-remove":e.handleImageUploadRemove,"on-exceed":e.handleImageUploadExceed}}),e._v(" "),r("p",{staticClass:"uploader-info"},[e._v("\n        最多可上传20张哦 (支持格式 jpg、png，宽高尺寸须大于420像素)\n      ")])],1),e._v(" "),r("el-form-item",{attrs:{label:"分区",required:""}},[r("el-col",{attrs:{span:16}},[r("area-picker",{attrs:{blocked:"topic"},model:{value:e.formItem.area,callback:function(t){e.$set(e.formItem,"area",t)},expression:"formItem.area"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"标题",required:""}},[r("el-col",{attrs:{span:16}},[r("el-input",{attrs:{placeholder:"请输入标题","show-word-limit":!0,maxlength:"20"},model:{value:e.formItem.title,callback:function(t){e.$set(e.formItem,"title",t)},expression:"formItem.title"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"简介"}},[r("el-input",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入作品介绍，临摹作品请一定要注明作品的出处来源"},model:{value:e.formItem.textarea,callback:function(t){e.$set(e.formItem,"textarea",t)},expression:"formItem.textarea"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"标签"}},[r("el-col",{attrs:{span:16}},[r("el-select",{attrs:{placeholder:"添加标签，方便分享",filterable:"",multiple:"","allow-create":""},model:{value:e.formItem.tags,callback:function(t){e.$set(e.formItem,"tags",t)},expression:"formItem.tags"}},e._l(e.cityList,function(t){return r("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"访问权限"}},[r("el-radio-group",{model:{value:e.formItem.is_secret,callback:function(t){e.$set(e.formItem,"is_secret",t)},expression:"formItem.is_secret"}},[r("el-radio",{attrs:{label:0}},[e._v("\n          公开\n        ")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("\n          私密\n        ")])],1)],1),e._v(" "),r("br"),e._v(" "),r("el-divider",[e._v("创作者信息")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("el-form-item",{attrs:{label:"出镜"}},[r("el-col",{attrs:{span:16}},[r("el-select",{attrs:{placeholder:"coser的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.coser,callback:function(t){e.$set(e.users,"coser",t)},expression:"users.coser"}},e._l(e.cityList,function(t){return r("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"化妆"}},[r("el-col",{attrs:{span:16}},[r("el-select",{attrs:{placeholder:"化妆师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.dresser,callback:function(t){e.$set(e.users,"dresser",t)},expression:"users.dresser"}},e._l(e.cityList,function(t){return r("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"道具"}},[r("el-col",{attrs:{span:16}},[r("el-select",{attrs:{placeholder:"道具师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.weapon,callback:function(t){e.$set(e.users,"weapon",t)},expression:"users.weapon"}},e._l(e.cityList,function(t){return r("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"摄影"}},[r("el-col",{attrs:{span:16}},[r("el-select",{attrs:{placeholder:"摄影师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.worker,callback:function(t){e.$set(e.users,"worker",t)},expression:"users.worker"}},e._l(e.cityList,function(t){return r("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"后期"}},[r("el-col",{attrs:{span:16}},[r("el-select",{attrs:{placeholder:"后期君的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.ender,callback:function(t){e.$set(e.users,"ender",t)},expression:"users.ender"}},e._l(e.cityList,function(t){return r("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10,push:7}},[r("br"),e._v(" "),r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",shape:"circle",size:"large"},on:{click:e.handleSubmit}},[e._v("\n        提交发布\n      ")])],1)],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);