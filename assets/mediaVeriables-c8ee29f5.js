import{U as i,s as p,t as d,al as y,j as r,P as w}from"./index-17318f2c.js";import{u as k}from"./useTranslation-c030a84c.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=i.createContext&&i.createContext(v),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)},z=globalThis&&globalThis.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};function j(e){return e&&e.map(function(n,t){return i.createElement(n.tag,l({key:t},n.attr),j(n.child))})}function h(e){return function(n){return i.createElement(C,l({attr:l({},e.attr)},n),j(e.child))}}function C(e){var n=function(t){var a=e.attr,s=e.size,u=e.title,m=z(e,["attr","size","title"]),c=s||t.size||"1em",g;return t.className&&(g=t.className),e.className&&(g=(g?g+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,m,{className:g,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&i.createElement("title",null,u),e.children)};return f!==void 0?i.createElement(f.Consumer,null,function(t){return n(t)}):n(v)}const P="/project-mern-schedule-01/assets/goose1x-9223b6f6.png",B="/project-mern-schedule-01/assets/goose2x-240cd591.png",E="/project-mern-schedule-01/assets/goose3x-8c8ff392.png",S="/project-mern-schedule-01/assets/goose1x-c9bf63f5.png",_="/project-mern-schedule-01/assets/goose2x-e3815e3f.png",L="/project-mern-schedule-01/assets/goose3x-27464d23.png",M="/project-mern-schedule-01/assets/goose1x-c9bf63f5.png",I="/project-mern-schedule-01/assets/goose2x-e3815e3f.png",F="/project-mern-schedule-01/assets/goose3x-27464d23.png";const O=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,x=p.button`
  position: relative;
  border-radius: 8px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${d.animations.duration};
  transition-timing-function: ${d.animations.cubicBezier};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`,b=p.p`
  position: absolute;
  top: -5px;
  right: -3px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6.5px;

  width: 12px;
  height: 12px;

  font-size: 8px;
  font-weight: 700;

  background-color: ${d.colors.ligthBlue};
  border-radius: 50%;
`;function T({isHomePage:e}){const[n,t]=y();n.get("lang");const{i18n:a}=k(),s=({currentTarget:m})=>{const{value:c}=m;t({lang:c}),a.changeLanguage(c)},u=localStorage.getItem("i18nextLng")||"en";return r.jsx(O,{children:u==="uk"?r.jsxs(x,{type:"button",onClick:s,value:"gb",children:[r.jsx("span",{className:e?"circular-flag square-flag":"circular-flag",children:r.jsx("span",{className:"fi fi-ua"})}),r.jsx(b,{children:"UA"})]}):r.jsxs(x,{type:"button",onClick:s,value:"uk",children:[r.jsx("div",{className:e?"circular-flag square-flag":"circular-flag",children:r.jsx("span",{className:"fi fi-gb"})}),r.jsx(b,{children:"EN"})]})})}T.propTypes={isHomePage:w.bool};function A(e){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function R(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"}}]})(e)}function U(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"}}]})(e)}const o={mobile:375,tablet:768,desktop:1440},q={mobileOnly:`(max-width: ${o.mobile-.02}px)`,mobile:`(min-width: ${o.mobile}px)`,mobileTablet:`(min-width: ${o.mobile}px) and (max-width: ${o.tablet-.02}px)`,tabletBefore:`(max-width: ${o.tablet-.02}px)`,tablet:`(min-width: ${o.tablet}px)`,tabletOnly:`(min-width: ${o.tablet}px) and (max-width: ${o.desktop-.02}px)`,desktopBefore:`(max-width: ${o.desktop-.02}px)`,desktop:`(min-width: ${o.desktop}px)`,retina:`(min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx)`};export{U as F,h as G,T as L,B as a,E as b,S as c,_ as d,L as e,M as f,I as g,F as h,q as i,A as j,R as k,P as l};
