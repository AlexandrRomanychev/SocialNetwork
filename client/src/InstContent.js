import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';
import './css/odnoclass.css';

const Link = require("react-router-dom").Link;

class InstContent extends Component {

    render() {
        return ( < div class = "content" >
            <
            div class = "leftside" >
            <
            div class = "center" >
            <
            img src = "images/instagram.png"
            width = "400px" / >
            <
            /div> < /
            div > <
            div class = "rightside" >
            <
            form class = "loginInstagram" >
            <
            div class = "registration" >
            <
            img src = "images/instalogo.png"
            width = "180px" / >
            <
            div class = "text" > Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей. < /div> <
            div >
            <
            input type = "text"
            class = "instagramInput"
            placeholder = "Моб.телефон или эл.адрес" / >
            <
            /div> <
            div >
            <
            input type = "text"
            class = "instagramInput"
            placeholder = "Имя и фамилия" / >>
            <
            /div> <
            div >
            <
            input type = "text"
            class = "instagramInput"
            placeholder = "Имя пользователя" / >>
            <
            /div> <
            div >
            <
            input type = "password"
            class = "instagramInput"
            placeholder = "Пароль" / >>
            <
            /div> <
            div >
            <
            input type = "submit"
            value = "Регистрация"
            class = "logbutton" / >
            <
            /div> <
            div class = "text" > Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie. < /div> < /
            div > <
            div class = "login" >
            <
            div >
            <
            input type = "text"
            class = "instagramInput"
            placeholder = "Номер телефона, имя пользователя или элекронная почта" / >>
            <
            /div> <
            div >
            <
            input type = "password"
            class = "instagramInput"
            placeholder = "Пароль" / >
            <
            /div> <
            div >
            <
            input type = "submit"
            value = "Войти"
            class = "logbutton" / >>
            <
            /div> < /
            div > <
            /form> < /
            div > <
            /div>
        );
    }
}

export default withRouter(InstContent);