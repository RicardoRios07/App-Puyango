import{f as d,h as l,Q as f,u as p,a as v,r as c,j as e,B as x,T as r}from"./index-YmGoZUYa.js";import{G as u}from"./Grid-f3s60bCp.js";import"./requirePropFactory-4mIbly52.js";const g=d(l.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline"),N=d(l.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"ErrorOutline"),D=()=>{const{token:i}=f(),s=p(),{data:n,error:o,loading:t,executeFetch:m}=v();return c.useEffect(()=>{i&&m({endPoint:`auth/verifyUser/${i}`,method:"POST",data:{}})},[i]),c.useEffect(()=>{let a;return n&&n.status==="success"&&(a=setTimeout(()=>{s("/login")},1e4)),()=>{a&&clearTimeout(a)}},[n,s]),t?e.jsxDEV(x,{open:t},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:35,columnNumber:25},void 0):e.jsxDEV(u,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:e.jsxDEV(u,{item:!0,xs:12,textAlign:"center",children:[o?e.jsxDEV("div",{children:[e.jsxDEV(N,{color:"error",fontSize:"large"},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:43,columnNumber:25},void 0),e.jsxDEV(r,{variant:"h6",color:"error",gutterBottom:!0,children:"Error al verificar la cuenta"},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:44,columnNumber:25},void 0),e.jsxDEV(r,{variant:"body1",children:o.message},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:47,columnNumber:25},void 0)]},void 0,!0,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:42,columnNumber:21},void 0):null,n&&n.status==="success"?e.jsxDEV("div",{children:[e.jsxDEV(g,{color:"success",fontSize:"large"},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:52,columnNumber:25},void 0),e.jsxDEV(r,{variant:"h6",color:"success",gutterBottom:!0,children:"Cuenta verificada exitosamente"},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:53,columnNumber:25},void 0),e.jsxDEV(r,{variant:"body1",children:"Serás redirigido a la página de inicio de sesión en 10 segundos."},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:56,columnNumber:25},void 0)]},void 0,!0,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:51,columnNumber:21},void 0):null]},void 0,!0,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:40,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/ricardo/Documents/Reto Innova/App-Puyango/src/content/pages/verificarCuenta/index.jsx",lineNumber:39,columnNumber:9},void 0)};export{D as default};
