import React, { Component } from 'react';
import User from './auth/User';
import './css/style.css';
import './css/nullStyle.css';

class MainAuth extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state.login = '';
        this.state.password = '';
        this.regSuccessMessage = '';
        this.regFailMessage = '';
        this.logFailMessage = '';
    }

    authButtonClickHandler = () => {
        User.login(this.state.login, this.state.password)
            .then(res => {
                this.setState({
                    regSuccessMessage: '',
                    regFailMessage: '',
                    logFailMessage: '',
                    login: '',
                    password: ''
                });
            })
            .catch(err => {
                this.setState({
                    regSuccessMessage: '',
                    regFailMessage: '',
                    logFailMessage: err,
                    login: '',
                    password: ''
                });
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
        if (this.state.logFailMessage) {
            loginError = ( < div class = "error" > { this.state.logFailMessage } < /div>)
            }
            if (this.state.regErrorMessage) {
                regError = ( < div class = "error" > { this.state.regFailMessage }
                } < /div>)
            }
            if (this.state.regSuccessMessage) {
                regSuccess = ( < div class = "ok" > { this.state.regSuccessMessage }
                } < /div>)
            }
            return ( < form action = "/enter"
                method = "post"
                id = "loginUser" >
                <
                p > Регистрация / Авторизация < /p>

                <
                input onChange = { this.loginChangeHandler }
                name = "login"
                type = "text"
                value = { this.state.login }
                placeholder = "Логин"
                class = "login" / >
                <
                p > < /p> <
                input onChange = { this.passwordChangeHandler }
                value = { this.state.password }
                name = "password"
                type = "password"
                placeholder = "Пароль"
                class = "password" / >
                <
                p > < /p>  { regSuccess } { regError } { loginError }  <
                button onClick = { this.authButtonClickHandler }
                value = "Вход"
                class = "button"
                name = "enter" / >
                <
                input type = "submit"
                value = "Регистрация"
                class = "button"
                name = "registration" / >
                <
                /form>
            );
        }
    }
    export default MainAuth;