import React, { Component } from 'react';
import "./BarChartYear.scss"
import {Bar,Chart } from 'react-chartjs-2';
import colorschemes from "chartjs-plugin-colorschemes";
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import moment from "moment";
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


var startOfYear = moment();
startOfYear = startOfYear.startOf("Y");
startOfYear = startOfYear.format("DD-MM-YYYY");
console.log(startOfYear);

var endOfYear = moment();
endOfYear = endOfYear.endOf("Y");
endOfYear = endOfYear.format("DD-MM-YYYY");
console.log(endOfYear);


var startOfYear = moment();
startOfYear = startOfYear.startOf("Y");
startOfYear = startOfYear.format("DD-MM-YYYY");
console.log(startOfYear);

var endOfYear = moment();
endOfYear = endOfYear.endOf("Y");
endOfYear = endOfYear.format("DD-MM-YYYY");
console.log(endOfYear);

var startYear2015 = moment("2015");
startYear2015 = startYear2015.startOf("Y");
startYear2015 = startYear2015.format("DD-MM-YYYY")

var endYear2015 = moment("2020");
endYear2015 = endYear2015.endOf("Y");
endYear2015 = endYear2015.format("DD-MM-YYYY");




export default class BarChartYear extends Component{
    constructor(props){
      super(props);
      this.state = {
          data : [],
          isLoading : true,
          names : ""
      };

      
    };

  
    componentDidMount(){
      fetch("https://m0n5ter-crawler.herokuapp.com/api/statistics/group?startDate=" + startOfYear + "&endDate=" +  endOfYear,{
        method : "GET",
      })
      .then(res => {
        return res.json()})
      .then(res => {
        this.setState({
           data :res.groups,
           isLoading : false,
           names : ""
           
           
        })
      })
      .catch((err =>{
        console.error(err);
      }));
    };
      handleChange(e, name) {
      this.setState({ [name] : e})
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
                
                  <div id="BarChartYear"><p className ="title"> Top of the year</p><Dropdown className="dropdown" value={this.state.options} options={options} onChange={(e) => this.handleChange(e)}><options value={options}/></Dropdown> 
                  
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
