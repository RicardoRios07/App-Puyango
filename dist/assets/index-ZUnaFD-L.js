import{r as i,u as c,j as e,B as t,c as j}from"./index-a0VEQ0u6.js";import{B as A}from"./index-DJeh6eCQ.js";import{u as v,I as l,B as C,L as T,S}from"./useSnackbar-197ErrFV.js";import{u as L}from"./useFetchData-QTYpwC7_.js";import{T as r}from"./Typography-3_1xkPVc.js";import"./Paper-Rx3wuYLr.js";const P=()=>{const[a,d]=i.useState({email:"",password:""}),s=c(),{data:n,error:u,loading:R,executeFetch:p}=L(),{setSession:g}=j(),{isOpen:f,handleClose:x,handleOpen:b}=v(),[N,h]=i.useState(""),[D,y]=i.useState("success");i.useEffect(()=>{n&&n.code===200?(console.log("TOKEN: ?================",n.data.token),g(n.data.token),s("/inicio")):n&&n.code!==200&&(h(u.message||"Ocurrió un error durante el registro."),y("error"),b())},[n,u,s]);const m=o=>{d({...a,[o.target.name]:o.target.value})},E=async o=>{o.preventDefault(),p({endPoint:"auth/login",method:"POST",data:a})};return e.jsxDEV(t,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:4,borderRadius:1,maxWidth:400,margin:"auto"},children:[e.jsxDEV(r,{variant:"h2",component:"h1",gutterBottom:!0,children:"Iniciar sesión"},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:55,columnNumber:13},void 0),e.jsxDEV(r,{variant:"subtitle1",gutterBottom:!0,children:"Agrega tu información a continuación"},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:58,columnNumber:13},void 0),e.jsxDEV(t,{component:"form",onSubmit:E,sx:{width:"100%",mt:1},children:[e.jsxDEV(l,{label:"Correo electrónico",type:"email",value:a.email,onChange:m,name:"email",margin:"normal",fullWidth:!0},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:66,columnNumber:17},void 0),e.jsxDEV(l,{label:"Contraseña",type:"password",value:a.password,onChange:m,name:"password",margin:"normal",fullWidth:!0},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:75,columnNumber:17},void 0),e.jsxDEV(C,{text:"Siguiente",type:"submit",color:"primary",variant:"contained",sx:{mt:3,mb:2,py:1},fullWidth:!0},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:84,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:61,columnNumber:13},void 0),e.jsxDEV(r,{variant:"body2",children:["Si ya tienes una cuenta ",e.jsxDEV(T,{href:"/register",variant:"body2",children:"Ingresa aquí"},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:95,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:93,columnNumber:13},void 0),e.jsxDEV(S,{isOpen:f,duration:6e3,handleClose:x,type:D,text:N},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/Form/index.jsx",lineNumber:43,columnNumber:9},void 0)},w=()=>(c(),e.jsxDEV(t,{sx:{display:"flex",height:"100vh"},children:[e.jsxDEV(A,{backgroundImage:"public/img/background.png"},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/index.jsx",lineNumber:16,columnNumber:13},void 0),e.jsxDEV(P,{},void 0,!1,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/index.jsx",lineNumber:17,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/REACT/App-Puyango/src/content/pages/Login/index.jsx",lineNumber:15,columnNumber:9},void 0));export{w as default};
