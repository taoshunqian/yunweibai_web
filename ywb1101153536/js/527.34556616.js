"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[527],{7527:function(e,l,t){t.r(l),t.d(l,{default:function(){return K}});var a=t(4255),i=t(4740),n=t(1201),o=t(6787),d=t(1374),c=t(5387),s=t(8314),r=t(8030),u=t(4089),m=t(5400),p=t(5290);const[b,v]=(0,s["do"])("sidebar"),h=Symbol(b),g={modelValue:(0,r.SI)(0)};var k=(0,a.aZ)({name:b,props:g,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{linkChildren:i}=(0,p.$E)(h),n=()=>+e.modelValue,o=e=>{e!==n()&&(l("update:modelValue",e),l("change",e))};return i({getActive:n,setActive:o}),()=>{var e;return(0,a.Wm)("div",{role:"tablist",class:v()},[null==(e=t.default)?void 0:e.call(t)])}}});const f=(0,c.n)(k);var S=t(8577),y=t(6549),x=t(4094);const[w,W]=(0,s["do"])("sidebar-item"),U=(0,S.l7)({},y.g2,{dot:Boolean,title:String,badge:r.Or,disabled:Boolean,badgeProps:Object});var _=(0,a.aZ)({name:w,props:U,emits:["click"],setup(e,{emit:l,slots:t}){const i=(0,y.yj)(),{parent:n,index:o}=(0,p.NB)(h);if(!n)return void 0;const d=()=>{e.disabled||(l("click",o.value),n.setActive(o.value),i())};return()=>{const{dot:l,badge:i,title:c,disabled:s}=e,r=o.value===n.getActive();return(0,a.Wm)("div",{role:"tab",class:W({select:r,disabled:s}),tabindex:s?void 0:0,"aria-selected":r,onClick:d},[(0,a.Wm)(x.C,(0,a.dG)({dot:l,class:W("text"),content:i},e.badgeProps),{default:()=>[t.title?t.title():c]})])}}});const C=(0,c.n)(_);const[V,I]=(0,s["do"])("tree-select"),A={max:(0,r.SI)(1/0),items:(0,r.Ce)(),height:(0,r.SI)(300),selectedIcon:(0,r.SQ)("success"),mainActiveIndex:(0,r.SI)(0),activeId:{type:[Number,String,Array],default:0}};var P=(0,a.aZ)({name:V,props:A,emits:["click-nav","click-item","update:activeId","update:mainActiveIndex"],setup(e,{emit:l,slots:t}){const i=l=>Array.isArray(e.activeId)?e.activeId.includes(l):e.activeId===l,n=t=>{const n=()=>{if(t.disabled)return;let a;if(Array.isArray(e.activeId)){a=e.activeId.slice();const l=a.indexOf(t.id);-1!==l?a.splice(l,1):a.length<e.max&&a.push(t.id)}else a=t.id;l("update:activeId",a),l("click-item",t)};return(0,a.Wm)("div",{key:t.id,class:["van-ellipsis",I("item",{active:i(t.id),disabled:t.disabled})],onClick:n},[t.text,i(t.id)&&(0,a.Wm)(m.J,{name:e.selectedIcon,class:I("selected")},null)])},o=e=>{l("update:mainActiveIndex",e)},d=e=>l("click-nav",e),c=()=>{const l=e.items.map((e=>(0,a.Wm)(C,{dot:e.dot,title:e.text,badge:e.badge,class:[I("nav-item"),e.className],disabled:e.disabled,onClick:d},null)));return(0,a.Wm)(f,{class:I("nav"),modelValue:e.mainActiveIndex,onChange:o},{default:()=>[l]})},s=()=>{if(t.content)return t.content();const l=e.items[+e.mainActiveIndex]||{};return l.children?l.children.map(n):void 0};return()=>(0,a.Wm)("div",{class:I(),style:{height:(0,u.Nn)(e.height)}},[c(),(0,a.Wm)("div",{class:I("content")},[s()])])}});const B=(0,c.n)(P);var G=t(9598);const Z=(0,a._)("p",null,null,-1),z={style:{"padding-bottom":"10px"}};var O={__name:"PopupCheckbox",props:["showPicker","item"],emits:["clear","submit"],setup(e,{emit:l}){const t=e,n=(0,i.iH)(t.showPicker);(0,a.YP)(t,(async e=>{n.value=e.showPicker}));const c=(0,i.iH)([]),s=(0,i.iH)(0),r=t.item??[],u=()=>{l("clear")},m=()=>{l("submit",c)};return(0,a.aZ)({name:"yunweibao-PopupCheckbox"}),(e,l)=>((0,a.wg)(),(0,a.j4)((0,i.SU)(d.G),{round:"",show:n.value,"onUpdate:show":l[2]||(l[2]=e=>n.value=e),position:"bottom",closeOnClickOverlay:!1,overlay:!0},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(B),{"active-id":c.value,"onUpdate:active-id":l[0]||(l[0]=e=>c.value=e),"main-active-index":s.value,"onUpdate:main-active-index":l[1]||(l[1]=e=>s.value=e),items:(0,i.SU)(r)},null,8,["active-id","main-active-index","items"]),(0,a.WI)(e.$slots,"default"),Z,(0,a._)("div",z,[(0,a.Wm)((0,i.SU)(G.z),{plain:"",type:"primary",style:{width:"45%","margin-left":"3%"},onClick:u},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("popupCheckbox.button[0]")),1)])),_:1}),(0,a.Wm)((0,i.SU)(G.z),{type:"primary",style:{width:"45%","margin-left":"3%"},onClick:m},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("popupCheckbox.button[1]")),1)])),_:1})])])),_:3},8,["show"]))}};const T=O;var D=T,H=t(2634),F=t(8524),N=t(4295),$=t(1061);const j=(0,a._)("label",null,"cm",-1),J=(0,a.Uk)("开启"),Q=(0,a._)("label",null,"cm",-1),Y=(0,a._)("label",null,"cm",-1),E=(0,a._)("label",null,"cm",-1),M=(0,a.Uk)("设置");var X={__name:"BSD",setup(e){const l=(0,i.iH)("BSD"),t=(0,i.iH)(""),o=(0,i.iH)(!1),d=[{text:"摄像头类型",children:[{text:"BSD",id:1},{text:"ADC",id:2}]}],c=()=>{o.value=!0},s=()=>{o.value=!1},r=e=>{console.log(e),o.value=!1};return(0,a.aZ)({name:"yunweibao-BSD"}),(e,u)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n.Z,{navTitle:l.value,leftArrow:!1},null,8,["navTitle"]),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"},class:"cellGroup"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(F.b),{title:"摄像头类型","is-link":"",value:"请选择摄像头类型",onClick:c})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(N.g),{label:"安装位置",placeholder:"请选择安装位置","input-align":"right"})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(N.g),{label:"安装高度",placeholder:"请输入安装高度",type:"number","input-align":"right"},{button:(0,a.w5)((()=>[j])),_:1})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(F.b),{title:"关联右转"},{"right-icon":(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)($.X),{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=e=>t.value=e),shape:"square","icon-size":"15px"},{default:(0,a.w5)((()=>[J])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(N.g),{label:"一级报警距离",placeholder:"请输入",type:"number","input-align":"right"},{button:(0,a.w5)((()=>[Q])),_:1})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(N.g),{label:"二级报警距离",placeholder:"请输入",type:"number","input-align":"right"},{button:(0,a.w5)((()=>[Y])),_:1})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(N.g),{label:"三级报警距离",placeholder:"请输入",type:"number","input-align":"right"},{button:(0,a.w5)((()=>[E])),_:1})])),_:1}),(0,a.Wm)((0,i.SU)(H.T),{inset:"",style:{margin:"20px",height:"40px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,i.SU)(G.z),{type:"primary",style:{width:"100%"}},{default:(0,a.w5)((()=>[M])),_:1})])),_:1}),(0,a.Wm)(D,{showPicker:o.value,item:d,onClear:s,onSubmit:r},null,8,["showPicker"])],64))}};const q=X;var K=q},5611:function(e,l,t){t.d(l,{Q:function(){return u},Z:function(){return m}});var a=t(4255),i=t(8314),n=t(8030),o=t(5290),d=t(7044);const[c,s]=(0,i["do"])("checkbox-group"),r={max:n.Or,disabled:Boolean,iconSize:n.Or,direction:String,modelValue:(0,n.Ce)(),checkedColor:String},u=Symbol(c);var m=(0,a.aZ)({name:c,props:r,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{children:i,linkChildren:n}=(0,o.$E)(u),c=e=>l("update:modelValue",e),r=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:l,skipDisabled:t}=e,a=i.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&t?e.checked.value:null!=l?l:!e.checked.value))),n=a.map((e=>e.name));c(n)};return(0,a.YP)((()=>e.modelValue),(e=>l("change",e))),(0,d.F)({toggleAll:r}),(0,o.aM)((()=>e.modelValue)),n({props:e,updateValue:c}),()=>{var l;return(0,a.Wm)("div",{class:s([e.direction])},[null==(l=t.default)?void 0:l.call(t)])}}})},8794:function(e,l,t){t.d(l,{Z:function(){return r},m:function(){return s}});var a=t(4255),i=t(4740),n=t(8030),o=t(8577),d=t(4089),c=t(5400);const s={name:n.Vg,shape:(0,n.SQ)("round"),disabled:Boolean,iconSize:n.Or,modelValue:n.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var r=(0,a.aZ)({props:(0,o.l7)({},s,{bem:(0,n.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:n.J5}),emits:["click","toggle"],setup(e,{emit:l,slots:t}){const n=(0,i.iH)(),o=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},s=(0,a.Fl)((()=>o("disabled")||e.disabled)),r=(0,a.Fl)((()=>o("direction"))),u=(0,a.Fl)((()=>{const l=e.checkedColor||o("checkedColor");if(l&&e.checked&&!s.value)return{borderColor:l,backgroundColor:l}})),m=t=>{const{target:a}=t,i=n.value,o=i===a||(null==i?void 0:i.contains(a));s.value||!o&&e.labelDisabled||l("toggle"),l("click",t)},p=()=>{const{bem:l,shape:i,checked:r}=e,m=e.iconSize||o("iconSize");return(0,a.Wm)("div",{ref:n,class:l("icon",[i,{disabled:s.value,checked:r}]),style:{fontSize:(0,d.Nn)(m)}},[t.icon?t.icon({checked:r,disabled:s.value}):(0,a.Wm)(c.J,{name:"success",style:u.value},null)])},b=()=>{if(t.default)return(0,a.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:s.value}])},[t.default()])};return()=>{const l="left"===e.labelPosition?[b(),p()]:[p(),b()];return(0,a.Wm)("div",{role:e.role,class:e.bem([{disabled:s.value,"label-disabled":e.labelDisabled},r.value]),tabindex:s.value?void 0:0,"aria-checked":e.checked,onClick:m},[l])}}})},1061:function(e,l,t){t.d(l,{X:function(){return h}});var a=t(5387),i=t(4255),n=t(8314),o=t(8577),d=t(8030),c=t(5611),s=t(5290),r=t(7044),u=t(8794);const[m,p]=(0,n["do"])("checkbox"),b=(0,o.l7)({},u.m,{bindGroup:d.J5});var v=(0,i.aZ)({name:m,props:b,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{parent:a}=(0,s.NB)(c.Q),n=l=>{const{name:t}=e,{max:i,modelValue:n}=a.props,o=n.slice();if(l){const l=i&&o.length>=i;l||o.includes(t)||(o.push(t),e.bindGroup&&a.updateValue(o))}else{const l=o.indexOf(t);-1!==l&&(o.splice(l,1),e.bindGroup&&a.updateValue(o))}},d=(0,i.Fl)((()=>a&&e.bindGroup?-1!==a.props.modelValue.indexOf(e.name):!!e.modelValue)),m=(t=!d.value)=>{a&&e.bindGroup?n(t):l("update:modelValue",t)};return(0,i.YP)((()=>e.modelValue),(e=>l("change",e))),(0,r.F)({toggle:m,props:e,checked:d}),(0,s.aM)((()=>e.modelValue)),()=>(0,i.Wm)(u.Z,(0,i.dG)({bem:p,role:"checkbox",parent:a,checked:d.value,onToggle:m},e),(0,o.ei)(t,["default","icon"]))}});const h=(0,a.n)(v)}}]);
//# sourceMappingURL=527.34556616.js.map