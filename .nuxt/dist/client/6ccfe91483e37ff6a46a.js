(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{277:function(t,e,r){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},325:function(t,e,r){"use strict";r(42);e.a={beforeMount(){var t=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)t();else var e=this.$watch("$store.state.isAuth",r=>{r&&(t(),e())})}}},415:function(t,e,r){},545:function(t,e,r){"use strict";var n=r(415);r.n(n).a},594:function(t,e,r){"use strict";r.r(e);var n=r(277),o=r(325),l={name:"UserSettingLayout",mixins:[n.a,o.a],props:{slug:{type:String,required:!0}},computed:{headers(){return[{name:"基础设置",route:"/user/".concat(this.slug,"/setting/basic")},{name:"认证设置",route:"/user/".concat(this.slug,"/setting/oauth2")}]}}},c=(r(545),r(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-setting-layout"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("VSwitcher",{attrs:{headers:t.headers,routable:!0,align:"vertical"}},t._l(t.headers,(function(e,n){return r("NLink",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])})),1)],1),t._v(" "),r("ElCol",{attrs:{span:18}},[r("NuxtChild")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);