module.exports = function (app) {
    
    app.get("/instagram", function (request, response) {
        response.sendFile(__dirname + "/instagram.html");
    });
}