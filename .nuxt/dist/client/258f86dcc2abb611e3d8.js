(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{411:function(t,n,e){},412:function(t,n,e){},413:function(t,n,e){},517:function(t,n,e){"use strict";var o=e(411);e.n(o).a},518:function(t,n,e){"use strict";var o=e(412);e.n(o).a},519:function(t,n,e){"use strict";var o=e(413);e.n(o).a},573:function(t,n,e){"use strict";e.r(n);var o=e(16),r=(e(35),e(137)),c=e(358),l=e(356),d={name:"JoinCard",props:{tag:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},h=(e(517),e(18)),f=Object(h.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"join-card"},[n("VImg",{staticClass:"poster",attrs:{src:this.tag.avatar,width:"250",height:"150"}})],1)},[],!1,null,null,null).exports,v=e(357),m={name:"TagControlPanel",props:{slug:{type:String,required:!0}},methods:{deleteTag:function(){var t=this;this.$confirm("真的要这么做吗?","删除标签").then(function(){Object(r.d)(t,{slug:t.slug}).then(function(){t.$toast.success("标签删除成功").then(function(){window.location.reload()})}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})}}},w=(e(518),Object(h.a)(m,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tag-control-panel"},[e("h3",[t._v("控制台")]),t._v(" "),e("NLink",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[e("ElButton",{attrs:{icon:"el-icon-edit",size:"mini",round:""}},[t._v("\n      编辑\n    ")])],1),t._v(" "),e("NLink",{attrs:{to:t.$alias.tag(t.slug,"qa")}},[e("ElButton",{attrs:{icon:"el-icon-guide",size:"mini",round:""}},[t._v("\n      出题\n    ")])],1),t._v(" "),e("ElButton",{attrs:{icon:"el-icon-delete",size:"mini",round:""},on:{click:t.deleteTag}},[t._v("\n    删除\n  ")])],1)},[],!1,null,null,null).exports),C={name:"TagShow",layout:"web",components:{Affix:c.a,joinCard:f,PinFlowList:l.a,TagHotList:v.a,TagControlPanel:w},head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},props:{slug:{type:String,required:!0}},data:function(){return{tag:null,children:[]}},asyncData:function(t){var n=t.app,e=t.error,c=t.params;return Object(r.e)(n,c).then(function(data){return Object(o.a)({},data)}).catch(e)},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}},_=(e(519),Object(h.a)(C,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tag-show"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{span:5}},[e("Affix",{staticClass:"left-aside",attrs:{top:50}},[e("joinCard",{attrs:{tag:t.tag}}),t._v(" "),e("TagHotList",{attrs:{slug:t.slug,list:t.children}})],1)],1),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[e("PinFlowList",{attrs:{slug:t.slug,"show-area":!1}})],1),t._v(" "),e("ElCol",{attrs:{span:5}},[e("div",{staticClass:"right-aside"},[e("TagControlPanel",{attrs:{slug:t.slug}})],1)])],1)],1)},[],!1,null,null,null));n.default=_.exports}}]);