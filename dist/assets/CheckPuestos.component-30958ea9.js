import{F as C,ag as N,j as s,ap as a,aq as r,ar as t,p as S,R as h}from"./index-7ced7a29.js";const O=i=>{const{id:m,value:x,field:D}=i,u=C(n=>n.user),e=JSON.parse(x);console.log(e);const P=N();console.log({propies:i});const l=async n=>{const{name:c,checked:o}=n.target,p=c==="1"?o:e===null?!1:e==null?void 0:e.DBA,A=c==="2"?o:e===null?!1:e==null?void 0:e.SYSADMIN,f=c==="3"?o:e===null?!1:e==null?void 0:e.SUPP,j=c==="4"?o:e===null?!1:e==null?void 0:e.BOSS;console.log(n.target);const g={DBA:p,SYSADMIN:A,SUPP:f,BOSS:j};console.log({puest:g}),(u.datos.IDPerfil===h.ADMINAPP||u.datos.IDPerfil===h.CONSULADMON)&&await P.current.setEditCellValue({id:m,field:D,value:JSON.stringify(g)})};return s.jsxs(s.Fragment,{children:[s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.DBA,onChange:l,name:"1",size:"small"}),label:t[S.DBA]}),s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.SYSADMIN,onChange:l,name:"2",size:"small"}),label:t[S.SYSADMIN]}),s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.SUPP,onChange:l,name:"3",size:"small"}),label:t[S.SUPP]}),s.jsx(a,{control:s.jsx(r,{checked:e==null?void 0:e.BOSS,onChange:l,name:"4",size:"small"}),label:t[S.BOSS]})]})};export{O as default};