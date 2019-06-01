import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';
import './css/vk.css';

const Link = require("react-router-dom").Link;

class VkContent extends Component {

    render() {
        return ( < div class = "content" >
            <
            div class = "leftside" >
            <
            div class = "center" >
            <
            img src = "images/vklog.png"
            alt = "vk" / >
            <
            /div> < /
            div > <
            div class = "rightside" >
            <
            form class = "log-window"
            action = "/vk"
            method = "post" >
            <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            name = "login"
            type = "text"
            placeholder = "Телефон или email" / >
            <
            /div> <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            name = "password"
            type = "password"
            placeholder = "Пароль" / >
            <
            /div> <
            p > < /p> <
            div class = "auth-sumbit-block" >
            <
            a href = "#" >
            <
            input class = "enter-button"
            type = "submit"
            value = "Войти" / >
            <
            /a> < /
            div > <
            /form> <
            form class = "registration-window" >
            <
            div class = "string-bold" > Впервые ВКонтакте ? < /div> <
            div class = "string-moment-reg" > Моментальная регистрация < /div> <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            type = "text"
            placeholder = "Ваше имя" / >
            <
            /div> <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            type = "password"
            placeholder = "Ваша фамилия" / >
            <
            /div> <
            div class = "string-date" > Дата рождения < /div> <
            div class = "flex-container" >
            <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            type = "text"
            placeholder = "День" / >
            <
            /div> <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            type = "text"
            placeholder = "Месяц" / >
            <
            /div> <
            div class = "input-log-parol-block" >
            <
            input class = "form-input"
            type = "text"
            placeholder = "Год" / >
            <
            /div> < /
            div > <
            div class = "auth-sumbit-block" >
            <
            a href = "#" >
            <
            input class = "reg-button"
            type = "button"
            value = "Зарегистрироваться" / >
            <
            /a> < /
            div > <
            /form> < /
            div > <
            /div>
        );
    }
}

export default withRouter(VkContent);