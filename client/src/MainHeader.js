import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';

const Link = require("react-router-dom").Link;

class MainHeader extends Component {

    render() {
        return ( <
            div className = "header" >
            <
            span > Социальные сети < /span>  <
            div className = " aiming-vk-link vk" > < Link to = "/vkPage" > Вконтакте < /Link></div >
            <
            div className = " aiming-instagram-link instagram" > < Link to = "/instagramPage" > Instagram < /Link></div >
            <
            div className = " aiming-odnoclass-link odnok" > < Link to = "/odnoclassPage" > Одноклассники < /Link></div >
            <
            div className = " aiming-facebook-link fb" > < Link to = "/facebookPage" > Facebook < /Link></div >
            <
            div className = " aiming-github-link git" > < Link to = "/gitPage" > GitHub < /Link></div >
            <
            Link to = "/"
            className = "social exit" > Выход < /Link>   < /
            div >
        );
    }
}

export default withRouter(MainHeader);