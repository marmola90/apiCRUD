import{j as s,e as f,af as S,r as c,R as j,K as A,J as C}from"./index-c2241db4.js";import{C as E,a as L,g as N,S as b}from"./DireccionesPrivadas-3112cddd.js";import{P as D,u as k,B as v,T as u,a as d,S as R}from"./Tab.components-cead8912.js";import"./index-de852def.js";function w({children:t,onClick:o}){return s.jsx(D,{elevation:3,square:!0,onClick:o,sx:{borderRadius:"25px"},children:s.jsx(E,{sx:{minWidth:200,minHeight:180,width:270,height:180,borderRadius:"25px",textAlign:"center"},className:"modul",children:s.jsx(L,{sx:{padding:"60px"},children:t})})})}const B=()=>{const t=f(),o=k(),{Mod:a}=S(),[n,p]=c.useState(),[l,i]=c.useState(null),x=()=>i(null);console.log(a);const h=e=>{switch(e){case"XNET Capturadores":t(j.XNETABLAS);break;default:i({children:"NO SE HA IMPLEMENTADO LA RUTA.",severity:"warning"});break}},g=e=>{e===b.SESSION_NO_VALIDA&&(t(`/${A.LOGIN}`,{replace:!0}),o(C()))},m=async()=>{await N().then(e=>e.json()).then(e=>{console.log(e),e.status==="Error"?i({children:e.data.ErrorDetail,severity:"error"}):p(e.data)}).catch(e=>{const r=e.message.match("SESSION_NO_VALIDA");console.log(e),g(r==null?void 0:r[0])})};return c.useEffect(()=>{m()},[]),s.jsxs(v,{sx:{display:"flex",height:"90%",width:"100%",background:"#fafafa",borderRadius:"25px",flexDirection:"column",padding:"35px"},children:[s.jsx(u,{variant:"h2",gutterBottom:!0,color:"#353535de",children:a==null?void 0:a.toLocaleUpperCase()}),s.jsx(d,{container:!0,sx:{marginTop:5},spacing:3,children:n?n==null?void 0:n.map((e,r)=>a!=null&&a.toLocaleLowerCase().includes(e.BDAsociada.toLocaleLowerCase())?s.jsx(d,{item:!0,children:s.jsx(w,{onClick:()=>h(e.Descripcion),children:s.jsx(u,{variant:"h5",component:"div",sx:{cursor:"pointer"},children:e.Descripcion},r)},r)},r):s.jsx(s.Fragment,{})):s.jsx(s.Fragment,{})}),!!l&&s.jsx(R,{snackbar:l,onClose:x})]})};export{B as default};