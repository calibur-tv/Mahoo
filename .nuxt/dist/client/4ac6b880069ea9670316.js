(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{373:function(t,e,n){},472:function(t,e,n){"use strict";var r=n(373);n.n(r).a},562:function(t,e,n){"use strict";n.r(e);n(19);var r=n(2),o=n(470),l=n.n(o),c=n(135),d={name:"TagTree",layout:"web",components:{ElTree:l.a},props:{},data:function(){return{props:{label:"name",isLeaf:!0,children:"children"},root:null}},computed:{},watch:{},asyncData:function(t){var e=t.app,n=t.error;return Object(c.e)(e,{slug:"1e1"}).then(function(t){return{root:t}}).catch(n)},methods:{loadTags:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.level){t.next=2;break}return t.abrupt("return",n(this.root.children));case 2:return t.next=4,Object(c.e)(this,{slug:e.data.slug}).then(function(t){n(t.children)});case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}},f=(n(472),n(18)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-tree"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{span:4}},[t._v("\n       \n    ")]),t._v(" "),n("ElCol",{attrs:{span:15}},[t.root?n("ElTree",{attrs:{props:t.props,load:t.loadTags,"node-key":"slug",lazy:""},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var data=e.data;return n("div",{staticClass:"tag"},[n("a",{attrs:{href:"/tag/"+data.slug,target:"_blank"}},[n("span",[t._v(t._s(data.name))])])])}}],null,!1,2375366947)}):t._e()],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);