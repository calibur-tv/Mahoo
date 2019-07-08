(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{267:function(t,e,v){},281:function(t,e,v){"use strict";var _=v(267);v.n(_).a},284:function(t,e,v){"use strict";function _(t,e){const v=e?"scrollTop":"scrollLeft";let _=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof _&&(_=window.document.documentElement[v]),_}var o={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,v=_(window,!0),o=function(element){const rect=element.getBoundingClientRect(),t=_(window,!0),e=_(window),v=window.document.body,o=v.clientTop||0,n=v.clientLeft||0;return{top:rect.top+t-o,left:rect.left+e-n}}(this.$el),n=window.innerHeight,l=this.$el.getElementsByTagName("div")[0].offsetHeight,c=!e||"resize"===t.type;o.top-this.top<v&&"top"===this.offsetType&&c?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:"".concat(this.top,"px"),left:"".concat(o.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):o.top-this.top>v&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),o.top+this.bottom+l>v+n&&"bottom"===this.offsetType&&c?(this.affix=!0,this.styles={bottom:"".concat(this.bottom,"px"),left:"".concat(o.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):o.top+this.bottom+l<v+n&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},n=(v(281),v(11)),component=Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"point",class:this.classes,style:this.styles},[this._t("default")],2),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.slot,expression:"slot"}],style:this.slotStyle})])},[],!1,null,null,null);e.a=component.exports},290:function(t,e,v){"use strict";e.a={layout:"web",head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},data:()=>({tag:null,parent:null,children:[]}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},318:function(t,e,v){},394:function(t,e,v){"use strict";var _=v(318);v.n(_).a},474:function(t,e,v){"use strict";v.r(e);var _=v(7),o=v(290),n=v(106),l={name:"ZoneGame",components:{Affix:v(284).a},mixins:[o.a],data:()=>({slug:"285"}),asyncData(t){let{app:e,error:v}=t;return Object(n.e)(e,{slug:"285"}).then(data=>Object(_.a)({},data)).catch(v)},created(){},mounted(){},methods:{}},c=(v(394),v(11)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{attrs:{id:"zone-game"}},[v("ElRow",{staticClass:"container"},[v("ElCol",{staticClass:"left-aside",attrs:{span:5}},[v("Affix",{attrs:{top:50}},[t.children.length?v("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return v("li",{key:e.slug,staticClass:"node"},[v("NLink",{attrs:{to:"/tag/"+e.slug}},[v("VImg",{attrs:{src:e.avatar,width:"32",height:"32",alt:e.name}}),t._v(" "),v("span",{domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),v("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[v("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n      "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")]),t._v(" "),v("p",[t._v("123")])]),t._v(" "),v("ElCol",{attrs:{span:5}},[v("Affix",{attrs:{top:50}},[v("div",[t._v("\n          当前标签活跃用户\n        ")])])],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);