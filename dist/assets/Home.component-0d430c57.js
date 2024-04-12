import{_ as N,k as Se,s as je,l as _e,r as d,X as Ce,t as $e,a as Oe,j as n,v as Ee,x as Ge,y as we,A as Re,c as ke,E as De,f as Ae,B as Me,C as Ne,M as Pe,L as Ie}from"./index-dc7fb1e3.js";import{C as K,k as le,l as ie,m as ce,n as Le,o as ze,q as Be,r as qe,s as Te,g as Ve,t as Ue,S as He}from"./DireccionesPrivadas-c274b126.js";import{C as X}from"./CardContent-f27857c3.js";import{R as We,T as F,U as Fe,x as de,r as Y,i as J,u as Ke}from"./constants-f6839735.js";import{A as Xe}from"./Avatar-b574677a.js";import Ye from"./Backdrop.component-3a31b5ab.js";import{S as Je}from"./SnackBar.component-d1edb4d6.js";const Qe=(t,e)=>t.filter(r=>e.includes(r)),D=(t,e,r)=>{const a=t.keys[0];Array.isArray(e)?e.forEach((i,o)=>{r((c,m)=>{o<=t.keys.length-1&&(o===0?Object.assign(c,m):c[t.up(t.keys[o])]=m)},i)}):e&&typeof e=="object"?(Object.keys(e).length>t.keys.length?t.keys:Qe(t.keys,Object.keys(e))).forEach(o=>{if(t.keys.indexOf(o)!==-1){const c=e[o];c!==void 0&&r((m,y)=>{a===o?Object.assign(m,y):m[t.up(o)]=y},c)}}):(typeof e=="number"||typeof e=="string")&&r((i,o)=>{Object.assign(i,o)},e)};function x(t){return t?`Level${t}`:""}function P(t){return t.unstable_level>0&&t.container}function ue(t){return function(r){return`var(--Grid-${r}Spacing${x(t.unstable_level)})`}}function Q(t){return function(r){return t.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${x(t.unstable_level-1)})`}}function Z(t){return t.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${x(t.unstable_level-1)})`}const Ze=({theme:t,ownerState:e})=>{const r=ue(e),a={};return D(t.breakpoints,e.gridSize,(i,o)=>{let c={};o===!0&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${Z(e)}${P(e)?` + ${r("column")}`:""})`}),i(a,c)}),a},et=({theme:t,ownerState:e})=>{const r={};return D(t.breakpoints,e.gridOffset,(a,i)=>{let o={};i==="auto"&&(o={marginLeft:"auto"}),typeof i=="number"&&(o={marginLeft:i===0?"0px":`calc(100% * ${i} / ${Z(e)})`}),a(r,o)}),r},tt=({theme:t,ownerState:e})=>{if(!e.container)return{};const r=P(e)?{[`--Grid-columns${x(e.unstable_level)}`]:Z(e)}:{"--Grid-columns":12};return D(t.breakpoints,e.columns,(a,i)=>{a(r,{[`--Grid-columns${x(e.unstable_level)}`]:i})}),r},st=({theme:t,ownerState:e})=>{if(!e.container)return{};const r=Q(e),a=P(e)?{[`--Grid-rowSpacing${x(e.unstable_level)}`]:r("row")}:{};return D(t.breakpoints,e.rowSpacing,(i,o)=>{var c;i(a,{[`--Grid-rowSpacing${x(e.unstable_level)}`]:typeof o=="string"?o:(c=t.spacing)==null?void 0:c.call(t,o)})}),a},rt=({theme:t,ownerState:e})=>{if(!e.container)return{};const r=Q(e),a=P(e)?{[`--Grid-columnSpacing${x(e.unstable_level)}`]:r("column")}:{};return D(t.breakpoints,e.columnSpacing,(i,o)=>{var c;i(a,{[`--Grid-columnSpacing${x(e.unstable_level)}`]:typeof o=="string"?o:(c=t.spacing)==null?void 0:c.call(t,o)})}),a},nt=({theme:t,ownerState:e})=>{if(!e.container)return{};const r={};return D(t.breakpoints,e.direction,(a,i)=>{a(r,{flexDirection:i})}),r},at=({ownerState:t})=>{const e=ue(t),r=Q(t);return N({minWidth:0,boxSizing:"border-box"},t.container&&N({display:"flex",flexWrap:"wrap"},t.wrap&&t.wrap!=="wrap"&&{flexWrap:t.wrap},{margin:`calc(${e("row")} / -2) calc(${e("column")} / -2)`},t.disableEqualOverflow&&{margin:`calc(${e("row")} * -1) 0px 0px calc(${e("column")} * -1)`}),(!t.container||P(t))&&N({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(t.disableEqualOverflow||t.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},ot=t=>{const e=[];return Object.entries(t).forEach(([r,a])=>{a!==!1&&a!==void 0&&e.push(`grid-${r}-${String(a)}`)}),e},lt=(t,e="xs")=>{function r(a){return a===void 0?!1:typeof a=="string"&&!Number.isNaN(Number(a))||typeof a=="number"&&a>0}if(r(t))return[`spacing-${e}-${String(t)}`];if(typeof t=="object"&&!Array.isArray(t)){const a=[];return Object.entries(t).forEach(([i,o])=>{r(o)&&a.push(`spacing-${i}-${String(o)}`)}),a}return[]},it=t=>t===void 0?[]:typeof t=="object"?Object.entries(t).map(([e,r])=>`direction-${e}-${r}`):[`direction-xs-${String(t)}`],ct=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],dt=Se(),ut=je("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>e.root});function pt(t){return _e({props:t,name:"MuiGrid",defaultTheme:dt})}function ft(t={}){const{createStyledComponent:e=ut,useThemeProps:r=pt,componentName:a="MuiGrid"}=t,i=d.createContext(void 0),o=(y,p)=>{const{container:b,direction:$,spacing:O,wrap:S,gridSize:E}=y,G={root:["root",b&&"container",S!=="wrap"&&`wrap-xs-${String(S)}`,...it($),...ot(E),...b?lt(O,p.breakpoints.keys[0]):[]]};return Ge(G,j=>we(a,j),{})},c=e(tt,rt,st,Ze,nt,at,et),m=d.forwardRef(function(p,b){var $,O,S,E,G,j,g,I;const A=Ce(),z=r(p),_=$e(z),w=d.useContext(i),{className:v,children:B,columns:q=12,container:T=!1,component:V="div",direction:U="row",wrap:H="wrap",spacing:s=0,rowSpacing:l=s,columnSpacing:h=s,disableEqualOverflow:R,unstable_level:u=0}=_,ge=Oe(_,ct);let M=R;u&&R!==void 0&&(M=p.disableEqualOverflow);const re={},ne={},ae={};Object.entries(ge).forEach(([f,k])=>{A.breakpoints.values[f]!==void 0?re[f]=k:A.breakpoints.values[f.replace("Offset","")]!==void 0?ne[f.replace("Offset","")]=k:ae[f]=k});const he=($=p.columns)!=null?$:u?void 0:q,xe=(O=p.spacing)!=null?O:u?void 0:s,ve=(S=(E=p.rowSpacing)!=null?E:p.spacing)!=null?S:u?void 0:l,ye=(G=(j=p.columnSpacing)!=null?j:p.spacing)!=null?G:u?void 0:h,oe=N({},_,{level:u,columns:he,container:T,direction:U,wrap:H,spacing:xe,rowSpacing:ve,columnSpacing:ye,gridSize:re,gridOffset:ne,disableEqualOverflow:(g=(I=M)!=null?I:w)!=null?g:!1,parentDisableEqualOverflow:w}),be=o(oe,A);let W=n.jsx(c,N({ref:b,as:V,ownerState:oe,className:Ee(be.root,v)},ae,{children:d.Children.map(B,f=>{if(d.isValidElement(f)&&We(f,["Grid"])){var k;return d.cloneElement(f,{unstable_level:(k=f.props.unstable_level)!=null?k:u+1})}return f})}));return M!==void 0&&M!==(w??!1)&&(W=n.jsx(i.Provider,{value:M,children:W})),W});return m.muiName="Grid",m}const mt=ft({createStyledComponent:Re("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(t,e)=>e.root}),componentName:"MuiGrid2",useThemeProps:t=>ke({props:t,name:"MuiGrid2"})}),C=mt,L=({sx:t,value:e,title:r,icon:a,color:i,colorText:o})=>n.jsx(K,{sx:t,children:n.jsx(X,{children:n.jsxs(le,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[n.jsxs(le,{spacing:1,children:[n.jsx(F,{color:o,variant:"overline",children:r}),n.jsx(F,{variant:"h4",color:o,children:e})]}),n.jsx(Xe,{sx:{backgroundColor:`${i}`,height:60,width:60},children:n.jsx(Fe,{children:a})})]})})}),gt=t=>{const e=de();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.light,De(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:t,labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:r=>r>0?`${r}K`:`${r}`,offsetX:-10,style:{colors:e.palette.text.secondary}}}}},ht=({chartSeries:t,sx:e,dataItem:r,title:a})=>{const i=gt(r);return n.jsxs(K,{sx:e,children:[n.jsx(ie,{title:a}),n.jsx(X,{children:n.jsx(ce,{height:350,options:i,series:t,type:"bar",width:"100%"})})]})},xt=t=>{const e=de();return{chart:{background:"transparent"},colors:[e.palette.primary.main,e.palette.success.main,e.palette.warning.main,e.palette.error.main,e.palette.primary.light,e.palette.success.dark,e.palette.warning.dark,e.palette.secondary.main],dataLabels:{enabled:!0},labels:t,legend:{show:!0},plotOptions:{pie:{expandOnClick:!1}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:e.palette.mode},tooltip:{fillSeriesColor:!1}}},vt=({chartSeries:t,labels:e,sx:r,title:a})=>{const i=xt(e);return n.jsxs(K,{sx:r,children:[n.jsx(ie,{title:a}),n.jsx(X,{children:n.jsx(ce,{height:400,options:i,series:t,type:"donut",width:"100%"})})]})};var ee={},yt=J;Object.defineProperty(ee,"__esModule",{value:!0});var pe=ee.default=void 0,bt=yt(Y()),St=n,jt=(0,bt.default)((0,St.jsx)("path",{d:"M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zm-15.02.93C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM1.4968 11l2.5031-2.503L6.5031 11l-2.5032 2.5032zM20 9l-2.5 4h5z"}),"Groups3");pe=ee.default=jt;var te={},_t=J;Object.defineProperty(te,"__esModule",{value:!0});var fe=te.default=void 0,Ct=_t(Y()),$t=n,Ot=(0,Ct.default)((0,$t.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");fe=te.default=Ot;var se={},Et=J;Object.defineProperty(se,"__esModule",{value:!0});var me=se.default=void 0,Gt=Et(Y()),wt=n,Rt=(0,Gt.default)((0,wt.jsx)("path",{d:"M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34 16.34 11zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34 16.34 19z"}),"ChecklistRtl");me=se.default=Rt;const Lt=()=>{const[t,e]=d.useState([]),[r,a]=d.useState([]),[i,o]=d.useState([]),[c,m]=d.useState([]),[y,p]=d.useState([]),[b,$]=d.useState([]),[O,S]=d.useState([]),[E,G]=d.useState([]),[j,g]=d.useState(null),I=Ae(),A=Ke(),[z,_]=d.useState(!1),w=()=>g(null),v=s=>{s===He.SESSION_NO_VALIDA&&(I(`/${Pe.LOGIN}`,{replace:!0}),A(Ie()))},B=async()=>{await ze().then(s=>s.json()).then(s=>{s.status==="Error"?g({children:s.data.ErrorDetail,severity:"error"}):e(s.data)}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},q=async()=>{await Be().then(s=>s.json()).then(s=>{s.status==="Error"?g({children:s.data.ErrorDetail,severity:"error"}):a(s.data)}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},T=async()=>{await qe().then(s=>s.json()).then(s=>{if(s.status==="Error")g({children:s.data.ErrorDetail,severity:"error"});else{const l=s.data,h=l.map(u=>u.Descripcion),R=l.map(u=>u.Cantidad);o(h),m(R)}}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},V=async()=>{await Te().then(s=>s.json()).then(s=>{if(s.status==="Error")g({children:s.data.ErrorDetail,severity:"error"});else{const l=s.data,h=l.map(u=>u.Descripcion),R=l.map(u=>u.Cantidad);p(h),$(R)}}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},U=async()=>{await Ve().then(s=>s.json()).then(s=>{if(s.status==="Error")g({children:s.data.ErrorDetail,severity:"error"});else{const l=s.data.map(h=>({IdModulo:h.Id,Descripcion:h.Descripcion,BDAsociada:h.BDAsociada}));S(l)}}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},H=async()=>{await Ue().then(s=>s.json()).then(s=>{s.status==="Error"?g({children:s.data.ErrorDetail,severity:"error"}):G(s.data)}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})};return d.useEffect(()=>{_(!0);const s=setTimeout(()=>{B(),q(),U(),H(),T(),V(),_(!1)},300);return()=>clearTimeout(s)},[]),n.jsxs(n.Fragment,{children:[n.jsxs(Me,{component:"main",sx:{flexGrow:1,marginLeft:"1rem",background:"#fafafa",borderRadius:"25px",height:"100%"},children:[n.jsxs(Ne,{maxWidth:"xl",sx:{my:10},children:[n.jsx(F,{variant:"h2",gutterBottom:!0,color:"#353535de",children:"Dashboard"}),n.jsxs(C,{container:!0,spacing:3,children:[n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(L,{title:"Roles",sx:{height:"100%",borderRadius:"22px"},value:r.length.toString(),color:"error.main",icon:n.jsx(Le,{}),colorText:"text.secondary"})}),n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(L,{title:"Usuarios",sx:{height:"100%",borderRadius:"22px"},value:t.length.toString(),color:"success.main",icon:n.jsx(pe,{}),colorText:"text.secondary"})}),n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(L,{title:"Modulos",sx:{height:"100%",borderRadius:"22px"},value:O.length.toString(),color:"primary.main",icon:n.jsx(fe,{}),colorText:"text.secondary"})}),n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(L,{title:"Permisos",sx:{height:"100%",borderRadius:"22px"},value:E.length.toString(),color:"secondary.dark",colorText:"text.secondary",icon:n.jsx(me,{})})}),n.jsx(C,{xs:12,lg:7,children:b.length>0&&n.jsx(ht,{chartSeries:[{name:"Cantidad Modulos",data:b}],sx:{height:"100%",borderRadius:"22px"},dataItem:y,title:"Modulos Asignados por Roles"})}),n.jsx(C,{xs:12,md:6,lg:5,children:c.length>0&&n.jsx(vt,{chartSeries:c,labels:i,sx:{height:"100%",borderRadius:"22px"},title:"Roles Asignados"})})]})]}),!!j&&n.jsx(Je,{snackbar:j,onClose:w})]}),n.jsx(Ye,{openBackdrop:z,setOpenBackdrop:_})]})};export{Lt as default};
