(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{260:function(t,e,n){},267:function(t,e,n){"use strict";var r=n(260);n.n(r).a},268:function(t,e,n){},269:function(t,e,n){},270:function(t,e,n){},271:function(t,e,n){},276:function(t,e,n){"use strict";var r={components:{},props:{},data:()=>({headers:[{route:"/",name:"首页"},{route:"/tag/2he",name:"动漫"},{route:"/tag/285",name:"游戏"},{route:"/tag/3p6",name:"话题"}]}),computed:{login(){return this.$store.state.login}},watch:{},created(){},mounted(){},methods:{handleLogout(){this.$store.dispatch("destroyAuth"),this.$cookie.remove("JWT-TOKEN"),window.location="/"},handleSignIn(){this.$channel.$emit("sign-in")}}},o=(n(267),n(7)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"page-header"}},[n("div",{staticClass:"container nav"},[n("nav",{staticClass:"left"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[n("span",{staticClass:"prefix"},[t._v("calibur.tv")])]),t._v(" "),n("v-switcher",{attrs:{headers:t.headers,routable:!0,align:"start"}},t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),n("div",{staticClass:"right"},[t.login?n("el-button",{attrs:{type:"text"},on:{click:t.handleLogout}},[t._v("\n        退出\n      ")]):n("el-button",{attrs:{type:"text"},on:{click:t.handleSignIn}},[t._v("\n        登录\n      ")]),t._v("\n        \n      "),n("nuxt-link",{attrs:{to:"/create/cosplay/"}},[n("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-s-promotion"}},[t._v("\n          投稿\n        ")])],1)],1)])])},[],!1,null,null,null);e.a=component.exports},315:function(t,e,n){"use strict";var r=n(268);n.n(r).a},316:function(t,e,n){"use strict";var r=n(269);n.n(r).a},317:function(t,e,n){"use strict";var r=n(270);n.n(r).a},318:function(t,e,n){"use strict";var r=n(271);n.n(r).a},325:function(t,e,n){"use strict";n.r(e);var r=n(276),o={name:"",components:{},props:{},data:()=>({timer:0,mouseInner:!1,list:[{color:"rgba(21,174,103, 0.5)",id:"a",text:"a"},{color:"rgba(245,163,59, 0.5)",id:"b",text:"b"},{color:"rgba(255,230,135, 0.5)",id:"c",text:"c"},{color:"rgba(194,217,78, 0.5)",id:"d",text:"d"},{color:"rgba(195,123,177, 0.5)",id:"e",text:"e"},{color:"rgba(21,174,103, 0.5)",id:"f",text:"f"},{color:"rgba(245,163,59, 0.5)",id:"g",text:"g"},{color:"rgba(255,230,135, 0.5)",id:"h",text:"h"},{color:"rgba(194,217,78, 0.5)",id:"i",text:"i"},{color:"rgba(195,123,177, 0.5)",id:"j",text:"j"}]}),watch:{},created(){},mounted(){this.autoplay()},beforeDestroy(){clearInterval(this.timer)},methods:{handleClick(t){},slide(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const e=Object.assign(t?this.list[0]:this.list[this.list.length-1],{id:Date.now()});t?(this.list.push(e),this.list.splice(0,1)):(this.list.unshift(e),this.list.splice(this.list.length-1,1))},autoplay(){this.timer=setInterval(()=>{this.mouseInner||this.slide()},3e3)}}},l=(n(315),n(7)),c=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"banner"},on:{mouseenter:function(e){t.mouseInner=!0},mouseleave:function(e){t.mouseInner=!1}}},[n("transition-group",{staticClass:"carousel",style:{width:300*t.list.length+"px"},attrs:{name:"carousel",tag:"ul"}},t._l(t.list,function(e,r){return n("li",{key:e.id,staticClass:"carousel-item",style:{backgroundColor:e.color},on:{click:function(e){return t.handleClick(r)}}},[t._v("\n      "+t._s(e.text)+"\n    ")])}),0),t._v(" "),n("div",{staticClass:"indicator"},[n("button",{on:{click:function(e){return t.slide(!1)}}},[t._v("\n      prev\n    ")]),t._v(" "),n("button",{on:{click:function(e){return t.slide(!0)}}},[t._v("\n      next\n    ")])])],1)},[],!1,null,null,null).exports,d={name:"",components:{},props:{},data:()=>({headers:[{route:"index",name:"为你推荐"},{route:"trending-hottest-daily",name:"近期热门"},{route:"trending-newest",name:"最新内容"}]}),computed:{},watch:{},created(){},mounted(){},methods:{}},h=(n(316),Object(l.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{attrs:{id:"menubar"}},[e("v-switcher",{attrs:{headers:this.headers,routable:!0,align:"vertical"}})],1)},[],!1,null,null,null).exports),m={name:"",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},v=(n(317),Object(l.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("aside",{attrs:{id:"sidebar"}},[this._v("\n  sidebar\n")])},[],!1,null,null,null).exports),f={name:"",components:{VHeader:r.a,VBanner:c,Menubar:h,Sidebar:v},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},_=(n(318),Object(l.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout-trend"}},[e("v-header"),this._v(" "),e("el-row",{staticClass:"container main-view",attrs:{gutter:15}},[e("el-col",{attrs:{span:24,lg:4}},[this._v("\n       \n    ")]),this._v(" "),e("el-col",{attrs:{span:24,lg:15}},[e("nuxt")],1),this._v(" "),e("el-col",{attrs:{span:24,lg:5}},[this._v("\n       \n    ")])],1)],1)},[],!1,null,null,null));e.default=_.exports}}]);