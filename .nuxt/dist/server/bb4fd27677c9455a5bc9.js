exports.ids=[11],exports.modules={122:function(t,e){},170:function(t,e,n){"use strict";n.r(e);var r=n(122),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=l.a},223:function(t,e,n){"use strict";n.r(e);var r=n(62),l=n.n(r),o=n(26),c={name:"TagTree",layout:"web",components:{"el-tree":l.a},props:{},data:()=>({props:{label:"name",isLeaf:!0,children:"children"},root:null}),computed:{},watch:{},asyncData:({app:t,error:e})=>Object(o.e)(t,{slug:"1e1"}).then(t=>({root:t})).catch(e),methods:{async loadTags(t,e){if(0===t.level)return e(this.root.children);await Object(o.e)(this,{slug:t.data.slug}).then(t=>{e(t.children)})}}},d=n(1);var component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-tree"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[t._v("\n       \n    ")]),t._v(" "),n("el-col",{attrs:{span:15}},[t.root?n("el-tree",{attrs:{props:t.props,load:t.loadTags,"node-key":"slug",lazy:""},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var data=e.data;return n("div",{staticClass:"tag"},[n("a",{attrs:{href:"/tag/"+data.slug,target:"_blank"}},[n("span",[t._v(t._s(data.name))])])])}}],null,!1,2375366947)}):t._e()],1)],1)],1)},[],!1,function(t){var e=n(170);e.__inject__&&e.__inject__(t)},null,"7d5bbd92");e.default=component.exports}};
//# sourceMappingURL=bb4fd27677c9455a5bc9.js.map