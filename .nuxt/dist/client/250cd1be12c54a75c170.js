(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{338:function(t,e,r){},412:function(t,e,r){"use strict";var n=r(338);r.n(n).a},459:function(t,e,r){"use strict";r.r(e);var n={name:"UserSocialLayout",props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},computed:{headers(){const t=this.$utils.convertTA(this.user.sex,this.$store.getters.isMine(this.slug));return[{name:"".concat(t,"的关注"),route:"/user/".concat(this.slug,"/social/following")},{name:"".concat(t,"的粉丝"),route:"/user/".concat(this.slug,"/social/followers")},{name:"".concat(t,"的朋友"),route:"/user/".concat(this.slug,"/social/friends")}]}}},o=(r(412),r(7)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-social-layout"}},[r("el-row",{staticClass:"column-wrap"},[r("el-col",{attrs:{span:6}},[r("v-switcher",{attrs:{headers:t.headers,routable:!0,"header-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return r("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("nuxt-child",{attrs:{slug:t.slug}})],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);