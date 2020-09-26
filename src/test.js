// import React, { useContext } from "react";


// function FetchData(){
//     const {setData} = useContext(dataContext);
//     const fetch = async(values) =>{
//         const res = await fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles/`, {
//             method : "GET",
//             headers : {
//                 "Content-Type" : "application/json"},
//             mode : "no-cors",
//             credentials : "include",
//             body : JSON.stringify(values)
//     });
//     if (res.status === 200) {
//         const fetchetData = await res.json();
//         setData(fetchetData);
//       }else if (res.status === 404){
//           console.log("NO!");
//       }else{
//           console.log("unknown error");
//       }
//       return res;
// }

// };


// return(
//     <div>
//         <div>
//               {data.res}
//         </div>
//     </div>
// )

















// export default FetchData;