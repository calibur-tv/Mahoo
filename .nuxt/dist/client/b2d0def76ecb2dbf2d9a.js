(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{325:function(t,e,r){},418:function(t,e,r){"use strict";var n=r(325);r.n(n).a},507:function(t,e,r){"use strict";r.r(e);var n={name:"AuthSuccess",data:()=>({timer:5}),computed:{message(){return this.$route.query.message},redirect(){return this.$route.query.redirect}},mounted(){this.$cookie.set("JWT-TOKEN",this.$route.query.token,{expires:365}),setInterval(()=>{1===this.timer?window.location=this.redirect?decodeURIComponent(this.redirect):"/":this.timer--},1e3)}},c=(r(418),r(11)),component=Object(c.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"auth-success"}},[e("p",[this._v(this._s(this.message)+",（"+this._s(this.timer)+"s后自动跳转）")]),this._v(" "),e("a",{attrs:{href:"/"}},[this._v("点击返回首页")])])},[],!1,null,null,null);e.default=component.exports}}]);