import{r as p,j as s,ac as g,t as h,ad as m,a3 as x,al as S,af as f,ae as j}from"./index-17ffd8cd.js";const C=r=>{const{setRows:i,setRowModesModel:c,permisos:l}=r,[n,t]=p.useState(null),d=()=>t(null),u=async()=>{const e=await S().then(o=>o.json()).then(o=>o.data);if(console.log(e),l.includes(f.Insertar)){const o=e[e.length-1].Id+1;console.log(o),i(a=>[{Id:o,Usuario:"",Gestor:"",Aplicacion:"",PwdEncryted:"",DireccionApp:"",FechaModificacion:new Date().toLocaleString("en-EN",{timeZone:"UTC"}),Appx:!1,isEnable:!0,isNew:!0,TipoUsuario:1,Puestos:'{"DBA":1, "SYSADMIN":0, "SUPP":0, "BOSS":0}'},...a]),c(a=>({...a,[o]:{mode:j.Edit,fieldToFocus:"Usuario"}}))}else t({children:"Usuario no autorizado ",severity:"warning"})};return s.jsx(s.Fragment,{children:s.jsxs(g,{children:[s.jsx(h,{color:"primary",startIcon:s.jsx(m,{}),onClick:u,children:"Agregar Registro"}),!!n&&s.jsx(x,{snackbar:n,onClose:d})]})})};export{C as default};
