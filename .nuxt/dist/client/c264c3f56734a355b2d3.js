(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{316:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",function(){t.$toast.error("继续操作前请先登录").then(function(){window.location.href=t.$alias.sign()})})}}},318:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=80)}({0:function(t,e,n){"use strict";function o(t,e,n,o,l,r,c,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),o&&(h.functional=!0),r&&(h._scopeId="data-v-"+r),c?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},h._ssrRegister=f):l&&(f=d?function(){l.call(this,this.$root.$options.shadowRoot)}:l),f)if(h.functional){h._injectStyles=f;var _=h.render;h.render=function(t,e){return f.call(e),_(t,e)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return o})},80:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[t.showIcon?n("i",{staticClass:"el-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),n("div",{staticClass:"el-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"el-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"el-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"el-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"el-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){t.close()}}},[t._v(t._s(t.closeText))])])])])};o._withStripped=!0;var l={success:"el-icon-success",warning:"el-icon-warning",error:"el-icon-error"},r={name:"ElAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return"el-alert--"+this.type},iconClass:function(){return l[this.type]||"el-icon-info"},isBigIcon:function(){return this.description||this.$slots.default?"is-big":""},isBoldTitle:function(){return this.description||this.$slots.default?"is-bold":""}}},c=n(0),component=Object(c.a)(r,o,[],!1,null,null,null);component.options.__file="packages/alert/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},322:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}}},330:function(t,e,n){t.exports={"tag-question":"tag-question_39z7J",tagQuestion:"tag-question_39z7J",content:"content_LJOU6",title:"title_36W9s",selectable:"selectable_2Znn2",meta:"meta__MaL9","skeleton-loading":"skeleton-loading_1nCpr",skeletonLoading:"skeleton-loading_1nCpr",skeleton:"skeleton_1pUyL"}},391:function(t,e,n){"use strict";var o=n(330),l=n.n(o);e.default=l.a},453:function(t,e,n){},454:function(t,e,n){},472:function(t,e,n){"use strict";n(5),n(193);var o={name:"TagQuestion",mixins:[n(322).a],props:{showControl:{type:Boolean,default:!1},number:{type:Number,default:-1}},data:function(){return{loading:!1,submitting:!1}},computed:{vote:function(){return this.item.content?this.item.content.filter(function(t){return"vote"===t.type})[0]:null}},methods:{order:function(t){return["A","B","C","D"][t]},handleDelete:function(){var t=this;this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(function(){t.loading||(t.loading=!0,t.$axios.$post("v1/atfield/delete",{slug:t.item.slug}).then(function(){t.$toast.success("删除成功"),t.$emit("remove")}).catch(function(e){t.$toast.error(e.message),t.loading=!1}))}).catch(function(){})},handlePass:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/recommend",{slug:this.item.slug}).then(function(){t.$toast.success("入库成功"),t.$emit("remove")}).catch(function(e){t.$toast.error(e.message),t.loading=!1}))},handleSelect:function(option){var t=this;this.showControl||(this.item.selected_id?this.$toast.info("暂不支持修改已选项"):this.submitting||(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.item.slug,answer_hash:[option.id]}).then(function(){t.$emit("select",{id:t.item.slug,result:option.id})}).catch(function(e){t.$toast.error(e.message)}).finally(function(){t.submitting=!1})))}}},l=n(391),r=n(18);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-question"]},[n("div",{class:t.$style.content},[n("h2",{class:t.$style.title},[n("p",{staticClass:"oneline",domProps:{textContent:t._s((t.number>-1?t.number+". ":"")+t.item.title.text)}}),t._v(" "),t.showArea?[t.item.area?n("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?n("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()]:t._e()],2),t._v(" "),t.vote&&t.vote.data?n("main",t._l(t.vote.data.items,function(option,e){var o;return n("p",{key:option.id,class:(o={},o[t.$style.selectable]=!t.showControl,o),on:{click:function(e){return t.handleSelect(option)}}},[t.item.selected_id&&t.item.selected_id===option.id?n("i",{staticClass:"iconfont ic-right"}):t._e(),t._v("\n        "+t._s(t.order(e))+". "+t._s(option.text)+"\n      ")])}),0):t._e(),t._v(" "),n("footer",[n("div",{class:t.$style.meta},[n("span",[t._v("出题人：")]),t._v(" "),n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n           \n          "),n("span",{domProps:{textContent:t._s(t.item.author.nickname)}})],1),t._v(" "),n("span",[t._v("  ·  ")]),t._v(" "),n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.item.created_at))}})],1),t._v(" "),t.showControl?n("div",[n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"primary"},on:{click:t.handleDelete}},[t._v("\n          删除\n        ")]),t._v(" "),t.item.recommended_at?t._e():n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"success"},on:{click:t.handlePass}},[t._v("\n          通过\n        ")])],1):t._e()])])])},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);e.a=component.exports},570:function(t,e,n){"use strict";var o=n(453);n.n(o).a},571:function(t,e,n){"use strict";var o=n(454);n.n(o).a},602:function(t,e,n){"use strict";n.r(e);var o=n(316),l=n(318),r=n.n(l),c={name:"SubmitATFieldForm",components:{TagQuestion:n(472).a,ElAlert:r.a},props:{slug:{type:String,required:!0}},data:function(){return{tag:null,loading:!1}},methods:{handleCallback:function(t){var data=t.data;this.tag=data.extra.tag,this.$refs.loader.patch(data.extra.answers)},handleSelect:function(t){var e=t.id,n=t.result;this.$refs.loader.update({id:e,key:"selected_id",value:n})},submit:function(){var t=this,e=this.$refs.loader.getResource("result"),n=this.$refs.loader.getResource("total");e.filter(function(t){return t.selected_id}).length<n?this.$toast.info("请先做完所有题目"):this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/submit",{slug:this.slug}).then(function(e){"pass"===e?t.$toast.success("挑战成功！"):t.$toast.info("挑战失败！"),setTimeout(function(){window.location=t.$alias.tag(t.slug)},1e3)}).catch(function(e){t.$toast.error(e.message),t.loading=!1}))}}},d=(n(570),n(18)),f={name:"TagATField",layout:"web",components:{SubmitATFieldForm:Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{ref:"loader",staticClass:"submit-atfield-form",attrs:{func:"getZoneQuestions",type:"page",query:{$axios:t.$axios,slug:t.slug,changing:"slug"},callback:t.handleCallback},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return n("header",{staticClass:"qa-header"},[n("h1",[t.tag?n("span",[t._v("《"+t._s(t.tag.name)+"》")]):t._e(),n("span",[t._v("共"+t._s(source.total)+"道题")])]),t._v(" "),n("ElAlert",{attrs:{title:"题目都是单选，答完所有题之后只要满足「分区规则」即可加入分区",type:"info",center:"","show-icon":"",closable:!1}})],1)}},{key:"default",fn:function(e){var o=e.flow;return n("ul",{staticClass:"questions"},t._l(o,function(e,o){return n("TagQuestion",{key:e.slug,attrs:{item:e,number:o+1,"show-area":!1},on:{select:t.handleSelect}})}),1)}}])},[t._v(" "),t._v(" "),n("footer",{staticClass:"qa-footer",attrs:{slot:"footer"},slot:"footer"},[n("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"success",round:""},on:{click:t.submit}},[t._v("\n      交卷\n    ")])],1)])},[],!1,null,null,null).exports},mixins:[o.a],props:{slug:{type:String,required:!0}}},h=(n(571),Object(d.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-atfield"}},[e("ElRow",[e("ElCol",{attrs:{span:12,offset:6}},[e("SubmitATFieldForm",{attrs:{slug:this.slug}})],1)],1)],1)},[],!1,null,null,null));e.default=h.exports}}]);