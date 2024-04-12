import{j as u,v as w,w as j,x as m,_ as n,r as g,c as C,a as I,p as S,t as D}from"./index-797e622d.js";import{m as M}from"./Tab.components-4e986fc4.js";const P=M(u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function z(a){return w("MuiAvatar",a)}j("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const F=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],N=a=>{const{classes:e,variant:t,colorDefault:r}=a;return D({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},z,e)},U=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(({theme:a,ownerState:e})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&n({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}))),_=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),E=m(P,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,e)=>e.fallback})({width:"75%",height:"75%"});function L({crossOrigin:a,referrerPolicy:e,src:t,srcSet:r}){const[s,l]=g.useState(!1);return g.useEffect(()=>{if(!t&&!r)return;l(!1);let i=!0;const o=new Image;return o.onload=()=>{i&&l("loaded")},o.onerror=()=>{i&&l("error")},o.crossOrigin=a,o.referrerPolicy=e,o.src=t,r&&(o.srcset=r),()=>{i=!1}},[a,e,t,r]),s}const q=g.forwardRef(function(e,t){const r=C({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:i,component:o="div",imgProps:h,sizes:A,src:f,srcSet:v,variant:y="circular"}=r,R=I(r,F);let c=null;const k=L(n({},h,{src:f,srcSet:v})),x=f||v,b=x&&k!=="error",d=n({},r,{colorDefault:!b,component:o,variant:y}),p=N(d);return b?c=u.jsx(_,n({alt:s,src:f,srcSet:v,sizes:A,ownerState:d,className:p.img},h)):l!=null?c=l:x&&s?c=s[0]:c=u.jsx(E,{ownerState:d,className:p.fallback}),u.jsx(U,n({as:o,ownerState:d,className:S(p.root,i),ref:t},R,{children:c}))}),H=q;export{H as A};
