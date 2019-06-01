module.exports = function(app){	

  app.get("/odnoclassniki", function(request,response){
      response.sendFile(__dirname+"/autorOdnoclass.html");
  });

  app.get("/blank", function(request,response){
      response.sendFile(__dirname+"/blank.html");		 
  })


	app.get("/user_page", function(request,response){
	    "use strict"
      $(function()
			{
					$.ajax(
          {
              url : "https://api.ok.ru/fb.do?application_key=CBAGOPCNEBABABABA&format=json&method=users.getLoggedInUser&sig=72579a80b2cde137bffc5b98eb287107&access_token=tkn1wkVNUWIusOzuCjdsPPDPOZ0jaVvTiSW8P0Qi8jhBqBEWl8rMAv7e4SvyxNqdmZhll1",
              success : function(result)
              {
								  var id_user = result;
									var ok_page_user = "https://ok.ru/profile/" + id_user;
									response.redirect(ok_page_user);
              }      
          });
		  })
	})

	app.get("/find_friends", function(request,response){
		  "use strict"
		  $(function()
	  	{
			  $.ajax(
				{
						url : "https://api.ok.ru/fb.do?application_key=CBAGOPCNEBABABABA&format=json&method=users.getLoggedInUser&sig=72579a80b2cde137bffc5b98eb287107&access_token=tkn1wkVNUWIusOzuCjdsPPDPOZ0jaVvTiSW8P0Qi8jhBqBEWl8rMAv7e4SvyxNqdmZhll1",
						success : function(result)
						{
								var id_user = result;
								var ok_page_friends = "https://ok.ru/profile/" + id_user + "/pymk";
								response.redirect(ok_page_friends);
						}      
				});
		  })
    })

app.get("/massages", function(request,response){
	  "use strict"
  	$(function()
	  {
				var ok_page_massages = "https://ok.ru/messages";
				response.redirect(ok_page_massages);    
	  })
  })

app.get("/video", function(request,response){
	  "use strict"
	  $(function()
	  {
				var ok_page_video = "https://ok.ru/video/myVideo";
				response.redirect(ok_page_video);
	  })
  })
}

	    