import React, { Component} from 'react';
import "./Groups.scss"
import "bootstrap";
import Sidebar from "../Feed/Sidebar";

function searchingForTitle(term){
  return function(x){
     return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    
  }
}
function searchingForDesc(searchDesc){
  return function(x){
     return x.description.toLowerCase().includes(searchDesc.toLowerCase()) || !searchDesc
    
  }
}




export default class Groups extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          term : "",
          searchDesc:""
    }; 
    this.searchHandlerName  = this.searchHandlerName.bind(this)
    this.searchHandlerDesc  = this.searchHandlerDesc.bind(this)
 
 };

    componentDidMount(){
      fetch("https://m0n5ter-crawler.herokuapp.com/api/groups?sort=name",{
      method : "GET",
    })
    .then(res => res.json())
      .then(res => {
        this.setState({
            data:res._embedded.groups,
           isLoading : false,
        });
      })
      .catch((err =>{
        console.error(err);
      }));
      
};
searchHandlerName(e){
  this.setState({term :e.target.value})
}
searchHandlerDesc(e){
  this.setState({searchDesc : e.target.value })
}

    

render(){
  const {isLoading, data,term, searchDesc} = (this.state);
  return(
        <div>   
           {isLoading ? (
               <div className="cssload-tetrominos">
               <div className="cssload-tetromino cssload-box1"></div>
               <div className="cssload-tetromino cssload-box2"></div>
               <div className="cssload-tetromino cssload-box3"></div>
               <div className="cssload-tetromino cssload-box4"></div>
             </div>
           ):(
               
               <div id="bg-dark"> 
                        <div className ="navbar navbar-expand-lg mt-2 ">
                        <a className="navbar-brand " href="#">M0n5ter Crawler</a>
                        <Sidebar/>
                    </div>
                    
                    <div className="d-flex justify-content-around">
                    <input  id="search1" label = "search" value={term} type="text" placeholder="search here for name " onChange={this.searchHandlerName}/>
                    <input id="search2" label = "search" value={searchDesc} type="text" placeholder="search here for description" onChange={this.searchHandlerDesc}/>
                      <h1 className="groupHeader">Group Page</h1>
                          {data.filter(searchingForTitle(term)).filter(searchingForDesc(searchDesc)).map((group)=>(
                            <div className="d-flex">
                              <div id="cards2" className="col-12 col-md- col-sm-2 col-xs">
                               <div key={group.n} id ="group_Names">{group.name}
                               </div>
                               <div key={group.desc} id="group_desc">{group.description}</div>
                               
                              
                                  
                              </div>
                          </div>   
                                         
              ))}
              
                       
              
              </div>
              
              
              
            </div>

                          
            
            )   
               
        
  }
               </div>
               
           )}
            
}