"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[5],{4653:function(e,t,o){o.d(t,{Z:function(){return p}});var i=o(4255),s=o(4740),l=o(6787),a=o(567),n=o(5518),r=o(9598),u=o(1120),c=o(7508);const d={class:"stickyBottom"},m={key:0,class:"stickyDiv"},y={key:1,class:"stickyDiv"};var v={__name:"stickyBottom",props:["guide"],emits:["BottomSetup","BottomSubmit","BottomNext","BottomSearch"],setup(e,{emit:t}){const o=e,{t:v}=(0,c.QT)(),g=(0,s.iH)("25"),p=(0,s.iH)(v("stickyBottom.button[1]")),f=(0,s.iH)("primary"),S=(0,s.iH)("30"),k=(0,s.iH)(!1),w=(0,s.iH)(o.guide??!1),b=(0,s.iH)(!1),B=(0,s.iH)(!1),h=sessionStorage.guideIndex,C=sessionStorage.model,D=(0,s.iH)(""),z=(0,s.iH)("");"Ios"!=C&&(D.value="bottom",z.value="0"),D.value="bottom",z.value="0",6==h?(g.value="45",S.value="45",p.value=v("stickyBottom.button[5]"),f.value="success"):k.value=!0;let x=["CarInfo@$BUS@0@2@车辆信息@8@treeDemo_17@10001","3G4G@$DIAL@0@25@拨号@8@treeDemo_46@10001","WifiSettings@$WIFILIST@0@401@WIFI设置@8@treeDemo_50@10001","PlatformSettings@$JTSVR@0@40@平台配置@8@treeDemo_6@10001","CameraSettings@$CAMERAMODE@0@5@摄像头设置@8@treeDemo_54@10001","ADAS@$ADASCALIBRATION@0@5@ADAS@8@treeDemo_54@10001","DSM1@$DSMCALIBRATION,DSM1@0@5@BSM1@8@treeDemo_54@10001"];sessionStorage.guide=JSON.stringify(x),(0,i.m0)(o,(async()=>{}),{flush:"post"});const O=()=>{if(0==sessionStorage.guideIndex)return(0,n.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex-1,o=x[e].split("@")[0];I(o),sessionStorage.guideIndex=e,t("BottomSetup"),A()},_=()=>{t("BottomSubmit"),A()},I=e=>{setTimeout((()=>{u.Z.push({path:"/"+e,query:{guide:!0}})}),1e3)},W=()=>{if(6==sessionStorage.guideIndex)return(0,n.F)(v("stickyBottom.toast")),!1;var e=+sessionStorage.guideIndex+1,o=x[e].split("@")[0];I(o),sessionStorage.guideIndex=e,t("BottomNext"),A()},H=()=>{t("BottomSearch"),A()},A=()=>{b.value=!0,B.value=!0,setTimeout((()=>{b.value=!1,B.value=!1}),1e3)};return(0,i.aZ)({name:"component-stickyBottom"}),(e,t)=>((0,i.wg)(),(0,i.iD)("div",d,[w.value?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)((0,s.SU)(r.z),{plain:"",type:"primary",size:"small",style:(0,l.j5)("width:"+S.value+"%"),class:"stickyButtom",onClick:O,disabled:b.value,loading:B.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[0]")),1)])),_:1},8,["style","disabled","loading"]),(0,i.Wm)((0,s.SU)(r.z),{type:f.value,size:"small",style:(0,l.j5)("width:"+g.value+"%"),class:"stickyButtom",onClick:_,disabled:b.value,loading:B.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(p.value),1)])),_:1},8,["type","style","disabled","loading"]),(0,i.wy)((0,i.Wm)((0,s.SU)(r.z),{plain:"",type:"primary",size:"small",style:{width:"30%"},class:"stickyButtom",onClick:W,disabled:b.value,loading:B.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[2]")),1)])),_:1},8,["disabled","loading"]),[[a.F8,k.value]])])):((0,i.wg)(),(0,i.iD)("div",y,[(0,i.Wm)((0,s.SU)(r.z),{plain:"",type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:H,disabled:b.value,loading:B.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[3]")),1)])),_:1},8,["disabled","loading"]),(0,i.Wm)((0,s.SU)(r.z),{type:"primary",size:"small",style:{width:"45%"},class:"stickyButtom",onClick:_,disabled:b.value,loading:B.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.$t("stickyBottom.button[4]")),1)])),_:1},8,["disabled","loading"])]))]))}};const g=v;var p=g},8005:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var i=o(4255),s=o(4740),l=o(1201),a=o(4653),n=o(9598),r=o(3539);const u=(0,i.Uk)("开始标定");var c={__name:"DSM2",setup(e){const t=(0,s.iH)("DSM2 标定"),o=(0,s.iH)(!0),c=e=>{r.E.calibrationFn(e)};return(0,i.aZ)({name:"yunweibao-Demarcate"}),(e,r)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l.Z,{navTitle:t.value,leftArrow:!1},null,8,["navTitle"]),(0,i.Wm)((0,s.SU)(n.z),{type:"primary",style:{width:"90%","margin-left":"5%","margin-top":"50%"},size:"large",onClick:r[0]||(r[0]=e=>c(3))},{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(a.Z,{guide:o.value,onBottomNext:e.BottomNext},null,8,["guide","onBottomNext"])],64))}};const d=c;var m=d},5518:function(e,t,o){o.d(t,{F:function(){return _}});var i=o(4255),s=o(4740),l=o(8577),a=o(61),n=o(5387),r=o(389),u=o(8314),c=o(8030);let d=0;function m(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}var y=o(5400),v=o(1374),g=o(4645);const[p,f]=(0,u["do"])("toast"),S=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],k={icon:String,show:Boolean,type:(0,c.SQ)("text"),overlay:Boolean,message:c.Or,iconSize:c.Or,duration:(0,c.qM)(2e3),position:(0,c.SQ)("middle"),teleport:[String,Object],className:c.Vg,iconPrefix:String,transition:(0,c.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:c.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var w=(0,i.aZ)({name:p,props:k,emits:["update:show"],setup(e,{emit:t}){let o,s=!1;const n=()=>{const t=e.show&&e.forbidClick;s!==t&&(s=t,m(s))},r=e=>t("update:show",e),u=()=>{e.closeOnClick&&r(!1)},c=()=>clearTimeout(o),d=()=>{const{icon:t,type:o,iconSize:s,iconPrefix:l,loadingType:a}=e,n=t||"success"===o||"fail"===o;return n?(0,i.Wm)(y.J,{name:t||o,size:s,class:f("icon"),classPrefix:l},null):"loading"===o?(0,i.Wm)(g.g,{class:f("loading"),size:s,type:a},null):void 0},p=()=>{const{type:t,message:o}=e;if((0,a.Xq)(o)&&""!==o)return"html"===t?(0,i.Wm)("div",{key:0,class:f("text"),innerHTML:String(o)},null):(0,i.Wm)("div",{class:f("text")},[o])};return(0,i.YP)((()=>[e.show,e.forbidClick]),n),(0,i.YP)((()=>[e.show,e.type,e.message,e.duration]),(()=>{c(),e.show&&e.duration>0&&(o=setTimeout((()=>{r(!1)}),e.duration))})),(0,i.bv)(n),(0,i.Ah)(n),()=>(0,i.Wm)(v.G,(0,i.dG)({class:[f([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:u,onClosed:c,"onUpdate:show":r},(0,l.ei)(e,S)),{default:()=>[d(),p()]})}});const b={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let B=[],h=!1,C=(0,l.l7)({},b);const D=new Map;function z(e){return(0,a.Kn)(e)?e:{message:e}}function x(){const{instance:e,unmount:t}=(0,r.H)({setup(){const o=(0,s.iH)(""),{open:l,state:a,close:n,toggle:u}=(0,r.o)(),c=()=>{h&&(B=B.filter((t=>t!==e)),t())},d=()=>{const e={onClosed:c,"onUpdate:show":u};return(0,i.Wm)(w,(0,i.dG)(a,e),null)};return(0,i.YP)(o,(e=>{a.message=e})),(0,i.FN)().render=d,{open:l,clear:n,message:o}}});return e}function O(){if(!B.length||h){const e=x();B.push(e)}return B[B.length-1]}function _(e={}){if(!l._f)return{};const t=O(),o=z(e);return t.open((0,l.l7)({},C,D.get(o.type||C.type),o)),t}const I=e=>t=>_((0,l.l7)({type:e},z(t)));function W(e,t){"string"===typeof e?D.set(e,t):(0,l.l7)(C,e)}_.loading=I("loading"),_.success=I("success"),_.fail=I("fail"),_.clear=e=>{var t;B.length&&(e?(B.forEach((e=>{e.clear()})),B=[]):h?null==(t=B.shift())||t.clear():B[0].clear())},_.setDefaultOptions=W,_.resetDefaultOptions=e=>{"string"===typeof e?D.delete(e):(C=(0,l.l7)({},b),D.clear())},_.allowMultiple=(e=!0)=>{h=e},_.install=e=>{e.use((0,n.n)(w)),e.config.globalProperties.$toast=_}}}]);
//# sourceMappingURL=5.73ba8ce0.js.map