import React, { Component } from 'react';
import './App.css';




export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : {},
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
            data : res,
            isLoading : false
        })
      })
      .catch((err =>{
        console.error(err);
      }));
}



    

render(){
  const data = JSON.stringify((this.state.data));
  const {isLoading} = this.state;
 for (var prop in data){
   if (Object.prototype.hasOwnProperty.call(data , prop)){
       return( 
         <div >
           {isLoading ? (
          <div className="cssload-tetrominos">
          <div className="cssload-tetromino cssload-box1"></div>
          <div className="cssload-tetromino cssload-box2"></div>
          <div className="cssload-tetromino cssload-box3"></div>
          <div className="cssload-tetromino cssload-box4"></div>
        </div>
           ) :(
             <div >
               {data}
               {/* {JSON.stringify(this.state.data._embedded)} */}
               <div>
               </div>
             </div>
           )
           }
           </div>
       )
      }
    }
  }
}