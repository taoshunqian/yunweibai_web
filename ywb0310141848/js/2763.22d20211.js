"use strict";(self.webpackChunkyunweibao_ad=self.webpackChunkyunweibao_ad||[]).push([[2763],{9862:function(e,l,t){t.r(l),t.d(l,{default:function(){return g}}),t(4916),t(3123),t(9600),t(561),t(3710),t(1539),t(9714),t(2772);var n=t(4815),a=t(5227),o=t(8035),u=t(714),i=t(9106),r=t(4616),s=t(7763),c=t(9672),d=t(8215),m=t(2003),v=t(6232),f=t(4348),p=t(5001),h=t(6235),g={__name:"CarInfo",setup:function(e){function l(){W.value[3]=9==$.value?$.value:$.value+1;var e=T.value+","+W.value.join(",");return console.warn("发送数据"+e),f.E.ANsendSetting(e),!1}function t(){(0,r.F)(I("toast[0]")),f.E.ANSend(T.value)}function g(){}function b(e){for(var l=0,t="",n=0;n<H.value.length;n++)H.value[n]==e&&(l=n+1,t=H.value[n]);$.value=8==l?9:l-1,k.value=t,U.value=!1}function x(e){e=e.split(";")[0].split(",").splice(1),console.warn(e),W.value=e,$.value=e[3]-1,console.warn($.value),7<$.value&&($.value=7),k.value=H.value[$.value],console.warn(H.value.toString())}function w(e){console.warn(e),-1!==e.indexOf("Success")?r.F.success(I("toast[1]")):r.F.fail(I("toast[2]"))}var I=(0,h.QT)().t,y=(0,n.f3)("lang").lang,S=I("carInfo.columns"),V=(0,a.iH)(y.value),W=(0,a.iH)([]),H=(0,a.iH)(S.split(",")),U=(0,a.iH)(!1),C=(0,a.iH)(!1),T=(0,a.iH)(""),$=(0,a.iH)(1),k=(0,a.iH)(""),F=(0,a.iH)(I("carInfo.navTitle"));(0,n.aZ)({name:"yunweibao-CarInfo"});try{var N=(0,p.Wz)("param").split("@");console.log(N),10001==N[7]&&(sessionStorage.guideIndex=0,C.value=!0),T.value=N[1],f.E.ANSend(N[1])}catch(e){console.log(e)}return(0,n.bv)((function(){window.callJSResult=x,window.callJSResult_Status=w})),function(e,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u.Z,{navTitle:F.value,leftArrow:!1},null,8,["navTitle"]),(0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[1]"),type:"tel",placeholder:e.$t("carInfo.placeholder[1]"),"input-align":"right",modelValue:W.value[1],"onUpdate:modelValue":r[0]||(r[0]=function(e){return W.value[1]=e}),autosize:"",maxlength:"12"},null,8,["label","placeholder","modelValue"])]})),_:1}),(0,n.Wm)((0,a.SU)(s.T),{inset:"",class:"cellGroup",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[0]"),placeholder:e.$t("carInfo.placeholder[0]"),"input-align":"right",modelValue:W.value[0],"onUpdate:modelValue":r[1]||(r[1]=function(e){return W.value[0]=e}),autosize:""},null,8,["label","placeholder","modelValue"])]})),_:1}),(0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[2]"),placeholder:e.$t("carInfo.placeholder[2]"),"label-width":200,"input-align":"right",modelValue:W.value[2],"onUpdate:modelValue":r[2]||(r[2]=function(e){return W.value[2]=e}),autosize:""},null,8,["label","placeholder","modelValue"])]})),_:1}),(0,n.wy)((0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(d.b),{title:e.$t("carInfo.label[3]"),"is-link":"",value:k.value,onClick:r[3]||(r[3]=function(e){return U.value=!0})},null,8,["title","value"])]})),_:1},512),[[o.F8,V.value]]),(0,n.wy)((0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[4]"),placeholder:e.$t("carInfo.placeholder[3]"),"input-align":"right",modelValue:W.value[4],"onUpdate:modelValue":r[4]||(r[4]=function(e){return W.value[4]=e}),autosize:"",maxlength:"6"},null,8,["label","placeholder","modelValue"])]})),_:1},512),[[o.F8,V.value]]),(0,n.wy)((0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[5]"),placeholder:e.$t("carInfo.placeholder[4]"),"input-align":"right",modelValue:W.value[5],"onUpdate:modelValue":r[5]||(r[5]=function(e){return W.value[5]=e}),autosize:"",maxlength:"11"},null,8,["label","placeholder","modelValue"])]})),_:1},512),[[o.F8,V.value]]),(0,n.wy)((0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[6]"),placeholder:e.$t("carInfo.placeholder[5]"),"input-align":"right",modelValue:W.value[6],"onUpdate:modelValue":r[6]||(r[6]=function(e){return W.value[6]=e}),autosize:""},null,8,["label","placeholder","modelValue"])]})),_:1},512),[[o.F8,V.value]]),(0,n.wy)((0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[7]"),placeholder:e.$t("carInfo.placeholder[6]"),"input-align":"right",modelValue:W.value[7],"onUpdate:modelValue":r[7]||(r[7]=function(e){return W.value[7]=e}),autosize:""},null,8,["label","placeholder","modelValue"])]})),_:1},512),[[o.F8,V.value]]),(0,n.wy)((0,n.Wm)((0,a.SU)(s.T),{inset:"",style:{margin:"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(c.g),{label:e.$t("carInfo.label[8]"),placeholder:e.$t("carInfo.placeholder[7]"),"input-align":"right",modelValue:W.value[8],"onUpdate:modelValue":r[8]||(r[8]=function(e){return W.value[8]=e}),autosize:""},null,8,["label","placeholder","modelValue"])]})),_:1},512),[[o.F8,V.value]]),(0,n.Wm)((0,a.SU)(m.G),{round:"",show:U.value,"onUpdate:show":r[10]||(r[10]=function(e){return U.value=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(v.c),{title:e.$t("carInfo.label[9]"),columns:H.value,onCancel:r[9]||(r[9]=function(e){return U.value=!1}),"default-index":$.value,"confirm-button-text":e.$t("picker[0]"),"cancel-button-text":e.$t("picker[1]"),onConfirm:b},null,8,["title","columns","default-index","confirm-button-text","cancel-button-text"])]})),_:1},8,["show"]),(0,n.Wm)(i.Z,{guide:C.value,onBottomSubmit:l,onBottomSearch:t,onBottomNext:g},null,8,["guide"])],64)}}}},6232:function(e,l,t){t.d(l,{c:function(){return W}});l=t(5140);var n=t(4815),a=t(5227),o=t(6263),u=t(538),i=t(5375),r=t(2345),s=t(8405),c=t(3205),d=t(712),m=t(4685),v=t(8122),f=t(479);function p(e){if((0,f.Xq)(e)){if(Array.isArray(e))return e.map((e=>p(e)));if((0,f.Kn)(e)){const l={};return Object.keys(e).forEach((t=>{l[t]=p(e[t])})),l}}return e}var h=t(9825);const[g,b]=(0,o.do)("picker-column"),x=Symbol(g),w=e=>(0,f.Kn)(e)&&e.disabled;var I=(0,n.aZ)({name:g,props:{textKey:(0,u.ir)(String),readonly:Boolean,allowHtml:Boolean,className:u.Vg,itemHeight:(0,u.ir)(Number),defaultIndex:(0,u.qM)(0),swipeDuration:(0,u.ir)(u.Or),initialOptions:(0,u.Ce)(),visibleItemCount:(0,u.ir)(u.Or)},emits:["change"],setup(e,{emit:l,slots:t}){let o,u,i,s,v;const g=(0,a.iH)(),I=(0,a.iH)(),y=(0,a.qj)({index:e.defaultIndex,offset:0,duration:0,options:p(e.initialOptions)}),S=(0,h.o)(),V=()=>y.options.length,W=()=>e.itemHeight*(+e.visibleItemCount-1)/2,H=(t,n)=>{var a=-(t=(e=>{for(let l=e=(0,r.uZ)(e,0,V());l<V();l++)if(!w(y.options[l]))return l;for(let l=e-1;0<=l;l--)if(!w(y.options[l]))return l})(t)||0)*e.itemHeight,u=()=>{t!==y.index&&(y.index=t,n&&l("change",t))};o&&a!==y.offset?v=u:u(),y.offset=a};var U=l=>{JSON.stringify(l)!==JSON.stringify(y.options)&&(y.options=p(l),H(e.defaultIndex))};const C=l=>(0,f.Kn)(l)&&e.textKey in l?l[e.textKey]:l,T=l=>(0,r.uZ)(Math.round(-l/e.itemHeight),0,V()-1),$=()=>{o=!1,y.duration=0,v&&(v(),v=null)},k=l=>{e.readonly||(S.start(l),o&&(l=I.value,l=(l=window.getComputedStyle(l).transform).slice(7,l.length-1).split(", ")[5],l=Number(l),y.offset=Math.min(0,l-W())),u=y.offset,y.duration=0,i=Date.now(),s=u,v=null)},F=()=>{var l,t;e.readonly||(t=y.offset-s,(l=Date.now()-i)<300&&15<Math.abs(t)?(l=Math.abs(t/l),t=y.offset+l/.003*(t<0?-1:1),l=T(t),y.duration=+e.swipeDuration,H(l,!0)):(t=T(y.offset),y.duration=200,H(t,!0),setTimeout((()=>{o=!1}),0)))},N=()=>{const l={height:e.itemHeight+"px"};return y.options.map(((a,u)=>{var i=C(a),r=w(a);r={role:"button",style:l,tabindex:r?-1:0,class:b("item",{disabled:r,selected:u===y.index}),onClick:()=>{var l;l=u,o||e.readonly||(v=null,y.duration=200,H(l,!0))}},i={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:i};return(0,n.Wm)("li",r,[t.option?t.option(a):(0,n.Wm)("div",i,null)])}))};return H(y.index),(0,d.NB)(x),(0,m.F)({state:y,setIndex:H,getValue:()=>y.options[y.index],setValue:e=>{var l=y["options"];for(let t=0;t<l.length;t++)if(C(l[t])===e)return H(t)},setOptions:U,hasOptions:()=>y.options.length,stopMomentum:$}),(0,n.YP)((()=>e.initialOptions),U),(0,n.YP)((()=>e.defaultIndex),(e=>H(e))),(0,d.OR)("touchmove",(l=>{e.readonly||(S.move(l),S.isVertical()&&(o=!0,(0,c.PF)(l,!0)),y.offset=(0,r.uZ)(u+S.deltaY.value,-V()*e.itemHeight,e.itemHeight),300<(l=Date.now())-i&&(i=l,s=y.offset))}),{target:g}),()=>(0,n.Wm)("div",{ref:g,class:[b(),e.className],onTouchstartPassive:k,onTouchend:F,onTouchcancel:F},[(0,n.Wm)("ul",{ref:I,style:{transform:`translate3d(0, ${y.offset+W()}px, 0)`,transitionDuration:y.duration+"ms",transitionProperty:y.duration?"all":"none"},class:b("wrapper"),onTransitionend:$},[N()])])}});const[y,S,V]=(0,o.do)("picker");t={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:(0,u.SI)(44),showToolbar:u.J5,swipeDuration:(0,u.SI)(1e3),visibleItemCount:(0,u.SI)(6),cancelButtonText:String,confirmButtonText:String},o=(0,i.l7)({},t,{columns:(0,u.Ce)(),valueKey:String,defaultIndex:(0,u.SI)(0),toolbarPosition:(0,u.SQ)("top"),columnsFieldNames:Object}),i=(0,n.aZ)({name:y,props:o,emits:["confirm","cancel","change"],setup(e,{emit:l,slots:t}){const o=(0,a.iH)(!1),u=(0,a.iH)(),i=(0,a.iH)([]),f=(0,n.Fl)((()=>{var l=e["columnsFieldNames"];return{text:(null==l?void 0:l.text)||e.valueKey||"text",values:(null==l?void 0:l.values)||"values",children:(null==l?void 0:l.children)||"children"}})),{children:p,linkChildren:h}=(0,d.$E)(x),g=(h(),(0,n.Fl)((()=>(0,r.LU)(e.itemHeight)))),b=(0,n.Fl)((()=>{var l=e.columns[0];if("object"==typeof l){if(f.value.children in l)return"cascade";if(f.value.values in l)return"object"}return"plain"})),w=()=>p.map((e=>e.state.index)),y=(e,l)=>{e=p[e],e&&(e.setOptions(l),o.value=!0)},W=l=>{let t={[f.value.children]:e.columns};var n=w();for(let e=0;e<=l;e++)t=t[f.value.children][n[e]];for(;t&&t[f.value.children];)l++,y(l,t[f.value.children]),t=t[f.value.children][t.defaultIndex||0]},H=e=>p[e],U=e=>{if(e=H(e),e)return e.getValue()},C=(e,l)=>{var t=H(e);t&&(t.setValue(l),"cascade"===b.value&&W(e))},T=e=>{if(e=H(e),e)return e.state.index},$=(e,l)=>{var t=H(e);t&&(t.setIndex(l),"cascade"===b.value&&W(e))},k=()=>p.map((e=>e.getValue())),F=e=>{"plain"===b.value?l(e,U(0),T(0)):l(e,k(),w())},N=e=>{"cascade"===b.value&&W(e),"plain"===b.value?l("change",U(0),T(0)):l("change",k(),e)},O=()=>{p.forEach((e=>e.stopMomentum())),F("confirm")},_=()=>F("cancel"),B=()=>{var l;if(e.showToolbar)return l=t.toolbar||t.default,(0,n.Wm)("div",{class:S("toolbar")},[l?l():[(l=e.cancelButtonText||V("cancel"),(0,n.Wm)("button",{type:"button",class:[S("cancel"),s.e9],onClick:_},[t.cancel?t.cancel():l])),t.title?t.title():e.title?(0,n.Wm)("div",{class:[S("title"),"van-ellipsis"]},[e.title]):void 0,(l=e.confirmButtonText||V("confirm"),(0,n.Wm)("button",{type:"button",class:[S("confirm"),s.e9],onClick:O},[t.confirm?t.confirm():l]))]])},z=()=>{var l=g.value*+e.visibleItemCount,a={height:l+"px"};return(0,n.Wm)("div",{ref:u,class:S("columns"),style:a},[i.value.map(((l,a)=>{var o;return(0,n.Wm)(I,{textKey:f.value.text,readonly:e.readonly,allowHtml:e.allowHtml,className:l.className,itemHeight:g.value,defaultIndex:null!=(o=l.defaultIndex)?o:+e.defaultIndex,swipeDuration:e.swipeDuration,initialOptions:l[f.value.values],visibleItemCount:e.visibleItemCount,onChange:()=>N(a)},{option:t.option})})),(e=>{var l;if(o.value)return l={height:g.value+"px"},e={backgroundSize:`100% ${(e-g.value)/2}px`},[(0,n.Wm)("div",{class:S("mask"),style:e},null),(0,n.Wm)("div",{class:[s.pj,S("frame")],style:l},null)]})(l)])};return(0,n.YP)((()=>e.columns),(()=>{var l=e["columns"];if("plain"===b.value)i.value=[{[f.value.values]:l}];else if("cascade"===b.value){var t,n=[];let l={[f.value.children]:e.columns};for(;l&&l[f.value.children];){var a=l[f.value.children];let o=null!=(t=l.defaultIndex)?t:+e.defaultIndex;for(;a[o]&&a[o].disabled;){if(!(o<a.length-1)){o=0;break}o++}n.push({[f.value.values]:l[f.value.children],className:l.className,defaultIndex:o}),l=a[o]}i.value=n}else i.value=l;o.value=i.value.some((e=>e[f.value.values]&&0!==e[f.value.values].length))||p.some((e=>e.hasOptions))}),{immediate:!0}),(0,d.OR)("touchmove",c.PF,{target:u}),(0,m.F)({confirm:O,getValues:k,setValues:e=>{e.forEach(((e,l)=>{C(l,e)}))},getIndexes:w,setIndexes:e=>{e.forEach(((e,l)=>{$(l,e)}))},getColumnIndex:T,setColumnIndex:$,getColumnValue:U,setColumnValue:C,getColumnValues:e=>{if(e=H(e),e)return e.state.options},setColumnValues:y}),()=>{var l;return(0,n.Wm)("div",{class:S()},["top"===e.toolbarPosition?B():null,e.loading?(0,n.Wm)(v.g,{class:S("loading")},null):null,null==(l=t["columns-top"])?void 0:l.call(t),z(),null==(l=t["columns-bottom"])?void 0:l.call(t),"bottom"===e.toolbarPosition?B():null])}}});const W=(0,l.n)(i)}}]);