import{F as N,ag as B,j as s,ap as a,aq as r,ar as t,p as S,R as h}from"./index-a8bbdc99.js";const f=i=>{const{id:m,value:x,field:g}=i,u=N(l=>l.user),e=JSON.parse(x);console.log(e);const D=B();console.log({propies:i});const n=async l=>{const{name:c,checked:o}=l.target,P=c==="1"?o:e==null?void 0:e.DBA,p=c==="2"?o:e==null?void 0:e.SYSADMIN,A=c==="3"?o:e==null?void 0:e.SUPP,j=c==="4"?o:e==null?void 0:e.BOSS;console.log(l.target);const C={DBA:P,SYSADMIN:p,SUPP:A,BOSS:j};(u.datos.IDPerfil===h.ADMINAPP||u.datos.IDPerfil===h.CONSULADMON)&&await D.current.setEditCellValue({id:m,field:g,value:JSON.stringify(C)})};return s.jsxs(s.Fragment,{children:[s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.DBA,onChange:n,name:"1",size:"small"}),label:t[S.DBA]}),s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.SYSADMIN,onChange:n,name:"2",size:"small"}),label:t[S.SYSADMIN]}),s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.SUPP,onChange:n,name:"3",size:"small"}),label:t[S.SUPP]}),s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.BOSS,onChange:n,name:"4",size:"small"}),label:t[S.BOSS]})]})};export{f as default};
