var submit=document.getElementById('submit');
var username=document.getElementById("username");
var password=document.getElementById("password");
var showusername=document.getElementById("showusername")
submit.click()=function(){
	var cookie="username="+username.value+";password="+password.value;
	document.cookie=cookie;
}
showusername.innerHTML=document.cookie;