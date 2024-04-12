import{r as u,j as s,_ as c,u as _,T as E,a as P,b as f,c as w,d as M,e as z,C as B,f as O,R}from"./index-db07c757.js";import{G as W,r as $,i as D,A as I,u as L,B as h,a as p,P as q,b as A,T as H,c as v,d as F,S as V}from"./Tab.components-aea60d8b.js";const G=u.createContext(null),S=G;function j(){return u.useContext(S)}const N=typeof Symbol=="function"&&Symbol.for,U=N?Symbol.for("mui.nested"):"__THEME_NESTED__";function J(e,t){return typeof t=="function"?t(e):c({},e,t)}function Y(e){const{children:t,theme:n}=e,o=j(),r=u.useMemo(()=>{const a=o===null?n:J(o,n);return a!=null&&(a[U]=o!==null),a},[n,o]);return s.jsx(S.Provider,{value:r,children:t})}const b={};function y(e,t,n,o=!1){return u.useMemo(()=>{const r=e&&t[e]||t;if(typeof n=="function"){const a=n(r),l=e?c({},t,{[e]:a}):a;return o?()=>l:l}return e?c({},t,{[e]:n}):c({},t,n)},[e,t,n,o])}function K(e){const{children:t,theme:n,themeId:o}=e,r=_(b),a=j()||b,l=y(o,r,n),d=y(o,a,n,!0);return s.jsx(Y,{theme:d,children:s.jsx(E.Provider,{value:l,children:t})})}const Q=["theme"];function X(e){let{theme:t}=e,n=P(e,Q);const o=t[f];return s.jsx(K,c({},n,{themeId:o?f:void 0,theme:o||t}))}const Z=(e,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),ee=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),te=(e,t=!1)=>{var n;const o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,d])=>{var m;o[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(m=d.palette)==null?void 0:m.mode}});let r=c({html:Z(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},ee(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o);const a=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return a&&(r=[r,a]),r};function ne(e){const t=w({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:o=!1}=t;return s.jsxs(u.Fragment,{children:[s.jsx(W,{styles:r=>te(r,o)}),n]})}var g={},oe=D;Object.defineProperty(g,"__esModule",{value:!0});var C=g.default=void 0,se=oe($()),re=s,ae=(0,se.default)((0,re.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");C=g.default=ae;const ie="/assets/L04-6e10e46d.png",ce=I,le=ce+"v1/auth/login",ue=async(e,t)=>await fetch(le,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(o=>o.json()).catch(o=>o),de=M(),me={usuario:"",password:""},ge=()=>{const e=L(),[t,n]=u.useState(me),[o,r]=u.useState(null),a=z(),l=()=>r(null),d=async()=>{try{const i=await ue(t.usuario,t.password);i.datos.EstaActivo?(e(O(i)),a(`/${R.PRIVATE}`,{replace:!0})):r({children:"El usuario no esta activo",severity:"error"})}catch(i){console.log(i)}},m=async i=>{i.preventDefault(),d()},x=i=>{i.preventDefault();const{name:T,value:k}=i.target;n({...t,[T]:k})};return s.jsx(X,{theme:de,children:s.jsx(B,{component:"main",sx:{height:"60vh",maxWidth:"100%",width:{xs:"auto",sm:"600px",md:"1050px"},marginTop:"9rem"},children:s.jsxs(h,{sx:{marginTop:8},children:[s.jsxs(p,{container:!0,children:[s.jsx(ne,{}),s.jsx(p,{item:!0,xs:!1,sm:5,md:7,sx:{backgroundImage:`url(${ie})`,backgroundRepeat:"no-repeat",backgroundColor:i=>i.palette.mode==="light"?i.palette.grey[900]:i.palette.grey[700],backgroundSize:"contain",backgroundPosition:"center"}}),s.jsx(p,{item:!0,xs:12,sm:7,md:5,component:q,elevation:6,square:!0,children:s.jsxs(h,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(A,{sx:{m:1,bgcolor:"warning.main"},children:s.jsx(C,{})}),s.jsx(H,{component:"h1",variant:"h5",children:"Sign in"}),s.jsxs(h,{component:"form",onSubmit:m,sx:{mt:1},children:[s.jsx(v,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"usuario",label:"Usuario",name:"usuario",autoComplete:"usuario",onChange:x,autoFocus:!0}),s.jsx(v,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:x}),s.jsx(F,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:"info.light"},children:"Ingresar"})]})]})})]}),!!o&&s.jsx(V,{snackbar:o,onClose:l})]})})})};export{ge as default};
