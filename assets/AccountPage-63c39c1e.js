import{s as i,t,j as e,P as c,q as y,h as q,r as m,v as X,b as M,w as L,x as H,y as Z,z as G}from"./index-17318f2c.js";import{F as I,E as T,c as v,e as J,b as w,f as K,g as Q,d as C,h as S,M as $}from"./index.esm-ad096b5a.js";import{a as Y,X as R,V as ee}from"./XClose-b72d0364.js";import{u as k}from"./useTranslation-c030a84c.js";import{A as te}from"./Avatar-01d2144c.js";import{e as ie,a as ne,i as oe,b as re}from"./eye-off-6c2fae71.js";const ae=i.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
`,se=i(I)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  width: 200px;

  @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${t.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border: 1px solid rgba(17, 17, 17, 15%);
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;

    &:hover {
      border: 1px solid black;
    }
  }
`,de=i(T)`
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.r};
  line-height: 14px;
  padding-left: 14px;
  color: red;
  @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
  }

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
  }

  @media screen and (${t.breakpoints.l} <= width) {
    padding-left: 18px;
  }
`;function f({label:n,type:r,name:o,placeholder:s}){return e.jsxs("label",{htmlFor:o,children:[e.jsx(ae,{children:n}),e.jsx(se,{id:o,type:r,name:o,placeholder:s}),e.jsx(de,{name:o,component:"div"})]})}f.propTypes={label:c.string.isRequired,type:c.string.isRequired,name:c.string.isRequired,placeholder:c.string.isRequired};const A=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],ce=/^[a-zA-Z0-9_]*$/,le=/^\+380\d{9}$/,pe=v().shape({avatar:J().test("fileType","Only supported image formats are allowed",n=>!n||n&&A.includes(n==null?void 0:n.type))}),he=v().shape({email:w().email(y.t("Error email")).required("Email is required")}),me=v().shape({password:w().min(6,"The password is short - min 6 characters").required(y.t("Password Required")),confirmPassword:w().min(6,"The password is short - min 6 characters").required(y.t("Password Required")).oneOf([K("password"),null],"Passwords must match")});v().shape({name:w().min(4,"The name is short - must contain at least 4 characters").max(16,"Name is too long - should be 16 chars maximum.").matches(ce,y.t("Only letters")).required("Name is required"),phone:w().matches(le,"Invalid phone number"),birthday:Q(),skype:w().max(16,"Too long - should be 16 chars maximum.")});const xe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
  top: -31px;

  @media screen and (${t.breakpoints.m} <= width) {
    top: 0;
  }
`,be=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 14px;
  top: 85%;
  left: 60%;
  color: white;
  background-color: #3e85f3;
  border-radius: 50%;
  z-index: 1;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #2b78ef;
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 24px;
    height: 24px;
  }
`,ue=i.input`
  display: none;
`;i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;

  @media screen and (${t.breakpoints.m} <= width) {
    width: 124px;
    height: 124px;
  }
`;const E=i.img`
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  object-fit: cover;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 124px;
    height: 124px;
  }
`;function U({selectedAvatar:n,formik:r,setSelectedAvatar:o,setImagePreview:s}){k();const d=q(),a=m.useRef(null),l=()=>a.current.click();return e.jsxs(xe,{children:[e.jsx(be,{children:e.jsx(Y,{width:"18px",height:"18px",onClick:l})}),e.jsxs("label",{children:[e.jsx(ue,{type:"file",name:"avatar",accept:"image/*",ref:a,onBlur:()=>r.setTouched({avatar:!0}),onChange:x=>{const h=x.target.files[0];h&&A.includes(h.type)&&(r.setFieldValue("avatar",h),o(URL.createObjectURL(h)),s(""))}}),n?e.jsx("div",{children:e.jsx(E,{src:n,alt:d.name})}):d.avatarUrl&&e.jsx(E,{alt:"username",src:d.avatarUrl,sx:{width:124,height:124,border:"2px solid #3E85F3"}})||e.jsx(te,{alt:"username",src:"",sx:{fontSize:"72px",width:124,height:124,border:"2px solid #3E85F3"},children:d.name.split("")[0]})]})]})}U.propTypes={selectedAvatar:c.string.isRequired,formik:c.object.isRequired,setSelectedAvatar:c.func.isRequired,setImagePreview:c.func.isRequired};const ge=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,fe=i.h2`
  margin: 0;
  margin-bottom: 4px;

  @media screen and (${t.breakpoints.l} <= width) {
    margin-bottom: 8px;
  }
`,we=i.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: #343434;

  @media screen and (${t.breakpoints.m} <= width) {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  @media screen and (${t.breakpoints.l} <= width) {
    margin-bottom: 44px;
  }
`,ke=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    gap: 16px;
  }

  @media screen and (${t.breakpoints.l} <= width) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 50px;
    width: 758px;
    position: relative;
  }
`;i.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;const je=i.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 60px;
  border-radius: 16px;
  color: white; //  color: ${({theme:n})=>n.colors.white};
  background-color: #3e85f3; //  background-color: ${({theme:n})=>n.colors.activeUserNavIcon};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
    margin-top: 80px;
  }

  @media screen and (${t.breakpoints.l} <= width) {
  }
`;function B({callBack:n}){const{t:r}=k(),o=q(),s={avatarUrl:o.avatarUrl||"",name:o.name,phone:o.phone||"",birthday:o.birthday||new Date,skype:o.skype||""},[d,a]=m.useState(null),[l,x]=m.useState(o.avatarUrl),h=b=>{const u=new FormData;Object.entries(b).forEach(([g,p])=>{if(p)p instanceof File?u.append(g,p):typeof p=="string"?u.append(g,p.trim()):u.append(g,p);else if(g==="birthday"){const j=X(new Date(p[g]),"yyyy-MM-dd");u.append("birthday",j)}}),n(u)};return e.jsx(e.Fragment,{children:e.jsx(C,{initialValues:s,validationSchema:pe,onSubmit:h,enableReinitialize:!0,children:b=>e.jsx(S,{encType:"multipart/form-data",children:e.jsxs(ge,{children:[e.jsx(U,{selectedAvatar:l,formik:b,setSelectedAvatar:x,setImagePreview:a}),e.jsx(fe,{children:o.name}),e.jsx(we,{children:r("User")}),e.jsxs(ke,{children:[e.jsx(f,{label:r("UserName"),type:"text",name:"name",placeholder:r("Enter your name")}),e.jsx(f,{label:r("Birthday"),type:"date",name:"birthday",placeholder:"Pick a date of your birthday"}),e.jsx(f,{label:r("Phone"),type:"tel",name:"phone",pattern:"\\(\\d{3}\\) \\d{3}-\\d{4}",placeholder:"+380971234567"}),e.jsx(f,{label:r("Skype"),type:"text",name:"skype",placeholder:r("Add a skype number")})]}),e.jsx(je,{type:"submit",disabled:!b.isValid||!b.touched||b.isSubmitting||!b.dirty,children:r("Save changes")})]})})})})}B.propTypes={callBack:c.func.isRequired};const ye=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  position: relative;
  background-color: white;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 550px;
    height: 550px;
    border-radius: 16px;
  }

  /* @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
  }

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
  }

  @media screen and (${t.breakpoints.l} <= width) {
  } */
`,$e=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`,ve=i.div`
  color: #cf0202;
  margin-bottom: 20px;
`,Ce=i.h1`
  margin-bottom: 30px;

  @media screen and (${t.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`,Se=i.p`
  margin-bottom: 60px;

  @media screen and (${t.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`,Pe=i.label`
  margin-bottom: 40px;
`,Re=i.div`
  display: flex;
  gap: 20px;

  @media screen and (${t.breakpoints.m} <= width) {
    gap: 50px;
  }
`,Ee=i.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: white;
    background-color: #2b78ef;
    transform: scale(1.1);
  }
`,ze=i.button`
  width: 152px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #cf0202;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #bb0202;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`;function V({onClose:n,callBack:r}){const[o,s]=m.useState(!1),d=a=>{r(a)};return e.jsx(e.Fragment,{children:e.jsxs(ye,{children:[e.jsx($e,{onClick:n,children:e.jsx(R,{width:"24",height:"24"})}),e.jsx(ve,{children:e.jsx(ee,{width:"240",height:"240"})}),e.jsx(Ce,{children:"Are you sure?"}),e.jsx(Se,{children:"This action will permanently delete the profile data."}),e.jsxs(Pe,{children:[e.jsx("input",{type:"checkbox",checked:o,name:"agreement",onChange:()=>s(!o)})," ","I agree to delete profile data"]}),e.jsxs(Re,{children:[e.jsx(Ee,{onClick:n,children:"Cancel"}),e.jsx(ze,{type:"submit",disabled:!o,onClick:d,children:"Delete profile"})]})]})})}V.propTypes={onClose:c.func.isRequired,callBack:c.func.isRequired};const Fe=i.button`
  width: 172px;
  height: 48px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({theme:n})=>n.colors.white};
  background-color: #fad91b;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #bb0202;
    transform: scale(1.1);
  }

  @media screen and (${t.breakpoints.l} <= width) {
    width: 195px;
  }
`;function qe(){M();const n=a=>{};k();const[r,o]=m.useState(!1),s=()=>{o(!0)},d=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[r&&e.jsx($,{isOpen:r,onClose:d,children:e.jsx(V,{onClose:d,callBack:n})}),e.jsx(Fe,{type:"button",onClick:s,children:"Delete profile"})]})}const Me=i(S)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: white;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 550px;
    height: 350px;
    border-radius: 16px;
  }
`,Ie=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`,Te=i.h1`
  margin-bottom: 30px;
  text-align: center;
  color: #3e85f3;
`,Ae=i.div`
  margin-bottom: 40px;
`,Ue=i.div`
  display: flex;
`,Be=i.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`,Ve=i.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  /* border: 3px solid #3e85f3; */
  margin-left: 30px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #2b78ef;
  }
`;function D({onClose:n,callbackEmail:r,openChangeEmailVerifyModal:o}){const s={email:""},d=a=>{o(),console.log(o),console.log(a),r(a)};return e.jsx(e.Fragment,{children:e.jsx(C,{initialValues:s,validationSchema:he,onSubmit:d,children:a=>e.jsx(e.Fragment,{children:e.jsxs(Me,{children:[e.jsx(Ie,{onClick:n,children:e.jsx(R,{width:"24",height:"24"})}),e.jsx(Te,{children:"Change email"}),e.jsx(Ae,{children:e.jsx(f,{label:"New email",name:"email",placeholder:"Enter new email"})}),e.jsxs(Ue,{children:[e.jsx(Be,{type:"submit",disabled:!a.isValid||!a.touched||a.isSubmitting||!a.dirty,children:"Update email"}),e.jsx(Ve,{type:"button",onClick:n,children:"Cancel"})]})]})})})})}D.propTypes={onClose:c.func.isRequired,callbackEmail:c.func.isRequired,openChangeEmailVerifyModal:c.bool.isRequired};const De=i(S)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: white;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 550px;
    height: 350px;
    border-radius: 16px;
  }
`,Oe=i.div`
  margin-bottom: 30px;
`,We=i.div`
  display: flex;
`,Ne=i.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`,_e=i.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  /* border: 3px solid #3e85f3; */
  margin-left: 100px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #2b78ef;
  }
`;function O({onClose:n,callbackEmail:r,closeChangeEmailVerifyModal:o}){const s={code:""},d=a=>{console.log(a),r(a),o()};return e.jsx(e.Fragment,{children:e.jsx(C,{initialValues:s,onSubmit:d,children:a=>e.jsx(e.Fragment,{children:e.jsxs(De,{children:[e.jsx(Oe,{children:e.jsx(f,{label:"Verify code",type:"text",name:"code",placeholder:"Enter verify code"})}),e.jsxs(We,{children:[e.jsx(Ne,{type:"submit",children:"Verify"}),e.jsx(_e,{type:"button",onClick:n,children:"Cancel"})]})]})})})})}O.propTypes={onClose:c.func.isRequired,callbackEmail:c.func.isRequired,closeChangeEmailVerifyModal:c.bool.isRequired};const Xe=i.button`
  width: 172px;
  height: 48px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({theme:n})=>n.colors.white};
  background-color: #3e85f3; //  background-color: ${({theme:n})=>n.colors.activeUserNavIcon};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  /* @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    margin-bottom: 20px;
  } */

  @media screen and (${t.breakpoints.l} <= width) {
    width: 195px;
  }
`;function W({callbackEmail:n}){k();const[r,o]=m.useState(!1),[s,d]=m.useState(!1);console.log(r),console.log(s);const a=()=>{o(!0)},l=()=>{o(!1)},x=()=>{d(!0)},h=()=>{d(!1)};return e.jsxs(e.Fragment,{children:[r&&e.jsx($,{isOpen:r,onClose:l,children:e.jsx(D,{onClose:l,callbackEmail:n,openChangeEmailVerifyModal:x})}),e.jsx(Xe,{type:"button",onClick:a,children:"Change email"}),s&&e.jsx($,{isOpen:s,onClose:h,children:e.jsx(O,{onClose:h,closeChangeEmailVerifyModal:h})})]})}W.propTypes={callbackEmail:c.func.isRequired};const Le=i.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
`,He=i.div`
  position: relative;
  width: 100%;
`,Ze=i(I)`
  width: 354px;
  height: 46px;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;

  &:hover {
    border: 1px solid black;
  }

  &.input-error {
    border: 1px solid ${t.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${t.colors.saccess};
  }
`,Ge=i(T)`
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
`,Je=i.p`
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
`,z=i.img`
  position: absolute;
  right: 18px;
  bottom: 11px;
  width: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    bottom: 18px;
  }
`,Ke=i.img`
  position: absolute;
  right: 46px;
  bottom: 17px;
  width: 24px;
  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    bottom: 18px;
  }
`;function P({formik:n,label:r,name:o,placeholder:s,validateAfterSubmit:d,setValidateAfterSubmit:a}){const[l,x]=m.useState(!1),{t:h}=k(),b=()=>{x(!l)};{const{errors:u,submitCount:g}=n,p=j=>(d||g>0)&&u[j]?(a(!0),"input-error"):g>0&&!u[j]?"input-correct":"";return e.jsxs("div",{htmlFor:o,className:p(o),children:[e.jsx(Le,{children:r}),e.jsxs(He,{children:[" ",e.jsx(Ze,{type:l?"text":"password",name:o,placeholder:s,className:p(o)}),e.jsx("button",{type:"button",onClick:b,children:e.jsx(Ke,{src:l?ie:ne,alt:"Success Icon",className:p({name:o})!==""?"right":"left"})}),p(o)==="input-correct"&&e.jsx(z,{src:oe,alt:"Success Icon"}),p(o)==="input-error"&&e.jsx(z,{src:re,alt:"Error Icon"})]}),p(o)==="input-correct"&&e.jsx(Je,{children:h("Correct password")}),e.jsx(Ge,{name:o,component:"p"})]})}}P.propTypes={formik:c.func.isRequired,label:c.string.isRequired,name:c.string.isRequired,placeholder:c.string.isRequired,validateAfterSubmit:c.bool.isRequired,setValidateAfterSubmit:c.bool.isRequired};const Qe=i(S)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: white;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${t.breakpoints.s} <= width < ${t.breakpoints.m}) {
  }

  @media screen and (${t.breakpoints.m} <= width) {
    width: 550px;
    height: 450px;
    border-radius: 16px;
  }
`,Ye=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`,et=i.h1`
  text-align: center;
  color: #3e85f3;

  @media screen and (${t.breakpoints.m} <= width) {
    margin-bottom: 30px;
  }
`,tt=i.div`
  @media screen and (${t.breakpoints.m} <= width) {
    margin-bottom: 40px;
  }
`,F=i.div`
  margin-bottom: 30px;

  @media screen and (${t.breakpoints.m} <= width) {
    margin-bottom: 0px;
  }
`,it=i.div`
  display: flex;
`,nt=i.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`,ot=i.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-left: 30px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: white;
    background-color: #2b78ef;
    transform: scale(1.1);
  }
`;function N({onClose:n,callbackPassword:r}){const[o,s]=m.useState(!1),d={password:"",newPassword:"",confirmPassword:""},a=l=>{s(!0),console.log(l),r(l),s(!1)};return e.jsx(e.Fragment,{children:e.jsx(C,{initialValues:d,validationSchema:me,onSubmit:a,validateOnBlur:!1,validateOnChange:o,validateOnMount:!1,children:l=>{const{handleSubmit:x}=l;return e.jsx(e.Fragment,{children:e.jsxs(Qe,{children:[e.jsx(Ye,{onClick:n,children:e.jsx(R,{width:"24",height:"24"})}),e.jsx(et,{children:"Change password"}),e.jsxs(tt,{children:[e.jsx(F,{children:e.jsx(P,{formik:l,validateAfterSubmit:o,setValidateAfterSubmit:s,label:"New password",name:"password",id:"newPassword",placeholder:"Password"})}),e.jsx(F,{children:e.jsx(P,{formik:l,validateAfterSubmit:o,setValidateAfterSubmit:s,label:"Confirm new password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm"})})]}),e.jsxs(it,{children:[e.jsx(nt,{type:"submit",onClick:()=>x(),disabled:!l.isValid||!l.touched||l.isSubmitting||!l.dirty,children:"Update password"}),e.jsx(ot,{type:"button",onClick:n,children:"Cancel"})]})]})})}})})}N.propTypes={onClose:c.func.isRequired,callbackPassword:c.func.isRequired};const rt=i.button`
  width: 172px;
  height: 48px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({theme:n})=>n.colors.white};
  background-color: #3e85f3; //  background-color: ${({theme:n})=>n.colors.activeUserNavIcon};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  /* @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    margin-bottom: 20px;
  } */

  @media screen and (${t.breakpoints.l} <= width) {
    width: 195px;
  }
`;function _({callbackPassword:n}){k();const[r,o]=m.useState(!1),s=()=>{o(!0)},d=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[r&&e.jsx($,{isOpen:r,onClose:d,children:e.jsx(N,{onClose:d,callbackPassword:n})}),e.jsx(rt,{type:"button",onClick:s,children:"Change password"})]})}_.propTypes={callbackPassword:c.func.isRequired};const at=i.div`
  /* padding-bottom: 40px;

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    padding-bottom: 38px;
  }

  @media screen and (${t.breakpoints.l} <= width) {
    padding-bottom: 32px;
  } */

  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    padding: 40px 175px 40px 175px;
  }

  @media screen and (${t.breakpoints.l} <= width) {
    padding: 60px 165px 60px 164px;
  }
`,st=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    /* gap: 10px; */
  }

  @media screen and (${t.breakpoints.l} <= width) {
    flex-direction: row;
    bottom: 8%;
    right: -8%;
    gap: 20px;
  }
`,dt=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${t.breakpoints.m} <= width < ${t.breakpoints.l}) {
    flex-direction: row;
  }

  @media screen and (${t.breakpoints.l} <= width) {
    flex-direction: row;
    gap: 20px;
  }
`;function bt(){const n=M(),r=a=>{n(L(a))},o=a=>{n(H(a))},s=a=>{n(Z(a))},d=a=>{n(G(a))};return e.jsxs(at,{children:[e.jsx(B,{callBack:r,callbackEmail:o,callbackPassword:s,callbackDeleteUser:d}),e.jsxs(st,{children:[e.jsxs(dt,{children:[e.jsx(W,{callbackEmail:o}),e.jsx(_,{callbackPassword:s})]}),e.jsx(qe,{callbackDeleteUser:d})]})]})}export{bt as default};
