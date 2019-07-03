exports.ids=[32],exports.modules={110:function(t,e,o){"use strict";var n=o(26),l={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt(`请输入${this.text}名`,`新建${this.text}`,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(n.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},r=o(1),component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._ssrNode('<i class="el-icon-folder-add"></i> <span>'+this._ssrEscape("新建"+this._s(this.text))+"</span>")])},[],!1,null,null,"5cda1a3b");e.a=component.exports},115:function(t,e){},116:function(t,e,o){"use strict";o.r(e);var n=o(96),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},117:function(t,e){},118:function(t,e){},160:function(t,e,o){"use strict";var n=o(58),l={name:"AreaPicker",components:{"el-cascader":o.n(n).a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"添加作品分区，如约会大作战"},blocked:{type:String,default:""}},data(){return{selected:this.value}},computed:{options(){let t=this.$store.state.global.myTags.filter(t=>"notebook"!==t.slug);return this.blocked&&(t=t.filter(t=>t.slug!==this.blocked)),t}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},r=o(1);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"area-picker"},[t._ssrNode('<p class="tip">\n    提示：只能选择已解禁的分区\n  </p> '),o("el-cascader",{attrs:{placeholder:t.placeholder,options:t.options,props:{value:"slug",label:"name",emitPath:!1},filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,data=e.data;return[n.isLeaf?[o("span",[t._v(t._s(data.name))])]:[o("span",[t._v(t._s(data.name))]),t._v(" "),o("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],2)},[],!1,function(t){var e=o(116);e.__inject__&&e.__inject__(t)},null,"d07163b4");e.a=component.exports},164:function(t,e,o){"use strict";o.r(e);var n=o(115),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},165:function(t,e,o){"use strict";o.r(e);var n=o(117),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},166:function(t,e,o){"use strict";o.r(e);var n=o(118),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=l.a},200:function(t,e,o){"use strict";o.r(e);var n=o(56),l=o.n(n),r=o(89),c=o(91),d=o(92),h={name:"JsonEditor",mixins:[c.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""},time:{type:String,default:""},autofocus:{type:Boolean,default:!1}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([Promise.resolve().then(o.t.bind(null,72,7)),Promise.resolve().then(o.t.bind(null,73,7)),Promise.resolve().then(o.t.bind(null,74,7)),Promise.resolve().then(o.t.bind(null,75,7)),Promise.resolve().then(o.t.bind(null,76,7)),Promise.resolve().then(o.t.bind(null,77,7)),Promise.resolve().then(o.t.bind(null,78,7)),Promise.resolve().then(o.t.bind(null,79,7))]).then(t=>{const e=this;let data={};if(e.slug){const t=e.$cache.get(`editor_local_draft-${e.slug}`);data=t&&t.time>new Date(e.time).getTime()?t:{blocks:e.value,time:Date.now(),version:e.$cache.get("editor_version","2.14.0")}}else e.$cache.has("editor_local_draft")&&(data=e.$cache.get("editor_local_draft"),e.$emit("input",data.blocks));const[o,n,l,r,c,h,m,f]=t.map(t=>t.default),v=new o({data:data,holder:"codex-editor",placeholder:"请输入内容",autofocus:e.autofocus,tools:{video:{class:f,inlineToolbar:!0,config:{services:{bilibili:{regex:/https?:\/\/www\.bilibili\.com\/video\/av([^\\?\\&]*)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:t=>t[0].replace("/","")}}}},header:{class:n,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:h,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:t=>new Promise((o,n)=>{const l=new FormData;l.append("file",t),l.append("token",e.uploadHeaders.token),Object(d.b)(e,l).then(data=>{data.url=`https://m1.calibur.tv/${data.url}`,o({success:1,file:data})}).catch(n)})}}},link:{class:c,shortcut:"CMD+SHIFT+L",config:{endpoint:"https://api.calibur.tv/v1/pin/editor/fetch_site"}},delimiter:r,list:{class:l,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},checklist:{class:m,inlineToolbar:!0}},onChange:()=>{e.handleSave()}});v.isReady.then(()=>{this.editor=v,this.bindSaveEvent()}).catch(t=>{this.$toast.error(`编辑器初始化失败：${t}`)})})},bindSaveEvent(){document.addEventListener("keydown",t=>{83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(t=>{const e=this.slug?`editor_local_draft-${this.slug}`:"editor_local_draft";this.$cache.set(e,t),this.$cache.set("editor_version",t.version),this.value&&this.$emit("input",t.blocks),this.$emit("save")}).catch(()=>{this.$toast.error("保存失败")})}}},m=o(1);var f=Object(m.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"editor-wrap"},[this._ssrNode('<div id="codex-editor" class="mousetrap"></div>')])},[],!1,function(t){var e=o(164);e.__inject__&&e.__inject__(t)},null,"57dddf00").exports,v=o(160),_=o(59),$=o.n(_),k=o(57),w=o.n(k),y=o(110),x={name:"NotebookPicker",components:{"el-select":w.a,"el-option":$.a,CreateTagBtn:y.a},props:{value:{type:String,required:!0}},data(){return{selected:this.value,newTags:[]}},computed:{options(){return this.newTags.concat(this.$store.state.global.myTags.filter(t=>"notebook"===t.slug)[0].children)}},watch:{selected(t){this.$emit("input",t)},value(t){this.selected=t},"options.length"(){this.selected||(this.selected=this.options[0].slug)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})},methods:{handleCreate(data){this.newTags.unshift(data),this.selected=data}}};var T=Object(m.a)(x,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notebook-picker"},[t._ssrNode('<div class="new-btn">',"</div>",[o("create-tag-btn",{attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreate}})],1),t._ssrNode(" "),t._ssrNode('<div class="selection">',"</div>",[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return o("el-option",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],1)],2)},[],!1,function(t){var e=o(165);e.__inject__&&e.__inject__(t)},null,"07b65474").exports,U={name:"Wander",layout:"web",components:{Editor:f,AreaPicker:v.a,NotebookPicker:T,"el-upload":l.a},mixins:[r.a,c.a],data:()=>({slug:"",title:{banner:null,text:""},content:[],notebook:"",area:"ugf6",loading:!1,last_edit_at:"",visit_type:0}),asyncData({app:t,error:e,query:o}){const n=o.slug;if(n)return t.$axios.$get("v1/pin/update/content",{params:{slug:n}}).then(data=>(data.area=data.area.slug,data.notebook=data.notebook.slug,{...data})).catch(e)},mounted(){this.$cache.has(`editor_local_draft_title-${this.slug}`)&&(this.title=this.$cache.get(`editor_local_draft_title-${this.slug}`))},methods:{customImageUploadSuccess(t,e){this.handleImageUploadSuccess(t,e);const o=t.data;o.width<960||o.height<540?this.handleImageUploadRemove(e):(this.title.banner=o,this.saveTitle())},onEditorSave(){this.saveTitle()},saveTitle(){this.$cache.set(`editor_local_draft_title-${this.slug}`,this.title)},deleteBanner(){this.title.banner=null,this.saveTitle()},preValidate(){return!!this.loading||(this.title.text?this.content.length?this.area?this.notebook?(this.loading=!0,!1):(this.$toast.info("请选择专栏"),!0):(this.$toast.info("请选择分区"),!0):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate(t){this.preValidate()||this.$axios.$post("v1/pin/create/story",{area:this.area,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove(`editor_local_draft_title-${this.slug}`),this.$cache.remove("editor_local_draft"),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionUpdate(t){if(this.preValidate())return;const{slug:e}=this;this.$axios.$post("v1/pin/update/story",{slug:e,area:this.area,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove(`editor_local_draft_title-${e}`),this.$cache.remove(`editor_local_draft-${e}`),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionDelete(){this.slug?this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/pin/delete",{slug:this.slug}).then(()=>{this.$toast.success("删除成功").then(()=>{window.location="/"}).catch(t=>{this.$toast.error(t.message),this.loading=!1})}))}).catch(()=>{}):(this.content.length||this.title.text.length||this.title.banner)&&(this.$cache.remove(`editor_local_draft_title-${this.slug}`),this.$cache.remove("editor_local_draft"),this.$toast.success("删除成功").then(()=>{window.location.reload()}))}}};var I=Object(m.a)(U,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"wander"}},[t._ssrNode('<div class="wrap">',"</div>",[t._ssrNode('<div class="banner">',"</div>",[o("el-upload",{staticClass:"uploader",attrs:{drag:"",action:t.imageUploadAction,accept:t.imageUploadAccept,data:t.uploadHeaders,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError}},[o("div",{staticClass:"el-upload-tip",attrs:{slot:"tip"},slot:"tip"},[o("i",{staticClass:"el-icon-picture"}),t._v(" "),o("div",[t._v("请添加封面图（选填）")]),t._v(" "),o("p",[t._v("支持8MB内的JPG／JPEG／PNG格式的高清图片"),o("br"),t._v("（建议大于960*540像素）")])])]),t._ssrNode(" "+(t.title.banner?"<img"+t._ssrAttr("src",t.$resize(t.title.banner.url,{width:660}))+' class="banner"> <div class="tool"><i class="el-icon-delete"></i></div>':"\x3c!----\x3e"))],2),t._ssrNode(" "),t._ssrNode('<div class="title">',"</div>",[o("el-input",{attrs:{"show-word-limit":!0,autosize:{minRows:1},type:"textarea",resize:"none",placeholder:"请输入标题（建议30字以内）",maxlength:"40"},model:{value:t.title.text,callback:function(e){t.$set(t.title,"text",e)},expression:"title.text"}})],1),t._ssrNode(" "),o("editor",{attrs:{slug:t.slug,time:t.last_edit_at},on:{save:t.onEditorSave},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._ssrNode(" "),o("el-form",{staticClass:"footer",attrs:{"label-position":"top","label-width":"80px"}},[o("el-form-item",{attrs:{label:"选择分区"}},[o("area-picker",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"选择专栏"}},[o("notebook-picker",{model:{value:t.notebook,callback:function(e){t.notebook=e},expression:"notebook"}})],1),t._v(" "),o("el-form-item",{staticClass:"button-wrap"},[t.slug?[o("el-button",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionUpdate(!0)}}},[t._v("\n            发布更新\n          ")]),t._v(" "),1===t.visit_type?o("el-button",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionUpdate(!1)}}},[t._v("\n            存草稿\n          ")]):t._e(),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionDelete}},[t._v("\n            删除文章\n          ")])]:[o("el-button",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionCreate(!0)}}},[t._v("\n            发表文章\n          ")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionCreate(!1)}}},[t._v("\n            存草稿\n          ")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionDelete}},[t._v("\n            删除文章\n          ")])]],2)],1)],2)])},[],!1,function(t){var e=o(166);e.__inject__&&e.__inject__(t)},null,"4b6246b4");e.default=I.exports},89:function(t,e,o){"use strict";var n=o(27);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?(this.$channel.$fire("user-signed"),t()):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}else{const t=Object(n.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})}}}},91:function(t,e,o){"use strict";var n=o(92);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(n.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},92:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return l});const n=t=>t.$axios.$get("v1/image/uptoken"),l=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},96:function(t,e){}};
//# sourceMappingURL=528783c3e33ebf1f6a67.js.map