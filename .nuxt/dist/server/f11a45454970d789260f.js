exports.ids=[35],exports.modules={102:function(t,e,n){"use strict";var o={name:"SkeletonArticle",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},r=n(2);var component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-article"},[this._ssrNode('<div class="header"><div class="title gray"></div> <div class="area gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div> <div class="metas"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div></div>')])},[],!1,function(t){var e=n(98);e.__inject__&&e.__inject__(t)},null,"53cbe552");e.a=component.exports},107:function(t,e){t.exports={"tag-question":"tag-question_39z7J",tagQuestion:"tag-question_39z7J",content:"content_LJOU6",title:"title_36W9s",selectable:"selectable_2Znn2",meta:"meta__MaL9","skeleton-loading":"skeleton-loading_1nCpr",skeletonLoading:"skeleton-loading_1nCpr",skeleton:"skeleton_1pUyL"}},150:function(t,e,n){"use strict";n.r(e);var o=n(107),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},151:function(t,e){},219:function(t,e,n){"use strict";var o={name:"TagQuestion",mixins:[n(82).a],props:{showControl:{type:Boolean,default:!1},number:{type:Number,default:-1}},data:()=>({loading:!1,submitting:!1}),computed:{vote(){return this.item.content?this.item.content.filter(t=>"vote"===t.type)[0]:null}},methods:{order:t=>["A","B","C","D"][t],handleDelete(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/delete",{slug:this.item.slug}).then(()=>{this.$toast.success("删除成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}).catch(()=>{})},handlePass(){this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/recommend",{slug:this.item.slug}).then(()=>{this.$toast.success("入库成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))},handleSelect(option){this.showControl||(this.item.selected_id?this.$toast.info("暂不支持修改已选项"):this.submitting||(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.item.slug,answer_hash:[option.id]}).then(()=>{this.$emit("select",{id:this.item.slug,result:option.id})}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1})))}}},r=n(2);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-question"]},[t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[t._ssrNode("<h2"+t._ssrClass(null,t.$style.title)+">","</h2>",[t._ssrNode('<p class="oneline">'+t._ssrEscape(t._s((t.number>-1?t.number+". ":"")+t.item.title.text))+"</p> "),t.showArea?[t.item.area?n("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?n("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()]:t._e()],2),t._ssrNode(" "+(t.vote&&t.vote.data?"<main>"+t._ssrList(t.vote.data.items,function(option,e){var n;return"<p"+t._ssrClass(null,((n={})[t.$style.selectable]=!t.showControl,n))+">"+(t.item.selected_id&&t.item.selected_id===option.id?'<i class="iconfont ic-right"></i>':"\x3c!----\x3e")+t._ssrEscape("\n        "+t._s(t.order(e))+". "+t._s(option.text)+"\n      ")+"</p>"})+"</main>":"\x3c!----\x3e")+" "),t._ssrNode("<footer>","</footer>",[t._ssrNode("<div"+t._ssrClass(null,t.$style.meta)+">","</div>",[t._ssrNode("<span>出题人：</span> "),n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n           \n          "),n("span",{domProps:{textContent:t._s(t.item.author.nickname)}})],1),t._ssrNode(" <span>  ·  </span> <time>"+t._ssrEscape(t._s(t.$utils.timeAgo(t.item.created_at)))+"</time>")],2),t._ssrNode(" "),t.showControl?t._ssrNode("<div>","</div>",[n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"primary"},on:{click:t.handleDelete}},[t._v("\n          删除\n        ")]),t._ssrNode(" "),t.item.recommended_at?t._e():n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"success"},on:{click:t.handlePass}},[t._v("\n          通过\n        ")])],2):t._e()],2)],2)])},[],!1,function(t){var e=n(150);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"7b73d2ce");e.a=component.exports},243:function(t,e,n){"use strict";n.r(e);var o=n(151),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},320:function(t,e,n){"use strict";n.r(e);var o=n(102),r={name:"ATField",layout:"web",components:{TagQuestion:n(219).a,SkeletonArticle:o.a},data:()=>({sort:"newest"}),computed:{sortOpts:()=>[{label:"待入库",value:"newest"},{label:"最多赞",value:"like_desc"},{label:"最多踩",value:"like_asc"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,changing:"slug"}},slug(){return this.$route.query.slug}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()}))},handleRemove(t){this.$refs.loader.delete(t)}}},l=n(2);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"atfield"}},[o("ElRow",{staticClass:"container"},[o("ElCol",{attrs:{span:5}},[o("br")]),t._v(" "),o("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[o("ul",{staticClass:"sortable"},t._l(t.sortOpts,function(e){return o("li",{key:e.value,class:{"is-active":e.value===t.sort},domProps:{textContent:t._s(e.label)},on:{click:function(n){return t.changeSort(e.value)}}})}),0),t._v(" "),o("FlowLoader",{ref:"loader",attrs:{func:"getATField",type:"page",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{staticClass:"flows"},t._l(n,function(e){return o("TagQuestion",{key:e.slug,attrs:{"show-area":!t.slug,"show-control":!0,item:e},on:{remove:function(n){return t.handleRemove(e.slug)}}})}),1)}}])},[t._v(" "),o("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(96)}}),t._v(" "),o("p",[t._v("这里什么都没有")])]),t._v(" "),o("template",{slot:"error"},[o("img",{attrs:{src:n(97)}}),t._v(" "),o("p",[t._v("遇到错误了，点击重试")])])],2)],1),t._v(" "),o("ElCol",{attrs:{span:5}},[o("br")])],1)],1)},[],!1,function(t){var e=n(243);e.__inject__&&e.__inject__(t)},null,"cd6ed1f0");e.default=component.exports},79:function(t,e){},82:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}}},96:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},97:function(t,e,n){t.exports=n.p+"img/3251725.png"},98:function(t,e,n){"use strict";n.r(e);var o=n(79),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a}};
//# sourceMappingURL=f11a45454970d789260f.js.map