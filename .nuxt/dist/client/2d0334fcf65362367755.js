(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{256:function(t,e,n){},257:function(t,e,n){},258:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},259:function(t,e,n){},260:function(t,e,n){"use strict";var l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(262),n(18)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},262:function(t,e,n){"use strict";var l=n(256);n.n(l).a},263:function(t,e,n){"use strict";var l=n(257);n.n(l).a},264:function(t,e,n){"use strict";var l=n(258),r=n.n(l);e.default=r.a},265:function(t,e,n){"use strict";var l={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(n(263),n(264)),o=n(18);var component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=r.default.locals||r.default},null,null);e.a=component.exports},269:function(t,e,n){"use strict";var l={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:t=>~["unknown","self","friend","follower","following","stranger"].indexOf(t)}},data(){return{loading:!1,action:this.value}},computed:{btnText(){switch(this.action){case"unknown":return"关注";case"self":return"自己";case"friend":return"互相关注";case"follower":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value(t){this.action=t}},mounted(){this.$channel.$on("user-follow-".concat(this.slug),t=>{this.action=t})},methods:{handleFollowClick(){this.$store.state.isAuth?"unknown"===this.action||this.loading||("self"!==this.action?"follower"!==this.action&&"stranger"!==this.action?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit():this.$toast.info("不能关注自己")):this.$channel.$emit("sign-in")},submit(){this.loading=!0,this.$axios.$post("v1/user/toggle_follow",{slug:this.slug}).then(t=>{this.$channel.$emit("user-follow-".concat(this.slug),t),this.$emit("change",{relation:t,change:"friend"===t||"following"===t?1:-1}),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1})}}},r=n(18),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading,round:"",type:"primary",plain:"stranger"!==this.action},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,null);e.a=component.exports},270:function(t,e,n){"use strict";var l={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(!this.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己发消息");const t=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(e=>{t.location=this.$alias.user(this.$store.state.user.slug,"message?mailto=".concat(e))}).catch(e=>{this.$toast.error(e.message),t.close()})}}},r=n(18),component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";var l=n(259);n.n(l).a},272:function(t,e,n){"use strict";var l=n(260),r=n(265),o=n(269),c=n(270),d={name:"UserRelationItem",components:{UserAvatar:l.a,UserNickname:r.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},h=(n(271),n(18)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"user-rel-item clearfix"},[n("div",{staticClass:"avatar"},[n("user-avatar",{attrs:{user:t.user,size:60}})],1),t._v(" "),n("div",{staticClass:"intro"},[n("user-nickname",{attrs:{user:t.user}}),t._v(" "),n("p",{staticClass:"oneline intro",domProps:{textContent:t._s(t.user.signature)}})],1),t._v(" "),n("div",{staticClass:"control"},[n("user-follow-btn",{attrs:{slug:t.user.slug},model:{value:t.user.relation,callback:function(e){t.$set(t.user,"relation",e)},expression:"user.relation"}}),t._v(" "),n("send-mail-btn",{attrs:{slug:t.user.slug}})],1)])},[],!1,null,null,null);e.a=component.exports},407:function(t,e,n){"use strict";n.r(e);n(105);var l={name:"UserSocialFriends",components:{UserRelationItem:n(272).a},props:{slug:{type:String,required:!0}},computed:{query(){return{$axios:this.$axios,slug:this.slug,relation:"friend",changing:"slug"}}},methods:{detectUserRelation(t){let{data:data}=t;const{result:e}=data;e.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:e.map(t=>t.slug).join(",")}}).then(data=>{const t=[];Object.keys(data).forEach(e=>{t.push({slug:e,relation:data[e]})}),this.$refs.loader.patch(t)}).catch(()=>{})}}},r=n(18),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-social-friends"}},[n("flow-loader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:t.query,callback:t.detectUserRelation},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.flow;return n("ul",{},t._l(l,function(t){return n("user-relation-item",{key:t.slug,attrs:{user:t}})}),1)}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);