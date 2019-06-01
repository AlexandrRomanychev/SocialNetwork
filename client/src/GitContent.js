import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';
import './css/github.css';

const Link = require("react-router-dom").Link;

class MainHeader extends Component {

    render() {
        return ( < div className = "content" >
            <
            form action = "/github"
            method = "post" >
            <
            img src = "images/github.png"
            alt = "github" / >
            <
            h2 > Sign in to GitHub < /h2> <
            div class = "loginform"
            id = "loginform" >
            <
            h4 > Username or email address < /h4> <
            input type = "text"
            name = "login"
            class = "login" / >
            <
            h4 > Password < /h4> <
            input type = "password"
            name = "password"
            class = "password" / >
            <
            p > < /p> <
            input type = "submit"
            name = "submit"
            value = "Sign in"
            class = "button" / >
            <
            /div> < /
            form > <
            /div> 
        );
    }
}

export default withRouter(MainHeader);