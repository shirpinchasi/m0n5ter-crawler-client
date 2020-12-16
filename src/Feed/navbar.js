import React, { Component } from 'react';
import "./navbar.scss"
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHome, faUsers, faChartPie } from "@fortawesome/free-solid-svg-icons"
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default class NavBar extends Component{
    render(){
        return(
            <div className ="navbar navbar-expand-lg mt-2 ">
                <a className="navbar-brand" href="#">M0n5ter Crawler</a>
                <div className="links">
                    <a><Link to= "/" alt ="/" ><FontAwesomeIcon icon={faHome} className="fa-home fa-sm"></FontAwesomeIcon>Home</Link></a>
                    <a><Link to= "./Groups" alt ="Groups" ><FontAwesomeIcon icon ={faUsers} className="fa-users fa-sm"></FontAwesomeIcon>Groups</Link></a>
                    <a><Link to= "./BarChart" alt ="BarChart" ><FontAwesomeIcon icon = {faChartPie} className="fa-chart-pie fa-sm"></FontAwesomeIcon>Statistics</Link></a>
                    </div>
            </div>
        )
    }
}




