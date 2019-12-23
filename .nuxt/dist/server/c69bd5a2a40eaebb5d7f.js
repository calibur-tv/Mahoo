exports.ids=[5],exports.modules={149:function(e,t){e.exports={undefined:void 0}},257:function(e,t,r){"use strict";r.r(t);var n=r(149),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},360:function(e,t,r){"use strict";r.r(t);var n=r(71),o=r.n(n),c=r(72),l=r.n(c),d=r(94),h={name:"Managers",components:{ElCollapse:l.a,ElCollapseItem:o.a,UserAvatar:d.a},asyncData:({app:e,error:t})=>e.$axios.$get("v1/user/managers").then(e=>{return{list:e,actives:Object.keys(e)}}).catch(t),data:()=>({list:[],actives:[]}),computed:{showPlus(){return this.$hasRole("add_manager")},showDelete(){return this.$hasRole("remove_manager")}},methods:{removeManager(e,t){this.$confirm("确认要执行该操作吗？",`移除${e}`).then(()=>{this.$axios.$post("v1/user/remove_manager",{role:e,slug:t}).then(()=>{this.$toast.success("操作成功！").then(()=>{window.location.reload()})}).catch(e=>{this.$toast.error(e.message)})}).catch(()=>{})},addManager(e){this.$prompt("请输入要指定的用户cc号",`添加${e}`).then(({value:t})=>{const r=t.trim();if(r.length>16||r.length<2||!/^([a-z0-9]|_|-)+$/i.test(r))return this.$toast.error("错误的cc号");this.$axios.$post("v1/user/add_manager",{role:e,slug:r}).then(()=>{this.$toast.success("操作成功！").then(()=>{window.location.reload()})}).catch(e=>{this.$toast.error(e.message)})}).catch(()=>{})}}},v=r(1);var component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"managers"}},[r("ElCollapse",{model:{value:e.actives,callback:function(t){e.actives=t},expression:"actives"}},e._l(e.list,(function(t,n){return r("ElCollapseItem",{key:n,attrs:{title:n+"（"+t.length+"）",name:n}},[r("ul",{staticClass:"user-list clearfix"},[e._l(t,(function(t){return r("li",{key:t.slug,staticClass:"user-item"},[r("UserAvatar",{attrs:{size:80,user:t}}),e._v(" "),r("p",{staticClass:"nickname oneline",domProps:{textContent:e._s(t.nickname)}}),e._v(" "),e.showDelete?r("i",{staticClass:"remove-btn el-icon-remove",on:{click:function(r){return e.removeManager(n,t.slug)}}}):e._e()],1)})),e._v(" "),e.showPlus?r("li",{staticClass:"user-plus",on:{click:function(t){return e.addManager(n)}}},[r("i",{staticClass:"el-icon-plus"})]):e._e()],2)])})),1)],1)}),[],!1,(function(e){var t=r(257);t.__inject__&&t.__inject__(e)}),null,"065f6f09");t.default=component.exports},87:function(e,t){e.exports={undefined:void 0}},94:function(e,t,r){"use strict";var n={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=r(1);var component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.disabled?r("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[r("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):r("NLink",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[r("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)}),[],!1,(function(e){var t=r(95);t.__inject__&&t.__inject__(e)}),null,"8c0ebd70");t.a=component.exports},95:function(e,t,r){"use strict";r.r(t);var n=r(87),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a}};