(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{261:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"f",function(){return l}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return h});const r=(t,e)=>{let{slug:n}=e;return t.$axios.$get("v1/tag/show",{params:{slug:n}})},o=(t,e)=>{let{name:n,parent_slug:r}=e;return t.$axios.$post("v1/tag/create",{name:n,parent_slug:r})},l=(t,e)=>{let{name:n,slug:r,avatar:o,alias:l,intro:c}=e;return t.$axios.$post("v1/tag/update",{name:n,slug:r,avatar:o,alias:l,intro:c})},c=(t,e)=>{let{slug:n,target_slug:r}=e;return t.$axios.$post("v1/tag/relink",{slug:n,target_slug:r})},d=(t,e)=>{let{slug:n}=e;return t.$axios.$post("v1/tag/delete",{slug:n})},h=(t,e)=>{let{slug:n}=e;return t.$axios.$get("v1/tag/bookmarks",{params:{slug:n}})}},266:function(t,e,n){"use strict";var r=n(2),o=n(38);e.a={beforeMount(){var t=this;return Object(r.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.userSigned&&t.userSigned(),e()):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})})}else{const e=Object(o.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.userSigned&&t.userSigned():t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})}})()}}},278:function(t,e,n){},322:function(t,e,n){"use strict";var r=n(278);n.n(r).a},406:function(t,e,n){"use strict";n.r(e);n(105);var r=n(266),o=n(261),l={name:"CreateLayout",layout:"web",mixins:[r.a],data:()=>({tags:[{label:"动漫",value:"bangumi",children:[]},{label:"游戏",value:"game",children:[]},{label:"话题",value:"topic",children:[]}]}),computed:{headers:()=>[{route:"/create/daily",name:"图文帖",icon:"tee"},{route:"/create/cosplay",name:"cosplay",icon:"cosplay"},{route:"/create/atfield",name:"A.T.Field",icon:"timu"}]},methods:{userSigned(){this.getUserBookmarkTags()},getUserBookmarkTags(){Object(o.a)(this,{slug:this.$store.state.user.slug}).then(data=>{Object.keys(data).forEach(t=>{this.tags.forEach(e=>{e.value===t&&(e.children=data[t].map(t=>Object.assign(t,{value:t.slug,label:t.name})))})})}).catch(()=>{})}}},c=(n(322),n(18)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create-layout"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[n("v-switcher",{attrs:{headers:t.headers,routable:!0,"header-height":44,align:"vertical"}},t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),n("el-col",{attrs:{span:15}},[n("nuxt-child",{staticClass:"main-section",attrs:{tags:t.tags}})],1),t._v(" "),n("el-col",{attrs:{span:5}},[t._v("\n       \n    ")])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);