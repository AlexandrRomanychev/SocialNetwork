module.exports = function(app){
	app.get("/facebook",function(request,response){
		response.sendFile(__dirname+"/facebook.html");
	}); 

	var jsdom = require('jsdom'),
	btoa = require('btoa'),
	fs = require('fs'),
	DomParser = require('dom-parser'),
	parser = new DomParser();
	$ = require('jquery')(new jsdom.JSDOM().window);
	const bodyParser = require("body-parser");
	const urlencodedParser = bodyParser.urlencoded({extended: false});

	app.post("/facebook", urlencodedParser, function (request, response) {

	});

	  app.get("/facebook", urlencodedParser, function (request, response) {
		response.send(123);
	});
	
}





// FB.getLoginStatus(function(response) {
// if (response.status === 'connected') {
// 	console.log(response.authResponse.accessToken);
// }
// });

// function checkLoginState() {
// FB.getLoginStatus(function(response) {
// 	statusChangeCallback(response);
// });

// FB.login(function(response) {
//     if (response.authResponse) {
//      console.log('Welcome!  Fetching your information.... ');
//      FB.api('/me', function(response) {
//        console.log('Good to see you, ' + response.name + '.');
//      });
//     } else {
//      console.log('User cancelled login or did not fully authorize.');
//     }
// });
 