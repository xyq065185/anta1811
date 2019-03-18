
$("#login-button").click(function(){
	$.post(
		 "theLogin.php",
		 {"username":$("#username").val(),"userpass":$("#pwd").val()},
		 function(data){
			 // alert("Data Loaded: " + data);
			 if(data=="1"){
				 location.href="home.html";
			 }
			 else{
				 alert("您输入的用户名或密码有误");
			 }
		 }
	);
})