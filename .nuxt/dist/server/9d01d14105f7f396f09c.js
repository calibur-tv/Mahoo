exports.ids=[24],exports.modules={118:function(t,e){t.exports={"tag-question":"tag-question_35lHX",tagQuestion:"tag-question_35lHX",content:"content_2PlmD",title:"title_3fNiX",selectable:"selectable_3kiyA",meta:"meta_UlNhL","skeleton-loading":"skeleton-loading_2qj6g",skeletonLoading:"skeleton-loading_2qj6g",skeleton:"skeleton_2oUiD"}},165:function(t,e,n){"use strict";n.r(e);var o=n(118),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},233:function(t,e){t.exports={undefined:void 0}},234:function(t,e){t.exports={undefined:void 0}},252:function(t,e,n){"use strict";var o={name:"TagQuestion",mixins:[n(92).a],props:{showControl:{type:Boolean,default:!1},number:{type:Number,default:-1}},data:()=>({loading:!1,submitting:!1}),computed:{vote(){return this.item.content?this.item.content.filter(t=>"vote"===t.type)[0]:null},showPass(){return this.$hasRole("trial_qa")},showRemove(){return this.$hasRole("delete_qa")}},methods:{order:t=>["A","B","C","D"][t],handleDelete(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/delete",{slug:this.item.slug}).then(()=>{this.$toast.success("删除成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}).catch(()=>{})},handlePass(){this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/recommend",{slug:this.item.slug}).then(()=>{this.$toast.success("入库成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))},handleSelect(option){this.showControl||this.submitting||(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.item.slug,answer_hash:[option.id]}).then(()=>{this.$emit("select",{id:this.item.slug,result:option.id})}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1}))}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-question"]},[t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[t._ssrNode("<h2"+t._ssrClass(null,t.$style.title)+">","</h2>",[t._ssrNode("<p>"+t._s((t.number>-1?t.number+". ":"")+t.item.title.text)+"</p> "),t.showZone?[t.item.area?n("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?n("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()]:t._e()],2),t._ssrNode(" "+(t.vote&&t.vote.data?"<main>"+t._ssrList(t.vote.data.items,(function(option,e){var n;return"<p"+t._ssrClass(null,((n={})[t.$style.selectable]=!t.showControl,n))+">"+(t.item.selected_id&&t.item.selected_id===option.id?'<i class="iconfont ic-right"></i>':t.vote.data.right_ids&&~t.vote.data.right_ids.indexOf(option.id)?'<i class="iconfont ic-right"></i>':"\x3c!----\x3e")+" <span>"+t._ssrEscape(t._s(t.order(e))+". "+t._s(option.text))+"</span></p>"}))+"</main>":"\x3c!----\x3e")+" "),t._ssrNode("<footer>","</footer>",[t._ssrNode("<div"+t._ssrClass(null,t.$style.meta)+">","</div>",[t._ssrNode('<span class="only-pc">出题人：</span> '),n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n           \n          "),n("span",{staticClass:"only-pc",domProps:{innerHTML:t._s(t.item.author.nickname)}})],1),t._ssrNode(" <span>  ·  </span> <time>"+t._ssrEscape(t._s(t.$utils.timeAgo(t.item.created_at)))+"</time>")],2),t._ssrNode(" "),t.showControl?t._ssrNode("<div>","</div>",[t.showRemove?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"primary"},on:{click:t.handleDelete}},[t._v("\n          删除\n        ")]):t._e(),t._ssrNode(" "),!t.item.recommended_at&&t.showPass?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"success"},on:{click:t.handlePass}},[t._v("\n          通过\n        ")]):t._e()],2):t._e()],2)],2)])}),[],!1,(function(t){var e=n(165);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"4f83b16f");e.a=component.exports},329:function(t,e,n){"use strict";n.r(e);var o=n(233),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},330:function(t,e,n){"use strict";n.r(e);var o=n(234),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},358:function(t,e,n){"use strict";n.r(e);var o=n(91),r=n(56),l=n.n(r),c={name:"SubmitATFieldForm",components:{TagQuestion:n(252).a,ElAlert:l.a},props:{slug:{type:String,required:!0}},data:()=>({tag:null,loading:!1}),methods:{handleCallback({data:data}){this.tag=data.extra.tag,this.$refs.loader.patch(data.extra.answers)},handleSelect({id:t,result:e}){this.$refs.loader.update({id:t,key:"selected_id",value:e})},restart(){this.$confirm("你会获取一套新的试题，运气不好就得全部重做","确定要刷新试卷吗？").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/begin",{slug:this.slug,retry:!0}).then(t=>{"reject"===t?this.$toast.info("该分区还未开放"):"resolve"===t?this.$toast.info("你已加入该分区"):"no_rule"===t?this.$toast.info("还没有答题规则"):"no_question"===t?this.$toast.info("分区题目数量不足"):this.$toast.info("刷新成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}).catch(()=>{})},submit(){const t=this.$refs.loader.getResource("result"),e=this.$refs.loader.getResource("total");t.filter(t=>t.selected_id).length<e?this.$toast.info("请先做完所有题目"):this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/submit",{slug:this.slug}).then(t=>{"pass"===t?this.$toast.success("挑战成功！"):this.$toast.info("挑战失败！"),setTimeout(()=>{window.location=this.$alias.tag(this.slug)},1e3)}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}}},d=n(1);var h={name:"TagATField",layout:"web",components:{SubmitATFieldForm:Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{ref:"loader",staticClass:"submit-atfield-form",attrs:{func:"getZoneQuestions",type:"page",query:{$axios:t.$axios,slug:t.slug,changing:"slug"},callback:t.handleCallback},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return n("header",{staticClass:"qa-header"},[n("h1",[t.tag?n("span",[t._v("《"+t._s(t.tag.name)+"》")]):t._e(),n("span",[t._v("共"+t._s(source.total)+"道题")])]),t._v(" "),n("ElAlert",{attrs:{title:"题目都是单选，答完所有题之后只要满足「分区规则」即可加入分区",type:"info",center:"","show-icon":"",closable:!1}})],1)}},{key:"default",fn:function(e){var o=e.flow;return n("ul",{staticClass:"questions"},t._l(o,(function(e,o){return n("TagQuestion",{key:e.slug,attrs:{item:e,number:o+1,"show-zone":!1},on:{select:t.handleSelect}})})),1)}}])},[t._v(" "),t._v(" "),n("footer",{staticClass:"qa-footer",attrs:{slot:"footer"},slot:"footer"},[n("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"danger",plain:"",round:""},on:{click:t.restart}},[t._v("\n      更新试卷\n    ")]),t._v(" "),n("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"success",round:""},on:{click:t.submit}},[t._v("\n      交卷\n    ")])],1)])}),[],!1,(function(t){var e=n(329);e.__inject__&&e.__inject__(t)}),null,"70f77a10").exports},mixins:[o.a],props:{slug:{type:String,required:!0}}};var m=Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-atfield"}},[e("ElRow",[e("ElCol",{attrs:{span:6,xs:0}},[e("br")]),this._v(" "),e("ElCol",{attrs:{span:12,xs:24}},[e("SubmitATFieldForm",{attrs:{slug:this.slug}})],1)],1)],1)}),[],!1,(function(t){var e=n(330);e.__inject__&&e.__inject__(t)}),null,"5778fbd9");e.default=m.exports},91:function(t,e,n){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},92:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}}};