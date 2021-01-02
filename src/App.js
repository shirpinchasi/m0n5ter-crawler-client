import React, { Component } from 'react';
import './App.scss';
import "bootstrap";
import Charts from "./Charts/Charts";
import Groups from "./groups/Groups";
import Feed from "./Feed/Feed";
import { Route, BrowserRouter as Router, Switch, BrowserRouter,useHistory } from 'react-router-dom';


export default class App extends Component{
render(){
  
  return(
          
              <div id="background">
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
                  
              
            </div>

                   
        )
                  
  }
}