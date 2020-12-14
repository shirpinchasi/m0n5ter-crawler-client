import React, { Component} from 'react';
import "./Groups.scss"
import "bootstrap";
import Sidebar from "../Feed/Sidebar";
import config from "../config/development"



function nameFilter(searchName){
  return function(x){
     return x.name.toLowerCase().includes(searchName.toLowerCase()) || !searchName
    
  }
}
function descFilter(searchDesc){
  return function(x){
     return x.description.toLowerCase().includes(searchDesc.toLowerCase()) || !searchDesc
    
  }
}
// function searchingForAliases(searchAlias){
//   return function(x){
//      return x.aliases.toLowerCase().includes(searchAlias.toLowerCase()) || !searchAlias
    
//   }
// }




export default class Groups extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          searchName : "",
          searchDesc:"",
          // searchAlias : "",
    }; 
    this.nameFilter  = this.nameFilter.bind(this)
    this.descFilter = this.descFilter.bind(this)
    
 
 };

    componentDidMount(){
      fetch(config.apiSortName,{
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
nameFilter(e){
  this.setState({searchName:e.target.value})
}
descFilter(e){
  this.setState({searchDesc : e.target.value })
}
// searchHandlerAliases(e){
//   this.setState({searchAlias : e.target.value })
// }

    

render(){
  const {isLoading, data,searchName, searchDesc} = (this.state);
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
                    <input  id="search1" label = "search" value={searchName} type="text" placeholder="search here for name " onChange={this.nameFilter }/>
                    <input id="search2" label = "search" value={searchDesc} type="text" placeholder="search here for description" onChange={this.descFilter}/>
                      <h1 className="groupHeader">Group Page</h1>
                          {data.filter(nameFilter(searchName)).filter(descFilter(searchDesc)).map((group)=>(
                            <div className="d-flex">
                              <div id="cards2" className="col-12 col-md- col-sm-2 col-xs">
                               <div key={group.n} id ="group_Names">{group.name}
                               </div>
                               <div key={group.desc} id="group_desc">{group.description}</div>
                               <div key={group.alias} id="group_aliases">{group.aliases}</div>
                               
                              
                                  
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