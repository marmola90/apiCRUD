import{j as e,ac as i,t as l,ad as c,ae as u}from"./index-4f958616.js";const m=t=>{const{setRows:n,setRowModesModel:d,rows:r}=t,a=()=>{const o=r[r.length-1].IdModulo+1;console.log(o),n(s=>[...s,{IdModulo:o,Descripcion:"",isNew:!0}]),d(s=>({...s,[o]:{mode:u.Edit,fieldToFocus:"Descripcion"}}))};return e.jsx(i,{children:e.jsx(l,{color:"primary",startIcon:e.jsx(c,{}),onClick:a,children:"Agregar Registro"})})};export{m as default};
