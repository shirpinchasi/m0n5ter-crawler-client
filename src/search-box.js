// // const { data } = require("jquery")
// // const { Z_FILTERED } = require("zlib")

// // form 

// // Input 
// // filter 
// // return data.contains(input)

// // את התוצאות את מיגה בקומפפונטה שיצרת כבר

// import React, { Component } from 'react';
// import "./searchBox.scss";
// import "bootstrap";
// import config from "./config/development";



// export default class SearchBox extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//           data : [],
//           isLoading : true,
        
//     }; 
//  };

//  componentDidMount(){
//   fetch(config.apiUrl,{
//     method : "GET",
//   })
// .then(res => res.json())
// .then(res => {
//     this.setState({
//        data :res._embedded.articles,
//        isLoading : false,
//     })
//   })
//   .catch((err =>{
//     console.error(err);
//   }));
  
// };
    

// render(){
//   const {data} = (this.state);
//   con
//   return(
           
//             <div className="search">
//               <input type="text" placeholder="Search here..."/>
//               {data.map((article)=>{
//                 <div>
//                     {article.groups.map((gr)=>(
//                         <div>{gr.id}</div>
//                     ))}
//                 </div>
//               })}
//             </div>

                
//     )
//     }

// }
