exports.ids=[13],exports.modules={114:function(t,e,n){"use strict";function _(t,e){const n=e?"scrollTop":"scrollLeft";let _=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof _&&(_=window.document.documentElement[n]),_}var v={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){this.$utils.on(window,"scroll",this.handleScroll),this.$utils.on(window,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll()})},beforeDestroy(){this.$utils.off(window,"scroll",this.handleScroll),this.$utils.off(window,"resize",this.handleScroll)},methods:{handleScroll(){const t=this.affix,e=_(window,!0),n=function(element){const rect=element.getBoundingClientRect(),t=_(window,!0),e=_(window),n=window.document.body,v=n.clientTop||0,o=n.clientLeft||0;return{top:rect.top+t-v,left:rect.left+e-o}}(this.$el),v=window.innerHeight,o=this.$el.getElementsByTagName("div")[0].offsetHeight;n.top-this.top<e&&"top"===this.offsetType&&!t?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${n.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):n.top-this.top>e&&"top"===this.offsetType&&t&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),n.top+this.bottom+o>e+v&&"bottom"===this.offsetType&&!t?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${n.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):n.top+this.bottom+o<e+v&&"bottom"===this.offsetType&&t&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},o=n(2);var component=Object(o.a)(v,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=n(79);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},122:function(t,e,n){"use strict";n.r(e);var _=n(87),v=n.n(_);for(var o in _)"default"!==o&&function(t){n.d(e,t,function(){return _[t]})}(o);e.default=v.a},180:function(t,e,n){"use strict";n.r(e);var _=n(67),v={name:"TagShow",components:{Affix:n(114).a},head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:`${t.alias},C站,calibur,咔哩吧,ACG,二次元,社区`},{hid:"description",name:"description",content:`${t.name},${t.intro},咔哩吧是一个二次元社区`}]}},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData:({app:t,error:e,params:n})=>_.e(t,{slug:n.slug}).then(data=>({...data})).catch(e),layout:"web",created(){},mounted(){},methods:{createTag(){this.$prompt("请输入标签名","创建标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");_.b(this,{name:e,parent_slug:this.slug}).then(data=>{this.children.push(data),this.$toast.success("标签创建成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},combineTag(){console.log("combineTag")},deleteTag(){this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{_.c(this,{slug:this.slug}).then(()=>{this.$toast.success("标签删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},relinkTag(){this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(({value:t})=>{_.d(this,{slug:this.slug,target_slug:t}).then(()=>{this.$toast.success("标签移动成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},updateTag(){this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");_.f(this,{name:e,slug:this.slug,avatar:""}).then(()=>{this.$toast.success("标签更新成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},o=n(2);var component=Object(o.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"left-aside",attrs:{span:5}},[n("affix",{attrs:{top:50}},[t.parent?n("ul",{staticClass:"parent-node"},[n("li",{staticClass:"node"},[n("nuxt-link",{attrs:{to:"/tag/"+t.parent.slug}},[n("img",{attrs:{src:t.$resize(t.parent.avatar,{width:32}),alt:t.parent.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.parent.name)}})])],1)]):t._e(),t._v(" "),t.children.length?n("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return n("li",{key:e.slug,staticClass:"node"},[n("nuxt-link",{attrs:{to:"/tag/"+e.slug}},[n("img",{attrs:{src:t.$resize(e.avatar,{width:32}),alt:e.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])],1)}),0):t._e()])],1),t._v(" "),n("el-col",{staticClass:"main-wrap",attrs:{span:14}},[n("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n      "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("affix",{attrs:{top:50}},[n("div",[t._v("\n          当前标签活跃用户\n        ")]),t._v(" "),n("div",[n("button",{on:{click:t.createTag}},[t._v("\n            添加子标签\n          ")]),t._v(" "),n("button",{on:{click:t.combineTag}},[t._v("\n            合并标签\n          ")]),t._v(" "),n("button",{on:{click:t.deleteTag}},[t._v("\n            删除标签\n          ")]),t._v(" "),n("button",{on:{click:t.relinkTag}},[t._v("\n            修改父节点\n          ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[n("button",[t._v("\n              更新标签\n            ")])])],1)])],1)],1)],1)},[],!1,function(t){var e=n(122);e.__inject__&&e.__inject__(t)},null,"5d3bcdf8");e.default=component.exports},67:function(t,e,n){"use strict";n.d(e,"e",function(){return _}),n.d(e,"b",function(){return v}),n.d(e,"f",function(){return o}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return c});const _=(t,{slug:e})=>t.$axios.$get("v1/tag/show",{params:{slug:e}}),v=(t,{name:e,parent_slug:n})=>t.$axios.$post("v1/tag/create",{name:e,parent_slug:n}),o=(t,{name:e,slug:n,avatar:_,alias:v,intro:o})=>t.$axios.$post("v1/tag/update",{name:e,slug:n,avatar:_,alias:v,intro:o}),l=(t,{slug:e,target_slug:n})=>t.$axios.$post("v1/tag/relink",{slug:e,target_slug:n}),r=(t,{slug:e})=>t.$axios.$post("v1/tag/delete",{slug:e}),c=(t,{slug:e})=>t.$axios.$get("v1/tag/bookmarks",{params:{slug:e}})},73:function(t,e){},79:function(t,e,n){"use strict";n.r(e);var _=n(73),v=n.n(_);for(var o in _)"default"!==o&&function(t){n.d(e,t,function(){return _[t]})}(o);e.default=v.a},87:function(t,e){}};
//# sourceMappingURL=b78c446b76a321446a56.js.map