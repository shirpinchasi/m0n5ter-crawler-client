import React, { Component} from 'react';
import './App.scss';
import "./Groups.scss"
import "bootstrap";
import Sidebar from "./Sidebar"





export default class Groups extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
        
    }; 
 };

    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc`,{
      method : "GET",
    })
    .then(res => res.json(res))
      .then(res => {
          const newData=[
              ...res._embedded.articles.reduce((acc, item)=>{
                  for (let group of item.groups){
                      acc.add(group.name);
                  }
                  return acc;
              },new Set())
          ];
          console.log(newData);
         
        this.setState({
            data : newData,
           isLoading : false,
            
           
        })
        
      })
      .catch((err =>{
        console.error(err);
      }));
      
    };
    

render(){
  const {isLoading, data} = (this.state);
  return(
<div>   
           {isLoading ? (
               <div className="cssload-tetrominos">
               <div className="cssload-tetromino cssload-box1"></div>
               <div className="cssload-tetromino cssload-box2"></div>
               <div className="cssload-tetromino cssload-box3"></div>
               <div className="cssload-tetromino cssload-box4"></div>
             </div>
           ):(
               
               <div id="bg-dark"> 
                        <div className ="navbar navbar-expand-lg mt-2 ">
                        <a className="navbar-brand " href="#">M0n5ter Crawler</a>
                        <Sidebar/>
                    </div>
                    <div className="d-flex justify-content-around">
                  
                          {data.map((gr)=>(
                            <div className="d-flex">
                                
                              <div className="badge badge-pill badge-secondary col-md-2">
                               <div key={gr} id ="group_Names">{gr}</div>
                          <div key={gr.description}>{gr.description}</div>
                                  
                              </div>
                          </div>   
                                         
              ))}
              
                       
              
              </div>
              
              
              
            </div>

                          
            
            )   
               
        
  }
               </div>
               
           )}
            
}