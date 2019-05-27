module.exports = function(app){
    app.get("/odnoclassniki",function(request,response){
		response.sendFile(__dirname+"/autorOdnoclass.html");
	});

	app.get("/blank",function(request,response){
		response.sendFile(__dirname+"/blank.html");
	});
}