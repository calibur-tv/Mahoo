(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{691:function(e,t,n){"use strict";n.r(t);var r=n(331),o=n.n(r),l={name:"UserSocialFollowing",components:{UserRelationItem:n(519).a,ElAlert:o.a},props:{slug:{type:String,required:!0}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,relation:"following",changing:"slug"}},isMine:function(){return this.$store.getters.isMine(this.slug)}},methods:{detectUserRelation:function(e){var t=this,n=e.data.result;n.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:n.map((function(e){return e.slug})).join(",")}}).then((function(data){t.$store.commit("social/set",{type:"user-follow",data:data}),t.$refs.loader.patch(data)})).catch((function(){}))}}},c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-social-following"}},[e.isMine?n("ElAlert",{attrs:{title:"如果你并不关注TA，那么就取关吧",type:"success"}}):e._e(),e._v(" "),n("FlowLoader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:e.query,callback:e.detectUserRelation},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("ul",{},e._l(r,(function(e){return n("UserRelationItem",{key:e.slug,attrs:{user:e}})})),1)}}])})],1)}),[],!1,null,null,null);t.default=component.exports}}]);