import{r as u,j as o}from"./index-b106391b.js";import{G as m,d as f,P as x,b as w}from"./DireccionesPrivadas-b280c270.js";import{S as C}from"./SnackBar.component-8758c84c.js";import{B as g}from"./constants-4c134f2b.js";const b=t=>{const{setRows:i,setRowModesModel:c,rows:e,permisos:l}=t,[a,n]=u.useState(null),d=()=>n(null),p=()=>{if(l.includes(x.Insertar)){const s=e[e.length-1].Id+1;console.log(s),i(r=>[{Id:s,Usuario:"",Gestor:"",Aplicacion:"",PwdEncryted:"",DireccionApp:"",FechaModificacion:new Date().toLocaleString("en-EN",{timeZone:"UTC"}),Appx:!1,isNew:!0},...r]),c(r=>({...r,[s]:{mode:w.Edit,fieldToFocus:"Usuario"}}))}else n({children:"Usuario no autorizado ",severity:"warning"})};return o.jsxs(m,{children:[o.jsx(g,{color:"primary",startIcon:o.jsx(f,{}),onClick:p,children:"Agregar Registro"}),!!a&&o.jsx(C,{snackbar:a,onClose:d})]})};export{b as default};
