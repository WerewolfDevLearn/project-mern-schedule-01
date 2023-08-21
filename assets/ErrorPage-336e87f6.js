import{s as t,E as a,f as p,j as e,ao as x}from"./index-17318f2c.js";import{c as n,b as c}from"./Variables-7c66d345.js";import{u as l}from"./useTranslation-c030a84c.js";const d="/project-mern-schedule-01/assets/gooseRocketMobile-3165b02a.svg",s="/project-mern-schedule-01/assets/gooseRocketTablet-0236e75b.svg",m=t.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({theme:o})=>o.colors.background};
`,h=t.h1`
  position: relative;

  margin-bottom: 28px;

  display: flex;
  gap: 60px;

  color: ${n.blue1};

  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 150px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 250px;
    gap: 110px;
  }
`,g=t.span`
  picture {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.4);

    @media screen and (min-width: 768px) {
    }
  }
`,u=t.p`
  width: 281px;
  margin-bottom: 24px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  color: ${({theme:o})=>o.colors.textAndIconTodo};

  @media screen and (min-width: 768px) {
    width: 387px;
  }
`,b=t.button`
  padding: 14px 32px;
  border-radius: 16px;

  color: ${n.white};
  background-color: ${c.primaryBlue};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
  }
`;function k(){const{t:o}=l(),r=a(),i=p().theme;return e.jsx(x,{theme:i,children:e.jsxs(m,{children:[e.jsxs(h,{children:["4",e.jsx(g,{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/svg",srcSet:`${d} 375w, ${s} 768w, 1440w`,sizes:"(max-width: 767px) 375px, (max-width: 1439px) 768px, 1440px",alt:"🦆"}),e.jsx("img",{src:`${s}`,alt:""})]})}),"4"]}),e.jsx(u,{children:o("404")}),e.jsx(b,{onClick:()=>r("/"),children:o("BackHome")})]})})}export{k as default};
