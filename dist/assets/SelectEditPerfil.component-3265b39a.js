import{r as a,ag as p,a5 as x,j as t,an as g,ao as C,a3 as j}from"./index-a7b5fe4f.js";const E=n=>{const{id:l,value:o,field:i}=n,[c,u]=a.useState([]),[r,s]=a.useState(null),f=p(),h=async e=>{await f.current.setEditCellValue({id:l,field:i,value:e.target.value})},d=()=>s(null);return a.useEffect(()=>{x().then(e=>e.json()).then(e=>{e.status==="Error"?s({children:e.data.ErrorDetail,severity:"error"}):(console.log(e),u(e.data))})},[]),t.jsxs(t.Fragment,{children:[t.jsx(g,{value:o,onChange:h,size:"small",sx:{height:1},autoFocus:!0,fullWidth:!0,children:c.map(e=>t.jsx(C,{value:e.IDPerfil,children:e.Descripcion},e.IDPerfil))}),!!r&&t.jsx(j,{snackbar:r,onClose:d})]})};export{E as default};
