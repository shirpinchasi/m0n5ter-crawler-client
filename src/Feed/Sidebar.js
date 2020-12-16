// import React, { Component } from 'react';
// import "./SideBar.scss"
// import "bootstrap";
// import { BrowserRouter as Router, Link } from 'react-router-dom';



// export default class Sidebar extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//           data : [],
//           searchTerm : ""
          
        
//     }; 
//  };

//     componentDidMount(){
//       fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc`,{
//       method : "GET",
//     })
//     .then(res => res.json())
//       .then(res => {
//         this.setState({
//            data :res._embedded.articles,
//            isLoading : false,
//         })
//       })
//       .catch((err =>{
//         console.error(err);
//       }));
      
//     };
    
     

// render(){
//   const {data} = this.state;
  
//   return(
//     <div>
//             <div>
             
//             <input type="checkbox" id="check"/>
//             <label htmlFor="check">
//             <i className="fa fa-bars" id="btn"></i>
//             <i className="fa fa-times" id="cancel"></i>
//             </label>
              
//                 <div className="sidebar">
                  
                        
                            
                            
//                     <ul>
                    
                    
                    
//                     </ul>
                            
//              </div>
//         </div>
            
              
//     </div>  
//     )
//   }
// }