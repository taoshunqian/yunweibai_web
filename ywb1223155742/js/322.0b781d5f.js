"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[322],{4653:function(e,l,t){t.d(l,{Z:function(){return f}});var o=t(4255),a=t(4740),n=t(6787),i=t(567),s=t(5518),u=t(9598),c=t(1120),r=t(7508);const d={class:"stickyBottom"},m={key:0,class:"stickyDiv"},p={key:1,class:"stickyDiv"};var v={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:l}){const t=e,{t:v}=(0,r.QT)(),g=(0,a.iH)("25"),f=(0,a.iH)(v("stickyBottom.button[1]")),S=(0,a.iH)("primary"),b=(0,a.iH)("30"),h=(0,a.iH)(!1),y=(0,a.iH)(t.guide??!1),k=(0,a.iH)(!1),w=(0,a.iH)(!1),V=sessionStorage.guideIndex,U=sessionStorage.model,W=(0,a.iH)(""),B=(0,a.iH)("");"Ios"!=U&&(W.value="bottom",B.value="0"),W.value="bottom",B.value="0",6==V?(g.value="45",b.value="45",f.value=v("stickyBottom.button[5]"),S.value="success"):h.value=!0;let _=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(_),(0,o.m0)(t,(async()=>{}),{flush:"post"});const C=()=>{if(0==sessionStorage.guideIndex)return(0,s.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,t=_[e].split("@")[0];D(t),sessionStorage.guideIndex=e,l("BottomSetup"),z()},T=()=>{l("BottomSubmit"),z()},D=e=>{setTimeout((()=>{c.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},O=()=>{if(6==sessionStorage.guideIndex)return(0,s.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,t=_[e].split("@")[0];D(t),sessionStorage.guideIndex=e,l("BottomNext"),z()},x=()=>{l("BottomSearch"),z()},z=()=>{k.value=!0,w.value=!0,setTimeout((()=>{k.value=!1,w.value=!1}),1e3)};return(0,o.aZ)({name:"component-stickyBottom"}),(e,l)=>((0,o.wg)(),(0,o.iD)("div",d,[y.value?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)((0,a.SU)(u.z),{plain:"",type:"primary",size:"small",style:(0,n.j5)("width:"+b.value+"%"),class:"stickyButtom",onClick:C,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,o.Wm)((0,a.SU)(u.z),{type:S.value,size:"small",style:(0,n.j5)("width:"+g.value+"%"),class:"stickyButtom",onClick:T,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(f.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,o.wy)((0,o.Wm)((0,a.SU)(u.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:O,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[i.F8,h.value]])])):((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)((0,a.SU)(u.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:x,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,o.Wm)((0,a.SU)(u.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:T,disabled:k.value,loading:w.value},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const g=v;var f=g},8322:function(e,l,t){t.r(l),t.d(l,{default:function(){return w}});var o=t(4255),a=t(4740),n=t(6787),i=t(1201),s=t(4653),u=t(5518),c=t(2634),r=t(8524),d=t(1061),m=t(4295),p=t(6566),v=t(3539),g=t(6312),f=t(7508),S=t(1928);const b={style:{width:"150px"}};var h={__name:"TemperatureSensingStateDetails",setup(e){const{t:l}=(0,f.QT)();let t=(0,S.yj)();const h=t.query,y=h.number??0,k=(0,a.iH)("温度传感器 "+y),w=(0,a.iH)([]),V=(0,a.iH)([]),U=(0,a.iH)(1);var W=[0,3,5,7];const B=()=>{O()},_=()=>{var e=[...w.value],l=[];e.forEach(((e,t)=>{8!=t&&(W.includes(t)?l.push(+e):l.push(e))}));for(var t=[...V.value],o="",a=1;a<=U.value;a++)t.includes(a)?o+="1":o+="0";var n=o;l[8]=n;var i="$ONEWIRETEMPERASET,"+y+","+l.toString();console.log(i),v.E.ANsendSetting(i)},C=e=>{var l=!!+e;return l};(0,o.aZ)({name:"yunweibao-TemperatureSensingStateDetails"});const T=e=>{var l=e.split(";")[0],t=l.split(",").splice(1);l=[];t.forEach(((e,t)=>{if(W.includes(t)){var o=C(e);l.push(o)}else if(8==t){var a=e.split("*");l.push(...a)}else l.push(e)})),U.value=+l[8];for(var o=(0,g.dm)(l[9],U.value),a=[],n=0;n<o.length;n++)0!=o[n]&&a.push(n+1);V.value=a,w.value=l},D=e=>{-1!==e.indexOf("Success")?u.F.success(l("toast[1]")):u.F.fail(l("toast[2]"))},O=()=>{v.E.ANSend("$ONEWIRETEMPERAGET,"+y)};return O(),(0,o.bv)((()=>{window.callJSResult=T,window.callJSResult_Status=D})),(e,l)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i.Z,{navTitle:k.value,leftArrow:!1,lavelMuch:!0},null,8,["navTitle"]),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.b),{title:"启用"},{"right-icon":(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.X),{modelValue:w.value[0],"onUpdate:modelValue":l[0]||(l[0]=e=>w.value[0]=e),shape:"square"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:"ID",placeholder:"ID ",modelValue:w.value[1],"onUpdate:modelValue":l[1]||(l[1]=e=>w.value[1]=e),"input-align":"right"},null,8,["modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:"名称",placeholder:"请输入名称",modelValue:w.value[2],"onUpdate:modelValue":l[2]||(l[2]=e=>w.value[2]=e),"input-align":"right"},null,8,["modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.b),{title:"温度上限报警功能"},{"right-icon":(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.X),{modelValue:w.value[3],"onUpdate:modelValue":l[3]||(l[3]=e=>w.value[3]=e),shape:"square"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:"温度上限",modelValue:w.value[4],"onUpdate:modelValue":l[4]||(l[4]=e=>w.value[4]=e),placeholder:"请输入上限值","input-align":"right"},null,8,["modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.b),{title:"温度下限报警功能"},{"right-icon":(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.X),{modelValue:w.value[5],"onUpdate:modelValue":l[5]||(l[5]=e=>w.value[5]=e),shape:"square"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:"温度下限",modelValue:w.value[6],"onUpdate:modelValue":l[6]||(l[6]=e=>w.value[6]=e),placeholder:"请输入下限值","input-align":"right"},null,8,["modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.b),{title:"蜂鸣器"},{"right-icon":(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.X),{shape:"square",modelValue:w.value[7],"onUpdate:modelValue":l[7]||(l[7]=e=>w.value[7]=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(m.g),{label:"上报频率","label-width":"150",placeholder:"请输入IO个数",modelValue:w.value[10],"onUpdate:modelValue":l[8]||(l[8]=e=>w.value[10]=e),"input-align":"right"},null,8,["modelValue"])])),_:1}),(0,o.Wm)((0,a.SU)(c.T),{inset:"",class:"cell-group"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(r.b),{title:"选择IO"},{"right-icon":(0,o.w5)((()=>[(0,o._)("div",b,[(0,o.Wm)((0,a.SU)(p.c),{modelValue:V.value,"onUpdate:modelValue":l[9]||(l[9]=e=>V.value=e),direction:"horizontal"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(U.value,((e,l)=>((0,o.wg)(),(0,o.j4)((0,a.SU)(d.X),{name:e,shape:"square",key:l,style:{"margin-bottom":"8px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1}),(0,o.Wm)(s.Z,{guide:e.guide,onBottomSubmit:_,onBottomSearch:B,onBottomNext:e.BottomNext},null,8,["guide","onBottomNext"])],64))}},y=t(3334);const k=(0,y.Z)(h,[["__scopeId","data-v-2b5bb8d6"]]);var w=k},3334:function(e,l){l.Z=(e,l)=>{const t=e.__vccOpts||e;for(const[o,a]of l)t[o]=a;return t}},5611:function(e,l,t){t.d(l,{Q:function(){return d},Z:function(){return m}});var o=t(4255),a=t(8314),n=t(8030),i=t(5290),s=t(7044);const[u,c]=(0,a["do"])("checkbox-group"),r={max:n.Or,disabled:Boolean,iconSize:n.Or,direction:String,modelValue:(0,n.Ce)(),checkedColor:String},d=Symbol(u);var m=(0,o.aZ)({name:u,props:r,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{children:a,linkChildren:n}=(0,i.$E)(d),u=e=>l("update:modelValue",e),r=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:l,skipDisabled:t}=e,o=a.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&t?e.checked.value:null!=l?l:!e.checked.value))),n=o.map((e=>e.name));u(n)};return(0,o.YP)((()=>e.modelValue),(e=>l("change",e))),(0,s.F)({toggleAll:r}),(0,i.aM)((()=>e.modelValue)),n({props:e,updateValue:u}),()=>{var l;return(0,o.Wm)("div",{class:c([e.direction])},[null==(l=t.default)?void 0:l.call(t)])}}})},6566:function(e,l,t){t.d(l,{c:function(){return n}});var o=t(5387),a=t(5611);const n=(0,o.n)(a.Z)},8794:function(e,l,t){t.d(l,{Z:function(){return r},m:function(){return c}});var o=t(4255),a=t(4740),n=t(8030),i=t(8577),s=t(4089),u=t(5400);const c={name:n.Vg,shape:(0,n.SQ)("round"),disabled:Boolean,iconSize:n.Or,modelValue:n.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var r=(0,o.aZ)({props:(0,i.l7)({},c,{bem:(0,n.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:n.J5}),emits:["click","toggle"],setup(e,{emit:l,slots:t}){const n=(0,a.iH)(),i=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},c=(0,o.Fl)((()=>i("disabled")||e.disabled)),r=(0,o.Fl)((()=>i("direction"))),d=(0,o.Fl)((()=>{const l=e.checkedColor||i("checkedColor");if(l&&e.checked&&!c.value)return{borderColor:l,backgroundColor:l}})),m=t=>{const{target:o}=t,a=n.value,i=a===o||(null==a?void 0:a.contains(o));c.value||!i&&e.labelDisabled||l("toggle"),l("click",t)},p=()=>{const{bem:l,shape:a,checked:r}=e,m=e.iconSize||i("iconSize");return(0,o.Wm)("div",{ref:n,class:l("icon",[a,{disabled:c.value,checked:r}]),style:{fontSize:(0,s.Nn)(m)}},[t.icon?t.icon({checked:r,disabled:c.value}):(0,o.Wm)(u.J,{name:"success",style:d.value},null)])},v=()=>{if(t.default)return(0,o.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:c.value}])},[t.default()])};return()=>{const l="left"===e.labelPosition?[v(),p()]:[p(),v()];return(0,o.Wm)("div",{role:e.role,class:e.bem([{disabled:c.value,"label-disabled":e.labelDisabled},r.value]),tabindex:c.value?void 0:0,"aria-checked":e.checked,onClick:m},[l])}}})},1061:function(e,l,t){t.d(l,{X:function(){return f}});var o=t(5387),a=t(4255),n=t(8314),i=t(8577),s=t(8030),u=t(5611),c=t(5290),r=t(7044),d=t(8794);const[m,p]=(0,n["do"])("checkbox"),v=(0,i.l7)({},d.m,{bindGroup:s.J5});var g=(0,a.aZ)({name:m,props:v,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{parent:o}=(0,c.NB)(u.Q),n=l=>{const{name:t}=e,{max:a,modelValue:n}=o.props,i=n.slice();if(l){const l=a&&i.length>=a;l||i.includes(t)||(i.push(t),e.bindGroup&&o.updateValue(i))}else{const l=i.indexOf(t);-1!==l&&(i.splice(l,1),e.bindGroup&&o.updateValue(i))}},s=(0,a.Fl)((()=>o&&e.bindGroup?-1!==o.props.modelValue.indexOf(e.name):!!e.modelValue)),m=(t=!s.value)=>{o&&e.bindGroup?n(t):l("update:modelValue",t)};return(0,a.YP)((()=>e.modelValue),(e=>l("change",e))),(0,r.F)({toggle:m,props:e,checked:s}),(0,c.aM)((()=>e.modelValue)),()=>(0,a.Wm)(d.Z,(0,a.dG)({bem:p,role:"checkbox",parent:o,checked:s.value,onToggle:m},e),(0,i.ei)(t,["default","icon"]))}});const f=(0,o.n)(g)},5518:function(e,l,t){t.d(l,{F:function(){return T}});var o=t(4255),a=t(4740),n=t(8577),i=t(61),s=t(5387),u=t(389),c=t(8314),r=t(8030);let d=0;function m(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var p=t(5400),v=t(1374),g=t(4645);const[f,S]=(0,c["do"])("toast"),b=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],h={icon:String,show:Boolean,type:(0,r.SQ)("text"),overlay:Boolean,message:r.Or,iconSize:r.Or,duration:(0,r.qM)(2e3),position:(0,r.SQ)("middle"),teleport:[String,Object],className:r.Vg,iconPrefix:String,transition:(0,r.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:r.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var y=(0,o.aZ)({name:f,props:h,emits:["update:show"],setup(e,{emit:l}){let t,a=!1;const s=()=>{const l=e.show&&e.forbidClick;a!==l&&(a=l,m(a))},u=e=>l("update:show",e),c=()=>{e.closeOnClick&&u(!1)},r=()=>clearTimeout(t),d=()=>{const{icon:l,type:t,iconSize:a,iconPrefix:n,loadingType:i}=e,s=l||"success"===t||"fail"===t;return s?(0,o.Wm)(p.J,{name:l||t,size:a,class:S("icon"),classPrefix:n},null):"loading"===t?(0,o.Wm)(g.g,{class:S("loading"),size:a,type:i},null):void 0},f=()=>{const{type:l,message:t}=e;if((0,i.Xq)(t)&&""!==t)return"html"===l?(0,o.Wm)("div",{key:0,class:S("text"),innerHTML:String(t)},null):(0,o.Wm)("div",{class:S("text")},[t])};return(0,o.YP)((()=>[e.show,e.forbidClick]),s),(0,o.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{r(),e.show&&e.duration>0&&(t=setTimeout((()=>{u(!1)}),e.duration))})),(0,o.bv)(s),(0,o.Ah)(s),()=>(0,o.Wm)(v.G,(0,o.dG)({class:[S([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:c,onClosed:r,"onUpdate:show":u},(0,n.ei)(e,b)),{default:()=>[d(),f()]})}});const k={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let w=[],V=!1,U=(0,n.l7)({},k);const W=new Map;function B(e){return(0,i.Kn)(e)?e:{message:e}}function _(){const{instance:e,unmount:l}=(0,u.H)({setup(){const t=(0,a.iH)(""),{open:n,state:i,close:s,toggle:c}=(0,u.o)(),r=()=>{V&&(w=w.filter((l=>l!==e)),l())},d=()=>{const e={onClosed:r,"onUpdate:show":c};return(0,o.Wm)(y,(0,o.dG)(i,e),null)};return(0,o.YP)(t,(e=>{i.message=e})),(0,o.FN)().render=d,{open:n,clear:s,message:t}}});return e}function C(){if(!w.length||V){const e=_();w.push(e)}return w[w.length-1]}function T(e={}){if(!n._f)return{};const l=C(),t=B(e);return l.open((0,n.l7)({},U,W.get(t.type||U.type),t)),l}const D=e=>l=>T((0,n.l7)({type:e},B(l)));function O(e,l){"string"===typeof e?W.set(e,l):(0,n.l7)(U,e)}T.loading=D("loading"),T.success=D("success"),T.fail=D("fail"),T.clear=e=>{var l;w.length&&(e?(w.forEach((e=>{e.clear()})),w=[]):V?null==(l=w.shift())||l.clear():w[0].clear())},T.setDefaultOptions=O,T.resetDefaultOptions=e=>{"string"===typeof e?W.delete(e):(U=(0,n.l7)({},k),W.clear())},T.allowMultiple=(e=!0)=>{V=e},T.install=e=>{e.use((0,s.n)(y)),e.config.globalProperties.$toast=T}}}]);
//# sourceMappingURL=322.0b781d5f.js.map