import{r as h,j as s,P as j,s as c,t as a,b,o as y,ap as v,m as p,L as k,aq as w,ar as S}from"./index-17318f2c.js";import{d as L,M as u}from"./index.esm-ad096b5a.js";import{c as $,V as C}from"./eye-off-6c2fae71.js";import{C as F,T as A,v as I,F as V,I as B,A as x,B as E,a as T,b as M,c as O}from"./AuthNavigate-ac61b986.js";import{u as P}from"./useTranslation-c030a84c.js";function f({onSubmitForm:n}){const[o,e]=h.useState(!1),{t:r}=P();return s.jsxs(F,{children:[s.jsx(A,{children:r("Log In")}),s.jsx(L,{validationSchema:I,initialValues:{email:"",password:""},validateOnBlur:!1,validateOnChange:o,validateOnMount:!1,onSubmit:async i=>{e(!0),n(i),e(!1)},children:i=>{const{errors:l,handleSubmit:d,submitCount:t,values:m}=i;return s.jsxs(V,{autoComplete:"off",children:[s.jsxs(B,{children:[s.jsx(x,{name:"email",title:"Email",type:"email",placeholder:"nadiia@gmail.com",id:"login_email",validateAfterSubmit:o,submitCount:t,errors:l,setValidateAfterSubmit:e,values:m.email}),s.jsx(x,{name:"password",title:"Password",type:"password",placeholder:"●●●●●●●",id:"login_password",validateAfterSubmit:o,submitCount:t,errors:l,setValidateAfterSubmit:e,values:m.password})]}),s.jsxs(E,{type:"submit",onClick:d,children:[r("Log in"),s.jsx(T,{src:$,alt:"LogIn SVG"})]})]})}}),s.jsx(M,{title:"Log In With Google"})]})}f.propTypes={onSubmitForm:j.func.isRequired};const g="/project-mern-schedule-01/assets/rocket1x-77f0dd8e.png",R="/project-mern-schedule-01/assets/rocket2x-a346a462.png",W="/project-mern-schedule-01/assets/rocket3x-12159caf.png",q=c.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${a.colors.backgroundAuth};
`,G=c.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${a.breakpoints.l};
  height: 100%;
`,z=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${a.fontSizes.xs};

  @media screen and (max-width: ${a.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${a.breakpoints.m}) {
    gap: 24px;
  }
`,_=c.picture`
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: ${a.breakpoints.l}) {
    display: block;
  }
`;function K(){const n=b(),o=y(),[,e]=h.useState(!1),r=v(),i=()=>{e(!1)},l=t=>{n(w(t))},d=t=>{n(S(t))};return s.jsxs(q,{children:[s.jsxs(G,{children:[s.jsxs(_,{children:[s.jsx("source",{media:"(min-width: 1440px)",srcSet:`${g} 1x, ${R} 2x, ${W} 3x`}),s.jsx("img",{src:g,alt:"Logo goose"})]}),s.jsxs(z,{children:[s.jsx(f,{onSubmitForm:l}),s.jsx(O,{formType:"login"})]})]}),o&&s.jsx(u,{color:p.black,children:s.jsx(k,{})}),r==="Action Required: Verify Your Email"&&s.jsx(u,{onClose:i,color:p.black,clickable:!1,children:s.jsx(C,{onSubmitForm:d})})]})}export{K as default};
