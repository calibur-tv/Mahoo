(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{393:function(t,n,e){t.exports=JSON.parse('{"bangumi":"bangumi_27LZB","avatar":"avatar_1pux0","content":"content_3LQoH","name":"name_1kYyu","desc":"desc_ygyPf","skeleton-loading":"skeleton-loading_1aI5z","skeletonLoading":"skeleton-loading_1aI5z","skeleton":"skeleton_gzCKp"}')},500:function(t,n,e){"use strict";var r=e(393),c=e.n(r);n.default=c.a},519:function(t,n,e){},542:function(t,n,e){"use strict";var r={name:"BangumiItem",props:{item:{type:Object,required:!0}}},c=e(500),l=e(19);var component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{class:t.$style.bangumi},[e("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[e("VImg",{attrs:{src:t.item.avatar,width:"110",height:"144",alt:t.item.name}})],1),t._v(" "),e("div",{class:t.$style.content},[e("div",{staticClass:"oneline"},[e("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._v(" "),e("p",{class:t.$style.desc,domProps:{textContent:t._s(t.item.intro)}})])],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);n.a=component.exports},656:function(t,n,e){"use strict";var r=e(519);e.n(r).a},731:function(t,n,e){"use strict";e.r(n);e(161),e(34),e(46),e(20);var r=e(542),c=e(162),l={name:"UserBangumi",components:{BangumiItem:r.a},asyncData:function(t){var n=t.app,e=t.error,r=t.params;return Object(c.a)(n,r).then((function(t){return{list:t.bangumi}})).catch(e)},data:function(){return{list:[]}},beforeMount:function(){this.batchPatch()},methods:{batchPatch:function(){var t=this;this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map((function(t){return t.slug})).join(",")}}).then((function(data){t.list.forEach((function(n,e){Object.keys(data).forEach((function(r){n.slug===r&&(t.$set(t.list,e,Object.assign(n,data[r])),t.$refs.list[e].$forceUpdate())}))}))})).catch((function(){}))}}},o=(e(656),e(19)),component=Object(o.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"user-bangumi"}},[n("ul",this._l(this.list,(function(t){return n("BangumiItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,null,null,null);n.default=component.exports}}]);