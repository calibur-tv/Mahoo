(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{253:function(t,e,r){"use strict";var n=r(2),o=r(34);e.a={beforeMount(){var t=this;return Object(n.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?e():t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})})}else{const e=Object(o.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))||t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})}})()}}},256:function(t,e,r){"use strict";r(58);e.a={beforeMount(){const t=this.$watch("isAuth",e=>{e&&(this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}}),t())})}}},287:function(t,e,r){},336:function(t,e,r){"use strict";var n=r(287);r.n(n).a},367:function(t,e,r){"use strict";r.r(e);var n=r(253),o=r(256),c={name:"UserSettingLayout",mixins:[n.a,o.a],props:{slug:{type:String,required:!0}},computed:{headers(){return[{name:"基础设置",route:"/user/".concat(this.slug,"/setting/basic")},{name:"认证设置",route:"/user/".concat(this.slug,"/setting/oauth2")}]}}},l=(r(336),r(17)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-setting-layout"}},[r("el-row",{staticClass:"column-wrap"},[r("el-col",{attrs:{span:6}},[r("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return r("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("nuxt-child")],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);