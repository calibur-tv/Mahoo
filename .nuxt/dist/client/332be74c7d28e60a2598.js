(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{267:function(t,v,e){},281:function(t,v,e){"use strict";var _=e(267);e.n(_).a},284:function(t,v,e){"use strict";function _(t,v){const e=v?"scrollTop":"scrollLeft";let _=t[v?"pageYOffset":"pageXOffset"];return"number"!=typeof _&&(_=window.document.documentElement[e]),_}var o={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const v=window.getComputedStyle(t).overflowY;if("scroll"===v||"auto"===v)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const v=this.affix,e=_(window,!0),o=function(element){const rect=element.getBoundingClientRect(),t=_(window,!0),v=_(window),e=window.document.body,o=e.clientTop||0,n=e.clientLeft||0;return{top:rect.top+t-o,left:rect.left+v-n}}(this.$el),n=window.innerHeight,l=this.$el.getElementsByTagName("div")[0].offsetHeight,c=!v||"resize"===t.type;o.top-this.top<e&&"top"===this.offsetType&&c?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:"".concat(this.top,"px"),left:"".concat(o.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):o.top-this.top>e&&"top"===this.offsetType&&v&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),o.top+this.bottom+l>e+n&&"bottom"===this.offsetType&&c?(this.affix=!0,this.styles={bottom:"".concat(this.bottom,"px"),left:"".concat(o.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):o.top+this.bottom+l<e+n&&"bottom"===this.offsetType&&v&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},n=(e(281),e(11)),component=Object(n.a)(o,function(){var t=this.$createElement,v=this._self._c||t;return v("div",[v("div",{ref:"point",class:this.classes,style:this.styles},[this._t("default")],2),this._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:this.slot,expression:"slot"}],style:this.slotStyle})])},[],!1,null,null,null);v.a=component.exports},290:function(t,v,e){"use strict";v.a={layout:"web",head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},data:()=>({tag:null,parent:null,children:[]}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},319:function(t,v,e){},395:function(t,v,e){"use strict";var _=e(319);e.n(_).a},473:function(t,v,e){"use strict";e.r(v);var _=e(7),o=e(290),n=e(106),l={name:"ZoneTopic",components:{Affix:e(284).a},mixins:[o.a],data:()=>({slug:"3p6"}),asyncData(t){let{app:v,error:e}=t;return Object(n.e)(v,{slug:"3p6"}).then(data=>Object(_.a)({},data)).catch(e)},created(){},mounted(){},methods:{}},c=(e(395),e(11)),component=Object(c.a)(l,function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{attrs:{id:"zone-topic"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{staticClass:"left-aside",attrs:{span:5}},[e("Affix",{attrs:{top:50}},[t.children.length?e("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(v){return e("li",{key:v.slug,staticClass:"node"},[e("NLink",{attrs:{to:"/tag/"+v.slug}},[e("VImg",{attrs:{src:v.avatar,width:"32",height:"32",alt:v.name}}),t._v(" "),e("span",{domProps:{textContent:t._s(v.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[e("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n      "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")]),t._v(" "),e("p",[t._v("123")])]),t._v(" "),e("ElCol",{attrs:{span:5}},[e("Affix",{attrs:{top:50}},[e("div",[t._v("\n          当前标签活跃用户\n        ")])])],1)],1)],1)},[],!1,null,null,null);v.default=component.exports}}]);