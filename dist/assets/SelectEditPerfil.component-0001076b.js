import{r as a,ag as p,a5 as x,j as t,al as g,am as m,a3 as C}from"./index-f9663bdf.js";const E=l=>{const{id:n,value:o,field:i}=l,[c,u]=a.useState([]),[r,s]=a.useState(null),f=p(),h=async e=>{await f.current.setEditCellValue({id:n,field:i,value:e.target.value})},d=()=>s(null);return a.useEffect(()=>{x().then(e=>e.json()).then(e=>{e.status==="Error"?s({children:e.data.ErrorDetail,severity:"error"}):(console.log(e),u(e.data))})},[]),t.jsxs(t.Fragment,{children:[t.jsx(g,{value:o,onChange:h,size:"small",sx:{height:1},autoFocus:!0,fullWidth:!0,children:c.map(e=>t.jsx(m,{value:e.IDPerfil,children:e.Descripcion},e.IDPerfil))}),!!r&&t.jsx(C,{snackbar:r,onClose:d})]})};export{E as default};