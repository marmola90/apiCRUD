import{j as r,ad as l,v as d,ae as c,af as u}from"./index-6b928391.js";const g=t=>{const{setRows:a,setRowModesModel:n,rows:o}=t,i=()=>{console.log(o);const s=o[o.length-1].Id+1;console.log(s),a(e=>[...e,{Id:s,Usuario:"",EstaActivo:0,IDPerfil:0,isNew:!0}]),n(e=>({...e,[s]:{mode:u.Edit,fieldToFocus:"Usuario"}}))};return r.jsx(l,{children:r.jsx(d,{color:"primary",startIcon:r.jsx(c,{}),onClick:i,children:"Agregar Registro"})})};export{g as default};