import{j as e,a1 as l,n as a,a2 as c,U as u}from"./index-a2a10c40.js";const m=t=>{const{setRows:n,setRowModesModel:d,rows:r}=t,i=()=>{const o=r[r.length-1].IdModulo+1;console.log(o),n(s=>[...s,{IdModulo:o,Descripcion:"",isNew:!0}]),d(s=>({...s,[o]:{mode:u.Edit,fieldToFocus:"Descripcion"}}))};return e.jsx(l,{children:e.jsx(a,{color:"primary",startIcon:e.jsx(c,{}),onClick:i,children:"Agregar Registro"})})};export{m as default};