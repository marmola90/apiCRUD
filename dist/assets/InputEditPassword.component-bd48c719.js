import{d as I,i as C,j as t,F as m,r as f,ag as D,ah as S,s as A,R as u,ai as E,aj as g,ak as M,a3 as H}from"./index-f9adbf6d.js";var i={},w=C;Object.defineProperty(i,"__esModule",{value:!0});var p=i.default=void 0,R=w(I()),k=t,y=(0,R.default)((0,k.jsx)("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password");p=i.default=y;const _=s=>{const{id:e,value:l,field:a}=s,n=m(d=>d.user),[c,h]=f.useState(null),o=D(),P=()=>h(null);f.useEffect(()=>{S(e).then(r=>r.json()).then(r=>{var v;r.status==="Error"?h({children:r.data.ErrorDetail,severity:"error"}):o.current.setEditCellValue({id:e,field:a,value:(v=r.data)==null?void 0:v.Pwd})})},[o,a,e]);const x=async d=>{(n.datos.IDPerfil===u.ADMINAPP||n.datos.IDPerfil===u.CONSULADMON)&&o.current.setEditCellValue({id:e,field:a,value:d.target.value})},j=async()=>{o.current.setEditCellValue({id:e,field:a,value:L()})};return t.jsxs(t.Fragment,{children:[t.jsx(A,{type:"text",value:l,onChange:x,fullWidth:!0,InputProps:{endAdornment:(n.datos.IDPerfil===u.ADMINAPP||n.datos.IDPerfil===u.CONSULADMON)&&t.jsx(E,{title:"Generar Password",children:t.jsx(g,{position:"end",children:t.jsx(M,{"aria-label":"Generar Password",onClick:j,children:t.jsx(p,{fontSize:"small"})})})})}},e),!!c&&t.jsx(H,{snackbar:c,onClose:P})]})},L=()=>{let s="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";for(let l=1;l<=16;l++){const a=Math.floor(Math.random()*e.length+1);s+=e.charAt(a)}return s};export{_ as default};
