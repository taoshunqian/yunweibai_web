"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[243],{3182:function(e,t,o){o.d(t,{Z:function(){return p}});var i=o(4255),s=o(4740),l=o(6787),a=o(567),n=o(5518),u=o(9598),r=o(1120),c=o(7508);const d={class:"stickyBottom"},m={key:0,class:"stickyDiv"},g={key:1,class:"stickyDiv"};var v={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:t}){const o=e,{t:v}=(0,c.QT)(),y=(0,s.iH)("25"),p=(0,s.iH)(v("stickyBottom.button[1]")),f=(0,s.iH)("primary"),S=(0,s.iH)("30"),k=(0,s.iH)(!1),w=sessionStorage.guideIndex,b=sessionStorage.model,B=(0,s.iH)(""),h=(0,s.iH)("");"Ios"!=b&&(B.value="bottom",h.value="0"),B.value="bottom",h.value="0",6==w?(y.value="45",S.value="45",p.value=v("stickyBottom.button[5]"),f.value="success"):k.value=!0;let C=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(C),console.log(o.guide),(0,i.m0)(o,(async()=>{}),{flush:"post"});const D=(0,s.iH)(o.guide),z=(0,s.iH)(!1),O=(0,s.iH)(!1),x=()=>{if(0==sessionStorage.guideIndex)return(0,n.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,o=C[e].split("@")[0];I(o),sessionStorage.guideIndex=e,t("BottomSetup"),H()},_=()=>{t("BottomSubmit"),H()},I=e=>{setTimeout((()=>{r.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},T=()=>{if(6==sessionStorage.guideIndex)return(0,n.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,o=C[e].split("@")[0];I(o),sessionStorage.guideIndex=e,t("BottomNext"),H()},W=()=>{t("BottomSearch"),H()},H=()=>{z.value=!0,O.value=!0,setTimeout((()=>{z.value=!1,O.value=!1}),1e3)};return(0,i.aZ)({name:"component-stickyBottom"}),(e,t)=>((0,i.wg)(),(0,i.iD)("div",d,[D.value?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)((0,s.SU)(u.z),{plain:"",type:"primary",size:"small",style:(0,l.j5)("width:"+S.value+"%"),class:"stickyButtom",onClick:x,disabled:z.value,loading:O.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,i.Wm)((0,s.SU)(u.z),{type:f.value,size:"small",style:(0,l.j5)("width:"+y.value+"%"),class:"stickyButtom",onClick:_,disabled:z.value,loading:O.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(p.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,i.wy)((0,i.Wm)((0,s.SU)(u.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:T,disabled:z.value,loading:O.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[a.F8,k.value]])])):((0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)((0,s.SU)(u.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:W,disabled:z.value,loading:O.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,i.Wm)((0,s.SU)(u.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:_,disabled:z.value,loading:O.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const y=v;var p=y},4243:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var i=o(4255),s=o(4740),l=o(6787),a=o(1201),n=o(3182),u=o(570),r=o(5518),c=o(9598),d=o(3539),m=o(6312),g=o(1928),v=o(7508),y={__name:"DSM1",setup(e){const{t:t}=(0,v.QT)();let o=(0,g.yj)();const y=o.query.guide,p=(0,s.iH)(t("dsm.navTitle")),f=(0,s.iH)(!0),S=(0,s.iH)(""),k=(0,s.iH)(!1),w=e=>{k.value=!0,setTimeout((()=>{k.value=!1}),2e3),d.E.calibrationFn(e,"")},b=()=>{u.V.confirm({title:t("dsm.dialog[0]"),message:t("dsm.dialog[1]"),confirmButtonText:t("dsm.dialog[2]"),cancelButtonText:t("dsm.dialog[3]")}).then((()=>{AN.finishWeb()})).catch((()=>{}))};(0,i.aZ)({name:"yunweibao-Demarcate"});const B=e=>{var t=e.split(";")[0],o=t.split(",").splice(1);console.log(o)},h=e=>{-1!==e.indexOf("Success")?r.F.success(t("toast[1]")):r.F.fail(t("toast[2]"))},C=()=>{var e="";if(y){var t=sessionStorage.guideIndex;f.value=!0;var o=JSON.parse(sessionStorage.guide);e=o[t].split("@")}else e=(0,m.Wz)("param").split("@");S.value=e[1],d.E.ANSend(e[1])};return C(),(0,i.bv)((()=>{window.callJSResult=B,window.callJSResult_Status=h})),(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a.Z,{navTitle:p.value,leftArrow:!1},null,8,["navTitle"]),(0,i.Wm)((0,s.SU)(c.z),{type:"primary",style:{width:"90%","margin-left":"5%","margin-top":"40%"},size:"large",onClick:t[0]||(t[0]=e=>w(2)),loading:k.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("dsm.button[0]")),1)])),_:1},8,["loading"]),(0,i.Wm)(n.Z,{guide:f.value,onBottomSubmit:b},null,8,["guide"])],64))}};const p=y;var f=p},5518:function(e,t,o){o.d(t,{F:function(){return _}});var i=o(4255),s=o(4740),l=o(8577),a=o(61),n=o(5387),u=o(389),r=o(8314),c=o(8030);let d=0;function m(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var g=o(5400),v=o(1374),y=o(4645);const[p,f]=(0,r["do"])("toast"),S=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],k={icon:String,show:Boolean,type:(0,c.SQ)("text"),overlay:Boolean,message:c.Or,iconSize:c.Or,duration:(0,c.qM)(2e3),position:(0,c.SQ)("middle"),teleport:[String,Object],className:c.Vg,iconPrefix:String,transition:(0,c.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:c.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var w=(0,i.aZ)({name:p,props:k,emits:["update:show"],setup(e,{emit:t}){let o,s=!1;const n=()=>{const t=e.show&&e.forbidClick;s!==t&&(s=t,m(s))},u=e=>t("update:show",e),r=()=>{e.closeOnClick&&u(!1)},c=()=>clearTimeout(o),d=()=>{const{icon:t,type:o,iconSize:s,iconPrefix:l,loadingType:a}=e,n=t||"success"===o||"fail"===o;return n?(0,i.Wm)(g.J,{name:t||o,size:s,class:f("icon"),classPrefix:l},null):"loading"===o?(0,i.Wm)(y.g,{class:f("loading"),size:s,type:a},null):void 0},p=()=>{const{type:t,message:o}=e;if((0,a.Xq)(o)&&""!==o)return"html"===t?(0,i.Wm)("div",{key:0,class:f("text"),innerHTML:String(o)},null):(0,i.Wm)("div",{class:f("text")},[o])};return(0,i.YP)((()=>[e.show,e.forbidClick]),n),(0,i.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{c(),e.show&&e.duration>0&&(o=setTimeout((()=>{u(!1)}),e.duration))})),(0,i.bv)(n),(0,i.Ah)(n),()=>(0,i.Wm)(v.G,(0,i.dG)({class:[f([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:r,onClosed:c,"onUpdate:show":u},(0,l.ei)(e,S)),{default:()=>[d(),p()]})}});const b={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let B=[],h=!1,C=(0,l.l7)({},b);const D=new Map;function z(e){return(0,a.Kn)(e)?e:{message:e}}function O(){const{instance:e,unmount:t}=(0,u.H)({setup(){const o=(0,s.iH)(""),{open:l,state:a,close:n,toggle:r}=(0,u.o)(),c=()=>{h&&(B=B.filter((t=>t!==e)),t())},d=()=>{const e={onClosed:c,"onUpdate:show":r};return(0,i.Wm)(w,(0,i.dG)(a,e),null)};return(0,i.YP)(o,(e=>{a.message=e})),(0,i.FN)().render=d,{open:l,clear:n,message:o}}});return e}function x(){if(!B.length||h){const e=O();B.push(e)}return B[B.length-1]}function _(e={}){if(!l._f)return{};const t=x(),o=z(e);return t.open((0,l.l7)({},C,D.get(o.type||C.type),o)),t}const I=e=>t=>_((0,l.l7)({type:e},z(t)));function T(e,t){"string"===typeof e?D.set(e,t):(0,l.l7)(C,e)}_.loading=I("loading"),_.success=I("success"),_.fail=I("fail"),_.clear=e=>{var t;B.length&&(e?(B.forEach((e=>{e.clear()})),B=[]):h?null==(t=B.shift())||t.clear():B[0].clear())},_.setDefaultOptions=T,_.resetDefaultOptions=e=>{"string"===typeof e?D.delete(e):(C=(0,l.l7)({},b),D.clear())},_.allowMultiple=(e=!0)=>{h=e},_.install=e=>{e.use((0,n.n)(w)),e.config.globalProperties.$toast=_}}}]);
//# sourceMappingURL=243.04cb02cf.js.map