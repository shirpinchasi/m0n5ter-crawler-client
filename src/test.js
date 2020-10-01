// import React, { Component } from 'react';
// import './App.css';




// export default class App extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//           data : {}
//     }
//  };



//     componentDidMount(){
//       fetch(`https://m0n5ter-crawler.herokuapp.com/api/articles/`,{
//       method : "GET",
//       body : JSON.stringify()
//     })
//     .then(res => res.json(res))
//       .then(res => {
//         this.setState({
//           data : res
//         })
//       })
//       .catch((err =>{
//         console.error(err);
//       }));
// }



    

// render(){
//   const data = JSON.parse(JSON.stringify(this.state))
//   Object.keys(data).forEach((data)=>{
//     console.log(this.state.data);
//     return(data)
//   })
//        return( 
//          <div className ="List">
//             {JSON.stringify(data)}
//          </div>
      
//        )
//   }
// }




// const data = JSON.parse(JSON.stringify(this.state))
//   const {isLoading} = this.state;
//   const map = new Map(Object.entries(data));
//   for (const prop in map) {
//     console.log((`${prop} : ${map[prop]}`));
//   }














// export default FetchData;