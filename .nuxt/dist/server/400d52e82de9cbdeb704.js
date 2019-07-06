exports.ids=[7],exports.modules={100:function(t,e){t.exports={delimiter:"delimiter_3ksS5"}},101:function(t,e){t.exports={checklist:"checklist_35Trq"}},102:function(t,e){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1"}},103:function(t,e){t.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj"}},104:function(t,e){t.exports={music:"music_1aU_y"}},111:function(t,e,n){"use strict";var r={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){const e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style[`h${e}`],domProps:{innerHTML:this.item.data.text}})}},o=n(1);var header=Object(o.a)(r,void 0,void 0,!1,function(t){var e=n(126);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"0447caaa").exports,l={name:"JsonImage",props:{item:{type:Object,required:!0}}};var c=Object(o.a)(l,function(){var t,e,n=this,r=n.$createElement,o=n._self._c||r;return o("div",{class:n.$style.image},[n._ssrNode("<div"+n._ssrClass(null,[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)])+">","</div>",[n._ssrNode("<div>","</div>",[o("VImg",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._ssrNode(" "+(n.item.data.caption?"<p>"+n._ssrEscape(n._s(n.item.data.caption))+"</p>":"\x3c!----\x3e"))],2)},[],!1,function(t){var e=n(127);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1df9eca6").exports,d={name:"JsonParagraph",props:{item:{type:Object,required:!0}}};var m=Object(o.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}},[])},[],!1,function(t){var e=n(128);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"18788980").exports,h={name:"JsonList",props:{item:{type:Object,required:!0}}};var _=Object(o.a)(h,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.list},[t._ssrNode("ordered"===t.item.data.style?"<ol>"+t._ssrList(t.item.data.items,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ol>":"<ul>"+t._ssrList(t.item.data.items,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ul>")])},[],!1,function(t){var e=n(129);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"86987c88").exports,f={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}};var v=Object(o.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter},[])},[],!1,function(t){var e=n(130);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"9239394e").exports,$={name:"JsonChecklist",props:{item:{type:Object,required:!0}}};var y=Object(o.a)($,function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{class:t.$style.checklist},[t._ssrNode(t._ssrList(t.item.data.items,function(option,e){return"<li>"+(option.checked?"<i></i>":"<em></em>")+" <div>"+t._ssrEscape(t._s(option.text))+"</div></li>"}))])},[],!1,function(t){var e=n(131);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"169c3110").exports,x={name:"JsonLink",props:{item:{type:Object,required:!0}}};var k=Object(o.a)(x,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.link},[t._ssrNode('<a target="_blank"'+t._ssrAttr("href",t.item.data.link)+">"+(t.item.data.meta.image&&t.item.data.meta.image.url?"<img"+t._ssrAttr("src",t.item.data.meta.image.url)+' width="65" height="65"'+t._ssrClass(null,t.$style.logo)+">":"\x3c!----\x3e")+" <div"+t._ssrClass(null,t.$style.content)+"><h3>"+t._ssrEscape(t._s(t.item.data.meta.title))+'</h3> <p class="oneline">'+t._ssrEscape(t._s(t.item.data.meta.description))+"</p> <span>"+t._ssrEscape(t._s(t.item.data.link.replace(/https?:\/\//,"")))+"</span></div></a>")])},[],!1,function(t){var e=n(132);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"98a699d0").exports,C={name:"JsonVideo",props:{item:{type:Object,required:!0}}};var video=Object(o.a)(C,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.video},[t._ssrNode("<div"+t._ssrClass(null,t.$style.wrap)+"><iframe"+t._ssrAttr("src",t.item.data.embed)+' scrolling="no" border="0" frameborder="no" framespacing="0" allowtransparency="true" allowfullscreen="allowfullscreen"></iframe></div> '+(t.item.data.caption?"<p>"+t._ssrEscape(t._s(t.item.data.caption))+"</p>":"\x3c!----\x3e"))])},[],!1,function(t){var e=n(133);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"74cde4cd").exports,w={name:"JsonMusic",props:{item:{type:Object,required:!0}}};class j{constructor({minLength:t,shareLink:e}={}){this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:t||140,shareLink:e||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}bind(t,{minLength:e,authorNickname:n,shareLink:r,appendStr:o}={}){t.addEventListener("copy",t=>{const l=e||this.config.minLength,c=r||this.config.shareLink,d=o||this.config.appendStr,m=window.getSelection().getRangeAt(0),h=this.getHTMLParser("");h&&h.appendChild(m.cloneContents());const _=m.toString().trim(),f=h?h.innerHTML:this.getRangeHtml(m);if(document.createElement("div").innerHTML=f,_.length>=l){const e=this.getCopyHtml(f,c,n,d),r=this.getCopyText(_,c,n,d);void 0===t.clipboardData&&this.hack(e,m);try{t.clipboardData.setData("text/plain",r),t.clipboardData.setData("text/html",e),t.preventDefault()}catch(t){this.hack(e,m)}}})}abort(t){t.addEventListener("copy",t=>(t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1))}hack(text,t){const e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(()=>{try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}getCopyHtml(html,t,e,n){return`<div><div>${html}</div>${this.getExtraCopyright(t,e,n).join("<br>")}</div>`}getCopyText(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}getExtraCopyright(t,e,n){return e?["","",`${this.prefix.author}：${e}`,`${this.prefix.link}：${t}`,`${this.prefix.org}：${this.config.org}`,n]:["","",`${this.prefix.link}：${t}`,`${this.prefix.org}：${this.config.org}`,n]}getRangeHtml(text){const div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}getHTMLParser(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(e){const n=document.implementation.createHTMLDocument("");return n.body.innerHTML=t,n.body}}}var N={name:"JsonContent",components:{"v-header":header,"v-image":c,"v-paragraph":m,"v-list":_,"v-delimiter":v,"v-checklist":y,"v-link":k,"v-video":video,"v-music":Object(o.a)(w,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.music},[t._ssrNode("<iframe"+t._ssrAttr("src",t.item.data.embed)+' scrolling="no" border="0" frameborder="no" framespacing="0" allowtransparency="true" allowfullscreen="allowfullscreen" width="330" height="86"></iframe> '+(t.item.data.caption?"<p>"+t._ssrEscape(t._s(t.item.data.caption))+"</p>":"\x3c!----\x3e"))])},[],!1,function(t){var e=n(134);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"3c9bd977").exports},props:{content:{required:!0,type:Array}},mounted(){(new j).bind(this.$el)}},E=Object(o.a)(N,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"json-content"},this._l(this.content,function(t,n){return e("v-"+t.type,{key:n,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,"db874c02");e.a=E.exports},126:function(t,e,n){"use strict";n.r(e);var r=n(96),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},127:function(t,e,n){"use strict";n.r(e);var r=n(97),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},128:function(t,e,n){"use strict";n.r(e);var r=n(98),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},129:function(t,e,n){"use strict";n.r(e);var r=n(99),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},130:function(t,e,n){"use strict";n.r(e);var r=n(100),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},131:function(t,e,n){"use strict";n.r(e);var r=n(101),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},132:function(t,e,n){"use strict";n.r(e);var r=n(102),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},133:function(t,e,n){"use strict";n.r(e);var r=n(103),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},134:function(t,e,n){"use strict";n.r(e);var r=n(104),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},135:function(t,e){},136:function(t,e){},137:function(t,e){},138:function(t,e){},139:function(t,e){},177:function(t,e,n){"use strict";n.r(e);var r=n(135),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},178:function(t,e,n){"use strict";n.r(e);var r=n(136),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},179:function(t,e,n){"use strict";n.r(e);var r=n(137),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},180:function(t,e,n){"use strict";n.r(e);var r=n(138),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},181:function(t,e,n){"use strict";n.r(e);var r=n(139),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},208:function(t,e,n){"use strict";n.r(e);var r=n(111),o=n(82),l=n(83),c=n(91),d={name:"ContentAuthor",components:{UserAvatar:o.a,UserNickname:l.a,UserFollowBtn:c.a},props:{user:{type:Object,required:!0},size:{type:Number,default:40},relation:{type:String,default:"unknown"}},computed:{isMine(){return this.$store.getters.isMine(this.user.slug)}}},m=n(1);var h=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-author clearfix"},[t._ssrNode('<div class="avatar-area">',"</div>",[n("UserAvatar",{attrs:{user:t.user,size:t.size}})],1),t._ssrNode(" "),t._ssrNode('<div class="content-area">',"</div>",[n("UserNickname",{attrs:{user:t.user}}),t._ssrNode(" "),t._ssrNode('<div class="content-meta oneline">',"</div>",[t._t("intro")],2)],2),t._ssrNode(" "),t._ssrNode('<div class="tail-area">',"</div>",[t.isMine?t._t("mine"):n("UserFollowBtn",{attrs:{slug:t.user.slug},model:{value:t.relation,callback:function(e){t.relation=e},expression:"relation"}})],2)],2)},[],!1,function(t){var e=n(177);e.__inject__&&e.__inject__(t)},null,"6ada38d0").exports,_=n(55),f=n.n(_),v=n(88),$={name:"CreateCommentForm",components:{ElUpload:f.a},mixins:[v.a],props:{pinSlug:{type:String,required:!0},commentId:{type:[String,Number],default:""},showAvatar:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},placeholder:{type:String,default:"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"}},data:()=>({content:"",loading:!1}),computed:{avatar(){return this.$store.state.user.avatar||"default-avatar"}},methods:{submit(){this.$store.state.isAuth||this.$channel.$emit("sign-in"),this.content.trim().length<2?this.$toast.error("内容至少要两个字"):this.loading||(this.loading=!0,this.$axios.$post("v1/comment/create",{content:this.content.trim(),images:this.uploadImageList.map(t=>t.data),pin_slug:this.pinSlug,comment_id:this.commentId}).then(data=>{this.$emit("submit",data),this.content="",this.resetUploaderStatus(),this.$toast.success("评论成功"),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}}};var y=Object(m.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-comment-form"},[t.showAvatar?t._ssrNode('<div class="avatar">',"</div>",[n("VImg",{attrs:{src:t.avatar,radius:"50%",width:"40",height:"40"}})],1):t._e(),t._ssrNode(' <button class="submit-btn">\n    点击<br>发送\n  </button> '),t._ssrNode('<div class="input-wrap">',"</div>",[n("ElInput",{attrs:{type:"textarea",autosize:{minRows:3},autofocus:t.autofocus,"show-word-limit":!0,maxlength:1e3,placeholder:t.placeholder},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.submit(e)):null}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._ssrNode(" "),n("ElUpload",{attrs:{multiple:"","list-type":"picture-card",action:t.imageUploadAction,limit:9,data:t.uploadHeaders,"file-list":t.uploadImageList,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.handleImageUploadSuccess,"on-error":t.handleImageUploadError,"on-remove":t.handleImageUploadRemove,"on-exceed":t.handleImageUploadExceed}},[n("i",{staticClass:"el-icon-picture-outline-round"})])],2)],2)},[],!1,function(t){var e=n(178);e.__inject__&&e.__inject__(t)},null,"3eac0968").exports,x={name:"CommentItem",components:{UserAvatar:o.a,UserNickname:l.a,JsonContent:r.a,CreateCommentForm:y},props:{item:{type:Object,required:!0}},data:()=>({showCreate:!1,deleting:!1}),computed:{isMine(){return this.$store.getters.isMine(this.item.author.slug)}},methods:{handleCreate(t){this.$emit("create",{id:this.item.id,value:t}),this.showCreate=!1},deleteComment(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.deleting||(this.deleting=!0,this.$axios.$post("v1/comment/delete",{comment_id:this.item.id}).then(()=>{this.$toast.success("删除成功"),this.$emit("delete",this.item.id)}).catch(t=>{this.$toast.error(t.message),this.deleting=!1}))}).catch(()=>{})}}};var k={name:"CommentMain",components:{CreateCommentForm:y,CommentItem:Object(m.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment-item"},[t._ssrNode("<aside>","</aside>",[n("UserAvatar",{attrs:{user:t.item.author}})],1),t._ssrNode(" "),t._ssrNode("<main>","</main>",[t._ssrNode("<header>","</header>",[n("UserNickname",{attrs:{user:t.item.author}}),t._ssrNode(" "),t._ssrNode('<div class="desc">',"</div>",[t._ssrNode("<time>"+t._ssrEscape(t._s(t.$utils.timeAgo(t.item.created_at)))+"</time> "),t.item.getter?[t._ssrNode("<span>回复 </span> "),n("NLink",{staticClass:"fade-link",attrs:{to:t.$alias.user(t.item.getter.slug),target:"_blank"},domProps:{textContent:t._s(t.item.getter.nickname)}})]:t._e()],2)],2),t._ssrNode(" "),n("JsonContent",{attrs:{content:t.item.content}}),t._ssrNode(' <footer><button><i class="iconfont ic-talk"></i></button> '+(t.isMine?'<button><i class="iconfont ic-trash"></i></button>':"\x3c!----\x3e")+"</footer> "),t.showCreate?n("CreateCommentForm",{attrs:{"show-avatar":!1,"pin-slug":t.item.pin_slug,"comment-id":t.item.id,autofocus:!0,placeholder:"回复 @"+t.item.author.nickname+"："},on:{submit:t.handleCreate}}):t._e()],2)],2)},[],!1,function(t){var e=n(179);e.__inject__&&e.__inject__(t)},null,"132ad8a2").exports},props:{slug:{type:String,required:!0}},data:()=>({sort:"time_asc"}),computed:{query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10}},sorts:()=>[{label:"按热度排序",value:"hottest"},{label:"按时间升序",value:"time_asc"},{label:"按时间降序",value:"time_desc"}]},methods:{createTop(data){this.$refs.loader.prepend(data)},createBottom(data){this.$refs.loader.append(data)},createInner(data){this.$refs.loader.insertAfter(data)},changeCommentSort(t){this.sort=t},handleDelete(t){this.$refs.loader.delete(t)}}};var C=Object(m.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-main"},[n("FlowLoader",{ref:"loader",attrs:{func:"getPinComments",type:"hottest"===t.sort?"seenIds":"lastId",query:t.query},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return n("header",{staticClass:"comment-header"},[n("h2",{staticClass:"total"},[t._v("\n        "+t._s(source.total)+" 评论\n      ")]),t._v(" "),n("div",{staticClass:"sort-jump"},[n("ul",{staticClass:"sortable"},t._l(t.sorts,function(e,r){return n("li",{key:r,class:{"is-selected":e.value===t.sort},domProps:{textContent:t._s(e.label)},on:{click:function(n){return t.changeCommentSort(e.value)}}})}),0)]),t._v(" "),n("CreateCommentForm",{attrs:{"pin-slug":t.slug},on:{submit:t.createTop}})],1)}},{key:"default",fn:function(e){var r=e.flow;return n("ul",{},t._l(r,function(e){return n("CommentItem",{key:e.id,attrs:{item:e},on:{create:t.createInner,delete:t.handleDelete}})}),1)}},{key:"footer",fn:function(e){var source=e.source;return n("footer",{staticClass:"footer-create-comment"},[source.total?n("CreateCommentForm",{attrs:{"pin-slug":t.slug},on:{submit:t.createBottom}}):t._e()],1)}}])})],1)},[],!1,function(t){var e=n(180);e.__inject__&&e.__inject__(t)},null,"670abf70").exports,w={name:"PinShow",layout:"web",components:{JsonContent:r.a,ContentAuthor:h,CommentMain:C},head(){return{title:this.title.text,meta:[{hid:"description",name:"description",content:this.intro}]}},data:()=>({slug:"",intro:"",title:null,author:null,content:[],area:null,notebook:null,visit_type:0,trial_type:0,content_type:0,comment_type:0,last_top_at:0,recommended_at:0,created_at:"",updated_at:"",deleted_at:null,deleting:!1,like_count:0,visit_count:0,mark_count:0,comment_count:0,reward_count:0}),asyncData:({app:t,error:e,params:n,query:r})=>t.$axios.$get("v1/pin/show",{params:Object.assign({},n,r)}).then(data=>({...data})).catch(e),beforeMount(){this.patchPin()},methods:{deletePin(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.deleting||(this.deleting=!0,this.$axios.$post("v1/pin/delete",{slug:this.slug}).then(()=>{this.$toast.success("删除成功").then(()=>{window.location="/"})}).catch(t=>{this.$toast.error(t.message),this.deleting=!1}))}).catch(()=>{})},patchPin(){this.$axios.$get("v1/pin/patch",{params:{slug:this.slug}}).then(data=>{Object.keys(data).forEach(t=>{this[t]=data[t]})}).catch(()=>{})}}};var j=Object(m.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pin-show"}},[t._ssrNode((t.title&&t.title.banner&&t.title.banner.width>=1400?'<div class="banner full-size"'+t._ssrStyle(null,{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:2e3})+")"},null)+"></div>":"\x3c!----\x3e")+" "),t._ssrNode('<div class="content">',"</div>",[t._ssrNode((t.title?(t.title.banner&&t.title.banner.width<1400?"<img"+t._ssrAttr("src",t.$resize(t.title.banner.url,{width:660}))+t._ssrAttr("alt",t.title.text)+' class="banner">':"\x3c!----\x3e")+' <h1 class="title">'+t._ssrEscape(t._s(t.title.text))+"</h1>":"\x3c!----\x3e")+" "),n("ContentAuthor",{attrs:{user:t.author},scopedSlots:t._u([{key:"mine",fn:function(){return[n("ElButton",{attrs:{round:"",plain:"",type:"danger"},on:{click:t.deletePin}},[t._v("\n          删除\n        ")]),t._v("\n         \n        "),n("NLink",{attrs:{to:t.$alias.create(t.slug)}},[n("ElButton",{attrs:{round:"",plain:"",type:"info"}},[t._v("\n            编辑\n          ")])],1)]},proxy:!0}])},[n("div",{staticClass:"metas",attrs:{slot:"intro"},slot:"intro"},[t.area?n("div",[n("i",{staticClass:"iconfont ic-coordinates"}),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.area.slug)},domProps:{textContent:t._s(t.area.name)}})],1):t._e(),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-time"}),t._v(" "),n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.created_at))}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-browse"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.visit_count)}})])])]),t._ssrNode(" "),n("JsonContent",{attrs:{content:t.content}}),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[t._ssrNode('<div class="social-panel"></div> '),t.notebook?t._ssrNode('<div class="notebook">',"</div>",[t._ssrNode("<p>文章被以下专栏收录</p> "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.notebook.slug)}},[n("VImg",{attrs:{src:t.notebook.avatar,width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"name",domProps:{textContent:t._s(t.notebook.name)}})],1)],2):t._e()],2),t._ssrNode(" "),n("CommentMain",{attrs:{slug:t.slug}})],2)],2)},[],!1,function(t){var e=n(181);e.__inject__&&e.__inject__(t)},null,"64d88908");e.default=j.exports},79:function(t,e){},80:function(t,e){},81:function(t,e){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},82:function(t,e,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,function(t){var e=n(84);e.__inject__&&e.__inject__(t)},null,"8c0ebd70");e.a=component.exports},83:function(t,e,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?t._ssrNode('<div class="user-nickname">',"</div>",[t._ssrNode('<div class="nickname"><p class="oneline">'+t._ssrEscape(t._s(t.nickname||t.user.nickname))+"</p></div> "+(t.sex?"<span"+t._ssrClass(null,t.$style.title)+"><i"+t._ssrClass("iconfont",[t.$style["ic-sex"],"ic-"+t.sexClass.name])+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(t.level?"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-level"]])+">"+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+t._ssrList(t.user.roles,function(e,n){return"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-title"]])+">"+t._ssrEscape(t._s(e))+"</span>"}))],2):n("NLink",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){var e=n(85);e.__inject__&&e.__inject__(t);var r=n(86);r.__inject__&&r.__inject__(t),this.$style=r.locals||r},null,"5b0047c6");e.a=component.exports},84:function(t,e,n){"use strict";n.r(e);var r=n(79),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},85:function(t,e,n){"use strict";n.r(e);var r=n(80),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},86:function(t,e,n){"use strict";n.r(e);var r=n(81),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},88:function(t,e,n){"use strict";var r=n(89);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(r.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((n,r)=>{n.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(r,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,n)=>{e.uid===t.uid&&(this.uploadImageList.splice(n,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((n,r)=>{n.uid===e.uid&&(this.uploadImageList[r]=Object.assign(n,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},89:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});const r=t=>t.$axios.$get("v1/image/uptoken"),o=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},91:function(t,e,n){"use strict";var r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},async submit(){const data=await this.$store.dispatch("social/toggle",{type:"user-follow",slug:this.slug,action:"is_following",params:{target_slug:this.slug,action_slug:this.$store.state.user.slug,target_type:"user",action_type:"user",method_type:"follow"}});data.success&&this.$emit("change",data.result)}}},o=n(1),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()},[],!1,null,null,"e3dd3b1a");e.a=component.exports},96:function(t,e){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu"}},97:function(t,e){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk"}},98:function(t,e){t.exports={paragraph:"paragraph_1OWG2"}},99:function(t,e){t.exports={list:"list_rxwoA"}}};
//# sourceMappingURL=400d52e82de9cbdeb704.js.map