import{r as d,j as o,f as q,h as X,B as Q,M as Y,L as Z}from"./index-9e6bf4fb.js";import{a as y,G as ee,d as se,P as E,b as S,c as te,D as oe,e as ae,R as b,T as D,f as O,h as re,i as ie,j as ne,p as ce,S as L}from"./DireccionesPrivadas-1c46310a.js";import{S as T}from"./SnackBar.component-bd6924a8.js";import{A as de,B as le,u as ue,a as w,T as he}from"./constants-fc44debf.js";const R=de,pe=R+"v1/xnetRoutes/getAllVersionCapturadores",me=R+"v1/xnetRoutes/insertVersionCapturador",Ie=R+"v1/xnetRoutes/updateVersionCapturadores",fe=async()=>await fetch(pe,{headers:y()}),Ce=async r=>{const{TABLA:n,CODIGO:c,DESCRIPCION:i,VERSION:l,ACTIVO:h,LINK:p,SIGLAS:I,LoginPorInstitucion:m,Imagen:a,ReportaDatos:u,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A}=r;return await fetch(me,{method:"post",headers:y(),body:JSON.stringify({TABLA:n,CODIGO:c,DESCRIPCION:i,VERSION:l,ACTIVO:h,LINK:p,SIGLAS:I,LoginPorInstitucion:m,Imagen:a,ReportaDatos:u,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A})})},ge=async r=>{const{TABLA:n,CODIGO:c,DESCRIPCION:i,VERSION:l,ACTIVO:h,LINK:p,SIGLAS:I,LoginPorInstitucion:m,Imagen:a,ReportaDatos:u,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A}=r;return await fetch(Ie,{method:"put",headers:y(),body:JSON.stringify({TABLA:n,CODIGO:c,DESCRIPCION:i,VERSION:l,ACTIVO:h,LINK:p,SIGLAS:I,LoginPorInstitucion:m,Imagen:a,ReportaDatos:u,AccesoAInstituciones:C,DescripcionHTML:g,AccesoTipoInstitucion:A})})},Ae=r=>{const{setRows:n,setRowModesModel:c,rows:i,permisos:l}=r,[h,p]=d.useState(null),I=()=>p(null),m=()=>{if(l.includes(E.Insertar)){const a=i[i.length-1].ID+1;n(u=>[{ID:a,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:"",IdOrdenCategoria:0,isNew:!0},...u]),c(u=>({...u,[a]:{mode:S.Edit,fieldToFocus:"TABLA"}}))}else p({children:"Usuario no autorizado ",severity:"warning"})};return o.jsxs(ee,{children:[o.jsx(le,{color:"primary",startIcon:o.jsx(se,{}),onClick:m,children:"Agregar Registro"}),!!h&&o.jsx(T,{snackbar:h,onClose:I})]})},G=[{ID:0,TABLA:"",CODIGO:"",DESCRIPCION:"",VERSION:"",ACTIVO:"",LINK:"",SIGLAS:"",LoginPorInstitucion:!1,Imagen:"",ReportaDatos:!1,AccesoAInstituciones:!1,DescripcionHTML:"",AccesoTipoInstitucion:""}],Oe=()=>{const[r,n]=d.useState(G),[c,i]=d.useState({}),[l,h]=d.useState([]),p=q(),I=ue(),[m,a]=d.useState(null),[u,C]=d.useState(!1),g=X(e=>e.user),[A,x]=d.useState(""),v=()=>a(null),j=d.useCallback(e=>{a({children:e.message,severity:"error"})},[]),P=(e,s)=>{e.reason===ae.rowFocusOut&&(s.defaultMuiPrevented=!0)},M=e=>()=>{l.includes(E.Actualizar)?i({...c,[e]:{mode:S.Edit}}):a({variant:"filled",children:"Usuario no autorizado.",severity:"warning"})},V=e=>()=>{i({...c,[e]:{mode:S.View,ignoreModifications:!0}}),r.find(t=>t.ID===e).isNew&&n(r.filter(t=>t.ID!==e))},N=e=>{e===L.SESSION_NO_VALIDA&&(n(G),p(`/${Y.LOGIN}`,{replace:!0}),I(Z()))},k=e=>()=>{i({...c,[e]:{mode:S.View}})},B=async e=>{e.CODIGO!==""&&e.TABLA!==""?await Ce(e).then(s=>s.json()).then(s=>{console.log(s),s.status==="Error"?a({children:s.data.ErrorDetail,severity:"error"}):a({children:"Registro insertado.",severity:"success"})}).catch(s=>{var f;const t=(f=s.message.match("SESSION_NO_VALIDA"))==null?void 0:f[0];t===L.SESSION_NO_VALIDA&&N(t)}):a({children:"Campos TABLA y CODIGOS vacíos.",severity:"warning"})},_=async e=>{await ge(e).then(s=>s.json()).then(s=>{console.log(s),s.status==="Error"?a({children:s.data.ErrorDetail,severity:"error"}):a({children:"Registro actualizado.",severity:"success"})}).catch(s=>{var f;const t=(f=s.message.match("SESSION_NO_VALIDA"))==null?void 0:f[0];t===L.SESSION_NO_VALIDA&&N(t)})},U=e=>{const s={...e,isNew:!1};return e.isNew?B(e):_(e),n(r.map(t=>t.ID===e.ID?s:t)),s},W=e=>{l.includes(E.Actualizar)?i(e):a({variant:"filled",children:"Usuario no autorizado.",severity:"warning"})},H=[{field:"TABLA",headerName:"Tabla",headerClassName:"headerGrid",editable:!0,flex:.5,type:"string",preProcessEditCellProps:e=>{const s=e.id!==""&&e.props.value!==e.row.TABLA?"Campo llave no se puede modificar":!1;return{...e.props,error:s}},renderEditCell:b},{field:"CODIGO",headerName:"Codigo",flex:1,minWidth:120,headerClassName:"headerGrid",editable:!0,type:"string",preProcessEditCellProps:e=>{console.log(e);const s=e.id!==""&&e.props.value!==e.row.CODIGO?"Campo llave no se puede modificar":!1;return{...e.props,error:s}},renderEditCell:b},{field:"DESCRIPCION",headerName:"Descripcion",flex:1,minWidth:200,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"VERSION",headerName:"Version",headerClassName:"headerGrid",flex:.5,minWidth:80,editable:!0,type:"string"},{field:"ACTIVO",headerName:"Activo",headerClassName:"headerGrid",editable:!0,flex:.5,type:"string"},{field:"LINK",headerName:"Link",headerClassName:"headerGrid",editable:!0,type:"string"},{field:"SIGLAS",headerName:"Siglas",headerClassName:"headerGrid",editable:!0,minWidth:100,flex:.5,type:"string"},{field:"LoginPorInstitucion",headerName:"Login Por Institucion",flex:1,minWidth:140,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"Imagen",headerName:"Imagen",headerClassName:"headerGrid",editable:!0,flex:1,type:"string"},{field:"ReportaDatos",headerName:"Reporta Datos",flex:.5,minWidth:120,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"AccesoAInstituciones",headerName:"Acceso A Instituciones",flex:.5,minWidth:155,headerClassName:"headerGrid",editable:!0,type:"boolean"},{field:"DescripcionHTML",headerName:"Descripcion HTML",width:150,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"AccesoTipoInstitucion",headerName:"Acceso Tipo Institucion",flex:.5,headerClassName:"headerGrid",editable:!0,type:"string"},{field:"actions",type:"actions",headerName:"Actions ",flex:.1,minWidth:100,cellClassName:"actions",headerClassName:"headerGrid",getActions:({id:e})=>{var t;return((t=c[e])==null?void 0:t.mode)===S.Edit?[o.jsx(D,{title:"Guardar",children:o.jsx(O,{icon:o.jsx(re,{}),label:"Save",sx:{color:"#3A833A"},onClick:k(e)})}),o.jsx(D,{title:"Cancelar",children:o.jsx(O,{icon:o.jsx(ie,{}),label:"Cancel",onClick:V(e),sx:{color:"darkred"}})})]:[o.jsx(D,{title:"Editar",children:o.jsx(O,{icon:o.jsx(ne,{sx:{color:"#1d8df8"}}),label:"Edit",className:"textPrimary",onClick:M(e)})})]}}],z=async()=>{await fe().then(e=>e.json()).then(e=>{n(e.data),C(!1)}).catch(e=>{const s=e.message.match("SESSION_NO_VALIDA");console.log(e),N(s==null?void 0:s[0])})},K=async e=>{await ce(e).then(s=>s.json()).then(s=>{if(s.status==="Error")a({children:s.data.ErrorDetail,severity:"error"});else{const t=s.data.map(f=>f.Id);h(t)}}).catch(s=>{const t=s.message.match("SESSION_NO_VALIDA");console.log(s),N(t==null?void 0:t[0])})},$=d.useMemo(()=>r,[r]),F=e=>{x(e.target.value)},J=$.filter(e=>e.CODIGO.toLocaleLowerCase().includes(A.toLocaleLowerCase()));return d.useEffect(()=>{C(!0),z(),K(g.datos.IDPerfil);let e=0;console.log(e++)},[]),o.jsx(w,{container:!0,spacing:1,flexDirection:"column",sx:{marginLeft:"1rem",background:"#fafafa",borderRadius:"25px",padding:"25px"},justifyContent:"space-around",alignItems:"center",children:o.jsxs(w,{item:!0,xs:!0,lg:!0,sm:!0,md:!0,sx:{width:"100%","& .headerGrid":{backgroundColor:"rgb(14 14 14 / 87%)",color:"white"},"& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"},"& .css-1j7qk7u":{color:"#fafafa"},"& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root":{color:"rgb(245 245 245 / 54%)"},borderRadius:"25px"},children:[o.jsx(he,{variant:"h2",gutterBottom:!0,color:"#353535de",children:"XNET TABLAS"}),o.jsx(te,{placeholder:"Buscar...",onSearchChange:F}),o.jsxs(Q,{sx:{height:700,mt:5},children:[o.jsx(oe,{columns:H,rows:J,editMode:"row",getRowId:e=>e.ID,sx:{boxShadow:5,borderRadius:"25px"},rowModesModel:c,onRowModesModelChange:W,onRowEditStop:P,processRowUpdate:U,onProcessRowUpdateError:j,slots:{toolbar:Ae},slotProps:{toolbar:{setRows:n,setRowModesModel:i,rows:r,permisos:l}},loading:u}),!!m&&o.jsx(T,{snackbar:m,onClose:v})]})]})})};export{Oe as default};
