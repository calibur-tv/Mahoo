(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{303:function(t,e,n){t.exports=n.p+"img/9fd1565.png"},374:function(t,e,n){},470:function(t,e,n){"use strict";var c={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:()=>({loading:!1}),computed:{isMine(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign(){this.$store.state.isAuth?this.isMine?this.loading||(this.value.daily_signed?this.$toast.info("今天已签过到"):(this.loading=!0,this.$axios.$post("v1/user/daily_sign").then(data=>{this.value.daily_signed=!0,this.$toast.success(data.message),this.loading=!1;try{this.value.sign.continuous_sign_count=data.continuous_sign_count,this.value.sign.latest_signed_at=data.sign_at,this.value.sign.total_sign_count++,this.$store.commit("UPDATE_USER_INFO",{key:"wallet_coin",value:this.$store.state.user.wallet_coin+1})}catch(t){}}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))):this.$toast.info("不能替别人签到"):this.$channel.$emit("sign-in")}}},l=n(9),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("ElButton",{staticClass:"daily-sign-btn",attrs:{loading:this.loading},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.daily_signed?"已签到":"未签到")+"\n")])}),[],!1,null,null,null);e.a=component.exports},504:function(t,e,n){t.exports=n.p+"img/00ba3d9.png"},505:function(t,e,n){t.exports=n.p+"img/0a11aff.png"},506:function(t,e,n){t.exports=n.p+"img/c5e8c0a.png"},507:function(t,e,n){t.exports=n.p+"img/be03a89.png"},508:function(t,e,n){t.exports=n.p+"img/7a42efa.png"},509:function(t,e,n){t.exports=n.p+"img/7bef62a.png"},510:function(t,e,n){t.exports=n.p+"img/518c6b4.png"},511:function(t,e,n){"use strict";var c=n(374);n.n(c).a},645:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(504)}}),this._v(" "),e("div",{staticClass:"tail"},[e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("我的主页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(505)}}),this._v(" "),e("div",{staticClass:"tail"},[e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("交易记录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(506)}}),this._v(" "),e("div",{staticClass:"tail"},[e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("我的收藏")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(507)}}),this._v(" "),e("div",{staticClass:"tail"},[e("span",[this._v("邀请送团子")]),this._v(" "),e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("我的邀请码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(508)}}),this._v(" "),e("div",{staticClass:"tail"},[e("span",[this._v("玩转C站")]),this._v(" "),e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("帮助")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(509)}}),this._v(" "),e("div",{staticClass:"tail"},[e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("意见反馈")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(510)}}),this._v(" "),e("div",{staticClass:"tail"},[e("img",{attrs:{src:n(303)}})]),this._v(" "),e("p",{staticClass:"text oneline"},[this._v("设置")])])}],l=(n(118),n(13),n(40),n(46)),r=n(17);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={name:"AppHome",layout:"app",components:{DailySignBtn:n(470).a},data:()=>({patch:{}}),computed:{self(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.$store.state.user,{},this.patch)}},mounted(){this.$store.state.isAuth?this.patchUser():this.$channel.$when("user-signed",()=>{this.patchUser()})},methods:{handleLogout(){Object(r.f)(this),this.$cookie.remove("JWT-TOKEN"),this.$channel.socketDisconnect(),this.$store.commit("USER_LOGOUT"),this.$router.replace("/app/sign")},patchUser(){this.$axios.$get("v1/user/patch",{params:{slug:this.self.slug}}).then(data=>{this.patch=data}).catch(()=>{})}}},v=(n(511),n(9)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"app-home"}},[c("div",{staticClass:"panel"},[c("header",[c("img",{staticClass:"avatar",attrs:{src:t.$resize(t.self.avatar,{width:130})}}),t._v(" "),c("img",{staticClass:"link",attrs:{src:n(303)}}),t._v(" "),c("div",{staticClass:"content"},[c("div",{staticClass:"nickname-wrap"},[c("div",{staticClass:"nickname"},[c("p",{staticClass:"oneline",domProps:{textContent:t._s(t.self.nickname)}})]),t._v(" "),c("div",{staticClass:"badge level"},[t._v("LV"+t._s(t.self.level))])]),t._v(" "),c("p",{staticClass:"intro"},[t._v("cc号："+t._s(t.self.slug))])])]),t._v(" "),c("main",[c("DailySignBtn",{model:{value:t.self,callback:function(e){t.self=e},expression:"self"}}),t._v(" "),c("div",{staticClass:"meta"},[c("div",{staticClass:"item"},[c("p",{staticClass:"oneline",domProps:{textContent:t._s(t.$utils.shortenNumber(t.self.stat_activity+t.self.stat_exposure))}}),t._v(" "),c("span",[t._v("战斗力")])]),t._v(" "),c("div",{staticClass:"item"},[c("p",{staticClass:"oneline",domProps:{textContent:t._s(t.$utils.shortenNumber(t.self.wallet_coin))}}),t._v(" "),c("span",[t._v("团子")])]),t._v(" "),c("div",{staticClass:"item"},[c("p",{staticClass:"oneline",domProps:{textContent:t._s(t.$utils.shortenNumber(t.self.wallet_money))}}),t._v(" "),c("span",[t._v("光玉")])])])],1)]),t._v(" "),c("div",{staticClass:"shim"}),t._v(" "),c("div",{staticClass:"hr"}),t._v(" "),c("div",{staticClass:"main-menu"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),c("div",{staticClass:"logout-btn"},[c("button",{on:{click:t.handleLogout}},[t._v("退出登录")])])])])}),c,!1,null,null,null);e.default=component.exports}}]);