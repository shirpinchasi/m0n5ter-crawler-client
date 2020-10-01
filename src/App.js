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
  const data = JSON.parse(JSON.stringify(this.state))
  const {isLoading} = this.state;
    const map = new Map(Object.entries(data));
    console.log(map);
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
             <div>
               {JSON.stringify(Object.entries(data))}
               <div>
                
               </div>
             </div>
           )
           }
           </div>
       )
          
  }
}