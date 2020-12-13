import React, { Component } from 'react';
import '../App.scss';
import "bootstrap";
import { BrowserRouter as Router, Link } from 'react-router-dom';



export default class Sidebar extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          searchTerm : ""
          
        
    }; 
 };

    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc`,{
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
    
     

render(){
  const {data} = this.state;
  
  return(
    <div>
            <div>
             
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
            <i className="fa fa-bars" id="btn"></i>
            <i className="fa fa-times" id="cancel"></i>
            </label>
              
                <div className="sidebar">
                  
                        
                            
                            
                    <ul>
                    <li><a><Link to= "/" alt ="/" ><i className="fa fa-home"></i>Home</Link></a></li>
                    <li><a><Link to= "./Groups" alt ="Groups" ><i className="fa fa-users"></i>Groups</Link></a></li>
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