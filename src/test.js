import { primetime } from "prime-time";

console.log(primetime().localise('WDD-MMMM-DD'))




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




// const mapObject = require('map-obj');
//       const newObj = mapObject({data},(key , value)=>[value,key]);
//       console.log(newObj);
      


 // const mapObject = require('map-obj');
    //   const newObj = mapObject(data,(key , value)=>[value,key]);
    //   console.log(newObj);




    // {
    //     this.state.data.map((obj, i )=>
    //       <div key = {i}>
    //         {obj.groups}
    //       </div>
    //     )

    //   })






    // {this.state.data.map((key,value)=>{
    //     return <div key = {value}>
    //       {key.id}
    //       {key.name}


// export default FetchData;





// handleChange(e){
//     this.setState({filter : e.target.value});
//     e.preventDefault();
//     console.log(e);
//   }