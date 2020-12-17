import React, { Component} from 'react';
import "./Groups.scss";
import "bootstrap";
import NavBar from "../Feed/navbar";
import config from "../config/development"
import Loader from "../Loader/Loader";


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
               <Loader/>
           ):(
               
               <div id="bg-dark"> 
                        <NavBar/>
                        <div id ="searchesGroup">
                        <input  id="search1" label = "search" value={searchName} type="text" placeholder="search here for name " onChange={this.nameFilter }/>
                        <input id="search2" label = "search" value={searchDesc} type="text" placeholder="search here for description" onChange={this.descFilter}/>
                            </div>
                        
                            
                      
                    
                    
                    <div className="d-flex justify-content-around">
                      
                        
                    
                      <h1 className="groupHeader">Group Page</h1>
                          {data.filter(nameFilter(searchName)).filter(descFilter(searchDesc)).map((group)=>(
                            <div className="d-flex">
                              <div id="cards2" className="col-12 col-md- col-sm-2 col-xs">
                              <div id="groups">
                                  <div key={group.n} id ="group_Names">{group.name}</div>
                                  <div id="scroll_desc">
                                      <div key={group.desc} id="group_desc">{group.description} <a id="show-more" className="show-less"></a>
                                      <a id="show-less" className="show-more"></a></div>
                                  </div>
                                  {/* <div id="scroll_alias">
                                      
                                      <div key={group.alias} id="group_aliases">{group.aliases}</div>
                                  </div> */}
                                    <div className="lastScan">
                                        <div key={group.last_scan} id="group_lastScan"> last scan : {group.lastScan}</div>
                                  </div>
                               </div>
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