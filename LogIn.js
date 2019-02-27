function LogIn(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (email == "avamrobinson@gmail.com"){
		document.getElementById("invalid-input").innerHTML = ""
		window.location.href = "HomePage.html";
	}
	else{
		document.getElementById("invalid-input").innerHTML = "Incorrect email or password."
	}
}