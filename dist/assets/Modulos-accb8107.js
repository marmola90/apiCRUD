import{j as s,f,ad as S,r as c,B as j,R as A,M as C,L as E}from"./index-50a0d612.js";import{C as L,g as N,S as b}from"./DireccionesPrivadas-2a9d4aba.js";import{P as D,u as k,T as d,a as u}from"./constants-fd1563c6.js";import{C as v}from"./CardContent-40b12cc9.js";import{S as R}from"./SnackBar.component-9812dbc6.js";function w({children:t,onClick:n}){return s.jsx(D,{elevation:3,square:!0,onClick:n,sx:{borderRadius:"25px"},children:s.jsx(L,{sx:{minWidth:200,minHeight:180,width:270,height:180,borderRadius:"25px",textAlign:"center"},className:"modul",children:s.jsx(v,{sx:{padding:"60px"},children:t})})})}const I=()=>{const t=f(),n=k(),{Mod:a}=S(),[o,p]=c.useState(),[l,i]=c.useState(null),x=()=>i(null);console.log(a);const h=e=>{switch(e){case"XNET Capturadores":t(A.XNETABLAS);break;default:i({children:"NO SE HA IMPLEMENTADO LA RUTA.",severity:"warning"});break}},m=e=>{e===b.SESSION_NO_VALIDA&&(t(`/${C.LOGIN}`,{replace:!0}),n(E()))},g=async()=>{await N().then(e=>e.json()).then(e=>{console.log(e),e.status==="Error"?i({children:e.data.ErrorDetail,severity:"error"}):p(e.data)}).catch(e=>{const r=e.message.match("SESSION_NO_VALIDA");console.log(e),m(r==null?void 0:r[0])})};return c.useEffect(()=>{g()},[]),s.jsxs(j,{sx:{display:"flex",height:"90%",width:"100%",background:"#fafafa",borderRadius:"25px",flexDirection:"column",padding:"35px"},children:[s.jsx(d,{variant:"h2",gutterBottom:!0,color:"#353535de",children:a==null?void 0:a.toLocaleUpperCase()}),s.jsx(u,{container:!0,sx:{marginTop:5},spacing:3,children:o?o==null?void 0:o.map((e,r)=>a!=null&&a.toLocaleLowerCase().includes(e.BDAsociada.toLocaleLowerCase())?s.jsx(u,{item:!0,children:s.jsx(w,{onClick:()=>h(e.Descripcion),children:s.jsx(d,{variant:"h5",component:"div",sx:{cursor:"pointer"},children:e.Descripcion},r)},r)},r):s.jsx(s.Fragment,{})):s.jsx(s.Fragment,{})}),!!l&&s.jsx(R,{snackbar:l,onClose:x})]})};export{I as default};
