import{j as r,ac as l,t as d,ad as c,ae as u}from"./index-a7b5fe4f.js";const m=t=>{const{setRows:a,setRowModesModel:n,rows:o}=t,i=()=>{console.log(o);const s=o[o.length-1].Id+1;console.log(s),a(e=>[...e,{Id:s,Usuario:"",EstaActivo:0,IDPerfil:0,isNew:!0}]),n(e=>({...e,[s]:{mode:u.Edit,fieldToFocus:"Usuario"}}))};return r.jsx(l,{children:r.jsx(d,{color:"primary",startIcon:r.jsx(c,{}),onClick:i,children:"Agregar Registro"})})};export{m as default};
