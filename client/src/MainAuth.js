import React, { Component } from 'react';
import User from './auth/User';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;
const Redirect = require("react-router-dom").Redirect;

const Link = require("react-router-dom").Link;
class MainAuth extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state.login = '';
        this.state.password = '';
        this.state.regSuccessMessage = '';
        this.state.regFailMessage = '';
        this.state.logFailMessage = '';
        this.state.sucLog = '';
    }
    regButtonClickHandler = () => {
        User.register(this.state.login, this.state.password)
            .then(res => {
                this.setState({
                    login: this.state.login,
                    password: this.state.password,
                    regSuccessMessage: 'Вы успешно зарегистрированы',
                    regFailMessage: '',
                    logFailMessage: '',
                    sucLog: ''
                });
                this.props.history.push("/enter");
            })
            .catch(err => {
                this.setState({
                    login: this.state.login,
                    password: this.state.password,
                    regSuccessMessage: '',
                    regFailMessage: 'Ошибка регистрации',
                    logFailMessage: '',
                    sucLog: ''
                });
                this.props.history.push("/enter");
            });
    }

    openMainPageHadler = () => {

    }

    authButtonClickHandler = () => {
        User.login(this.state.login, this.state.password)
            .then(res => {
                this.setState({
                    login: this.state.login,
                    password: this.state.password,
                    regSuccessMessage: '',
                    regFailMessage: '',
                    logFailMessage: '',
                    sucLog: 'Успешно'
                });
                this.props.history.push("/mainPage:" + this.state.login);
            })
            .catch(err => {
                this.setState({
                    login: this.state.login,
                    password: this.state.password,
                    regSuccessMessage: '',
                    regFailMessage: '',
                    logFailMessage: 'Неверный логин/пароль',
                    sucLog: ''
                });
                this.props.history.push("/enter");
            });
    }


    loginChangeHandler = (event) => {
        this.setState({ login: event.target.value });
    }

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    render() {
            let loginError;
            let regSuccess;
            let regError;
            let sucLogin;
            if (this.state.sucLog) {
                this.openMainPageHadler();
                sucLogin = ( < div className = "ok" > { this.state.sucLog } < /div>)
                }
                if (this.state.logFailMessage) {
                    loginError = ( < div className = "error" > { this.state.logFailMessage } < /div>)
                    }
                    if (this.state.regFailMessage) {
                        regError = ( < div className = "error" > { this.state.regFailMessage } < /div>)
                        }
                        if (this.state.regSuccessMessage) {
                            regSuccess = ( < div className = "ok" > { this.state.regSuccessMessage } < /div>)
                            }
                            return ( < div id = "loginUser" >
                                <
                                p > Регистрация / Авторизация < /p>  <
                                input onChange = { this.loginChangeHandler }
                                name = "login"
                                value = { this.state.login }
                                type = "text"
                                placeholder = "Логин"
                                className = "login" / >
                                <
                                p > < /p>   <
                                input onChange = { this.passwordChangeHandler }
                                value = { this.state.password }
                                name = "password"
                                type = "password"
                                placeholder = "Пароль"
                                className = "password" / >
                                <
                                p > < /p>    { regSuccess } { regError } { loginError } {sucLogin} <
                                button onClick = { this.authButtonClickHandler }
                                className = "button"
                                name = "enter" > Вход < /button>  <
                                button onClick = { this.regButtonClickHandler }
                                className = "button"
                                name = "registration" > Регистрация < /button>

                                <
                                /div>
                            );
                        }
                    }
                    export default withRouter(MainAuth);