(self.webpackChunkyunweibao_ad=self.webpackChunkyunweibao_ad||[]).push([[3476],{4831:function(e,t){"use strict";t.Z=(e,t)=>{var n,r,l=e.__vccOpts||e;for([n,r]of t)l[n]=r;return l}},2630:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(9895),l=(n(6699),n(2023),n(9554),n(1539),n(4747),n(2772),n(9600),n(4916),n(3123),n(2222),n(3710),n(9714),n(561),n(7327),n(4815)),i=n(5227),o=n(4355),a=n(714),u=n(9106),c=n(4616),s=n(7763),d=n(8215),f=n(3554),p=n(9823),m=n(4757),v=n(6176),h=n(4348),g=n(6235),b=(t={__name:"SessionSettings",setup:function(e){function t(){for(var e=W.value,t=(0,r.Z)(y.value),n=(0,r.Z)(Z.value),l=(e.includes("1")?n[1]="1":n[1]="0",e.includes("2")?n[2]="1":n[2]="0",t.forEach((function(e,t){1==x.value[t]?(e[1]="1",e[2]="0"):(e[2]="1",e[1]="0")})),[]),i=0,o=0;o<E.length;o++)-1!==C.indexOf(E[o])?(l.push(t[i].join("*")),i++):l[o]=E[o]+"*0*0";for(var a=[],u=[],c=0;c<l.length;c++){var s=l[c].split("*");a.push(s[1]),u.push(s[2])}e="$STORAGE,"+(e=[n[1]].concat(a,[n[2]],u)).toString(),console.log(e),h.E.ANsendSetting(e)}function n(){(0,c.F)(V("toast[0]")),k()}function b(e){console.log(e),y.value=[];e=e.split(";")[0];var t=[],n=[];e.split(",").splice(1).forEach((function(e){var r=e.split("*");-1!==e.indexOf("CIRCLE")?(r.filter((function(e,t){0!=e&&0!=t&&n.push(t.toString())})),W.value=[].concat(n),Z.value=r):(C.push(r[0]),r.filter((function(e,n){0!=e&&0!=n&&t.push(n.toString())})),y.value.push(r))})),x.value=t}function S(e){-1!==e.indexOf("Success")?c.F.success(V("toast[1]")):c.F.fail(V("toast[2]"))}function k(){h.E.ANSend("$STORAGE")}var V=(0,g.QT)().t,w=(0,i.iH)(V("SessionSettings.navTitle")),W=(0,i.iH)([]),x=(0,i.iH)([]),y=(0,i.iH)([]),Z=(0,i.iH)([]),C=[],E=["HDD","HDD2","SD","SD2","EXT"];return(0,l.aZ)({name:"yunweibao-SessionSettings"}),k(),(0,l.bv)((function(){window.callJSResult=b,window.callJSResult_Status=S})),function(e,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(a.Z,{navTitle:w.value,leftArrow:!1},null,8,["navTitle"]),(0,l.Wm)((0,i.SU)(s.T),{inset:"",style:{"margin-top":"10px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(d.b),{value:e.$t("SessionSettings.template[0]"),"is-link":""},{"right-icon":(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.c),{modelValue:W.value,"onUpdate:modelValue":r[0]||(r[0]=function(e){return W.value=e}),direction:"horizontal"},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(p.X),{name:"1",shape:"square"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,o.zw)(e.$t("SessionSettings.template[1]")),1)]})),_:1}),(0,l.Wm)((0,i.SU)(p.X),{name:"2",shape:"square"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,o.zw)(e.$t("SessionSettings.template[2]")),1)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["value"])]})),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.value,(function(t,n){return(0,l.wg)(),(0,l.j4)((0,i.SU)(s.T),{inset:"",style:{"margin-top":"10px"},key:n},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(d.b),{value:t[0],"is-link":""},{"right-icon":(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(m.E),{modelValue:x.value[n],"onUpdate:modelValue":function(e){return x.value[n]=e},direction:"horizontal"},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(v.Y),{name:"1"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,o.zw)(e.$t("SessionSettings.template[3]")),1)]})),_:1}),(0,l.Wm)((0,i.SU)(v.Y),{name:"2"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,o.zw)(e.$t("SessionSettings.template[4]")),1)]})),_:1})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["value"])]})),_:2},1024)})),128)),(0,l.Wm)(u.Z,{onBottomSubmit:t,onBottomSearch:n})],64)}}},(0,n(4831).Z)(t,[["__scopeId","data-v-692585af"]]))},8533:function(e,t,n){"use strict";var r=n(2092).forEach;n=n(9341)("forEach");e.exports=n?[].forEach:function(e){return r(this,e,1<arguments.length?arguments[1]:void 0)}},2092:function(e,t,n){function r(e){var t=1==e,n=2==e,r=3==e,i=4==e,d=6==e,f=7==e,p=5==e||d;return function(m,v,h,g){for(var b,S,k=a(m),V=o(k),w=l(v,h),W=u(V),x=0,y=(v=g||c,t?v(m,W):n||f?v(m,0):void 0);x<W;x++)if((p||x in V)&&(S=w(b=V[x],x,k),e))if(t)y[x]=S;else if(S)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:s(y,b)}else switch(e){case 4:return!1;case 7:s(y,b)}return d?-1:r||i?i:y}}var l=n(9974),i=n(1702),o=n(8361),a=n(7908),u=n(6244),c=n(5417),s=i([].push);e.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6),filterReject:r(7)}},4964:function(e,t,n){var r=n(5112)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(e){}}return!1}},3929:function(e,t,n){var r=n(7850),l=TypeError;e.exports=function(e){if(r(e))throw l("The method doesn't accept regular expressions");return e}},7327:function(e,t,n){"use strict";var r=n(2109),l=n(2092).filter;r({target:"Array",proto:!0,forced:!n(1194)("filter")},{filter:function(e){return l(this,e,1<arguments.length?arguments[1]:void 0)}})},9554:function(e,t,n){"use strict";var r=n(2109);n=n(8533);r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},6699:function(e,t,n){"use strict";var r=n(2109),l=n(1318).includes,i=n(7293);n=n(1223);r({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(e){return l(this,e,1<arguments.length?arguments[1]:void 0)}}),n("includes")},2023:function(e,t,n){"use strict";var r=n(2109),l=n(1702),i=n(3929),o=n(4488),a=n(1340),u=(n=n(4964),l("".indexOf));r({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~u(a(o(this)),a(i(e)),1<arguments.length?arguments[1]:void 0)}})},4747:function(e,t,n){function r(t){if(t&&t.forEach!==u)try{c(t,"forEach",u)}catch(e){t.forEach=u}}var l,i=n(7854),o=n(8324),a=n(8509),u=n(8533),c=n(8880);for(l in o)o[l]&&r(i[l]&&i[l].prototype);r(a)},7763:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});t=n(5140);var r=n(4815),l=n(6263),i=n(538),o=n(8405);const[a,u]=(0,l.do)("cell-group");n={title:String,inset:Boolean,border:i.J5},l=(0,r.aZ)({name:a,inheritAttrs:!1,props:n,setup(e,{slots:t,attrs:n}){const l=()=>{var l;return(0,r.Wm)("div",(0,r.dG)({class:[u({inset:e.inset}),{[o.r5]:e.border&&!e.inset}]},n),[null==(l=t.default)?void 0:l.call(t)])};return()=>e.title||t.title?(0,r.Wm)(r.HY,null,[(0,r.Wm)("div",{class:u("title",{inset:e.inset})},[t.title?t.title():e.title]),l()]):l()}});const c=(0,t.n)(l)},2619:function(e,t,n){"use strict";n.d(t,{Z:function(){return f},x:function(){return d}});var r=n(4815),l=(t=n(6263),n(538)),i=n(5375),o=n(479),a=n(9852),u=n(5087);const[c,s]=(0,t.do)("cell"),d={icon:String,size:String,title:l.Or,value:l.Or,label:l.Or,center:Boolean,isLink:Boolean,border:l.J5,required:Boolean,iconPrefix:String,valueClass:l.Vg,labelClass:l.Vg,titleClass:l.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}};n=(0,i.l7)({},d,a.g2);var f=(0,r.aZ)({name:c,props:n,setup(e,{slots:t}){const n=(0,a.yj)(),l=()=>{if(t.title||(0,o.Xq)(e.title))return(0,r.Wm)("div",{class:[s("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():(0,r.Wm)("span",null,[e.title]),(()=>{if(t.label||(0,o.Xq)(e.label))return(0,r.Wm)("div",{class:[s("label"),e.labelClass]},[t.label?t.label():e.label])})()])};return()=>{var{size:i,center:a,border:c,isLink:d,required:f}=e,p=null!=(p=e.clickable)?p:d,d={center:a,required:f,clickable:p,borderless:!c};return i&&(d[i]=!!i),(0,r.Wm)("div",{class:s(d),role:p?"button":void 0,tabindex:p?0:void 0,onClick:n},[t.icon?t.icon():e.icon?(0,r.Wm)(u.J,{name:e.icon,class:s("left-icon"),classPrefix:e.iconPrefix},null):void 0,l(),(()=>{var n,l=t.value||t.default;if(l||(0,o.Xq)(e.value))return n=t.title||(0,o.Xq)(e.title),(0,r.Wm)("div",{class:[s("value",{alone:!n}),e.valueClass]},[l?l():(0,r.Wm)("span",null,[e.value])])})(),t["right-icon"]?t["right-icon"]():e.isLink?(a=e.arrowDirection?"arrow-"+e.arrowDirection:"arrow",(0,r.Wm)(u.J,{name:a,class:s("right-icon")},null)):void 0,null==(f=t.extra)?void 0:f.call(t)])}}})},8215:function(e,t,n){"use strict";n.d(t,{b:function(){return r}}),t=n(5140),n=n(2619);const r=(0,t.n)(n.Z)},8306:function(e,t,n){"use strict";n.d(t,{Q:function(){return c},Z:function(){return s}});var r=n(4815),l=(t=n(6263),n(538)),i=n(712),o=n(4685);const[a,u]=(0,t.do)("checkbox-group");n={max:l.Or,disabled:Boolean,iconSize:l.Or,direction:String,modelValue:(0,l.Ce)(),checkedColor:String};const c=Symbol(a);var s=(0,r.aZ)({name:a,props:n,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){const{children:l,linkChildren:a}=(0,i.$E)(c),s=e=>t("update:modelValue",e);return(0,r.YP)((()=>e.modelValue),(e=>t("change",e))),(0,o.F)({toggleAll:(e={})=>{const{checked:t,skipDisabled:n}=e="boolean"==typeof e?{checked:e}:e;e=l.filter((e=>!!e.props.bindGroup&&(e.props.disabled&&n?e.checked.value:null!=t?t:!e.checked.value))).map((e=>e.name)),s(e)}}),(0,i.aM)((()=>e.modelValue)),a({props:e,updateValue:s}),()=>{var t;return(0,r.Wm)("div",{class:u([e.direction])},[null==(t=n.default)?void 0:t.call(n)])}}})},3554:function(e,t,n){"use strict";n.d(t,{c:function(){return r}}),t=n(5140),n=n(8306);const r=(0,t.n)(n.Z)},4902:function(e,t,n){"use strict";n.d(t,{Z:function(){return c},m:function(){return u}});var r=n(4815),l=n(5227),i=(t=n(538),n(5375)),o=n(2345),a=n(5087);const u={name:t.Vg,shape:(0,t.SQ)("round"),disabled:Boolean,iconSize:t.Or,modelValue:t.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var c=(0,r.aZ)({props:(0,i.l7)({},u,{bem:(0,t.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:t.J5}),emits:["click","toggle"],setup(e,{emit:t,slots:n}){const i=(0,l.iH)(),u=t=>{if(e.parent&&e.bindGroup)return e.parent.props[t]},c=(0,r.Fl)((()=>u("disabled")||e.disabled)),s=(0,r.Fl)((()=>u("direction"))),d=(0,r.Fl)((()=>{var t=e.checkedColor||u("checkedColor");if(t&&e.checked&&!c.value)return{borderColor:t,backgroundColor:t}})),f=n=>{var r=n["target"],l=i.value;l=l===r||(null==l?void 0:l.contains(r));c.value||!l&&e.labelDisabled||t("toggle"),t("click",n)},p=()=>{var{bem:t,shape:l,checked:s}=e,f=e.iconSize||u("iconSize");return(0,r.Wm)("div",{ref:i,class:t("icon",[l,{disabled:c.value,checked:s}]),style:{fontSize:(0,o.Nn)(f)}},[n.icon?n.icon({checked:s,disabled:c.value}):(0,r.Wm)(a.J,{name:"success",style:d.value},null)])},m=()=>{if(n.default)return(0,r.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:c.value}])},[n.default()])};return()=>{var t="left"===e.labelPosition?[m(),p()]:[p(),m()];return(0,r.Wm)("div",{role:e.role,class:e.bem([{disabled:c.value,"label-disabled":e.labelDisabled},s.value]),tabindex:c.value?void 0:0,"aria-checked":e.checked,onClick:f},[t])}}})},9823:function(e,t,n){"use strict";n.d(t,{X:function(){return p}});t=n(5140);var r=n(4815),l=n(6263),i=n(5375),o=n(538),a=n(8306),u=n(712),c=n(4685),s=n(4902);const[d,f]=(0,l.do)("checkbox");n=(0,i.l7)({},s.m,{bindGroup:o.J5}),l=(0,r.aZ)({name:d,props:n,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){const l=(0,u.NB)(a.Q)["parent"],o=(0,r.Fl)((()=>l&&e.bindGroup?-1!==l.props.modelValue.indexOf(e.name):!!e.modelValue)),d=(n=!o.value)=>{var r,i,a,u;l&&e.bindGroup?(r=n,i=e.name,({max:a,modelValue:u}=l.props),u=u.slice(),r?a&&u.length>=a||u.includes(i)||(u.push(i),e.bindGroup&&l.updateValue(u)):-1!==(r=u.indexOf(i))&&(u.splice(r,1),e.bindGroup&&l.updateValue(u))):t("update:modelValue",n)};return(0,r.YP)((()=>e.modelValue),(e=>t("change",e))),(0,c.F)({toggle:d,props:e,checked:o}),(0,u.aM)((()=>e.modelValue)),()=>(0,r.Wm)(s.Z,(0,r.dG)({bem:f,role:"checkbox",parent:l,checked:o.value,onToggle:d},e),(0,i.ei)(n,["default","icon"]))}});const p=(0,t.n)(l)},1718:function(e,t,n){"use strict";n.d(t,{Z:function(){return c},x:function(){return u}});var r=n(4815),l=(t=n(6263),n(538)),i=n(712);const[o,a]=(0,t.do)("radio-group");n={disabled:Boolean,iconSize:l.Or,direction:String,modelValue:l.Vg,checkedColor:String};const u=Symbol(o);var c=(0,r.aZ)({name:o,props:n,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){var l=(0,i.$E)(u)["linkChildren"];return(0,r.YP)((()=>e.modelValue),(e=>t("change",e))),l({props:e,updateValue:e=>t("update:modelValue",e)}),(0,i.aM)((()=>e.modelValue)),()=>{var t;return(0,r.Wm)("div",{class:a([e.direction]),role:"radiogroup"},[null==(t=n.default)?void 0:t.call(n)])}}})},4757:function(e,t,n){"use strict";n.d(t,{E:function(){return r}}),t=n(5140),n=n(1718);const r=(0,t.n)(n.Z)},6176:function(e,t,n){"use strict";n.d(t,{Y:function(){return d}});t=n(5140);var r=n(4815),l=n(6263),i=n(5375),o=n(1718),a=n(712),u=n(4902);const[c,s]=(0,l.do)("radio");n=(0,r.aZ)({name:c,props:u.m,emits:["update:modelValue"],setup(e,{emit:t,slots:n}){const l=(0,a.NB)(o.x)["parent"],c=()=>{l?l.updateValue(e.name):t("update:modelValue",e.name)};return()=>(0,r.Wm)(u.Z,(0,r.dG)({bem:s,role:"radio",parent:l,checked:(l?l.props:e).modelValue===e.name,onToggle:c},e),(0,i.ei)(n,["default","icon"]))}});const d=(0,t.n)(n)}}]);