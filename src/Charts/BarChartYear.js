import React, { Component } from 'react';
import "./BarChartYear.scss"
import {Bar } from 'react-chartjs-2';
import colorschemes from "chartjs-plugin-colorschemes";
import config from "../config/development"
import { plugins } from 'chart.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



export default class BarChartYear extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
         
      }; 
      this.onChange = this.onChange.bind(this)
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
    onChange = (e)=>{
        this.setState({
            _onSelect :e.target.value
        })
    }
    

     

render(){
  const { data} = (this.state);
  const labels = [];
  const counts = [];
  const options = [];
  
  const len = data.length;
  for (var i=0; i<len; i++){
    labels.push(
           data[i].name
      );
      counts.push(
        data[i].articlesCount
   );
  };
  labels.forEach((element)=>{
      options.push(element)
  });

  return(
      
      <div>
              <div>
                  <div id="BarChartYear"><p className ="title"> Top of the year</p><Dropdown className="dropdown" options={options} _onSelect={this.onChange} value={options} placeholder="select group to show" arrowClosed={<span className="arrow-closed" />} arrowOpen={<span className="arrow-open" />}/>
                  
                     <Bar id="chart"
                        data= {{
                            
                            labels:options,
                            datasets: [{       
                                data :counts,
                                beginAtZero:true,
                                min:0,
                                label:"top group of the year",
                                options: {
                                    
                                    defaults:{
                                    scales: {
                                        yAxes: [{ 
                                        
                                            ticks: {
                                                
                                                beginAtZero: true,
                                                max:10,
                                                min:0,
                                            },
                                            
                                        }]
                                    },
                                    
                                }},
                                
                            
                            }],
                            
                            
                        }}
                        
                        
                        />
                    </div>
                    

                        
                  
                    
                </div>
</div>

)
}};
