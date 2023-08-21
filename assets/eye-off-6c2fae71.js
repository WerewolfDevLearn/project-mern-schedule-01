import{s as n,t as e,j as t,P as a}from"./index-17318f2c.js";import{h as d,F as c,d as l}from"./index.esm-ad096b5a.js";import{u as p}from"./useTranslation-c030a84c.js";const m="/project-mern-schedule-01/assets/login-b4e329da.svg",f=n.div`
  display: flex;
  width: 100%;

  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: ${e.colors.backgroundUserForm};

  @media screen and (min-width: ${e.breakpoints.s}) {
    width: 335px;
  }

  @media screen and (min-width: ${e.breakpoints.m}) {
    width: 480px;
    gap: 40px;
    padding: 40px 40px;
  }
`,x=n.h1`
  color: ${e.colors.accent};
  text-shadow: ${e.shadows.authHeading};
  font-family: Inter;
  font-size: ${e.fontSizes.l};
  font-style: normal;
  font-weight: ${e.fontWeight.sb};
  line-height: 24px;

  @media screen and (min-width: ${e.breakpoints.m}) {
    font-size: ${e.fontSizes.xxl};
  }
`,h=n(d)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: ${e.breakpoints.m}) {
    gap: 48px;
  }
`,u=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: ${e.breakpoints.m}) {
    gap: 18px;
  }
`,g=n.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  color: ${e.colors.textAndIconTodo};
  font-family: Inter;
  font-size: ${e.fontSizes.xs};
  font-style: normal;
  font-weight: ${e.fontWeight.sb};
  line-height: normal;

  @media screen and (min-width: ${e.breakpoints.m}) {
    font-size: ${e.fontSizes.s};
  }
`,b=n(c)`
  width: 100%;
  padding: 14px;

  border-radius: 8px;
  border: 1px solid ${e.colors.placegolderAuth};
  background: ${e.colors.backgroundUserForm};

  color: ${e.colors.textAndIconTodo};
  font-family: Inter;
  font-size: ${e.fontSizes.s};
  font-style: normal;
  font-weight: ${e.fontWeight.r};
  line-height: 18px;

  &:hover,
  &:focus {
    border: 1px solid ${e.colors.textAndIconTodo};
  }

  @media screen and (min-width: ${e.breakpoints.m}) {
    padding: 18px;
    font-size: ${e.fontSizes.l};
  }
`,$=n.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  background: ${e.colors.accent};
  box-shadow: ${e.shadows.authButton};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${e.animations.duration};
  transition-timing-function: ${e.animations.cubicBezier};

  color: ${e.colors.white};
  font-family: Inter;
  font-size: ${e.fontSizes.s};
  font-style: normal;
  font-weight: ${e.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${e.breakpoints.m}) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`,w=n.img`
  display: inline;
  width: 18px;
  stroke: red;
  fill: red;

  @media screen and (min-width: ${e.breakpoints.m}) {
    width: 20px;
  }
`;function y({onSubmitForm:i}){const{t:o}=p(),s=r=>{i(r)};return t.jsxs(f,{children:[t.jsx(x,{children:o("Verification")}),t.jsx(l,{initialValues:{verificationCode:""},onSubmit:s,children:()=>t.jsxs(h,{autoComplete:"off",children:[t.jsxs(u,{children:[t.jsx(g,{htmlFor:"verificationCode",children:o("Verification code")}),t.jsx(b,{type:"text",name:"verificationCode",placeholder:"Enter your code"})]}),t.jsxs($,{type:"submit",children:[o("Confirm"),t.jsx(w,{src:m,alt:"LogIn SVG"})]})]})})]})}y.propTypes={onSubmitForm:a.func.isRequired};const v="/project-mern-schedule-01/assets/validation-error-a76a357a.svg",S="/project-mern-schedule-01/assets/validation-success-16fbc974.svg",I="/project-mern-schedule-01/assets/eye-show-d4d58601.svg",F="/project-mern-schedule-01/assets/eye-off-07acb1ab.svg";export{y as V,I as a,v as b,m as c,F as e,S as i};
