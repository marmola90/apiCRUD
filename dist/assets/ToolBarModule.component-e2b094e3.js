import{j as e,a8 as i,m as l,a9 as c,aa as u}from"./index-441cd09c.js";const p=t=>{const{setRows:n,setRowModesModel:a,rows:r}=t,d=()=>{const o=r[r.length-1].IdModulo+1;console.log(o),n(s=>[...s,{IdModulo:o,Descripcion:"",isNew:!0}]),a(s=>({...s,[o]:{mode:u.Edit,fieldToFocus:"Descripcion"}}))};return e.jsx(i,{children:e.jsx(l,{color:"primary",startIcon:e.jsx(c,{}),onClick:d,children:"Agregar Registro"})})};export{p as default};