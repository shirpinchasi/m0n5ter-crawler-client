import React, { Component } from 'react';
import "./BarChartYear.scss"
import {Bar,Chart } from 'react-chartjs-2';
import colorschemes from "chartjs-plugin-colorschemes";
import config from "../config/development"
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';

export default class BarChartYear extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
         options : ""
      }; 
this.onChange = this.onChange.bind(this)
this.handleChange = this.handleChange.bind(this)
      
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
           options:""
        })
      })
      .catch((err =>{
        console.error(err);
      }));
    };
    onChange(e) {
        this.handleChange(e)
      }
      handleChange(e) {
        this.setState({
          options: e
        });
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

  function updateData() {
    Bar.data[options].data = this.onChange
    Bar.update();
}



  return(
    
      <div>
              <div>
                  <div id="BarChartYear"><p className ="title"> Top of the year</p><Dropdown className="dropdown" value={this.state.options} options={options} onChange={e => this.handleChange(e)}><options value={options}/></Dropdown> 
                  
                     <Bar id="chart"
                     
                        data= {{
                            labels: options,
                            
                            datasets: [{       
                                data :counts,
                                label:"top group of the year",
                                options: {
                                    defaults:{
                                    scales: {
                                        yAxes: [{ 
                                            
                                            ticks: {
                                                
                                                beginAtZero: true,
                                                
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
