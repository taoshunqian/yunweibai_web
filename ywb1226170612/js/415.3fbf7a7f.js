"use strict";(self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[]).push([[415],{9841:function(e,l,a){a.d(l,{Z:function(){return s}});var n=a(4255),t=a(4740),o=a(1471),u={__name:"AlarmPicker",props:["showPicker","columns","defaultIndex"],emits:["cancel","confirm"],setup(e,{emit:l}){const a=e,u=(0,t.iH)([]),i=(0,t.iH)(0);(0,n.m0)((async()=>{u.value=a.columns,i.value=a.defaultIndex}),{flush:"post"});const r=e=>{var a=u.value.indexOf(e);l("confirm",[e,a])},s=()=>{l("cancel",!1)};return(0,n.aZ)({name:"yunweibao-AlarmPicker"}),(e,l)=>((0,n.wg)(),(0,n.j4)((0,t.SU)(o.c),{title:"",columns:u.value,"default-index":i.value,onCancel:s,"confirm-button-text":"确认","cancel-button-text":"取消",onConfirm:r},null,8,["columns","default-index"]))}},i=a(3334);const r=(0,i.Z)(u,[["__scopeId","data-v-597f9fb2"]]);var s=r},8530:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var n=a(4255),t=a(4740),o=a(6787),u=a(1201),i=a(4653),r=a(5518),s=a(2634),c=a(8524),d=a(1061),v=a(1374),m=a(9841),p=a(3539),b=a(1928),f=a(7508);const h={style:{color:"green"}};var g={__name:"CodeStreamDetails",setup(e){const{t:l}=(0,f.QT)();let a=(0,b.yj)();const g=a.query.channel,k=a.query.type,S=["D1","CIF","QCIF","960H","HALF_D1","720P","1080P","1080N","720N","960P"],W=["很差","较差","一般","好","很好","最好"],w=["H264","H264+","H265","H265+"],C=["定码率","变码率"],x=(0,t.iH)([]),V=(0,t.iH)([]),_=(0,t.iH)("主/子码流 1"),U=(0,t.iH)(!1),H=(0,t.iH)([]),y=(0,t.iH)([]),O=(0,t.iH)(""),Z=(0,t.iH)(0),P=(0,t.iH)(0),B=(0,t.iH)(!0);let D=[],F="",T=[],G=[];const A=e=>{switch(e){case 1:D=S,y.value=q(S,G[0]),Z.value=H.value[3],P.value=3;break;case 2:D=C,y.value=C,Z.value=H.value[5],P.value=5;break;case 3:D=W,y.value=q(W,G[4]),Z.value=H.value[7],P.value=7;break;case 4:D=w,y.value=q(w,G[5]),Z.value=H.value[8],P.value=8;break;case 5:y.value=V.value,Z.value=V.value.indexOf(H.value[4]),P.value=4;break;case 6:y.value=x.value,Z.value=x.value.indexOf(H.value[6]),P.value=6;break}U.value=!0},E=e=>{console.log(e),4==P.value||6==P.value?H.value[P.value]=e[0]:H.value[P.value]=D.indexOf(e[0]),U.value=!1},q=(e,l)=>{console.log(l);for(var a=[],n=0;n<e.length;n++)l.includes(n.toString())&&a.push(e[n]);return a},I=e=>{var l=[],a="",n=[];e.forEach(((e,n)=>{var t=e[8].split(":"),o=e.slice(0,8);n==g-1&&(a=t[1]),o.push(t[0]),l.push(o)})),T=l;for(var t=a.split("@@"),o=0;o<t.length;o++){var u=t[o].split("*");n.push(u)}return V.value=n[1],x.value=n[3],G=n,l},R=()=>{X()},J=()=>{let e=[...H.value];e[2]=+B.value,T[g-1]=e;let l=[];T.forEach((e=>{l.push(e.join("~"))}));var a=F+","+l.toString();console.log("------------------"),console.log(a),p.E.ANsendSetting(a)};(0,n.aZ)({name:"yunweibao-CodeStream"});const N=e=>{H.value=[];var l=e.split(";")[0],a=l.split(",").splice(1),n=[];a.forEach((e=>{var l=e.split("#");n.push(l)})),H.value=I(n)[g-1];var t=3600*H.value[6]/1024/1024/8;O.value=t.toFixed(2),B.value=!!+H.value[2]},z=e=>{-1!==e.indexOf("Success")?r.F.success(l("toast[1]")):r.F.fail(l("toast[2]"))},X=()=>{try{return void(1==k?(_.value="主码流 通道"+g,p.E.ANSend("$MAINRECORDV3"),F="$MAINRECORDV3"):(_.value="子码流 通道"+g,p.E.ANSend("$SUBRECORDV3"),F="$SUBRECORDV3"))}catch(e){console.log(e)}};return X(),(0,n.bv)((()=>{window.callJSResult=N,window.callJSResult_Status=z})),(e,l)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u.Z,{navTitle:_.value,leftArrow:!1,lavelMuch:!0},null,8,["navTitle"]),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"音频叠加"},{"right-icon":(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(d.X),{modelValue:B.value,"onUpdate:modelValue":l[0]||(l[0]=e=>B.value=e),shape:"square"},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"分辨率","is-link":"",value:S[H.value[3]],onClick:l[1]||(l[1]=e=>A(1))},null,8,["value"])])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"帧率","is-link":"",value:H.value[4],onClick:l[2]||(l[2]=e=>A(5))},null,8,["value"])])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"位率类型","is-link":"",value:C[H.value[5]],onClick:l[3]||(l[3]=e=>A(2))},null,8,["value"])])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"位率","is-link":"",value:H.value[6],onClick:l[4]||(l[4]=e=>A(6))},null,8,["value"])])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"画质","is-link":"",value:W[H.value[7]],onClick:l[5]||(l[5]=e=>A(3))},null,8,["value"])])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"编码标准","is-link":"",value:w[H.value[8]],onClick:l[6]||(l[6]=e=>A(4))},null,8,["value"])])),_:1}),(0,n.Wm)((0,t.SU)(s.T),{inset:"",class:"cell-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,t.SU)(c.b),{title:"存储大小"},{"right-icon":(0,n.w5)((()=>[(0,n._)("span",h,(0,o.zw)(O.value)+" GB/h",1)])),_:1})])),_:1}),(0,n.Wm)((0,t.SU)(v.G),{round:"",show:U.value,"onUpdate:show":l[8]||(l[8]=e=>U.value=e),position:"bottom"},{default:(0,n.w5)((()=>[(0,n.Wm)(m.Z,{columns:y.value,showPicker:U.value,defaultIndex:Z.value,onConfirm:E,onCancel:l[7]||(l[7]=e=>U.value=!1)},null,8,["columns","showPicker","defaultIndex"])])),_:1},8,["show"]),(0,n.Wm)(i.Z,{onBottomSearch:R,onBottomSubmit:J})],64))}},k=a(3334);const S=(0,k.Z)(g,[["__scopeId","data-v-a97203be"]]);var W=S},3334:function(e,l){l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[n,t]of l)a[n]=t;return a}},2634:function(e,l,a){a.d(l,{T:function(){return v}});var n=a(5387),t=a(4255),o=a(8314),u=a(8030),i=a(2810);const[r,s]=(0,o["do"])("cell-group"),c={title:String,inset:Boolean,border:u.J5};var d=(0,t.aZ)({name:r,inheritAttrs:!1,props:c,setup(e,{slots:l,attrs:a}){const n=()=>{var n;return(0,t.Wm)("div",(0,t.dG)({class:[s({inset:e.inset}),{[i.r5]:e.border&&!e.inset}]},a),[null==(n=l.default)?void 0:n.call(l)])},o=()=>(0,t.Wm)("div",{class:s("title",{inset:e.inset})},[l.title?l.title():e.title]);return()=>e.title||l.title?(0,t.Wm)(t.HY,null,[o(),n()]):n()}});const v=(0,n.n)(d)},8597:function(e,l,a){a.d(l,{Z:function(){return p},x:function(){return v}});var n=a(4255),t=a(8314),o=a(8030),u=a(8577),i=a(61),r=a(6549),s=a(5400);const[c,d]=(0,t["do"])("cell"),v={icon:String,size:String,title:o.Or,value:o.Or,label:o.Or,center:Boolean,isLink:Boolean,border:o.J5,required:Boolean,iconPrefix:String,valueClass:o.Vg,labelClass:o.Vg,titleClass:o.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},m=(0,u.l7)({},v,r.g2);var p=(0,n.aZ)({name:c,props:m,setup(e,{slots:l}){const a=(0,r.yj)(),t=()=>{const a=l.label||(0,i.Xq)(e.label);if(a)return(0,n.Wm)("div",{class:[d("label"),e.labelClass]},[l.label?l.label():e.label])},o=()=>{if(l.title||(0,i.Xq)(e.title))return(0,n.Wm)("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[l.title?l.title():(0,n.Wm)("span",null,[e.title]),t()])},u=()=>{const a=l.value||l.default,t=a||(0,i.Xq)(e.value);if(t){const t=l.title||(0,i.Xq)(e.title);return(0,n.Wm)("div",{class:[d("value",{alone:!t}),e.valueClass]},[a?a():(0,n.Wm)("span",null,[e.value])])}},c=()=>l.icon?l.icon():e.icon?(0,n.Wm)(s.J,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,v=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const l=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,n.Wm)(s.J,{name:l,class:d("right-icon")},null)}};return()=>{var t,i;const{size:r,center:s,border:m,isLink:p,required:b}=e,f=null!=(t=e.clickable)?t:p,h={center:s,required:b,clickable:f,borderless:!m};return r&&(h[r]=!!r),(0,n.Wm)("div",{class:d(h),role:f?"button":void 0,tabindex:f?0:void 0,onClick:a},[c(),o(),u(),v(),null==(i=l.extra)?void 0:i.call(l)])}}})},8524:function(e,l,a){a.d(l,{b:function(){return o}});var n=a(5387),t=a(8597);const o=(0,n.n)(t.Z)},5611:function(e,l,a){a.d(l,{Q:function(){return d},Z:function(){return v}});var n=a(4255),t=a(8314),o=a(8030),u=a(5290),i=a(7044);const[r,s]=(0,t["do"])("checkbox-group"),c={max:o.Or,disabled:Boolean,iconSize:o.Or,direction:String,modelValue:(0,o.Ce)(),checkedColor:String},d=Symbol(r);var v=(0,n.aZ)({name:r,props:c,emits:["change","update:modelValue"],setup(e,{emit:l,slots:a}){const{children:t,linkChildren:o}=(0,u.$E)(d),r=e=>l("update:modelValue",e),c=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:l,skipDisabled:a}=e,n=t.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&a?e.checked.value:null!=l?l:!e.checked.value))),o=n.map((e=>e.name));r(o)};return(0,n.YP)((()=>e.modelValue),(e=>l("change",e))),(0,i.F)({toggleAll:c}),(0,u.aM)((()=>e.modelValue)),o({props:e,updateValue:r}),()=>{var l;return(0,n.Wm)("div",{class:s([e.direction])},[null==(l=a.default)?void 0:l.call(a)])}}})},8794:function(e,l,a){a.d(l,{Z:function(){return c},m:function(){return s}});var n=a(4255),t=a(4740),o=a(8030),u=a(8577),i=a(4089),r=a(5400);const s={name:o.Vg,shape:(0,o.SQ)("round"),disabled:Boolean,iconSize:o.Or,modelValue:o.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var c=(0,n.aZ)({props:(0,u.l7)({},s,{bem:(0,o.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:o.J5}),emits:["click","toggle"],setup(e,{emit:l,slots:a}){const o=(0,t.iH)(),u=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},s=(0,n.Fl)((()=>u("disabled")||e.disabled)),c=(0,n.Fl)((()=>u("direction"))),d=(0,n.Fl)((()=>{const l=e.checkedColor||u("checkedColor");if(l&&e.checked&&!s.value)return{borderColor:l,backgroundColor:l}})),v=a=>{const{target:n}=a,t=o.value,u=t===n||(null==t?void 0:t.contains(n));s.value||!u&&e.labelDisabled||l("toggle"),l("click",a)},m=()=>{const{bem:l,shape:t,checked:c}=e,v=e.iconSize||u("iconSize");return(0,n.Wm)("div",{ref:o,class:l("icon",[t,{disabled:s.value,checked:c}]),style:{fontSize:(0,i.Nn)(v)}},[a.icon?a.icon({checked:c,disabled:s.value}):(0,n.Wm)(r.J,{name:"success",style:d.value},null)])},p=()=>{if(a.default)return(0,n.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:s.value}])},[a.default()])};return()=>{const l="left"===e.labelPosition?[p(),m()]:[m(),p()];return(0,n.Wm)("div",{role:e.role,class:e.bem([{disabled:s.value,"label-disabled":e.labelDisabled},c.value]),tabindex:s.value?void 0:0,"aria-checked":e.checked,onClick:v},[l])}}})},1061:function(e,l,a){a.d(l,{X:function(){return f}});var n=a(5387),t=a(4255),o=a(8314),u=a(8577),i=a(8030),r=a(5611),s=a(5290),c=a(7044),d=a(8794);const[v,m]=(0,o["do"])("checkbox"),p=(0,u.l7)({},d.m,{bindGroup:i.J5});var b=(0,t.aZ)({name:v,props:p,emits:["change","update:modelValue"],setup(e,{emit:l,slots:a}){const{parent:n}=(0,s.NB)(r.Q),o=l=>{const{name:a}=e,{max:t,modelValue:o}=n.props,u=o.slice();if(l){const l=t&&u.length>=t;l||u.includes(a)||(u.push(a),e.bindGroup&&n.updateValue(u))}else{const l=u.indexOf(a);-1!==l&&(u.splice(l,1),e.bindGroup&&n.updateValue(u))}},i=(0,t.Fl)((()=>n&&e.bindGroup?-1!==n.props.modelValue.indexOf(e.name):!!e.modelValue)),v=(a=!i.value)=>{n&&e.bindGroup?o(a):l("update:modelValue",a)};return(0,t.YP)((()=>e.modelValue),(e=>l("change",e))),(0,c.F)({toggle:v,props:e,checked:i}),(0,s.aM)((()=>e.modelValue)),()=>(0,t.Wm)(d.Z,(0,t.dG)({bem:m,role:"checkbox",parent:n,checked:i.value,onToggle:v},e),(0,u.ei)(a,["default","icon"]))}});const f=(0,n.n)(b)}}]);
//# sourceMappingURL=415.3fbf7a7f.js.map