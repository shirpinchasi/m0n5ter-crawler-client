// import React, { Component } from 'react';


// export default class Test extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//           data : [],
      
//       };
// };

//     componentDidMount(){
//       fetch("https://m0n5ter-crawler.herokuapp.com/api/articles",{
//         method : "GET"
//       })
//     .then(res => res.json())
//     .then(res => {
//         this.setState({
//            data : res._links,
          
//         });
//         console.log(res);
//       }) 
//       .catch((err =>{
//         console.error(err);
//       }));
      
// };


// render(){
// const {data} = (this.state);

//   return( 
//             <div id="background">
                    
//             <div id="bg-dark">   
              
        
//             <div id="bg-dark"> 
            
//             {data.map((article)=>(
             
//               <div>{article._links}</div>
              
//                 ))
            
//   } 
     
            
            

//         </div>
//       </div>
      
          
//   </div>
        

             
//   )
//   }
// }


