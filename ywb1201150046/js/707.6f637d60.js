"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[707],{3182:function(e,t,o){o.d(t,{Z:function(){return f}});var l=o(4255),n=o(4740),i=o(6787),a=o(567),s=o(5518),r=o(9598),u=o(1120),c=o(7508);const d={class:"stickyBottom"},v={key:0,class:"stickyDiv"},m={key:1,class:"stickyDiv"};var g={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:t}){const o=e,{t:g}=(0,c.QT)(),p=(0,n.iH)("25"),f=(0,n.iH)(g("stickyBottom.button[1]")),S=(0,n.iH)("primary"),b=(0,n.iH)("30"),y=(0,n.iH)(!1),h=sessionStorage.guideIndex,k=sessionStorage.model,w=(0,n.iH)(""),B=(0,n.iH)("");"Ios"!=k&&(w.value="bottom",B.value="0"),w.value="bottom",B.value="0",6==h?(p.value="45",b.value="45",f.value=g("stickyBottom.button[5]"),S.value="success"):y.value=!0;let C=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(C),console.log(o.guide),(0,l.m0)(o,(async()=>{}),{flush:"post"});const W=(0,n.iH)(o.guide),x=(0,n.iH)(!1),z=(0,n.iH)(!1),O=()=>{if(0==sessionStorage.guideIndex)return(0,s.F)(g("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,o=C[e].split("@")[0];N(o),sessionStorage.guideIndex=e,t("BottomSetup"),H()},D=()=>{t("BottomSubmit"),H()},N=e=>{setTimeout((()=>{u.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},P=()=>{if(6==sessionStorage.guideIndex)return(0,s.F)(g("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,o=C[e].split("@")[0];N(o),sessionStorage.guideIndex=e,t("BottomNext"),H()},_=()=>{t("BottomSearch"),H()},H=()=>{x.value=!0,z.value=!0,setTimeout((()=>{x.value=!1,z.value=!1}),1e3)};return(0,l.aZ)({name:"component-stickyBottom"}),(e,t)=>((0,l.wg)(),(0,l.iD)("div",d,[W.value?((0,l.wg)(),(0,l.iD)("div",v,[(0,l.Wm)((0,n.SU)(r.z),{plain:"",type:"primary",size:"small",style:(0,i.j5)("width:"+b.value+"%"),class:"stickyButtom",onClick:O,disabled:x.value,loading:z.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,l.Wm)((0,n.SU)(r.z),{type:S.value,size:"small",style:(0,i.j5)("width:"+p.value+"%"),class:"stickyButtom",onClick:D,disabled:x.value,loading:z.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(f.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,l.wy)((0,l.Wm)((0,n.SU)(r.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:P,disabled:x.value,loading:z.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[a.F8,y.value]])])):((0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)((0,n.SU)(r.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:_,disabled:x.value,loading:z.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,l.Wm)((0,n.SU)(r.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:D,disabled:x.value,loading:z.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const p=g;var f=p},5707:function(e,t,o){o.r(t),o.d(t,{default:function(){return L}});var l=o(4255),n=o(4740),i=o(1201),a=o(3182),s=o(5518),r=o(2634),u=o(8524),c=o(3783),d=o(1208),v=o(5387),m=o(8314),g=o(8030),p=o(4089),f=o(2810),S=o(5290);const[b,y]=(0,m["do"])("grid"),h={square:Boolean,center:g.J5,border:g.J5,gutter:g.Or,reverse:Boolean,iconSize:g.Or,direction:String,clickable:Boolean,columnNum:(0,g.SI)(4)},k=Symbol(b);var w=(0,l.aZ)({name:b,props:h,setup(e,{slots:t}){const{linkChildren:o}=(0,S.$E)(k);return o({props:e}),()=>{var o;return(0,l.Wm)("div",{style:{paddingLeft:(0,p.Nn)(e.gutter)},class:[y(),{[f.k7]:e.border&&!e.gutter}]},[null==(o=t.default)?void 0:o.call(t)])}}});const B=(0,v.n)(w);var C=o(8577),W=o(6549),x=o(5400),z=o(4094);const[O,D]=(0,m["do"])("grid-item"),N=(0,C.l7)({},W.g2,{dot:Boolean,text:String,icon:String,badge:g.Or,iconColor:String,iconPrefix:String,badgeProps:Object});var P=(0,l.aZ)({name:O,props:N,setup(e,{slots:t}){const{parent:o,index:n}=(0,S.NB)(k),i=(0,W.yj)();if(!o)return void 0;const a=(0,l.Fl)((()=>{const{square:e,gutter:t,columnNum:l}=o.props,i=100/+l+"%",a={flexBasis:i};if(e)a.paddingTop=i;else if(t){const e=(0,p.Nn)(t);a.paddingRight=e,n.value>=l&&(a.marginTop=e)}return a})),s=(0,l.Fl)((()=>{const{square:e,gutter:t}=o.props;if(e&&t){const e=(0,p.Nn)(t);return{right:e,bottom:e,height:"auto"}}})),r=()=>t.icon?(0,l.Wm)(z.C,(0,l.dG)({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?(0,l.Wm)(x.J,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:D("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,u=()=>t.text?t.text():e.text?(0,l.Wm)("span",{class:D("text")},[e.text]):void 0,c=()=>t.default?t.default():[r(),u()];return()=>{const{center:e,border:t,square:n,gutter:r,reverse:u,direction:d,clickable:v}=o.props,m=[D("content",[d,{center:e,square:n,reverse:u,clickable:v,surround:t&&r}]),{[f.T5]:t}];return(0,l.Wm)("div",{class:[D({square:n})],style:a.value},[(0,l.Wm)("div",{role:v?"button":void 0,class:m,style:s.value,tabindex:v?0:void 0,onClick:i},[c()])])}}});const _=(0,v.n)(P);var H=o(8011),I=o(4645),T=o(3539),U=o(6312),V=o(1120),F=o(1928),A=o(7508);const Z=(0,l.Uk)("PAL"),q=(0,l.Uk)("NTSC"),$={class:"images"};var J={__name:"CameraSettings",setup(e){const{t:t}=(0,A.QT)();let o=(0,F.yj)();const v=o.query.guide,m=(0,n.iH)(t("cameraSettings.navTitle")),g=(0,n.iH)(0),p=(0,n.iH)(!1),f=(0,n.iH)([]),S=(0,n.iH)(0),b=(0,n.iH)("1"),y=(0,n.iH)([]),h=(0,n.iH)(""),k=(0,n.iH)([]);(0,l.aZ)({name:"yunweibao-BSD"});const w=(e,t)=>{S.value==f.value.length&&V.Z.push({path:"/CameraInfo",query:{e:e,allCmd:k.value,nowCmd:h.value,index:t}})},C=()=>(S.value=0,(0,s.F)(t("toast[0]")),T.E.ANSend(h.value),!1),W=()=>{var e=[...k.value];console.log(e[1]),e[0]=b.value,e.join(",");var t=[];return e.length>1&&e.forEach(((e,o)=>{if(o>0){var l=e.split(":")[0].split("#")[1];t.push(l)}else t.push(e)})),e=h.value+","+t.toString(),T.E.ANsendSetting(e),!1},x=e=>{var t=e.split(";")[0];console.warn(t);var o=t.split(",").splice(1);k.value=o,g.value=o.length-1,T.E.ANsendSelectPhoto(0),b.value=o[0],f.value=o.slice(1)},z=(e,t,o)=>0==e?(s.F.success(e+S.value),!1):g.value==S.value?(console.warn(y.value.toString()),!1):(y.value[o]=t,S.value++,console.warn("发送通道"+S.value),S.value<f.value.length&&(T.E.ANsendSelectPhoto(S.value),s.F.clear()),void console.warn("获取到图片信息"+t)),O=e=>{-1!==e.indexOf("Success")?s.F.success(t("toast[1]")):s.F.fail(t("toast[2]"))},D=()=>{var e="";if(v){var t=sessionStorage.guideIndex;p.value=!0;var o=JSON.parse(sessionStorage.guide);e=o[t].split("@")}else e=(0,U.Wz)("param").split("@");h.value=e[1],console.log(e[1]),T.E.ANSend(e[1])};D();const N=()=>{let e,t=0;e=setInterval((()=>{t++,10==t&&(clearInterval(e),s.F.clear())}),1e3)};return(0,l.bv)((()=>{window.callJSResult=x,window.callJSResult_Status=O,window.callJSResult_IMG=z,N(),s.F.loading({forbidClick:!0,loadingType:"spinner",duration:0})})),(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i.Z,{navTitle:m.value,leftArrow:!1},null,8,["navTitle"]),(0,l.Wm)((0,n.SU)(r.T),{inset:"",style:{margin:"10px"}},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(u.b),{title:e.$t("cameraSettings.title[0]")},{"right-icon":(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.E),{modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.Y),{name:"0",shape:"square",style:{float:"left","margin-right":"10px"},"icon-size":"15px"},{default:(0,l.w5)((()=>[Z])),_:1}),(0,l.Wm)((0,n.SU)(d.Y),{name:"1",shape:"square","icon-size":"15px"},{default:(0,l.w5)((()=>[q])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"])])),_:1}),(0,l._)("div",$,[(0,l.Wm)((0,n.SU)(B),{gutter:2},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.value,((e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(_),{key:t,onClick:o=>w(e,t)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(H.E),{height:"90",width:"92",src:y.value[t]},{loading:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(I.g),{type:"spinner",size:"20"})])),_:2},1032,["src"])])),_:2},1032,["onClick"])))),128))])),_:1})]),(0,l.Wm)(a.Z,{guide:p.value,onBottomSearch:C,onBottomSubmit:W,onBottomNext:e.BottomNext},null,8,["guide","onBottomNext"])],64))}};const E=J;var L=E},2634:function(e,t,o){o.d(t,{T:function(){return v}});var l=o(5387),n=o(4255),i=o(8314),a=o(8030),s=o(2810);const[r,u]=(0,i["do"])("cell-group"),c={title:String,inset:Boolean,border:a.J5};var d=(0,n.aZ)({name:r,inheritAttrs:!1,props:c,setup(e,{slots:t,attrs:o}){const l=()=>{var l;return(0,n.Wm)("div",(0,n.dG)({class:[u({inset:e.inset}),{[s.r5]:e.border&&!e.inset}]},o),[null==(l=t.default)?void 0:l.call(t)])},i=()=>(0,n.Wm)("div",{class:u("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?(0,n.Wm)(n.HY,null,[i(),l()]):l()}});const v=(0,l.n)(d)},8597:function(e,t,o){o.d(t,{Z:function(){return g},x:function(){return v}});var l=o(4255),n=o(8314),i=o(8030),a=o(8577),s=o(61),r=o(6549),u=o(5400);const[c,d]=(0,n["do"])("cell"),v={icon:String,size:String,title:i.Or,value:i.Or,label:i.Or,center:Boolean,isLink:Boolean,border:i.J5,required:Boolean,iconPrefix:String,valueClass:i.Vg,labelClass:i.Vg,titleClass:i.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},m=(0,a.l7)({},v,r.g2);var g=(0,l.aZ)({name:c,props:m,setup(e,{slots:t}){const o=(0,r.yj)(),n=()=>{const o=t.label||(0,s.Xq)(e.label);if(o)return(0,l.Wm)("div",{class:[d("label"),e.labelClass]},[t.label?t.label():e.label])},i=()=>{if(t.title||(0,s.Xq)(e.title))return(0,l.Wm)("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():(0,l.Wm)("span",null,[e.title]),n()])},a=()=>{const o=t.value||t.default,n=o||(0,s.Xq)(e.value);if(n){const n=t.title||(0,s.Xq)(e.title);return(0,l.Wm)("div",{class:[d("value",{alone:!n}),e.valueClass]},[o?o():(0,l.Wm)("span",null,[e.value])])}},c=()=>t.icon?t.icon():e.icon?(0,l.Wm)(u.J,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,v=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,l.Wm)(u.J,{name:t,class:d("right-icon")},null)}};return()=>{var n,s;const{size:r,center:u,border:m,isLink:g,required:p}=e,f=null!=(n=e.clickable)?n:g,S={center:u,required:p,clickable:f,borderless:!m};return r&&(S[r]=!!r),(0,l.Wm)("div",{class:d(S),role:f?"button":void 0,tabindex:f?0:void 0,onClick:o},[c(),i(),a(),v(),null==(s=t.extra)?void 0:s.call(t)])}}})},8524:function(e,t,o){o.d(t,{b:function(){return i}});var l=o(5387),n=o(8597);const i=(0,l.n)(n.Z)},8794:function(e,t,o){o.d(t,{Z:function(){return c},m:function(){return u}});var l=o(4255),n=o(4740),i=o(8030),a=o(8577),s=o(4089),r=o(5400);const u={name:i.Vg,shape:(0,i.SQ)("round"),disabled:Boolean,iconSize:i.Or,modelValue:i.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var c=(0,l.aZ)({props:(0,a.l7)({},u,{bem:(0,i.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:i.J5}),emits:["click","toggle"],setup(e,{emit:t,slots:o}){const i=(0,n.iH)(),a=t=>{if(e.parent&&e.bindGroup)return e.parent.props[t]},u=(0,l.Fl)((()=>a("disabled")||e.disabled)),c=(0,l.Fl)((()=>a("direction"))),d=(0,l.Fl)((()=>{const t=e.checkedColor||a("checkedColor");if(t&&e.checked&&!u.value)return{borderColor:t,backgroundColor:t}})),v=o=>{const{target:l}=o,n=i.value,a=n===l||(null==n?void 0:n.contains(l));u.value||!a&&e.labelDisabled||t("toggle"),t("click",o)},m=()=>{const{bem:t,shape:n,checked:c}=e,v=e.iconSize||a("iconSize");return(0,l.Wm)("div",{ref:i,class:t("icon",[n,{disabled:u.value,checked:c}]),style:{fontSize:(0,s.Nn)(v)}},[o.icon?o.icon({checked:c,disabled:u.value}):(0,l.Wm)(r.J,{name:"success",style:d.value},null)])},g=()=>{if(o.default)return(0,l.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:u.value}])},[o.default()])};return()=>{const t="left"===e.labelPosition?[g(),m()]:[m(),g()];return(0,l.Wm)("div",{role:e.role,class:e.bem([{disabled:u.value,"label-disabled":e.labelDisabled},c.value]),tabindex:u.value?void 0:0,"aria-checked":e.checked,onClick:v},[t])}}})},8011:function(e,t,o){o.d(t,{E:function(){return f}});var l=o(5387),n=o(4255),i=o(4740),a=o(8314),s=o(8030),r=o(4089),u=o(61),c=o(8577),d=o(5400);const[v,m]=(0,a["do"])("image"),g={src:String,alt:String,fit:String,position:String,round:Boolean,width:s.Or,height:s.Or,radius:s.Or,lazyLoad:Boolean,iconSize:s.Or,showError:s.J5,errorIcon:(0,s.SQ)("photo-fail"),iconPrefix:String,showLoading:s.J5,loadingIcon:(0,s.SQ)("photo")};var p=(0,n.aZ)({name:v,props:g,emits:["load","error"],setup(e,{emit:t,slots:o}){const l=(0,i.iH)(!1),a=(0,i.iH)(!0),s=(0,i.iH)(),{$Lazyload:v}=(0,n.FN)().proxy,g=(0,n.Fl)((()=>{const t={width:(0,r.Nn)(e.width),height:(0,r.Nn)(e.height)};return(0,u.Xq)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,r.Nn)(e.radius)),t}));(0,n.YP)((()=>e.src),(()=>{l.value=!1,a.value=!0}));const p=e=>{a.value=!1,t("load",e)},f=e=>{l.value=!0,a.value=!1,t("error",e)},S=(t,o,l)=>l?l():(0,n.Wm)(d.J,{name:t,size:e.iconSize,class:o,classPrefix:e.iconPrefix},null),b=()=>a.value&&e.showLoading?(0,n.Wm)("div",{class:m("loading")},[S(e.loadingIcon,m("loading-icon"),o.loading)]):l.value&&e.showError?(0,n.Wm)("div",{class:m("error")},[S(e.errorIcon,m("error-icon"),o.error)]):void 0,y=()=>{if(l.value||!e.src)return;const t={alt:e.alt,class:m("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?(0,n.wy)((0,n.Wm)("img",(0,n.dG)({ref:s},t),null),[[(0,n.Q2)("lazy"),e.src]]):(0,n.Wm)("img",(0,n.dG)({src:e.src,onLoad:p,onError:f},t),null)},h=({el:e})=>{const t=()=>{e===s.value&&a.value&&p()};s.value?t():(0,n.Y3)(t)},k=({el:e})=>{e!==s.value||l.value||f()};return v&&c._f&&(v.$on("loaded",h),v.$on("error",k),(0,n.Jd)((()=>{v.$off("loaded",h),v.$off("error",k)}))),()=>{var t;return(0,n.Wm)("div",{class:m({round:e.round}),style:g.value},[y(),b(),null==(t=o.default)?void 0:t.call(o)])}}});const f=(0,l.n)(p)},24:function(e,t,o){o.d(t,{Z:function(){return d},x:function(){return c}});var l=o(4255),n=o(8314),i=o(8030),a=o(5290);const[s,r]=(0,n["do"])("radio-group"),u={disabled:Boolean,iconSize:i.Or,direction:String,modelValue:i.Vg,checkedColor:String},c=Symbol(s);var d=(0,l.aZ)({name:s,props:u,emits:["change","update:modelValue"],setup(e,{emit:t,slots:o}){const{linkChildren:n}=(0,a.$E)(c),i=e=>t("update:modelValue",e);return(0,l.YP)((()=>e.modelValue),(e=>t("change",e))),n({props:e,updateValue:i}),(0,a.aM)((()=>e.modelValue)),()=>{var t;return(0,l.Wm)("div",{class:r([e.direction]),role:"radiogroup"},[null==(t=o.default)?void 0:t.call(o)])}}})},3783:function(e,t,o){o.d(t,{E:function(){return i}});var l=o(5387),n=o(24);const i=(0,l.n)(n.Z)},1208:function(e,t,o){o.d(t,{Y:function(){return m}});var l=o(5387),n=o(4255),i=o(8314),a=o(8577),s=o(24),r=o(5290),u=o(8794);const[c,d]=(0,i["do"])("radio");var v=(0,n.aZ)({name:c,props:u.m,emits:["update:modelValue"],setup(e,{emit:t,slots:o}){const{parent:l}=(0,r.NB)(s.x),i=()=>{const t=l?l.props.modelValue:e.modelValue;return t===e.name},c=()=>{l?l.updateValue(e.name):t("update:modelValue",e.name)};return()=>(0,n.Wm)(u.Z,(0,n.dG)({bem:d,role:"radio",parent:l,checked:i(),onToggle:c},e),(0,a.ei)(o,["default","icon"]))}});const m=(0,l.n)(v)},5518:function(e,t,o){o.d(t,{F:function(){return D}});var l=o(4255),n=o(4740),i=o(8577),a=o(61),s=o(5387),r=o(389),u=o(8314),c=o(8030);let d=0;function v(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var m=o(5400),g=o(1374),p=o(4645);const[f,S]=(0,u["do"])("toast"),b=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],y={icon:String,show:Boolean,type:(0,c.SQ)("text"),overlay:Boolean,message:c.Or,iconSize:c.Or,duration:(0,c.qM)(2e3),position:(0,c.SQ)("middle"),teleport:[String,Object],className:c.Vg,iconPrefix:String,transition:(0,c.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:c.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var h=(0,l.aZ)({name:f,props:y,emits:["update:show"],setup(e,{emit:t}){let o,n=!1;const s=()=>{const t=e.show&&e.forbidClick;n!==t&&(n=t,v(n))},r=e=>t("update:show",e),u=()=>{e.closeOnClick&&r(!1)},c=()=>clearTimeout(o),d=()=>{const{icon:t,type:o,iconSize:n,iconPrefix:i,loadingType:a}=e,s=t||"success"===o||"fail"===o;return s?(0,l.Wm)(m.J,{name:t||o,size:n,class:S("icon"),classPrefix:i},null):"loading"===o?(0,l.Wm)(p.g,{class:S("loading"),size:n,type:a},null):void 0},f=()=>{const{type:t,message:o}=e;if((0,a.Xq)(o)&&""!==o)return"html"===t?(0,l.Wm)("div",{key:0,class:S("text"),innerHTML:String(o)},null):(0,l.Wm)("div",{class:S("text")},[o])};return(0,l.YP)((()=>[e.show,e.forbidClick]),s),(0,l.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{c(),e.show&&e.duration>0&&(o=setTimeout((()=>{r(!1)}),e.duration))})),(0,l.bv)(s),(0,l.Ah)(s),()=>(0,l.Wm)(g.G,(0,l.dG)({class:[S([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:c,"onUpdate:show":r},(0,i.ei)(e,b)),{default:()=>[d(),f()]})}});const k={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let w=[],B=!1,C=(0,i.l7)({},k);const W=new Map;function x(e){return(0,a.Kn)(e)?e:{message:e}}function z(){const{instance:e,unmount:t}=(0,r.H)({setup(){const o=(0,n.iH)(""),{open:i,state:a,close:s,toggle:u}=(0,r.o)(),c=()=>{B&&(w=w.filter((t=>t!==e)),t())},d=()=>{const e={onClosed:c,"onUpdate:show":u};return(0,l.Wm)(h,(0,l.dG)(a,e),null)};return(0,l.YP)(o,(e=>{a.message=e})),(0,l.FN)().render=d,{open:i,clear:s,message:o}}});return e}function O(){if(!w.length||B){const e=z();w.push(e)}return w[w.length-1]}function D(e={}){if(!i._f)return{};const t=O(),o=x(e);return t.open((0,i.l7)({},C,W.get(o.type||C.type),o)),t}const N=e=>t=>D((0,i.l7)({type:e},x(t)));function P(e,t){"string"===typeof e?W.set(e,t):(0,i.l7)(C,e)}D.loading=N("loading"),D.success=N("success"),D.fail=N("fail"),D.clear=e=>{var t;w.length&&(e?(w.forEach((e=>{e.clear()})),w=[]):B?null==(t=w.shift())||t.clear():w[0].clear())},D.setDefaultOptions=P,D.resetDefaultOptions=e=>{"string"===typeof e?W.delete(e):(C=(0,i.l7)({},k),W.clear())},D.allowMultiple=(e=!0)=>{B=e},D.install=e=>{e.use((0,s.n)(h)),e.config.globalProperties.$toast=D}}}]);
//# sourceMappingURL=707.6f637d60.js.map