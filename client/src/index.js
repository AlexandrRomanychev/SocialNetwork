import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainAuth from './MainAuth';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import VkContent from './VkContent';
import OdnoclContent from './OdnoclContent.js';
import InstContent from './InstContent';
import GitContent from './GitContent';

const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;

ReactDOM.render(
        ( < Router >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Header }
            />   <
            Route path = "/enter"
            component = { Header }
            />   <
            Route path = "/mainPage:login"
            component = { MainHeader }
            /> <
            Route path = "/vkPage"
            component = { MainHeader }
            />  <
            Route path = "/odnoclassPage"
            component = { MainHeader }
            />  <
            Route path = "/instagramPage"
            component = { MainHeader }
            />   <
            Route path = "/facebookPage"
            component = { MainHeader }
            />  <
            Route path = "/gitPage"
            component = { MainHeader }
            />  < /
            Switch > <
            /Router>),
            document.getElementById('header')
        );

        ReactDOM.render(
            ( < Router >
                <
                Switch >
                <
                Route exact path = "/"
                component = { MainAuth }
                /> <
                Route path = "/enter"
                component = { MainAuth }
                /> <
                Route path = "/mainPage:login"
                component = { MainContent }
                />  <
                Route path = "/vkPage"
                component = { VkContent }
                />  <
                Route path = "/odnoclassPage"
                component = { OdnoclContent }
                />  <
                Route path = "/instagramPage"
                component = { InstContent }
                />  <
                Route path = "/gitPage"
                component = { GitContent }
                />  < /
                Switch > <
                /Router>),
                document.getElementById('content')
            );