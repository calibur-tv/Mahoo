(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{313:function(e,t,n){"use strict";n(56),n(57),n(6),n(89),n(55),n(23),n(31);var r=n(2),o=n(134);t.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},watch:{isAuth:function(e){e&&this.initUpToken()}},mounted:function(){this.isAuth&&this.initUpToken()},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var e=this;this.getUpToken(),this.getUpTokenTimer=setInterval(function(){e.getUpToken()},18e5)},getUpToken:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.$cookie.get("UPLOAD-TOKEN"))){e.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),e.abrupt("return");case 4:return e.next=6,Object(o.b)(this);case 6:t=e.sent,this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleImageUploadError:function(e,t){var n=this;this.uploadImageList.forEach(function(r,o){r.uid===t.uid&&(n.uploadPending--,n.uploadImageList.splice(o,1),console.log(e))}),this.$toast.error("图片：".concat(t.name," 上传失败"))},handleImageUploadRemove:function(e){var t=this;this.uploadImageList.forEach(function(n,r){n.uid===e.uid&&(t.uploadImageList.splice(r,1),t.uploadImageTotal--)})},handleImageUploadSuccess:function(e,t){var n=this;this.uploadImageList.forEach(function(r,o){r.uid===t.uid&&(n.uploadImageList[o]=Object.assign(r,{data:e.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(e.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(e){var t=e.slug,n=e.file;return"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0}}}},337:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=99)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,l,c,d){var f,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=n,m._compiled=!0),r&&(m.functional=!0),l&&(m._scopeId="data-v-"+l),c?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},m._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(m.functional){m._injectStyles=f;var h=m.render;m.render=function(e,t){return f.call(t),h(e,t)}}else{var v=m.beforeCreate;m.beforeCreate=v?[].concat(v,f):[f]}return{exports:e,options:m}}n.d(t,"a",function(){return r})},4:function(e,t){e.exports=n(54)},99:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"el-radio-group",attrs:{role:"radiogroup"},on:{keydown:this.handleKeydown}},[this._t("default")],2)};r._withStripped=!0;var o=n(4),l=n.n(o),c=Object.freeze({LEFT:37,UP:38,RIGHT:39,DOWN:40}),d={name:"ElRadioGroup",componentName:"ElRadioGroup",inject:{elFormItem:{default:""}},mixins:[l.a],props:{value:{},size:String,fill:String,textColor:String,disabled:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},radioGroupSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size}},created:function(){var e=this;this.$on("handleChange",function(t){e.$emit("change",t)})},mounted:function(){var e=this.$el.querySelectorAll("[type=radio]"),t=this.$el.querySelectorAll("[role=radio]")[0];![].some.call(e,function(e){return e.checked})&&t&&(t.tabIndex=0)},methods:{handleKeydown:function(e){var t=e.target,n="INPUT"===t.nodeName?"[type=radio]":"[role=radio]",r=this.$el.querySelectorAll(n),o=r.length,l=[].indexOf.call(r,t),d=this.$el.querySelectorAll("[role=radio]");switch(e.keyCode){case c.LEFT:case c.UP:e.stopPropagation(),e.preventDefault(),0===l?(d[o-1].click(),d[o-1].focus()):(d[l-1].click(),d[l-1].focus());break;case c.RIGHT:case c.DOWN:l===o-1?(e.stopPropagation(),e.preventDefault(),d[0].click(),d[0].focus()):(d[l+1].click(),d[l+1].focus())}}},watch:{value:function(e){this.dispatch("ElFormItem","el.form.change",[this.value])}}},f=n(0),component=Object(f.a)(d,r,[],!1,null,null,null);component.options.__file="packages/radio/src/radio-group.vue";var m=component.exports;m.install=function(e){e.component(m.name,m)};t.default=m}})},338:function(e,t,n){},382:function(e,t,n){"use strict";var r=n(385),o={name:"AreaPicker",components:{"el-cascader":n.n(r).a},props:{value:{type:Array,required:!0},placeholder:{type:String,default:"添加作品分区，如约会大作战"}},data:function(){return{selected:this.value}},computed:{options:function(){return this.$store.state.global.myTags}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e)}},mounted:function(){var e=this;this.$store.dispatch("global/getMyTags"),this.$channel.$on("user-signed",function(){e.$store.dispatch("global/getMyTags")})}},l=n(18),component=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-cascader",{attrs:{placeholder:e.placeholder,options:e.options,filterable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,data=t.data;return[r.isLeaf?[n("span",[e._v(e._s(data.label))])]:[n("span",[e._v(e._s(data.label))]),e._v(" "),n("span",[e._v(" ("+e._s(data.children.length)+") ")])]]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},[],!1,null,null,null);t.a=component.exports},395:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=131)}({131:function(e,t,n){"use strict";n.r(t);var main={functional:!0,name:"ElDivider",props:{direction:{type:String,default:"horizontal",validator:function(e){return-1!==["horizontal","vertical"].indexOf(e)}},contentPosition:{type:String,default:"center",validator:function(e){return-1!==["left","center","right"].indexOf(e)}}},render:function(e,t){var n=t.slots(),r=t.props,o=r.direction,l=r.contentPosition;return e("div",{class:["el-divider","el-divider--"+o]},[n.default&&"vertical"!==o?e("div",{class:["el-divider__text","is-"+l]},[n.default]):null])},install:function(e){e.component(main.name,main)}};t.default=main}})},396:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=52)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,l,c,d){var f,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=n,m._compiled=!0),r&&(m.functional=!0),l&&(m._scopeId="data-v-"+l),c?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},m._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(m.functional){m._injectStyles=f;var h=m.render;m.render=function(e,t){return f.call(t),h(e,t)}}else{var v=m.beforeCreate;m.beforeCreate=v?[].concat(v,f):[f]}return{exports:e,options:m}}n.d(t,"a",function(){return r})},3:function(e,t){e.exports=n(58)},33:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-select-dropdown__item",class:{selected:e.itemSelected,"is-disabled":e.disabled||e.groupDisabled||e.limitReached,hover:e.hover},on:{mouseenter:e.hoverItem,click:function(t){return t.stopPropagation(),e.selectOptionClick(t)}}},[e._t("default",[n("span",[e._v(e._s(e.currentLabel))])])],2)};r._withStripped=!0;var o=n(4),l=n.n(o),c=n(3),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f={mixins:[l.a],name:"ElOption",componentName:"ElOption",inject:["select"],props:{value:{required:!0},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},data:function(){return{index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}},computed:{isObject:function(){return"[object object]"===Object.prototype.toString.call(this.value).toLowerCase()},currentLabel:function(){return this.label||(this.isObject?"":this.value)},currentValue:function(){return this.value||this.label||""},itemSelected:function(){return this.select.multiple?this.contains(this.select.value,this.value):this.isEqual(this.value,this.select.value)},limitReached:function(){return!!this.select.multiple&&(!this.itemSelected&&(this.select.value||[]).length>=this.select.multipleLimit&&this.select.multipleLimit>0)}},watch:{currentLabel:function(){this.created||this.select.remote||this.dispatch("ElSelect","setSelected")},value:function(e,t){var n=this.select,r=n.remote,o=n.valueKey;if(!this.created&&!r){if(o&&"object"===(void 0===e?"undefined":d(e))&&"object"===(void 0===t?"undefined":d(t))&&e[o]===t[o])return;this.dispatch("ElSelect","setSelected")}}},methods:{isEqual:function(a,b){if(this.isObject){var e=this.select.valueKey;return Object(c.getValueByPath)(a,e)===Object(c.getValueByPath)(b,e)}return a===b},contains:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(this.isObject){var n=this.select.valueKey;return e&&e.some(function(e){return Object(c.getValueByPath)(e,n)===Object(c.getValueByPath)(t,n)})}return e&&e.indexOf(t)>-1},handleGroupDisabled:function(e){this.groupDisabled=e},hoverItem:function(){this.disabled||this.groupDisabled||(this.select.hoverIndex=this.select.options.indexOf(this))},selectOptionClick:function(){!0!==this.disabled&&!0!==this.groupDisabled&&this.dispatch("ElSelect","handleOptionClick",[this,!0])},queryChange:function(e){this.visible=new RegExp(Object(c.escapeRegexpString)(e),"i").test(this.currentLabel)||this.created,this.visible||this.select.filteredOptionsCount--}},created:function(){this.select.options.push(this),this.select.cachedOptions.push(this),this.select.optionsCount++,this.select.filteredOptionsCount++,this.$on("queryChange",this.queryChange),this.$on("handleGroupDisabled",this.handleGroupDisabled)},beforeDestroy:function(){this.select.onOptionDestroy(this.select.options.indexOf(this))}},m=n(0),component=Object(m.a)(f,r,[],!1,null,null,null);component.options.__file="packages/select/src/option.vue";t.a=component.exports},4:function(e,t){e.exports=n(54)},52:function(e,t,n){"use strict";n.r(t);var r=n(33);r.a.install=function(e){e.component(r.a.name,r.a)},t.default=r.a}})},401:function(e,t,n){"use strict";var r=n(338);n.n(r).a},504:function(e,t,n){"use strict";n.r(t);var r=n(395),o=n.n(r),l=n(396),c=n.n(l),d=n(383),f=n.n(d),m=n(337),h=n.n(m),v=n(327),_=n.n(v),y=n(322),x=n.n(y),O=n(313),S={name:"CreateCosplay",layout:"web",components:{AreaPicker:n(382).a,"el-upload":x.a,"el-radio":_.a,"el-radio-group":h.a,"el-select":f.a,"el-option":c.a,"el-divider":o.a},mixins:[O.a],data:function(){return{contentType:1,users:{coser:[],dresser:[],worker:[],ender:[],weapon:[]},formItem:{title:"",is_secret:0,textarea:"",area:[],tags:[]},cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}]}},methods:{handleSubmit:function(){},customImageUploadSuccess:function(e,t){this.handleImageUploadSuccess(e,t),this.uploadImageList=this.uploadImageList.filter(function(e){return"success"===e.status&&e.data.width>=420&&e.data.height>=420||"success"!==e.status}),this.uploadImageTotal=this.uploadImageList.length}}},I=(n(401),n(18)),component=Object(I.a)(S,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"create-cosplay"}},[n("el-form",{ref:"form",attrs:{model:e.formItem,"label-position":"right","label-width":"80px"}},[n("p",{staticClass:"form-tip"},[e._v("\n      提示：标记 "),n("span",[e._v("*")]),e._v(" 为必填项，否则无法发布哦\n    ")]),e._v(" "),n("el-form-item",{attrs:{label:"上传图片",required:""}}),e._v(" "),n("div",{staticClass:"uploader",class:"uploader-count-"+(e.uploadImageTotal+e.uploadPending)},[n("el-upload",{attrs:{multiple:"",drag:"","list-type":"picture-card",action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,"file-list":e.uploadImageList,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.customImageUploadSuccess,"on-error":e.handleImageUploadError,"on-remove":e.handleImageUploadRemove,"on-exceed":e.handleImageUploadExceed}}),e._v(" "),n("p",{staticClass:"uploader-info"},[e._v("\n        最多可上传20张哦 (支持格式 jpg、png，宽高尺寸须大于420像素)\n      ")])],1),e._v(" "),n("el-form-item",{attrs:{label:"分区",required:""}},[n("el-col",{attrs:{span:16}},[n("area-picker",{model:{value:e.formItem.area,callback:function(t){e.$set(e.formItem,"area",t)},expression:"formItem.area"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"标题",required:""}},[n("el-col",{attrs:{span:16}},[n("el-input",{attrs:{placeholder:"请输入标题","show-word-limit":!0,maxlength:"20"},model:{value:e.formItem.title,callback:function(t){e.$set(e.formItem,"title",t)},expression:"formItem.title"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"简介"}},[n("el-input",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入作品介绍，临摹作品请一定要注明作品的出处来源"},model:{value:e.formItem.textarea,callback:function(t){e.$set(e.formItem,"textarea",t)},expression:"formItem.textarea"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"标签"}},[n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"添加标签，方便分享",filterable:"",multiple:"","allow-create":""},model:{value:e.formItem.tags,callback:function(t){e.$set(e.formItem,"tags",t)},expression:"formItem.tags"}},e._l(e.cityList,function(t){return n("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"访问权限"}},[n("el-radio-group",{model:{value:e.formItem.is_secret,callback:function(t){e.$set(e.formItem,"is_secret",t)},expression:"formItem.is_secret"}},[n("el-radio",{attrs:{label:0}},[e._v("\n          公开\n        ")]),e._v(" "),n("el-radio",{attrs:{label:1}},[e._v("\n          私密\n        ")])],1)],1),e._v(" "),n("br"),e._v(" "),n("el-divider",[e._v("创作者信息")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("el-form-item",{attrs:{label:"出镜"}},[n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"coser的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.coser,callback:function(t){e.$set(e.users,"coser",t)},expression:"users.coser"}},e._l(e.cityList,function(t){return n("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"化妆"}},[n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"化妆师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.dresser,callback:function(t){e.$set(e.users,"dresser",t)},expression:"users.dresser"}},e._l(e.cityList,function(t){return n("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"道具"}},[n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"道具师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.weapon,callback:function(t){e.$set(e.users,"weapon",t)},expression:"users.weapon"}},e._l(e.cityList,function(t){return n("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"摄影"}},[n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"摄影师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.worker,callback:function(t){e.$set(e.users,"worker",t)},expression:"users.worker"}},e._l(e.cityList,function(t){return n("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"后期"}},[n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"后期君的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.ender,callback:function(t){e.$set(e.users,"ender",t)},expression:"users.ender"}},e._l(e.cityList,function(t){return n("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:10,push:7}},[n("br"),e._v(" "),n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",shape:"circle",size:"large"},on:{click:e.handleSubmit}},[e._v("\n        提交发布\n      ")])],1)],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);