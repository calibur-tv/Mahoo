(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(e,t,n){"use strict";var r=n(2),o=n(60);t.a={beforeMount(){var e=this;return Object(r.a)((function*(){if(e.$store.state.logging)var t=e.$watch("$store.state.logging",()=>{e.$store.state.isAuth?(e.$channel.$fire("user-signed"),t()):(e.$cookie.remove("JWT-TOKEN"),e.$channel.$fire("user-not-sign"))});else{var n=Object(o.a)();e.$store.commit("SET_USER_TOKEN",n),(yield e.$store.dispatch("initAuth"))?(e.$channel.$fire("user-signed"),e.$store.dispatch("getUserRoles")):(e.$cookie.remove("JWT-TOKEN"),e.$channel.$fire("user-not-sign"))}}))()}}},678:function(e,t,n){"use strict";n.r(t);var r={name:"AppLayout",mixins:[n(365).a],head:{titleTemplate:e=>e}},o=n(11),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("nuxt")}),[],!1,null,null,null);t.default=component.exports}}]);