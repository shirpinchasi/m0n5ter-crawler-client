import React, { Component } from 'react';
import "./Feed.scss"
import "bootstrap";
import Sidebar from './Sidebar';
import config from "../config/development";




function TitleFilter(searchTitle){
  return function(x){
     return x.title.toLowerCase().includes(searchTitle.toLowerCase()) || !searchTitle 
    
  }
}

function groupsFilter(searchGroup){
  return function(x){
     return x.groups.toLowerCase().includes(searchGroup.toLowerCase()) || !searchGroup
    
  }
}

function NameFilter(searchName){
  return function(x){
     return x.name.toLowerCase().includes(searchName.toLowerCase()) || !searchName
    
  }
}




export default class Feed extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          searchTitle : "",
          searchGroup : "",
          searchName : ""
          
          
      }; 
      this.TitleFilter = this.TitleFilter.bind(this)
      this.NameFilter  = this.NameFilter.bind(this)
      this.groupsFilter  = this.groupsFilter.bind(this)
    };


    componentDidMount(){
      fetch(config.apiUrl + config.articleSort,{
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

TitleFilter(e){
  this.setState({searchTitle :e.target.value})
}
NameFilter(e){
  this.setState({searchName : e.target.value })
}
groupsFilter(e){
  this.setState({searchGroup : e.target.value })
}

  
render(){
  const {isLoading , data , searchTitle,searchName,searchGroup} = (this.state);
 
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
                  <input id="search1" label = "search" value={searchTitle} type="text" placeholder="search here for title" onChange={this.TitleFilter}/>
                  <input id="search2" label = "search" value={searchName} type="text" placeholder="search here for name" onChange={this.NameFilter}/>
                  {/* <input id="search2" label = "search" value={searchGroup} type="text" placeholder="search here for group" onChange={this.groupsFilter}/> */}
              <a className="navbar-brand " href="#">M0n5ter Crawler</a>
              <Sidebar/>
              
          </div>
            <div id="bg-dark"> 
            {data.filter(TitleFilter(searchTitle)).map((article) => article.groups.filter(NameFilter(searchName)).map((gr)=>(
              <div>
                <div id ="cards" className="col-12 col-md- col-sm-2 col-xs">
                <div id = "articles" className="col">
                  <div id = "backgroundTitle">
                        <a href={config.apiUrl +"/" + article.id+"/content"} id ="article_Url" target="_blank" rel="noopener noreferrer" className="card link"><div key={article.title} id ="article_Title" className="row"> {article.title}</div></a>
                        </div>
                        
                        <div key={article.date} id ="article_Date" className="card-subtitle mb-2 text-muted">{article.date}</div>
                        
                        <div className ="groups">
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
))
            
              
              
              
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
             ) }  

            </div>
            </div>
            
            
            )   
          }
          
        </div>
        

        
        )
  }
}