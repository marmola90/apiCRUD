import{r as I,j as s,a8 as p,m as C,a9 as m,$ as A,ab as T,aa as f}from"./index-6525b5f9.js";const x=t=>{const{setRows:i,setRowModesModel:c,rows:e,permisos:l}=t,[a,n]=I.useState(null),d=()=>n(null),u=()=>{if(l.includes(T.Insertar)){const r=e[e.length-1].ID+1;i(o=>[{ID:r,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:"",IdOrdenCategoria:0,isNew:!0},...o]),c(o=>({...o,[r]:{mode:f.Edit,fieldToFocus:"TABLA"}}))}else n({children:"Usuario no autorizado ",severity:"warning"})};return s.jsxs(p,{children:[s.jsx(C,{color:"primary",startIcon:s.jsx(m,{}),onClick:u,children:"Agregar Registro"}),!!a&&s.jsx(A,{snackbar:a,onClose:d})]})};export{x as default};
