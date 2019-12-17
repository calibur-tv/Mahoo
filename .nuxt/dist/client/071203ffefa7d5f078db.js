(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(t,e,o){},509:function(t,e,o){"use strict";var n=o(376);o.n(n).a},612:function(t,e,o){"use strict";o.r(e);o(277);var n=o(291),r=o.n(n),l=o(287),c=o.n(l),m=o(374),h={name:"EditTagRuleForm",layout:"app",components:{ElSlider:o.n(m).a,ElRadio:c.a,ElRadioGroup:r.a},data:()=>({rule:{question_count:30,right_rate:80,qa_minutes:30,rule_type:0,result_type:0},submitting:!1}),computed:{slug(){return this.$route.query.slug}},mounted(){this.getRule()},methods:{formatQuestionCount:t=>"".concat(t,"个"),formatRightRate:t=>"".concat(t,"%"),formatQAMinutes:t=>"".concat(t,"分钟"),updateRule(){this.submitting||(this.submitting=!0,this.$axios.$post("v1/join/rule/update",this.rule).then(()=>{this.$toast.success("更新成功")}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1}))},getRule(){this.$axios.$get("v1/join/rule/show",{params:{slug:this.tag.slug}}).then(data=>{this.$set(this,"rule",data)}).catch(t=>{this.$toast.error(t.message)})}},head:{title:"入圈规则"}},d=(o(509),o(9)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ElForm",{ref:"form",attrs:{id:"bangumi-rule","label-position":"top"}},[o("ElFormItem",{attrs:{label:"出题数"}},[o("p",{staticClass:"form-tip"},[t._v("\n      如果题库数量不足，则能出几题出几题，如果题库数量超过设定值，则随机出指定题目数\n    ")]),t._v(" "),o("ElSlider",{attrs:{min:5,max:100,"format-tooltip":t.formatQuestionCount},model:{value:t.rule.question_count,callback:function(e){t.$set(t.rule,"question_count",e)},expression:"rule.question_count"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"正确率"}},[o("p",{staticClass:"form-tip"},[t._v("\n      答题的正确率不低于该值才能通过\n    ")]),t._v(" "),o("ElSlider",{attrs:{min:50,max:100,"format-tooltip":t.formatRightRate},model:{value:t.rule.right_rate,callback:function(e){t.$set(t.rule,"right_rate",e)},expression:"rule.right_rate"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.updateRule}},[t._v("\n      保存更改\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);