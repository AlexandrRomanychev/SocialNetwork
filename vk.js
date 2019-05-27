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
    const easyvk = require('easyvk')
    app.get("/vk", function (request, response) {

        response.sendFile(__dirname + "/vk.html");

    });

    
    /*Для главной страницы VK*/
    /*app.post("/vk", urlencodedParser, function (request, response) {
        if (!request.body) return response.sendStatus(400);
        console.log(request.body);
        appId = '6972153'; //id моего приложения в вк
        protectedKey = 'BSnlq3ZTPNT1bdP7WysF';//секретный ключ
        redirUrl = "/vkLogin.html";//страница переадресации
        authUrl = "http://oauth.vk.com/authorize?client_id=" + appId + "&client_secret=" + protectedKey +
            "&v=5.95&responce_type=code&redirect_url=" + redirUrl + "&scope=friends";//пример запроса для получения почты пользователя. 
        //Переадресует на страницу авторизации в вк(нужно сначала выйти из своего вк), и в командной строке выводит эту же ссылку

        console.log(authUrl);
        response.redirect(authUrl);

    });*/
    //app.post("/vk", urlencodedParser, function (request, response) {
    //    authUrl = 'https://oauth.vk.com/authorize?client_id=6972153&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52';//Переадресует на страницу авторизации в вк(нужно сначала выйти из своего вк), и в командной строке выводит эту же ссылку
        


    //   console.log(authUrl);
    //   response.redirect(authUrl);
    //   var http = require("http");
    //   var url = require("url");
    //   console.log(response);

    //});
    app.post("/vk", urlencodedParser, function (request, response) {
        //Authenticating user
        var login = `${request.body.login}`;
        var password = `${request.body.password}`;
        easyvk({
            username: login,
            password: password,
            save_session: false
        }).then(vk => {
            var HttpVk = vk.http;
            //Getting user id from authenticated session
            var me = vk.session.user_id//Or your account id
   
            //Sending a message using messages.send method
            
            response.redirect('https://vk.com/friends');
   
        }).catch(console.error)
    });

    /*app.post("/vk", urlencodedParser, function (request, response) {
        $.ajax({
            url: 'https://api.vk.com/method/friends.search?user_id=_noire&count=20&access_token=326fbbeb214c4b02a3817275b8b61835da607ab29ba3bf3440a78ae00c8cffc32587c50d58333c5eb9744&v=5.95',
            method:'GET',
            dataType: 'JSONP',
            success: function (data) {
                console.log("Успех");
                console.log(data);
            },
            error: function (error) {
                //обработка неверного ввода
                console.log(error);
                console.log("Не удалось войти");
            }
        });
    });*/

    app.get("/vkLogin", function (request, response) {

        response.sendFile(__dirname + "/vkLogin.html");

    });
}