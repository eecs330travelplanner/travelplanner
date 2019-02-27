function LogIn(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (email == "avamrobinson@gmail.com"){
		document.getElementByName("log-in-form").setAttribute("action", "HomePage.html");
		window.location.href = "HomePage.html";
	}
	else{
		document.getElementById("invalid-input").innerHTML = "incorrect email or password"
	}
}