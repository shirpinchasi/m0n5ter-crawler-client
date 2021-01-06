import React, { Component } from 'react';
import "./Feed.scss";
import "bootstrap";
import config from "../config/development";
import NavBar from "./navbar";
import Loader from "../Loader/Loader";
import Pagination from "react-js-pagination";
import Select from "react-select";
import whiteArrow from "../pictures/whiteArrow.png"

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
          page : 0,
          articlesPerPage:50,
          is_visible: false
          
      };
      
      this.onLoadMore = this.onLoadMore.bind(this)
      this.TitleFilter = this.TitleFilter.bind(this);
      this.NameFilter  = this.NameFilter.bind(this);
      this.groupsFilter  = this.groupsFilter.bind(this);

    };

    componentDidMount(){
      fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles?sort=date,desc&page=${this.state.page}`,{
        method : "GET",
        
      })
      
    .then(res => res.json())
    .then(res => {
        this.setState({
           data : res._embedded.articles,
           isLoading : false,
           page : this.state.page ,
           articlesPerPage:50,
        });
        var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  
        
      }) 
      .catch((err =>{
        console.error(err);
      }));
};
onLoadMore () {
  this.setState({
      articlesPerPage: this.state.articlesPerPage + 50
  })
}
toggleVisibility() {
  if (window.pageYOffset > 300) {
    this.setState({
      is_visible: true
    });
  } else {
    this.setState({
      is_visible: false
    });
  }
}
scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

TitleFilter(e){
  this.setState({searchTitle :e.target.value})
};
NameFilter(e){
  this.setState({searchName : e.target.value })
};
groupsFilter(e){
  this.setState({searchGroup : e.target.value })
}
render(){
const {isLoading , data , searchTitle , searchName, is_visible} = (this.state);
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
                 
              </div>
        
            <div id="bg-dark"> 
            {data.slice(0,this.state.articlesPerPage).filter(TitleFilter(searchTitle)).map((article)=> (
              <div>
              
                <div id ="cards" className="col-12 col-md- col-sm-2 col-xs">
                  <div id = "backgroundTitle">
                        <a href={config.apiUrl +"/" + article.id+"/content"} id ="article_Url" target="_blank" rel="noopener noreferrer" className="card link">
                          <div key={article.tit} id ="article_Title" className="row"> {article.title}</div></a>
                        </div>
                        <div id="date_center">
                              <div key={article.da} id ="article_Date" className="card-subtitle mb-2 text-muted">{article.date}</div>
                                {article.groups.filter(NameFilter(searchName)).map((group)=> ( 
                                  <div>
                                <div key={group.name} id ="group_Name" className="badge badge-success">{group.name}</div>
                                    </div>
                        
                                ))}
                        
                        </div>
                  </div>
                  
                 
              
              
              
                
                </div>
                ))
            
            }
           
</div>   
       
            
     <button 
        style={{ display: this.state.limitTo >= data.length ? 'none' : 'block' }} 
        className='loadMore' 
        onClick={this.onLoadMore}> 
          Load More Articles
</button>
{is_visible && (
              <div onClick={() => this.scrollToTop()}>
                <img src={whiteArrow} className="arrowUp" alt='Go to top'/>
                <div className="text">Go Back To Top</div>
                </div>
                )}  
            
          
        </div>
        
      
      
            
            
            )   
          }
          
  </div>
        

             
  )
  }
}
