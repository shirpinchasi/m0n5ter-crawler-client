import React, { Component } from 'react';
import '../App.scss';
import "bootstrap";
import Sidebar from '../Feed/Sidebar';
import config from "../config/development";



export default class GroupId extends Component{
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
.then(res => res.json())
.then(res => {
    this.setState({
       data :res._embedded.articles,
       isLoading : false,
    })
  })
  .catch((err =>{
    console.error(err);
  }));
  
};
    

render(){
  const {isLoading , data} = (this.state);
  return(
          
            <div id="background">
                {isLoading ? (
                  <div className="cssload-tetrominos">
                    <div className="cssload-tetromino cssload-box1"></div>
                    <div className="cssload-tetromino cssload-box2"></div>
                    <div className="cssload-tetromino cssload-box3"></div>
                    <div className="cssload-tetromino cssload-box4"></div>
                  </div>
                  ) :(
                    
            <div className=" bg-dark text-white">   
              <div className ="navbar navbar-expand-lg mt-2 ">
              
              <a className="navbar-brand " href="#">M0n5ter Crawler</a>
              <Sidebar/>
              
</div>
            <div id="bg-dark"> 
           
            {data.map((article)=>(
                    <div>
                        <div className ="groups">
                          {article.groups.map((gr)=>(
                            <div id="groups">
                              <div className="badge badge-success">
                                <div key={gr.id} id ="group_Name" className="">{gr.id}
                                <div key={gr.description}>{gr.description}</div>
                                  {/* <div id ="group_Id" className=""> ID: {gr.id} aliases:  {gr.aliases}</div> */}
                                  <div id ="group_Aliases" className="card-body"></div>
                                  </div>
                                      {/* <div id ="group_Desc" className="card-body">group description : {gr.description}</div> 
                                      
                                     <div id ="group_Last_Scan" className="card-body">group last scan : {gr.lastScan}</div> */}
                                  
                              </div>
                          </div>        
              ))}
              
              
                     
              
              </div>
              </div>
              
              
              ))
            }  
            </div>
            </div>
            
            
            )   
          }
          
        </div>
        

        
        )
  }
}