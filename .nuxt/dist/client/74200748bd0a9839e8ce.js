(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{395:function(t,e,n){t.exports=JSON.parse('{"topic":"topic_-gkYU","name":"name_3XaYR","skeleton-loading":"skeleton-loading_23JMb","skeletonLoading":"skeleton-loading_23JMb","skeleton":"skeleton_RElLn"}')},502:function(t,e,n){"use strict";var c=n(395),o=n.n(c);e.default=o.a},521:function(t,e,n){},544:function(t,e,n){"use strict";var c={name:"TopicItem",props:{item:{type:Object,required:!0}}},o=n(502),r=n(19);var component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.topic},[n("NLink",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"40",height:"40",alt:t.item.name}})],1),t._v(" "),n("p",{staticClass:"oneline",class:t.$style.name},[n("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1)],1)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.a=component.exports},658:function(t,e,n){"use strict";var c=n(521);n.n(c).a},734:function(t,e,n){"use strict";n.r(e);n(161),n(34),n(46),n(20);var c=n(544),o=n(162),r={name:"UserBangumi",components:{TopicItem:c.a},asyncData:function(t){var e=t.app,n=t.error,c=t.params;return Object(o.a)(e,c).then((function(t){return{list:t.topic}})).catch(n)},data:function(){return{list:[]}},beforeMount:function(){this.batchPatch()},methods:{batchPatch:function(){var t=this;this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map((function(t){return t.slug})).join(",")}}).then((function(data){t.list.forEach((function(e,n){Object.keys(data).forEach((function(c){e.slug===c&&(t.$set(t.list,n,Object.assign(e,data[c])),t.$refs.list[n].$forceUpdate())}))}))})).catch((function(){}))}}},l=(n(658),n(19)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-topic"}},[e("ul",this._l(this.list,(function(t){return e("TopicItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);