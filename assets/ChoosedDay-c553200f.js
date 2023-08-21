import{F as Ye,H as ue,j as l,s as g,P as b,r as w,I as $t,J as le,K as Dt,M as ut,h as It,Q as Bt,S as Ft,D as Oe,m as Ht,E as qt,v as we,k as Vt,G as Yt,L as Xt}from"./index-17318f2c.js";import{m as pt,i as Ut,j as Ce,r as Qt,h as Gt,F as Xe,E as Zt,c as Jt,b as de,g as Kt,d as er,M as tr}from"./index.esm-ad096b5a.js";import{A as rr,b as $e,P as ht,T as ir,c as or,a as ft,X as nr}from"./XClose-b72d0364.js";import{u as ae}from"./useTranslation-c030a84c.js";import{c as vt,b as Ge}from"./Variables-7c66d345.js";import{A as gt}from"./index-17254aa5.js";import{p as pe,g as sr,a as lr}from"./index-6e0537ae.js";import{s as ar,a as cr}from"./index-262794e2.js";function dr(e,r){return Ye(2,arguments),ue(e).getTime()-ue(r).getTime()}var Ze={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(r){return r<0?Math.ceil(r):Math.floor(r)}},ur="trunc";function pr(e){return e?Ze[e]:Ze[ur]}function hr(e,r,i){Ye(2,arguments);var t=dr(e,r)/1e3;return pr(i==null?void 0:i.roundingMethod)(t)}function fr(e,r){var i;Ye(1,arguments);var t=e||{},o=ue(t.start),a=ue(t.end),n=a.getTime();if(!(o.getTime()<=n))throw new RangeError("Invalid interval");var s=[],d=o;d.setHours(0,0,0,0);var u=Number((i=r==null?void 0:r.step)!==null&&i!==void 0?i:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;d.getTime()<=n;)s.push(ue(d)),d.setDate(d.getDate()+u),d.setHours(0,0,0,0);return s}const vr=e=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"1em",height:"1me",...e,children:l.jsx("path",{fill:"currentColor",d:"M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,0S22.098,12.316,21.707,12.707z"})}),gr=g.div`
  margin-bottom: 42px;

  display: flex;
  justify-content: space-between;
`,mr=g.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: ${({theme:e})=>e.colors.textAndIconTodo};
`,xr=g.button`
  width: 22px;
  color: ${({theme:e})=>e.colors.textAndIconTodo};
`;function mt({title:e,openModal:r}){const{t:i}=ae();return l.jsxs(gr,{children:[l.jsx(mr,{children:i(e)}),l.jsx(xr,{onClick:()=>r(),children:l.jsx(rr,{width:"22",height:"22"})})]})}mt.propTypes={title:b.string,openModal:b.func,column:b.string};var xt={},Re={};Object.defineProperty(Re,"__esModule",{value:!0});Re.PopoverPortal=void 0;var br=w,yr=$t,wr=function(e){var r=e.container,i=e.element,t=e.scoutElement,o=e.children;return br.useLayoutEffect(function(){return r.appendChild(i),r.appendChild(t),function(){r.removeChild(i),r.removeChild(t)}},[r,i,t]),yr.createPortal(o,i)};Re.PopoverPortal=wr;var je={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getNudgedPopoverRect=e.getNewPopoverRect=e.popoverRectForPosition=e.createContainer=e.rectsAreEqual=e.EMPTY_CLIENT_RECT=void 0,e.EMPTY_CLIENT_RECT={top:0,left:0,bottom:0,height:0,right:0,width:0};var r=function(n,s){return n===s||(n==null?void 0:n.bottom)===(s==null?void 0:s.bottom)&&(n==null?void 0:n.height)===(s==null?void 0:s.height)&&(n==null?void 0:n.left)===(s==null?void 0:s.left)&&(n==null?void 0:n.right)===(s==null?void 0:s.right)&&(n==null?void 0:n.top)===(s==null?void 0:s.top)&&(n==null?void 0:n.width)===(s==null?void 0:s.width)};e.rectsAreEqual=r;var i=function(n,s){var d=window.document.createElement("div");return s&&(d.className=s),Object.assign(d.style,n),d};e.createContainer=i;var t=function(n,s,d,u,h){var p=s.left+s.width/2,v=s.top+s.height/2,c=d.width,f=d.height,m,x;switch(n){case"left":m=v-f/2,x=s.left-u-c,h==="start"&&(m=s.top),h==="end"&&(m=s.bottom-f);break;case"bottom":m=s.bottom+u,x=p-c/2,h==="start"&&(x=s.left),h==="end"&&(x=s.right-c);break;case"right":m=v-f/2,x=s.right+u,h==="start"&&(m=s.top),h==="end"&&(m=s.bottom-f);break;default:m=s.top-f-u,x=p-c/2,h==="start"&&(x=s.left),h==="end"&&(x=s.right-c);break}return{top:m,left:x,width:c,height:f,right:x+c,bottom:m+f}};e.popoverRectForPosition=t;var o=function(n,s){var d=n.position,u=n.align,h=n.childRect,p=n.popoverRect,v=n.boundaryRect,c=n.padding,f=n.reposition,m=e.popoverRectForPosition(d,h,p,c,u),x=f&&(d==="top"&&m.top<v.top+s||d==="left"&&m.left<v.left+s||d==="right"&&m.right>v.right-s||d==="bottom"&&m.bottom>v.bottom-s);return{rect:m,boundaryViolation:x}};e.getNewPopoverRect=o;var a=function(n,s,d){var u=s.top+d,h=s.left+d,p=s.right-d,v=s.bottom-d,c=n.top<u?u:n.top;c=c+n.height>v?v-n.height:c;var f=n.left<h?h:n.left;return f=f+n.width>p?p-n.width:f,{top:c,left:f,width:n.width,height:n.height,right:f+n.width,bottom:c+n.height}};e.getNudgedPopoverRect=a})(je);var Me={},Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.useElementRef=void 0;var Je=w,Er=je,kr=function(e,r){var i=Je.useRef(),t=Je.useMemo(function(){return Er.createContainer(r,e)},[e,r]);return i.current=t,i};Ae.useElementRef=kr;Object.defineProperty(Me,"__esModule",{value:!0});Me.usePopover=void 0;var Sr=w,Ee=je,Ke=Ae,Tr={position:"fixed",overflow:"visible",top:"0px",left:"0px"},Cr={position:"fixed",top:"0px",left:"0px",width:"0px",height:"0px",visibility:"hidden"},Or=function(e){var r=e.isOpen,i=e.childRef,t=e.positions,o=e.containerClassName,a=e.parentElement,n=e.contentLocation,s=e.align,d=e.padding,u=e.reposition,h=e.boundaryInset,p=e.boundaryElement,v=e.onPositionPopover,c=Ke.useElementRef(o,Tr),f=Ke.useElementRef("react-tiny-popover-scout",Cr),m=Sr.useCallback(function(x){var k,R,T=x===void 0?{}:x,_=T.positionIndex,z=_===void 0?0:_,y=T.parentRect,C=y===void 0?a.getBoundingClientRect():y,O=T.childRect,W=O===void 0?(k=i==null?void 0:i.current)===null||k===void 0?void 0:k.getBoundingClientRect():O,F=T.scoutRect,U=F===void 0?(R=f==null?void 0:f.current)===null||R===void 0?void 0:R.getBoundingClientRect():F,fe=T.popoverRect,Q=fe===void 0?c.current.getBoundingClientRect():fe,ve=T.boundaryRect,A=ve===void 0?p===a?C:p.getBoundingClientRect():ve;if(!(!W||!C||!r)){if(n){var H=typeof n=="function"?n({childRect:W,popoverRect:Q,parentRect:C,boundaryRect:A,padding:d,nudgedTop:0,nudgedLeft:0,boundaryInset:h,violations:Ee.EMPTY_CLIENT_RECT,hasViolations:!1}):n,ge=H.top,me=H.left,K=Math.round(C.left+me-U.left),xe=Math.round(C.top+ge-U.top);c.current.style.transform="translate("+K+"px, "+xe+"px)",v({childRect:W,popoverRect:Q,parentRect:C,boundaryRect:A,padding:d,nudgedTop:0,nudgedLeft:0,boundaryInset:h,violations:Ee.EMPTY_CLIENT_RECT,hasViolations:!1});return}var D=z===t.length,I=D?t[0]:t[z],be=Ee.getNewPopoverRect({childRect:W,popoverRect:Q,boundaryRect:A,position:I,align:s,padding:d,reposition:u},h),B=be.rect,ce=be.boundaryViolation;if(ce&&u&&!D){m({positionIndex:z+1,childRect:W,popoverRect:Q,parentRect:C,boundaryRect:A});return}var ee=B.top,L=B.left,te=B.width,E=B.height,ze=u&&!D,ye=Ee.getNudgedPopoverRect(B,A,h),re=ye.left,G=ye.top,j=ee,$=L;ze&&(j=G,$=re),j=Math.round(j-U.top),$=Math.round($-U.left),c.current.style.transform="translate("+$+"px, "+j+"px)";var M={top:A.top+h-j,left:A.left+h-$,right:$+te-A.right+h,bottom:j+E-A.bottom+h};v({childRect:W,popoverRect:{top:j,left:$,width:te,height:E,right:$+te,bottom:j+E},parentRect:C,boundaryRect:A,position:I,align:s,padding:d,nudgedTop:G-ee,nudgedLeft:re-L,boundaryInset:h,violations:{top:M.top<=0?0:M.top,left:M.left<=0?0:M.left,right:M.right<=0?0:M.right,bottom:M.bottom<=0?0:M.bottom},hasViolations:M.top>0||M.left>0||M.right>0||M.bottom>0})}},[a,i,f,c,p,r,n,t,s,d,u,h,v]);return{positionPopover:m,popoverRef:c,scoutRef:f}};Me.usePopover=Or;var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});Pe.useMemoizedArray=void 0;var et=w,Rr=function(e){var r=et.useRef(e),i=et.useMemo(function(){if(r.current===e)return r.current;if(r.current.length!==e.length)return r.current=e,e;for(var t=0;t<e.length;t+=1)if(e[t]!==r.current[t])return r.current=e,e;return r.current},[e]);return i};Pe.useMemoizedArray=Rr;var he={},Ve=le&&le.__assign||function(){return Ve=Object.assign||function(e){for(var r,i=1,t=arguments.length;i<t;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Ve.apply(this,arguments)};Object.defineProperty(he,"__esModule",{value:!0});he.useArrowContainer=void 0;var tt=w,jr=function(e){var r=e.childRect,i=e.popoverRect,t=e.position,o=e.arrowSize,a=e.arrowColor,n=tt.useMemo(function(){return{padding:o}},[o]),s=tt.useMemo(function(){return Ve({position:"absolute"},function(){var d=o*2,u=r.top-i.top+r.height/2-d/2,h=r.left-i.left+r.width/2-d/2,p=o,v=i.width-o,c=i.height-o;switch(h=h<p?p:h,h=h+d>v?v-d:h,u=u<p?p:u,u=u+d>c?c-d:u,u=Number.isNaN(u)?0:u,h=Number.isNaN(h)?0:h,t){case"right":return{borderTop:o+"px solid transparent",borderBottom:o+"px solid transparent",borderRight:o+"px solid "+a,left:0,top:u};case"left":return{borderTop:o+"px solid transparent",borderBottom:o+"px solid transparent",borderLeft:o+"px solid "+a,right:0,top:u};case"bottom":return{borderLeft:o+"px solid transparent",borderRight:o+"px solid transparent",borderBottom:o+"px solid "+a,top:0,left:h};case"top":return{borderLeft:o+"px solid transparent",borderRight:o+"px solid transparent",borderTop:o+"px solid "+a,bottom:0,left:h};default:return{display:"hidden"}}}())},[a,o,r.height,r.left,r.top,r.width,i.height,i.left,i.top,i.width,t]);return{arrowContainerStyle:n,arrowStyle:s}};he.useArrowContainer=jr;var Ne={},J=le&&le.__assign||function(){return J=Object.assign||function(e){for(var r,i=1,t=arguments.length;i<t;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},J.apply(this,arguments)};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.ArrowContainer=void 0;var rt=l,it=w,Mr=he,Ar=function(e){var r=e.childRect,i=e.popoverRect,t=e.position,o=e.arrowColor,a=e.arrowSize,n=e.arrowClassName,s=e.arrowStyle,d=e.className,u=e.children,h=e.style,p=Mr.useArrowContainer({childRect:r,popoverRect:i,position:t,arrowColor:o,arrowSize:a}),v=p.arrowContainerStyle,c=p.arrowStyle,f=it.useMemo(function(){return J(J({},v),h)},[v,h]),m=it.useMemo(function(){return J(J({},c),s)},[c,s]);return rt.jsxs("div",J({className:d,style:f},{children:[rt.jsx("div",{style:m,className:n},void 0),u]}),void 0)};Ne.ArrowContainer=Ar;(function(e){var r=le&&le.__assign||function(){return r=Object.assign||function(v){for(var c,f=1,m=arguments.length;f<m;f++){c=arguments[f];for(var x in c)Object.prototype.hasOwnProperty.call(c,x)&&(v[x]=c[x])}return v},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Popover=e.usePopover=e.ArrowContainer=e.useArrowContainer=void 0;var i=l,t=w,o=Re,a=je,n=Me;Object.defineProperty(e,"usePopover",{enumerable:!0,get:function(){return n.usePopover}});var s=Pe,d=he;Object.defineProperty(e,"useArrowContainer",{enumerable:!0,get:function(){return d.useArrowContainer}});var u=Ne;Object.defineProperty(e,"ArrowContainer",{enumerable:!0,get:function(){return u.ArrowContainer}});var h=["top","left","right","bottom"],p=t.forwardRef(function(v,c){var f=v.isOpen,m=v.children,x=v.content,k=v.positions,R=k===void 0?h:k,T=v.align,_=T===void 0?"center":T,z=v.padding,y=z===void 0?0:z,C=v.reposition,O=C===void 0?!0:C,W=v.parentElement,F=W===void 0?window.document.body:W,U=v.boundaryElement,fe=U===void 0?F:U,Q=v.containerClassName,ve=Q===void 0?"react-tiny-popover-container":Q,A=v.containerStyle,H=v.contentLocation,ge=v.boundaryInset,me=ge===void 0?0:ge,K=v.onClickOutside,xe=v.clickOutsideCapture,D=xe===void 0?!1:xe,I=s.useMemoizedArray(R),be=t.useRef(!1),B=t.useRef(),ce=t.useRef(),ee=t.useRef(O),L=t.useRef(),te=t.useState({align:_,nudgedLeft:0,nudgedTop:0,position:I[0],padding:y,childRect:a.EMPTY_CLIENT_RECT,popoverRect:a.EMPTY_CLIENT_RECT,parentRect:a.EMPTY_CLIENT_RECT,boundaryRect:a.EMPTY_CLIENT_RECT,boundaryInset:me,violations:a.EMPTY_CLIENT_RECT,hasViolations:!1}),E=te[0],ze=te[1],ye=t.useCallback(function(S){return ze(S)},[]),re=n.usePopover({isOpen:f,childRef:L,containerClassName:ve,parentElement:F,boundaryElement:fe,contentLocation:H,positions:I,align:_,padding:y,boundaryInset:me,reposition:O,onPositionPopover:ye}),G=re.positionPopover,j=re.popoverRef,$=re.scoutRef;t.useLayoutEffect(function(){var S=!0,q=function(){var Z,_e;if(f&&S){var Qe=(Z=L==null?void 0:L.current)===null||Z===void 0?void 0:Z.getBoundingClientRect(),Le=(_e=j==null?void 0:j.current)===null||_e===void 0?void 0:_e.getBoundingClientRect();Qe!=null&&Le!=null&&(!a.rectsAreEqual(Qe,{top:E.childRect.top,left:E.childRect.left,width:E.childRect.width,height:E.childRect.height,bottom:E.childRect.top+E.childRect.height,right:E.childRect.left+E.childRect.width})||Le.width!==E.popoverRect.width||Le.height!==E.popoverRect.height||E.padding!==y||E.align!==_||I!==B.current||H!==ce.current||O!==ee.current)&&G(),I!==B.current&&(B.current=I),H!==ce.current&&(ce.current=H),O!==ee.current&&(ee.current=O),S&&window.requestAnimationFrame(q)}be.current=f};return window.requestAnimationFrame(q),function(){S=!1}},[_,H,f,y,j,E.align,E.childRect.height,E.childRect.left,E.childRect.top,E.childRect.width,E.padding,E.popoverRect.height,E.popoverRect.width,G,I,O]),t.useEffect(function(){var S=j.current;return Object.assign(S.style,A),function(){Object.keys(A??{}).forEach(function(q){return delete S.style[q]})}},[A,f,j]);var M=t.useCallback(function(S){var q,Z;f&&!(!((q=j.current)===null||q===void 0)&&q.contains(S.target))&&!(!((Z=L.current)===null||Z===void 0)&&Z.contains(S.target))&&(K==null||K(S))},[f,K,j]),We=t.useCallback(function(){L.current&&window.requestAnimationFrame(function(){return G()})},[G]);t.useEffect(function(){var S=F.ownerDocument.body;return S.addEventListener("click",M,D),S.addEventListener("contextmenu",M,D),S.addEventListener("resize",We),function(){S.removeEventListener("click",M,D),S.removeEventListener("contextmenu",M,D),S.removeEventListener("resize",We)}},[D,M,We,F]);var Wt=t.useCallback(function(S){L.current=S,c!=null&&(typeof c=="object"?c.current=S:typeof c=="function"&&c(S))},[c]),_t=function(){return t.cloneElement(m,{ref:Wt})},Lt=function(){return f?i.jsx(o.PopoverPortal,r({element:j.current,scoutElement:$.current,container:F},{children:typeof x=="function"?x(E):x}),void 0):null};return i.jsxs(i.Fragment,{children:[_t(),Lt()]},void 0)});e.Popover=t.forwardRef(function(v,c){return typeof window>"u"?v.children:i.jsx(p,r({},v,{ref:c}),void 0)})})(xt);const Pr=g.div`
  position: relative;
  display: flex;
  gap: 10px;
`,De=g.button`
  width: 14px;
  height: 14px;

  color: ${({theme:e})=>e.colors.textAndIconTodo};

  transition: color 100ms linear;

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.accent};
  }
`,Nr=g.div`
  /* padding: 20px 24px; */
  border-radius: 8px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  /* gap: 18px; */

  overflow: hidden;

  background: ${({theme:e})=>e.colors.backgroundModalTodo};
  border: 1px solid ${({theme:e})=>e.colors.tasksListBorder};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`,ot=g.button`
  padding: 20px 24px 7px 24px;

  &:last-child {
    padding: 7px 24px 20px 24px;
  }

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  color: ${({theme:e})=>e.colors.textAndIconTodo};

  &:hover {
    background-color: #7e7e7e10;
  }
`;function bt({task:e,openModal:r}){const{t:i}=ae(),[t,o]=w.useState(!1),[a,n]=Dt(),[s,d]=ut(),h=["to-do","in-progress","done"].filter(f=>f!==e.category),p=f=>{switch(f){case"to-do":return"To do";case"To do":return"to-do";case"In progress":return"in-progress";case"in-progress":return"In progress";case"Done":return"done";case"done":return"Done"}},v=()=>{a(e._id)},c=f=>{s({id:e._id,title:e.title,start:e.start,end:e.end,priority:e.priority,date:e.date,category:p(f)})};return l.jsxs(Pr,{children:[l.jsx(xt.Popover,{isOpen:t,positions:["bottom","right"],align:"start",padding:8,content:l.jsxs(Nr,{children:[l.jsxs(ot,{onClick:()=>c(p(h[0])),children:[i(p(h[0])),l.jsx($e,{width:"16",height:"16"})]}),l.jsxs(ot,{onClick:()=>c(p(h[1])),children:[i(p(h[1])),l.jsx($e,{width:"16",height:"16"})]})]}),onClickOutside:()=>o(!1),children:l.jsx(De,{onClick:()=>o(!0),children:l.jsx($e,{width:"14",height:"14"})})}),l.jsx(De,{onClick:()=>r(e),children:l.jsx(ht,{width:"14",height:"14"})}),l.jsx(De,{children:l.jsx(ir,{width:"14",height:"14",onClick:v})})]})}bt.propTypes={task:b.object,openModal:b.func};const zr=g(pt.li)`
  padding: 14px;
  border-radius: 8px;

  overflow: hidden;

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.tasksListBorder};

  background-image: url(${e=>e.difference>=259200?`${e.theme.backgroundImages.reallyOldPaper}`:e.difference>=0?`${e.theme.backgroundImages.oldPaper}`:"none"});
  background-size: 110%;
  background-position: center;

  &:first-child {
    margin-top: 0 !important;
  }

  &:last-child {
    margin-bottom: ${e=>e.taskscount>2?"55px":"14px"};

    @media screen and (width >= 768px) {
      margin-bottom: 0;
    }
  }
`,Wr=g.h3`
  margin-bottom: 28px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,_r=g.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`,Lr=g.div`
  display: flex;
  align-items: end;
  gap: 8px;
`,$r=g.div`
  display: inline-block;

  width: 32px;
  height: 32px;
  padding: 1px;
  border-radius: 50%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.8px solid ${({theme:e})=>e.colors.accent};
`,Dr=g.img``,Ir=g.p`
  display: inline-block;

  padding: 4px 12px;
  border-radius: 4px;

  background-color: ${e=>e.priority==="low"?"#72C2F8":e.priority==="medium"?"#F3B249":"#EA3D65"};
  color: ${vt.white};

  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;function yt({task:e,tasksCount:r,openModal:i}){const{t}=ae(),{title:o,priority:a}=e,{avatarUrl:n}=It(),s=d=>{const u=hr(new Date,new Date(d));return e.category!=="done"?u:-1};return l.jsx(l.Fragment,{children:l.jsxs(zr,{initial:{height:0,padding:0,marginTop:0},animate:{height:"108px",padding:"14px",marginTop:"14px"},exit:{height:0,padding:0,marginTop:0},transition:{duration:.1},taskscount:r,difference:s(new Date(`${e.date} ${e.end}`)),children:[l.jsx(Wr,{children:o}),l.jsxs(_r,{children:[l.jsxs(Lr,{children:[l.jsx($r,{children:n?l.jsx(Dr,{src:n,width:"100%",height:"100%"}):l.jsx(or,{width:"100%",height:"100%"})}),l.jsx(Ir,{priority:a,children:t(a)})]}),l.jsx(bt,{task:e,openModal:i})]})]})})}yt.propTypes={task:b.object.isRequired,tasksCount:b.number,openModal:b.func};var Br=/\s/;function Fr(e){for(var r=e.length;r--&&Br.test(e.charAt(r)););return r}var Hr=/^\s+/;function qr(e){return e&&e.slice(0,Fr(e)+1).replace(Hr,"")}var nt=0/0,Vr=/^[-+]0x[0-9a-f]+$/i,Yr=/^0b[01]+$/i,Xr=/^0o[0-7]+$/i,Ur=parseInt;function st(e){if(typeof e=="number")return e;if(Ut(e))return nt;if(Ce(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=qr(e);var i=Yr.test(e);return i||Xr.test(e)?Ur(e.slice(2),i?2:8):Vr.test(e)?nt:+e}var Qr=function(){return Qt.Date.now()};const Ie=Qr;var Gr="Expected a function",Zr=Math.max,Jr=Math.min;function Se(e,r,i){var t,o,a,n,s,d,u=0,h=!1,p=!1,v=!0;if(typeof e!="function")throw new TypeError(Gr);r=st(r)||0,Ce(i)&&(h=!!i.leading,p="maxWait"in i,a=p?Zr(st(i.maxWait)||0,r):a,v="trailing"in i?!!i.trailing:v);function c(y){var C=t,O=o;return t=o=void 0,u=y,n=e.apply(O,C),n}function f(y){return u=y,s=setTimeout(k,r),h?c(y):n}function m(y){var C=y-d,O=y-u,W=r-C;return p?Jr(W,a-O):W}function x(y){var C=y-d,O=y-u;return d===void 0||C>=r||C<0||p&&O>=a}function k(){var y=Ie();if(x(y))return R(y);s=setTimeout(k,m(y))}function R(y){return s=void 0,v&&t?c(y):(t=o=void 0,n)}function T(){s!==void 0&&clearTimeout(s),u=0,t=d=o=s=void 0}function _(){return s===void 0?n:R(Ie())}function z(){var y=Ie(),C=x(y);if(t=arguments,o=this,d=y,C){if(s===void 0)return f(d);if(p)return clearTimeout(s),s=setTimeout(k,r),c(d)}return s===void 0&&(s=setTimeout(k,r)),n}return z.cancel=T,z.flush=_,z}var Kr="Expected a function";function ei(e,r,i){var t=!0,o=!0;if(typeof e!="function")throw new TypeError(Kr);return Ce(i)&&(t="leading"in i?!!i.leading:t,o="trailing"in i?!!i.trailing:o),Se(e,r,{leading:t,maxWait:r,trailing:o})}var ti=!!(typeof window<"u"&&window.document&&window.document.createElement),ri=ti;const wt=Bt(ri);var oe=function(){return oe=Object.assign||function(r){for(var i,t=1,o=arguments.length;t<o;t++){i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])}return r},oe.apply(this,arguments)},ie=null,lt=null;wt&&window.addEventListener("resize",function(){lt!==window.devicePixelRatio&&(lt=window.devicePixelRatio,ie=null)});function at(){if(ie===null){if(typeof document>"u")return ie=0,ie;var e=document.body,r=document.createElement("div");r.classList.add("simplebar-hide-scrollbar"),e.appendChild(r);var i=r.getBoundingClientRect().right;e.removeChild(r),ie=i}return ie}function Et(e){return!e||!e.ownerDocument||!e.ownerDocument.defaultView?window:e.ownerDocument.defaultView}function kt(e){return!e||!e.ownerDocument?document:e.ownerDocument}var St=function(e){var r={},i=Array.prototype.reduce.call(e,function(t,o){var a=o.name.match(/data-simplebar-(.+)/);if(a){var n=a[1].replace(/\W+(.)/g,function(s,d){return d.toUpperCase()});switch(o.value){case"true":t[n]=!0;break;case"false":t[n]=!1;break;case void 0:t[n]=!0;break;default:t[n]=o.value}}return t},r);return i};function Tt(e,r){var i;e&&(i=e.classList).add.apply(i,r.split(" "))}function Ct(e,r){e&&r.split(" ").forEach(function(i){e.classList.remove(i)})}function Ot(e){return".".concat(e.split(" ").join("."))}var ii=Object.freeze({__proto__:null,getElementWindow:Et,getElementDocument:kt,getOptions:St,addClasses:Tt,removeClasses:Ct,classNamesToQuery:Ot}),V=Et,Be=kt,oi=St,Y=Tt,X=Ct,P=Ot,ke=function(){function e(r,i){i===void 0&&(i={});var t=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var o=V(t.el);t.scrollXTicking||(o.requestAnimationFrame(t.scrollX),t.scrollXTicking=!0),t.scrollYTicking||(o.requestAnimationFrame(t.scrollY),t.scrollYTicking=!0),t.isScrolling||(t.isScrolling=!0,Y(t.el,t.classNames.scrolling)),t.showScrollbar("x"),t.showScrollbar("y"),t.onStopScrolling()},this.scrollX=function(){t.axis.x.isOverflowing&&t.positionScrollbar("x"),t.scrollXTicking=!1},this.scrollY=function(){t.axis.y.isOverflowing&&t.positionScrollbar("y"),t.scrollYTicking=!1},this._onStopScrolling=function(){X(t.el,t.classNames.scrolling),t.options.autoHide&&(t.hideScrollbar("x"),t.hideScrollbar("y")),t.isScrolling=!1},this.onMouseEnter=function(){t.isMouseEntering||(Y(t.el,t.classNames.mouseEntered),t.showScrollbar("x"),t.showScrollbar("y"),t.isMouseEntering=!0),t.onMouseEntered()},this._onMouseEntered=function(){X(t.el,t.classNames.mouseEntered),t.options.autoHide&&(t.hideScrollbar("x"),t.hideScrollbar("y")),t.isMouseEntering=!1},this._onMouseMove=function(o){t.mouseX=o.clientX,t.mouseY=o.clientY,(t.axis.x.isOverflowing||t.axis.x.forceVisible)&&t.onMouseMoveForAxis("x"),(t.axis.y.isOverflowing||t.axis.y.forceVisible)&&t.onMouseMoveForAxis("y")},this.onMouseLeave=function(){t.onMouseMove.cancel(),(t.axis.x.isOverflowing||t.axis.x.forceVisible)&&t.onMouseLeaveForAxis("x"),(t.axis.y.isOverflowing||t.axis.y.forceVisible)&&t.onMouseLeaveForAxis("y"),t.mouseX=-1,t.mouseY=-1},this._onWindowResize=function(){t.scrollbarWidth=t.getScrollbarWidth(),t.hideNativeScrollbar()},this.onPointerEvent=function(o){if(!(!t.axis.x.track.el||!t.axis.y.track.el||!t.axis.x.scrollbar.el||!t.axis.y.scrollbar.el)){var a,n;t.axis.x.track.rect=t.axis.x.track.el.getBoundingClientRect(),t.axis.y.track.rect=t.axis.y.track.el.getBoundingClientRect(),(t.axis.x.isOverflowing||t.axis.x.forceVisible)&&(a=t.isWithinBounds(t.axis.x.track.rect)),(t.axis.y.isOverflowing||t.axis.y.forceVisible)&&(n=t.isWithinBounds(t.axis.y.track.rect)),(a||n)&&(o.stopPropagation(),o.type==="pointerdown"&&o.pointerType!=="touch"&&(a&&(t.axis.x.scrollbar.rect=t.axis.x.scrollbar.el.getBoundingClientRect(),t.isWithinBounds(t.axis.x.scrollbar.rect)?t.onDragStart(o,"x"):t.onTrackClick(o,"x")),n&&(t.axis.y.scrollbar.rect=t.axis.y.scrollbar.el.getBoundingClientRect(),t.isWithinBounds(t.axis.y.scrollbar.rect)?t.onDragStart(o,"y"):t.onTrackClick(o,"y"))))}},this.drag=function(o){var a,n,s,d,u,h,p,v,c,f,m;if(!(!t.draggedAxis||!t.contentWrapperEl)){var x,k=t.axis[t.draggedAxis].track,R=(n=(a=k.rect)===null||a===void 0?void 0:a[t.axis[t.draggedAxis].sizeAttr])!==null&&n!==void 0?n:0,T=t.axis[t.draggedAxis].scrollbar,_=(d=(s=t.contentWrapperEl)===null||s===void 0?void 0:s[t.axis[t.draggedAxis].scrollSizeAttr])!==null&&d!==void 0?d:0,z=parseInt((h=(u=t.elStyles)===null||u===void 0?void 0:u[t.axis[t.draggedAxis].sizeAttr])!==null&&h!==void 0?h:"0px",10);o.preventDefault(),o.stopPropagation(),t.draggedAxis==="y"?x=o.pageY:x=o.pageX;var y=x-((v=(p=k.rect)===null||p===void 0?void 0:p[t.axis[t.draggedAxis].offsetAttr])!==null&&v!==void 0?v:0)-t.axis[t.draggedAxis].dragOffset;y=t.draggedAxis==="x"&&t.isRtl?((f=(c=k.rect)===null||c===void 0?void 0:c[t.axis[t.draggedAxis].sizeAttr])!==null&&f!==void 0?f:0)-T.size-y:y;var C=y/(R-T.size),O=C*(_-z);t.draggedAxis==="x"&&t.isRtl&&(O=!((m=e.getRtlHelpers())===null||m===void 0)&&m.isScrollingToNegative?-O:O),t.contentWrapperEl[t.axis[t.draggedAxis].scrollOffsetAttr]=O}},this.onEndDrag=function(o){var a=Be(t.el),n=V(t.el);o.preventDefault(),o.stopPropagation(),X(t.el,t.classNames.dragging),a.removeEventListener("mousemove",t.drag,!0),a.removeEventListener("mouseup",t.onEndDrag,!0),t.removePreventClickId=n.setTimeout(function(){a.removeEventListener("click",t.preventClick,!0),a.removeEventListener("dblclick",t.preventClick,!0),t.removePreventClickId=null})},this.preventClick=function(o){o.preventDefault(),o.stopPropagation()},this.el=r,this.options=oe(oe({},e.defaultOptions),i),this.classNames=oe(oe({},e.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=ei(this._onMouseMove,64),this.onWindowResize=Se(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=Se(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=Se(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var r=document.createElement("div");r.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=r.firstElementChild,t=i==null?void 0:i.firstElementChild;if(!t)return null;document.body.appendChild(i),i.scrollLeft=0;var o=e.getOffset(i),a=e.getOffset(t);i.scrollLeft=-999;var n=e.getOffset(t);return document.body.removeChild(i),e.rtlHelpers={isScrollOriginAtZero:o.left!==a.left,isScrollingToNegative:a.left!==n.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:at()}catch{return at()}},e.getOffset=function(r){var i=r.getBoundingClientRect(),t=Be(r),o=V(r);return{top:i.top+(o.pageYOffset||t.documentElement.scrollTop),left:i.left+(o.pageXOffset||t.documentElement.scrollLeft)}},e.prototype.init=function(){wt&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var r,i;this.wrapperEl=this.el.querySelector(P(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(P(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(P(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(P(this.classNames.offset)),this.maskEl=this.el.querySelector(P(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,P(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(P(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(P(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(P(this.classNames.track)).concat(P(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(P(this.classNames.track)).concat(P(this.classNames.vertical))),this.axis.x.scrollbar.el=((r=this.axis.x.track.el)===null||r===void 0?void 0:r.querySelector(P(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((i=this.axis.y.track.el)===null||i===void 0?void 0:i.querySelector(P(this.classNames.scrollbar)))||null,this.options.autoHide||(Y(this.axis.x.scrollbar.el,this.classNames.visible),Y(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var r=this,i,t=V(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(i=this.contentWrapperEl)===null||i===void 0||i.addEventListener("scroll",this.onScroll),t.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var o=!1,a=t.ResizeObserver||ResizeObserver;this.resizeObserver=new a(function(){o&&t.requestAnimationFrame(function(){r.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),t.requestAnimationFrame(function(){o=!0})}this.mutationObserver=new t.MutationObserver(function(){t.requestAnimationFrame(function(){r.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var r=V(this.el);this.elStyles=r.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var i=this.contentEl.offsetWidth,t=this.heightAutoObserverEl.offsetHeight<=1,o=this.heightAutoObserverEl.offsetWidth<=1||i>0,a=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var d=this.contentEl.scrollHeight,u=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=t?"auto":"100%",this.placeholderEl.style.width=o?"".concat(i||u,"px"):"auto",this.placeholderEl.style.height="".concat(d,"px");var h=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=i!==0&&u>i,this.axis.y.isOverflowing=d>h,this.axis.x.isOverflowing=n==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=s==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var p=this.axis.x.isOverflowing?this.scrollbarWidth:0,v=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&u>a-v,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&d>h-p,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(r){var i,t;if(r===void 0&&(r="y"),!this.axis[r].isOverflowing||!this.contentEl)return 0;var o=this.contentEl[this.axis[r].scrollSizeAttr],a=(t=(i=this.axis[r].track.el)===null||i===void 0?void 0:i[this.axis[r].offsetSizeAttr])!==null&&t!==void 0?t:0,n=a/o,s;return s=Math.max(~~(n*a),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},e.prototype.positionScrollbar=function(r){var i,t,o;r===void 0&&(r="y");var a=this.axis[r].scrollbar;if(!(!this.axis[r].isOverflowing||!this.contentWrapperEl||!a.el||!this.elStyles)){var n=this.contentWrapperEl[this.axis[r].scrollSizeAttr],s=((i=this.axis[r].track.el)===null||i===void 0?void 0:i[this.axis[r].offsetSizeAttr])||0,d=parseInt(this.elStyles[this.axis[r].sizeAttr],10),u=this.contentWrapperEl[this.axis[r].scrollOffsetAttr];u=r==="x"&&this.isRtl&&(!((t=e.getRtlHelpers())===null||t===void 0)&&t.isScrollOriginAtZero)?-u:u,r==="x"&&this.isRtl&&(u=!((o=e.getRtlHelpers())===null||o===void 0)&&o.isScrollingToNegative?u:-u);var h=u/(n-d),p=~~((s-a.size)*h);p=r==="x"&&this.isRtl?-p+(s-a.size):p,a.el.style.transform=r==="x"?"translate3d(".concat(p,"px, 0, 0)"):"translate3d(0, ".concat(p,"px, 0)")}},e.prototype.toggleTrackVisibility=function(r){r===void 0&&(r="y");var i=this.axis[r].track.el,t=this.axis[r].scrollbar.el;!i||!t||!this.contentWrapperEl||(this.axis[r].isOverflowing||this.axis[r].forceVisible?(i.style.visibility="visible",this.contentWrapperEl.style[this.axis[r].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(r))):(i.style.visibility="hidden",this.contentWrapperEl.style[this.axis[r].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(r))),this.axis[r].isOverflowing?t.style.display="block":t.style.display="none")},e.prototype.showScrollbar=function(r){r===void 0&&(r="y"),this.axis[r].isOverflowing&&!this.axis[r].scrollbar.isVisible&&(Y(this.axis[r].scrollbar.el,this.classNames.visible),this.axis[r].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(r){r===void 0&&(r="y"),this.axis[r].isOverflowing&&this.axis[r].scrollbar.isVisible&&(X(this.axis[r].scrollbar.el,this.classNames.visible),this.axis[r].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(r){r===void 0&&(r="y");var i=this.axis[r];!i.track.el||!i.scrollbar.el||(i.track.rect=i.track.el.getBoundingClientRect(),i.scrollbar.rect=i.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(i.track.rect)?(this.showScrollbar(r),Y(i.track.el,this.classNames.hover),this.isWithinBounds(i.scrollbar.rect)?Y(i.scrollbar.el,this.classNames.hover):X(i.scrollbar.el,this.classNames.hover)):(X(i.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(r)))},e.prototype.onMouseLeaveForAxis=function(r){r===void 0&&(r="y"),X(this.axis[r].track.el,this.classNames.hover),X(this.axis[r].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(r)},e.prototype.onDragStart=function(r,i){var t;i===void 0&&(i="y");var o=Be(this.el),a=V(this.el),n=this.axis[i].scrollbar,s=i==="y"?r.pageY:r.pageX;this.axis[i].dragOffset=s-(((t=n.rect)===null||t===void 0?void 0:t[this.axis[i].offsetAttr])||0),this.draggedAxis=i,Y(this.el,this.classNames.dragging),o.addEventListener("mousemove",this.drag,!0),o.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(o.addEventListener("click",this.preventClick,!0),o.addEventListener("dblclick",this.preventClick,!0)):(a.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(r,i){var t=this,o,a,n,s;i===void 0&&(i="y");var d=this.axis[i];if(!(!this.options.clickOnTrack||!d.scrollbar.el||!this.contentWrapperEl)){r.preventDefault();var u=V(this.el);this.axis[i].scrollbar.rect=d.scrollbar.el.getBoundingClientRect();var h=this.axis[i].scrollbar,p=(a=(o=h.rect)===null||o===void 0?void 0:o[this.axis[i].offsetAttr])!==null&&a!==void 0?a:0,v=parseInt((s=(n=this.elStyles)===null||n===void 0?void 0:n[this.axis[i].sizeAttr])!==null&&s!==void 0?s:"0px",10),c=this.contentWrapperEl[this.axis[i].scrollOffsetAttr],f=i==="y"?this.mouseY-p:this.mouseX-p,m=f<0?-1:1,x=m===-1?c-v:c+v,k=40,R=function(){t.contentWrapperEl&&(m===-1?c>x&&(c-=k,t.contentWrapperEl[t.axis[i].scrollOffsetAttr]=c,u.requestAnimationFrame(R)):c<x&&(c+=k,t.contentWrapperEl[t.axis[i].scrollOffsetAttr]=c,u.requestAnimationFrame(R)))};R()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var r=V(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),r.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(r){return this.mouseX>=r.left&&this.mouseX<=r.left+r.width&&this.mouseY>=r.top&&this.mouseY<=r.top+r.height},e.prototype.findChild=function(r,i){var t=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector;return Array.prototype.filter.call(r.children,function(o){return t.call(o,i)})[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=oi,e.helpers=ii,e}(),N=function(){return N=Object.assign||function(r){for(var i,t=1,o=arguments.length;t<o;t++){i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])}return r},N.apply(this,arguments)};function ni(e,r){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]]);return i}var Ue=w.forwardRef(function(e,r){var i=e.children,t=e.scrollableNodeProps,o=t===void 0?{}:t,a=ni(e,["children","scrollableNodeProps"]),n=w.useRef(),s=w.useRef(),d=w.useRef(),u={},h={};Object.keys(a).forEach(function(c){Object.prototype.hasOwnProperty.call(ke.defaultOptions,c)?u[c]=a[c]:h[c]=a[c]});var p=N(N({},ke.defaultOptions.classNames),u.classNames),v=N(N({},o),{className:"".concat(p.contentWrapper).concat(o.className?" ".concat(o.className):""),tabIndex:0,role:"region","aria-label":u.ariaLabel||ke.defaultOptions.ariaLabel});return w.useEffect(function(){var c;return s.current=v.ref?v.ref.current:s.current,n.current&&(c=new ke(n.current,N(N(N({},u),s.current&&{scrollableNode:s.current}),d.current&&{contentNode:d.current})),typeof r=="function"?r(c):r&&(r.current=c)),function(){c==null||c.unMount(),c=null,typeof r=="function"&&r(null)}},[]),w.createElement("div",N({"data-simplebar":"init",ref:n},h),w.createElement("div",{className:p.wrapper},w.createElement("div",{className:p.heightAutoObserverWrapperEl},w.createElement("div",{className:p.heightAutoObserverEl})),w.createElement("div",{className:p.mask},w.createElement("div",{className:p.offset},typeof i=="function"?i({scrollableNodeRef:s,scrollableNodeProps:N(N({},v),{ref:s}),contentNodeRef:d,contentNodeProps:{className:p.contentEl,ref:d}}):w.createElement("div",N({},v),w.createElement("div",{className:p.contentEl},i)))),w.createElement("div",{className:p.placeholder})),w.createElement("div",{className:"".concat(p.track," simplebar-horizontal")},w.createElement("div",{className:p.scrollbar})),w.createElement("div",{className:"".concat(p.track," simplebar-vertical")},w.createElement("div",{className:p.scrollbar})))});Ue.displayName="SimpleBar";const si=g(Ue)`
  height: fit-content;
  max-height: 352px;

  .simplebar-track {
    right: -12px;

    width: 6px;
    border-radius: 12px;
    padding: 0;

    background: ${({theme:e})=>e.colors.lineSwitchVertical};

    @media screen and (width >= 768px) {
      right: -14px;

      width: 8px;
    }
  }

  .simplebar-scrollbar {
    width: 6px;
    border-radius: 12px;

    background: ${({theme:e})=>e.colors.scrollSwitchVertical};

    @media screen and (width >= 768px) {
      width: 8px;
    }
  }

  .simplebar-scrollbar::before {
    display: none;
  }
`;function Rt({children:e}){return l.jsx(si,{autoHide:!1,children:e})}Rt.propTypes={children:b.any};const li=g.ul`
  /* height: 334px; */
  /* max-height: fit-content; */

  display: flex;
  flex-direction: column;
  /* gap: 14px; */
`;function jt({tasks:e,openModal:r}){return l.jsx(Rt,{children:l.jsx(li,{children:l.jsx(gt,{children:e&&e.map(i=>l.jsx(yt,{task:i,tasksCount:e.length,openModal:r},i._id))})})})}jt.propTypes={tasks:b.array,openModal:b.func};const ai=g(pt.button)`
  ${e=>e.count>2?"position: absolute;":"position: static;"};
  bottom: 10px;

  width: 100%;
  max-width: 299px;
  padding: 12px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  background: ${({theme:e})=>e.colors.backColorBtnAddTask};
  border: 1px dashed ${({theme:e})=>e.colors.borderBtnAddTask};

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  @media screen and (width >= 768px) {
    max-width: 304px;
    position: static;
    /* margin-top: ${e=>e.count&&"32px"}; */
  }
`;g.img`
  width: 24px;
  height: 24px;
`;function Mt({tasksCount:e,openModal:r}){const{t:i}=ae(),t=window.innerWidth;return l.jsxs(ai,{initial:{marginTop:0},animate:{marginTop:t>=768&&e?"32px":0},exit:{marginTop:0},transition:{duration:.1},count:e,onClick:()=>r(),children:[l.jsx(ft,{width:"24",height:"24"}),i("Add task")]})}Mt.propTypes={tasksCount:b.number,openModal:b.func};const ci=g(Gt)`
  position: relative;
  width: 303px;
  max-height: 420px;
  padding: 48px 18px 40px;
  background: ${({theme:e})=>e.colors.backgroundModalTodo};

  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.borderModaAddToDo};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }
`,Fe=g.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({theme:e})=>e.colors.labelInForm};
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;
`,di=g(Xe)`
  width: 267px;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.borderInTextArea};
  background: ${({theme:e})=>e.colors.backgroundTextArea};

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  @media (min-width: 768px) {
    width: 340px;
    height: 46px;
    padding: 14px 18px;
  }

  &::placeholder {
    opacity: 1;
    color: ${({theme:e})=>e.colors.textAndIconTodo};
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
  }
`,ui=g.div`
  display: flex;
  gap: 14px;
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 18px;
  }
`,ct=g(Xe)`
  width: 126px;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.borderInTextArea};
  background: ${({theme:e})=>e.colors.backgroundTextArea};
  cursor: pointer;

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  @media (min-width: 768px) {
    width: 163px;
    height: 46px;
    padding: 14px 18px;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`,pi=g.div`
  display: flex;
  gap: 16px;
`,ne=g(Xe)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`,se=g.label`
  position: relative;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-top: 16px;

  color: ${({theme:e})=>e.colors.textAndIconTodo};
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  line-height: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 28px;
  }
`,He=g.span`
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>{switch(e.value){case"low":return"#72C2F8";case"medium":return"#F3B249";case"high":return"#EA3D65";default:return"black"}}};

  ${se}:nth-child(1) ${ne}:checked + & {
    outline: 1.2px solid #72c2f8;
    outline-offset: 1px;
  }

  ${se}:nth-child(2) ${ne}:checked + & {
    outline: 1.2px solid #f3b249;
    outline-offset: 1px;
  }

  ${se}:nth-child(3) ${ne}:checked + & {
    outline: 1.2px solid #ea3d65;
    outline-offset: 1px;
  }
`,hi=g.div`
  display: flex;
  gap: 14px;
  margin-top: 32px;
`,dt=g.button`
  display: flex;
  width: 135px;
  height: 42px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px;

  border-radius: 8px;
  border: none;
  background-color: #3e85f3;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 48px;
    padding: 15px;
  }
`,fi=g.button`
  width: 118px;
  height: 42px;
  padding: 12px;

  border-radius: 8px;
  border: none;
  background: ${({theme:e})=>e.colors.canceledInTodo};
  cursor: pointer;

  color: ${({theme:e})=>e.colors.textCancelBtnIntodo};
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #e7e3e3;
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 48px;
    padding: 15px;
  }
`,vi=g.button`
  position: absolute;
  top: 14px;
  right: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,qe=g(Zt)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  font-size: 12px;
  font-family: Inter;
  line-height: 14px;
`,gi=g(nr)`
  width: 24px;
  height: 24px;

  transition: stroke 250ms linear;
  color: ${({theme:e})=>e.colors.textAndIconTodo};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.close_btn};
  }
`,mi=g(ft)`
  width: 24px;
  height: 24px;
  color: white;
`,xi=g(ht)`
  width: 24px;
  height: 24px;
  color: white;
`,bi=Jt().shape({title:de().max(250,"Title is too long").required("Title is required"),start:de().required("Start time is required"),end:de().required("End time is required").test("is-greater","End time should be greater than start time",function(e){const{start:r}=this.parent;if(r&&e){const i=pe(r,"HH:mm",new Date);return pe(e,"HH:mm",new Date)>i}return!0}),priority:de().oneOf(["low","medium","high"]).required("Priority is required"),date:Kt().required("Date is required").transform((e,r)=>r?pe(r,"yyyy-MM-dd",new Date):e),category:de().oneOf(["to-do","in-progress","done"]).required("Category is required")}),At=({onClose:e,action:r,column:i,taskToEdit:t})=>{const{t:o}=ae();let a,n,s,d,u,h;typeof t=="object"&&t!==null&&({_id:a,title:n,start:s,end:d,priority:u,date:h}=t);const[p,v]=Ft(),[c,f]=ut(),{currentDate:m}=Oe(),x=(R,T)=>{r==="add"&&p(R),r==="edit"&&c({id:a,...R}),T.resetForm(),e()},k=()=>{if(i==="To do")return"to-do";if(i==="In progress")return"in-progress";if(i==="Done")return"done"};return l.jsx(er,{initialValues:{title:r==="edit"&&n||"",start:r==="edit"&&s||"09:00",end:r==="edit"&&d||"10:00",priority:r==="edit"&&u||"low",date:r==="edit"&&h||m,category:k()},validationSchema:bi,onSubmit:x,children:l.jsxs(ci,{children:[l.jsxs(Fe,{children:[o("Title"),l.jsx(di,{type:"text",name:"title",placeholder:o("Enter text")}),l.jsx(qe,{name:"title",component:"div"})]}),l.jsxs(ui,{children:[l.jsxs(Fe,{children:[o("Start"),l.jsx(ct,{type:"time",name:"start"}),l.jsx(qe,{name:"start",component:"div"})]}),l.jsxs(Fe,{children:[o("End"),l.jsx(ct,{type:"time",name:"end"}),l.jsx(qe,{name:"end",component:"div"})]})]}),l.jsxs(pi,{role:"group","aria-labelledby":"my-radio-group",children:[l.jsxs(se,{children:[l.jsx(ne,{type:"radio",name:"priority",value:"low"}),l.jsx(He,{value:"low"}),o("Low")]}),l.jsxs(se,{children:[l.jsx(ne,{type:"radio",name:"priority",value:"medium"}),l.jsx(He,{value:"medium"}),o("Medium")]}),l.jsxs(se,{children:[l.jsx(ne,{type:"radio",name:"priority",value:"high"}),l.jsx(He,{value:"high"}),o("High")]})]}),l.jsxs(hi,{children:[r==="add"?l.jsxs(dt,{type:"submit",children:[l.jsx(mi,{}),o("Add")]}):l.jsxs(dt,{type:"submit",children:[l.jsx(xi,{}),o("Edit")]}),l.jsx(fi,{type:"button",onClick:e,children:o("Cancel")})]}),l.jsx(vi,{type:"button","aria-label":"close button",onClick:e,children:l.jsx(gi,{})})]})})};At.propTypes={onClose:b.func.isRequired,action:b.oneOf(["add","edit"]).isRequired,column:b.string.isRequired,taskToEdit:b.shape({_id:b.string,title:b.string,start:b.string,end:b.string,priority:b.string,date:b.string})};const yi=g.li`
  position: relative;

  min-width: 335px;
  height: fit-content;

  padding: 18px;
  border-radius: 8px;

  background: ${({theme:e})=>e.colors.tasksListBackground};
  border: 1px solid ${({theme:e})=>e.colors.tasksListBorder};

  @media screen and (width >= 768px) {
    min-width: 344px;
    padding: 20px;
  }
`;function Te({tasks:e,title:r}){const[i,t]=w.useState({isOpen:!1,action:"",taskToEdit:null}),o=n=>{n&&t({isOpen:!0,action:"edit",taskToEdit:n}),n||t({isOpen:!0,action:"add",taskToEdit:null})},a=()=>{t({isOpen:!1,action:"",taskToEdit:null})};return l.jsxs(l.Fragment,{children:[l.jsxs(yi,{children:[l.jsx(mt,{title:r,openModal:o,column:r}),l.jsx(jt,{tasks:e,openModal:o}),l.jsx(Mt,{tasksCount:e.length,openModal:o})]}),l.jsx(gt,{children:i.isOpen&&l.jsx(tr,{onClose:a,color:Ht.grey,clickable:!0,children:l.jsx(At,{onClose:a,action:i.action,column:r,taskToEdit:i.taskToEdit})})})]})}Te.propTypes={tasks:b.array,title:b.string};const wi=g(Ue)`
  overflow-y: hidden;

  .simplebar-track.simplebar-horizontal {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;

    width: auto;
    height: 12px;
    border-radius: 12px;

    background: ${({theme:e})=>e.colors.lineHorizontScroll};

    transform: scale(1);

    @media screen and (width >= 768px) {
      height: 14px;
      left: 30px;
      right: 30px;
    }
  }

  .simplebar-scrollbar.simplebar-horizontal {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;

    width: auto;
    height: 12px;
    border-radius: 12px;

    background: ${({theme:e})=>e.colors.scrollSwitchHorizont};

    transform: scale(1);

    @media screen and (width >= 768px) {
      left: 30px;
      right: 30px;
      height: 14px;
    }
  }

  .simplebar-scrollbar::before {
    top: 0;
    left: 0;
    right: 0;
    transform: scale(1);

    width: auto;
    height: 12px;

    background: ${({theme:e})=>e.colors.scrollSwitchHorizont};
    opacity: 1;

    @media screen and (width >= 768px) {
      height: 14px;
    }
  }
`;function Pt({children:e}){return l.jsx(wi,{autoHide:!1,children:e})}Pt.propTypes={children:b.any};const Ei=g.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (width >= 768px) {
    gap: 16px;
  }

  @media screen and (width >= 1440px) {
    gap: 27px;
  }
`;function Nt({tasks:e}){const{currentDate:r}=Oe(),i=e.filter(t=>t.date===r);return l.jsx(Pt,{children:l.jsxs(Ei,{children:[l.jsx(Te,{tasks:i.filter(t=>t.category==="to-do"),title:"To do"}),l.jsx(Te,{tasks:i.filter(t=>t.category==="in-progress"),title:"In progress"}),l.jsx(Te,{tasks:i.filter(t=>t.category==="done"),title:"Done"})]})})}Nt.propTypes={tasks:b.arrayOf(b.shape({title:b.string.isRequired,start:b.string.isRequired,end:b.string.isRequired,priority:b.string.isRequired,date:b.string.isRequired,category:b.string.isRequired}))};const ki=g.ul`
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.tasksListBorder};
  margin-bottom: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({theme:e})=>e.colors.tasksListBackground};

  @media screen and (width >= 768px) {
    padding: 10px 32px;
  }

  @media screen and (width >= 1440px) {
    padding: 10px 46px;
  }
`,Si=g.li`
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }

  p {
    text-transform: uppercase;
  }
`,Ti=g.p`
  color: ${({theme:e})=>e.colors.textAndIconTodo};

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media screen and (width >= 768px) {
    font-size: 14px;
  }
`,Ci=g.div`
  position: relative;

  width: fit-content;
  padding: 4px 6px;
  border-radius: 6px;

  background-color: ${e=>e.selected?Ge.primaryBlue:Ge.transparent};
  color: ${e=>e.selected?vt.white:e.theme.colors.textAndIconTodo};
`,Oi=g.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;

  @media screen and (width >= 768px) {
    font-size: 16px;
  }
`,Ri=g.span`
  position: absolute;
  top: -7px;
  left: -7px;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;

  color: white;
  background: #ea3d65;
`,ji=g(vr)`
  position: absolute;
  top: -7px;
  left: -7px;

  width: 15px;
  height: 15px;

  transform: scale(1.25);
`;function zt({date:e,tasks:r}){const{currentDate:i}=Oe(),{t}=ae(),[o,a]=w.useState(e),n=qt();w.useEffect(()=>{a(i)},[i]);const s=window.innerWidth,d=ar(new Date(e),{weekStartsOn:1}),u=fr({start:d,end:cr(d,6)}),h=f=>s>=768?t(we(f,"eee")):t(`mob_${we(f,"eee")}`),p=f=>we(f,"yyyy-MM-dd"),v=f=>{const m=`/calendar/day/${p(f)}`;a(p(f)),n(m,{replace:!0})},c=f=>{const m=p(f),x=r.filter(T=>T.date===m),k=x.filter(T=>T.category!=="done"),R=x.filter(T=>T.category==="done");return l.jsx(l.Fragment,{children:k.length>0?l.jsx(Ri,{children:k.length}):k.length<1&&R.length>=1&&l.jsx(ji,{color:"#2ac76b",width:"15px",height:"15px"})})};return l.jsx(ki,{children:u.map(f=>l.jsx(Si,{children:l.jsxs("a",{onClick:()=>v(f),children:[l.jsx(Ti,{children:h(f)}),l.jsxs(Ci,{selected:p(f)===o,children:[c(f),l.jsx(Oi,{children:we(f,"d")})]})]})},f))})}zt.propTypes={date:b.string,tasks:b.array};const Mi=g.div`
  /* padding: 20px; */

  @media screen and (width >= 768px) {
    /* padding: 32px; */
  }
`;function Di(){const e=Vt(),{currentDate:r}=Oe(),i=sr(pe(r,"yyyy-MM-dd",new Date)),t=lr(pe(r,"yyyy-MM-dd",new Date))+1,o={year:i,month:t},{data:a,isLoading:n,isFetching:s}=Yt(o);return l.jsx(Mi,{children:!n&&!e&&a?l.jsxs(l.Fragment,{children:[l.jsx(zt,{date:r,tasks:a.tasks}),l.jsx(Nt,{tasks:a.tasks})]}):l.jsx(Xt,{})})}export{Di as default};
