import React, { Component } from 'react';
import './App.scss';
import "bootstrap";
import Charts from "./Charts/Charts";
import Groups from "./groups/Groups";
import Feed from "./Feed/Feed";
import Loader from "./Loader/Loader"
import { Route, BrowserRouter as Router, Switch, BrowserRouter,useHistory } from 'react-router-dom';




export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
      }; 
    };

    componentDidMount(){
      fetch("https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc",{
        method : "GET",
      })
      .then(res => {
        return res.json()})
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
  const {isLoading} = (this.state);
  
  return(
          
              <div id="background">
                {isLoading ? (
                  <Loader/>
                  ) :(
                    <div>
                      <BrowserRouter history={useHistory}>
                      
                      <Switch>  
                      <Route path="/Charts">
                            <Charts Component={Charts}/>
                        </Route>
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