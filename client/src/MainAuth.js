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
        this.state.regSuccessMessage = '';
        this.state.regFailMessage = '';
        this.state.logFailMessage = '';
    }

    authButtonClickHandler = () => {
        fetch('/enter/', {
                method: 'POST',
                body: 'a=b',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
                console.log(body);
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
                loginError = ( < div className = "error" > { this.state.logFailMessage } < /div>)
                }
                if (this.state.regErrorMessage) {
                    regError = ( < div className = "error" > { this.state.regFailMessage } < /div>)
                    }
                    if (this.state.regSuccessMessage) {
                        regSuccess = ( < div className = "ok" > { this.state.regSuccessMessage } < /div>)
                        }
                        return ( <
                            form method = "post"
                            action = "/enter"
                            id = "loginUser" >
                            <
                            p > Регистрация / Авторизация < /p>  <
                            input name = "login"
                            type = "text"
                            placeholder = "Логин"
                            className = "login" / >
                            <
                            p > < /p>   <
                            input name = "password"
                            type = "password"
                            placeholder = "Пароль"
                            className = "password" / >
                            <
                            p > < /p>    { regSuccess } { regError } { loginError } <
                            input type = "submit"
                            className = "button"
                            value = "Вход"
                            name = "enter" / > <
                            input type = "submit"
                            value = "Регистрация"
                            className = "button"
                            name = "registration" / >

                            <
                            /form>
                        );
                    }
                }
                export default MainAuth;