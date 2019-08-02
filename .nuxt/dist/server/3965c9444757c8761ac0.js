exports.ids=[14],exports.modules={216:function(t,e){},217:function(t,e){},295:function(t,e,n){"use strict";n.r(e);var l=n(216),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},296:function(t,e,n){"use strict";n.r(e);var l=n(217),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},310:function(t,e,n){"use strict";n.r(e);var l=n(92),r=n(60),o=n.n(r),c=n(61),h=n.n(c),f=n(58);var m={name:"CreateTagATFieldForm",components:{ElAlert:n.n(f).a,ElRadio:h.a,ElRadioGroup:o.a},props:{slug:{type:String,required:!0}},data:()=>({tag:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null,info:null}),mounted(){this.getTag(),this.getRule(),this.getInfo()},methods:{getTag(){this.$axios.$get("v1/tag/show",{params:{slug:this.slug}}).then(data=>{this.tag=data.tag}).catch()},getRule(){this.$axios.$get("v1/atfield/rule/show",{params:{slug:this.slug}}).then(data=>{this.rule=data}).catch()},getInfo(){this.$axios.$get("v1/tag/atfield",{params:{slug:this.slug}}).then(data=>{this.info=data}).catch()},submit(){this.title.trim()?this.answers.map(t=>t.value).filter(t=>t).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter(t=>t.key===this.rightOpt)[0].value.trim()?(this.submitting=!0,((t,{tag_slug:e,title:title,answers:n,right_index:l})=>t.$axios.$post("v1/atfield/create",{tag_slug:e,title:title,answers:n,right_index:l}))(this,{title:this.title,answers:this.answers.map(t=>t.value).filter(t=>t),right_index:this.rightOpt,tag_slug:this.slug}).then(()=>{this.$toast.success("提交成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1})):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}}},_=n(1);var d={name:"TagQA",layout:"web",components:{CreateTagATFieldForm:Object(_.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tag?n("ElForm",{ref:"form",staticClass:"create-tag-atfield-form",attrs:{disabled:t.submitting,"label-position":"right","label-width":"80px"}},[n("ElFormItem",[n("h1",[t._v("为《"+t._s(t.tag.name)+"》出题")]),t._v(" "),n("br"),t._v(" "),t.rule?n("ElAlert",{attrs:{description:"当前分区需要有「"+t.rule.question_count+"道」题入库之后才能开放加入",title:"当前分区答题规则",type:"success"}}):t._e()],1),t._v(" "),n("ElFormItem",[t.info?n("ElAlert",{attrs:{description:"当前分区有「"+t.info.trial+"道」题正在审核中，「"+t.info.pass+"道」题已入库",title:"当前分区题库信息",type:"success"}}):t._e()],1),t._v(" "),n("ElFormItem",{attrs:{label:"题目"}},[n("ElInput",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("ElFormItem",[n("p",{staticClass:"form-tip"},[t._v("\n      提示：选项至少提供两个，至多四个\n    ")])]),t._v(" "),t._l(t.answers,function(e,l){return n("ElFormItem",{key:e.key,attrs:{label:"选项"+(l+1)}},[n("ElInput",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1)}),t._v(" "),n("ElFormItem",[n("p",{staticClass:"form-tip"},[t._v("\n      提示：题目为单选题，正确选项不能为空\n    ")])]),t._v(" "),n("ElFormItem",{attrs:{label:"答案"}},[n("ElRadioGroup",{model:{value:t.rightOpt,callback:function(e){t.rightOpt=e},expression:"rightOpt"}},t._l(t.answers,function(e,l){return n("ElRadio",{key:e.key,attrs:{label:e.key}},[t._v("\n        答案"+t._s(l+1)+"\n      ")])}),1)],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      提交\n    ")])],1)],2):t._e()},[],!1,function(t){var e=n(295);e.__inject__&&e.__inject__(t)},null,"5844b818").exports},mixins:[l.a],props:{slug:{type:String,required:!0}}};var v=Object(_.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-qa"}},[e("ElRow",[e("ElCol",{attrs:{span:12,offset:6}},[e("CreateTagATFieldForm",{attrs:{slug:this.slug}})],1)],1)],1)},[],!1,function(t){var e=n(296);e.__inject__&&e.__inject__(t)},null,"1f614f64");e.default=v.exports},92:function(t,e,n){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}}};
//# sourceMappingURL=3965c9444757c8761ac0.js.map