// import React from "react";

// const { Component } = require("react")


// const SearchBox =({searchChange}) =>{
//     return(
//         <input type="search"
//         className="search"
//         placeholder="search here..."
//         onChange = {searchChange}
//         />
//     )
// }
// export default SearchBox;



// import React,{useEffect ,useState} from "react";


// function Search(){
    
//     const [query, setQuery] = useState("");
//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         if(!query) {
//             return;
//         }
//         getUsers();
//     }, [query]);


//     async function getUsers(){
//         try{
//             const res = await fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles/${query}`);
//             const users = await res.json();
//             setData(users)
//         }catch(err){
//             console.log(err);
            
//         }
//     }


//     function hasNoResults(){
//         return query && data.length === 0;
//     }

//         return(
//             <div id="Search">
//                 <div id="search" className="col-12 col-lg-6 mt-3">
//                     <input id="form-control"
//                         placeholder="Search profile here.."
//                         value={query}
//                         onChange={(e)=>setQuery(e.target.value)}/>
                        
//                 </div>
//                 <div className = "d-flex flex-wrap">
//                     { hasNoResults()
//                     ?<div className="Search__no-results"><div  className="far fa-frown fa-lg"/> No results found</div>
//                     :data.map(data =><div user={data} key={data.name} />)
//                     }
//                 </div>
//             </div>
//         )
       
// }
// export default Search;




// import React, {Component} from "react"


// class Search extends Component{
//     render(){
//         const {data,searchText}= this.props;
//         return(
//             <div>
//                 {data.filter((item)=>{
//                     return item.name.toLowerCase().includes(searchText.toLowerCase())
//                 }).map((item)=>{
//                     return(
//                         <div key={item.object}>
//                             {item.name}
//                             {item.title}
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }
// export default Search;