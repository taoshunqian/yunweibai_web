"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[684],{3182:function(e,t,l){l.d(t,{Z:function(){return f}});var i=l(4255),o=l(4740),n=l(6787),a=l(567),s=l(5518),r=l(9598),u=l(1120),c=l(7508);const d={class:"stickyBottom"},p={key:0,class:"stickyDiv"},m={key:1,class:"stickyDiv"};var v={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:t}){const l=e,{t:v}=(0,c.QT)(),g=(0,o.iH)("25"),f=(0,o.iH)(v("stickyBottom.button[1]")),b=(0,o.iH)("primary"),y=(0,o.iH)("30"),S=(0,o.iH)(!1),k=sessionStorage.guideIndex,h=sessionStorage.model,w=(0,o.iH)(""),x=(0,o.iH)("");"Ios"!=h&&(w.value="bottom",x.value="0"),w.value="bottom",x.value="0",6==k?(g.value="45",y.value="45",f.value=v("stickyBottom.button[5]"),b.value="success"):S.value=!0;let C=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(C),console.log(l.guide),(0,i.m0)(l,(async()=>{}),{flush:"post"});const B=(0,o.iH)(l.guide),z=(0,o.iH)(!1),W=(0,o.iH)(!1),O=()=>{if(0==sessionStorage.guideIndex)return(0,s.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,l=C[e].split("@")[0];D(l),sessionStorage.guideIndex=e,t("BottomSetup"),I()},_=()=>{t("BottomSubmit"),I()},D=e=>{setTimeout((()=>{u.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},V=()=>{if(6==sessionStorage.guideIndex)return(0,s.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,l=C[e].split("@")[0];D(l),sessionStorage.guideIndex=e,t("BottomNext"),I()},H=()=>{t("BottomSearch"),I()},I=()=>{z.value=!0,W.value=!0,setTimeout((()=>{z.value=!1,W.value=!1}),1e3)};return(0,i.aZ)({name:"component-stickyBottom"}),(e,t)=>((0,i.wg)(),(0,i.iD)("div",d,[B.value?((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)((0,o.SU)(r.z),{plain:"",type:"primary",size:"small",style:(0,n.j5)("width:"+y.value+"%"),class:"stickyButtom",onClick:O,disabled:z.value,loading:W.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,i.Wm)((0,o.SU)(r.z),{type:b.value,size:"small",style:(0,n.j5)("width:"+g.value+"%"),class:"stickyButtom",onClick:_,disabled:z.value,loading:W.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(f.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,i.wy)((0,i.Wm)((0,o.SU)(r.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:V,disabled:z.value,loading:W.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[a.F8,S.value]])])):((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)((0,o.SU)(r.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:H,disabled:z.value,loading:W.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,i.Wm)((0,o.SU)(r.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:_,disabled:z.value,loading:W.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const g=v;var f=g},8684:function(e,t,l){l.r(t),l.d(t,{default:function(){return z}});var i=l(4255),o=l(4740),n=l(6787),a=l(1201),s=l(3182),r=l(5518),u=l(2634),c=l(8524),d=l(1061),p=l(1120),m=l(1928),v=l(3539),g=l(6312),f=l(7508);const b={style:{float:"left","margin-right":"10px"}},y={style:{margin:"0px","padding-top":"5px"}},S={style:{"padding-left":"10px"}},k={style:{float:"left","margin-right":"10px"}},h={style:{"margin-right":"10px","font-size":"13px"}},w={style:{margin:"0px","padding-top":"5px","font-size":"13px"}},x={style:{"margin-top":"28px","font-size":"13px"}};var C={__name:"WifiSettings",setup(e){const{t:t}=(0,f.QT)(),l=t("wifiSettings.modelValue"),C=t("wifiSettings.warrantValue"),B=t("wifiSettings.wifiStatus");let z=(0,m.yj)();const W=z.query.guide,O=(0,o.iH)(t("wifiSettings.navTitle")),_=(0,o.iH)(!1),D=(0,o.iH)(!0),V=(0,o.iH)(""),H=(0,o.iH)(""),I=(0,o.iH)(""),T=(0,o.iH)([]),U=(0,o.iH)([]),A=l.split(","),$=C.split(","),P=B.split(","),F=e=>{p.Z.push({path:"/SettingsIP",query:{item:e}})};(0,i.aZ)({name:"yunweibao-SettingsIP"});const G=()=>{var e="$WIFILIST,";e+=+D.value,v.E.ANsendSetting(e)},Z=()=>{(0,r.F)(t("toast[0]")),v.E.ANSend(V.value)},N=e=>{console.log(e);var t=e.split(";")[0];U.value=t;var l=t.split(",").splice(1);D.value=!!+l[0],I.value=A[l[1]],H.value=1==l[2]||2==l[2]?$[l[2]-1]:"2.4G",void 0==H.value&&(H.value=A[2]),void 0==I.value&&(I.value=A[2]);for(var i=l.slice(3),o=[],n=0;n<i.length;n++){var a=i[n].split("#");a[1]=(0,g.eY)(a[1]),console.log(a[2]),a[2]=P[a[2]],o.push(a)}T.value=o},q=e=>{-1!==e.indexOf("Success")?r.F.success(t("toast[1]")):r.F.fail(t("toast[2]"))},J=()=>{var e="";if(W){var t=sessionStorage.guideIndex;_.value=!0;var l=JSON.parse(sessionStorage.guide);e=l[t].split("@")}else e=(0,g.Wz)("param").split("@");V.value=e[1],v.E.ANSend(e[1])};return J(),(0,i.bv)((()=>{window.callJSResult=N,window.callJSResult_Status=q})),(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a.Z,{navTitle:O.value,leftArrow:!1},null,8,["navTitle"]),(0,i.Wm)((0,o.SU)(u.T),{inset:"",style:{margin:"10px"},class:"cellGroup"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,o.SU)(c.b),null,{title:(0,i.w5)((()=>[(0,i._)("label",b,(0,n.zw)(e.$t("wifiSettings.title[0]")),1),(0,i.Wm)((0,o.SU)(d.X),{modelValue:D.value,"onUpdate:modelValue":t[0]||(t[0]=e=>D.value=e),shape:"square","icon-size":"15px",style:{"margin-top":"5px"},disabled:""},null,8,["modelValue"]),(0,i._)("p",y,[(0,i.Uk)((0,n.zw)(e.$t("wifiSettings.title[1]"))+": ",1),(0,i._)("span",S,(0,n.zw)(H.value),1)])])),"right-icon":(0,i.w5)((()=>[(0,i._)("label",k,(0,n.zw)(I.value),1)])),_:1})])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(T.value,((t,l)=>((0,i.wg)(),(0,i.j4)((0,o.SU)(u.T),{inset:"",style:{margin:"10px"},class:"cellGroup",key:l,onClick:e=>F(t)},{default:(0,i.w5)((()=>[(0,i.Wm)((0,o.SU)(c.b),null,{title:(0,i.w5)((()=>[(0,i._)("label",h,(0,n.zw)(e.$t("wifiSettings.title[2]"))+": "+(0,n.zw)(t[0]),1),(0,i._)("p",w,(0,n.zw)(e.$t("wifiSettings.title[3]"))+": "+(0,n.zw)(t[1]),1)])),"right-icon":(0,i.w5)((()=>[(0,i._)("label",x,[(0,i.Uk)((0,n.zw)(e.$t("wifiSettings.title[4]"))+": ",1),(0,i._)("span",{style:(0,n.j5)({color:2===(0,o.SU)(P).indexOf(t[2])?"#5fb878":"red"})},(0,n.zw)(t[2]),5)])])),_:2},1024)])),_:2},1032,["onClick"])))),128)),(0,i.Wm)(s.Z,{guide:_.value,onBottomSubmit:G,onBottomSearch:Z},null,8,["guide"])],64))}};const B=C;var z=B},2634:function(e,t,l){l.d(t,{T:function(){return p}});var i=l(5387),o=l(4255),n=l(8314),a=l(8030),s=l(2810);const[r,u]=(0,n["do"])("cell-group"),c={title:String,inset:Boolean,border:a.J5};var d=(0,o.aZ)({name:r,inheritAttrs:!1,props:c,setup(e,{slots:t,attrs:l}){const i=()=>{var i;return(0,o.Wm)("div",(0,o.dG)({class:[u({inset:e.inset}),{[s.r5]:e.border&&!e.inset}]},l),[null==(i=t.default)?void 0:i.call(t)])},n=()=>(0,o.Wm)("div",{class:u("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?(0,o.Wm)(o.HY,null,[n(),i()]):i()}});const p=(0,i.n)(d)},8597:function(e,t,l){l.d(t,{Z:function(){return v},x:function(){return p}});var i=l(4255),o=l(8314),n=l(8030),a=l(8577),s=l(61),r=l(6549),u=l(5400);const[c,d]=(0,o["do"])("cell"),p={icon:String,size:String,title:n.Or,value:n.Or,label:n.Or,center:Boolean,isLink:Boolean,border:n.J5,required:Boolean,iconPrefix:String,valueClass:n.Vg,labelClass:n.Vg,titleClass:n.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},m=(0,a.l7)({},p,r.g2);var v=(0,i.aZ)({name:c,props:m,setup(e,{slots:t}){const l=(0,r.yj)(),o=()=>{const l=t.label||(0,s.Xq)(e.label);if(l)return(0,i.Wm)("div",{class:[d("label"),e.labelClass]},[t.label?t.label():e.label])},n=()=>{if(t.title||(0,s.Xq)(e.title))return(0,i.Wm)("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():(0,i.Wm)("span",null,[e.title]),o()])},a=()=>{const l=t.value||t.default,o=l||(0,s.Xq)(e.value);if(o){const o=t.title||(0,s.Xq)(e.title);return(0,i.Wm)("div",{class:[d("value",{alone:!o}),e.valueClass]},[l?l():(0,i.Wm)("span",null,[e.value])])}},c=()=>t.icon?t.icon():e.icon?(0,i.Wm)(u.J,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,i.Wm)(u.J,{name:t,class:d("right-icon")},null)}};return()=>{var o,s;const{size:r,center:u,border:m,isLink:v,required:g}=e,f=null!=(o=e.clickable)?o:v,b={center:u,required:g,clickable:f,borderless:!m};return r&&(b[r]=!!r),(0,i.Wm)("div",{class:d(b),role:f?"button":void 0,tabindex:f?0:void 0,onClick:l},[c(),n(),a(),p(),null==(s=t.extra)?void 0:s.call(t)])}}})},8524:function(e,t,l){l.d(t,{b:function(){return n}});var i=l(5387),o=l(8597);const n=(0,i.n)(o.Z)},5611:function(e,t,l){l.d(t,{Q:function(){return d},Z:function(){return p}});var i=l(4255),o=l(8314),n=l(8030),a=l(5290),s=l(7044);const[r,u]=(0,o["do"])("checkbox-group"),c={max:n.Or,disabled:Boolean,iconSize:n.Or,direction:String,modelValue:(0,n.Ce)(),checkedColor:String},d=Symbol(r);var p=(0,i.aZ)({name:r,props:c,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{children:o,linkChildren:n}=(0,a.$E)(d),r=e=>t("update:modelValue",e),c=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:t,skipDisabled:l}=e,i=o.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&l?e.checked.value:null!=t?t:!e.checked.value))),n=i.map((e=>e.name));r(n)};return(0,i.YP)((()=>e.modelValue),(e=>t("change",e))),(0,s.F)({toggleAll:c}),(0,a.aM)((()=>e.modelValue)),n({props:e,updateValue:r}),()=>{var t;return(0,i.Wm)("div",{class:u([e.direction])},[null==(t=l.default)?void 0:t.call(l)])}}})},8794:function(e,t,l){l.d(t,{Z:function(){return c},m:function(){return u}});var i=l(4255),o=l(4740),n=l(8030),a=l(8577),s=l(4089),r=l(5400);const u={name:n.Vg,shape:(0,n.SQ)("round"),disabled:Boolean,iconSize:n.Or,modelValue:n.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var c=(0,i.aZ)({props:(0,a.l7)({},u,{bem:(0,n.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:n.J5}),emits:["click","toggle"],setup(e,{emit:t,slots:l}){const n=(0,o.iH)(),a=t=>{if(e.parent&&e.bindGroup)return e.parent.props[t]},u=(0,i.Fl)((()=>a("disabled")||e.disabled)),c=(0,i.Fl)((()=>a("direction"))),d=(0,i.Fl)((()=>{const t=e.checkedColor||a("checkedColor");if(t&&e.checked&&!u.value)return{borderColor:t,backgroundColor:t}})),p=l=>{const{target:i}=l,o=n.value,a=o===i||(null==o?void 0:o.contains(i));u.value||!a&&e.labelDisabled||t("toggle"),t("click",l)},m=()=>{const{bem:t,shape:o,checked:c}=e,p=e.iconSize||a("iconSize");return(0,i.Wm)("div",{ref:n,class:t("icon",[o,{disabled:u.value,checked:c}]),style:{fontSize:(0,s.Nn)(p)}},[l.icon?l.icon({checked:c,disabled:u.value}):(0,i.Wm)(r.J,{name:"success",style:d.value},null)])},v=()=>{if(l.default)return(0,i.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:u.value}])},[l.default()])};return()=>{const t="left"===e.labelPosition?[v(),m()]:[m(),v()];return(0,i.Wm)("div",{role:e.role,class:e.bem([{disabled:u.value,"label-disabled":e.labelDisabled},c.value]),tabindex:u.value?void 0:0,"aria-checked":e.checked,onClick:p},[t])}}})},1061:function(e,t,l){l.d(t,{X:function(){return f}});var i=l(5387),o=l(4255),n=l(8314),a=l(8577),s=l(8030),r=l(5611),u=l(5290),c=l(7044),d=l(8794);const[p,m]=(0,n["do"])("checkbox"),v=(0,a.l7)({},d.m,{bindGroup:s.J5});var g=(0,o.aZ)({name:p,props:v,emits:["change","update:modelValue"],setup(e,{emit:t,slots:l}){const{parent:i}=(0,u.NB)(r.Q),n=t=>{const{name:l}=e,{max:o,modelValue:n}=i.props,a=n.slice();if(t){const t=o&&a.length>=o;t||a.includes(l)||(a.push(l),e.bindGroup&&i.updateValue(a))}else{const t=a.indexOf(l);-1!==t&&(a.splice(t,1),e.bindGroup&&i.updateValue(a))}},s=(0,o.Fl)((()=>i&&e.bindGroup?-1!==i.props.modelValue.indexOf(e.name):!!e.modelValue)),p=(l=!s.value)=>{i&&e.bindGroup?n(l):t("update:modelValue",l)};return(0,o.YP)((()=>e.modelValue),(e=>t("change",e))),(0,c.F)({toggle:p,props:e,checked:s}),(0,u.aM)((()=>e.modelValue)),()=>(0,o.Wm)(d.Z,(0,o.dG)({bem:m,role:"checkbox",parent:i,checked:s.value,onToggle:p},e),(0,a.ei)(l,["default","icon"]))}});const f=(0,i.n)(g)},5518:function(e,t,l){l.d(t,{F:function(){return _}});var i=l(4255),o=l(4740),n=l(8577),a=l(61),s=l(5387),r=l(389),u=l(8314),c=l(8030);let d=0;function p(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var m=l(5400),v=l(1374),g=l(4645);const[f,b]=(0,u["do"])("toast"),y=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],S={icon:String,show:Boolean,type:(0,c.SQ)("text"),overlay:Boolean,message:c.Or,iconSize:c.Or,duration:(0,c.qM)(2e3),position:(0,c.SQ)("middle"),teleport:[String,Object],className:c.Vg,iconPrefix:String,transition:(0,c.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:c.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var k=(0,i.aZ)({name:f,props:S,emits:["update:show"],setup(e,{emit:t}){let l,o=!1;const s=()=>{const t=e.show&&e.forbidClick;o!==t&&(o=t,p(o))},r=e=>t("update:show",e),u=()=>{e.closeOnClick&&r(!1)},c=()=>clearTimeout(l),d=()=>{const{icon:t,type:l,iconSize:o,iconPrefix:n,loadingType:a}=e,s=t||"success"===l||"fail"===l;return s?(0,i.Wm)(m.J,{name:t||l,size:o,class:b("icon"),classPrefix:n},null):"loading"===l?(0,i.Wm)(g.g,{class:b("loading"),size:o,type:a},null):void 0},f=()=>{const{type:t,message:l}=e;if((0,a.Xq)(l)&&""!==l)return"html"===t?(0,i.Wm)("div",{key:0,class:b("text"),innerHTML:String(l)},null):(0,i.Wm)("div",{class:b("text")},[l])};return(0,i.YP)((()=>[e.show,e.forbidClick]),s),(0,i.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{c(),e.show&&e.duration>0&&(l=setTimeout((()=>{r(!1)}),e.duration))})),(0,i.bv)(s),(0,i.Ah)(s),()=>(0,i.Wm)(v.G,(0,i.dG)({class:[b([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:c,"onUpdate:show":r},(0,n.ei)(e,y)),{default:()=>[d(),f()]})}});const h={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let w=[],x=!1,C=(0,n.l7)({},h);const B=new Map;function z(e){return(0,a.Kn)(e)?e:{message:e}}function W(){const{instance:e,unmount:t}=(0,r.H)({setup(){const l=(0,o.iH)(""),{open:n,state:a,close:s,toggle:u}=(0,r.o)(),c=()=>{x&&(w=w.filter((t=>t!==e)),t())},d=()=>{const e={onClosed:c,"onUpdate:show":u};return(0,i.Wm)(k,(0,i.dG)(a,e),null)};return(0,i.YP)(l,(e=>{a.message=e})),(0,i.FN)().render=d,{open:n,clear:s,message:l}}});return e}function O(){if(!w.length||x){const e=W();w.push(e)}return w[w.length-1]}function _(e={}){if(!n._f)return{};const t=O(),l=z(e);return t.open((0,n.l7)({},C,B.get(l.type||C.type),l)),t}const D=e=>t=>_((0,n.l7)({type:e},z(t)));function V(e,t){"string"===typeof e?B.set(e,t):(0,n.l7)(C,e)}_.loading=D("loading"),_.success=D("success"),_.fail=D("fail"),_.clear=e=>{var t;w.length&&(e?(w.forEach((e=>{e.clear()})),w=[]):x?null==(t=w.shift())||t.clear():w[0].clear())},_.setDefaultOptions=V,_.resetDefaultOptions=e=>{"string"===typeof e?B.delete(e):(C=(0,n.l7)({},h),B.clear())},_.allowMultiple=(e=!0)=>{x=e},_.install=e=>{e.use((0,s.n)(k)),e.config.globalProperties.$toast=_}}}]);
//# sourceMappingURL=684.57f09907.js.map