import React, { Component } from 'react';
import './App.css';




export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : {}.toString(),
    };
    console.log("num1");
 };
    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles`,{
      method : "GET",
      body : JSON.stringify()
    })
    .then((u)=>{
      return u;
    })
      .then((j)=>{
        this.setState({
          data : this.state.data.toString()
        })
        console.log(j.json());//returns the json in to the console
        console.log("num2");
        console.log(j.status);
  })     
  
  
}


    

render(){
  console.log(this.state.data.toString());
  console.log("num3");
  const data =  this.state.data.toString();
 Object.entries(data).forEach(([key , value])=>{
     console.log(key, value);
 })
 console.log("here im am again");
       return( 
               <div className="List" key = {data}
               value>
                      <div id ="result" > 
                      
                        </div>
                       <div/>
                  </div>
       )
  }
}

