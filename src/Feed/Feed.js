import React, { Component } from 'react';
import "./Feed.scss"
import "bootstrap";
import Sidebar from './Sidebar';
import config from "../config/development";
import NavBar from "./navbar";
import Loader from "../Loader/Loader"




function TitleFilter(searchTitle){
  return function(x){
     return x.title.toLowerCase().includes(searchTitle.toLowerCase()) || !searchTitle 
    
  };
};

function NameFilter(searchName){
  return function(x){
     return x.name.toLowerCase().includes(searchName.toLowerCase()) || !searchName
    
  };
};






export default class Feed extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          searchTitle : "",
          searchName : "",
        
          
          
          
      }; 
      this.TitleFilter = this.TitleFilter.bind(this);
      this.NameFilter  = this.NameFilter.bind(this);
      this.groupsFilter  = this.groupsFilter.bind(this);
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
           
        });
      })
      .catch((err =>{
        console.error(err);
      }));
      
};

TitleFilter(e){
  this.setState({searchTitle :e.target.value})
};
NameFilter(e){
  this.setState({searchName : e.target.value })
};
groupsFilter(e){
  this.setState({searchGroup : e.target.value })
};

  
render(){
  const {isLoading , data , searchTitle , searchName} = (this.state);
 
  return( 
            <div id="background">
                {isLoading ? (
                  <Loader/>
                  ) :(
                    
            <div className=" bg-dark text-white">   
              <NavBar>
                  <input id="search3" label = "search" value={searchTitle} type="text" placeholder="search here for title" onChange={this.TitleFilter}/>
                  <input id="search4" label = "search" value={searchName} type="text" placeholder="search here for name" onChange={this.NameFilter}/>
              </NavBar>
                  
                 
              
              
              
          
         
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