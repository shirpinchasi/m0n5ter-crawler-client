// import React, { useEffect, useState } from "react";
// import App from "./App";
// import config from "./config";
// import{
//     Switch,
//     Route
// }from "react-router-dom";


// function Router(){
//     const [isLoading, setLoading] = useState(true);
//     const [data,setData] = useState([]);

//     useEffect(()=>{
//         async function getData(){
//             const data = await App.get();
//             setData(data);
//             setLoading(false);
//             if(!data){
//                 console.log("no data");
//             }
//         }getData();
//     }
//     )
// }
// return(
//     <App value = {{data,setData}}>
//         <Switch>
//             <Route path="/">

//             </Route>
//         </Switch>
//     </App>
// )