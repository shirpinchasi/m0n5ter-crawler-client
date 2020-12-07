import React, { Component } from 'react';
import './App.scss';
import "bootstrap";
import Groups from "./Groups";
import Feed from "./Feed";
import SearchField from "./SearchField";
import { Route, BrowserRouter as Router, Switch, BrowserRouter,useHistory } from 'react-router-dom';
import config from "./config/development"
import Search_box from "./search-box"



export default class App extends Component{
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
                    <div>
                      <BrowserRouter history={useHistory}>
                      
                      <Switch>  
                      
                        <Route path="/Groups">
                            <Groups Component={Groups}/>
                        </Route>
                        <Route path="/" exact={true} Component={Feed}>
                              <Feed Component={Feed}/>
                        </Route>
                      </Switch>
                  
                      </BrowserRouter>
                    </div>
                  )
                }
            </div>

                   
        )
                  
  }
}