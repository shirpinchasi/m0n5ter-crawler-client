import React, { Component } from 'react';
import './App.scss';
import "bootstrap";




export default class Groups extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
        
    }; 
 };

    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc`,{
      method : "GET",
    })
    .then(res => res.json(res))
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
  const {data} = (this.state);
  
  return(
<div>   
    <input type="checkbox" id="check"/>
    <label htmlFor="check">
      <i className="fa fa-bars" id="btn"></i>
      <i className="fa fa-times" id="cancel"></i>
    </label>
    <div className="sidebar">
        <input className="input" type="text" />
    
    <ul>
        <li><a href="#"><i className="fa fa-users"></i>Groups</a></li>
        <li><a href="#"><i className="fa fa-info"></i>About</a></li>
        <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
        <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
        <li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
        <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
        <li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
    </ul>
    </div>
            <div id="bg-dark"> 
           
            {data.map((article)=>(
              <div>
                          {article.groups.map((gr)=>(
                            <div id="groups">
                              <div className="badge badge-success">
                                <div key={gr.name} id ="group_Name" className="">{gr.name}
                                
                                  {/* <div id ="group_Id" className=""> ID: {gr.id} aliases:  {gr.aliases}</div> */}
                                  {/* <div id ="group_Aliases" className="card-body"></div> */}
                                  </div>
                                      {/* <div id ="group_Desc" className="card-body">group description : {gr.description}</div> 
                                      
                                     <div id ="group_Last_Scan" className="card-body">group last scan : {gr.lastScan}</div> */}
                                  
                              </div>
                          </div>        
              ))}
              
                        {/* <div className="card">
                            <a href ={"" + article.url} id ="article_Url" target="_blank" rel="noopener noreferrer" className="card link"> website link</a><br/>
                            <a href = {article._links.self.href} id="article_linksHref" target="_blank"  rel="noopener noreferrer" className="card link">  json link</a><br/>
                            <a href = {article._links.article.href} id="article_Href" target="_blank"  rel="noopener noreferrer" className="card link"> db link</a><br/>
                            <a href = {article._links.groups.href} id="article_GroupsHref" target="_blank"  rel="noopener noreferrer" className="card link"> group db link</a>
                        
                        </div> */}
              
              </div>
              
              
              ))
            }  
            </div>
            </div>
            
            
            )   
               
        
  }
}