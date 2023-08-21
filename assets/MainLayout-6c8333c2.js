import{j as t,s as i,t as s,N as lt,u as Ve,r as l,a as oe,g as ct,b as Ae,l as dt,P as b,m as K,R as ut,c as pt,d as ht,e as xt,f as be,h as gt,i as mt,k as ft,n as bt,o as vt,L as ve,O as yt,p as wt}from"./index-17318f2c.js";import{F as kt,E as jt,c as $t,a as Ct,b as Rt,u as Ft,d as St,M as le}from"./index.esm-ad096b5a.js";import{G as Q,l as ye,a as Tt,b as It,c as Lt,d as Mt,e as zt,f as ce,g as Ee,h as He,i as Ne,F as Bt,L as we}from"./mediaVeriables-c8ee29f5.js";import{u as P}from"./useTranslation-c030a84c.js";import{c as Pe,b as Vt}from"./Variables-7c66d345.js";import{R as Oe,P as At,T as Et,X as Ht}from"./XClose-b72d0364.js";import{u as Nt,d as Pt,T as Ot,c as Ue,g as Ut,a as Dt,s as Y,b as De,_ as y,e as Wt,f as qt,h as We,i as X,j as Gt,A as ke}from"./Avatar-01d2144c.js";import{A as je}from"./index-17254aa5.js";function _t(e){return Q({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"}}]})(e)}const Xt=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",...e,children:t.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.667,d:"M21.333 24 24 26.667l5.333-5.333M16 20.667h-6c-1.861 0-2.791 0-3.548.23a5.331 5.331 0 0 0-3.555 3.556c-.23.757-.23 1.687-.23 3.548v0M13.333 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})}),Kt=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",...e,children:t.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.667,d:"M28 13.333H4m24 3.334v-4.933c0-2.24 0-3.36-.436-4.216a3.991 3.991 0 0 0-1.748-1.748c-.856-.436-1.976-.436-4.216-.436H10.4c-2.24 0-3.36 0-4.216.436a3.991 3.991 0 0 0-1.748 1.748C4 8.374 4 9.494 4 11.734v11.2c0 2.24 0 3.36.436 4.216a3.991 3.991 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436H16m5.333-26.667V8M10.667 2.667V8m8.666 17.333L22 28l6-6"})}),Qt=i.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 424px;
  @media screen and (${s.breakpoints.m} < width) {
    margin-bottom: 439px;
    gap: 16px;
  }
`,ie=i(lt)`
  color: ${({theme:e})=>e.colors.userNavItem};
  background-color: ${({theme:e})=>e.colors.backgroundSidebar};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;

  width: 100%;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  @media screen and (${s.breakpoints.m} < width) {
    font-size: 16px;
  }
  &:hover {
    color: ${({theme:e})=>e.colors.activeUserNavItem};
    background-color: ${({theme:e})=>e.colors.backgroundActiveUserNavItem};
    border-radius: 8px;
  }
  &.active {
    color: ${({theme:e})=>e.colors.activeUserNavItem};
    background-color: ${({theme:e})=>e.colors.backgroundActiveUserNavItem};
    border-radius: 8px;
  }
`,se=i.div`
  display: block;
  width: 24px;
  height: 24px;
  & > * {
    height: 100%;
    width: 100%;
  }
`;function Yt(e){const n=Ve(),[o,r]=l.useState(),{t:c}=P();return l.useEffect(()=>{r(n.pathname.includes("/calendar"))},[n]),t.jsxs(Qt,{children:[t.jsx("li",{children:t.jsxs(ie,{to:oe.accountPage,onClick:e,children:[t.jsx(se,{children:t.jsx(Xt,{})}),c("My Account")]})},"AccountPage"),t.jsx("li",{children:t.jsxs(ie,{to:`${oe.navFromLogIn}/${ct()}`,className:o&&"active",onClick:e,children:[t.jsx(se,{children:t.jsx(Kt,{})}),c("Calendar")]})},"CalendarPage"),t.jsx("li",{children:t.jsxs(ie,{to:oe.statisticsPage,onClick:e,children:[t.jsx(se,{children:t.jsx(_t,{})}),c("Statistics")]})},"StatisticsPage")]})}const Jt=i.div`
  display: flex;
  width: 136px;
  gap: 10px;
  align-items: center;
  margin-bottom: 32px;
  @media screen and (${s.breakpoints.s} < width <=${s.breakpoints.m}) {
    width: 160px;
  }
  @media screen and (${s.breakpoints.m} < width) {
    width: 222px;
  }
`,Zt=i.h1`
  color: ${({theme:e})=>e.colors.goose};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;
  @media screen and (${s.breakpoints.s} < width <= ${s.breakpoints.m}) {
    line-height: 1.4;
  }
  @media screen and (${s.breakpoints.m} < width) {
    font-size: 24px;
    line-height: 1;
  }
`,en=i.img`
  width: 36px;
  @media screen and (${s.breakpoints.s} < width <=${s.breakpoints.m}) {
    width: 60px;
  }
  @media screen and (${s.breakpoints.m} < width) {
    width: 70px;
  }
`;function tn(){return t.jsxs(Jt,{children:[t.jsx(en,{srcSet:`${ye} 1x,
        ${Tt} 2x,
        ${It} 3x,
        ${Lt} 1x,
        ${Mt} 2x,
        ${zt} 3x,
        ${ce} 1x,
        ${Ee} 2x,
        ${He} 3x`,src:ye,alt:"SideBarLogo",type:"image/png"}),t.jsxs(Zt,{children:["G",t.jsx("i",{children:"oo"}),"seTrack"]})]})}const nn=e=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",...e,children:t.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3.2,d:"M21.333 22.667 28 16m0 0-6.667-6.667M28 16H12m0-12h-1.6c-2.24 0-3.36 0-4.216.436a3.991 3.991 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v11.2c0 2.24 0 3.36.436 4.216a3.996 3.996 0 0 0 1.748 1.748C7.04 28 8.16 28 10.4 28H12"})}),on=i.button`
  padding: 14px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;

  cursor: pointer;
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: 130px;
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: ${({theme:e})=>e.colors.white};
  background-color: #3e85f3;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media screen and (${s.breakpoints.s}< width <= ${s.breakpoints.m}) {
    bottom: 24px;
    left: 32px;
    width: 141px;
    font-size: 18px;
    line-height: 1.3;
    padding: 14px 22px;
    gap: 10px;
  }

  @media screen and (${s.breakpoints.m}< width <= ${s.breakpoints.l}) {
    bottom: 24px;
    left: 24px;
  }
`,sn=i.div`
  display: block;
  width: 18px;
  height: 18px;
  & > * {
    height: 100%;
    width: 100%;
  }
  @media screen and (width > ${s.breakpoints.s}) {
    width: 20px;
    height: 20px;
  }
`;function an(){const e=Ae(),n=()=>e(dt()),{t:o}=P();return t.jsx(t.Fragment,{children:t.jsxs(on,{type:"button",onClick:n,children:[o("Log Out"),t.jsx(sn,{children:t.jsx(nn,{})})]})})}function rn(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}const ln=i.button`
  position: absolute;
  top: 36px;
  right: 26px;
`,cn=i(rn)`
  color: ${({theme:e})=>e.colors.loaderWrapper};
  width: 24px;
  height: 24px;
  @media screen and (${s.breakpoints.s} < width <=${s.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }

  @media screen and (${s.breakpoints.m} < width) {
    display: none;
  }
`;function qe({callBackCls:e}){return t.jsx(ln,{onClick:()=>e(),children:t.jsx(cn,{})})}qe.propTypes={callBackCls:b.func.isRequired};const dn=i.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  background: ${K.black};

  opacity: ${({open:e})=>e?1:0};
  pointer-events: ${({open:e})=>e?"all":"none"};

  transition: opacity 100ms linear;
`,un=i.aside`
  position: absolute;
  z-index: 2;
  left: -225px;
  background-color: ${({theme:e})=>e.colors.backgroundSidebar};
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  padding: 24px 20px;
  transform: ${({open:e})=>e?"translateX(100%)":"translateX(0)"};
  transition: transform 100ms ease-in-out;
  @media screen and (${s.breakpoints.s} < width <=${s.breakpoints.m}) {
    position: absolute;
    z-index: 2;
    left: -290px;
    width: 290px;
    padding: 32px;
  }
  @media screen and (${s.breakpoints.m} < width) {
    position: relative;
    z-index: 0;
    left: 0px;
    width: 290px;
    padding: 24px;
    transform: none;
    transition: none;
  }
`,pn=i.h3`
  font-size: 12px;
  margin-bottom: 24px;
  color: ${({theme:e})=>e.colors.labelInForm};
  @media screen and (${s.breakpoints.s} < width <=${s.breakpoints.m}) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;function Ge({open:e,callBackCls:n}){const{t:o}=P();return t.jsxs(t.Fragment,{children:[t.jsx(dn,{open:e,onClick:n}),t.jsxs(un,{open:e,children:[t.jsx(qe,{callBackCls:n}),t.jsx(tn,{}),t.jsxs(pn,{children:[" ",o("User Panel")]}),t.jsx(Yt,{callBackCls:n}),t.jsx(an,{})]})]})}Ge.propTypes={open:b.bool.isRequired,callBackCls:b.func.isRequired};function hn(e,n){typeof e=="function"?e(n):e&&(e.current=n)}let $e=0;function xn(e){const[n,o]=l.useState(e),r=e||n;return l.useEffect(()=>{n==null&&($e+=1,o(`mui-${$e}`))},[n]),r}const Ce=ut["useId".toString()];function _e(e){if(Ce!==void 0){const n=Ce();return e??n}return xn(e)}function gn({controlled:e,default:n,name:o,state:r="value"}){const{current:c}=l.useRef(e!==void 0),[g,p]=l.useState(n),m=c?e:g,w=l.useCallback(a=>{c||p(a)},[]);return[m,w]}function mn(...e){return l.useMemo(()=>e.every(n=>n==null)?null:n=>{e.forEach(o=>{hn(o,n)})},e)}let J=!0,de=!1,Re;const fn={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function bn(e){const{type:n,tagName:o}=e;return!!(o==="INPUT"&&fn[n]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function vn(e){e.metaKey||e.altKey||e.ctrlKey||(J=!0)}function ae(){J=!1}function yn(){this.visibilityState==="hidden"&&de&&(J=!0)}function wn(e){e.addEventListener("keydown",vn,!0),e.addEventListener("mousedown",ae,!0),e.addEventListener("pointerdown",ae,!0),e.addEventListener("touchstart",ae,!0),e.addEventListener("visibilitychange",yn,!0)}function kn(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch{}return J||bn(n)}function jn(){const e=l.useCallback(c=>{c!=null&&wn(c.ownerDocument)},[]),n=l.useRef(!1);function o(){return n.current?(de=!0,window.clearTimeout(Re),Re=window.setTimeout(()=>{de=!1},100),n.current=!1,!0):!1}function r(c){return kn(c)?(n.current=!0,!0):!1}return{isFocusVisibleRef:n,onFocus:r,onBlur:o,ref:e}}const $n={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Cn=$n;function Rn(){const e=Nt(Pt);return e[Ot]||e}const Fn=Ue(t.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Sn=Ue(t.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Tn(e){return Dt("MuiRating",e)}const In=Ut("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),W=In,Ln=["value"],Mn=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function zn(e,n,o){return e<n?n:e>o?o:e}function Bn(e){const n=e.toString().split(".")[1];return n?n.length:0}function re(e,n){if(e==null)return e;const o=Math.round(e/n)*n;return Number(o.toFixed(Bn(n)))}const Vn=e=>{const{classes:n,size:o,readOnly:r,disabled:c,emptyValueFocused:g,focusVisible:p}=e,m={root:["root",`size${De(o)}`,c&&"disabled",p&&"focusVisible",r&&"readOnly"],label:["label","pristine"],labelEmptyValue:[g&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Gt(m,Tn,n)},An=Y("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[{[`& .${W.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${De(o.size)}`],o.readOnly&&n.readOnly]}})(({theme:e,ownerState:n})=>y({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${W.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${W.focusVisible} .${W.iconActive}`]:{outline:"1px solid #999"},[`& .${W.visuallyHidden}`]:Cn},n.size==="small"&&{fontSize:e.typography.pxToRem(18)},n.size==="large"&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),Xe=Y("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:e})=>y({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),En=Y("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})(({theme:e,ownerState:n})=>y({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),Hn=Y("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Wt(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:o}=e;return[n.decimal,o&&n.iconActive]}})(({iconActive:e})=>y({position:"relative"},e&&{transform:"scale(1.2)"}));function Nn(e){const n=We(e,Ln);return t.jsx("span",y({},n))}function Fe(e){const{classes:n,disabled:o,emptyIcon:r,focus:c,getLabelText:g,highlightSelectedOnly:p,hover:m,icon:w,IconContainerComponent:a,isActive:k,itemValue:u,labelProps:j,name:f,onBlur:$,onChange:F,onClick:S,onFocus:T,readOnly:C,ownerState:h,ratingValue:v,ratingValueRounded:Z}=e,V=p?u===v:u<=v,q=u<=m,A=u<=c,ee=u===Z,O=_e(),z=t.jsx(En,{as:a,value:u,className:X(n.icon,V?n.iconFilled:n.iconEmpty,q&&n.iconHover,A&&n.iconFocus,k&&n.iconActive),ownerState:y({},h,{iconEmpty:!V,iconFilled:V,iconHover:q,iconFocus:A,iconActive:k}),children:r&&!V?r:w});return C?t.jsx("span",y({},j,{children:z})):t.jsxs(l.Fragment,{children:[t.jsxs(Xe,y({ownerState:y({},h,{emptyValueFocused:void 0}),htmlFor:O},j,{children:[z,t.jsx("span",{className:n.visuallyHidden,children:g(u)})]})),t.jsx("input",{className:n.visuallyHidden,onFocus:T,onBlur:$,onChange:F,onClick:S,disabled:o,value:u,id:O,type:"radio",name:f,checked:ee})]})}const Pn=t.jsx(Fn,{fontSize:"inherit"}),On=t.jsx(Sn,{fontSize:"inherit"});function Un(e){return`${e} Star${e!==1?"s":""}`}const Dn=l.forwardRef(function(n,o){const r=qt({name:"MuiRating",props:n}),{className:c,defaultValue:g=null,disabled:p=!1,emptyIcon:m=On,emptyLabelText:w="Empty",getLabelText:a=Un,highlightSelectedOnly:k=!1,icon:u=Pn,IconContainerComponent:j=Nn,max:f=5,name:$,onChange:F,onChangeActive:S,onMouseLeave:T,onMouseMove:C,precision:h=1,readOnly:v=!1,size:Z="medium",value:V}=r,q=We(r,Mn),A=_e($),[ee,O]=gn({controlled:V,default:g,name:"Rating"}),z=re(ee,h),Qe=Rn(),[{hover:I,focus:G},U]=l.useState({hover:-1,focus:-1});let E=z;I!==-1&&(E=I),G!==-1&&(E=G);const{isFocusVisibleRef:xe,onBlur:Ye,onFocus:Je,ref:Ze}=jn(),[et,te]=l.useState(!1),ge=l.useRef(),tt=mn(Ze,ge,o),nt=d=>{C&&C(d);const x=ge.current,{right:R,left:_}=x.getBoundingClientRect(),{width:H}=x.firstChild.getBoundingClientRect();let N;Qe.direction==="rtl"?N=(R-d.clientX)/(H*f):N=(d.clientX-_)/(H*f);let L=re(f*N+h/2,h);L=zn(L,h,f),U(B=>B.hover===L&&B.focus===L?B:{hover:L,focus:L}),te(!1),S&&I!==L&&S(d,L)},ot=d=>{T&&T(d);const x=-1;U({hover:x,focus:x}),S&&I!==x&&S(d,x)},me=d=>{let x=d.target.value===""?null:parseFloat(d.target.value);I!==-1&&(x=I),O(x),F&&F(d,x)},it=d=>{d.clientX===0&&d.clientY===0||(U({hover:-1,focus:-1}),O(null),F&&parseFloat(d.target.value)===z&&F(d,null))},st=d=>{Je(d),xe.current===!0&&te(!0);const x=parseFloat(d.target.value);U(R=>({hover:R.hover,focus:x}))},at=d=>{if(I!==-1)return;Ye(d),xe.current===!1&&te(!1);const x=-1;U(R=>({hover:R.hover,focus:x}))},[rt,fe]=l.useState(!1),D=y({},r,{defaultValue:g,disabled:p,emptyIcon:m,emptyLabelText:w,emptyValueFocused:rt,focusVisible:et,getLabelText:a,icon:u,IconContainerComponent:j,max:f,precision:h,readOnly:v,size:Z}),M=Vn(D);return t.jsxs(An,y({ref:tt,onMouseMove:nt,onMouseLeave:ot,className:X(M.root,c,v&&"MuiRating-readOnly"),ownerState:D,role:v?"img":null,"aria-label":v?a(E):null},q,{children:[Array.from(new Array(f)).map((d,x)=>{const R=x+1,_={classes:M,disabled:p,emptyIcon:m,focus:G,getLabelText:a,highlightSelectedOnly:k,hover:I,icon:u,IconContainerComponent:j,name:A,onBlur:at,onChange:me,onClick:it,onFocus:st,ratingValue:E,ratingValueRounded:z,readOnly:v,ownerState:D},H=R===Math.ceil(E)&&(I!==-1||G!==-1);if(h<1){const N=Array.from(new Array(1/h));return t.jsx(Hn,{className:X(M.decimal,H&&M.iconActive),ownerState:D,iconActive:H,children:N.map((L,B)=>{const ne=re(R-1+(B+1)*h,h);return t.jsx(Fe,y({},_,{isActive:!1,itemValue:ne,labelProps:{style:N.length-1===B?{}:{width:ne===E?`${(B+1)*h*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ne)})},R)}return t.jsx(Fe,y({},_,{isActive:H,itemValue:R}),R)}),!v&&!p&&t.jsxs(Xe,{className:X(M.label,M.labelEmptyValue),ownerState:D,children:[t.jsx("input",{className:M.visuallyHidden,value:"",id:`${A}-empty`,type:"radio",name:A,checked:z==null,onFocus:()=>fe(!0),onBlur:()=>fe(!1),onChange:me}),t.jsx("span",{className:M.visuallyHidden,children:w})]})]}))}),Wn=Dn,qn=i.div`
  position: relative;

  width: calc(100vw - 32px);
  max-width: 468px;
  padding: 32px;
  border-radius: 8px;

  background: ${({theme:e})=>e.colors.backgroundModalTodo};

  border: 1px solid ${({theme:e})=>e.colors.sidebarBorder};
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
`,Se=i.label`
  &:not(:nth-child(2)) {
    margin-bottom: 24px;
  }

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({theme:e})=>e.colors.labelInForm};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`,Gn=i.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`,_n=i.div`
  display: flex;
  gap: 8px;
`,Xn=i(Oe)`
  color: #ffac33;
`,Kn=i(Oe)`
  color: ${({theme:e})=>e.colors.starDisable};
`,Qn=i.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(62, 134, 243, 0.169);
`,Yn=i.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(234, 61, 101, 0.2);
`,Jn=i(At)`
  width: 16px;
  height: 16px;

  color: ${Pe.blue1};
`,Zn=i(Et)`
  width: 16px;
  height: 16px;

  color: #ea3d65;
`,eo=i.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;

  background-color: transparent;
  cursor: pointer;
`,to=i(Ht)`
  width: 24px;
  height: 24px;

  transition: stroke 250ms linear;
  color: ${({theme:e})=>e.colors.textAndIconTodo};
`,no=i(kt)`
  width: 100%;
  height: 127px;
  padding: 14px 18px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  background: ${({theme:e})=>e.colors.backgroundTextArea};
  border: 1px solid rgba(255, 255, 255, 0.15);

  resize: none;

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    color: #343434;
  }
`,Te=i(jt)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  font-size: 12px;
  font-family: Inter;
  line-height: 14px;
`,oo=i.div`
  display: flex;
  gap: 8px;
  margin-top: 18px;
`,io=i.button`
  width: 198px;
  height: 48px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  color: ${Pe.white};
  background-color: ${Vt.primaryBlue};
`,so=i.button`
  width: 198px;
  height: 48px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  background-color: ${({theme:e})=>e.colors.canceled};
`;function ue({onClose:e,action:n="add",reviewToEdit:o}){const[r,c]=pt(),[g,p]=ht(),[m,w]=xt(),[a,k]=l.useState(n),{t:u}=P();let j,f,$;typeof o=="object"&&o!==null&&({_id:j,rating:f,comment:$}=o);const F=(h,v)=>{a==="add"&&r(h),a==="edit"&&m({id:j,...h}),v.resetForm(),e()},S=()=>{g(j),e()},T=$t({rating:Ct().required("Select a grade"),comment:Rt().required("Review is required")}),C=Ft({initialValues:{rating:(a==="edit"||a==="view")&&f||0,comment:(a==="edit"||a==="view")&&$||""},validationSchema:T,onSubmit:F});return t.jsx(qn,{children:t.jsx(St,{children:t.jsxs("form",{onSubmit:C.handleSubmit,children:[t.jsxs(Se,{children:[u("Rating"),t.jsx(Wn,{name:"rating",readOnly:a==="view",value:C.values.rating,icon:t.jsx(Xn,{}),emptyIcon:t.jsx(Kn,{}),onChange:(h,v)=>C.setFieldValue("rating",v)}),t.jsx(Te,{name:"rating",component:"div"})]}),t.jsxs(Se,{htmlFor:"comment",children:[t.jsxs(Gn,{children:[u("Review"),a!=="add"&&t.jsxs(_n,{children:[t.jsx(Qn,{type:"button",onClick:()=>k("edit"),children:t.jsx(Jn,{})}),t.jsx(Yn,{type:"button",onClick:S,children:t.jsx(Zn,{})})]})]}),t.jsx(no,{name:"comment",as:"textarea",disabled:a==="view",placeholder:u("Enter comment"),onChange:C.handleChange,onBlur:C.handleBlur,value:C.values.comment}),t.jsx(Te,{name:"comment",component:"div"})]}),(a==="add"||a==="edit")&&t.jsxs(oo,{children:[t.jsx(io,{type:"submit",children:u(a==="add"?"Save":"Edit")}),t.jsx(so,{onClick:e,children:u("Cancel")})]}),t.jsx(eo,{type:"button","aria-label":"close button",onClick:e,children:t.jsx(to,{})})]})})})}ue.propTypes={onClose:b.func.isRequired,action:b.string.isRequired,reviewToEdit:b.shape({_id:b.string,rating:b.number,comment:b.string})};const ao=i.button`
  display: block;
  padding: 8px 20px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 18px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  color: ${({theme:e})=>e.colors.white};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  @media screen and (${s.breakpoints.s} < width) {
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
    text-align: center;
    border-radius: 14px;
    margin-right: 24px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;function pe({openModal:e}){const{t:n}=P();return t.jsx(ao,{onClick:e,children:n("Feedback")})}pe.propTypes={openModal:b.func.isRequired};function ro(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}const lo=i.div`
  display: flex;
  align-items: center;
`,co=i.button`
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${({theme:e})=>e.animations.duration};
  transition-timing-function: ${({theme:e})=>e.animations.cubicBezier};
  color: ${({theme:e})=>e.colors.acent};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`,uo=i(ro)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: ${({theme:e})=>e.colors.darkBlue};
  @media ${Ne.tablet} {
    width: 32px;
    height: 32px;
  }
`,po=i(Bt)`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  color: ${({theme:e})=>e.colors.darkBlue};
  @media ${Ne.tablet} {
    width: 32px;
    height: 32px;
  }
`,Ie=()=>{const e=be().changeTheme,n=()=>{e()},o=be().type;return t.jsx(lo,{children:t.jsx(co,{onClick:n,children:o==="dark"?t.jsx(uo,{}):t.jsx(po,{})})})},ho=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,xo=i.p`
  color: ${({theme:e})=>e.colors.textCancelBtn};

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  margin-right: 8px;
`;function Le(){const{name:e,avatarUrl:n}=gt();return t.jsxs(ho,{children:[t.jsx(xo,{children:e}),n?t.jsx(ke,{alt:"username",src:n,sx:{width:32,height:32,border:"1.8px solid #3E85F3"}}):t.jsx(ke,{alt:"username",src:"",sx:{width:32,height:32},children:e.split("")[0]})]})}function go(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}const mo=i.button`
  @media screen and (width <= ${s.breakpoints.s}) {
    display: block;
    width: 24px;
    height: 24px;
  }
  @media screen and (${s.breakpoints.s} < width <= ${s.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }
  @media screen and (width > ${s.breakpoints.m}) {
    display: none;
  }
`,fo=i(go)`
  color: ${({theme:e})=>e.colors.loaderWrapper};
  width: 100%;
  height: 100%;
`;function he({callBack:e}){return t.jsx(mo,{onClick:()=>e(),children:t.jsx(fo,{})})}he.propTypes={callBack:b.func.isRequired};const Me=i.header`
  color: ${({theme:e})=>e.colors.textAndIconTodo};
  background: ${({theme:e})=>e.colors.background};
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: t;
  align-items: center;
  margin-bottom: 95px;
  padding-top: 24px;

  @media screen and (${s.breakpoints.s} < width) {
    max-width: 768px;
    padding-top: 24px;
    margin-bottom: 64px;
  }
  @media screen and (${s.breakpoints.m} < width) {
    margin-bottom: 32px;
    max-width: 1087px;
    padding-top: 40px;
  }
`,ze=i.h2`
  @media screen and (width <= ${s.breakpoints.m}) {
    display: none;
  }

  @media screen and (${s.breakpoints.m} < width) {
    display: block;
  }
`,Be=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 15px;
`,bo=i.span`
  color: #3e85f3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`,vo=i.p`
  margin-top: 8px;
  color: ${({theme:e})=>e.colors.textAndIconTodo};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;function Ke({callBack:e,isHomePage:n}){let o="add";const{data:r,isFetching:c,isLoading:g}=mt();!g&&r&&r.length&&(o="view");const{t:p}=P(),[m,w]=l.useState(!1),a=Ve(),k=a.pathname.split("/")[1],u=k==="calendar"&&a.pathname.includes("/day/"),j={account:p("User Profile"),statistics:p("Statistics"),calendar:p("Calendar")},f=()=>{w(!0)},$=()=>{w(!1)},[F,S]=l.useState(!1);return l.useEffect(()=>{const T=()=>{S(window.innerWidth>=1440)};return T(),window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}},[]),t.jsx(t.Fragment,{children:u&&F?t.jsxs(Me,{children:[t.jsx(he,{callBack:e}),t.jsx("img",{srcSet:`${ce} 1x,
            ${Ee} 2x,
            ${He} 3x`,src:ce,alt:"Goose",style:{marginRight:"8px"}}),t.jsxs(ze,{children:[j[k],t.jsxs(vo,{children:[t.jsx(bo,{children:p("Let go")})," ",p("of_the past and focus on the present!")]})]}),t.jsx(pe,{openModal:f}),t.jsxs(Be,{children:[t.jsx(we,{isHomePage:n}),t.jsx(Ie,{})]}),t.jsx(Le,{}),t.jsx(je,{children:m&&t.jsx(le,{onClose:$,color:K.grey,clickable:!0,children:t.jsx(ue,{onClose:$,action:o,reviewToEdit:r[0]})})})]}):t.jsxs(Me,{children:[t.jsx(he,{callBack:e}),t.jsx(ze,{children:j[k]}),t.jsx(pe,{openModal:f}),t.jsxs(Be,{children:[t.jsx(we,{isHomePage:n}),t.jsx(Ie,{})]}),t.jsx(Le,{}),t.jsx(je,{children:m&&t.jsx(le,{onClose:$,color:K.grey,clickable:!0,children:t.jsx(ue,{onClose:$,action:o,reviewToEdit:r[0]})})})]})})}Ke.propTypes={callBack:b.func.isRequired,onGiveFeedBack:b.func.isRequired,isHomePage:b.bool};const yo=i.div`
  width: 100%;
  @media screen and (${s.breakpoints.m} < width) {
    margin: 0 auto;
    display: flex;
  }
`,wo=i.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (${s.breakpoints.s} < width) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (${s.breakpoints.l} < width) {
    width: 1087px;
    padding-bottom: 42px;
  }
`,ko=i.div`
  width: 100%;
  height: 100%;
  padding-bottom: 42px;

  @media screen and (${s.breakpoints.s} < width) {
    /* max-width: 704px; */
    padding-bottom: 42px;
  }
`,Lo=()=>{const[e,n]=l.useState(!1),[,o]=l.useState(!1),r=ft(),c=wt,g=Ae(),p=k=>o(!k),m=()=>n(!0),w=()=>n(!1);l.useEffect(()=>{c&&g(bt())},[g,c]);const a=vt();return t.jsxs(t.Fragment,{children:[t.jsxs(yo,{children:[t.jsx(Ge,{open:e,callBackCls:w}),t.jsxs(wo,{children:[t.jsx(Ke,{callBack:m,onGiveFeedBack:p}),t.jsx(ko,{children:a?t.jsx(ve,{}):t.jsx(yt,{})})]})]}),r&&t.jsx(le,{color:K.black,children:t.jsx(ve,{})})]})};export{Lo as default};
