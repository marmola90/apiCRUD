import{j as o,r as I,e as K,g as q,K as $,J}from"./index-656b022f.js";import{b as R,G as F,d as X,c as S,D as Q,e as Y,R as v,f as O,h as Z,i as ee,p as te,S as E}from"./DireccionesPrivadas-029ce191.js";import{A as ae,r as se,i as oe,d as re,S as w,u as ie,a as y,T as ne,B as de}from"./Tab.components-ad2d1fc9.js";import"./index-5e09dab5.js";var x=(a=>(a[a.Seleccionar=1]="Seleccionar",a[a.Actualizar=2]="Actualizar",a[a.Insertar=3]="Insertar",a[a.Eliminar=4]="Eliminar",a))(x||{});const L=ae,ce=L+"v1/xnetRoutes/getAllVersionCapturadores",le=L+"v1/xnetRoutes/insertVersionCapturador",ue=L+"v1/xnetRoutes/updateVersionCapturadores",he=async()=>await fetch(ce,{headers:R()}),pe=async a=>{const{TABLA:n,CODIGO:d,DESCRIPCION:i,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:f,LoginPorInstitucion:p,Imagen:r,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A}=a;return await fetch(le,{method:"post",headers:R(),body:JSON.stringify({TABLA:n,CODIGO:d,DESCRIPCION:i,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:f,LoginPorInstitucion:p,Imagen:r,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A})})},Ie=async a=>{const{TABLA:n,CODIGO:d,DESCRIPCION:i,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:f,LoginPorInstitucion:p,Imagen:r,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A}=a;return await fetch(ue,{method:"put",headers:R(),body:JSON.stringify({TABLA:n,CODIGO:d,DESCRIPCION:i,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:f,LoginPorInstitucion:p,Imagen:r,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A})})};var b={},fe=oe;Object.defineProperty(b,"__esModule",{value:!0});var j=b.default=void 0,me=fe(se()),Ce=o,ge=(0,me.default)((0,Ce.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");j=b.default=ge;const Ae=a=>{const{setRows:n,setRowModesModel:d,rows:i,permisos:c}=a,[u,h]=I.useState(null),f=()=>h(null),p=()=>{if(c.includes(x.Insertar)){const r=i[i.length-1].ID+1;n(l=>[{ID:r,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:"",IdOrdenCategoria:0,isNew:!0},...l]),d(l=>({...l,[r]:{mode:S.Edit,fieldToFocus:"TABLA"}}))}else h({children:"Usuario no autorizado ",severity:"error"})};return o.jsxs(F,{children:[o.jsx(re,{color:"primary",startIcon:o.jsx(X,{}),onClick:p,children:"Agregar Registro"}),!!u&&o.jsx(w,{snackbar:u,onClose:f})]})},G=[{ID:0,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:""}],Oe=()=>{const[a,n]=I.useState(G),[d,i]=I.useState({}),[c,u]=I.useState([]),h=K(),f=ie(),[p,r]=I.useState(null),[l,C]=I.useState(!1),g=q(e=>e.user),A=()=>r(null),D=I.useCallback(e=>{r({children:e.message,severity:"error"})},[]),M=(e,t)=>{e.reason===Y.rowFocusOut&&(t.defaultMuiPrevented=!0)},V=e=>()=>{c.includes(x.Actualizar)?i({...d,[e]:{mode:S.Edit}}):r({variant:"filled",children:"Usuario no autorizado.",severity:"warning"})},T=e=>()=>{i({...d,[e]:{mode:S.View,ignoreModifications:!0}}),a.find(s=>s.ID===e).isNew&&n(a.filter(s=>s.ID!==e))},N=e=>{e===E.SESSION_NO_VALIDA&&(n(G),h(`/${$.LOGIN}`,{replace:!0}),f(J()))},k=e=>()=>{i({...d,[e]:{mode:S.View}})},_=async e=>{e.CODIGO!==""&&e.TABLA!==""?await pe(e).then(t=>t.json()).then(t=>{console.log(t),r({children:"Registro insertado.",severity:"success"})}).catch(t=>{var m;const s=(m=t.message.match("SESSION_NO_VALIDA"))==null?void 0:m[0];s===E.SESSION_NO_VALIDA&&N(s)}):r({children:"Campos TABLA y CODIGOS vacíos.",severity:"warning"})},B=async e=>{await Ie(e).then(t=>t.json()).then(t=>{console.log(t),r({children:"Registro actualizado",severity:"success"})}).catch(t=>{var m;const s=(m=t.message.match("SESSION_NO_VALIDA"))==null?void 0:m[0];s===E.SESSION_NO_VALIDA&&N(s)})},P=e=>{const t={...e,isNew:!1};return e.isNew?_(e):B(e),n(a.map(s=>s.ID===e.ID?t:s)),t},U=e=>{c.includes(x.Actualizar)?i(e):r({variant:"filled",children:"Usuario no autorizado.",severity:"warning"})},z=[{field:"TABLA",headerName:"Tabla",headerClassName:"headerGrid",editable:!0,flex:.5,type:"string",preProcessEditCellProps:e=>{const t=e.id!==""&&e.props.value!==e.row.TABLA?"Campo llave no se puede modificar":!1;return{...e.props,error:t}},renderEditCell:v},{field:"CODIGO",headerName:"Codigo",flex:1,minWidth:120,headerClassName:"headerGrid",editable:!0,type:"string",preProcessEditCellProps:e=>{console.log(e);const t=e.id!==""&&e.props.value!==e.row.CODIGO?"Campo llave no se puede modificar":!1;return{...e.props,error:t}},renderEditCell:v},{field:"DESCRIPCION",headerName:"Descripcion",flex:1,minWidth:200,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"VERSION",headerName:"Version",headerClassName:"headerGrid",flex:.5,minWidth:80,editable:!0,type:"string"},{field:"ACTIVO",headerName:"Activo",headerClassName:"headerGrid",editable:!0,flex:.5,type:"string"},{field:"LINK",headerName:"Link",headerClassName:"headerGrid",editable:!0,type:"string"},{field:"SIGLAS",headerName:"Siglas",headerClassName:"headerGrid",editable:!0,minWidth:100,flex:.5,type:"string"},{field:"LoginPorInstitucion",headerName:"Login Por Institucion",flex:1,minWidth:140,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"Imagen",headerName:"Imagen",headerClassName:"headerGrid",editable:!0,flex:1,type:"string"},{field:"ReportaDatos",headerName:"Reporta Datos",flex:.5,minWidth:120,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"AccesoAInstituciones",headerName:"Acceso A Instituciones",flex:.5,minWidth:155,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"DescripcionHTML",headerName:"Descripcion HTML",width:150,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"AccesoTipoInstitucion",headerName:"Acceso Tipo Institucion",flex:.5,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"actions",type:"actions",headerName:"Actions ",flex:.1,minWidth:100,cellClassName:"actions",headerClassName:"headerGrid",getActions:({id:e})=>{var s;return((s=d[e])==null?void 0:s.mode)===S.Edit?[o.jsx(O,{icon:o.jsx(Z,{}),label:"Save",sx:{color:"primary.main"},onClick:k(e)}),o.jsx(O,{icon:o.jsx(ee,{}),label:"Cancel",onClick:T(e),sx:{color:"darkred"}})]:[o.jsx(O,{icon:o.jsx(j,{sx:{color:"#1d8df8"}}),label:"Edit",className:"textPrimary",onClick:V(e),color:"inherit"})]}}],W=async()=>{await he().then(e=>e.json()).then(e=>{n(e.data),C(!1)}).catch(e=>{const t=e.message.match("SESSION_NO_VALIDA");console.log(e),N(t==null?void 0:t[0])})},H=async e=>{await te(e).then(t=>t.json()).then(t=>{if(t.status==="Error")r({children:t.data.ErrorDetail,severity:"error"});else{const s=t.data.map(m=>m.Id);u(s)}}).catch(t=>{const s=t.message.match("SESSION_NO_VALIDA");console.log(t),N(s==null?void 0:s[0])})};return I.useEffect(()=>{C(!0),W(),H(g.datos.IDPerfil);let e=0;console.log(e++)},[]),o.jsx(y,{container:!0,spacing:1,flexDirection:"column",sx:{marginLeft:"1rem",background:"#fafafa",borderRadius:"25px",padding:"25px"},justifyContent:"space-around",alignItems:"center",children:o.jsxs(y,{item:!0,xs:12,sx:{width:"100%","& .headerGrid":{backgroundColor:"rgb(14 14 14 / 87%)",color:"white"},"& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"},"& .css-1j7qk7u":{color:"#fafafa"},"& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root":{color:"rgb(245 245 245 / 54%)"},borderRadius:"25px"},children:[o.jsx(ne,{variant:"h2",gutterBottom:!0,color:"#353535de",children:"XNET TABLAS"}),o.jsxs(de,{sx:{height:700},children:[o.jsx(Q,{columns:z,rows:a,editMode:"row",getRowId:e=>e.ID,sx:{boxShadow:5,borderRadius:"25px"},rowModesModel:d,onRowModesModelChange:U,onRowEditStop:M,processRowUpdate:P,onProcessRowUpdateError:D,slots:{toolbar:Ae},slotProps:{toolbar:{setRows:n,setRowModesModel:i,rows:a,permisos:c}},loading:l}),!!p&&o.jsx(w,{snackbar:p,onClose:A})]})]})})};export{Oe as default};
