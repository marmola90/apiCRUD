import{r as a,ac as p,a1 as x,j as t,ah as C,ai as g,$ as j}from"./index-a62bebf9.js";const E=n=>{const{id:l,value:o,field:i}=n,[c,u]=a.useState([]),[r,s]=a.useState(null),f=p(),h=async e=>{await f.current.setEditCellValue({id:l,field:i,value:e.target.value})},d=()=>s(null);return a.useEffect(()=>{x().then(e=>e.json()).then(e=>{e.status==="Error"?s({children:e.data.ErrorDetail,severity:"error"}):(console.log(e),u(e.data))})},[]),t.jsxs(t.Fragment,{children:[t.jsx(C,{value:o,onChange:h,size:"small",sx:{height:1},autoFocus:!0,fullWidth:!0,children:c.map(e=>t.jsx(g,{value:e.IDPerfil,children:e.Descripcion},e.IDPerfil))}),!!r&&t.jsx(j,{snackbar:r,onClose:d})]})};export{E as default};