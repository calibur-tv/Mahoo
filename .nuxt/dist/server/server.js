module.exports=function(e){var t={},n={0:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(t){if(0!==n[t]){var r=require("./"+{1:"f3f58b375a7d03ac9e80",2:"e25af02107e6730e15f3",3:"5836f27429fa175a945c",4:"8c9083fd76f7394c5191",5:"fe1c7ebca33243c72974",6:"1dc51a1ac800ad45f3db",7:"0f885a648b1b3b5e4b3d",8:"6f140bf469fcdb6e4e69",9:"013811cd14e5a0d2140d",10:"d3693dce22860c9a8b39",11:"1cf607bc404409d209df",12:"334e99197955d177d155",13:"19d9163578a5713ad2dd"}[t]+".js"),o=r.modules,c=r.ids;for(var l in o)e[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="https://file.calibur.tv/web/",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=22)}([function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";function r(e,t,n,r,o,c,l,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(e,t){return h.call(t),m(e,t)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:e,options:f}}n.d(t,"a",function(){return r})},function(e,t){e.exports=require("vue-mixin-store")},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports={container:"container_38LTS",header:"header_1m5og",title:"title_20O3t",close:"close_uLA1x",content:"content_37QpV",loading:"loading_32o64","no-more":"no-more_2gF1n",noMore:"no-more_2gF1n",footer:"footer_2bdAt",cancel:"cancel_3BYdT",submit:"submit_1MUgK"}},function(e,t){e.exports=require("vue-router")},function(e,t){e.exports=require("vuex")},function(e,t){e.exports=require("element-ui/lib/dialog")},function(e,t){e.exports=require("element-ui/lib/col")},function(e,t){e.exports=require("element-ui/lib/row")},function(e,t){e.exports=require("element-ui/lib/button")},function(e,t){e.exports=require("v-switcher")},function(e,t,n){e.exports=n.p+"img/b07f58f.jpeg"},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("consola")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("vue-meta")},function(e,t){e.exports=require("vue-no-ssr")},function(e,t){e.exports=require("axios")},function(e,t,n){e.exports=n(37)},function(e,t,n){e.exports=n.p+"img/d465ab1.jpeg"},function(e,t,n){e.exports=n.p+"img/adea640.jpeg"},function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return o}),n.d(t,"actions",function(){return c}),n.d(t,"getters",function(){return l});const r=()=>({user:{slug:"1dc",nickname:"冰淤"},login:!1}),o={SET_USER(e,t){e.user=t,e.login=!!t.id}},c={},l={currentUserKey:e=>t=>e.login&&e.user[t]||""}},function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return l}),n.d(t,"actions",function(){return d}),n.d(t,"getters",function(){return h});var r=n(2);const o=n.n(r).a.FlowStore({}),c=o.state,l=o.mutations,d=o.actions,h=o.getters},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t.default=o.a},function(e,t,n){"use strict";n.r(t);var r=n(16),o=n(17),c=n.n(o),l=n(0),d=n.n(l),h=n(18),f=n.n(h);var m={};function x(e){return e.then(e=>e.default||e)}function v(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=d.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function y(e,t=!1){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).map(r=>(t&&t.push(n),e.components[r]))))}function _(e){return Promise.all(function(e,t){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).reduce((r,o)=>(e.components[o]?r.push(t(e.components[o],e.instances[o],e,o,n)):delete e.components[o],r),[])))}(e,async(e,t,n,r)=>("function"!=typeof e||e.options||(e=await e()),n.components[r]=v(e),n.components[r])))}async function w(e){if(e)return await _(e),{...e,meta:y(e).map((t,n)=>({...t.options.meta,...(e.matched[n]||{}).meta}))}}async function C(e,t){e.context||(e.context={isStatic:!1,isDev:!1,isHMR:!1,app:e,store:e.store,payload:t.payload,error:t.error,base:"/",env:{API_URL:"http://localhost/",API_URL_BROWSER:"https://api.calibur.tv/"}},t.req&&(e.context.req=t.req),t.res&&(e.context.res=t.res),t.ssrContext&&(e.context.ssrContext=t.ssrContext),e.context.redirect=((t,path,n)=>{if(!t)return;e.context._redirected=!0;let r=typeof path;"number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=t),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?e.context.next({path:path,query:n,status:t}):(path=function(e,t){let n;const r=e.indexOf("://");-1!==r?(n=e.substring(0,r),e=e.substring(r+3)):e.startsWith("//")&&(e=e.substring(2));let o,c=e.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&(path=c[0],o=c[1]);l+=path?"/"+path:"",t&&"{}"!==JSON.stringify(t)&&(l+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(t=>{const n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(e=>[t,"=",e].join("")).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return l+=o?"#"+o:""}(path,n),e.context.next({path:path,status:t}))}),e.context.beforeNuxtRender=(e=>t.beforeRenderFns.push(e)));const[n,r]=await Promise.all([w(t.route),w(t.from)]);t.route&&(e.context.route=n),t.from&&(e.context.from=r),e.context.next=t.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!t.isHMR,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{}}function $(e,t){return!e.length||t._redirected||t._errored?Promise.resolve():k(e[0],t).then(()=>$(e.slice(1),t))}function k(e,t){let n;return(n=2===e.length?new Promise(n=>{e(t,function(e,data){e&&t.error(e),n(data=data||{})})}):e(t))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function j(e,t){return function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=r||{},c=o.pretty?E:encodeURIComponent;for(let i=0;i<e.length;i++){const n=e[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let o;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let e=0;e<r.length;e++){if(o=c(r[e]),!t[i].test(o))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(o)+"`");path+=(0===e?n.prefix:n.delimiter)+o}}else{if(o=n.asterisk?encodeURI(r).replace(/[?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()):c(r),!t[i].test(o))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+o+'"');path+=n.prefix+o}}return path}}(function(e,t){const n=[];let r=0,o=0,path="";const c=t&&t.delimiter||"/";let l;for(;null!=(l=T.exec(e));){const t=l[0],d=l[1],h=l.index;if(path+=e.slice(o,h),o=h+t.length,d){path+=d[1];continue}const f=e[o],m=l[2],x=l[3],v=l[4],y=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,$="+"===_||"*"===_,k="?"===_||"*"===_,j=l[2]||c,pattern=v||y;n.push({name:x||r++,prefix:m||"",delimiter:j,optional:k,repeat:$,partial:C,asterisk:!!w,pattern:pattern?O(pattern):w?".*":"[^"+S(j)+"]+?"})}o<e.length&&(path+=e.substr(o));path&&n.push(path);return n}(e,t))}const T=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function E(e){return encodeURI(e).replace(/[\/?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())}function S(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function O(e){return e.replace(/([=!:$\/()])/g,"\\$1")}var A=n(19),N=n.n(A),P=n(8),R=n.n(P);const L=()=>x(n.e(13).then(n.bind(null,88))),M=()=>x(n.e(4).then(n.bind(null,89))),B=()=>x(n.e(7).then(n.bind(null,90))),U=()=>x(n.e(5).then(n.bind(null,92))),D=()=>x(n.e(6).then(n.bind(null,94))),I=()=>x(n.e(8).then(n.bind(null,87))),z=()=>x(n.e(12).then(n.bind(null,97))),K=()=>x(n.e(10).then(n.bind(null,91))),F=()=>x(n.e(11).then(n.bind(null,96))),H=()=>x(n.e(9).then(n.bind(null,93)));d.a.use(R.a);const V=function(e,t,n){if(n)return n;let r={x:0,y:0};return e.hash&&(r={selector:e.hash}),r};var J=n(20),W={...n.n(J).a,name:"NoSsr"},X={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(e,{parent:t,data:data,props:n}){data.nuxtChild=!0;const r=t,o=t.$nuxt.nuxt.transitions,c=t.$nuxt.nuxt.defaultTransition;let l=0;for(;t;)t.$vnode&&t.$vnode.data.nuxtChild&&l++,t=t.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};Q.forEach(e=>{void 0!==d[e]&&(h[e]=d[e])});const f={};G.forEach(e=>{"function"==typeof d[e]&&(f[e]=d[e].bind(r))});const m=f.beforeEnter;f.beforeEnter=(e=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,e)});let x=[e("router-view",data)];return n.keepAlive&&(x=[e("keep-alive",{props:n.keepAliveProps},x)]),e("transition",{props:h,on:f},x)}};const Q=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],G=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var Y={name:"nuxt-error",props:{error:{type:Object,default:null}},head:{title:"出错了"},computed:{statusCode(){return"继续操作前请先登录"===this.message?401:"请在APP内打开该页面"===this.message?403:this.error&&this.error.statusCode||404},message(){return this.error&&this.error.message||"您要找的页面不存在"}},methods:{handleLogin(){this.$channel.$emit("sign-in")},toastMessage(){this.$toast.error(this.message)}}},Z=n(1);var ee=Object(Z.a)(Y,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"error-page"}},[e._ssrNode('<div class="error-main">',"</div>",[401===e.statusCode?e._ssrNode('<div id="error-401">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",n(23))+' alt="error-401"> <h3>请登录后重新访问</h3> <button class="back">\n        登录\n      </button>')],2):403===e.statusCode?e._ssrNode('<div id="error-403"><img'+e._ssrAttr("src",n(15))+' alt="error-403"> <h3>您没有权限访问该页面</h3> <a href="/" class="back">回到首页</a></div>'):404===e.statusCode?e._ssrNode('<div id="error-404">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",n(24))+' alt="error-404"> <h3>您要找的页面不存在</h3> <div class="subtitle">\n        不存在的，或者正在审核中。\n      </div> '),r("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[e._v("\n        返回首页\n      ")])],2):e.statusCode>=500?e._ssrNode('<div id="error-500">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",n(15))+' alt="error-500"> <h3>服务器出错了</h3> <div class="subtitle">\n        服务器出了点问题，工程师正在加紧抢修ヽ( ° ▽°)ノ\n      </div> '),r("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[e._v("\n        返回首页\n      ")])],2):e._e()])])},[],!1,function(e){var t=n(25);t.__inject__&&t.__inject__(e)},null,"acdb5c8e").exports,te={name:"Nuxt",components:{NuxtChild:X,NuxtError:ee},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||j(this.$route.matched[0].path)(this.$route.params);const e=this.$route.matched[0]&&this.$route.matched[0].components.default;if(e&&e.options){const{key:t,watchQuery:n}=e.options;if(t)return"function"==typeof t?t(this.$route):t;if(n){if(n.length){const e={};for(const t of n)e[t]=this.$route.query[t];return this.$router.resolve({path:this.$route.path,query:e}).href}return this.$route.fullPath}}return this.$route.path}},beforeCreate(){d.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(e){return this.nuxt.err?e("NuxtError",{props:{error:this.nuxt.err}}):e("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ne={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(e){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(e))),this},get(){return this.percent},increase(e){return this.percent=Math.min(100,Math.floor(this.percent+e)),this},decrease(e){return this.percent=Math.max(0,Math.floor(this.percent-e)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(e){let t=e(!1);return this.show&&(t=e("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),t}};var re=Object(Z.a)(ne,void 0,void 0,!1,function(e){var t=n(26);t.__inject__&&t.__inject__(e)},null,"603ac224").exports;n(27),n(28);const oe={_default:()=>n.e(1).then(n.bind(null,98)).then(e=>e.default||e),_trend:()=>n.e(2).then(n.bind(null,86)).then(e=>e.default||e),_web:()=>n.e(3).then(n.bind(null,95)).then(e=>e.default||e)};let ie={};var ae={head:{title:"咔哩吧",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"},{name:"theme-color",content:"#ffffff"},{name:"format-detection",content:"telephone=no"},{name:"applicable-device",content:"pc,mobile"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"force-rendering",content:"webkit"},{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{hid:"description",name:"description",content:"calibur - 二次元社区"},{hid:"keywords",name:"keywords",content:"C站,calibur,咔哩吧,ACG,二次元,社区"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-capable",name:"apple-mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-status-bar-style",name:"apple-mobile-web-app-status-bar-style",content:"default"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"咔哩吧"},{hid:"author",name:"author",content:"冰淤"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"咔哩吧"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"咔哩吧"},{hid:"og:description",name:"og:description",property:"og:description",content:"咔哩吧 - 二次元社区"},{hid:"og:image",name:"og:image",property:"og:image",content:"https://file.calibur.tv/web/icons/icon_512.a9a872.png"},{hid:"og:image:width",name:"og:image:width",property:"og:image:width",content:512},{hid:"og:image:height",name:"og:image:height",property:"og:image:height",content:512},{hid:"og:image:type",name:"og:image:type",property:"og:image:type",content:"image/png"}],link:[{rel:"dns-prefetch",href:"https://file.calibur.tv"},{rel:"preconnect",href:"https://www.calibur.tv"},{rel:"preconnect",href:"https://api.calibur.tv"},{rel:"icon",type:"image/x-icon",href:"https://file.calibur.tv/favicon.ico"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-640x1136.png",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-750x1294.png",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-1242x2148.png",media:"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-1125x2436.png",media:"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-1536x2048.png",media:"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-1668x2224.png",media:"(device-width: 834px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{rel:"apple-touch-startup-image",href:"https://file.calibur.tv/images/splash/launch-2048x2732.png",media:"(device-width: 1024px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{rel:"manifest",href:"https://file.calibur.tv/web/manifest.99dc0c38.json"},{rel:"shortcut icon",href:"https://file.calibur.tv/web/icons/icon_64.a9a872.png"},{rel:"apple-touch-icon",href:"https://file.calibur.tv/web/icons/icon_512.a9a872.png",sizes:"512x512"}],bodyAttrs:{id:"calibur"},script:[{innerHTML:'var _hmt=_hmt||[];(function (){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();',type:"text/javascript",async:!0},{innerHTML:"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();",type:"text/javascript",async:!0},{innerHTML:"(function(){var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var ratio=window.devicePixelRatio||1;var screen={width:window.screen.width*ratio,height:window.screen.height*ratio};if(iOS&&screen.width===1125&&screen.height===2436){document.querySelector('meta[name=viewport]').content=document.querySelector('meta[name=viewport]').content+',viewport-fit=cover'}}());",type:"text/javascript"},{src:"//qzonestyle.gtimg.cn/qzone/qzact/common/share/share.js",type:"text/javascript"},{src:"//res2.wx.qq.com/open/js/jweixin-1.4.0.js",type:"text/javascript"}],__dangerouslyDisableSanitizers:"script",style:[],htmlAttrs:{lang:"zh-CN"}},render(e,t){const n=e("NuxtLoading",{ref:"loading"}),r=e(this.layout||"nuxt"),o=e("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=e("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(e){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return e("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){d.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){d.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(e){e&&ie["_"+e]||(e="default"),this.layoutName=e;let t="_"+e;return this.layout=ie[t],this.layout},loadLayout(e){const t=!e,n=!(oe["_"+e]||ie["_"+e]);let r="_"+(t||n?"default":e);return ie[r]?Promise.resolve(ie[r]):oe[r]().then(e=>(ie[r]=e,delete oe[r],ie[r])).catch(e=>{if(this.$nuxt)return this.$nuxt.error({statusCode:500,message:e.message})})}},components:{NuxtLoading:re}},se=n(9),ce=n.n(se);d.a.use(ce.a);const ue=console,le=["state","getters","actions","mutations"];let pe={};(pe=function(e,t){if((e=e.default||e).commit)throw new Error(`[nuxt] ${t} should export a method that returns a Vuex instance.`);return"function"!=typeof e&&(e=Object.assign({},e)),he(e,t)}(n(29),"store/index.js")).modules=pe.modules||{},function(e,t){e=e.default||e;const n=t.replace(/\.(js|mjs|ts)$/,"").split("/");let r=n[n.length-1];const o=`store/${t}`;if(e="state"===r?function(e,t){if("function"!=typeof e){ue.warn(`${t} should export a method that returns an object`);const n=Object.assign({},e);return()=>n}return he(e,t)}(e,o):he(e,o),le.includes(r)){const t=r,o=fe(pe,n,{isProperty:!0});return void me(o,e,t)}"index"===r&&(n.pop(),r=n[n.length-1]);const c=fe(pe,n);for(const t of le)me(c,e[t],t);!1===e.namespaced&&delete c.namespaced}(n(30),"flow.js");const de=pe instanceof Function?pe:()=>new ce.a.Store(Object.assign({strict:!1},pe));function he(e,t){if(e.state&&"function"!=typeof e.state){ue.warn(`'state' should be a method that returns an object in ${t}`);const n=Object.assign({},e.state);e=Object.assign({},e,{state:()=>n})}return e}function fe(e,t,{isProperty:n=!1}={}){if(!t.length||n&&1===t.length)return e;const r=t.shift();return e.modules[r]=e.modules[r]||{},e.modules[r].namespaced=!0,e.modules[r].modules=e.modules[r].modules||{},fe(e.modules[r],t,{isProperty:n})}function me(e,t,n){t&&("state"===n?e.state=t||e.state:e[n]=Object.assign({},e[n],t))}n(4);var ge=async function(e,t){const n={"64x64":"https://file.calibur.tv/web/icons/icon_64.a9a872.png","120x120":"https://file.calibur.tv/web/icons/icon_120.a9a872.png","144x144":"https://file.calibur.tv/web/icons/icon_144.a9a872.png","152x152":"https://file.calibur.tv/web/icons/icon_152.a9a872.png","192x192":"https://file.calibur.tv/web/icons/icon_192.a9a872.png","384x384":"https://file.calibur.tv/web/icons/icon_384.a9a872.png","512x512":"https://file.calibur.tv/web/icons/icon_512.a9a872.png"};t("icon",e=>n[e+"x"+e]||"")},xe=n(21),be=n.n(xe);const ve={setHeader(e,t,n="common"){for(let r of Array.isArray(n)?n:[n]){if(!t)return void delete this.defaults.headers[r][e];this.defaults.headers[r][e]=t}},setToken(e,t,n="common"){const r=e?(t?t+" ":"")+e:null;this.setHeader("Authorization",r,n)},onRequest(e){this.interceptors.request.use(t=>e(t)||t)},onResponse(e){this.interceptors.response.use(t=>e(t)||t)},onRequestError(e){this.interceptors.request.use(void 0,t=>e(t)||Promise.reject(t))},onResponseError(e){this.interceptors.response.use(void 0,t=>e(t)||Promise.reject(t))},onError(e){this.onRequestError(e),this.onResponseError(e)}};for(let e of["request","delete","get","head","options","post","put","patch"])ve["$"+e]=function(){return this[e].apply(this,arguments).then(e=>e&&e.data)};var ye=(e,t)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=e.req&&e.req.headers?Object.assign({},e.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],n.headers.common["Accept-Encoding"]="gzip, deflate";const r=be.a.create(n);(e=>{for(let t in ve)e[t]=ve[t].bind(e)})(r),e.$axios=r,t("axios",r)},_e=({$axios:e,app:t})=>{const n="undefined"!=typeof window;e.setHeader("Accept","application/x.api.latest+json"),t.store.state.login?e.setToken(t.store.state.user.token,"Bearer"):e.setToken((e=>{const t="undefined"!=typeof window;if(t&&window.__JWT_TOKEN__)return window.__JWT_TOKEN__;let n="";const r=t?document.cookie:e?e.headers.cookie:"";if(r&&r.split("; ").forEach(e=>{e.startsWith("JWT-TOKEN=")&&(n=e.split("JWT-TOKEN=")[1])}),n)return t&&(window.__JWT_TOKEN__=n),n;const o=e?e.headers.authorization:"";if(o&&(n=o.split("Bearer ")[1]),n)return t&&(window.__JWT_TOKEN__=n),n;if(t){let e="";try{e=JSON.parse(document.querySelector('script[data-name="page-data"]').textContent)}catch(t){e={}}n=e.authToken,window.__JWT_TOKEN__=n}return n})(n?"":t.context.req),"Bearer"),e.onRequest(e=>{e.baseURL=n?"https://api.calibur.tv/":"http://localhost/",e.timeout=1e4}),e.onResponse(e=>{const t=e.headers.authorization;return t&&Object.assign(e.data.data,{token:t.split("Bearer ").pop()}),e.data.data}),e.onError(e=>{const t=(e=>{const t={};return/timeout of/.test(e.message)?(t.statusCode=504,t.message="网络请求超时，请稍候再试！",t):e.response?(t.statusCode=e.response.status,t.message=e.response.data.message,t):(t.statusCode=502,t.message="网络错误，请刷新网页重试！",t)})(e);return Promise.reject(t)})},we=(n(31),n(3),n(10)),Ce=n.n(we),$e=(n(32),n(11)),ke=n.n($e),je=(n(33),n(12)),Te=n.n(je),qe=(n(34),n(13)),Ee=n.n(qe),Se=n(14),Oe=n.n(Se),Ae=(n(35),{name:"VDialog",props:{value:{type:Boolean,default:!1,required:!0},customClass:{type:String,default:""},close:{type:Boolean,default:!0},width:{type:String,default:"620px"},height:{type:String,default:""},title:{type:String,default:"提示"},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},submitText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},scroll:{type:Function,default:null},fullscreen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},theme:{type:String,validator:e=>~["success","danger"].indexOf(e),default:"success"}},data(){return{dialogVisible:this.value}},computed:{computeDialogHeight(){return this.height?{height:this.height}:this.scroll?{height:"600px"}:{height:"auto"}}},mounted(){this.$watch("value",e=>{this.dialogVisible=e,window.__closeImageLazy__=e}),this.$watch("dialogVisible",e=>{this.$emit("input",e),window.__closeImageLazy__=e})},methods:{beforeClose(e){e(),this.$emit("cancel"),this.dialogVisible=!1},cancel(){this.$emit("cancel"),this.dialogVisible=!1},submit(){this.$emit("submit")},handleScroll(e){if(!this.scroll||this.loading||this.noMore)return;if(!this.$refs.ul)return;const main=e.currentTarget||e.target;this.$refs.ul.clientHeight-main.clientHeight-main.scrollTop<30&&this.scroll()}}});var Ne=Object(Z.a)(Ae,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{width:e.width,"custom-class":e.customClass,"append-to-body":!0,"show-close":!1,visible:e.dialogVisible,"before-close":e.beforeClose,fullscreen:e.fullscreen,"close-on-click-modal":e.clickClose,"close-on-press-escape":e.clickClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("section",{class:e.$style.container},[e.header?n("header",{class:e.$style.header,attrs:{slot:"header"},slot:"header"},[e._t("title",[n("h4",{class:e.$style.title,domProps:{textContent:e._s(e.title)}})])],2):e._e(),e._v(" "),!e.clickClose||e.close?n("button",{class:e.$style.close,on:{click:e.cancel}},[e._v("\n      ×\n    ")]):e._e(),e._v(" "),n("main",{class:e.$style.content,style:e.computeDialogHeight,on:{scroll:e.handleScroll}},[e.scroll?[n("ul",{ref:"ul"},[e._t("default")],2),e._v(" "),e.loading?e._t("loading",[n("p",[e._v("加载中...")])]):e.noMore?e._t("nomore",[n("p",[e._v("没有更多了")])]):e._e()]:e._t("default")],2),e._v(" "),e.footer?n("footer",{class:e.$style.footer},[e._t("footer",[e.cancelText?n("button",{class:e.$style.cancel,domProps:{textContent:e._s(e.cancelText)},on:{click:e.cancel}}):e._e(),e._v(" "),n("button",{class:[e.$style.submit,"btn-"+e.theme],attrs:{loading:e.loading},domProps:{textContent:e._s(e.submitText)},on:{click:e.submit}})])],2):e._e()])])},[],!1,function(e){var t=n(36);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"58184d28").exports,Pe=n(2),Re=n.n(Pe);d.a.component(Re.a.FlowLoader.name,Re.a.FlowLoader),d.a.component(Oe.a.name,Oe.a),d.a.component(Ee.a.name,Ee.a),d.a.component(Te.a.name,Te.a),d.a.component(ke.a.name,ke.a),d.a.component(Ne.name,Ne),d.a.component(Ce.a.name,Ce.a),d.a.component(W.name,W),d.a.component(X.name,X),d.a.component("NChild",X),d.a.component(te.name,te),d.a.use(N.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const Le={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function Me(e){const t=await new R.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:V,routes:[{path:"/test",component:L,props:!1,name:"test"},{path:"/app/launch",component:M,props:!1,children:[{path:"",component:B,props:!1,name:"app-launch"},{path:"create",component:U,props:!1,name:"app-launch-create"},{path:"home",component:D,props:!1,name:"app-launch-home"}]},{path:"/create/cosplay",component:I,props:!1,name:"create-cosplay"},{path:"/tag/tree",component:z,props:!1,name:"tag-tree"},{path:"/pin/:slug?",component:K,props:!0,name:"pin-slug"},{path:"/tag/:slug?",component:F,props:!0,name:"tag-slug"},{path:"/",component:H,props:!1,name:"index"}],fallback:!1}),n=de(e);n.$router=t;const r=n.registerModule;n.registerModule=((path,e,t)=>r.call(n,path,e,Object.assign({preserveState:!1},t)));const o={router:t,store:n,nuxt:{defaultTransition:Le,transitions:[Le],setTransitions(e){return Array.isArray(e)||(e=[e]),e=e.map(e=>e=e?"string"==typeof e?Object.assign({},Le,{name:e}):Object.assign({},Le,e):Le),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error(t){t=t||null,o.context._errored=!!t,t=t?function(e){let t;if(e.message||"string"==typeof e)t=e.message||e;else try{t=JSON.stringify(e,null,2)}catch(n){t=`[${e.constructor.name}]`}return{...e,message:t,statusCode:e.statusCode||e.status||e.response&&e.response.status||500}}(t):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}},...ae};n.app=o;const c=e?e.next:e=>o.router.push(e);let l;if(e)l=t.resolve(e.url).route;else{const path=function(base,e){let path=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(t.options.base);l=t.resolve(path).route}await C(o,{route:l,next:c,error:o.nuxt.error.bind(o),store:n,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});const h=function(e,t){if(!e)throw new Error("inject(key, value) has no key provided");if(void 0===t)throw new Error("inject(key, value) has no value provided");o[e="$"+e]=t,n[e]=o[e];const r="__nuxt_"+e+"_installed__";d.a[r]||(d.a[r]=!0,d.a.use(()=>{d.a.prototype.hasOwnProperty(e)||Object.defineProperty(d.a.prototype,e,{get(){return this.$root.$options[e]}})}))};return"function"==typeof ge&&await ge(o.context,h),"function"==typeof ye&&await ye(o.context,h),"function"==typeof _e&&await _e(o.context,h),e&&e.url&&await new Promise((n,r)=>{t.push(e.url,n,()=>{const r=t.afterEach(async(t,c,l)=>{e.url=t.fullPath,o.context.route=await w(t),o.context.params=t.params||{},o.context.query=t.query||{},r(),n()})})}),{app:o,store:n,router:t}}var Be={name:"NuxtLink",extends:d.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};d.a.component(Be.name,Be),d.a.component("NLink",Be),global.fetch||(global.fetch=f.a);const Ue=()=>new d.a({render:e=>e("div")}),De=e=>t=>{if(e.redirected=t,!e.res)return void(e.nuxt.serverRendered=!1);t.query=Object(r.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:"");t.path.startsWith("http"),t.path!==e.url?(e.res.writeHead(t.status,{Location:t.path}),e.res.end()):e.redirected=!1};t.default=(async e=>{e.redirected=!1,e.next=De(e),e.beforeRenderFns=[],e.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:t,router:n,store:r}=await Me(e),o=new d.a(t);e.meta=o.$meta(),e.asyncData={};const l=async()=>{await Promise.all(e.beforeRenderFns.map(t=>k(t,{Components:x,nuxtState:e.nuxt}))),e.rendered=(()=>{e.nuxt.state=r.state})},h=async()=>{const n="function"==typeof ee.layout?ee.layout(t.context):ee.layout;return e.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await l(),o},f=()=>(t.context.error({statusCode:404,path:e.url,message:"This page could not be found"}),h()),x=y(n.match(e.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",t.context)}catch(e){throw c.a.debug("Error occurred when calling nuxtServerInit: ",e.message),e}if(e.redirected)return Ue();if(e.nuxt.error)return h();let _=[];if(_=_.map(e=>"function"==typeof e?e:("function"!=typeof m[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),m[e])),await $(_,t.context),e.redirected)return Ue();if(e.nuxt.error)return h();let w=x.length?x[0].options.layout:ee.layout;if("function"==typeof w&&(w=w(t.context)),await o.loadLayout(w),e.nuxt.error)return h();if(w=o.setLayout(w),e.nuxt.layout=o.layoutName,_=[],(w=v(w)).options.middleware&&(_=_.concat(w.options.middleware)),x.forEach(e=>{e.options.middleware&&(_=_.concat(e.options.middleware))}),_=_.map(e=>"function"==typeof e?e:("function"!=typeof m[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),m[e])),await $(_,t.context),e.redirected)return Ue();if(e.nuxt.error)return h();let C=!0;try{for(const e of x)if("function"==typeof e.options.validate&&!(C=await e.options.validate(t.context)))break}catch(e){return t.context.error({statusCode:e.statusCode||"500",message:e.message}),h()}if(!C)return e._generate&&(e.nuxt.serverRendered=!1),f();if(!x.length)return f();const j=await Promise.all(x.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=k(n.options.asyncData,t.context);o.then(t=>(e.asyncData[n.cid]=t,function(e,t){if(!t&&e.options.__hasNuxtData)return;const n=e.options._originDataFn||e.options.data||function(){return{}};e.options._originDataFn=n,e.options.data=function(){const data=n.call(this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),{...data,...t}},e.options.__hasNuxtData=!0,e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}(n),t)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(t.context)):r.push(null),Promise.all(r)}));return e.nuxt.data=j.map(e=>e[0]||{}),e.redirected?Ue():e.nuxt.error?h():(await l(),o)})},function(e,t){e.exports=require("element-ui/lib/tag")},function(e,t){e.exports=require("element-ui/lib/divider")},function(e,t){e.exports=require("element-ui/lib/option")},function(e,t){e.exports=require("element-ui/lib/select")},function(e,t){e.exports=require("element-ui/lib/cascader")},function(e,t){e.exports=require("element-ui/lib/radio-group")},function(e,t){e.exports=require("element-ui/lib/radio")},function(e,t){e.exports=require("element-ui/lib/form-item")},function(e,t){e.exports=require("element-ui/lib/form")},function(e,t){e.exports=require("element-ui/lib/input")},function(e,t){e.exports=require("element-ui/lib/upload")},function(e,t){e.exports=require("element-ui/lib/tree")}]);
//# sourceMappingURL=server.js.map