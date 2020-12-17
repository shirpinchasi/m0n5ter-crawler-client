import React, { Component } from 'react';
import Loader from "../Loader/Loader"
import "./Charts.scss"
import {Pie } from 'react-chartjs-2';
import colorschemes from "chartjs-plugin-colorschemes";
import NavBar from "../Feed/navbar";
import config from "../config/development"
import PieChartMonth from "./PieChartMonth";
import BarChartYear from "./BarChartYear";







export default class Charts extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
         
      }; 
    };

    componentDidMount(){
      fetch(config.apiWeekSort ,{
        method : "GET",
      })
      .then(res => {
        return res.json()})
      .then(res => {
        this.setState({
           data :res.groups,
           isLoading : false,
        })
      })
      .catch((err =>{
        console.error(err);
      }));
      
    };

    
     

render(){
  const {isLoading, data} = (this.state);
  const labels = [];
  const counts = [];
  const len = data.length;
  for (var i=0; i<len; i++){
    labels.push(
           data[i].name
      );
      counts.push(
        data[i].articlesCount
   );
  };
  console.log(counts);
  return(
      
      <div>
          {isLoading ? (
              <Loader/>
          ) : (
            
              <div id="bgColor">
                <NavBar/>
                  <div id="pieChart"><p className ="title"> Last 7 Days Top Groups</p>
                     <Pie id="chart"
                     
                        data ={{   
                            datasets : [{   
                            
                                    data : counts,
                                options:{
                                    legend:{
                                        labels:{
                                            fontColor:"black",
                                             plugins:{
                                                colorschemes : {
                                                    sceme : "brewer.RdYlBu11",
                                                    
                                            }
                                    }
                                }
                                }
                                }
                            }],

                            labels : labels ,
                            
                        }
                    }
                        
                        />
                        
                    </div>
                    <div id="ajustMonth">
                        <PieChartMonth/>
                    </div>
                    <div id="ajustYear">
                      <BarChartYear/>
                    </div>
                        
                  
                    
                </div>
      
          )
}
</div>

)
}}