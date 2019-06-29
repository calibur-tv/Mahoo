(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{322:function(t,n,e){"use strict";var o={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:function(t){return~["unknown","self","friend","follower","following","stranger"].indexOf(t)}}},data:function(){return{loading:!1,action:this.value}},computed:{btnText:function(){switch(this.action){case"unknown":return"关注";case"self":return"自己";case"friend":return"互相关注";case"follower":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value:function(t){this.action=t}},mounted:function(){var t=this;this.$channel.$on("user-follow-".concat(this.slug),function(n){t.action=n})},methods:{handleFollowClick:function(){var t=this;this.$store.state.isAuth?"unknown"===this.action||this.loading||("self"!==this.action?"follower"!==this.action&&"stranger"!==this.action?this.$confirm("确定要取消关注吗？","提示").then(function(){return t.submit()}).catch(function(){}):this.submit():this.$toast.info("不能关注自己")):this.$channel.$emit("sign-in")},submit:function(){var t=this;this.loading=!0,this.$axios.$post("v1/user/toggle_follow",{slug:this.slug}).then(function(n){t.$channel.$emit("user-follow-".concat(t.slug),n),t.$emit("change",{relation:n,change:"friend"===n||"following"===n?1:-1}),t.loading=!1}).catch(function(n){t.$toast.error(n.message),t.loading=!1})}}},r=e(15),component=Object(r.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading,round:"",type:"primary",plain:"stranger"!==this.action},on:{click:this.handleFollowClick}},[n("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,null);n.a=component.exports},360:function(t,n,e){var o=e(7),r=e(10),l=e(24),c=/"/g,f=function(t,n,e,o){var r=String(l(t)),f="<"+n;return""!==e&&(f+=" "+e+'="'+String(o).replace(c,"&quot;")+'"'),f+">"+r+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(f),o(o.P+o.F*r(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},361:function(t,n,e){},362:function(t,n,e){},390:function(t,n,e){"use strict";e(360)("link",function(t){return function(n){return t(this,"a","href",n)}})},427:function(t,n,e){"use strict";var o=e(361);e.n(o).a},428:function(t,n,e){"use strict";var o=e(362);e.n(o).a},480:function(t,n,e){"use strict";e.r(n);var o=e(17),r=e(394),l=(e(193),e(317)),c=e(318),f=e(322),h={name:"ContentAuthor",components:{UserAvatar:l.a,UserNickname:c.a,UserFollowBtn:f.a},props:{user:{type:Object,required:!0},size:{type:Number,default:40},relation:{type:String,default:"unknown"}},computed:{isMine:function(){return this.$store.getters.isMine(this.user.slug)}}},d=(e(427),e(15)),v=Object(d.a)(h,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-author clearfix"},[e("div",{staticClass:"avatar-area"},[e("user-avatar",{attrs:{user:t.user,size:t.size}})],1),t._v(" "),e("div",{staticClass:"content-area"},[e("user-nickname",{attrs:{user:t.user}}),t._v(" "),e("div",{staticClass:"content-meta oneline"},[t._t("intro")],2)],1),t._v(" "),e("div",{staticClass:"tail-area"},[t.isMine?t._t("mine"):e("user-follow-btn",{attrs:{slug:t.user.slug},model:{value:t.relation,callback:function(n){t.relation=n},expression:"relation"}})],2)])},[],!1,null,null,null).exports,m={name:"PinShow",layout:"web",components:{JsonContent:r.a,ContentAuthor:v},data:function(){return{slug:"",title:null,author:null,content:[],area:null,notebook:null,visit_type:0,trial_type:0,content_type:0,comment_type:0,last_top_at:0,recommended_at:0,created_at:"",updated_at:"",deleted_at:null}},computed:{},watch:{},asyncData:function(t){var n=t.app,e=t.error,r=t.params;return n.$axios.$get("v1/pin/show_info",{params:r}).then(function(data){return Object(o.a)({},data)}).catch(e)},created:function(){},mounted:function(){},methods:{}},_=(e(428),Object(d.a)(m,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"pin-show"}},[t.title&&t.title.banner&&t.title.banner.width>=1400?e("div",{staticClass:"banner full-size",style:{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:2e3})+")"}}):t._e(),t._v(" "),e("div",{staticClass:"content"},[t.title?[t.title.banner&&t.title.banner.width<1400?e("img",{staticClass:"banner",attrs:{src:t.$resize(t.title.banner.url,{width:660}),alt:t.title.text}}):t._e(),t._v(" "),e("h1",{staticClass:"title",domProps:{textContent:t._s(t.title.text)}})]:t._e(),t._v(" "),e("content-author",{attrs:{user:t.author},scopedSlots:t._u([{key:"intro",fn:function(){return[e("span",[e("nuxt-link",{attrs:{target:"_blank",to:t.$alias.tag(t.area.slug)},domProps:{textContent:t._s(t.area.name)}})],1),t._v(" "),e("span",{domProps:{textContent:t._s(t.$utils.timeFormat(t.created_at,"MM-DD"))}})]},proxy:!0},{key:"mine",fn:function(){return[e("nuxt-link",{attrs:{target:"_blank",to:t.$alias.create(t.slug)}},[e("el-button",{attrs:{round:"",type:"info"}},[t._v("\n            编辑\n          ")])],1)]},proxy:!0}])}),t._v(" "),e("json-content",{attrs:{content:t.content}}),t._v(" "),e("div",{staticClass:"footer"},[e("div",{staticClass:"notebook"},[e("p",[t._v("文章被以下专栏收录")]),t._v(" "),e("nuxt-link",{attrs:{target:"_blank",to:t.$alias.tag(t.notebook.slug)}},[e("v-img",{attrs:{src:t.notebook.avatar,width:"32",height:"32"}}),t._v(" "),e("span",{staticClass:"name",domProps:{textContent:t._s(t.notebook.name)}})],1)],1)])],2)])},[],!1,null,null,null));n.default=_.exports}}]);