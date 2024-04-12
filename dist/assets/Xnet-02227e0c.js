import{r as I,j as o,e as z,g as K,I as $,H as F}from"./index-878d6ae7.js";import{a as R,G as J,d as q,P as y,b as S,D as X,c as Q,R as b,T as D,e as O,f as Y,h as Z,i as ee,p as se,S as E}from"./DireccionesPrivadas-6a3c9f55.js";import{A as te,c as oe,S as w,u as ae,a as G,T as re,B as ie}from"./Tab.components-da6b0343.js";import"./index-c149f13b.js";const L=te,ne=L+"v1/xnetRoutes/getAllVersionCapturadores",de=L+"v1/xnetRoutes/insertVersionCapturador",ce=L+"v1/xnetRoutes/updateVersionCapturadores",le=async()=>await fetch(ne,{headers:R()}),ue=async i=>{const{TABLA:n,CODIGO:d,DESCRIPCION:r,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:m,LoginPorInstitucion:p,Imagen:a,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A}=i;return await fetch(de,{method:"post",headers:R(),body:JSON.stringify({TABLA:n,CODIGO:d,DESCRIPCION:r,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:m,LoginPorInstitucion:p,Imagen:a,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A})})},he=async i=>{const{TABLA:n,CODIGO:d,DESCRIPCION:r,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:m,LoginPorInstitucion:p,Imagen:a,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A}=i;return await fetch(ce,{method:"put",headers:R(),body:JSON.stringify({TABLA:n,CODIGO:d,DESCRIPCION:r,VERSION:c,ACTIVO:u,LINK:h,SIGLAS:m,LoginPorInstitucion:p,Imagen:a,ReportaDatos:l,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A})})},pe=i=>{const{setRows:n,setRowModesModel:d,rows:r,permisos:c}=i,[u,h]=I.useState(null),m=()=>h(null),p=()=>{if(c.includes(y.Insertar)){const a=r[r.length-1].ID+1;n(l=>[{ID:a,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:"",IdOrdenCategoria:0,isNew:!0},...l]),d(l=>({...l,[a]:{mode:S.Edit,fieldToFocus:"TABLA"}}))}else h({children:"Usuario no autorizado ",severity:"warning"})};return o.jsxs(J,{children:[o.jsx(oe,{color:"primary",startIcon:o.jsx(q,{}),onClick:p,children:"Agregar Registro"}),!!u&&o.jsx(w,{snackbar:u,onClose:m})]})},T=[{ID:0,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:""}],ge=()=>{const[i,n]=I.useState(T),[d,r]=I.useState({}),[c,u]=I.useState([]),h=z(),m=ae(),[p,a]=I.useState(null),[l,C]=I.useState(!1),g=K(e=>e.user),A=()=>a(null),x=I.useCallback(e=>{a({children:e.message,severity:"error"})},[]),v=(e,s)=>{e.reason===Q.rowFocusOut&&(s.defaultMuiPrevented=!0)},P=e=>()=>{c.includes(y.Actualizar)?r({...d,[e]:{mode:S.Edit}}):a({variant:"filled",children:"Usuario no autorizado.",severity:"warning"})},j=e=>()=>{r({...d,[e]:{mode:S.View,ignoreModifications:!0}}),i.find(t=>t.ID===e).isNew&&n(i.filter(t=>t.ID!==e))},N=e=>{e===E.SESSION_NO_VALIDA&&(n(T),h(`/${$.LOGIN}`,{replace:!0}),m(F()))},V=e=>()=>{r({...d,[e]:{mode:S.View}})},k=async e=>{e.CODIGO!==""&&e.TABLA!==""?await ue(e).then(s=>s.json()).then(s=>{console.log(s),s.status==="Error"?a({children:s.data.ErrorDetail,severity:"error"}):a({children:"Registro insertado.",severity:"success"})}).catch(s=>{var f;const t=(f=s.message.match("SESSION_NO_VALIDA"))==null?void 0:f[0];t===E.SESSION_NO_VALIDA&&N(t)}):a({children:"Campos TABLA y CODIGOS vacíos.",severity:"warning"})},M=async e=>{await he(e).then(s=>s.json()).then(s=>{console.log(s),s.status==="Error"?a({children:s.data.ErrorDetail,severity:"error"}):a({children:"Registro actualizado.",severity:"success"})}).catch(s=>{var f;const t=(f=s.message.match("SESSION_NO_VALIDA"))==null?void 0:f[0];t===E.SESSION_NO_VALIDA&&N(t)})},B=e=>{const s={...e,isNew:!1};return e.isNew?k(e):M(e),n(i.map(t=>t.ID===e.ID?s:t)),s},_=e=>{c.includes(y.Actualizar)?r(e):a({variant:"filled",children:"Usuario no autorizado.",severity:"warning"})},U=[{field:"TABLA",headerName:"Tabla",headerClassName:"headerGrid",editable:!0,flex:.5,type:"string",preProcessEditCellProps:e=>{const s=e.id!==""&&e.props.value!==e.row.TABLA?"Campo llave no se puede modificar":!1;return{...e.props,error:s}},renderEditCell:b},{field:"CODIGO",headerName:"Codigo",flex:1,minWidth:120,headerClassName:"headerGrid",editable:!0,type:"string",preProcessEditCellProps:e=>{console.log(e);const s=e.id!==""&&e.props.value!==e.row.CODIGO?"Campo llave no se puede modificar":!1;return{...e.props,error:s}},renderEditCell:b},{field:"DESCRIPCION",headerName:"Descripcion",flex:1,minWidth:200,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"VERSION",headerName:"Version",headerClassName:"headerGrid",flex:.5,minWidth:80,editable:!0,type:"string"},{field:"ACTIVO",headerName:"Activo",headerClassName:"headerGrid",editable:!0,flex:.5,type:"string"},{field:"LINK",headerName:"Link",headerClassName:"headerGrid",editable:!0,type:"string"},{field:"SIGLAS",headerName:"Siglas",headerClassName:"headerGrid",editable:!0,minWidth:100,flex:.5,type:"string"},{field:"LoginPorInstitucion",headerName:"Login Por Institucion",flex:1,minWidth:140,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"Imagen",headerName:"Imagen",headerClassName:"headerGrid",editable:!0,flex:1,type:"string"},{field:"ReportaDatos",headerName:"Reporta Datos",flex:.5,minWidth:120,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"AccesoAInstituciones",headerName:"Acceso A Instituciones",flex:.5,minWidth:155,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"DescripcionHTML",headerName:"Descripcion HTML",width:150,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"AccesoTipoInstitucion",headerName:"Acceso Tipo Institucion",flex:.5,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"actions",type:"actions",headerName:"Actions ",flex:.1,minWidth:100,cellClassName:"actions",headerClassName:"headerGrid",getActions:({id:e})=>{var t;return((t=d[e])==null?void 0:t.mode)===S.Edit?[o.jsx(D,{title:"Guardar",children:o.jsx(O,{icon:o.jsx(Y,{}),label:"Save",sx:{color:"#3A833A"},onClick:V(e)})}),o.jsx(D,{title:"Cancelar",children:o.jsx(O,{icon:o.jsx(Z,{}),label:"Cancel",onClick:j(e),sx:{color:"darkred"}})})]:[o.jsx(D,{title:"Editar",children:o.jsx(O,{icon:o.jsx(ee,{sx:{color:"#1d8df8"}}),label:"Edit",className:"textPrimary",onClick:P(e)})})]}}],H=async()=>{await le().then(e=>e.json()).then(e=>{n(e.data),C(!1)}).catch(e=>{const s=e.message.match("SESSION_NO_VALIDA");console.log(e),N(s==null?void 0:s[0])})},W=async e=>{await se(e).then(s=>s.json()).then(s=>{if(s.status==="Error")a({children:s.data.ErrorDetail,severity:"error"});else{const t=s.data.map(f=>f.Id);u(t)}}).catch(s=>{const t=s.message.match("SESSION_NO_VALIDA");console.log(s),N(t==null?void 0:t[0])})};return I.useEffect(()=>{C(!0),H(),W(g.datos.IDPerfil);let e=0;console.log(e++)},[]),o.jsx(G,{container:!0,spacing:1,flexDirection:"column",sx:{marginLeft:"1rem",background:"#fafafa",borderRadius:"25px",padding:"25px"},justifyContent:"space-around",alignItems:"center",children:o.jsxs(G,{item:!0,xs:12,sx:{width:"100%","& .headerGrid":{backgroundColor:"rgb(14 14 14 / 87%)",color:"white"},"& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"},"& .css-1j7qk7u":{color:"#fafafa"},"& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root":{color:"rgb(245 245 245 / 54%)"},borderRadius:"25px"},children:[o.jsx(re,{variant:"h2",gutterBottom:!0,color:"#353535de",children:"XNET TABLAS"}),o.jsxs(ie,{sx:{height:700},children:[o.jsx(X,{columns:U,rows:i,editMode:"row",getRowId:e=>e.ID,sx:{boxShadow:5,borderRadius:"25px"},rowModesModel:d,onRowModesModelChange:_,onRowEditStop:v,processRowUpdate:B,onProcessRowUpdateError:x,slots:{toolbar:pe},slotProps:{toolbar:{setRows:n,setRowModesModel:r,rows:i,permisos:c}},loading:l}),!!p&&o.jsx(w,{snackbar:p,onClose:A})]})]})})};export{ge as default};
