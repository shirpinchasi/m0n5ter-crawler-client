import React, { Component } from 'react';
import './App.scss';
import "bootstrap";
import Sidebar from './Sidebar';
import config from "./config/development";



export default class Feed extends Component{
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
          <div></div>
          
              
           
           
           
       
  )}
}