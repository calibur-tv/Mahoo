(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return h});const r=(t,e)=>{let n=e.slug;return t.$axios.get("v1/tag/show",{params:{slug:n}})},c=(t,e)=>{let n=e.name,r=e.parent_slug;return t.$axios.post("v1/tag/create",{name:n,parent_slug:r})},o=(t,e)=>{let n=e.name,r=e.slug,c=e.avatar;return t.$axios.post("v1/tag/update",{name:n,slug:r,avatar:c})},l=(t,e)=>{let n=e.slug,r=e.target_slug;return t.$axios.post("v1/tag/relink",{slug:n,target_slug:r})},h=(t,e)=>{let n=e.slug;return t.$axios.post("v1/tag/delete",{slug:n})}},309:function(t,e,n){"use strict";n.r(e);var r=n(6),c=n(206),o={name:"TagTree",components:{},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData(t){let e=t.app,n=t.error,o=t.params;return c.d(e,{slug:o.slug}).then(data=>Object(r.a)({},data)).catch(n)},layout:"web",created(){},mounted(){},methods:{createTag(){this.$prompt("请输入标签名","创建标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{const e=t.value.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");c.a(this,{name:e,parent_slug:this.slug}).then(data=>{this.children.push(data),this.$toast.success("标签创建成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},combineTag(){console.log("combineTag")},deleteTag(){this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{c.b(this,{slug:this.slug}).then(()=>{this.$toast.success("标签删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},relinkTag(){this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(t=>{let e=t.value;c.c(this,{slug:this.slug,target_slug:e}).then(()=>{this.$toast.success("标签移动成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},updateTag(){this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{const e=t.value.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");c.e(this,{name:e,slug:this.slug,avatar:""}).then(()=>{this.$toast.success("标签更新成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},l=n(13),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[n("div",{staticClass:"panel"},[t.parent?[n("p",[t._v("父标签")]),t._v(" "),n("nuxt-link",{attrs:{to:"/tag/"+t.parent.slug}},[t._v("\n            "+t._s(t.parent.name)+"\n          ")])]:t._e(),t._v(" "),t.children.length?[n("p",[t._v("子标签")]),t._v(" "),t._l(t.children,function(e){return n("nuxt-link",{key:e.slug,attrs:{to:"/tag/"+e.slug}},[t._v("\n            "+t._s(e.name)+"\n          ")])})]:t._e()],2)]),t._v(" "),n("el-col",{attrs:{span:15}},[n("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n    ")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"panel"},[t._v("\n        当前标签活跃用户\n      ")]),t._v(" "),n("div",{staticClass:"panel"},[n("button",{on:{click:t.createTag}},[t._v("\n          添加子标签\n        ")]),t._v(" "),n("button",{on:{click:t.combineTag}},[t._v("\n          合并标签\n        ")]),t._v(" "),n("button",{on:{click:t.deleteTag}},[t._v("\n          删除标签\n        ")]),t._v(" "),n("button",{on:{click:t.relinkTag}},[t._v("\n          修改父节点\n        ")]),t._v(" "),n("button",{on:{click:t.updateTag}},[t._v("\n          更新标签\n        ")])])])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);