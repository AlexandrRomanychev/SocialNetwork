import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';

class Header extends Component {

    render() {
        return ( 
        	<div className = "header">
            <span> Социальные сети </span> 
            </div >
        );
    }
}

export default withRouter(Header);