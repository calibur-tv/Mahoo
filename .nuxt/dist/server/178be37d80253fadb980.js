exports.ids=[26],exports.modules={188:function(t,e){},255:function(t,e,r){"use strict";r.r(e);var n=r(188),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},303:function(t,e,r){"use strict";r.r(e);var n={name:"UserSocialLayout",props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},computed:{headers(){const t=this.$utils.convertTA(this.user.sex,this.$store.getters.isMine(this.slug));return[{name:`${t}的关注`,route:`/user/${this.slug}/social/following`},{name:`${t}的粉丝`,route:`/user/${this.slug}/social/followers`},{name:`${t}的朋友`,route:`/user/${this.slug}/social/friends`}]}}},o=r(2);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-social-layout"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("VSwitcher",{attrs:{headers:t.headers,routable:!0,"header-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return r("NLink",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),r("ElCol",{attrs:{span:18}},[r("NuxtChild",{attrs:{slug:t.slug}})],1)],1)],1)},[],!1,function(t){var e=r(255);e.__inject__&&e.__inject__(t)},null,"fa8ea97c");e.default=component.exports}};
//# sourceMappingURL=178be37d80253fadb980.js.map