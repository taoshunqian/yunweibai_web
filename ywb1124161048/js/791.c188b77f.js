"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[791],{3182:function(e,l,t){t.d(l,{Z:function(){return b}});var o=t(4255),a=t(4740),n=t(6787),i=t(567),s=t(5518),u=t(9598),r=t(1120),d=t(7508);const c={class:"stickyBottom"},m={key:0,class:"stickyDiv"},p={key:1,class:"stickyDiv"};var g={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:l}){const t=e,{t:g}=(0,d.QT)(),v=(0,a.iH)("25"),b=(0,a.iH)(g("stickyBottom.button[1]")),y=(0,a.iH)("primary"),f=(0,a.iH)("30"),k=(0,a.iH)(!1),S=sessionStorage.guideIndex,h=sessionStorage.model,w=(0,a.iH)(""),W=(0,a.iH)("");"Ios"!=h&&(w.value="bottom",W.value="0"),w.value="bottom",W.value="0",6==S?(v.value="45",f.value="45",b.value=g("stickyBottom.button[5]"),y.value="success"):k.value=!0;let B=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(B),console.log(t.guide),(0,o.m0)(t,(async()=>{}),{flush:"post"});const x=(0,a.iH)(t.guide),C=(0,a.iH)(!1),V=(0,a.iH)(!1),z=()=>{if(0==sessionStorage.guideIndex)return(0,s.F)(g("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,t=B[e].split("@")[0];_(t),sessionStorage.guideIndex=e,l("BottomSetup"),T()},U=()=>{l("BottomSubmit"),T()},_=e=>{setTimeout((()=>{r.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},O=()=>{if(6==sessionStorage.guideIndex)return(0,s.F)(g("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,t=B[e].split("@")[0];_(t),sessionStorage.guideIndex=e,l("BottomNext"),T()},D=()=>{l("BottomSearch"),T()},T=()=>{C.value=!0,V.value=!0,setTimeout((()=>{C.value=!1,V.value=!1}),1e3)};return(0,o.aZ)({name:"component-stickyBottom"}),(e,l)=>((0,o.wg)(),(0,o.iD)("div",c,[x.value?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)((0,a.SU)(u.z),{plain:"",type:"primary",size:"small",style:(0,n.j5)("width:"+f.value+"%"),class:"stickyButtom",onClick:z,disabled:C.value,loading:V.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,o.Wm)((0,a.SU)(u.z),{type:y.value,size:"small",style:(0,n.j5)("width:"+v.value+"%"),class:"stickyButtom",onClick:U,disabled:C.value,loading:V.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(b.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,o.wy)((0,o.Wm)((0,a.SU)(u.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:O,disabled:C.value,loading:V.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[i.F8,k.value]])])):((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)((0,a.SU)(u.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:D,disabled:C.value,loading:V.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,o.Wm)((0,a.SU)(u.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:U,disabled:C.value,loading:V.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const v=g;var b=v},2791:function(e,l,t){t.r(l),t.d(l,{default:function(){return w}});var o=t(4255),a=t(4740),n=t(6787),i=t(1201),s=t(3182),u=t(5518),r=t(2634),d=t(8524),c=t(1061),m=t(4295),p=t(9598),g=t(3539),v=t(6312),b=t(1928),y=t(7508);const f={style:{float:"left","margin-right":"10px"}},k={class:"van-ellipsis fontSize"};var S={__name:"3G4G",setup(e){const{t:l}=(0,y.QT)();let t=(0,b.yj)();const S=t.query.guide,h=(0,a.iH)(l("netWork3g4g.navTitle")),w=(0,a.iH)([]),W=(0,a.iH)(!1),B=(0,a.iH)(!0),x=(0,a.iH)(""),C=(0,a.iH)([]);var V=["Banana","Orange","Apple","Mango"];V.splice(0,1,1),console.log(V);const z=()=>{w.value.splice(1,3),w.value.splice(1,1,...C.value),U()},U=()=>{w.value.splice(0,1,+B.value);var e=x.value+","+w.value.join(",");return g.E.ANsendSetting(e),!1},_=()=>{(0,u.F)(l("toast[0]")),g.E.ANSend(x.value)};(0,o.aZ)({name:"yunweibao-SettingsIP"});const O=e=>{var l=e.split(";")[0],t=l.split(",").splice(1);console.log("返回数据 "+t),w.value=t[2].split("*"),C.value=t[0].split("*"),B.value=!!+w.value[0]},D=e=>{-1!==e.indexOf("Success")?u.F.success(l("toast[1]")):u.F.fail(l("toast[2]"))},T=()=>{var e="";if(S){var l=sessionStorage.guideIndex;W.value=!0;var t=JSON.parse(sessionStorage.guide);e=t[l].split("@")}else e=(0,v.Wz)("param").split("@");console.log(x.value),x.value=e[1],g.E.ANSend(e[1])};return T(),(0,o.bv)((()=>{window.callJSResult=O,window.callJSResult_Status=D})),(e,l)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i.Z,{navTitle:h.value,leftArrow:!1},null,8,["navTitle"]),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"10px"},class:"cellGroup"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.b),null,{title:(0,o.w5)((()=>[(0,o._)("label",f,(0,n.zw)(e.$t("netWork3g4g.label[0]")),1),(0,o.Wm)((0,a.SU)(c.X),{modelValue:B.value,"onUpdate:modelValue":l[0]||(l[0]=e=>B.value=e),shape:"square","icon-size":"15px",style:{"margin-top":"5px"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:e.$t("netWork3g4g.label[1]"),type:"tel",placeholder:e.$t("netWork3g4g.placeholder[0]"),"label-width":200,"input-align":"right",modelValue:w.value[1],"onUpdate:modelValue":l[1]||(l[1]=e=>w.value[1]=e),autosize:"",maxlength:"12"},null,8,["label","placeholder","modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:e.$t("netWork3g4g.label[2]"),placeholder:e.$t("netWork3g4g.placeholder[1]"),"input-align":"right",modelValue:w.value[2],"onUpdate:modelValue":l[2]||(l[2]=e=>w.value[2]=e),autosize:""},null,8,["label","placeholder","modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:e.$t("netWork3g4g.label[3]"),placeholder:e.$t("netWork3g4g.placeholder[2]"),"input-align":"right",modelValue:w.value[3],"onUpdate:modelValue":l[3]||(l[3]=e=>w.value[3]=e),autosize:""},null,8,["label","placeholder","modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:e.$t("netWork3g4g.label[4]"),placeholder:e.$t("netWork3g4g.placeholder[3]"),"input-align":"right",modelValue:w.value[4],"onUpdate:modelValue":l[4]||(l[4]=e=>w.value[4]=e),autosize:""},null,8,["label","placeholder","modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:"MTU",placeholder:e.$t("netWork3g4g.placeholder[4]"),"input-align":"right",modelValue:w.value[5],"onUpdate:modelValue":l[5]||(l[5]=e=>w.value[5]=e),autosize:""},null,8,["placeholder","modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(r.T),{inset:"",style:{margin:"20px",height:"40px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(p.z),{type:"primary",style:{width:"100%"},onClick:z},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("netWork3g4g.button[0]")),1)])),_:1})])),_:1}),(0,o._)("div",k,(0,n.zw)(e.$t("netWork3g4g.note")),1),((0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o.Wm)(s.Z,{guide:W.value,onBottomSubmit:U,onBottomSearch:_,onBottomNext:e.BottomNext},null,8,["guide","onBottomNext"])],1024))],64))}};const h=S;var w=h},5611:function(e,l,t){t.d(l,{Q:function(){return c},Z:function(){return m}});var o=t(4255),a=t(8314),n=t(8030),i=t(5290),s=t(7044);const[u,r]=(0,a["do"])("checkbox-group"),d={max:n.Or,disabled:Boolean,iconSize:n.Or,direction:String,modelValue:(0,n.Ce)(),checkedColor:String},c=Symbol(u);var m=(0,o.aZ)({name:u,props:d,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{children:a,linkChildren:n}=(0,i.$E)(c),u=e=>l("update:modelValue",e),d=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:l,skipDisabled:t}=e,o=a.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&t?e.checked.value:null!=l?l:!e.checked.value))),n=o.map((e=>e.name));u(n)};return(0,o.YP)((()=>e.modelValue),(e=>l("change",e))),(0,s.F)({toggleAll:d}),(0,i.aM)((()=>e.modelValue)),n({props:e,updateValue:u}),()=>{var l;return(0,o.Wm)("div",{class:r([e.direction])},[null==(l=t.default)?void 0:l.call(t)])}}})},8794:function(e,l,t){t.d(l,{Z:function(){return d},m:function(){return r}});var o=t(4255),a=t(4740),n=t(8030),i=t(8577),s=t(4089),u=t(5400);const r={name:n.Vg,shape:(0,n.SQ)("round"),disabled:Boolean,iconSize:n.Or,modelValue:n.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var d=(0,o.aZ)({props:(0,i.l7)({},r,{bem:(0,n.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:n.J5}),emits:["click","toggle"],setup(e,{emit:l,slots:t}){const n=(0,a.iH)(),i=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},r=(0,o.Fl)((()=>i("disabled")||e.disabled)),d=(0,o.Fl)((()=>i("direction"))),c=(0,o.Fl)((()=>{const l=e.checkedColor||i("checkedColor");if(l&&e.checked&&!r.value)return{borderColor:l,backgroundColor:l}})),m=t=>{const{target:o}=t,a=n.value,i=a===o||(null==a?void 0:a.contains(o));r.value||!i&&e.labelDisabled||l("toggle"),l("click",t)},p=()=>{const{bem:l,shape:a,checked:d}=e,m=e.iconSize||i("iconSize");return(0,o.Wm)("div",{ref:n,class:l("icon",[a,{disabled:r.value,checked:d}]),style:{fontSize:(0,s.Nn)(m)}},[t.icon?t.icon({checked:d,disabled:r.value}):(0,o.Wm)(u.J,{name:"success",style:c.value},null)])},g=()=>{if(t.default)return(0,o.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:r.value}])},[t.default()])};return()=>{const l="left"===e.labelPosition?[g(),p()]:[p(),g()];return(0,o.Wm)("div",{role:e.role,class:e.bem([{disabled:r.value,"label-disabled":e.labelDisabled},d.value]),tabindex:r.value?void 0:0,"aria-checked":e.checked,onClick:m},[l])}}})},1061:function(e,l,t){t.d(l,{X:function(){return b}});var o=t(5387),a=t(4255),n=t(8314),i=t(8577),s=t(8030),u=t(5611),r=t(5290),d=t(7044),c=t(8794);const[m,p]=(0,n["do"])("checkbox"),g=(0,i.l7)({},c.m,{bindGroup:s.J5});var v=(0,a.aZ)({name:m,props:g,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{parent:o}=(0,r.NB)(u.Q),n=l=>{const{name:t}=e,{max:a,modelValue:n}=o.props,i=n.slice();if(l){const l=a&&i.length>=a;l||i.includes(t)||(i.push(t),e.bindGroup&&o.updateValue(i))}else{const l=i.indexOf(t);-1!==l&&(i.splice(l,1),e.bindGroup&&o.updateValue(i))}},s=(0,a.Fl)((()=>o&&e.bindGroup?-1!==o.props.modelValue.indexOf(e.name):!!e.modelValue)),m=(t=!s.value)=>{o&&e.bindGroup?n(t):l("update:modelValue",t)};return(0,a.YP)((()=>e.modelValue),(e=>l("change",e))),(0,d.F)({toggle:m,props:e,checked:s}),(0,r.aM)((()=>e.modelValue)),()=>(0,a.Wm)(c.Z,(0,a.dG)({bem:p,role:"checkbox",parent:o,checked:s.value,onToggle:m},e),(0,i.ei)(t,["default","icon"]))}});const b=(0,o.n)(v)},5518:function(e,l,t){t.d(l,{F:function(){return U}});var o=t(4255),a=t(4740),n=t(8577),i=t(61),s=t(5387),u=t(389),r=t(8314),d=t(8030);let c=0;function m(e){e?(c||document.body.classList.add("van-toast--unclickable"),c++):c&&(c--,c||document.body.classList.remove("van-toast--unclickable"))}var p=t(5400),g=t(1374),v=t(4645);const[b,y]=(0,r["do"])("toast"),f=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],k={icon:String,show:Boolean,type:(0,d.SQ)("text"),overlay:Boolean,message:d.Or,iconSize:d.Or,duration:(0,d.qM)(2e3),position:(0,d.SQ)("middle"),teleport:[String,Object],className:d.Vg,iconPrefix:String,transition:(0,d.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:d.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var S=(0,o.aZ)({name:b,props:k,emits:["update:show"],setup(e,{emit:l}){let t,a=!1;const s=()=>{const l=e.show&&e.forbidClick;a!==l&&(a=l,m(a))},u=e=>l("update:show",e),r=()=>{e.closeOnClick&&u(!1)},d=()=>clearTimeout(t),c=()=>{const{icon:l,type:t,iconSize:a,iconPrefix:n,loadingType:i}=e,s=l||"success"===t||"fail"===t;return s?(0,o.Wm)(p.J,{name:l||t,size:a,class:y("icon"),classPrefix:n},null):"loading"===t?(0,o.Wm)(v.g,{class:y("loading"),size:a,type:i},null):void 0},b=()=>{const{type:l,message:t}=e;if((0,i.Xq)(t)&&""!==t)return"html"===l?(0,o.Wm)("div",{key:0,class:y("text"),innerHTML:String(t)},null):(0,o.Wm)("div",{class:y("text")},[t])};return(0,o.YP)((()=>[e.show,e.forbidClick]),s),(0,o.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{d(),e.show&&e.duration>0&&(t=setTimeout((()=>{u(!1)}),e.duration))})),(0,o.bv)(s),(0,o.Ah)(s),()=>(0,o.Wm)(g.G,(0,o.dG)({class:[y([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:r,onClosed:d,"onUpdate:show":u},(0,n.ei)(e,f)),{default:()=>[c(),b()]})}});const h={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let w=[],W=!1,B=(0,n.l7)({},h);const x=new Map;function C(e){return(0,i.Kn)(e)?e:{message:e}}function V(){const{instance:e,unmount:l}=(0,u.H)({setup(){const t=(0,a.iH)(""),{open:n,state:i,close:s,toggle:r}=(0,u.o)(),d=()=>{W&&(w=w.filter((l=>l!==e)),l())},c=()=>{const e={onClosed:d,"onUpdate:show":r};return(0,o.Wm)(S,(0,o.dG)(i,e),null)};return(0,o.YP)(t,(e=>{i.message=e})),(0,o.FN)().render=c,{open:n,clear:s,message:t}}});return e}function z(){if(!w.length||W){const e=V();w.push(e)}return w[w.length-1]}function U(e={}){if(!n._f)return{};const l=z(),t=C(e);return l.open((0,n.l7)({},B,x.get(t.type||B.type),t)),l}const _=e=>l=>U((0,n.l7)({type:e},C(l)));function O(e,l){"string"===typeof e?x.set(e,l):(0,n.l7)(B,e)}U.loading=_("loading"),U.success=_("success"),U.fail=_("fail"),U.clear=e=>{var l;w.length&&(e?(w.forEach((e=>{e.clear()})),w=[]):W?null==(l=w.shift())||l.clear():w[0].clear())},U.setDefaultOptions=O,U.resetDefaultOptions=e=>{"string"===typeof e?x.delete(e):(B=(0,n.l7)({},h),x.clear())},U.allowMultiple=(e=!0)=>{W=e},U.install=e=>{e.use((0,s.n)(S)),e.config.globalProperties.$toast=U}}}]);
//# sourceMappingURL=791.c188b77f.js.map