(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{394:function(t,e,n){t.exports=JSON.parse('{"game":"game_3Zz4J","name":"name_3l0-N","skeleton-loading":"skeleton-loading_3URmW","skeletonLoading":"skeleton-loading_3URmW","skeleton":"skeleton_1pKMc"}')},501:function(t,e,n){"use strict";var r=n(394),c=n.n(r);e.default=c.a},520:function(t,e,n){},543:function(t,e,n){"use strict";var r={name:"GameItem",props:{item:{type:Object,required:!0}}},c=n(501),l=n(19);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.game},[n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"150",height:"150",alt:t.item.name}}),t._v(" "),n("p",{staticClass:"oneline fade-link",class:t.$style.name,domProps:{innerHTML:t._s(t.item.name)}})],1)],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.a=component.exports},657:function(t,e,n){"use strict";var r=n(520);n.n(r).a},732:function(t,e,n){"use strict";n.r(e);n(161),n(34),n(46),n(20);var r=n(543),c=n(162),l={name:"UserGame",components:{GameItem:r.a},asyncData:function(t){var e=t.app,n=t.error,r=t.params;return Object(c.a)(e,r).then((function(t){return{list:t.game}})).catch(n)},data:function(){return{list:[]}},beforeMount:function(){this.batchPatch()},methods:{batchPatch:function(){var t=this;this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map((function(t){return t.slug})).join(",")}}).then((function(data){t.list.forEach((function(e,n){Object.keys(data).forEach((function(r){e.slug===r&&(t.$set(t.list,n,Object.assign(e,data[r])),t.$refs.list[n].$forceUpdate())}))}))})).catch((function(){}))}}},o=(n(657),n(19)),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-game"}},[e("ul",this._l(this.list,(function(t){return e("GameItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);