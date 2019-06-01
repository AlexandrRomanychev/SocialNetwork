const { SHA3 } = require('sha3');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const publicPath = path.join(__dirname, '/public');
const app = express();
const hash1 = new SHA3(512);
const DataBase = require("./database");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.urlencoded());
app.use(express.json());

var port = process.env.PORT || 5000,
    DomParser = require('dom-parser'),
    parser = new DomParser(),
    fs = require('fs');

app.use(express.static(publicPath));

//открытие страницы index.html
app.get("/userfail", function(request, response) {
    response.sendStatus(500);
});

app.get("/userok", function(request, response) {
    response.sendStatus(200);
});

app.post("/register", urlencodedParser, function(request, response) {
    console.log('Попали в регистрацию');
    if (!request.body) return response.sendStatus(400);
    hash1.reset();
    var userLogin = `${request.body.user.login}`;
    var userPassword = hash1.update(`${request.body.user.password}`).digest('hex');
    var dataBase = new DataBase();
    dataBase.mongoClient.connect(function(err, client) {
        const db = client.db("User");
        const collection = db.collection("user");
        var regPromise = dataBase.findUserByLog(collection, userLogin, userPassword);
        regPromise.then(function(result) {
            console.log(result);
            if (result.length > 0) {
                console.log('Ошибка регистрации');
                client.close();
                response.status(500).send('Ошибка регистрации');
            } else {
                console.log('Успешно');
                var users = [{ login: userLogin, password: userPassword }];
                var insPromise = dataBase.insertNewUser(collection, users);
                insPromise.then(function(result) {
                    client.close();
                    response.send('Успешная регистрация');
                }, function(error) {
                    client.close();
                    response.status(500).send('Ошибка регистрации');
                });
            }
        }, function(error) {
            response.send(error);
        });
    });
});

app.post("/login", urlencodedParser, function(request, response) {
    console.log('Попали');
    console.log(request.body);
    if (!request.body) return response.sendStatus(400);
    hash1.reset();
    var userLogin = `${request.body.user.login}`;
    var userPassword = hash1.update(`${request.body.user.password}`).digest('hex');
    console.log('Пароль ' + userPassword);
    var dataBase = new DataBase();

    dataBase.mongoClient.connect(function(err, client) {
        hash1.reset();
        const db = client.db("User");
        const collection = db.collection("user");
        console.log('Логин ' + userLogin);
        console.log('Пароль ' + userPassword);
        var logPromise = dataBase.findUserByLogAndPass(collection, userLogin, userPassword);
        logPromise.then(function(result) {
            console.log('Результат ' + result);
            if (result.length > 0) {
                console.log('Успешно');
                console.log(result[0]._id);
                client.close();
                response.end('Закончили');
                //response.redirect("/main?userId=" + result[0]._id);
            } else {
                console.log('Упс');
                client.close();
                response.status(500).send('Неверный логин/пароль');
            }
        }, function(error) {
            response.send(error);
        });
    });
});

app.get("/", function(request, response) {});

//ссылки на другие страницы
require('./main.js')(app);
require('./github.js')(app);
require('./facebook.js')(app);
require('./odnoclassniki.js')(app);
require('./instagram.js')(app);
require('./vk.js')(app);

app.listen(port, function() {
    console.log(`Example app listening on port ` + port + ` !`);
});