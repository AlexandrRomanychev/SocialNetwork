const { SHA3 } = require('sha3');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const publicPath = path.join(__dirname, '/public');
const app = express();
const hash1 = new SHA3(512);
const DataBase = require("./database");

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

var port = process.env.PORT || 3000,
    DomParser = require('dom-parser'),
    parser = new DomParser(),
    fs = require('fs');

app.use(express.static(publicPath));


//открытие страницы index.html
app.get("/enter", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/enter", urlencodedParser, function(request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    hash1.reset();
    var userLogin = `${request.body.login}`;
    var userPassword = hash1.update(`${request.body.password}`).digest('hex');

    var dataBase = new DataBase();

    dataBase.mongoClient.connect(function(err, client) {
        hash1.reset();
        const db = client.db("User");
        const collection = db.collection("user");
        if (request.body.enter) {
            var logPromise = dataBase.findUserByLogAndPass(collection, userLogin, userPassword);
            logPromise.then(function(result) {
                console.log('Результат ' + result);
                if (result.length > 0) {
                    console.log('Успешно');
                    client.close();
                    response.redirect("/main?userId=" + result[0]._id);
                } else {
                    console.log('Упс');
                    client.close();
                    fs.readFile('index.html', 'utf8', function(err, html) {
                        if (!err) {
                            var dom = parser.parseFromString(html).rawHTML;
                            //вывод сообщения о неверном логине/пароле
                            response.send(dom.replace('<input type="submit"', '\n<div class=\"error\">Неверный логин/пароль</div>\n<input type="submit"'));
                        }
                    });
                }
            }, function(error) {
                fs.readFile('index.html', 'utf8', function(err, html) {
                    if (!err) {
                        var dom = parser.parseFromString(html).rawHTML;
                        //вывод сообщения о неверном логине/пароле
                        response.send(dom.replace('<input type="submit"', '\n<div class=\"error\">Неверный логин/пароль</div>\n<input type="submit"'));
                    }
                });
            });
        } else {
            /*Валидация введенных паролей*/
            if (userLogin.length == 0 || `${request.body.password}`.length == 0) {
                fs.readFile('index.html', 'utf8', function(err, html) {
                    if (!err) {
                        var dom = parser.parseFromString(html).rawHTML;
                        client.close();
                        //вывод сообщения о неверном логине/пароле
                        response.send(dom.replace('<input type="submit"', '\n<div class=\"error\">Поля должны быть заполнены</div>\n<input type="submit"'));
                    }
                });
            } else {
                var regPromise = dataBase.findUserByLog(collection, userLogin, userPassword);
                regPromise.then(function(result) {
                    console.log(result);
                    if (result.length > 0) {
                        fs.readFile('index.html', 'utf8', function(err, html) {
                            if (!err) {
                                var dom = parser.parseFromString(html).rawHTML;
                                console.log('Ошибка');
                                client.close();
                                response.send(dom.replace('<input type="submit"', '\n<div class=\"error\">Такой логин занят</div>\n<input type="submit"'));
                            }
                        });
                    } else {
                        console.log('Успешно');
                        var users = [{ login: `${request.body.login}`, "password": hash1.update(`${request.body.password}`).digest('hex') }];
                        var insPromise = dataBase.insertNewUser(collection, users);
                        insPromise.then(function(result) {
                            fs.readFile('index.html', 'utf8', function(err, html) {
                                if (!err) {
                                    var dom = parser.parseFromString(html).rawHTML;
                                    response.send(dom.replace('<input type="submit"', '\n<div class=\"ok\">Вы успешно зарегистрированы</div>\n<input type="submit"'));
                                }
                            });
                        }, function(error) {
                            fs.readFile('index.html', 'utf8', function(err, html) {
                                if (!err) {
                                    var dom = parser.parseFromString(html).rawHTML;
                                    console.log('Ошибка');
                                    client.close();
                                    response.send(dom.replace('<input type="submit"', '\n<div class=\"error\">Такой логин занят</div>\n<input type="submit"'));
                                }
                            });
                        });
                    }
                }, function(error) {
                    fs.readFile('index.html', 'utf8', function(err, html) {
                        if (!err) {
                            var dom = parser.parseFromString(html).rawHTML;
                            console.log('Ошибка');
                            client.close();
                            response.send(dom.replace('<input type="submit"', '\n<div class=\"error\">Такой логин занят</div>\n<input type="submit"'));
                        }
                    });
                });
            }
        }
    });
});

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

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