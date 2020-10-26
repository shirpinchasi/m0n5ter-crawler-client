import React, { Component } from 'react';
import './App.scss';
import "bootstrap";

export default class Config extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true
    }
 };

    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles/`,{
      method : "GET",
    })
    .then(res => res.json(res))
      .then(res => {
        this.setState({
           data :res._embedded.articles,
           isLoading : false
        })
      })
      .catch((err =>{
        console.error(err);
      }));
    }

render(){
  const {isLoading , data} = (this.state);
  console.log(data);
  
  return(
          
            <div>
                {isLoading ? (
                  <div className="cssload-tetrominos">
                    <div className="cssload-tetromino cssload-box1"></div>
                    <div className="cssload-tetromino cssload-box2"></div>
                    <div className="cssload-tetromino cssload-box3"></div>
                    <div className="cssload-tetromino cssload-box4"></div>
                  </div>
                  ) :(
                    
            <div>      
            {data.map((article)=>(
                <div id ="cards" className="col-12 col-md-5 ">
                <div id = "articles" className="col">
                  <div id = "backgroundTitle">
                        <div id ="article_Title" className="row"> {article.title}</div>
                        </div>
                        <div id ="article_Date" className="card-subtitle mb-2 text-muted">Date: {article.date}</div>
                        <div className ="groups">
                          {article.groups.map((gr)=>(
                            <div id="groups">
                                  <div id ="group_Id" className=""> group id: {gr.id}</div>
                                  <div id ="group_Name" className="">group name:  {gr.name}</div>
                                      {/* <div id ="group_Desc" className="card-body">group description : {gr.description}</div> */}
                                      <div id ="group_Aliases" className="card-body">group aliases:  {gr.aliases}</div>
                                      {/* <div id ="group_Last_Scan" className="card-body">group last scan : {gr.lastScan}</div> */}
                                  
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
              
              ))
            }  
            </div>
            
            )   
          }
        </div>
        

        
        )
  }
}