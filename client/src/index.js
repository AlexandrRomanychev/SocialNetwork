import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainAuth from './MainAuth';

const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;

ReactDOM.render( 
<
    Router >
    <
    Switch >
    <
    Route exact path = "/"
    component = { Header }
    /> <
    Route path = "/enter"
    component = { Header }
    />      < /
    Switch > <
    /Router>,
    document.getElementById('header')
);

ReactDOM.render( <
    Router >
    <
    Switch >
    <
    Route exact path = "/"
    component = { MainAuth }
    /> <
    Route path = "/enter"
    component = { MainAuth }
    />  < /
    Switch > <
    /Router>,
    document.getElementById('content')
);