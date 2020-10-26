import React, { Component } from 'react';
import './App.css';






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
                <div>{article.groups.map((gr)=>(
                  <div className ="groups">
                          <div className ="groupId">group id:  {gr.id}<div>
                          <div className ="groupName"> group name : {gr.name} </div>
                          <div className ="groupDesc">group decription : {gr.description}</div>
                          <div className ="groupAliases"> group aliases : {gr.aliases}</div>                                  
                                                            
                                                            
                  </div>
                  </div>
                                          
                        
                        <div className ="articleTitle"> Title: {article.title}
                        <div className ="articleDate">Date: {article.date} 
                        
                        
                        
                    )    </div>
              </div>
              </div>

                ))}
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