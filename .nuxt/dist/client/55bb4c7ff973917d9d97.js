(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{320:function(t,e,n){t.exports={bangumi:"bangumi_27LZB",avatar:"avatar_1pux0",content:"content_3LQoH",name:"name_1kYyu",desc:"desc_ygyPf","skeleton-loading":"skeleton-loading_1aI5z",skeletonLoading:"skeleton-loading_1aI5z",skeleton:"skeleton_gzCKp"}},405:function(t,e,n){"use strict";var l=n(320),r=n.n(l);e.default=r.a},425:function(t,e,n){},452:function(t,e,n){"use strict";var l={name:"BangumiItem",props:{item:{type:Object,required:!0}}},r=n(405),c=n(9);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.bangumi},[n("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"110",height:"144",alt:t.item.name}})],1),t._v(" "),n("div",{class:t.$style.content},[n("div",{staticClass:"oneline"},[n("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._v(" "),n("p",{class:t.$style.desc,domProps:{textContent:t._s(t.item.intro)}})])],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},555:function(t,e,n){"use strict";var l=n(425);n.n(l).a},595:function(t,e,n){"use strict";n.r(e);n(13);var l=n(452),r=n(114),c={name:"UserBangumi",components:{BangumiItem:l.a},asyncData(t){var{app:e,error:n,params:l}=t;return Object(r.a)(e,l).then(t=>({list:t.bangumi})).catch(n)},data:()=>({list:[]}),beforeMount(){this.batchPatch()},methods:{batchPatch(){this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map(t=>t.slug).join(",")}}).then(data=>{this.list.forEach((t,e)=>{Object.keys(data).forEach(n=>{t.slug===n&&(this.$set(this.list,e,Object.assign(t,data[n])),this.$refs.list[e].$forceUpdate())})})}).catch(()=>{})}}},o=(n(555),n(9)),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-bangumi"}},[e("ul",this._l(this.list,(function(t){return e("BangumiItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);