import{F as C,ag as N,j as e,ap as l,aq as c,ar as r,p as S,R as h}from"./index-17ffd8cd.js";const O=d=>{const{id:m,value:i,field:x}=d,u=C(a=>a.user),s=i!==""?JSON.parse(i):i;console.log(s);const D=N();console.log({propies:d});const o=async a=>{const{name:n,checked:t}=a.target,P=n==="1"?t:s.DBA,g=n==="2"?t:s.SYSADMIN,p=n==="3"?t:s.SUPP,A=n==="4"?t:s.BOSS;console.log(a);const j={DBA:P,SYSADMIN:g,SUPP:p,BOSS:A};(u.datos.IDPerfil===h.ADMINAPP||u.datos.IDPerfil===h.CONSULADMON)&&await D.current.setEditCellValue({id:m,field:x,value:JSON.stringify(j)})};return e.jsxs(e.Fragment,{children:[e.jsx(l,{control:e.jsx(c,{checked:s.DBA,onChange:o,name:"1",size:"small"}),label:r[S.DBA]}),e.jsx(l,{control:e.jsx(c,{checked:s.SYSADMIN,onChange:o,name:"2",size:"small"}),label:r[S.SYSADMIN]}),e.jsx(l,{control:e.jsx(c,{checked:s.SUPP,onChange:o,name:"3",size:"small"}),label:r[S.SUPP]}),e.jsx(l,{control:e.jsx(c,{checked:s.BOSS,onChange:o,name:"4",size:"small"}),label:r[S.BOSS]})]})};export{O as default};
