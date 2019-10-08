exports.ids=[42],exports.modules={103:function(t,e,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=n(1);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix oneline"},[t.disabled?t._ssrNode('<div class="user-nickname">',"</div>",[t._ssrNode('<div class="nickname"><p class="oneline">'+t._s(t.nickname||t.user.nickname)+"</p></div> "+(t.sex?"<span"+t._ssrClass(null,t.$style.title)+"><i"+t._ssrClass("iconfont",[t.$style["ic-sex"],"ic-"+t.sexClass.name])+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(t.level?"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-level"]])+">"+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+t._ssrList(t.user.title,(function(e,n){return"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-title"]])+">"+t._ssrEscape(t._s(e))+"</span>"})))],2):n("NLink",{staticClass:"user-nickname active",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,(function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})}))],2)],1)}),[],!1,(function(t){var e=n(104);e.__inject__&&e.__inject__(t);var r=n(105);r.__inject__&&r.__inject__(t),this.$style=r.locals||r}),null,"5b0047c6");e.a=component.exports},104:function(t,e,n){"use strict";n.r(e);var r=n(89),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},105:function(t,e,n){"use strict";n.r(e);var r=n(90),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},114:function(t,e){},117:function(t,e,n){"use strict";var r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},async submit(){const data=await this.$store.dispatch("social/toggle",{type:"user-follow",slug:this.slug,action:"is_following",params:{target_slug:this.slug,target_type:"user",method_type:"follow"}});data.success&&this.$emit("change",data.result)}}},l=n(1),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()}),[],!1,null,null,"e3dd3b1a");e.a=component.exports},145:function(t,e,n){"use strict";var r={name:"SendMailBtn",props:{slug:{type:String,required:!0},nickname:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(!this.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己发消息");const t=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(e=>{t.location=this.$alias.user(this.$store.state.user.slug,`message?mailto=${e}&name=${this.nickname}`)}).catch(e=>{this.$toast.error(e.message),t.close()})}}},l=n(1);var component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])}),[],!1,(function(t){}),null,"383c15d0");e.a=component.exports},154:function(t,e,n){"use strict";n.r(e);var r=n(114),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},160:function(t,e,n){"use strict";var r=n(93),l=n(103),o=n(117),c=n(145),d={name:"UserRelationItem",components:{UserAvatar:r.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},_=n(1);var component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"user-rel-item clearfix"},[t._ssrNode('<div class="avatar">',"</div>",[n("UserAvatar",{attrs:{user:t.user,size:60}})],1),t._ssrNode(" "),t._ssrNode('<div class="intro">',"</div>",[n("UserNickname",{attrs:{user:t.user}}),t._ssrNode(' <p class="oneline intro">'+t._ssrEscape(t._s(t.user.signature))+"</p>")],2),t._ssrNode(" "),t._ssrNode('<div class="control">',"</div>",[n("UserFollowBtn",{attrs:{slug:t.user.slug}}),t._ssrNode(" "),n("SendMailBtn",{attrs:{slug:t.user.slug,nickname:t.user.nickname}})],2)],2)}),[],!1,(function(t){var e=n(154);e.__inject__&&e.__inject__(t)}),null,"886cda44");e.a=component.exports},409:function(t,e,n){"use strict";n.r(e);var r=n(57),l=n.n(r),o={name:"UserSocialFollowing",components:{UserRelationItem:n(160).a,ElAlert:l.a},props:{slug:{type:String,required:!0}},computed:{query(){return{$axios:this.$axios,slug:this.slug,relation:"following",changing:"slug"}},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{detectUserRelation({data:data}){const{result:t}=data;t.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:t.map(t=>t.slug).join(",")}}).then(data=>{this.$store.commit("social/set",{type:"user-follow",data:data}),this.$refs.loader.patch(data)}).catch(()=>{})}}},c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-social-following"}},[t.isMine?n("ElAlert",{attrs:{title:"如果你并不关注TA，那么就取关吧",type:"success"}}):t._e(),t._ssrNode(" "),n("FlowLoader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:t.query,callback:t.detectUserRelation},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("ul",{},t._l(r,(function(t){return n("UserRelationItem",{key:t.slug,attrs:{user:t}})})),1)}}])})],2)}),[],!1,null,null,"d1dab5f8");e.default=component.exports},87:function(t,e){},89:function(t,e){},90:function(t,e){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},93:function(t,e,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=n(1);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)}),[],!1,(function(t){var e=n(94);e.__inject__&&e.__inject__(t)}),null,"8c0ebd70");e.a=component.exports},94:function(t,e,n){"use strict";n.r(e);var r=n(87),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a}};