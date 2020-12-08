import React, { Component} from 'react';
import './App.scss';
import "./Groups.scss"
import "bootstrap";
import Sidebar from "./Sidebar"
import config from "./config/development"





export default class Desc extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
        
    }; 
 };

    componentDidMount(){
      fetch("https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc",{
      method : "GET",
    })
    .then(res => res.json(res))
      .then(res => {
          const newData=[
              ...res._embedded.articles.reduce((acc, item)=>{
                  for (let group of item.groups){
                      acc.add(group.description);
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
          
               
               <div id="bg-dark"> 
                        
                    <div className="d-flex justify-content-around">
                  
                          {data.map((gr)=>(
                            <div className="d-flex">
                                
                              <div className="badge badge-pill badge-secondary col-md-2">
                               <div key={gr} id ="group_Desc">{gr}</div>
                          
                                  
                              </div>
                          </div>   
                                         
              ))}
              
                       
              
              </div>
              
              
              
            </div>

                          
            
               </div>
               
           )}
            
}