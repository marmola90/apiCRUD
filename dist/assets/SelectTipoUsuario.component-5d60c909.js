import{an as x,A as f,r as s,ah as g,j as a,ao as T,ap as j,a4 as C}from"./index-6b928391.js";const E=f,S=E+"v1/userEncryptRoutes/getTipoUsuario",m=async()=>await fetch(S,{headers:x()}),b=t=>{const{id:n,value:i,field:u}=t;console.log(t);const[l,c]=s.useState([]),[r,o]=s.useState(null),h=g(),p=async e=>{await h.current.setEditCellValue({id:n,field:u,value:e.target.value})},d=()=>o(null),U=()=>{m().then(e=>e.json()).then(e=>{e.status==="Error"?o({children:e.data.ErrorDetail,severity:"error"}):c(e.data)})};return s.useEffect(()=>{U()},[]),a.jsxs(a.Fragment,{children:[a.jsx(T,{value:i,onChange:p,size:"small",sx:{height:1},autoFocus:!0,fullWidth:!0,children:l.map(e=>a.jsx(j,{value:e.TipoUsuario,children:e.TipoUsuario},e.IdTipo))}),!!r&&a.jsx(C,{snackbar:r,onClose:d})]})};export{b as default};