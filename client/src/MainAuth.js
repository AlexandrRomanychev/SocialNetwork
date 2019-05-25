import React, { Component } from 'react';
import './style.css';

class MainAuth extends Component {
    render() {
        return ( < form action = "/enter"
            method = "post"
            id = "loginUser" >
            <
            p > Регистрация / Авторизация < /p>

            <
            input name = "login"
            type = "text"
            placeholder = "Логин"
            class = "login" / >
            <
            p > < /p> <
            input name = "password"
            type = "password"
            placeholder = "Пароль"
            class = "password" / >
            <
            p > < /p>  <
            input type = "submit"
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