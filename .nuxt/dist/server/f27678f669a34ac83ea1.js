exports.ids=[5],exports.modules={148:function(t,e){},258:function(t,e,r){"use strict";r.r(e);var n=r(148),c=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=c.a},374:function(t,e,r){"use strict";r.r(e);var n=r(70),c=r.n(n),l=r(71),o=r.n(l),h=r(93),d={name:"Managers",components:{ElCollapse:o.a,ElCollapseItem:c.a,UserAvatar:h.a},asyncData:({app:t,error:e})=>t.$axios.$get("v1/user/managers").then(t=>{return{list:t,actives:Object.keys(t)}}).catch(e),data:()=>({list:[],actives:[]}),computed:{showPlus(){return this.$hasRole("add_manager")},showDelete(){return this.$hasRole("remove_manager")}},methods:{removeManager(t,e){this.$confirm("确认要执行该操作吗？",`移除${t}`).then(()=>{this.$axios.$post("v1/user/remove_manager",{role:t,slug:e}).then(()=>{this.$toast.success("操作成功！").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},addManager(t){this.$prompt("请输入要指定的用户cc号",`添加${t}`).then(({value:e})=>{const r=e.trim();if(r.length>16||r.length<2||!/^([a-z0-9]|_|-)+$/i.test(r))return this.$toast.error("错误的cc号");this.$axios.$post("v1/user/add_manager",{role:t,slug:r}).then(()=>{this.$toast.success("操作成功！").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},v=r(1);var component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"managers"}},[r("ElCollapse",{model:{value:t.actives,callback:function(e){t.actives=e},expression:"actives"}},t._l(t.list,(function(e,n){return r("ElCollapseItem",{key:n,attrs:{title:n+"（"+e.length+"）",name:n}},[r("ul",{staticClass:"user-list clearfix"},[t._l(e,(function(e){return r("li",{key:e.slug,staticClass:"user-item"},[r("UserAvatar",{attrs:{size:80,user:e}}),t._v(" "),r("p",{staticClass:"nickname oneline",domProps:{textContent:t._s(e.nickname)}}),t._v(" "),t.showDelete?r("i",{staticClass:"remove-btn el-icon-remove",on:{click:function(r){return t.removeManager(n,e.slug)}}}):t._e()],1)})),t._v(" "),t.showPlus?r("li",{staticClass:"user-plus",on:{click:function(e){return t.addManager(n)}}},[r("i",{staticClass:"el-icon-plus"})]):t._e()],2)])})),1)],1)}),[],!1,(function(t){var e=r(258);e.__inject__&&e.__inject__(t)}),null,"7cdbf26e");e.default=component.exports},86:function(t,e){},93:function(t,e,r){"use strict";var n={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},c=r(1);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.disabled?r("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[r("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):r("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[r("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)}),[],!1,(function(t){var e=r(94);e.__inject__&&e.__inject__(t)}),null,"752b3908");e.a=component.exports},94:function(t,e,r){"use strict";r.r(e);var n=r(86),c=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=c.a}};