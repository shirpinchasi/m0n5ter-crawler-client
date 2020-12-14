import React, { Component } from 'react';
import "./navbar.scss"
import "bootstrap";
import Sidebar from './Sidebar';


export default class NavBar extends Component{
    render(){
        return(
            <div className ="navbar navbar-expand-lg mt-2 ">
                <a className="navbar-brand" href="#">M0n5ter Crawler</a>
                
                <Sidebar/>
            </div>
        )
    }
}




