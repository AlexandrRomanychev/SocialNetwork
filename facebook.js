module.exports = function(app) {
    app.get("/facebook", function(request, response) {
        //TODO добавить проверку на авторизованность пользователя (by Alexandr)
        response.sendFile(__dirname + "/facebook.html");
    });
}