import{j as a,e as f,af as S,r as i,R as j,K as A,J as C}from"./index-656b022f.js";import{C as E,a as L,g as N,S as b}from"./DireccionesPrivadas-029ce191.js";import{P as D,u as k,B as v,T as u,a as d,S as R}from"./Tab.components-ad2d1fc9.js";import"./index-5e09dab5.js";function O({children:t,onClick:o}){return a.jsx(D,{elevation:3,square:!0,onClick:o,sx:{borderRadius:"25px"},children:a.jsx(E,{sx:{minWidth:200,minHeight:180,borderRadius:"25px"},className:"modul",children:a.jsx(L,{sx:{padding:"60px"},children:t})})})}const B=()=>{const t=f(),o=k(),{Mod:e}=S(),[n,p]=i.useState(),[l,c]=i.useState(null),x=()=>c(null);console.log(e);const h=s=>{switch(s){case"XNET Capturadores":t(j.XNETABLAS);break;default:c({children:"NO SE HA IMPLEMENTADO LA RUTA.",severity:"warning"});break}},m=s=>{s===b.SESSION_NO_VALIDA&&(t(`/${A.LOGIN}`,{replace:!0}),o(C()))},g=async()=>{await N().then(s=>s.json()).then(s=>{console.log(s),s.status==="Error"?c({children:s.data.ErrorDetail,severity:"error"}):p(s.data)}).catch(s=>{const r=s.message.match("SESSION_NO_VALIDA");console.log(s),m(r==null?void 0:r[0])})};return i.useEffect(()=>{g()},[]),a.jsxs(v,{sx:{display:"flex",height:"90%",width:"100%",background:"#fafafa",borderRadius:"25px",flexDirection:"column",padding:"35px"},children:[a.jsx(u,{variant:"h2",gutterBottom:!0,color:"#353535de",children:e==null?void 0:e.toLocaleUpperCase()}),a.jsx(d,{container:!0,sx:{marginTop:5},spacing:3,children:n?n==null?void 0:n.map((s,r)=>e!=null&&e.toLocaleLowerCase().includes(s.BDAsociada.toLocaleLowerCase())?a.jsx(d,{item:!0,children:a.jsx(O,{onClick:()=>h(s.Descripcion),children:a.jsx(u,{variant:"h5",component:"div",sx:{cursor:"pointer"},children:s.Descripcion},r)},r)},r):a.jsx(a.Fragment,{})):a.jsx(a.Fragment,{})}),!!l&&a.jsx(R,{snackbar:l,onClose:x})]})};export{B as default};
