import React, { Component } from 'react';
import './App.scss';
import "bootstrap";
import Groups from "./Groups"
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';



export default class Sidebar extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
        
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
  const {isLoading,data} = this.state;
  return(
    <div>
            <div>
             
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
            <i className="fa fa-bars" id="btn"></i>
            <i className="fa fa-times" id="cancel"></i>
            </label>

                <div className="sidebar">
                        <input className="input" name="filterData"type="text" onChange={this.handleChange}/>
                            {/* <Router history="#">
                                <Route path ="./Groups" Link to="/Groups"><i className="fa fa-users"></i>Groups</Route>
                            </Router> */}
                            
                    <ul>
                    <Link to= "/" alt ="/" ><i className="fa fa-home"></i>Home</Link>
                    <Link to= "./Groups" alt ="Groups" ><i className="fa fa-users"></i>Groups</Link>
                    <li><a href="#"><i className="fa fa-info"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
                    <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
                    <li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
                    <li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
                    
                    </ul>
                            
             </div>
        </div>
            
              
    </div>  
    )
  }
}