module.exports = function(app) {
    app.get("/vk", function(request, response) {
        //TODO добавить проверку на авторизованность пользователя (by Alexandr)
        response.sendFile(__dirname + "/vk.html");
    });
}