module.exports = function(app) {
    app.get("/privacy", function(request, response) {
        //TODO добавить проверку на авторизованность пользователя (by Alexandr)
        response.sendFile(__dirname + "/privacy.html");
    });
}