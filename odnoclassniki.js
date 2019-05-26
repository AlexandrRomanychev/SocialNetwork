module.exports = function(app) {
    app.get("/odnoclassniki", function(request, response) {
        //TODO добавить проверку на авторизованность пользователя (by Alexandr)
        response.sendFile(__dirname + "/autorOdnoclass.html");
    });
}