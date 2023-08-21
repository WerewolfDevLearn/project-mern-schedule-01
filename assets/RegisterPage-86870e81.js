import{r as x,j as e,P as h,s as d,t as n,b as f,o as j,ap as b,m as y,L as v,as as w,ar as S}from"./index-17318f2c.js";import{d as k,M as $}from"./index.esm-ad096b5a.js";import{c as C,V as E}from"./eye-off-6c2fae71.js";import{C as A,T as B,d as F,F as I,I as L,A as m,B as R,a as T,b as V,c as M}from"./AuthNavigate-ac61b986.js";import{u as q}from"./useTranslation-c030a84c.js";const u="/project-mern-schedule-01/assets/goose-quote1x-93cfbfaf.png",O="/project-mern-schedule-01/assets/goose-quote2x-dc81c1f1.png",P="/project-mern-schedule-01/assets/goose-quote3x-c25ae5e3.png";function g({callBack:l}){const[a,s]=x.useState(!1),{t:c}=q();return e.jsxs(A,{children:[e.jsx(B,{children:c("Sign Up")}),e.jsx(k,{validationSchema:F,initialValues:{name:"",email:"",password:""},validateOnBlur:!1,validateOnChange:a,validateOnMount:!1,onSubmit:o=>{s(!0),l(o),s(!1)},children:o=>{const{errors:i,handleSubmit:p,submitCount:r,values:t}=o;return e.jsxs(I,{autoComplete:"off",children:[e.jsxs(L,{children:[e.jsx(m,{name:"name",title:"Name",type:"text",placeholder:"Enter your name",id:"signup_name",validateAfterSubmit:a,submitCount:r,errors:i,setValidateAfterSubmit:s,values:t.name}),e.jsx(m,{name:"email",title:"Email",type:"email",placeholder:"Enter email",id:"signup_email",validateAfterSubmit:a,submitCount:r,errors:i,setValidateAfterSubmit:s,values:t.email}),e.jsx(m,{name:"password",title:"Password",type:"password",placeholder:"Enter password",id:"signup_password",validateAfterSubmit:a,submitCount:r,errors:i,setValidateAfterSubmit:s,values:t.password})]}),e.jsxs(R,{type:"submit",onClick:p,children:[c("Sign Up")," ",e.jsx(T,{src:C,alt:"LogIn SVG"})]})]})}}),e.jsx(V,{title:"Sign Up With Google"})]})}g.propTypes={callBack:h.func.isRequired};const W=d.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${n.colors.backgroundAuth};
`,G=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${n.breakpoints.l};
  height: 100%;
`,U=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${n.fontSizes.xs};

  @media screen and (max-width: ${n.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${n.breakpoints.m}) {
    gap: 24px;
  }
`,_=d.picture`
  display: none;

  position: absolute;
  width: 400px;
  bottom: 0;
  left: 49px;

  @media screen and (min-width: ${n.breakpoints.l}) {
    display: block;
  }
`;function K(){const l=f(),a=j(),s=b(),[c,o]=x.useState(!1),i=()=>{o(!1)},p=t=>{l(w(t)),o(!0)},r=t=>{l(S(t))};return e.jsxs(W,{children:[e.jsxs(G,{children:[e.jsxs(_,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${u} 1x, ${O} 2x, ${P} 3x`}),e.jsx("img",{src:u,alt:"Logo goose"})]}),e.jsxs(U,{children:[e.jsx(g,{callBack:p}),e.jsx(M,{formType:"register"})]})]}),c&&e.jsxs($,{onClose:i,color:y.black,children:[a?e.jsx(v,{}):e.jsx(E,{onSubmitForm:r}),s&&i()]})]})}export{K as default};
