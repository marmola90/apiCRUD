import{_ as M,a3 as ye,a4 as be,a5 as Se,r as d,a6 as _e,a7 as je,a as Ce,j as n,a8 as $e,v as Oe,w as Ee,p as Ge,s as Re,c as we,a9 as re,aa as ne,ab as oe,ac as le,ad as ie,ae as De,d as F,i as K,e as ke,h as Ne,g as Ae,B as Me,C as Pe,af as I,K as ze,ag as Ie,ah as Le,ai as Te,aj as Be,ak as qe,al as Ve,a0 as He,z as Ue,y as We}from"./index-e627133c.js";import{d as Fe}from"./BadgeOutlined-8f8c874c.js";import Ke from"./Backdrop.component-f35f6245.js";const Xe=(t,e)=>t.filter(a=>e.includes(a)),k=(t,e,a)=>{const r=t.keys[0];Array.isArray(e)?e.forEach((i,o)=>{a((c,m)=>{o<=t.keys.length-1&&(o===0?Object.assign(c,m):c[t.up(t.keys[o])]=m)},i)}):e&&typeof e=="object"?(Object.keys(e).length>t.keys.length?t.keys:Xe(t.keys,Object.keys(e))).forEach(o=>{if(t.keys.indexOf(o)!==-1){const c=e[o];c!==void 0&&a((m,y)=>{r===o?Object.assign(m,y):m[t.up(o)]=y},c)}}):(typeof e=="number"||typeof e=="string")&&a((i,o)=>{Object.assign(i,o)},e)};function x(t){return t?`Level${t}`:""}function P(t){return t.unstable_level>0&&t.container}function ce(t){return function(a){return`var(--Grid-${a}Spacing${x(t.unstable_level)})`}}function X(t){return function(a){return t.unstable_level===0?`var(--Grid-${a}Spacing)`:`var(--Grid-${a}Spacing${x(t.unstable_level-1)})`}}function Y(t){return t.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${x(t.unstable_level-1)})`}const Ye=({theme:t,ownerState:e})=>{const a=ce(e),r={};return k(t.breakpoints,e.gridSize,(i,o)=>{let c={};o===!0&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${Y(e)}${P(e)?` + ${a("column")}`:""})`}),i(r,c)}),r},Je=({theme:t,ownerState:e})=>{const a={};return k(t.breakpoints,e.gridOffset,(r,i)=>{let o={};i==="auto"&&(o={marginLeft:"auto"}),typeof i=="number"&&(o={marginLeft:i===0?"0px":`calc(100% * ${i} / ${Y(e)})`}),r(a,o)}),a},Qe=({theme:t,ownerState:e})=>{if(!e.container)return{};const a=P(e)?{[`--Grid-columns${x(e.unstable_level)}`]:Y(e)}:{"--Grid-columns":12};return k(t.breakpoints,e.columns,(r,i)=>{r(a,{[`--Grid-columns${x(e.unstable_level)}`]:i})}),a},Ze=({theme:t,ownerState:e})=>{if(!e.container)return{};const a=X(e),r=P(e)?{[`--Grid-rowSpacing${x(e.unstable_level)}`]:a("row")}:{};return k(t.breakpoints,e.rowSpacing,(i,o)=>{var c;i(r,{[`--Grid-rowSpacing${x(e.unstable_level)}`]:typeof o=="string"?o:(c=t.spacing)==null?void 0:c.call(t,o)})}),r},et=({theme:t,ownerState:e})=>{if(!e.container)return{};const a=X(e),r=P(e)?{[`--Grid-columnSpacing${x(e.unstable_level)}`]:a("column")}:{};return k(t.breakpoints,e.columnSpacing,(i,o)=>{var c;i(r,{[`--Grid-columnSpacing${x(e.unstable_level)}`]:typeof o=="string"?o:(c=t.spacing)==null?void 0:c.call(t,o)})}),r},tt=({theme:t,ownerState:e})=>{if(!e.container)return{};const a={};return k(t.breakpoints,e.direction,(r,i)=>{r(a,{flexDirection:i})}),a},st=({ownerState:t})=>{const e=ce(t),a=X(t);return M({minWidth:0,boxSizing:"border-box"},t.container&&M({display:"flex",flexWrap:"wrap"},t.wrap&&t.wrap!=="wrap"&&{flexWrap:t.wrap},{margin:`calc(${e("row")} / -2) calc(${e("column")} / -2)`},t.disableEqualOverflow&&{margin:`calc(${e("row")} * -1) 0px 0px calc(${e("column")} * -1)`}),(!t.container||P(t))&&M({padding:`calc(${a("row")} / 2) calc(${a("column")} / 2)`},(t.disableEqualOverflow||t.parentDisableEqualOverflow)&&{padding:`${a("row")} 0px 0px ${a("column")}`}))},at=t=>{const e=[];return Object.entries(t).forEach(([a,r])=>{r!==!1&&r!==void 0&&e.push(`grid-${a}-${String(r)}`)}),e},rt=(t,e="xs")=>{function a(r){return r===void 0?!1:typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number"&&r>0}if(a(t))return[`spacing-${e}-${String(t)}`];if(typeof t=="object"&&!Array.isArray(t)){const r=[];return Object.entries(t).forEach(([i,o])=>{a(o)&&r.push(`spacing-${i}-${String(o)}`)}),r}return[]},nt=t=>t===void 0?[]:typeof t=="object"?Object.entries(t).map(([e,a])=>`direction-${e}-${a}`):[`direction-xs-${String(t)}`],ot=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],lt=ye(),it=be("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>e.root});function ct(t){return Se({props:t,name:"MuiGrid",defaultTheme:lt})}function dt(t={}){const{createStyledComponent:e=it,useThemeProps:a=ct,componentName:r="MuiGrid"}=t,i=d.createContext(void 0),o=(y,p)=>{const{container:b,direction:$,spacing:O,wrap:S,gridSize:E}=y,G={root:["root",b&&"container",S!=="wrap"&&`wrap-xs-${String(S)}`,...nt($),...at(E),...b?rt(O,p.breakpoints.keys[0]):[]]};return Ee(G,_=>Ge(r,_),{})},c=e(Qe,et,Ze,Ye,tt,st,Je),m=d.forwardRef(function(p,b){var $,O,S,E,G,_,g,z;const N=_e(),L=a(p),j=je(L),R=d.useContext(i),{className:v,children:T,columns:B=12,container:q=!1,component:V="div",direction:H="row",wrap:U="wrap",spacing:s=0,rowSpacing:l=s,columnSpacing:h=s,disableEqualOverflow:w,unstable_level:u=0}=j,fe=Ce(j,ot);let A=w;u&&w!==void 0&&(A=p.disableEqualOverflow);const ee={},te={},se={};Object.entries(fe).forEach(([f,D])=>{N.breakpoints.values[f]!==void 0?ee[f]=D:N.breakpoints.values[f.replace("Offset","")]!==void 0?te[f.replace("Offset","")]=D:se[f]=D});const me=($=p.columns)!=null?$:u?void 0:B,ge=(O=p.spacing)!=null?O:u?void 0:s,he=(S=(E=p.rowSpacing)!=null?E:p.spacing)!=null?S:u?void 0:l,xe=(G=(_=p.columnSpacing)!=null?_:p.spacing)!=null?G:u?void 0:h,ae=M({},j,{level:u,columns:me,container:q,direction:H,wrap:U,spacing:ge,rowSpacing:he,columnSpacing:xe,gridSize:ee,gridOffset:te,disableEqualOverflow:(g=(z=A)!=null?z:R)!=null?g:!1,parentDisableEqualOverflow:R}),ve=o(ae,N);let W=n.jsx(c,M({ref:b,as:V,ownerState:ae,className:Oe(ve.root,v)},se,{children:d.Children.map(T,f=>{if(d.isValidElement(f)&&$e(f,["Grid"])){var D;return d.cloneElement(f,{unstable_level:(D=f.props.unstable_level)!=null?D:u+1})}return f})}));return A!==void 0&&A!==(R??!1)&&(W=n.jsx(i.Provider,{value:A,children:W})),W});return m.muiName="Grid",m}const ut=dt({createStyledComponent:Re("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(t,e)=>e.root}),componentName:"MuiGrid2",useThemeProps:t=>we({props:t,name:"MuiGrid2"})}),C=ut,pt=t=>{const e=ie();return{chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:[e.palette.primary.light,De(e.palette.primary.main,.25)],dataLabels:{enabled:!1},fill:{opacity:1,type:"solid"},grid:{borderColor:e.palette.divider,strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{bar:{columnWidth:"40px"}},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:e.palette.mode},xaxis:{axisBorder:{color:e.palette.divider,show:!0},axisTicks:{color:e.palette.divider,show:!0},categories:t,labels:{offsetY:5,style:{colors:e.palette.text.secondary}}},yaxis:{labels:{formatter:a=>a>0?`${a}K`:`${a}`,offsetX:-10,style:{colors:e.palette.text.secondary}}}}},ft=({chartSeries:t,sx:e,dataItem:a,title:r})=>{const i=pt(a);return n.jsxs(re,{sx:e,children:[n.jsx(ne,{title:r}),n.jsx(oe,{children:n.jsx(le,{height:350,options:i,series:t,type:"bar",width:"100%"})})]})},mt=t=>{const e=ie();return{chart:{background:"transparent"},colors:[e.palette.primary.main,e.palette.success.main,e.palette.warning.main,e.palette.error.main,e.palette.primary.light,e.palette.success.dark,e.palette.warning.dark,e.palette.secondary.main],dataLabels:{enabled:!0},labels:t,legend:{show:!0},plotOptions:{pie:{expandOnClick:!1}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:e.palette.mode},tooltip:{fillSeriesColor:!1}}},gt=({chartSeries:t,labels:e,sx:a,title:r})=>{const i=mt(e);return n.jsxs(re,{sx:a,children:[n.jsx(ne,{title:r}),n.jsx(oe,{children:n.jsx(le,{height:400,options:i,series:t,type:"donut",width:"100%"})})]})};var J={},ht=K;Object.defineProperty(J,"__esModule",{value:!0});var de=J.default=void 0,xt=ht(F()),vt=n,yt=(0,xt.default)((0,vt.jsx)("path",{d:"M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zm-15.02.93C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM1.4968 11l2.5031-2.503L6.5031 11l-2.5032 2.5032zM20 9l-2.5 4h5z"}),"Groups3");de=J.default=yt;var Q={},bt=K;Object.defineProperty(Q,"__esModule",{value:!0});var ue=Q.default=void 0,St=bt(F()),_t=n,jt=(0,St.default)((0,_t.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");ue=Q.default=jt;var Z={},Ct=K;Object.defineProperty(Z,"__esModule",{value:!0});var pe=Z.default=void 0,$t=Ct(F()),Ot=n,Et=(0,$t.default)((0,Ot.jsx)("path",{d:"M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34 16.34 11zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34 16.34 19z"}),"ChecklistRtl");pe=Z.default=Et;const Gt=d.lazy(()=>ke(()=>import("./TextTitle.component-0bde305a.js"),["assets/TextTitle.component-0bde305a.js","assets/index-e627133c.js","assets/index-fb021b7c.css"])),kt=()=>{const[t,e]=d.useState([]),[a,r]=d.useState([]),[i,o]=d.useState([]),[c,m]=d.useState([]),[y,p]=d.useState([]),[b,$]=d.useState([]),[O,S]=d.useState([]),[E,G]=d.useState([]),[_,g]=d.useState(null),z=Ne(),N=Ae(),[L,j]=d.useState(!1),R=()=>g(null),v=s=>{s===He.SESSION_NO_VALIDA&&(z(`/${Ue.LOGIN}`,{replace:!0}),N(We()))},T=async()=>{await Ie().then(s=>s.json()).then(s=>{s.status==="Error"?g({children:s.data.ErrorDetail,severity:"error"}):e(s.data)}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},B=async()=>{await Le().then(s=>s.json()).then(s=>{s.status==="Error"?g({children:s.data.ErrorDetail,severity:"error"}):r(s.data)}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},q=async()=>{await Te().then(s=>s.json()).then(s=>{if(s.status==="Error")g({children:s.data.ErrorDetail,severity:"error"});else{const l=s.data,h=l.map(u=>u.Descripcion),w=l.map(u=>u.Cantidad);o(h),m(w)}}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},V=async()=>{await Be().then(s=>s.json()).then(s=>{if(s.status==="Error")g({children:s.data.ErrorDetail,severity:"error"});else{const l=s.data,h=l.map(u=>u.Descripcion),w=l.map(u=>u.Cantidad);p(h),$(w)}}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},H=async()=>{await qe().then(s=>s.json()).then(s=>{if(s.status==="Error")g({children:s.data.ErrorDetail,severity:"error"});else{const l=s.data.map(h=>({IdModulo:h.Id,Descripcion:h.Descripcion,BDAsociada:h.BDAsociada}));S(l)}}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})},U=async()=>{await Ve().then(s=>s.json()).then(s=>{s.status==="Error"?g({children:s.data.ErrorDetail,severity:"error"}):G(s.data)}).catch(s=>{const l=s.message.match("SESSION_NO_VALIDA");console.log(s),v(l==null?void 0:l[0])})};return d.useEffect(()=>{j(!0);const s=setTimeout(()=>{T(),B(),H(),U(),q(),V(),j(!1)},200);return()=>clearTimeout(s)},[]),n.jsxs(n.Fragment,{children:[n.jsxs(Me,{component:"main",sx:{flexGrow:1,marginLeft:"1rem",background:"#fafafa",borderRadius:"25px",height:"100%"},children:[n.jsxs(Pe,{maxWidth:"xl",sx:{my:10},children:[n.jsx(Gt,{variante:"h2",color:"#353535de",titleName:"Dashboard"}),n.jsxs(C,{container:!0,spacing:3,children:[n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(I,{title:"Roles",sx:{height:"100%",borderRadius:"22px"},value:a.length.toString(),color:"error.main",icon:n.jsx(Fe,{}),colorText:"text.secondary"})}),n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(I,{title:"Usuarios",sx:{height:"100%",borderRadius:"22px"},value:t.length.toString(),color:"success.main",icon:n.jsx(de,{}),colorText:"text.secondary"})}),n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(I,{title:"Modulos",sx:{height:"100%",borderRadius:"22px"},value:O.length.toString(),color:"primary.main",icon:n.jsx(ue,{}),colorText:"text.secondary"})}),n.jsx(C,{xs:12,sm:6,lg:3,children:n.jsx(I,{title:"Permisos",sx:{height:"100%",borderRadius:"22px"},value:E.length.toString(),color:"secondary.dark",colorText:"text.secondary",icon:n.jsx(pe,{})})}),n.jsx(C,{xs:12,lg:7,children:b.length>0&&n.jsx(ft,{chartSeries:[{name:"Cantidad Modulos",data:b}],sx:{height:"100%",borderRadius:"22px"},dataItem:y,title:"Modulos Asignados por Roles"})}),n.jsx(C,{xs:12,md:6,lg:5,children:c.length>0&&n.jsx(gt,{chartSeries:c,labels:i,sx:{height:"100%",borderRadius:"22px"},title:"Roles Asignados"})})]})]}),!!_&&n.jsx(ze,{snackbar:_,onClose:R})]}),n.jsx(Ke,{openBackdrop:L,setOpenBackdrop:j})]})};export{kt as default};
