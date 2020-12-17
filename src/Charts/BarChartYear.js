import React, { Component } from 'react';
import "./BarChartYear.scss"
import {Bar } from 'react-chartjs-2';
import colorschemes from "chartjs-plugin-colorschemes";
import config from "../config/development"
import { plugins } from 'chart.js';






export default class PieChartYear extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
         
      }; 
    };

    componentDidMount(){
      fetch(config.apiYearSort ,{
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
  const { data} = (this.state);
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
              <div>
                  <div id="BarChartYear"><p className ="title"> Top of the year</p>
                     <Bar id="chart"
                        data= {{
                            labels: labels,
                            datasets: [{       
                                data :counts,
                                label:"top group of the year"
                            }]
                            
                            
                        }}
                        />
                    </div>

                        
                  
                    
                </div>
</div>

)
}}