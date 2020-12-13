// import React, { Component } from 'react';
// import './App.scss';
// import "bootstrap";
// import Sidebar from './Sidebar';
// import config from "./config/development";



// function searchingForName(term){
//   return function(x){
//     return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    
//   }
// }



// export default class SearchNameOfGroup extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//           data : [],
//           isLoading : true,
//           term : "",
          
//       }; 
//       this.searchHandler = this.searchHandler.bind(this)
//     };


//     componentDidMount(){
//       fetch(config.apiUrl,{
//         method : "GET",
//       })
//     .then(res => res.json())
//     .then(res => {
//         this.setState({
//            data :res._embedded.articles,
//            isLoading : false,
//         })
//       })
//       .catch((err =>{
//         console.error(err);
//       }));
      
// };

// searchHandler(e){
//   this.setState({term :e.target.value})
// }

  
// render(){
//   const { data , term} = (this.state);
//   return( 
//             <div id="background">
               
                    
//             <div className=" bg-dark text-white">   
//               <div className ="navbar navbar-expand-lg mt-2 ">
//                   <input id="search" label = "search" value={term} type="text" placeholder="search here.." onChange={this.searchHandler}/>
//               <a className="navbar-brand " href="#">M0n5ter Crawler</a>
//               <Sidebar/>
              
//           </div>
//             <div id="bg-dark"> 
//             {data.map((article)=>(
              
//               <div>
                
//                 <div id ="cards" className="col-12 col-md- col-sm-2 col-xs">
//                 <div id = "articles" className="col">
//                   <div id = "backgroundTitle">
//                         <a href={"" + article.url} id ="article_Url" target="_blank" rel="noopener noreferrer" className="card link"><div key={article.title} id ="article_Title" className="row"> {article.title}</div></a>
//                         </div>
//                         <div key={article.date} id ="article_Date" className="card-subtitle mb-2 text-muted">{article.date}</div>
//                         <div className ="groups">
//                           {article.groups.filter(searchingForName(term)).map((gr)=>(
//                             <div id="groups">
//                               <div className="badge badge-success">
//                                 <div key={gr.name} id ="group_Name" className="">{gr.name}
//                                   </div>
                                      
                                  
//                               </div>
//                           </div>        
//               ))}
              
              
                      
              
//               </div>
//               </div>
//               </div>
//               </div>
              
              
//               ))
//             }  
//             </div>
//             </div>
            
            
            
          
//         </div>
        

        
//         )
//   }
// }