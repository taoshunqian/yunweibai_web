"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[341],{8341:function(e,t,l){l.r(t),l.d(t,{default:function(){return z}});var a=l(4255),n=l(4740),i=l(6787),o=l(1201),s=l(5518),r=l(2634),u=l(5387),c=l(8314),d=l(8030),v=l(2810),p=l(5290),f=l(7044);const[m,g]=(0,c["do"])("collapse"),S=Symbol(m),b={border:d.J5,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var y=(0,a.aZ)({name:m,props:b,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{linkChildren:n,children:i}=(0,p.$E)(S),o=e=>{t("change",e),t("update:modelValue",e)},s=(t,l)=>{const{accordion:a,modelValue:n}=e;o(a?t===n?"":t:l?n.concat(t):n.filter((e=>e!==t)))},r=(t={})=>{if(e.accordion)return;"boolean"===typeof t&&(t={expanded:t});const{expanded:l,skipDisabled:a}=t,n=i.filter((e=>e.disabled&&a?e.expanded.value:null!=l?l:!e.expanded.value)),s=n.map((e=>e.itemName.value));o(s)},u=t=>{const{accordion:l,modelValue:a}=e;return l?a===t:a.includes(t)};return(0,f.F)({toggleAll:r}),n({toggle:s,isExpanded:u}),()=>{var t;return(0,a.Wm)("div",{class:[g(),{[v.r5]:e.border}]},[null==(t=l.default)?void 0:t.call(l)])}}});const h=(0,u.n)(y);var w=l(567),k=l(8597),W=l(8577),x=l(9636),C=l(8524);const[T,O]=(0,c["do"])("collapse-item"),H=["icon","title","value","label","right-icon"],J=(0,W.l7)({},k.x,{name:d.Or,isLink:d.J5,disabled:Boolean,readonly:Boolean,lazyRender:d.J5});var V=(0,a.aZ)({name:T,props:J,setup(e,{slots:t}){const l=(0,n.iH)(),i=(0,n.iH)(),{parent:o,index:s}=(0,p.NB)(S);if(!o)return void 0;const r=(0,a.Fl)((()=>{var t;return null!=(t=e.name)?t:s.value})),u=(0,a.Fl)((()=>o.isExpanded(r.value))),c=(0,n.iH)(u.value),d=(0,x.W)((()=>c.value||!e.lazyRender)),v=()=>{u.value?l.value&&(l.value.style.height=""):c.value=!1};(0,a.YP)(u,((e,t)=>{if(null===t)return;e&&(c.value=!0);const n=e?a.Y3:p.Wn;n((()=>{if(!i.value||!l.value)return;const{offsetHeight:t}=i.value;if(t){const a=`${t}px`;l.value.style.height=e?"0":a,(0,p.d1)((()=>{l.value&&(l.value.style.height=e?a:"0")}))}else v()}))}));const m=(e=!u.value)=>{o.toggle(r.value,e)},g=()=>{e.disabled||e.readonly||m()},b=()=>{const{border:l,disabled:n,readonly:i}=e,o=(0,W.ei)(e,Object.keys(k.x));return i&&(o.isLink=!1),(n||i)&&(o.clickable=!1),(0,a.Wm)(C.b,(0,a.dG)({role:"button",class:O("title",{disabled:n,expanded:u.value,borderless:!l}),"aria-expanded":String(u.value),onClick:g},o),(0,W.ei)(t,H))},y=d((()=>{var e;return(0,a.wy)((0,a.Wm)("div",{ref:l,class:O("wrapper"),onTransitionend:v},[(0,a.Wm)("div",{ref:i,class:O("content")},[null==(e=t.default)?void 0:e.call(t)])]),[[w.F8,c.value]])}));return(0,f.F)({toggle:m,expanded:u,itemName:r}),()=>(0,a.Wm)("div",{class:[O({border:s.value&&e.border})]},[b(),y()])}});const $=(0,u.n)(V);var U=l(3539),N=l(6312),B=l(7508),P={__name:"PlatformStatus",setup(e){const{lang:t}=(0,a.f3)("lang"),l=(0,n.iH)(t.value);console.log(l);const{t:u}=(0,B.QT)(),c=u("platformStatus.columns3"),d=u("platformStatus.columns4"),v=(0,n.iH)(u("platformStatus.navTitle")),p=(0,n.iH)(["1"]),f=(0,n.iH)(0),m=(0,n.iH)([]),g=(0,n.iH)(1),S=(0,n.iH)(""),b=(0,n.iH)([]),y=(0,n.iH)(["JT808-2013","JT808-2019","JT808-2011","JT905"]),w=(0,n.iH)(c.split(",")),k=(0,n.iH)(d.split(",")),W=(0,n.iH)([]);function x(e){let t="";switch(e){case"1":t=u("platformStatus.serveState[0]");break;case"0":t=u("platformStatus.serveState[1]");break;default:t=u("platformStatus.serveState[2]")}return t}function T(e){var t=u("platformStatus.deviceState[0]").split(",");return t[e]}function O(e){let t="";switch(e){case"1":t=u("platformStatus.logonState[0]");break;case"0":t=u("platformStatus.logonState[1]");break;default:t=u("platformStatus.logonState[2]")}return t}(0,a.aZ)({name:"yunweibao-SettingsIP"});const H=e=>{var t=e.split(";")[0];if(-1!==t.indexOf("JTNUM")||0==t.length)return f.value=t.split(",")[1],""!=f.value&&void 0!=f.value&&null!=f.value||(f.value=8),1==g.value&&U.E.ANSend("$JTSVR"),!1;if(g.value==+f.value+1){S.value+=t;for(var l=[],a=S.value.split("!"),n=a[a.length-1].split(","),i=[],o=0;o<n.length;o++)-1!==n[o].indexOf("JTSVR")&&i.push(n[o].split("*")[1]);m.value=i;for(var s=t.split(","),r=[],u=0;u<s.length;u++)-1!==s[u].indexOf("JTSVR")&&r.push(s[u]);b.value=r;for(var c=0;c<a.length-1;c++){var d=a[c].split(",");l.push(d)}return W.value=l,!1}S.value+=t+"!",g.value==f.value?U.E.ANSend("$NETSTATE"):g.value<=f.value&&U.E.ANSend("$JTSVR"+[g.value+1]),g.value++},J=e=>{-1!==e.indexOf("Success")?s.F.success(u("toast[1]")):s.F.fail(u("toast[2]"))},V=()=>{var e=(0,N.Wz)("param").split("@");if(void 0!=e[7])return!1;U.E.ANSend("$JTNUM")};return(0,a.bv)((()=>{window.callJSResult=H,window.callJSResult_Status=J,V()})),(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(o.Z,{navTitle:v.value,leftArrow:!1},null,8,["navTitle"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.value,((l,o)=>((0,a.wg)(),(0,a.j4)((0,n.SU)(r.T),{inset:"",style:{"margin-top":"10px"},key:o},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(h),{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)($),{title:e.$t("platformStatus.title[0]")+(o+1),name:""+(o+1)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[1]"),value:l[1]},null,8,["title","value"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[2]"),value:l[2]},null,8,["title","value"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[3]")},{"right-icon":(0,a.w5)((()=>[(0,a._)("span",{style:(0,i.j5)({color:1==l[3]?"#5fb878":"red"})},(0,i.zw)(x(l[3])),5)])),_:2},1032,["title"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[4]"),value:O(l[4])},null,8,["title","value"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[5]"),value:y.value[l[5]]},null,8,["title","value"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[6]"),value:w.value[l[6]]},null,8,["title","value"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[7]"),value:k.value[l[7]]},null,8,["title","value"]),(0,a.Wm)((0,n.SU)(C.b),{title:e.$t("platformStatus.title[8]")},{"right-icon":(0,a.w5)((()=>[(0,a._)("span",{style:(0,i.j5)({color:1==m.value[o]?"#5fb878":"red"})},(0,i.zw)(T(m.value[o])),5)])),_:2},1032,["title"])])),_:2},1032,["title","name"])])),_:2},1032,["modelValue"])])),_:2},1024)))),128))],64))}};const _=P;var z=_},2634:function(e,t,l){l.d(t,{T:function(){return v}});var a=l(5387),n=l(4255),i=l(8314),o=l(8030),s=l(2810);const[r,u]=(0,i["do"])("cell-group"),c={title:String,inset:Boolean,border:o.J5};var d=(0,n.aZ)({name:r,inheritAttrs:!1,props:c,setup(e,{slots:t,attrs:l}){const a=()=>{var a;return(0,n.Wm)("div",(0,n.dG)({class:[u({inset:e.inset}),{[s.r5]:e.border&&!e.inset}]},l),[null==(a=t.default)?void 0:a.call(t)])},i=()=>(0,n.Wm)("div",{class:u("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?(0,n.Wm)(n.HY,null,[i(),a()]):a()}});const v=(0,a.n)(d)},8597:function(e,t,l){l.d(t,{Z:function(){return f},x:function(){return v}});var a=l(4255),n=l(8314),i=l(8030),o=l(8577),s=l(61),r=l(6549),u=l(5400);const[c,d]=(0,n["do"])("cell"),v={icon:String,size:String,title:i.Or,value:i.Or,label:i.Or,center:Boolean,isLink:Boolean,border:i.J5,required:Boolean,iconPrefix:String,valueClass:i.Vg,labelClass:i.Vg,titleClass:i.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},p=(0,o.l7)({},v,r.g2);var f=(0,a.aZ)({name:c,props:p,setup(e,{slots:t}){const l=(0,r.yj)(),n=()=>{const l=t.label||(0,s.Xq)(e.label);if(l)return(0,a.Wm)("div",{class:[d("label"),e.labelClass]},[t.label?t.label():e.label])},i=()=>{if(t.title||(0,s.Xq)(e.title))return(0,a.Wm)("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():(0,a.Wm)("span",null,[e.title]),n()])},o=()=>{const l=t.value||t.default,n=l||(0,s.Xq)(e.value);if(n){const n=t.title||(0,s.Xq)(e.title);return(0,a.Wm)("div",{class:[d("value",{alone:!n}),e.valueClass]},[l?l():(0,a.Wm)("span",null,[e.value])])}},c=()=>t.icon?t.icon():e.icon?(0,a.Wm)(u.J,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,v=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,a.Wm)(u.J,{name:t,class:d("right-icon")},null)}};return()=>{var n,s;const{size:r,center:u,border:p,isLink:f,required:m}=e,g=null!=(n=e.clickable)?n:f,S={center:u,required:m,clickable:g,borderless:!p};return r&&(S[r]=!!r),(0,a.Wm)("div",{class:d(S),role:g?"button":void 0,tabindex:g?0:void 0,onClick:l},[c(),i(),o(),v(),null==(s=t.extra)?void 0:s.call(t)])}}})},8524:function(e,t,l){l.d(t,{b:function(){return i}});var a=l(5387),n=l(8597);const i=(0,a.n)(n.Z)},5518:function(e,t,l){l.d(t,{F:function(){return J}});var a=l(4255),n=l(4740),i=l(8577),o=l(61),s=l(5387),r=l(389),u=l(8314),c=l(8030);let d=0;function v(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var p=l(5400),f=l(1374),m=l(4645);const[g,S]=(0,u["do"])("toast"),b=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],y={icon:String,show:Boolean,type:(0,c.SQ)("text"),overlay:Boolean,message:c.Or,iconSize:c.Or,duration:(0,c.qM)(2e3),position:(0,c.SQ)("middle"),teleport:[String,Object],className:c.Vg,iconPrefix:String,transition:(0,c.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:c.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var h=(0,a.aZ)({name:g,props:y,emits:["update:show"],setup(e,{emit:t}){let l,n=!1;const s=()=>{const t=e.show&&e.forbidClick;n!==t&&(n=t,v(n))},r=e=>t("update:show",e),u=()=>{e.closeOnClick&&r(!1)},c=()=>clearTimeout(l),d=()=>{const{icon:t,type:l,iconSize:n,iconPrefix:i,loadingType:o}=e,s=t||"success"===l||"fail"===l;return s?(0,a.Wm)(p.J,{name:t||l,size:n,class:S("icon"),classPrefix:i},null):"loading"===l?(0,a.Wm)(m.g,{class:S("loading"),size:n,type:o},null):void 0},g=()=>{const{type:t,message:l}=e;if((0,o.Xq)(l)&&""!==l)return"html"===t?(0,a.Wm)("div",{key:0,class:S("text"),innerHTML:String(l)},null):(0,a.Wm)("div",{class:S("text")},[l])};return(0,a.YP)((()=>[e.show,e.forbidClick]),s),(0,a.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{c(),e.show&&e.duration>0&&(l=setTimeout((()=>{r(!1)}),e.duration))})),(0,a.bv)(s),(0,a.Ah)(s),()=>(0,a.Wm)(f.G,(0,a.dG)({class:[S([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:c,"onUpdate:show":r},(0,i.ei)(e,b)),{default:()=>[d(),g()]})}});const w={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let k=[],W=!1,x=(0,i.l7)({},w);const C=new Map;function T(e){return(0,o.Kn)(e)?e:{message:e}}function O(){const{instance:e,unmount:t}=(0,r.H)({setup(){const l=(0,n.iH)(""),{open:i,state:o,close:s,toggle:u}=(0,r.o)(),c=()=>{W&&(k=k.filter((t=>t!==e)),t())},d=()=>{const e={onClosed:c,"onUpdate:show":u};return(0,a.Wm)(h,(0,a.dG)(o,e),null)};return(0,a.YP)(l,(e=>{o.message=e})),(0,a.FN)().render=d,{open:i,clear:s,message:l}}});return e}function H(){if(!k.length||W){const e=O();k.push(e)}return k[k.length-1]}function J(e={}){if(!i._f)return{};const t=H(),l=T(e);return t.open((0,i.l7)({},x,C.get(l.type||x.type),l)),t}const V=e=>t=>J((0,i.l7)({type:e},T(t)));function $(e,t){"string"===typeof e?C.set(e,t):(0,i.l7)(x,e)}J.loading=V("loading"),J.success=V("success"),J.fail=V("fail"),J.clear=e=>{var t;k.length&&(e?(k.forEach((e=>{e.clear()})),k=[]):W?null==(t=k.shift())||t.clear():k[0].clear())},J.setDefaultOptions=$,J.resetDefaultOptions=e=>{"string"===typeof e?C.delete(e):(x=(0,i.l7)({},w),C.clear())},J.allowMultiple=(e=!0)=>{W=e},J.install=e=>{e.use((0,s.n)(h)),e.config.globalProperties.$toast=J}}}]);
//# sourceMappingURL=341.ec71b9e3.js.map