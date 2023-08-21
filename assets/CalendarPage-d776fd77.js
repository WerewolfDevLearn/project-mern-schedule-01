import{s as p,N as f,P as c,u as m,v as d,j as a,r as l,D as g,E as w,L as b,O as j}from"./index-17318f2c.js";import{P as D,s as M,a as v}from"./PeriodPaginator-b51b998a.js";import{u as T}from"./useTranslation-c030a84c.js";import{a as $}from"./index-262794e2.js";import{a as P}from"./index-5479063f.js";import"./index-6e0537ae.js";const R=p.ul`
  display: flex;
  margin-top: 18px;
  /* margin-bottom: 24px; */
  
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`,y=p.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
`,x=p(f)`
  color: #3e85f3;
  background-color: #e3f3ff;
  border: 1px solid rgba(220, 227, 229, 0.8);

  &.active {
    background-color: ${({colorbtn:e})=>e==="white"?"#cae8ff":"transparent"};
    color: ${({colorbtn:e})=>"#3e85f3"};
  }

  &.month {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }
  &.day {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,u=({today:e,onChangeType:n})=>{const s=m(),i=s.pathname.includes("month"),o=s.pathname.includes("day"),r=d(new Date(e),"yyyy-MM-dd"),{t}=T();return a.jsxs(R,{children:[a.jsx(y,{children:a.jsx(x,{className:`${i?"active":""} month`,to:`/calendar/month/${r}`,onClick:()=>n("month"),children:t("Month")})}),a.jsx(y,{children:a.jsx(x,{className:`${o?"active":""} day`,to:`/calendar/day/${r}`,onClick:()=>n("day"),children:t("Day")})})]})};u.propTypes={today:c.string.isRequired,onChangeType:c.func.isRequired};const k=p.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`,h=({today:e,prevHandler:n,nextHandler:s})=>{const[i,o]=l.useState("month"),t=m().pathname.slice(0,-11);return l.useEffect(()=>{if(t.endsWith("/calendar/day")){o("day");return}o("month")},[t]),a.jsxs(k,{children:[a.jsx(D,{prevHandler:n,nextHandler:s,type:i,date:e}),a.jsx(u,{today:e,onChangeType:o})]})};h.propTypes={prevHandler:c.func.isRequired,nextHandler:c.func.isRequired,today:c.string.isRequired};function S(){const{currentDate:e}=g(),n=w(),{pathname:s}=m(),i=()=>{if(s.includes("day")){const t=M(new Date(e),1);n(`/calendar/day/${d(t,"yyyy-MM-dd")}`);return}const r=v(new Date(e),1);n(`/calendar/month/${d(r,"yyyy-MM-dd")}`)},o=()=>{if(s.includes("day")){const t=$(new Date(e),1);n(`/calendar/day/${d(t,"yyyy-MM-dd")}`);return}const r=P(new Date(e),1);n(`/calendar/month/${d(r,"yyyy-MM-dd")}`)};return a.jsxs(a.Fragment,{children:[a.jsx(h,{prevHandler:i,nextHandler:o,today:e}),a.jsx(l.Suspense,{fallback:a.jsx(b,{}),children:a.jsx(j,{})})]})}export{S as default};
