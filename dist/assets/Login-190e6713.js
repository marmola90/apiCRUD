import{r as c,j as s,_ as l,u as B,T as M,a as O,b as v,c as w,d as j,e as z,f as R,C as D,B as h,g as I,R as L}from"./index-c4af199b.js";import{G as A,r as W,i as $,A as V,u as q,a as g,P as H,T as F,b,B as N}from"./constants-5dfe58db.js";import{A as U}from"./Avatar-0e740448.js";const G=c.createContext(null),_=G;function C(){return c.useContext(_)}const J=typeof Symbol=="function"&&Symbol.for,Y=J?Symbol.for("mui.nested"):"__THEME_NESTED__";function K(e,t){return typeof t=="function"?t(e):l({},e,t)}function Q(e){const{children:t,theme:o}=e,n=C(),r=c.useMemo(()=>{const i=n===null?o:K(n,o);return i!=null&&(i[Y]=n!==null),i},[o,n]);return s.jsx(_.Provider,{value:r,children:t})}const y={};function S(e,t,o,n=!1){return c.useMemo(()=>{const r=e&&t[e]||t;if(typeof o=="function"){const i=o(r),u=e?l({},t,{[e]:i}):i;return n?()=>u:u}return e?l({},t,{[e]:o}):l({},t,o)},[e,t,o,n])}function X(e){const{children:t,theme:o,themeId:n}=e,r=B(y),i=C()||y,u=S(n,r,o),d=S(n,i,o,!0);return s.jsx(Q,{theme:d,children:s.jsx(M.Provider,{value:u,children:t})})}const Z=["theme"];function ee(e){let{theme:t}=e,o=O(e,Z);const n=t[v];return s.jsx(X,l({},o,{themeId:n?v:void 0,theme:n||t}))}const te=(e,t)=>l({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),oe=e=>l({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),ne=(e,t=!1)=>{var o;const n={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([u,d])=>{var m;n[e.getColorSchemeSelector(u).replace(/\s*&/,"")]={colorScheme:(m=d.palette)==null?void 0:m.mode}});let r=l({html:te(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:l({margin:0},oe(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},n);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(r=[r,i]),r};function se(e){const t=w({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=t;return s.jsxs(c.Fragment,{children:[s.jsx(A,{styles:r=>ne(r,n)}),o]})}var x={},re=$;Object.defineProperty(x,"__esModule",{value:!0});var T=x.default=void 0,ae=re(W()),ie=s,ce=(0,ae.default)((0,ie.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");T=x.default=ce;const le="/assets/L04-6e10e46d.png",ue=V,de=ue+"v1/auth/login",me=async(e,t)=>await fetch(de,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(n=>n.json()).catch(n=>n),pe=c.lazy(()=>j(()=>import("./Backdrop.component-edc196db.js"),["assets/Backdrop.component-edc196db.js","assets/index-c4af199b.js","assets/index-41007433.css","assets/constants-5dfe58db.js"])),he=c.lazy(()=>j(()=>import("./SnackBar.component-bce91d77.js").then(e=>e.b),["assets/SnackBar.component-bce91d77.js","assets/index-c4af199b.js","assets/index-41007433.css","assets/constants-5dfe58db.js"])),ge=z(),xe={usuario:"",password:""},ye=()=>{const e=q(),[t,o]=c.useState(xe),[n,r]=c.useState(null),i=R(),[u,d]=c.useState(!1),m=()=>r(null),k=async()=>{try{const a=await me(t.usuario,t.password);if(a.datos.EstaActivo)e(I(a)),i(`/${L.PRIVATE}`,{replace:!0});else{const p=JSON.parse(a.token).lde_message;r(p?{children:"Usuario/Contraseña inválidos.",severity:"error"}:{children:"El usuario no esta activo.",severity:"error"}),d(!1)}}catch(a){console.log(a)}},E=async a=>{a.preventDefault(),d(!0),k()},f=a=>{a.preventDefault();const{name:p,value:P}=a.target;o({...t,[p]:P})};return s.jsx(ee,{theme:ge,children:s.jsxs(D,{component:"main",sx:{height:"60vh",maxWidth:"100%",width:{xs:"auto",sm:"600px",md:"1050px"},marginTop:"9rem"},children:[s.jsxs(h,{sx:{marginTop:8},children:[s.jsxs(g,{container:!0,children:[s.jsx(se,{}),s.jsx(g,{item:!0,xs:!1,sm:5,md:7,sx:{backgroundImage:`url(${le})`,backgroundRepeat:"no-repeat",backgroundColor:a=>a.palette.mode==="light"?a.palette.grey[900]:a.palette.grey[700],backgroundSize:"contain",backgroundPosition:"center"}}),s.jsx(g,{item:!0,xs:12,sm:7,md:5,component:H,elevation:6,square:!0,children:s.jsxs(h,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(U,{sx:{m:1,bgcolor:"warning.main"},children:s.jsx(T,{})}),s.jsx(F,{component:"h1",variant:"h5",children:"Sign in"}),s.jsxs(h,{component:"form",onSubmit:E,sx:{mt:1},children:[s.jsx(b,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"usuario",label:"Usuario",name:"usuario",autoComplete:"usuario",onChange:f,autoFocus:!0}),s.jsx(b,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:f}),s.jsx(N,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:"info.light"},children:"Ingresar"})]})]})})]}),!!n&&s.jsx(he,{snackbar:n,onClose:m})]}),s.jsx(pe,{openBackdrop:u,setOpenBackdrop:d})]})})};export{ye as default};
