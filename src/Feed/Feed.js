import React, {useState, Component } from 'react';
import "./Feed.scss";
import "bootstrap";
import config from "../config/development";
import NavBar from "./navbar";
import Loader from "../Loader/Loader";
import Pagination from "react-js-pagination";


function TitleFilter(searchTitle){
  return function(x){
     return x.title.toLowerCase().includes(searchTitle.toLowerCase()) || !searchTitle 
    
  };
};

function NameFilter(searchName){
  return function(x){
     return x.name.toLowerCase().includes(searchName.toLowerCase()) || !searchName
    
  };
};

export default class Feed extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          searchTitle : "",
          searchName : "",
          activePage : 0,
          maxPage :3000,
          articlesPerPage:22
      };
      
      
      this.TitleFilter = this.TitleFilter.bind(this);
      this.NameFilter  = this.NameFilter.bind(this);
      this.groupsFilter  = this.groupsFilter.bind(this);
      
     
    };

    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc&page=${this.state.activePage}&size=20` ,{
        method : "GET",
        
        
      })
    .then(res => res.json())
    .then(res => {
        this.setState({
           data : res._embedded.articles,
           isLoading : false,
           articlesPerPage : 22,
           activePage : Math.ceil(res._embedded.articles.length / this.state.maxPage)
           
           
        });
        
      }) 
      .catch((err =>{
        console.error(err);
      }));
      
};

TitleFilter(e){
  this.setState({searchTitle :e.target.value})
};
NameFilter(e){
  this.setState({searchName : e.target.value })
};
groupsFilter(e){
  this.setState({searchGroup : e.target.value })
};
handlePageChange(activePage){
  console.log("active page is " + activePage );
  this.setState({activePage : activePage})
}

render(){
const {isLoading , data , searchTitle , searchName, activePage,articlesPerPage,maxPage} = (this.state);
const startIndex = (activePage -1) * articlesPerPage;
console.log(data);
console.log(activePage);
  return( 
            <div id="background">
                {isLoading ? (
                  <Loader/>
                  ) :(
                    
            <div id="bg-dark">   
              <NavBar/>
              <div id="searchFeed">
                  <input id="search3" label = "search" value={searchTitle} type="text" placeholder="search here for title" onChange={this.TitleFilter}/>
                  <input id="search4" label = "search" value={searchName} type="text" placeholder="search here for name" onChange={this.NameFilter}/>
                  <Pagination
                  activePage={activePage}
                  itemsCountPerPage={articlesPerPage}
                  totalItemsCount ={maxPage}
                  onChange={this.handlePageChange.bind(this)}
                  />
              </div>
        
            <div id="bg-dark"> 
            page {activePage}
            {data.slice(startIndex, startIndex + articlesPerPage).filter(TitleFilter(searchTitle)).map((article) => article.groups.filter(NameFilter(searchName)).map((groups)=>(
              <div>
                
             
              {/* {console.log(...article.groups)} */}
                <div id ="cards" className="col-12 col-md- col-sm-2 col-xs">
                  <div id = "backgroundTitle">
                        <a href={config.apiUrl +"/" + article.id+"/content"} id ="article_Url" target="_blank" rel="noopener noreferrer" className="card link">
                          <div key={article.tit} id ="article_Title" className="row"> {article.title}</div></a>
                        </div>
                        <div id="date_name_center">
                        <div key={article.da} id ="article_Date" className="card-subtitle mb-2 text-muted">{article.date}</div>
                              <div className="badge badge-success">
                                <div key={article.group} id ="group_Name" className="">{groups.name}
                              </div>
                              </div>
                        </div>
                        
                  </div>
                  
                 
              </div>
              
              
                ))
            
  )} 
     
            
            

        </div>
        <Pagination
                  
                  activePage={activePage}
                  itemsCountPerPage={23}
                  nextPage={this.nextPage}
                  totalItemsCount ={300}
                  onChange={this.handlePageChange.bind(this)}
                  />
        
      </div>
      
            
            
            )   
          }
          
  </div>
        

             
  )
  }
}


