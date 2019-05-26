module.exports = function (app) {
    var jsdom = require('jsdom'),
        btoa = require('btoa'),
        fs = require('fs'),
        DomParser = require('dom-parser'),
        parser = new DomParser();
    $ = require('jquery')(new jsdom.JSDOM().window);
    const bodyParser = require("body-parser");
    const urlencodedParser = bodyParser.urlencoded({ extended: false });
    var UserData = null;
    var errorLog = false;
    var UserLogin = null;
    var UserPassword = null;

    app.get("/vk", function (request, response) {

        response.sendFile(__dirname + "/vk.html");

    });

    /*Для главной страницы VK*/
    app.post("/vk", urlencodedParser, function (request, response) {
        appId = '6972153'; //id моего приложения в вк
        protectedKey = 'BSnlq3ZTPNT1bdP7WysF';//секретный ключ
        redirUrl = "/vkLogin.html";//страница переадресации
        authUrl = "http://oauth.vk.com/authorize?client_id=" + appId + "&client_secret=" + protectedKey +
            "&v=5.95&responce_type=code&redirect_url=" + redirUrl + "&scope=email";//пример запроса для получения почты пользователя. 
        //Переадресует на страницу авторизации в вк(нужно сначала выйти из своего вк), и в командной строке выводит эту же ссылку

        console.log(authUrl);
        response.redirect(authUrl);

    });

    app.get("/vkLogin", function (request, response) {

        response.sendFile(__dirname + "/vkLogin.html");

    });
}