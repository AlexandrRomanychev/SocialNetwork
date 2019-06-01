import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/style.css';
import './css/nullStyle.css';
import './css/odnoclass.css';

const Link = require("react-router-dom").Link;

class OdnoclContent extends Component {

    render() {
        return ( < div id = "hook_Block_OAuth2Login"
            class = "hookBlock" >
            <
            form method = "post"
            action = "https://connect.ok.ru/dk?cmd=OAuth2Login&st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fst.cmd%253DOAuth2Permissions%2526amp%253Bst.layout%253Dw%2526amp%253Bst.scope%253DVALUABLE_ACCESS%2526amp%253Bst.response_type%253Dcode%2526amp%253Bst.show_permissions%253Doff%2526amp%253Bst.redirect_uri%253Dhttp%25253A%25252F%25252Flocalhost%25253A3000%25252Fblank%2526amp%253Bst.client_id%253D1278141696&st.client_id=1278141696" >
            <
            div class = "auth-block" >
            <
            input name = "fr.posted"
            type = "hidden"
            value = "set" / >
            <
            div class = "auth-window" >
            <
            div class = "string-up-input-login" >
            Логин, адрес почты или телефон <
            /div> <
            div class = "input-log-parol-block" >
            <
            input tabindex = "1"
            name = "fr.email"
            id = "field_email"
            type = "text"
            value = ""
            class = "form-input" / >
            <
            /div> <
            div class = "string-up-input-password" >
            Пароль <
            /div> <
            div class = "input-log-parol-block" >
            <
            input tabindex = "2"
            name = "fr.password"
            id = "field_password"
            type = "password"
            class = "form-input" / >
            <
            /div> <
            div class = "auth-sumbit-block" >
            <
            input value = "Войти"
            onclick = "this.className +=&#39; __disabled&#39;"
            tabindex = "3"
            type = "submit"
            class = "enter-button" / >
            <
            /div> <
            a href = "https://ok.ru/password/recovery"
            class = "forget-password"
            target = "_blank" > Забыли пароль ? < /a> <
            div class = "image-no-profil" >
            <
            img alt = "Нет профиля в одноклассниках"
            src = "images/StrNoProfil.png" / >
            <
            /div> <
            div class = "auth-registration-block" >
            <
            a href = "https://ok.ru/dk?st.cmd=anonymRegistrationEnterPhone"
            target = "_blank" >
            <
            input class = "registration-button"
            type = "button"
            value = "Регистрация" / >
            <
            /a> <
            /div> <
            /div>    <
            /div> <
            /form> <
            /div>
        );
    }
}

export default withRouter(OdnoclContent);