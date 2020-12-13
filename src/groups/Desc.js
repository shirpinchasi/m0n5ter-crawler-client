import React, { Component} from 'react';
import '../App.scss';
import "./Groups.scss"
import "bootstrap";
import Sidebar from "../Feed/Sidebar"
import config from "../config/development"





export default class Desc extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
        
    }; 
 };

    componentDidMount(){
      fetch("https://m0n5ter-crawler.herokuapp.com/api/groups?sort=desc",{
      method : "GET",
    })
    .then(res => res.json())
      .then(res => {
        this.setState({
            data : res._embedded.groups,
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