"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[481],{4653:function(e,t,l){l.d(t,{Z:function(){return b}});var o=l(4255),a=l(4740),i=l(6787),n=l(567),s=l(5518),c=l(9598),u=l(1120),r=l(7508);const d={class:"stickyBottom"},m={key:0,class:"stickyDiv"},p={key:1,class:"stickyDiv"};var g={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:t}){const l=e,{t:g}=(0,r.QT)(),v=(0,a.iH)("25"),b=(0,a.iH)(g("stickyBottom.button[1]")),f=(0,a.iH)("primary"),h=(0,a.iH)("30"),S=(0,a.iH)(!1),y=(0,a.iH)(l.guide??!1),k=(0,a.iH)(!1),w=(0,a.iH)(!1),B=sessionStorage.guideIndex,W=sessionStorage.model,U=(0,a.iH)(""),_=(0,a.iH)("");"Ios"!=W&&(U.value="bottom",_.value="0"),U.value="bottom",_.value="0",6==B?(v.value="45",h.value="45",b.value=g("stickyBottom.button[5]"),f.value="success"):S.value=!0;let C=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(C),(0,o.m0)(l,(async()=>{}),{flush:"post"});const D=()=>{if(0==sessionStorage.guideIndex)return(0,s.F)(g("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,l=C[e].split("@")[0];x(l),sessionStorage.guideIndex=e,t("BottomSetup"),O()},V=()=>{t("BottomSubmit"),O()},x=e=>{setTimeout((()=>{u.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},T=()=>{if(6==sessionStorage.guideIndex)return(0,s.F)(g("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,l=C[e].split("@")[0];x(l),sessionStorage.guideIndex=e,t("BottomNext"),O()},z=()=>{t("BottomSearch"),O()},O=()=>{k.value=!0,w.value=!0,setTimeout((()=>{k.value=!1,w.value=!1}),1e3)};return(0,o.aZ)({name:"component-stickyBottom"}),(e,t)=>((0,o.wg)(),(0,o.iD)("div",d,[y.value?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)((0,a.SU)(c.z),{plain:"",type:"primary",size:"small",style:(0,i.j5)("width:"+h.value+"%"),class:"stickyButtom",onClick:D,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,o.Wm)((0,a.SU)(c.z),{type:f.value,size:"small",style:(0,i.j5)("width:"+v.value+"%"),class:"stickyButtom",onClick:V,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(b.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,o.wy)((0,o.Wm)((0,a.SU)(c.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:T,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[n.F8,S.value]])])):((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)((0,a.SU)(c.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:z,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,o.Wm)((0,a.SU)(c.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:V,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const v=g;var b=v},6481:function(e,t,l){l.r(t),l.d(t,{default:function(){return S}});var o=l(4255),a=l(4740),i=l(6787),n=l(1201),s=l(4653),c=l(2634),u=l(8524),r=l(1061),d=l(4295),m=l(6566);const p=(0,o.Uk)(" Kpa "),g=(0,o.Uk)(" °C"),v=(0,o.Uk)(" V ");var b={__name:"TyrepressureDerails",setup(e){const t=(0,a.iH)("胎压 2");return(0,o.aZ)({name:"yunweibao-TyrepressureDerails"}),(0,o.bv)((()=>{})),(e,l)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n.Z,{navTitle:t.value,leftArrow:!1},null,8,["navTitle"]),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(u.b),{title:"启用"},{"right-icon":(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.X),{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=t=>e.checked=t),shape:"square"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(u.b),{title:"预览叠加"},{"right-icon":(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.X),{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=t=>e.checked=t),shape:"square"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.g),{label:"名称",placeholder:"请输入名称","input-align":"right"})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.g),{label:"传感器ID",placeholder:"请输入传感器ID","input-align":"right"})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.g),{label:"最低胎压","label-width":"150",placeholder:"请输入胎压","input-align":"right"},{button:(0,o.w5)((()=>[p])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.g),{label:"最高胎温","label-width":"150",placeholder:"请输入胎温","input-align":"right"},{button:(0,o.w5)((()=>[g])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.g),{label:"电压","label-width":"150",placeholder:"请输入电压","input-align":"right"},{button:(0,o.w5)((()=>[v])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.g),{label:"TPMSMinVolt",placeholder:"请输入","input-align":"right"})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(u.b),{title:"报警输出"},{"right-icon":(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)((0,a.SU)(m.c),{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=t=>e.checked=t),direction:"horizontal"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(3,((e,t)=>(0,o.Wm)((0,a.SU)(r.X),{name:e,shape:"square",key:t,style:{"margin-bottom":"8px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e),1)])),_:2},1032,["name"]))),64))])),_:1},8,["modelValue"])])])),_:1})])),_:1}),(0,o.Wm)(s.Z,{guide:e.guide,onBottomSubmit:e.BottomSubmit,onBottomSearch:e.BottomSearch,onBottomNext:e.BottomNext},null,8,["guide","onBottomSubmit","onBottomSearch","onBottomNext"])],64))}},f=l(3334);const h=(0,f.Z)(b,[["__scopeId","data-v-3d60a970"]]);var S=h},3334:function(e,t){t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[o,a]of t)l[o]=a;return l}},5611:function(e,t,l){l.d(t,{Q:function(){return d},Z:function(){return m}});var o=l(4255),a=l(8314),i=l(8030),n=l(5290),s=l(7044);const[c,u]=(0,a["do"])("checkbox-group"),r={max:i.Or,disabled:Boolean,iconSize:i.Or,direction:String,modelValue:(0,i.Ce)(),checkedColor:String},d=Symbol(c);var m=(0,o.aZ)({name:c,props:r,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{children:a,linkChildren:i}=(0,n.$E)(d),c=e=>t("update:modelValue",e),r=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:t,skipDisabled:l}=e,o=a.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&l?e.checked.value:null!=t?t:!e.checked.value))),i=o.map((e=>e.name));c(i)};return(0,o.YP)((()=>e.modelValue),(e=>t("change",e))),(0,s.F)({toggleAll:r}),(0,n.aM)((()=>e.modelValue)),i({props:e,updateValue:c}),()=>{var t;return(0,o.Wm)("div",{class:u([e.direction])},[null==(t=l.default)?void 0:t.call(l)])}}})},6566:function(e,t,l){l.d(t,{c:function(){return i}});var o=l(5387),a=l(5611);const i=(0,o.n)(a.Z)},8794:function(e,t,l){l.d(t,{Z:function(){return r},m:function(){return u}});var o=l(4255),a=l(4740),i=l(8030),n=l(8577),s=l(4089),c=l(5400);const u={name:i.Vg,shape:(0,i.SQ)("round"),disabled:Boolean,iconSize:i.Or,modelValue:i.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var r=(0,o.aZ)({props:(0,n.l7)({},u,{bem:(0,i.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:i.J5}),emits:["click","toggle"],setup(e,{emit:t,slots:l}){const i=(0,a.iH)(),n=t=>{if(e.parent&&e.bindGroup)return e.parent.props[t]},u=(0,o.Fl)((()=>n("disabled")||e.disabled)),r=(0,o.Fl)((()=>n("direction"))),d=(0,o.Fl)((()=>{const t=e.checkedColor||n("checkedColor");if(t&&e.checked&&!u.value)return{borderColor:t,backgroundColor:t}})),m=l=>{const{target:o}=l,a=i.value,n=a===o||(null==a?void 0:a.contains(o));u.value||!n&&e.labelDisabled||t("toggle"),t("click",l)},p=()=>{const{bem:t,shape:a,checked:r}=e,m=e.iconSize||n("iconSize");return(0,o.Wm)("div",{ref:i,class:t("icon",[a,{disabled:u.value,checked:r}]),style:{fontSize:(0,s.Nn)(m)}},[l.icon?l.icon({checked:r,disabled:u.value}):(0,o.Wm)(c.J,{name:"success",style:d.value},null)])},g=()=>{if(l.default)return(0,o.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:u.value}])},[l.default()])};return()=>{const t="left"===e.labelPosition?[g(),p()]:[p(),g()];return(0,o.Wm)("div",{role:e.role,class:e.bem([{disabled:u.value,"label-disabled":e.labelDisabled},r.value]),tabindex:u.value?void 0:0,"aria-checked":e.checked,onClick:m},[t])}}})},1061:function(e,t,l){l.d(t,{X:function(){return b}});var o=l(5387),a=l(4255),i=l(8314),n=l(8577),s=l(8030),c=l(5611),u=l(5290),r=l(7044),d=l(8794);const[m,p]=(0,i["do"])("checkbox"),g=(0,n.l7)({},d.m,{bindGroup:s.J5});var v=(0,a.aZ)({name:m,props:g,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{parent:o}=(0,u.NB)(c.Q),i=t=>{const{name:l}=e,{max:a,modelValue:i}=o.props,n=i.slice();if(t){const t=a&&n.length>=a;t||n.includes(l)||(n.push(l),e.bindGroup&&o.updateValue(n))}else{const t=n.indexOf(l);-1!==t&&(n.splice(t,1),e.bindGroup&&o.updateValue(n))}},s=(0,a.Fl)((()=>o&&e.bindGroup?-1!==o.props.modelValue.indexOf(e.name):!!e.modelValue)),m=(l=!s.value)=>{o&&e.bindGroup?i(l):t("update:modelValue",l)};return(0,a.YP)((()=>e.modelValue),(e=>t("change",e))),(0,r.F)({toggle:m,props:e,checked:s}),(0,u.aM)((()=>e.modelValue)),()=>(0,a.Wm)(d.Z,(0,a.dG)({bem:p,role:"checkbox",parent:o,checked:s.value,onToggle:m},e),(0,n.ei)(l,["default","icon"]))}});const b=(0,o.n)(v)},5518:function(e,t,l){l.d(t,{F:function(){return V}});var o=l(4255),a=l(4740),i=l(8577),n=l(61),s=l(5387),c=l(389),u=l(8314),r=l(8030);let d=0;function m(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var p=l(5400),g=l(1374),v=l(4645);const[b,f]=(0,u["do"])("toast"),h=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],S={icon:String,show:Boolean,type:(0,r.SQ)("text"),overlay:Boolean,message:r.Or,iconSize:r.Or,duration:(0,r.qM)(2e3),position:(0,r.SQ)("middle"),teleport:[String,Object],className:r.Vg,iconPrefix:String,transition:(0,r.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:r.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var y=(0,o.aZ)({name:b,props:S,emits:["update:show"],setup(e,{emit:t}){let l,a=!1;const s=()=>{const t=e.show&&e.forbidClick;a!==t&&(a=t,m(a))},c=e=>t("update:show",e),u=()=>{e.closeOnClick&&c(!1)},r=()=>clearTimeout(l),d=()=>{const{icon:t,type:l,iconSize:a,iconPrefix:i,loadingType:n}=e,s=t||"success"===l||"fail"===l;return s?(0,o.Wm)(p.J,{name:t||l,size:a,class:f("icon"),classPrefix:i},null):"loading"===l?(0,o.Wm)(v.g,{class:f("loading"),size:a,type:n},null):void 0},b=()=>{const{type:t,message:l}=e;if((0,n.Xq)(l)&&""!==l)return"html"===t?(0,o.Wm)("div",{key:0,class:f("text"),innerHTML:String(l)},null):(0,o.Wm)("div",{class:f("text")},[l])};return(0,o.YP)((()=>[e.show,e.forbidClick]),s),(0,o.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{r(),e.show&&e.duration>0&&(l=setTimeout((()=>{c(!1)}),e.duration))})),(0,o.bv)(s),(0,o.Ah)(s),()=>(0,o.Wm)(g.G,(0,o.dG)({class:[f([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:r,"onUpdate:show":c},(0,i.ei)(e,h)),{default:()=>[d(),b()]})}});const k={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let w=[],B=!1,W=(0,i.l7)({},k);const U=new Map;function _(e){return(0,n.Kn)(e)?e:{message:e}}function C(){const{instance:e,unmount:t}=(0,c.H)({setup(){const l=(0,a.iH)(""),{open:i,state:n,close:s,toggle:u}=(0,c.o)(),r=()=>{B&&(w=w.filter((t=>t!==e)),t())},d=()=>{const e={onClosed:r,"onUpdate:show":u};return(0,o.Wm)(y,(0,o.dG)(n,e),null)};return(0,o.YP)(l,(e=>{n.message=e})),(0,o.FN)().render=d,{open:i,clear:s,message:l}}});return e}function D(){if(!w.length||B){const e=C();w.push(e)}return w[w.length-1]}function V(e={}){if(!i._f)return{};const t=D(),l=_(e);return t.open((0,i.l7)({},W,U.get(l.type||W.type),l)),t}const x=e=>t=>V((0,i.l7)({type:e},_(t)));function T(e,t){"string"===typeof e?U.set(e,t):(0,i.l7)(W,e)}V.loading=x("loading"),V.success=x("success"),V.fail=x("fail"),V.clear=e=>{var t;w.length&&(e?(w.forEach((e=>{e.clear()})),w=[]):B?null==(t=w.shift())||t.clear():w[0].clear())},V.setDefaultOptions=T,V.resetDefaultOptions=e=>{"string"===typeof e?U.delete(e):(W=(0,i.l7)({},k),U.clear())},V.allowMultiple=(e=!0)=>{B=e},V.install=e=>{e.use((0,s.n)(y)),e.config.globalProperties.$toast=V}}}]);
//# sourceMappingURL=481.7c93263d.js.map