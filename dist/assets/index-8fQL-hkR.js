import{a as t,r as o,j as e,T as a}from"./index-LcRiL3e7.js";import{C as c,a as d}from"./index-mEFm21jV.js";import{G as m}from"./Grid-yykl9qcH.js";import"./unsupportedProp-P-rZrHSD.js";import"./Paper-jTn0Vj5X.js";import"./Visibility-0_XHQ3_N.js";import"./requirePropFactory-J_m8rzpV.js";const N=()=>{const{data:n,error:s,loading:r,executeFetch:u}=t();return o.useEffect(()=>{u({endPoint:"denuncias/getDenunciasUser",method:"GET"})},[]),r?e.jsxDEV(a,{children:"Cargando denuncias..."},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Denuncias/MisDenuncias/index.jsx",lineNumber:13,columnNumber:25},void 0):s?e.jsxDEV(a,{children:["Error al obtener las denuncias: ",s]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/content/pages/Denuncias/MisDenuncias/index.jsx",lineNumber:14,columnNumber:23},void 0):e.jsxDEV(c,{children:e.jsxDEV(m,{container:!0,spacing:2,width:"100%",children:n&&n.status==="success"&&n.data.map(i=>e.jsxDEV(d,{denuncia:i},i._id,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Denuncias/MisDenuncias/index.jsx",lineNumber:20,columnNumber:21},void 0))},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Denuncias/MisDenuncias/index.jsx",lineNumber:18,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Denuncias/MisDenuncias/index.jsx",lineNumber:17,columnNumber:9},void 0)};export{N as default};
