import React, { Component } from 'react';
import './App.scss';
import "bootstrap";

export default class App extends Component{
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
          <div>
            </div>
          {isLoading ? (
            <div className="cssload-tetrominos">
              <div className="cssload-tetromino cssload-box1"></div>
              <div className="cssload-tetromino cssload-box2"></div>
              <div className="cssload-tetromino cssload-box3"></div>
              <div className="cssload-tetromino cssload-box4"></div>
            </div>
            ) :(
              
            <div>
                
            {
              data.map((article)=>(
                <div className = "articles">
                        <div className ="article_Title"> Title: {article.title}</div>
                        <div className ="article_Date">Date: {article.date}</div>
                        <a href ={"" + article.url} className ="article_Url" target="_blank" rel="noopener noreferrer"> url link: {article.url}</a><br/>
                        <a href = {article._links.self.href} className="article_linksHref" target="_blank"  rel="noopener noreferrer">  href :{article._links.self.href}</a><br/>
                        <a href = {article._links.article.href} className="article_Href" target="_blank"  rel="noopener noreferrer"> article href :{article._links.article.href}</a><br/>
                        <a href = {article._links.groups.href} className="article_GroupsHref" target="_blank"  rel="noopener noreferrer"> group href :{article._links.groups.href}</a>
                        
                        <div className ="groups">
                          {article.groups.map((gr)=>(
                            
                                  <div className ="group_Id"> group id:{gr.id}
                                      <div className ="group_Name">group name : {gr.name}</div>
                                      <div className ="group_Desc">group description : {gr.description}</div>
                                      <div className ="group_Aliases">group aliases : {gr.aliases}</div>
                                      <div className ="group_Last_Scan">group last scan : {gr.lastScan}</div>
                                  </div>
              ))}
              </div>
              </div>
              
              ))
            }
                <div >
                    <div>
                    {/* {
                      this.state.data.map((obj, i )=> 
                        <div key = {i}>
                          {obj}
                        </div>
                      )
              
                    }) */}
                    <div>
              
                      </div>           
          
                      </div>
                </div>
                <div>
                </div>
            </div>
            )
          }
        </div>

        
        )
  }
}