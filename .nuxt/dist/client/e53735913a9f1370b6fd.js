(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(t,e,l){},510:function(t,e,l){"use strict";var n=l(377);l.n(n).a},613:function(t,e,l){"use strict";l.r(e);var n=l(291),r=l.n(n),o=l(287),m=l.n(o),h=l(284),c={name:"CreateBangumiQuestion",layout:"app",components:{ElAlert:l.n(h).a,ElRadio:m.a,ElRadioGroup:r.a},data:()=>({bangumi:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null}),computed:{slug(){return this.$route.query.slug}},mounted(){this.getBangumi(),this.getRule()},methods:{getBangumi(){this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then(t=>{this.bangumi=t}).catch(()=>{})},getRule(){this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then(data=>{this.rule=data}).catch()},submit(){this.title.trim()?this.answers.map(t=>t.value).filter(t=>t).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter(t=>t.key===this.rightOpt)[0].value.trim()?(this.submitting=!0,this.$axios.$post("v1/join/create",{title:this.title,answers:this.answers.map(t=>t.value).filter(t=>t),right_index:this.rightOpt,bangumi_slug:this.slug}).then(()=>{this.$toast.success("提交成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1})):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}},head:{title:"添加题目"}},v=(l(510),l(9)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.bangumi?l("ElForm",{ref:"form",attrs:{id:"create-bangumi-question",disabled:t.submitting,"label-position":"top"}},[l("ElFormItem",[l("h1",[t._v("为《"+t._s(t.bangumi.name)+"》出题")]),t._v(" "),l("br"),t._v(" "),l("ElAlert",{attrs:{description:"题目提交完，需要审核通过之后才会入库",title:"出题规则",type:"success"}})],1),t._v(" "),l("ElFormItem",{attrs:{label:"题目"}},[l("ElInput",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),l("ElFormItem",[l("p",{staticClass:"form-tip"},[t._v("\n      提示：选项至少提供两个，至多四个\n    ")])]),t._v(" "),t._l(t.answers,(function(e,n){return l("ElFormItem",{key:e.key,attrs:{label:"选项"+(n+1)}},[l("ElInput",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:e.value,callback:function(l){t.$set(e,"value",l)},expression:"item.value"}})],1)})),t._v(" "),l("ElFormItem",[l("p",{staticClass:"form-tip"},[t._v("\n      提示：题目为单选题，正确选项不能为空\n    ")])]),t._v(" "),l("ElFormItem",{attrs:{label:"答案"}},[l("ElRadioGroup",{model:{value:t.rightOpt,callback:function(e){t.rightOpt=e},expression:"rightOpt"}},t._l(t.answers,(function(e,n){return l("ElRadio",{key:e.key,attrs:{label:e.key}},[t._v(" 答案"+t._s(n+1)+" ")])})),1)],1),t._v(" "),l("ElFormItem",[l("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      提交\n    ")])],1)],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);