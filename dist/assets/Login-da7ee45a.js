import{r as c,j as s,_ as l,u as O,T as w,a as M,b,c as z,G as B,A as I,d as R,i as D,e as x,f as L,g as A,h as W,C as $,B as h,k as g,P as V,l as q,m as y,n as H,o as F,R as N}from"./index-f6950337.js";const U=c.createContext(null),j=U;function C(){return c.useContext(j)}const G=typeof Symbol=="function"&&Symbol.for,J=G?Symbol.for("mui.nested"):"__THEME_NESTED__";function Y(e,t){return typeof t=="function"?t(e):l({},e,t)}function K(e){const{children:t,theme:o}=e,n=C(),r=c.useMemo(()=>{const i=n===null?o:Y(n,o);return i!=null&&(i[J]=n!==null),i},[o,n]);return s.jsx(j.Provider,{value:r,children:t})}const S={};function _(e,t,o,n=!1){return c.useMemo(()=>{const r=e&&t[e]||t;if(typeof o=="function"){const i=o(r),u=e?l({},t,{[e]:i}):i;return n?()=>u:u}return e?l({},t,{[e]:o}):l({},t,o)},[e,t,o,n])}function Q(e){const{children:t,theme:o,themeId:n}=e,r=O(S),i=C()||S,u=_(n,r,o),d=_(n,i,o,!0);return s.jsx(K,{theme:d,children:s.jsx(w.Provider,{value:u,children:t})})}const X=["theme"];function Z(e){let{theme:t}=e,o=M(e,X);const n=t[b];return s.jsx(Q,l({},o,{themeId:n?b:void 0,theme:n||t}))}const ee=(e,t)=>l({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),te=e=>l({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),oe=(e,t=!1)=>{var o;const n={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([u,d])=>{var m;n[e.getColorSchemeSelector(u).replace(/\s*&/,"")]={colorScheme:(m=d.palette)==null?void 0:m.mode}});let r=l({html:ee(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:l({margin:0},te(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},n);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(r=[r,i]),r};function ne(e){const t=z({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=t;return s.jsxs(c.Fragment,{children:[s.jsx(B,{styles:r=>oe(r,n)}),o]})}const se=I,re=se+"v1/auth/login",ae=async(e,t)=>await fetch(re,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(n=>n.json()).catch(n=>n);var f={},ie=D;Object.defineProperty(f,"__esModule",{value:!0});var T=f.default=void 0,ce=ie(R()),le=s,ue=(0,ce.default)((0,le.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");T=f.default=ue;const de="/assets/L04-6e10e46d.png",me=c.lazy(()=>x(()=>import("./TextTitle.component-5cd8e464.js"),["assets/TextTitle.component-5cd8e464.js","assets/index-f6950337.js","assets/index-fb021b7c.css"])),pe=c.lazy(()=>x(()=>import("./Backdrop.component-6030b062.js"),["assets/Backdrop.component-6030b062.js","assets/index-f6950337.js","assets/index-fb021b7c.css"])),he=c.lazy(()=>x(()=>import("./index-f6950337.js").then(e=>e.aw),["assets/index-f6950337.js","assets/index-fb021b7c.css"])),ge=L(),xe={usuario:"",password:""},ve=()=>{const e=A(),[t,o]=c.useState(xe),[n,r]=c.useState(null),i=W(),[u,d]=c.useState(!1),m=()=>r(null),k=async()=>{try{const a=await ae(t.usuario,t.password);if(a.datos.EstaActivo)e(F(a)),i(`/${N.PRIVATE}`,{replace:!0});else{const p=JSON.parse(a.token).lde_message;r(p?{children:"Usuario/Contraseña inválidos.",severity:"error"}:{children:"El usuario no esta activo.",severity:"error"}),d(!1)}}catch(a){console.log(a)}},E=async a=>{a.preventDefault(),d(!0),k()},v=a=>{a.preventDefault();const{name:p,value:P}=a.target;o({...t,[p]:P})};return s.jsx(Z,{theme:ge,children:s.jsxs($,{component:"main",sx:{height:"60vh",maxWidth:"100%",width:{xs:"auto",sm:"600px",md:"1050px"},marginTop:"9rem"},children:[s.jsxs(h,{sx:{marginTop:8},children:[s.jsxs(g,{container:!0,children:[s.jsx(ne,{}),s.jsx(g,{item:!0,xs:!1,sm:5,md:7,sx:{backgroundImage:`url(${de})`,backgroundRepeat:"no-repeat",backgroundColor:a=>a.palette.mode==="light"?a.palette.grey[900]:a.palette.grey[700],backgroundSize:"contain",backgroundPosition:"center"}}),s.jsx(g,{item:!0,xs:12,sm:7,md:5,component:V,elevation:6,square:!0,children:s.jsxs(h,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(q,{sx:{m:1,bgcolor:"warning.main"},children:s.jsx(T,{})}),s.jsx(me,{variante:"h4",color:"#353535de",titleName:"Sign In"}),s.jsxs(h,{component:"form",onSubmit:E,sx:{mt:1},children:[s.jsx(y,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"usuario",label:"Usuario",name:"usuario",autoComplete:"usuario",onChange:v,autoFocus:!0}),s.jsx(y,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:v}),s.jsx(H,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:"info.light"},children:"Ingresar"})]})]})})]}),!!n&&s.jsx(he,{snackbar:n,onClose:m})]}),s.jsx(pe,{openBackdrop:u,setOpenBackdrop:d})]})})};export{ve as default};