exports.ids=[6],exports.modules={215:function(t,e){},216:function(t,e){},217:function(t,e){},218:function(t,e){},219:function(t,e){},220:function(t,e){},299:function(t,e,n){"use strict";n.r(e);var r=n(215),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},300:function(t,e,n){"use strict";n.r(e);var r=n(216),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},301:function(t,e,n){"use strict";n.r(e);var r=n(217),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},302:function(t,e,n){"use strict";n.r(e);var r=n(218),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},303:function(t,e,n){"use strict";n.r(e);var r=n(219),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},304:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},312:function(t,e,n){"use strict";n.r(e);var r={name:"PinPoster",props:{item:{type:Object,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},o=n(1);var l={name:"PinGridList",components:{PinPoster:Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"pin-poster"},[n("NLink",{staticClass:"poster",attrs:{target:"_blank",to:t.$alias.pin(t.item.slug)}},[t.item.media&&t.item.media.banner?n("VImg",{attrs:{src:t.item.media.banner.url,width:"160",height:"100"}}):t._e(),t._v(" "),n("div",{staticClass:"mask"},[n("div",[n("i",{staticClass:"iconfont ic-good_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.like_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-mark_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.mark_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-reward_fill"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.reward_count)}})])])],1),t._ssrNode(" "),n("NLink",{staticClass:"user",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,width:"45",height:"45"}})],1),t._ssrNode(" "),t._ssrNode('<div class="text">',"</div>",[n("NLink",{staticClass:"title fade-link",attrs:{target:"_blank",to:t.$alias.pin(t.item.slug)},domProps:{textContent:t._s(t.item.title.text)}}),t._ssrNode(' <div class="mask"><div><i class="iconfont ic-browse_fill"></i> <span>'+t._ssrEscape(t._s(t.item.visit_count))+'</span></div> <div><i class="iconfont ic-message_fill"></i> <span>'+t._ssrEscape(t._s(t.item.comment_count))+"</span></div></div>")],2)],2)},[],!1,function(t){var e=n(299);e.__inject__&&e.__inject__(t)},null,"2d5a23d1").exports},props:{sort:{type:String,required:!0},slug:{type:String,required:!0}},methods:{initData(){this.$refs.loader&&this.$refs.loader.initData()}}};var c=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FlowLoader",{ref:"loader",staticClass:"pin-grid-list",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",auto:0,query:{$axios:t.$axios,slug:t.slug,take:10,changing:"slug",time:"3-day",sort:t.sort}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,function(t){return r("PinPoster",{key:t.slug,attrs:{item:t}})}),1)}}])},[t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(88)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(89)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)},[],!1,function(t){var e=n(300);e.__inject__&&e.__inject__(t)},null,"5e172508").exports,d={name:"PinRanker",props:{index:{type:Number,required:!0},item:{type:Object,required:!0},show:{type:Boolean,default:!1}}};var _={name:"PinRankList",components:{PinRanker:Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"pin-ranker",class:[t.show?"show":"hide"]},[t._ssrNode("<div"+t._ssrClass("rank",{highlight:t.index<3})+">"+t._ssrEscape(t._s(t.index+1))+"</div> "),n("NLink",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"content",attrs:{to:t.$alias.pin(t.item.slug),target:"_blank"}},[n("div",{staticClass:"poster"},[n("VImg",{attrs:{src:t.item.media&&t.item.media.banner?t.item.media.banner.url:"default-poster",width:"80",height:"50"}})],1),t._v(" "),n("div",{staticClass:"text"},[n("p",{domProps:{textContent:t._s(t.item.title.text)}}),t._v(" "),n("div",[t._v("综合评分："+t._s(+t.item.visit_count+2*t.item.comment_count+2*t.item.like_count+2*t.item.mark_count+5*t.item.reward_count))])])]),t._ssrNode(" "),n("NLink",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"content oneline",attrs:{to:t.$alias.pin(t.item.slug),target:"_blank"},domProps:{textContent:t._s(t.item.title.text)}})],2)},[],!1,function(t){var e=n(301);e.__inject__&&e.__inject__(t)},null,"16b0fe5d").exports},props:{slug:{type:String,required:!0},time:{type:String,required:!0},take:{type:Number,default:10}},data:()=>({defaultActive:0}),methods:{initData(){this.$refs.loader&&this.$refs.loader.initData()},handleMove(t){this.defaultActive=t}}};var m={name:"GridArea",components:{PinGridList:c,PinRankList:Object(o.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{ref:"loader",staticClass:"pin-rank-list",attrs:{func:"getTagFlows",type:"seenIds",auto:0,query:{$axios:t.$axios,slug:t.slug,take:t.take,changing:"slug",time:t.time,sort:"hottest"},"cache-timeout":3600},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow,o=e.count;return n("ul",{},[t._l(r,function(e,r){return n("PinRanker",{key:e.slug,attrs:{index:r,item:e,show:t.defaultActive===r},nativeOn:{mouseenter:function(e){return t.handleMove(r)}}})}),t._v(" "),o?n("NLink",{staticClass:"more",attrs:{to:t.$alias.tag(t.slug),target:"_blank"}},[n("span",[t._v("查看更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t._e()],2)}}])})},[],!1,function(t){var e=n(302);e.__inject__&&e.__inject__(t)},null,"ba50c024").exports},props:{slug:{type:String,required:!0},name:{type:String,required:!0}},computed:{headers:()=>["有新动态","最新投稿"]},methods:{switchContent(t){1===t&&this.$refs.newest.initData()},switchRank(t){1===t&&this.$refs.rank7.initData()},handle(){this.$refs.rank3.initData(),this.$refs.active.initData()}}};var f={name:"Homepage",layout:"web",components:{GridArea:Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.handle,expression:"handle"}],staticClass:"area-wrap grid-area"},[t._ssrNode('<div class="area-right">',"</div>",[n("VSwitcher",{attrs:{headers:["三日","一周"],"header-trigger":"hover",animated:!0},on:{change:t.switchRank}},[n("template",{slot:"header-before"},[t._v("\n        排行\n      ")]),t._v(" "),n("template",{slot:"0"},[n("PinRankList",{ref:"rank3",attrs:{slug:t.slug,time:"3-day",take:7}})],1),t._v(" "),n("template",{slot:"1"},[n("PinRankList",{ref:"rank7",attrs:{slug:t.slug,time:"7-day",take:7,auto:!1}})],1)],2)],1),t._ssrNode(" "),t._ssrNode('<div class="area-left">',"</div>",[n("VSwitcher",{attrs:{headers:t.headers},on:{change:t.switchContent}},[n("template",{slot:"header-before"},[n("NLink",{staticClass:"title fade-link",attrs:{to:t.$alias.tag(t.slug),target:"_blank"},domProps:{textContent:t._s(t.name)}})],1),t._v(" "),n("template",{slot:"header-after"},[n("NLink",{staticClass:"more",attrs:{to:t.$alias.tag(t.slug),target:"_blank"}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})])],1),t._v(" "),n("template",{slot:"0"},[n("PinGridList",{ref:"active",attrs:{slug:t.slug,sort:"active"}})],1),t._v(" "),n("template",{slot:"1"},[n("PinGridList",{ref:"newest",attrs:{slug:t.slug,sort:"newest",auto:!1}})],1)],2)],1)],2)},[],!1,function(t){var e=n(303);e.__inject__&&e.__inject__(t)},null,"363fdb35").exports},data:()=>({tags:[]}),computed:{category(){return this.tags.map(t=>(t.type="grid",t))}},asyncData:({app:t,error:e})=>t.$axios.$get("v1/tag/hottest").then(t=>({tags:t})).catch(e)};var v=Object(o.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"homepage"}},[this._ssrNode('<div class="only-pc container">',"</div>",[this._l(this.category,function(t){return e(t.type+"-area",{key:t.slug,tag:"component",attrs:{name:t.name,slug:t.slug}})}),this._ssrNode(' <p class="beian">\n      互联网 ICP 备案：沪 ICP 备 17050785 号 - 1\n    </p>')],2),this._ssrNode(' <div class="only-h5">\n    calibur.tv\n  </div>')],2)},[],!1,function(t){var e=n(304);e.__inject__&&e.__inject__(t)},null,"32073284");e.default=v.exports},88:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},89:function(t,e,n){t.exports=n.p+"img/3251725.png"}};
//# sourceMappingURL=ec25d3fcd3a23898e35d.js.map