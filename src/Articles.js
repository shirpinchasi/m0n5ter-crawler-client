import React, { Component} from 'react';
import './App.scss';
import "./Articles.scss"
import "bootstrap";
import config from "./config/index";





export default class Groups extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
        
    }; 
 };

    componentDidMount(){
      fetch(config.apiUrl,{
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
  const {data} = (this.state);
  return(
<div>   
          
               
               <div id="bg-dark"> 
                        
                    <div>
                  <div className="cardim">
                          {data.map((gr)=>(
                            <div id="card">{data.filter(description => description.includes("APT41"))}         
                          <div id="cardim">{gr}</div>
                          </div>   
                                         
              ))}
              
                       
              </div>
              </div>
              
              
              
            </div>

                          
            
               
               
        
  
               </div>
               
           )}
            
}