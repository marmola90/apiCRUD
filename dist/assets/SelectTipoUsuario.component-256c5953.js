import{r,j as a}from"./index-50a0d612.js";import{v as f,M as x,x as S}from"./DireccionesPrivadas-2a9d4aba.js";import{S as g}from"./SnackBar.component-9812dbc6.js";import{S as U}from"./constants-fd1563c6.js";const E=t=>{const{id:n,value:i,field:l}=t;console.log(t);const[u,c]=r.useState([]),[s,o]=r.useState(null),p=f(),d=async e=>{await p.current.setEditCellValue({id:n,field:l,value:e.target.value})},h=()=>o(null),m=()=>{S().then(e=>e.json()).then(e=>{e.status==="Error"?o({children:e.data.ErrorDetail,severity:"error"}):c(e.data)})};return r.useEffect(()=>{m()},[]),a.jsxs(a.Fragment,{children:[a.jsx(U,{value:i,onChange:d,size:"small",sx:{height:1},autoFocus:!0,fullWidth:!0,children:u.map(e=>a.jsx(x,{value:e.TipoUsuario,children:e.TipoUsuario},e.IdTipo))}),!!s&&a.jsx(g,{snackbar:s,onClose:h})]})};export{E as default};