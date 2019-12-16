(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{414:function(t,e,n){},552:function(t,e,n){"use strict";var l=n(414);n.n(l).a},640:function(t,e,n){"use strict";n.r(e);var l=n(338),r=n.n(l),o=n(329),c=n.n(o),m=n(323),h={name:"CreateBangumiQuestion",layout:"app",components:{ElAlert:n.n(m).a,ElRadio:c.a,ElRadioGroup:r.a},data:function(){return{bangumi:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null}},computed:{slug:function(){return this.$route.query.slug}},mounted:function(){this.getBangumi(),this.getRule()},methods:{getBangumi:function(){var t=this;this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then((function(e){t.bangumi=e})).catch((function(){}))},getRule:function(){var t=this;this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then((function(data){t.rule=data})).catch()},submit:function(){var t=this;this.title.trim()?this.answers.map((function(t){return t.value})).filter((function(t){return t})).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter((function(e){return e.key===t.rightOpt}))[0].value.trim()?(this.submitting=!0,this.$axios.$post("v1/join/create",{title:this.title,answers:this.answers.map((function(t){return t.value})).filter((function(t){return t})),right_index:this.rightOpt,tag_slug:this.slug}).then((function(){t.$toast.success("提交成功").then((function(){window.location.reload()}))})).catch((function(e){t.$toast.error(e.message),t.submitting=!1}))):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}},head:{title:"添加题目"}},f=(n(552),n(16)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bangumi?n("ElForm",{ref:"form",attrs:{id:"create-bangumi-question",disabled:t.submitting,"label-position":"top"}},[n("ElFormItem",[n("h1",[t._v("为《"+t._s(t.bangumi.name)+"》出题")]),t._v(" "),n("br"),t._v(" "),t.rule?n("ElAlert",{attrs:{description:"当前番剧需要有「"+t.rule.question_count+"道」题入库之后才能开放加入",title:"当前番剧答题规则",type:"success"}}):t._e()],1),t._v(" "),n("ElFormItem",{attrs:{label:"题目"}},[n("ElInput",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("ElFormItem",[n("p",{staticClass:"form-tip"},[t._v("\n      提示：选项至少提供两个，至多四个\n    ")])]),t._v(" "),t._l(t.answers,(function(e,l){return n("ElFormItem",{key:e.key,attrs:{label:"选项"+(l+1)}},[n("ElInput",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1)})),t._v(" "),n("ElFormItem",[n("p",{staticClass:"form-tip"},[t._v("\n      提示：题目为单选题，正确选项不能为空\n    ")])]),t._v(" "),n("ElFormItem",{attrs:{label:"答案"}},[n("ElRadioGroup",{model:{value:t.rightOpt,callback:function(e){t.rightOpt=e},expression:"rightOpt"}},t._l(t.answers,(function(e,l){return n("ElRadio",{key:e.key,attrs:{label:e.key}},[t._v(" 答案"+t._s(l+1)+" ")])})),1)],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      提交\n    ")])],1)],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);