exports.ids=[4],exports.modules={55:function(t,e){},77:function(t,e,r){"use strict";r.r(e);var n=r(55),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},99:function(t,e,r){"use strict";r.r(e);var n={name:"AuthRedirect",data:()=>({timer:5}),computed:{message(){return this.$route.query.message},redirect(){return this.$route.query.redirect}},mounted(){this.$cookie.set("JWT-TOKEN",this.$route.query.token,{expires:365}),setInterval(()=>{1===this.timer?window.location=this.redirect?decodeURIComponent(this.redirect):"https://www.calibur.tv":this.timer--},1e3)}},o=r(1);var component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth-redirect"}},[this._ssrNode("<p>"+this._ssrEscape(this._s(this.message)+",（"+this._s(this.timer)+"s后自动跳转）")+'</p> <a href="/">点击返回首页</a>')])},[],!1,function(t){var e=r(77);e.__inject__&&e.__inject__(t)},null,"247a7f5b");e.default=component.exports}};
//# sourceMappingURL=9ce85aafbd51b78eb654.js.map