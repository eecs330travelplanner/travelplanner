function LogIn(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (email == "avamrobinson@gmail.com"){
		document.getElementById("invalid-input").innerHTML = ""
		window.location.href = "HomePage.html";
	}
	else if (email == "VishalGiridhar2020@u.northwestern.edu"){
		document.getElementById("invalid-input").innerHTML = "";
		window.location.href = "HomePage2.html"
	}
	else{
		document.getElementById("invalid-input").innerHTML = "Incorrect email or password."
	}
}

// function instagram(){
// 	document.getElementsByClassName("create_account_box")[0].style.display = "none";
// 	document.getElementsByClassName("create_new_account")[0].style.display = "none";
// 	document.getElementsByClassName("continue-button")[0].style.display = "none";

// 	document.getElementsByClassName("instagram-login-box")[0].style.display = "block";
// }

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function btnfunction() {
  document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function spanfunction() {
  document.getElementById("myModal").style.display = "none";
}

function spanfunction2() {
  document.getElementsByClassName("insta-complete")[0].style.display = "inline";
  setTimeout(function(){document.getElementById("myModal").style.display = "none";}, 950)
  document.getElementsByClassName("insta-button")[0].onclick = "";
  document.getElementsByClassName("insta-button")[0].style.outline = "none"
  document.getElementsByClassName("insta-button")[0].innerHTML = "Connected!";
  document.getElementById("skip").innerHTML = "Continue >"
}
