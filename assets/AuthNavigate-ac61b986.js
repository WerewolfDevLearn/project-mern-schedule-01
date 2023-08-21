import{j as e,s,t,P as o,q as n,r as f,N as T,a as w}from"./index-17318f2c.js";import{u as m}from"./useTranslation-c030a84c.js";import{c as b,b as c,F as C,E,h as F}from"./index.esm-ad096b5a.js";import{e as P,a as B,i as W,b as N}from"./eye-off-6c2fae71.js";const L=i=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"1em",height:"1em",...i,children:[e.jsx("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),e.jsx("path",{fill:"#FF3D00",d:"m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"}),e.jsx("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"}),e.jsx("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"})]}),H=s.a`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  border: 1px solid ${t.colors.placegolderAuth};
  background: ${t.colors.backgroundUserForm};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${t.animations.duration};
  transition-timing-function: ${t.animations.cubicBezier};

  color: ${t.colors.black};
  font-family: Inter;
  font-size: ${t.fontSizes.s};
  font-style: normal;
  font-weight: ${t.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 13px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    border-color: ${t.colors.textAndIconTodo};
  }
  &.disabled {
    background: ${t.colors.black};
  }
`,M="https://project-mern-schedule-03.onrender.com/api",z=({title:i})=>{const{t:r}=m();return e.jsxs(H,{href:`${M}/users/google`,children:[e.jsx(L,{width:"24px",height:"24px"}),r(i)]})};z.propTypes={title:o.string};const et=z,it=b().shape({name:c().min(4,n.t("Too Short")).max(20,n.t("Too Long")).matches(/^[a-zA-Z0-9_]*$/,n.t("Only letters")).required(n.t("Name Required")),email:c().required(n.t("Email Required")).email(n.t("Invalid Email")),password:c().required(n.t("Password Required")).min(6,n.t("Password Characters"))}),ot=b().shape({email:c().required(n.t("Email Required")).email(n.t("Invalid Email")),password:c().required(n.t("Password Required")).min(6,n.t("Password Characters"))}),U=s.img`
  position: absolute;
  right: 46px;
  bottom: 11px;
  width: 24px;
  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    bottom: 18px;
  }
`;function S({togglePassword:i,passwordShown:r,status:a}){return e.jsx("button",{type:"button",onClick:()=>i(),children:e.jsx(U,{src:r?P:B,alt:"Success Icon",className:a!==""?"right":"left"})})}S.propTypes={togglePassword:o.func.isRequired,passwordShown:o.bool.isRequired,status:o.string.isRequired};const V=s.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  color: ${t.colors.textAndIconTodo};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.sb};
  line-height: normal;

  &.input-error {
    color: ${t.colors.failed};
    font-weight: ${t.fontWeight.r};
  }

  &.input-correct {
    color: ${t.colors.saccess};
    font-weight: ${t.fontWeight.r};
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
  }
`,G=s.div`
  position: relative;
  width: 100%;
`,O=s(C)`
  width: 100%;
  padding: 14px;
  padding-right: 44px;

  border-radius: 8px;
  border: 1px solid ${t.colors.placegolderAuth};
  background: ${t.colors.backgroundUserForm};

  color: ${t.colors.textAndIconTodo};
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeight.r};
  line-height: 18px;

  &:hover,
  &:focus {
    border: 1px solid ${t.colors.textAndIconTodo};
  }

  &::placeholder {
    color: ${t.colors.placegolderAuth};
  }

  &#login_password::placeholder {
    font-size: ${t.fontSizes.xs};
    letter-spacing: 4px;
  }

  &.input-error {
    border: 1px solid ${t.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${t.colors.saccess};
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 18px;
    font-size: ${t.fontSizes.l};
  }
`,D=s(E)`
  color: #da1414;
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
    left: 18px;
  }
`,_=s.p`
  color: ${t.colors.saccess};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
    left: 18px;
  }
`,$=s.img`
  position: absolute;
  right: 18px;
  bottom: 11px;
  width: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    bottom: 18px;
  }
`;function Z({name:i,title:r,type:a,placeholder:p,id:k,submitCount:g,errors:x,setValidateAfterSubmit:v,values:y}){const[d,j]=f.useState(""),[h,q]=f.useState(!1),{t:u}=m(),R=()=>{q(!h)},I=()=>a==="password"?h?"text":"password":a,A=l=>x[l]?"input-error":(x[l],"input-correct");return f.useEffect(()=>{if(g>0){v(!0);const l=A(i);j(l)}},[y,x[i],g]),e.jsxs(V,{htmlFor:i,className:d,children:[u(r),e.jsxs(G,{children:[e.jsx(O,{type:I(),name:i,placeholder:u(p),id:k,className:d}),a==="password"&&e.jsx(S,{togglePassword:R,passwordShown:h,status:d}),d==="input-correct"&&e.jsx($,{src:W,alt:"Success Icon"}),d==="input-error"&&e.jsx($,{src:N,alt:"Error Icon"})]}),d==="input-correct"&&e.jsx(_,{children:u(`Correct ${i}`)}),e.jsx(D,{name:i,component:"p"})]})}Z.propTypes={name:o.string.isRequired,title:o.string.isRequired,type:o.string.isRequired,placeholder:o.string.isRequired,id:o.string.isRequired,validateAfterSubmit:o.bool.isRequired,submitCount:o.number.isRequired,errors:o.object.isRequired,setValidateAfterSubmit:o.func.isRequired,values:o.string.isRequired};const st=s.div`
  display: flex;
  width: 100%;

  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: ${t.colors.backgroundUserForm};

  @media screen and (min-width: ${t.breakpoints.s}) {
    width: 335px;
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    width: 480px;
    gap: 40px;
    padding: 40px 40px;
  }
`,nt=s.h1`
  color: ${t.colors.accent};
  text-shadow: ${t.shadows.authHeading};
  font-size: ${t.fontSizes.l};
  font-weight: ${t.fontWeight.sb};
  line-height: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.xxl};
  }
`,rt=s(F)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: ${t.breakpoints.m}) {
    gap: 48px;
  }
`,at=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    gap: 18px;
  }
`,dt=s.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  background: ${t.colors.accent};
  box-shadow: ${t.shadows.authButton};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${t.animations.duration};
  transition-timing-function: ${t.animations.cubicBezier};

  color: ${t.colors.white};
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`,ct=s.img`
  display: inline;
  width: 18px;
  stroke: red;
  fill: red;

  @media screen and (min-width: ${t.breakpoints.m}) {
    width: 20px;
  }
`,J=s(T)`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;function K({formType:i}){const{t:r}=m(),a=i==="register"?w.loginPage:w.registerPage,p=r(i==="register"?"Log In":"Sign up");return e.jsx("div",{children:e.jsx(J,{to:a,children:p})})}K.propTypes={formType:o.string.isRequired};export{Z as A,dt as B,st as C,rt as F,at as I,nt as T,ct as a,et as b,K as c,it as d,ot as v};
