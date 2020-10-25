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
          <div>
            </div>
          {isLoading ? (
            <div className="cssload-tetrominos">
              <div className="cssload-tetromino cssload-box1"></div>
              <div className="cssload-tetromino cssload-box2"></div>
              <div className="cssload-tetromino cssload-box3"></div>
              <div className="cssload-tetromino cssload-box4"></div>
            </div>
            ) :(
              
            <div>
             
                <div >
                    <div>
                    {/* {
                      this.state.data.map((obj, i )=>
                        <div key = {i}>
                          {data.groups}
                        </div>
                      )
              
                    }) */}
          
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