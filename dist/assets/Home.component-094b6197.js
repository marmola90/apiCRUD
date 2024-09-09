import{_ as z,K as he,M as xe,O as ye,r as d,Q as ve,U as be,a as Se,j as l,V as _e,D as je,E as $e,w as Ce,y as Oe,c as Ee,W as Ge,X as Re,Y as we,Z as De,$ as ne,a0 as ke,d as U,i as F,m as Me,a1 as Ae,B as Ne,C as Pe,a2 as I,a3 as ze,a4 as Le,a5 as Ie,a6 as Te,a7 as Be,a8 as qe,a9 as Ve}from"./index-f9663bdf.js";import{d as We}from"./BadgeOutlined-306f61a2.js";import He from"./Backdrop.component-26941b87.js";const Ue=(t,e)=>t.filter(r=>e.includes(r)),w=(t,e,r)=>{const n=t.keys[0];Array.isArray(e)?e.forEach((i,a)=>{r((c,u)=>{a<=t.keys.length-1&&(a===0?Object.assign(c,u):c[t.up(t.keys[a])]=u)},i)}):e&&typeof e=="object"?(Object.keys(e).length>t.keys.length?t.keys:Ue(t.keys,Object.keys(e))).forEach(a=>{if(t.keys.indexOf(a)!==-1){const c=e[a];c!==void 0&&r((u,x)=>{n===a?Object.assign(u,x):u[t.up(a)]=x},c)}}):(typeof e=="number"||typeof e=="string")&&r((i,a)=>{Object.assign(i,a)},e)};function v(t){return t?`Level${t}`:""}function L(t){return t.unstable_level>0&&t.container}function oe(t){return function(r){return`var(--Grid-${r}Spacing${v(t.unstable_level)})`}}function K(t){return function(r){return t.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${v(t.unstable_level-1)})`}}function X(t){return t.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${v(t.unstable_level-1)})`}const Fe=({theme:t,ownerState:e})=>{const r=oe(e),n={};return w(t.breakpoints,e.gridSize,(i,a)=>{let c={};a===!0&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),a==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof a=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${a} / ${X(e)}${L(e)?` + ${r("column")}`:""})`}),i(n,c)}),n},Ke=({theme:t,ownerState:e})=>{const r={};return w(t.breakpoints,e.gridOffset,(n,i)=>{let a={};i==="auto"&&(a={marginLeft:"auto"}),typeof i=="number"&&(a={marginLeft:i===0?"0px":`calc(100% * ${i} / ${X(e)})`}),n(r,a)}),r},Xe=({theme:t,ownerState:e})=>{if(!e.container)return{};const r=L(e)?{[`--Grid-columns${v(e.unstable_level)}`]:X(e)}:{"--Grid-columns":12};return w(t.breakpoints,e.columns,(n,i)=>{n(r,{[`--Grid-columns${v(e.unstable_level)}`]:i})}),r},Ye=({theme:t,ownerState:e})=>{if(!e.container)return{};const r=K(e),n=L(e)?{[`--Grid-rowSpacing${v(e.unstable_level)}`]:r("row")}:{};return w(t.breakpoints,e.rowSpacing,(i,a)=>{var c;i(n,{[`--Grid-rowSpacing${v(e.unstable_level)}`]:typeof a=="string"?a:(c=t.spacing)==null?void 0:c.call(t,a)})}),n},Qe=({theme:t,ownerState:e})=>{if(!e.container)return{};const r=K(e),n=L(e)?{[`--Grid-columnSpacing${v(e.unstable_level)}`]:r("column")}:{};return w(t.breakpoints,e.columnSpacing,(i,a)=>{var c;i(n,{[`--Grid-columnSpacing${v(e.unstable_level)}`]:typeof a=="string"?a:(c=t.spacing)==null?void 0:c.call(t,a)})}),n},Ze=({theme:t,ownerState:e})=>{if(!e.container)return{};const r={};return w(t.breakpoints,e.direction,(n,i)=>{n(r,{flexDirection:i})}),r},Je=({ownerState:t})=>{const e=oe(t),r=K(t);return z({minWidth:0,boxSizing:"border-box"},t.container&&z({display:"flex",flexWrap:"wrap"},t.wrap&&t.wrap!=="wrap"&&{flexWrap:t.wrap},{margin:`calc(${e("row")} / -2) calc(${e("column")} / -2)`},t.disableEqualOverflow&&{margin:`calc(${e("row")} * -1) 0px 0px calc(${e("column")} * -1)`}),(!t.container||L(t))&&z({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(t.disableEqualOverflow||t.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},et=t=>{const e=[];return Object.entries(t).forEach(([r,n])=>{n!==!1&&n!==void 0&&e.push(`grid-${r}-${String(n)}`)}),e},tt=(t,e="xs")=>{function r(n){return n===void 0?!1:typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number"&&n>0}if(r(t))return[`spacing-${e}-${String(t)}`];if(typeof t=="object"&&!Array.isArray(t)){const n=[];return Object.entries(t).forEach(([i,a])=>{r(a)&&n.push(`spacing-${i}-${String(a)}`)}),n}return[]},st=t=>t===void 0?[]:typeof t=="object"?Object.entries(t).map(([e,r])=>`direction-${e}-${r}`):[`direction-xs-${String(t)}`],rt=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],at=he(),nt=xe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>e.root});function ot(t){return ye({props:t,name:"MuiGrid",defaultTheme:at})}function lt(t={}){const{createStyledComponent:e=nt,useThemeProps:r=ot,componentName:n="MuiGrid"}=t,i=d.createContext(void 0),a=(x,p)=>{const{container:b,direction:$,spacing:C,wrap:S,gridSize:O}=x,E={root:["root",b&&"container",S!=="wrap"&&`wrap-xs-${String(S)}`,...st($),...et(O),...b?tt(C,p.breakpoints.keys[0]):[]]};return $e(E,f=>Ce(n,f),{})},c=e(Xe,Qe,Ye,Fe,Ze,Je,Ke),u=d.forwardRef(function(p,b){var $,C,S,O,E,f,D,h;const k=ve(),M=r(p),A=be(M),G=d.useContext(i),{className:T,children:B,columns:q=12,container:V=!1,component:W="div",direction:s="row",wrap:o="wrap",spacing:m=0,rowSpacing:N=m,columnSpacing:y=m,disableEqualOverflow:J,unstable_level:_=0}=A,de=Se(A,rt);let P=J;_&&J!==void 0&&(P=p.disableEqualOverflow);const ee={},te={},se={};Object.entries(de).forEach(([g,R])=>{k.breakpoints.values[g]!==void 0?ee[g]=R:k.breakpoints.values[g.replace("Offset","")]!==void 0?te[g.replace("Offset","")]=R:se[g]=R});const ue=($=p.columns)!=null?$:_?void 0:q,pe=(C=p.spacing)!=null?C:_?void 0:m,fe=(S=(O=p.rowSpacing)!=null?O:p.spacing)!=null?S:_?void 0:N,me=(E=(f=p.columnSpacing)!=null?f:p.spacing)!=null?E:_?void 0:y,re=z({},A,{level:_,columns:ue,container:V,direction:s,wrap:o,spacing:pe,rowSpacing:fe,columnSpacing:me,gridSize:ee,gridOffset:te,disableEqualOverflow:(D=(h=P)!=null?h:G)!=null?D:!1,parentDisableEqualOverflow:G}),ge=a(re,k);let H=l.jsx(c,z({ref:b,as:W,ownerState:re,className:je(ge.root,T)},se,{children:d.Children.map(B,g=>{if(d.isValidElement(g)&&_e(g,["Grid"])){var R;return d.cloneElement(g,{unstable_level:(R=g.props.unstable_level)!=null?R:_+1})}return g})}));return P!==void 0&&P!==(G??!1)&&(H=l.jsx(i.Provider,{value:P,children:H})),H});return u.muiName="Grid",u}const it=lt({createStyledComponent:Oe("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(t,e)=>e.root}),componentName:"MuiGrid2",useThemeProps:t=>Ee({props:t,name:"MuiGrid2"})}),j=it,ct=t=>{const e=ne();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.light,ke(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:t,labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:r=>r>0?`${r}K`:`${r}`,offsetX:-10,style:{colors:e.palette.text.secondary}}}}},dt=t=>{const e=ne();return{chart:{background:"transparent"},colors:[e.palette.primary.main,e.palette.success.main,e.palette.warning.main,e.palette.error.main,e.palette.primary.light,e.palette.success.dark,e.palette.warning.dark,e.palette.secondary.main],dataLabels:{enabled:!0},labels:t,legend:{show:!0},plotOptions:{pie:{expandOnClick:!1}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:e.palette.mode},tooltip:{fillSeriesColor:!1}}},ae=({chartSeries:t,sx:e,dataItem:r,title:n,height:i,type:a,option:c})=>{const u=ct(r),x=dt(r);return l.jsxs(Ge,{sx:e,children:[l.jsx(Re,{title:n}),l.jsx(we,{children:l.jsx(De,{height:i,options:c?u:x,series:t,type:a,width:"100%"})})]})};var Y={},ut=F;Object.defineProperty(Y,"__esModule",{value:!0});var le=Y.default=void 0,pt=ut(U()),ft=l,mt=(0,pt.default)((0,ft.jsx)("path",{d:"M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zm-15.02.93C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM1.4968 11l2.5031-2.503L6.5031 11l-2.5032 2.5032zM20 9l-2.5 4h5z"}),"Groups3");le=Y.default=mt;var Q={},gt=F;Object.defineProperty(Q,"__esModule",{value:!0});var ie=Q.default=void 0,ht=gt(U()),xt=l,yt=(0,ht.default)((0,xt.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");ie=Q.default=yt;var Z={},vt=F;Object.defineProperty(Z,"__esModule",{value:!0});var ce=Z.default=void 0,bt=vt(U()),St=l,_t=(0,bt.default)((0,St.jsx)("path",{d:"M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34 16.34 11zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34 16.34 19z"}),"ChecklistRtl");ce=Z.default=_t;const jt=d.lazy(()=>Me(()=>import("./TextTitle.component-b2f65410.js"),["assets/TextTitle.component-b2f65410.js","assets/index-f9663bdf.js","assets/index-f0ce86ef.css"])),Et=()=>{const[t,e]=d.useState([]),[r,n]=d.useState([]),[i,a]=d.useState([]),[c,u]=d.useState([]),[x,p]=d.useState([]),[b,$]=d.useState([]),[C,S]=d.useState([]),[O,E]=d.useState([]),{managesSession:f}=Ae(),[D,h]=d.useState(null),[k,M]=d.useState(!1),A=()=>h(null),G=async()=>{await Le().then(s=>s.json()).then(s=>{s.status==="Error"?h({children:s.data.ErrorDetail,severity:"error"}):e(s.data)}).catch(s=>{const o=s.message.match("SESSION_NO_VALIDA");console.log(s),f(o==null?void 0:o[0])})},T=async()=>{await Ie().then(s=>s.json()).then(s=>{s.status==="Error"?h({children:s.data.ErrorDetail,severity:"error"}):n(s.data)}).catch(s=>{const o=s.message.match("SESSION_NO_VALIDA");console.log(s),f(o==null?void 0:o[0])})},B=async()=>{await Te().then(s=>s.json()).then(s=>{if(s.status==="Error")h({children:s.data.ErrorDetail,severity:"error"});else{const o=s.data,m=o.map(y=>y.Descripcion),N=o.map(y=>y.Cantidad);a(m),u(N)}}).catch(s=>{const o=s.message.match("SESSION_NO_VALIDA");console.log(s),f(o==null?void 0:o[0])})},q=async()=>{await Be().then(s=>s.json()).then(s=>{if(s.status==="Error")h({children:s.data.ErrorDetail,severity:"error"});else{const o=s.data,m=o.map(y=>y.Descripcion),N=o.map(y=>y.Cantidad);p(m),$(N)}}).catch(s=>{const o=s.message.match("SESSION_NO_VALIDA");console.log(s),f(o==null?void 0:o[0])})},V=async()=>{await qe().then(s=>s.json()).then(s=>{if(s.status==="Error")h({children:s.data.ErrorDetail,severity:"error"});else{const o=s.data.map(m=>({IdModulo:m.Id,Descripcion:m.Descripcion,BDAsociada:m.BDAsociada}));S(o)}}).catch(s=>{const o=s.message.match("SESSION_NO_VALIDA");console.log(s),f(o==null?void 0:o[0])})},W=async()=>{await Ve().then(s=>s.json()).then(s=>{s.status==="Error"?h({children:s.data.ErrorDetail,severity:"error"}):E(s.data)}).catch(s=>{const o=s.message.match("SESSION_NO_VALIDA");console.log(s),f(o==null?void 0:o[0])})};return d.useEffect(()=>{M(!0);const s=setTimeout(()=>{G(),T(),V(),W(),B(),q(),M(!1)},200);return()=>clearTimeout(s)},[]),l.jsxs(l.Fragment,{children:[l.jsxs(Ne,{component:"main",sx:{flexGrow:1,marginLeft:"1rem",background:"#fafafa",borderRadius:"25px",height:"100%"},children:[l.jsxs(Pe,{maxWidth:"xl",sx:{my:10},children:[l.jsx(jt,{variante:"h2",color:"#353535de",titleName:"Dashboard"}),l.jsxs(j,{container:!0,spacing:3,children:[l.jsx(j,{xs:12,sm:6,lg:3,children:l.jsx(I,{title:"Roles",sx:{height:"100%",borderRadius:"22px"},value:r.length.toString(),color:"error.main",icon:l.jsx(We,{}),colorText:"text.secondary"})}),l.jsx(j,{xs:12,sm:6,lg:3,children:l.jsx(I,{title:"Usuarios",sx:{height:"100%",borderRadius:"22px"},value:t.length.toString(),color:"success.main",icon:l.jsx(le,{}),colorText:"text.secondary"})}),l.jsx(j,{xs:12,sm:6,lg:3,children:l.jsx(I,{title:"Modulos",sx:{height:"100%",borderRadius:"22px"},value:C.length.toString(),color:"primary.main",icon:l.jsx(ie,{}),colorText:"text.secondary"})}),l.jsx(j,{xs:12,sm:6,lg:3,children:l.jsx(I,{title:"Permisos",sx:{height:"100%",borderRadius:"22px"},value:O.length.toString(),color:"secondary.dark",colorText:"text.secondary",icon:l.jsx(ce,{})})}),l.jsx(j,{xs:12,lg:7,children:b.length>0&&l.jsx(ae,{chartSeries:[{name:"Cantidad Modulos",data:b}],sx:{height:"100%",borderRadius:"22px"},dataItem:x,title:"Modulos Asignados por Roles",type:"bar",height:350,option:!0})}),l.jsx(j,{xs:12,md:6,lg:5,children:c.length>0&&l.jsx(ae,{chartSeries:c,dataItem:i,sx:{height:"100%",borderRadius:"22px"},title:"Roles Asignados",type:"donut",height:400,option:!1})})]})]}),!!D&&l.jsx(ze,{snackbar:D,onClose:A})]}),l.jsx(He,{openBackdrop:k,setOpenBackdrop:M})]})};export{Et as default};