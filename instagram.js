module.exports = function(app) {
    app.get("/instagram", function(request, response) {
        //TODO добавить проверку на авторизованность пользователя (by Alexandr)
        response.sendFile(__dirname + "/instagram.html");
    });
}