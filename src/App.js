import React, { Component } from 'react';
import './App.scss';
import "bootstrap";
import Groups from "./Groups"



export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          filterDataName : "",
          filterDataTitle : ""
        
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
           filterDataName: "",
           filterDataTitle : ""
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
              
              
              {/* <a href="config" className="nav-link">groups</a> */}
             
    <input type="checkbox" id="check"/>
    <label htmlFor="check">
      <i className="fa fa-bars" id="btn"></i>
      <i className="fa fa-times" id="cancel"></i>
    </label>
    <div className="sidebar">
    <input className="input" name="filterData"type="text" onChange={this.handleChange}/>
    
  <ul>
<li><a href= "/" alt ="Groups"><i className="fa fa-users"></i>Groups</a></li>
<li><a href="#"><i className="fa fa-info"></i>About</a></li>
<li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
<li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
<li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
<li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
<li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
</ul>
</div>
</div>
            <div id="bg-dark"> 
           
            {data.map((article)=>(
              
              <div>
                
                <div id ="cards" className="col-12 col-md- col-sm-2 col-xs">
                <div id = "articles" className="col">
                  <div id = "backgroundTitle">
                        <div key={article.title} id ="article_Title" className="row"> {article.title}</div>
                        </div>
                        <div key={article.date} id ="article_Date" className="card-subtitle mb-2 text-muted">{article.date}</div>
                        <div className ="groups">
                          {article.groups.map((gr)=>(
                            <div id="groups">
                              <div className="badge badge-success">
                                <div key={gr.name} id ="group_Name" className="">{gr.name}
                                
                                  {/* <div id ="group_Id" className=""> ID: {gr.id} aliases:  {gr.aliases}</div> */}
                                  <div id ="group_Aliases" className="card-body"></div>
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
              </div>
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