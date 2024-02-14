import{r as s,Y as X,k as z,h as B,s as M,m as f,p as k,b as V,e as h,l as x,f as W,P as r,q,Z as ee,F as ne,x as oe,w as te,t as re,g as ie,J as ae,$ as le,I as O,a as se,a0 as ce,C as ue,j as c,B as j}from"./index-a0VEQ0u6.js";import{r as de,T as pe}from"./Typography-3_1xkPVc.js";function fe(...e){return e.reduce((n,o)=>o==null?n:function(...i){n.apply(this,i),o.apply(this,i)},()=>{})}function me(e,n=166){let o;function t(...i){const a=()=>{e.apply(this,i)};clearTimeout(o),o=setTimeout(a,n)}return t.clear=()=>{clearTimeout(o)},t}function ge(e,n){return(o,t,i,a,l)=>{const u=i||"<<anonymous>>",p=l||t;return typeof o[t]<"u"?new Error(`The ${a} \`${p}\` of \`${u}\` is deprecated. ${n}`):null}}function F(e){return e&&e.ownerDocument||document}function he(e){return F(e).defaultView||window}let S=0;function ve(e){const[n,o]=s.useState(e),t=e||n;return s.useEffect(()=>{n==null&&(S+=1,o(`mui-${S}`))},[n]),t}const P=X.useId;function be(e){if(P!==void 0){const n=P();return e??n}return ve(e)}function ye(e,n,o,t,i){const a=i||n;return typeof e[n]<"u"?new Error(`The prop \`${a}\` is not supported. Please remove it.`):null}function xe({controlled:e,default:n,name:o,state:t="value"}){const{current:i}=s.useRef(e!==void 0),[a,l]=s.useState(n),u=i?e:a;{s.useEffect(()=>{i!==(e!==void 0)&&console.error([`MUI: A component is changing the ${i?"":"un"}controlled ${t} state of ${o} to be ${i?"un":""}controlled.`,"Elements should not switch from uncontrolled to controlled (or vice versa).",`Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`,"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.","More info: https://fb.me/react-controlled-components"].join(`
`))},[t,o,e]);const{current:d}=s.useRef(n);s.useEffect(()=>{!i&&d!==n&&console.error([`MUI: A component is changing the default ${t} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`))},[JSON.stringify(n)])}const p=s.useCallback(d=>{i||l(d)},[]);return[u,p]}function je(e){return z("MuiSvgIcon",e)}B("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const _e=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],$e=e=>{const{color:n,fontSize:o,classes:t}=e,i={root:["root",n!=="inherit"&&`color${f(n)}`,`fontSize${f(o)}`]};return q(i,je,t)},Ne=M("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.color!=="inherit"&&n[`color${f(o.color)}`],n[`fontSize${f(o.fontSize)}`]]}})(({theme:e,ownerState:n})=>{var o,t,i,a,l,u,p,d,y,g,m,v,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(t=o.create)==null?void 0:t.call(o,"fill",{duration:(i=e.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,20))||"1.25rem",medium:((u=e.typography)==null||(p=u.pxToRem)==null?void 0:p.call(u,24))||"1.5rem",large:((d=e.typography)==null||(y=d.pxToRem)==null?void 0:y.call(d,35))||"2.1875rem"}[n.fontSize],color:(g=(m=(e.vars||e).palette)==null||(m=m[n.color])==null?void 0:m.main)!=null?g:{action:(v=(e.vars||e).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(b=(e.vars||e).palette)==null||(b=b.action)==null?void 0:b.disabled,inherit:void 0}[n.color]}}),_=s.forwardRef(function(n,o){const t=k({props:n,name:"MuiSvgIcon"}),{children:i,className:a,color:l="inherit",component:u="svg",fontSize:p="medium",htmlColor:d,inheritViewBox:y=!1,titleAccess:g,viewBox:m="0 0 24 24"}=t,v=V(t,_e),b=s.isValidElement(i)&&i.type==="svg",D=h({},t,{color:l,component:u,fontSize:p,instanceFontSize:n.fontSize,inheritViewBox:y,viewBox:m,hasSvgAsChild:b}),E={};y||(E.viewBox=m);const Q=$e(D);return x.jsxs(Ne,h({as:u,className:W(Q.root,a),focusable:"false",color:d,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:o},E,v,b&&i.props,{ownerState:D,children:[b?i.props.children:i,g?x.jsx("title",{children:g}):null]}))});_.propTypes={children:r.node,classes:r.object,className:r.string,color:r.oneOfType([r.oneOf(["inherit","action","disabled","primary","secondary","error","info","success","warning"]),r.string]),component:r.elementType,fontSize:r.oneOfType([r.oneOf(["inherit","large","medium","small"]),r.string]),htmlColor:r.string,inheritViewBox:r.bool,shapeRendering:r.string,sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object]),titleAccess:r.string,viewBox:r.string};_.muiName="SvgIcon";function Re(e,n){function o(t,i){return x.jsx(_,h({"data-testid":`${n}Icon`,ref:i},t,{children:e}))}return o.displayName=`${n}Icon`,o.muiName=_.muiName,s.memo(s.forwardRef(o))}const we={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),ee.configure(e)}},Ce=Object.freeze(Object.defineProperty({__proto__:null,capitalize:f,createChainedFunction:fe,createSvgIcon:Re,debounce:me,deprecatedPropType:ge,isMuiElement:ne,ownerDocument:F,ownerWindow:he,requirePropFactory:de,setRef:oe,unstable_ClassNameGenerator:we,unstable_useEnhancedEffect:te,unstable_useId:be,unsupportedProp:ye,useControlled:xe,useEventCallback:re,useForkRef:ie,useIsFocusVisible:ae},Symbol.toStringTag,{value:"Module"}));function Ie(e){return z("MuiIconButton",e)}const Te=B("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),De=["edge","children","className","color","disabled","disableFocusRipple","size"],Ee=e=>{const{classes:n,disabled:o,color:t,edge:i,size:a}=e,l={root:["root",o&&"disabled",t!=="default"&&`color${f(t)}`,i&&`edge${f(i)}`,`size${f(a)}`]};return q(l,Ie,n)},Oe=M(le,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.color!=="default"&&n[`color${f(o.color)}`],o.edge&&n[`edge${f(o.edge)}`],n[`size${f(o.size)}`]]}})(({theme:e,ownerState:n})=>h({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:O(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.edge==="start"&&{marginLeft:n.size==="small"?-3:-12},n.edge==="end"&&{marginRight:n.size==="small"?-3:-12}),({theme:e,ownerState:n})=>{var o;const t=(o=(e.vars||e).palette)==null?void 0:o[n.color];return h({},n.color==="inherit"&&{color:"inherit"},n.color!=="inherit"&&n.color!=="default"&&h({color:t==null?void 0:t.main},!n.disableRipple&&{"&:hover":h({},t&&{backgroundColor:e.vars?`rgba(${t.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:O(t.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),n.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},n.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Te.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),U=s.forwardRef(function(n,o){const t=k({props:n,name:"MuiIconButton"}),{edge:i=!1,children:a,className:l,color:u="default",disabled:p=!1,disableFocusRipple:d=!1,size:y="medium"}=t,g=V(t,De),m=h({},t,{edge:i,color:u,disabled:p,disableFocusRipple:d,size:y}),v=Ee(m);return x.jsx(Oe,h({className:W(v.root,l),centerRipple:!0,focusRipple:!d,disabled:p,ref:o,ownerState:m},g,{children:a}))});U.propTypes={children:se(r.node,e=>s.Children.toArray(e.children).some(o=>s.isValidElement(o)&&o.props.onClick)?new Error(["MUI: You are providing an onClick event listener to a child of a button element.","Prefer applying it to the IconButton directly.","This guarantees that the whole <button> will be responsive to click events."].join(`
`)):null),classes:r.object,className:r.string,color:r.oneOfType([r.oneOf(["inherit","default","primary","secondary","error","info","success","warning"]),r.string]),disabled:r.bool,disableFocusRipple:r.bool,disableRipple:r.bool,edge:r.oneOf(["end","start",!1]),size:r.oneOfType([r.oneOf(["small","medium","large"]),r.string]),sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object])};const $=U;var R={},L={exports:{}};(function(e){function n(o){return o&&o.__esModule?o:{default:o}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(L);var w=L.exports,N={};const Se=ce(Ce);var A;function C(){return A||(A=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=Se}(N)),N}var Pe=w;Object.defineProperty(R,"__esModule",{value:!0});var G=R.default=void 0;Be(s);var Ae=Pe(C()),ze=x;function Y(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,o=new WeakMap;return(Y=function(t){return t?o:n})(e)}function Be(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Y(n);if(o&&o.has(e))return o.get(e);var t={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,o&&o.set(e,t),t}G=R.default=(0,Ae.default)((0,ze.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");var I={},Me=w;Object.defineProperty(I,"__esModule",{value:!0});var H=I.default=void 0;We(s);var ke=Me(C()),Ve=x;function J(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,o=new WeakMap;return(J=function(t){return t?o:n})(e)}function We(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=J(n);if(o&&o.has(e))return o.get(e);var t={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,o&&o.set(e,t),t}H=I.default=(0,ke.default)((0,Ve.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");var T={},qe=w;Object.defineProperty(T,"__esModule",{value:!0});var Z=T.default=void 0;Le(s);var Fe=qe(C()),Ue=x;function K(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,o=new WeakMap;return(K=function(t){return t?o:n})(e)}function Le(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=K(n);if(o&&o.has(e))return o.get(e);var t={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,o&&o.set(e,t),t}Z=T.default=(0,Fe.default)((0,Ue.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");const Ge="/img/gadPuyangoOrg.png",Ye="/img/tikee-h-blanco.png",Ze=({backgroundImage:e})=>{const n=ue();return c.jsxDEV(j,{sx:{width:"50%",height:"100vh",backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",position:"relative"},children:c.jsxDEV(j,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",pb:n.spacing(4)},children:[c.jsxDEV(j,{sx:{width:"auto",height:150,display:"flex",justifyContent:"center",mb:n.spacing(2)},children:c.jsxDEV("img",{src:Ge,alt:"GAD Puyango",style:{height:"100%",maxWidth:"100%"}},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:41,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:34,columnNumber:17},void 0),c.jsxDEV(j,{sx:{display:"flex","& > *":{margin:n.spacing(1)}},children:[c.jsxDEV($,{color:"inherit","aria-label":"facebook",size:"large",href:"https://www.facebook.com",children:c.jsxDEV(G,{sx:{color:n.palette.common.white}},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:51,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:50,columnNumber:21},void 0),c.jsxDEV($,{color:"inherit","aria-label":"twitter",size:"large",href:"https://www.facebook.com",children:c.jsxDEV(H,{sx:{color:n.palette.common.white}},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:54,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:53,columnNumber:21},void 0),c.jsxDEV($,{color:"inherit","aria-label":"whatsapp",size:"large",href:"https://www.facebook.com",children:c.jsxDEV(Z,{sx:{color:n.palette.common.white}},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:57,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:56,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:44,columnNumber:17},void 0),c.jsxDEV(j,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",pt:n.spacing(2),pb:n.spacing(2)},children:[c.jsxDEV(pe,{variant:"h4",color:"white",children:"Powered by:"},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:69,columnNumber:21},void 0),c.jsxDEV(j,{sx:{width:"auto",height:"auto",display:"flex",justifyContent:"center",mt:n.spacing(1)},children:c.jsxDEV("img",{src:Ye,alt:"Footer Logo",style:{maxWidth:"100%",maxHeight:"50px"}},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:79,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:72,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:61,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:27,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/components/Banner/index.jsx",lineNumber:13,columnNumber:9},void 0)};export{Ze as B,$ as I,he as a,fe as b,Re as c,me as d,be as e,w as i,F as o,C as r,xe as u};
