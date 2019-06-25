exports.ids=[6],exports.modules={101:function(t,e,o){"use strict";o.r(e);var n=o(86),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},102:function(t,e){},148:function(t,e,o){"use strict";function n(t,e){const o=e?"scrollTop":"scrollLeft";let n=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof n&&(n=window.document.documentElement[o]),n}var l={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){this.$utils.on(window,"scroll",this.handleScroll),this.$utils.on(window,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll()})},beforeDestroy(){this.$utils.off(window,"scroll",this.handleScroll),this.$utils.off(window,"resize",this.handleScroll)},methods:{handleScroll(){const t=this.affix,e=n(window,!0),o=function(element){const rect=element.getBoundingClientRect(),t=n(window,!0),e=n(window),o=window.document.body,l=o.clientTop||0,r=o.clientLeft||0;return{top:rect.top+t-l,left:rect.left+e-r}}(this.$el),l=window.innerHeight,r=this.$el.getElementsByTagName("div")[0].offsetHeight;o.top-this.top<e&&"top"===this.offsetType&&!t?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${o.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):o.top-this.top>e&&"top"===this.offsetType&&t&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),o.top+this.bottom+r>e+l&&"bottom"===this.offsetType&&!t?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${o.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):o.top+this.bottom+r<e+l&&"bottom"===this.offsetType&&t&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},r=o(2);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=o(101);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},150:function(t,e,o){"use strict";o.r(e);var n=o(102),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},195:function(t,e,o){"use strict";o.r(e);var n=o(85),l={name:"CreateLayout",layout:"web",components:{Affix:o(148).a},mixins:[n.a],computed:{headers:()=>[{route:"/create/daily",name:"图文帖",icon:"ic-tee"},{route:"/create/cosplay",name:"cosplay",icon:"ic-cosplay"},{route:"/create/atfield",name:"A.T.Field",icon:"ic-timu"},{route:"/create/story",name:"专栏",icon:"el-icon-document"}]}},r=o(2);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"create-layout"}},[o("el-row",{staticClass:"container"},[o("el-col",{attrs:{span:4}},[o("affix",{attrs:{top:27}},[o("v-switcher",{attrs:{headers:t.headers,routable:!0,"header-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return o("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[o("i",{staticClass:"iconfont",class:e.icon}),t._v(" "),o("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1)],1),t._v(" "),o("el-col",{attrs:{span:15}},[o("nuxt-child",{staticClass:"main-section"})],1),t._v(" "),o("el-col",{attrs:{span:5}},[t._v("\n       \n    ")])],1)],1)},[],!1,function(t){var e=o(150);e.__inject__&&e.__inject__(t)},null,"69f51b7a");e.default=component.exports},85:function(t,e,o){"use strict";var n=o(23);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?(this.$channel.$emit("user-signed"),t()):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}else{const t=Object(n.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")?this.$channel.$emit("user-signed"):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})}}}},86:function(t,e){}};
//# sourceMappingURL=8668586bfba348c86d13.js.map