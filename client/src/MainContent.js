import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';
import Header from './Header';
import MainAuth from './MainAuth';
import MainHeader from './MainHeader';

const Link = require("react-router-dom").Link;
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;

class MainContent extends Component {

    render() {
        return ( < div > < Link to = "/change"
            className = "change" > Изменить пароль < /Link>  <
            Link to = "/delete"
            className = "change" > Удалить аккаунт < /Link> <
            div className = "hello" >
            <
            span > Начните пользоваться социальными сетями прямо сейчас. < /span> < /
            div > < /div>);
        }
    }

    export default withRouter(MainContent);