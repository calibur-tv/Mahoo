(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{264:function(t,e,o){"use strict";o.d(e,"e",function(){return n}),o.d(e,"b",function(){return l}),o.d(e,"f",function(){return r}),o.d(e,"d",function(){return c}),o.d(e,"c",function(){return h}),o.d(e,"a",function(){return f});const n=(t,e)=>{let{slug:o}=e;return t.$axios.$get("v1/tag/show",{params:{slug:o}})},l=(t,e)=>{let{name:o,parent_slug:n}=e;return t.$axios.$post("v1/tag/create",{name:o,parent_slug:n})},r=(t,e)=>{let{name:o,slug:n,avatar:l,alias:r,intro:c}=e;return t.$axios.$post("v1/tag/update",{name:o,slug:n,avatar:l,alias:r,intro:c})},c=(t,e)=>{let{slug:o,target_slug:n}=e;return t.$axios.$post("v1/tag/relink",{slug:o,target_slug:n})},h=(t,e)=>{let{slug:o}=e;return t.$axios.$post("v1/tag/delete",{slug:o})},f=(t,e)=>{let{slug:o}=e;return t.$axios.$get("v1/tag/bookmarks",{params:{slug:o}})}},270:function(t,e,o){"use strict";var n=o(2),l=o(39);e.a={beforeMount(){var t=this;return Object(n.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.userSigned&&t.userSigned(),e()):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})})}else{const e=Object(l.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.userSigned&&t.userSigned():t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})}})()}}},271:function(t,e,o){},280:function(t,e,o){"use strict";var n=o(271);o.n(n).a},281:function(t,e,o){},329:function(t,e,o){"use strict";function n(t,e){const o=e?"scrollTop":"scrollLeft";let n=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof n&&(n=window.document.documentElement[o]),n}var l={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){this.$utils.on(window,"scroll",this.handleScroll),this.$utils.on(window,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll()})},beforeDestroy(){this.$utils.off(window,"scroll",this.handleScroll),this.$utils.off(window,"resize",this.handleScroll)},methods:{handleScroll(){const t=this.affix,e=n(window,!0),o=function(element){const rect=element.getBoundingClientRect(),t=n(window,!0),e=n(window),o=window.document.body,l=o.clientTop||0,r=o.clientLeft||0;return{top:rect.top+t-l,left:rect.left+e-r}}(this.$el),l=window.innerHeight,r=this.$el.getElementsByTagName("div")[0].offsetHeight;o.top-this.top<e&&"top"===this.offsetType&&!t?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:"".concat(this.top,"px"),left:"".concat(o.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):o.top-this.top>e&&"top"===this.offsetType&&t&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),o.top+this.bottom+r>e+l&&"bottom"===this.offsetType&&!t?(this.affix=!0,this.styles={bottom:"".concat(this.bottom,"px"),left:"".concat(o.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):o.top+this.bottom+r<e+l&&"bottom"===this.offsetType&&t&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},r=(o(280),o(11)),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"point",class:this.classes,style:this.styles},[this._t("default")],2),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.slot,expression:"slot"}],style:this.slotStyle})])},[],!1,null,null,null);e.a=component.exports},335:function(t,e,o){"use strict";var n=o(281);o.n(n).a},429:function(t,e,o){"use strict";o.r(e);o(107);var n=o(270),l=o(264),r={name:"CreateLayout",layout:"web",components:{Affix:o(329).a},mixins:[n.a],data:()=>({tags:[{label:"动漫",value:"bangumi",children:[]},{label:"游戏",value:"game",children:[]},{label:"话题",value:"topic",children:[]}]}),computed:{headers:()=>[{route:"/create/daily",name:"图文帖",icon:"tee"},{route:"/create/cosplay",name:"cosplay",icon:"cosplay"},{route:"/create/atfield",name:"A.T.Field",icon:"timu"}]},methods:{userSigned(){this.getUserBookmarkTags()},getUserBookmarkTags(){Object(l.a)(this,{slug:this.$store.state.user.slug}).then(data=>{Object.keys(data).forEach(t=>{this.tags.forEach(e=>{e.value===t&&(e.children=data[t].map(t=>Object.assign(t,{value:t.slug,label:t.name})))})})}).catch(()=>{})}}},c=(o(335),o(11)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"create-layout"}},[o("el-row",{staticClass:"container"},[o("el-col",{attrs:{span:4}},[o("affix",{attrs:{top:27}},[o("v-switcher",{attrs:{headers:t.headers,routable:!0,"header-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return o("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[o("i",{staticClass:"iconfont",class:"ic-"+e.icon}),t._v(" "),o("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1)],1),t._v(" "),o("el-col",{attrs:{span:15}},[o("nuxt-child",{staticClass:"main-section",attrs:{tags:t.tags}})],1),t._v(" "),o("el-col",{attrs:{span:5}},[t._v("\n       \n    ")])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);