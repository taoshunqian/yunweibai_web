"use strict";(self.webpackChunkyunweibao_ad=self.webpackChunkyunweibao_ad||[]).push([[4079],{9638:function(e,l,t){t.r(l),t.d(l,{default:function(){return V}}),t(4916),t(3123),t(561),t(7042),t(2772);var n=t(4815),i=t(5227),a=t(4355),o=t(714),r=t(9106),u=t(4616),s=t(7763),c=t(8215),d=t(9823),p=t(6290),f=t(644),v=t(4348),m=t(5001),g=t(6235),b={style:{float:"left","margin-right":"10px"}},S={style:{margin:"0px","padding-top":"5px"}},h={style:{"padding-left":"10px"}},w={style:{float:"left","margin-right":"10px"}},k={style:{"margin-right":"10px","font-size":"13px"}},x={style:{margin:"0px","padding-top":"5px","font-size":"13px"}},y={style:{"margin-top":"28px","font-size":"13px"}},V={__name:"WifiSettings",setup:function(e){function l(){var e="$WIFILIST,";e+=+O.value,v.E.ANsendSetting(e)}function t(){(0,u.F)(z("toast[0]")),v.E.ANSend(F.value)}function V(e){console.log(e);e=e.split(";")[0],e=(D.value=e).split(",").splice(1);for(var l=(O.value=!!+e[0],J.value=T[e[1]],q.value=1==e[2]||2==e[2]?U[e[2]-1]:"2.4G",null==q.value&&(q.value=T[2]),null==J.value&&(J.value=T[2]),e.slice(3)),t=[],n=0;n<l.length;n++){var i=l[n].split("#");i[1]=(0,m.eY)(i[1]),console.log(i[2]),i[2]=$[i[2]],t.push(i)}P.value=t}function W(e){-1!==e.indexOf("Success")?u.F.success(z("toast[1]")):u.F.fail(z("toast[2]"))}var z=(0,g.QT)().t,C=z("wifiSettings.modelValue"),_=z("wifiSettings.warrantValue"),Z=z("wifiSettings.wifiStatus"),G=(0,f.useRoute)().query.guide,B=(0,i.iH)(z("wifiSettings.navTitle")),H=(0,i.iH)(!1),O=(0,i.iH)(!0),F=(0,i.iH)(""),q=(0,i.iH)(""),J=(0,i.iH)(""),P=(0,i.iH)([]),D=(0,i.iH)([]),T=C.split(","),U=_.split(","),$=Z.split(",");return(0,n.aZ)({name:"yunweibao-SettingsIP"}),C="",C=(G?(_=sessionStorage.guideIndex,H.value=!0,JSON.parse(sessionStorage.guide)[_]):(0,m.Wz)("param")).split("@"),F.value=C[1],v.E.ANSend(C[1]),(0,n.bv)((function(){window.callJSResult=V,window.callJSResult_Status=W})),function(e,u){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o.Z,{navTitle:B.value,leftArrow:!1},null,8,["navTitle"]),(0,n.Wm)((0,i.SU)(s.T),{inset:"",style:{margin:"10px"},class:"cellGroup"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,i.SU)(c.b),null,{title:(0,n.w5)((function(){return[(0,n._)("label",b,(0,a.zw)(e.$t("wifiSettings.title[0]")),1),(0,n.Wm)((0,i.SU)(d.X),{modelValue:O.value,"onUpdate:modelValue":u[0]||(u[0]=function(e){return O.value=e}),shape:"square","icon-size":"15px",style:{"margin-top":"5px"},disabled:""},null,8,["modelValue"]),(0,n._)("p",S,[(0,n.Uk)((0,a.zw)(e.$t("wifiSettings.title[1]"))+": ",1),(0,n._)("span",h,(0,a.zw)(q.value),1)])]})),"right-icon":(0,n.w5)((function(){return[(0,n._)("label",w,(0,a.zw)(J.value),1)]})),_:1})]})),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(P.value,(function(l,t){return(0,n.wg)(),(0,n.j4)((0,i.SU)(s.T),{inset:"",style:{margin:"10px"},class:"cellGroup",key:t,onClick:function(e){p.Z.push({path:"/SettingsIP",query:{item:l}})}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,i.SU)(c.b),null,{title:(0,n.w5)((function(){return[(0,n._)("label",k,(0,a.zw)(e.$t("wifiSettings.title[2]"))+": "+(0,a.zw)(l[0]),1),(0,n._)("p",x,(0,a.zw)(e.$t("wifiSettings.title[3]"))+": "+(0,a.zw)(l[1]),1)]})),"right-icon":(0,n.w5)((function(){return[(0,n._)("label",y,[(0,n.Uk)((0,a.zw)(e.$t("wifiSettings.title[4]"))+": ",1),(0,n._)("span",{style:(0,a.j5)({color:2===(0,i.SU)($).indexOf(l[2])?"#5fb878":"red"})},(0,a.zw)(l[2]),5)])]})),_:2},1024)]})),_:2},1032,["onClick"])})),128)),(0,n.Wm)(r.Z,{guide:H.value,onBottomSubmit:l,onBottomSearch:t},null,8,["guide"])],64)}}}},7763:function(e,l,t){t.d(l,{T:function(){return s}});l=t(5140);var n=t(4815),i=t(6263),a=t(538),o=t(8405);const[r,u]=(0,i.do)("cell-group");t={title:String,inset:Boolean,border:a.J5},i=(0,n.aZ)({name:r,inheritAttrs:!1,props:t,setup(e,{slots:l,attrs:t}){const i=()=>{var i;return(0,n.Wm)("div",(0,n.dG)({class:[u({inset:e.inset}),{[o.r5]:e.border&&!e.inset}]},t),[null==(i=l.default)?void 0:i.call(l)])};return()=>e.title||l.title?(0,n.Wm)(n.HY,null,[(0,n.Wm)("div",{class:u("title",{inset:e.inset})},[l.title?l.title():e.title]),i()]):i()}});const s=(0,l.n)(i)},2619:function(e,l,t){t.d(l,{Z:function(){return p},x:function(){return d}});var n=t(4815),i=(l=t(6263),t(538)),a=t(5375),o=t(479),r=t(9852),u=t(5087);const[s,c]=(0,l.do)("cell"),d={icon:String,size:String,title:i.Or,value:i.Or,label:i.Or,center:Boolean,isLink:Boolean,border:i.J5,required:Boolean,iconPrefix:String,valueClass:i.Vg,labelClass:i.Vg,titleClass:i.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}};t=(0,a.l7)({},d,r.g2);var p=(0,n.aZ)({name:s,props:t,setup(e,{slots:l}){const t=(0,r.yj)(),i=()=>{if(l.title||(0,o.Xq)(e.title))return(0,n.Wm)("div",{class:[c("title"),e.titleClass],style:e.titleStyle},[l.title?l.title():(0,n.Wm)("span",null,[e.title]),(()=>{if(l.label||(0,o.Xq)(e.label))return(0,n.Wm)("div",{class:[c("label"),e.labelClass]},[l.label?l.label():e.label])})()])};return()=>{var{size:a,center:r,border:s,isLink:d,required:p}=e,f=null!=(f=e.clickable)?f:d,d={center:r,required:p,clickable:f,borderless:!s};return a&&(d[a]=!!a),(0,n.Wm)("div",{class:c(d),role:f?"button":void 0,tabindex:f?0:void 0,onClick:t},[l.icon?l.icon():e.icon?(0,n.Wm)(u.J,{name:e.icon,class:c("left-icon"),classPrefix:e.iconPrefix},null):void 0,i(),(()=>{var t,i=l.value||l.default;if(i||(0,o.Xq)(e.value))return t=l.title||(0,o.Xq)(e.title),(0,n.Wm)("div",{class:[c("value",{alone:!t}),e.valueClass]},[i?i():(0,n.Wm)("span",null,[e.value])])})(),l["right-icon"]?l["right-icon"]():e.isLink?(r=e.arrowDirection?"arrow-"+e.arrowDirection:"arrow",(0,n.Wm)(u.J,{name:r,class:c("right-icon")},null)):void 0,null==(p=l.extra)?void 0:p.call(l)])}}})},8215:function(e,l,t){t.d(l,{b:function(){return n}}),l=t(5140),t=t(2619);const n=(0,l.n)(t.Z)},8306:function(e,l,t){t.d(l,{Q:function(){return s},Z:function(){return c}});var n=t(4815),i=(l=t(6263),t(538)),a=t(712),o=t(4685);const[r,u]=(0,l.do)("checkbox-group");t={max:i.Or,disabled:Boolean,iconSize:i.Or,direction:String,modelValue:(0,i.Ce)(),checkedColor:String};const s=Symbol(r);var c=(0,n.aZ)({name:r,props:t,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{children:i,linkChildren:r}=(0,a.$E)(s),c=e=>l("update:modelValue",e);return(0,n.YP)((()=>e.modelValue),(e=>l("change",e))),(0,o.F)({toggleAll:(e={})=>{const{checked:l,skipDisabled:t}=e="boolean"==typeof e?{checked:e}:e;e=i.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&t?e.checked.value:null!=l?l:!e.checked.value))).map((e=>e.name)),c(e)}}),(0,a.aM)((()=>e.modelValue)),r({props:e,updateValue:c}),()=>{var l;return(0,n.Wm)("div",{class:u([e.direction])},[null==(l=t.default)?void 0:l.call(t)])}}})},4902:function(e,l,t){t.d(l,{Z:function(){return s},m:function(){return u}});var n=t(4815),i=t(5227),a=(l=t(538),t(5375)),o=t(2345),r=t(5087);const u={name:l.Vg,shape:(0,l.SQ)("round"),disabled:Boolean,iconSize:l.Or,modelValue:l.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var s=(0,n.aZ)({props:(0,a.l7)({},u,{bem:(0,l.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:l.J5}),emits:["click","toggle"],setup(e,{emit:l,slots:t}){const a=(0,i.iH)(),u=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},s=(0,n.Fl)((()=>u("disabled")||e.disabled)),c=(0,n.Fl)((()=>u("direction"))),d=(0,n.Fl)((()=>{var l=e.checkedColor||u("checkedColor");if(l&&e.checked&&!s.value)return{borderColor:l,backgroundColor:l}})),p=t=>{var n=t["target"],i=a.value;i=i===n||(null==i?void 0:i.contains(n));s.value||!i&&e.labelDisabled||l("toggle"),l("click",t)},f=()=>{var{bem:l,shape:i,checked:c}=e,p=e.iconSize||u("iconSize");return(0,n.Wm)("div",{ref:a,class:l("icon",[i,{disabled:s.value,checked:c}]),style:{fontSize:(0,o.Nn)(p)}},[t.icon?t.icon({checked:c,disabled:s.value}):(0,n.Wm)(r.J,{name:"success",style:d.value},null)])},v=()=>{if(t.default)return(0,n.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:s.value}])},[t.default()])};return()=>{var l="left"===e.labelPosition?[v(),f()]:[f(),v()];return(0,n.Wm)("div",{role:e.role,class:e.bem([{disabled:s.value,"label-disabled":e.labelDisabled},c.value]),tabindex:s.value?void 0:0,"aria-checked":e.checked,onClick:p},[l])}}})},9823:function(e,l,t){t.d(l,{X:function(){return f}});l=t(5140);var n=t(4815),i=t(6263),a=t(5375),o=t(538),r=t(8306),u=t(712),s=t(4685),c=t(4902);const[d,p]=(0,i.do)("checkbox");t=(0,a.l7)({},c.m,{bindGroup:o.J5}),i=(0,n.aZ)({name:d,props:t,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const i=(0,u.NB)(r.Q)["parent"],o=(0,n.Fl)((()=>i&&e.bindGroup?-1!==i.props.modelValue.indexOf(e.name):!!e.modelValue)),d=(t=!o.value)=>{var n,a,r,u;i&&e.bindGroup?(n=t,a=e.name,({max:r,modelValue:u}=i.props),u=u.slice(),n?r&&u.length>=r||u.includes(a)||(u.push(a),e.bindGroup&&i.updateValue(u)):-1!==(n=u.indexOf(a))&&(u.splice(n,1),e.bindGroup&&i.updateValue(u))):l("update:modelValue",t)};return(0,n.YP)((()=>e.modelValue),(e=>l("change",e))),(0,s.F)({toggle:d,props:e,checked:o}),(0,u.aM)((()=>e.modelValue)),()=>(0,n.Wm)(c.Z,(0,n.dG)({bem:p,role:"checkbox",parent:i,checked:o.value,onToggle:d},e),(0,a.ei)(t,["default","icon"]))}});const f=(0,l.n)(i)}}]);