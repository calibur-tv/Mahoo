exports.ids=[4],exports.modules={101:function(t,e,r){"use strict";r.r(e);var n={name:"AuthRedirect",data:()=>({timer:5}),computed:{message(){return this.$route.query.message},redirect(){return this.$route.query.redirect}},mounted(){this.$cookie.set("JWT-TOKEN",this.$route.query.token,{expires:365}),setInterval(()=>{1===this.timer?window.location=this.redirect?decodeURIComponent(this.redirect):"https://www.calibur.tv":this.timer--},1e3)}},c=r(1);var component=Object(c.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth-redirect"}},[this._ssrNode("<p>"+this._ssrEscape(this._s(this.message)+",（"+this._s(this.timer)+"s后自动跳转）")+'</p> <a href="/">点击返回首页</a>')])},[],!1,function(t){var e=r(74);e.__inject__&&e.__inject__(t)},null,"4533b1ca");e.default=component.exports},55:function(t,e){},74:function(t,e,r){"use strict";r.r(e);var n=r(55),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e.default=c.a}};
//# sourceMappingURL=49ee52651ee0d108b180.js.map