(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{374:function(e,t,n){"use strict";n(19);var r,o=n(2),c=n(72);t.a={beforeMount:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$store.state.logging){e.next=4;break}t=this.$watch("$store.state.logging",(function(){r.$store.state.isAuth?(r.$channel.$fire("user-signed"),t()):(r.$cookie.remove("JWT-TOKEN"),r.$channel.$fire("user-not-sign"))})),e.next=10;break;case 4:return n=Object(c.a)(),this.$store.commit("SET_USER_TOKEN",n),e.next=8,this.$store.dispatch("initAuth");case 8:e.sent?(this.$channel.$fire("user-signed"),this.$store.dispatch("getUserRoles")):(this.$cookie.remove("JWT-TOKEN"),this.$channel.$fire("user-not-sign"));case 10:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})}},661:function(e,t,n){"use strict";n.r(t);var r={name:"AppLayout",mixins:[n(374).a],head:{titleTemplate:function(e){return e}}},o=n(16),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("nuxt")}),[],!1,null,null,null);t.default=component.exports}}]);