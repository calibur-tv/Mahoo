(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{271:function(t,e,o){"use strict";o(37),o(67),o(38);var n=o(2),l=o(107);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(n.a)(function*(){let e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(l.b)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:o}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(o.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},273:function(t,e,o){"use strict";var n=o(2),l=o(39);e.a={beforeMount(){var t=this;return Object(n.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.$channel.$fire("user-signed"),e()):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href=t.$alias.sign()})})}else{const e=Object(l.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.$channel.$fire("user-signed"):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href=t.$alias.sign()})}})()}}},277:function(t,e,o){},294:function(t,e,o){"use strict";var n=o(106),l={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{let{value:e}=t;const o=e.trim();if(o.length>32)return this.$toast.error("名字不能超过32个字");Object(n.b)(this,{name:o,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},r=o(11),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);e.a=component.exports},314:function(t,e,o){},319:function(t,e,o){"use strict";var n=o(277);o.n(n).a},320:function(t,e,o){},321:function(t,e,o){},322:function(t,e,o){},390:function(t,e,o){"use strict";var n=o(395),l={name:"AreaPicker",components:{ElCascader:o.n(n).a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"选择作品分区，如约会大作战"}},data(){return{selected:this.value}},computed:{options(){return this.$store.state.global.myTags.filter(t=>!~["notebook","topic"].indexOf(t.slug))}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},r=(o(319),o(11)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"area-picker"},[o("p",{staticClass:"tip"},[t._v("\n    提示：只展示已解禁的分区（可选项，发表后不可修改）\n  ")]),t._v(" "),o("ElCascader",{attrs:{placeholder:t.placeholder,options:t.options,props:{value:"slug",label:"name",emitPath:!1},filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,data=e.data;return[n.isLeaf?[o("span",[t._v(t._s(data.name))])]:[o("span",[t._v(t._s(data.name))]),t._v(" "),o("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},[],!1,null,null,null);e.a=component.exports},407:function(t,e,o){},408:function(t,e,o){"use strict";var n=o(314);o.n(n).a},413:function(t,e,o){"use strict";var n=o(320);o.n(n).a},414:function(t,e,o){"use strict";var n=o(321);o.n(n).a},415:function(t,e,o){"use strict";var n=o(322);o.n(n).a},490:function(t,e,o){"use strict";o.r(e);var n=o(7),l=o(297),r=o.n(l),c=o(273),d=o(271),h=(o(67),o(38),o(29),o(107));o(37),o(407);class m{constructor(t){let{data:data}=t;this.data=data}static get toolbox(){return{title:"百度云",icon:'<svg width="20px" height="16px" viewBox="0 0 256 206" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">\n  <g>\n    <path d="M170.2517,56.8186 L192.5047,34.5656 L193.9877,25.1956 C153.4367,-11.6774 88.9757,-7.4964 52.4207,33.9196 C42.2667,45.4226 34.7337,59.7636 30.7167,74.5726 L38.6867,73.4496 L83.1917,66.1106 L86.6277,62.5966 C106.4247,40.8546 139.8977,37.9296 162.7557,56.4286 L170.2517,56.8186 Z"></path>\n    <path d="M224.2048,73.9182 C219.0898,55.0822 208.5888,38.1492 193.9878,25.1962 L162.7558,56.4282 C175.9438,67.2042 183.4568,83.4382 183.1348,100.4652 L183.1348,106.0092 C198.4858,106.0092 210.9318,118.4542 210.9318,133.8052 C210.9318,149.1572 198.4858,161.2902 183.1348,161.2902 L127.4638,161.2902 L121.9978,167.2242 L121.9978,200.5642 L127.4638,205.7952 L183.1348,205.7952 C223.0648,206.1062 255.6868,174.3012 255.9978,134.3712 C256.1858,110.1682 244.2528,87.4782 224.2048,73.9182"></path>\n    <path d="M71.8704,205.7957 L127.4634,205.7957 L127.4634,161.2897 L71.8704,161.2897 C67.9094,161.2887 64.0734,160.4377 60.4714,158.7917 L52.5844,161.2117 L30.1754,183.4647 L28.2234,191.0387 C40.7904,200.5277 56.1234,205.8637 71.8704,205.7957"></path>\n    <path d="M71.8704,61.4255 C31.9394,61.6635 -0.2366,94.2275 0.0014,134.1575 C0.1344,156.4555 10.5484,177.4455 28.2234,191.0385 L60.4714,158.7915 C46.4804,152.4705 40.2634,136.0055 46.5844,122.0155 C52.9044,108.0255 69.3704,101.8085 83.3594,108.1285 C89.5244,110.9135 94.4614,115.8515 97.2464,122.0155 L129.4944,89.7685 C115.7734,71.8315 94.4534,61.3445 71.8704,61.4255"></path>\n  </g>\n</svg>'}}render(){const t=document.createElement("div");t.classList.add("baidu-resource");const e=document.createElement("i");e.classList.add("iconfont","ic-baidu-cloud","baidu-resource-icon"),t.appendChild(e);const o=document.createElement("div");o.classList.add("baidu-resource-wrap"),t.appendChild(o);const n=document.createElement("input");n.classList.add("baidu-resource-url"),n.placeholder="粘贴资源链接到这里（仅支持百度云盘：pan.baidu.com）",n.type="text",n.value=this.data&&this.data.url?this.data.url:"",o.appendChild(n);const l=document.createElement("input");l.classList.add("baidu-resource-password"),l.placeholder="填写资源的密码（4~6位）",l.type="text",l.value=this.data&&this.data.password?this.data.password:"",o.appendChild(l);const r=document.createElement("div");r.classList.add("baidu-resource-role-wrap");const c="".concat(Math.random().toString(36).substring(3,6)),d=this.data&&this.data.visit_type?this.data.visit_type:0,h=document.createElement("span");h.textContent="是否需要投食才能看到密码：",r.appendChild(h);const m=document.createElement("input");m.classList.add("baidu-resource-role-public"),m.id="baidu-resource-role-public-".concat(c),m.name=c,m.type="radio",m.value=0,m.checked=0===d,r.appendChild(m);const v=document.createElement("label");v.setAttribute("for","baidu-resource-role-public-".concat(c)),v.textContent="否",v.classList.add("baidu-resource-label"),r.appendChild(v);const f=document.createElement("input");f.classList.add("baidu-resource-role-private"),f.id="baidu-resource-role-private-".concat(c),f.type="radio",f.name=c,f.value=1,f.checked=1===d,r.appendChild(f);const _=document.createElement("label");return _.setAttribute("for","baidu-resource-role-private-".concat(c)),_.textContent="是",_.classList.add("baidu-resource-label"),r.appendChild(_),o.appendChild(r),t}save(t){const e=t.querySelector(".baidu-resource-url"),o=t.querySelector(".baidu-resource-password"),n=t.querySelector(".baidu-resource-role-public");return{url:e.value.trim(),password:o.value.trim(),visit_type:n.checked?0:1}}validate(t){return!(!t.url||!t.password)&&!(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(t.url)||!/^[\w|\W]{4,6}$/.test(t.password))}}var v={name:"JsonEditor",mixins:[d.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""},time:{type:[String,Number],default:""},autofocus:{type:Boolean,default:!1}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([o.e(51).then(o.t.bind(null,478,7)),o.e(53).then(o.t.bind(null,479,7)),o.e(56).then(o.t.bind(null,480,7)),o.e(50).then(o.t.bind(null,481,7)),o.e(55).then(o.t.bind(null,482,7)),o.e(54).then(o.t.bind(null,483,7)),o.e(49).then(o.t.bind(null,484,7)),o.e(52).then(o.t.bind(null,485,7))]).then(t=>{const e=this;let data={};e.slug?data={blocks:e.value,time:Date.now(),version:e.$cache.get("editor_version","2.15.0")}:e.$cache.has("editor_local_draft")&&(data=e.$cache.get("editor_local_draft"),e.$emit("input",data.blocks));const[o,n,l,r,c,d,v,f]=t.map(t=>t.default),_=new o({data:e.decodeData(data||{}),holder:"codex-editor",placeholder:"请输入内容",autofocus:e.autofocus,tools:{video:{class:f,inlineToolbar:!0,config:{services:{bilibili:{regex:/https?:\/\/www\.bilibili\.com\/video\/av([\w\W]+)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='400' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:t=>t[0].split("/")[0].split("?")[0]},bilih5:{regex:/https?:\/\/m\.bilibili\.com\/video\/av([\w\W]+)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='400' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:t=>t[0].split(".")[0].split("?")[0]},netease:{regex:/https?:\/\/music\.163\.com\/#\/song\?id=([\w\W]+)/,embedUrl:"//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>",html:"<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",id:t=>t[0].split("/")[0].split("?")[0]},neteaseh5:{regex:/https?:\/\/music\.163\.com\/m\/song\?id=([\w\W]+)/,embedUrl:"//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>",html:"<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",id:t=>t[0].split("/")[0].split("?")[0]}}}},header:{class:n,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:d,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:t=>new Promise((o,n)=>{const l=new FormData;l.append("file",t),l.append("token",e.uploadHeaders.token),Object(h.c)(e,l).then(data=>{data.url="https://m1.calibur.tv/".concat(data.url),o({success:1,file:data})}).catch(n)})}}},link:{class:c,shortcut:"CMD+SHIFT+L",config:{endpoint:"".concat("https://api.calibur.tv/","v1/pin/editor/fetch_site")}},delimiter:r,list:{class:l,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},checklist:{class:v,inlineToolbar:!0},baidu:m},onChange:()=>{e.handleSave()}});_.isReady.then(()=>{this.editor=_,this.bindSaveEvent(),this.handleSave()}).catch(t=>{this.$toast.error("编辑器初始化失败：".concat(t))})})},bindSaveEvent(){document.addEventListener("keydown",t=>{83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(t=>{const e=this.encodeData(t),o=this.slug?"editor_local_draft-".concat(this.slug):"editor_local_draft";this.$cache.set(o,e),this.$cache.set("editor_version",e.version),this.value&&this.$emit("input",e.blocks),this.$emit("save")}).catch(()=>{this.$toast.error("保存失败")})},decodeData(t){let{version:e,blocks:o,time:time}=t;return o?(o.forEach((t,e)=>{"music"===t.type&&(o[e].type="video")}),{version:e,blocks:o,time:time}):null},encodeData(t){let{version:e,blocks:o,time:time}=t;return o.forEach((t,e)=>{"video"===t.type&&t.data.service.startsWith("netease")&&(o[e].type="music",o[e].data.embed=o[e].data.embed.replace(/&amp;/g,"&"))}),{version:e,blocks:o,time:time}}}},f=(o(408),o(11)),_=Object(f.a)(v,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor-wrap"},[e("div",{staticClass:"mousetrap",attrs:{id:"codex-editor"}})])}],!1,null,null,null).exports,$=o(390),w=o(278),k=o.n(w),y=o(296),C=o.n(y),E={name:"TopicPicker",components:{ElSelect:C.a,ElOption:k.a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"选择作品话题，如 cosplay"}},data(){return{selected:this.value}},computed:{options(){return this.$store.state.global.myTags.filter(t=>"topic"===t.slug)[0].children}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},x=(o(413),Object(f.a)(E,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"topic-picker"},[o("p",{staticClass:"tip"},[t._v("\n    提示：只展示已关注的话题（必选项，填写后不可修改）\n  ")]),t._v(" "),o("ElSelect",{attrs:{filterable:"","default-first-option":"",placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return o("ElOption",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],1)},[],!1,null,null,null).exports),T=o(294),L={name:"NotebookPicker",components:{ElSelect:C.a,ElOption:k.a,CreateTagBtn:T.a},props:{value:{type:String,required:!0}},data(){return{selected:this.value,newTags:[]}},computed:{options(){return this.newTags.concat(this.$store.state.global.myTags.filter(t=>"notebook"===t.slug)[0].children)}},watch:{selected(t){this.$emit("input",t)},value(t){this.selected=t},"options.length"(){this.selected||(this.selected=this.options[0].slug)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})},methods:{handleCreate(data){this.newTags.unshift(data),this.selected=data.slug}}},U=(o(414),Object(f.a)(L,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notebook-picker"},[o("div",{staticClass:"new-btn"},[o("CreateTagBtn",{attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreate}})],1),t._v(" "),o("div",{staticClass:"selection"},[o("ElSelect",{attrs:{filterable:"","default-first-option":"",placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return o("ElOption",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],1)])},[],!1,null,null,null).exports),I={name:"Wander",layout:"web",components:{Editor:_,AreaPicker:$.a,TopicPicker:x,NotebookPicker:U,ElUpload:r.a},mixins:[c.a,d.a],head:{title:"创作中心"},data:()=>({slug:"",title:{banner:null,text:""},content:[],notebook:"",area:"",topic:"ugf6",last_edit_at:"",visit_type:0,loading:!1}),asyncData(t){let{app:e,error:o,query:l}=t;const r=l.slug;if(r)return e.$axios.$get("v1/pin/update/content",{params:{slug:r}}).then(data=>(data.area=data.area?data.area.slug:"",data.topic=data.topic?data.topic.slug:"",data.notebook=data.notebook?data.notebook.slug:"",Object(n.a)({},data))).catch(o)},mounted(){this.$cache.has("editor_local_draft_title-".concat(this.slug))&&(this.title=this.$cache.get("editor_local_draft_title-".concat(this.slug)))},methods:{customImageUploadSuccess(t,e){this.handleImageUploadSuccess(t,e);const o=t.data;if(o.width<960||o.height<540)return this.handleImageUploadRemove(e),void this.$toast.info("图片尺寸不符合要求");this.title.banner=o,this.saveTitle()},onEditorSave(){this.saveTitle()},saveTitle(){this.$cache.set("editor_local_draft_title-".concat(this.slug),this.title)},deleteBanner(){this.title.banner=null,this.saveTitle()},preValidate(){return!!this.loading||(this.title.text?this.content.length?this.topic?this.notebook?(this.loading=!0,!1):(this.$toast.info("请选择专栏"),!0):(this.$toast.info("请选择话题"),!0):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate(t){this.preValidate()||this.$axios.$post("v1/pin/create/story",{area:this.area,topic:this.topic,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove("editor_local_draft_title-".concat(this.slug)),this.$cache.remove("editor_local_draft"),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionUpdate(t){if(this.preValidate())return;const{slug:e}=this;this.$axios.$post("v1/pin/update/story",{slug:e,area:this.area,topic:this.topic,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove("editor_local_draft_title-".concat(e)),this.$cache.remove("editor_local_draft-".concat(e)),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionRedo(){(this.content.length||this.title.text.length||this.title.banner)&&(this.slug?(this.$cache.remove("editor_local_draft_title-".concat(this.slug)),this.$cache.remove("editor_local_draft-".concat(this.slug))):(this.$cache.remove("editor_local_draft_title"),this.$cache.remove("editor_local_draft")),this.$toast.success("删除成功").then(()=>{window.location.reload()}))}}},S=(o(415),Object(f.a)(I,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"wander"}},[o("div",{staticClass:"wrap"},[o("div",{staticClass:"banner"},[o("ElUpload",{staticClass:"uploader",attrs:{drag:"",action:t.imageUploadAction,accept:t.imageUploadAccept,data:t.uploadHeaders,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError}},[o("div",{staticClass:"el-upload-tip",attrs:{slot:"tip"},slot:"tip"},[o("i",{staticClass:"el-icon-picture"}),t._v(" "),o("div",[t._v("请添加封面图（选填）")]),t._v(" "),o("p",[t._v("支持8MB内的JPG／JPEG／PNG格式的高清图片"),o("br"),t._v("（建议大于960*540像素）")])])]),t._v(" "),t.title&&t.title.banner?[o("div",{staticClass:"image",style:{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:660})}}),t._v(" "),o("div",{staticClass:"tool"},[o("i",{staticClass:"el-icon-delete",on:{click:t.deleteBanner}})])]:t._e()],2),t._v(" "),o("div",{staticClass:"title"},[o("ElInput",{attrs:{"show-word-limit":!0,autosize:{minRows:1,maxRows:2},type:"textarea",resize:"none",placeholder:"请输入标题（建议30字以内）",maxlength:"40"},model:{value:t.title.text,callback:function(e){t.$set(t.title,"text",e)},expression:"title.text"}})],1),t._v(" "),o("Editor",{attrs:{slug:t.slug,time:t.last_edit_at},on:{save:t.onEditorSave},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),o("ElForm",{staticClass:"footer",attrs:{"label-position":"top","label-width":"80px"}},[o("ElFormItem",{attrs:{label:"选择分区"}},[o("AreaPicker",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"选择话题"}},[o("TopicPicker",{model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"选择专栏"}},[o("NotebookPicker",{model:{value:t.notebook,callback:function(e){t.notebook=e},expression:"notebook"}})],1),t._v(" "),o("ElFormItem",{staticClass:"button-wrap"},[t.slug?[o("ElButton",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionUpdate(!0)}}},[t._v("\n            发布更新\n          ")]),t._v(" "),1===t.visit_type?o("ElButton",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionUpdate(!1)}}},[t._v("\n            存草稿\n          ")]):t._e(),t._v(" "),o("ElButton",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionRedo}},[t._v("\n            撤销修改\n          ")])]:[o("ElButton",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionCreate(!0)}}},[t._v("\n            发表文章\n          ")]),t._v(" "),o("ElButton",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionCreate(!1)}}},[t._v("\n            存草稿\n          ")]),t._v(" "),o("ElButton",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionRedo}},[t._v("\n            删除文章\n          ")])]],2)],1)],1)])},[],!1,null,null,null));e.default=S.exports}}]);