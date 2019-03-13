var female = 0
var male = 0
var unisex = 0

function picFav(ele) {
	if (ele.parentNode.parentNode.getElementsByClassName("fav-button-dropdown")[0].style.display == "inline-block"){
		ele.parentNode.parentNode.getElementsByClassName("fav-button-dropdown")[0].style.display = "none";
	}
	else {
		ele.parentNode.parentNode.getElementsByClassName("fav-button-dropdown")[0].style.display = "inline-block";
	}
}

function tipFav(ele) {
	if (ele.innerHTML == "favorite_border") {
		ele.innerHTML = "favorite";
	}
	else {
		ele.innerHTML = "favorite_border";
	}
}

function picFavTag(ele) {
	if (ele.style.backgroundColor == "rgb(44, 66, 81)"){
		ele.style.backgroundColor = "#E8F1F2";
		ele.style.color = "#2C4251";
	}
	else {
		ele.style.backgroundColor = "#2C4251";
		ele.style.color = "#E8F1F2"
	}

	count = 0;
	tags = ele.parentNode.getElementsByTagName("p");

	for (i=0;i<tags.length;i++){
		if (tags[i].style.backgroundColor == "rgb(44, 66, 81)") {
			count++;
		}
	}

	if (count > 0) {
		ele.parentNode.parentNode.getElementsByClassName("fav-icon")[0].innerHTML = "favorite";
	}
	else {
		ele.parentNode.parentNode.getElementsByClassName("fav-icon")[0].innerHTML = "favorite_border";
	}
}

function picDislikeTag(ele) {
	if (ele.style.opacity == "1"){
		ele.style.color = "#2c4251";
		ele.style.opacity = "0.4";
	}
	else {
		ele.style.color = "#2c4251";
		ele.style.opacity = "1";
	}
}


function buildBoard(wrap) {
	var stored = JSON.parse(sessionStorage.getItem("favPics"));
	console.log(stored);
}

function suggestions(){
	document.getElementsByClassName("activities")[0].style.display = "inline";
}

function displayProfile(pic){
	obj = pic.parentNode.getElementsByClassName("header-profile-menu")[0].style;
	if (obj.display == "inline-block") {
		obj.display = "none";
	}
	else {
		obj.display = "inline-block";
	}
}

function styleCircle(obj) {
	circles = obj.parentNode.getElementsByClassName("style-scale-circle");
	for (i = 0;i < 3;i++) {
		circles[i].style.backgroundColor = "rgba(44,66,81,0)";
	}
	obj.style.backgroundColor = "rgba(44,66,81,1)";
}

function styleGenderCircle(obj) {
	circles = obj.parentNode.getElementsByClassName("gender-circle");
	for (i = 0;i < 3;i++) {
		circles[i].style.backgroundColor = "rgba(44,66,81,0)";
		circles[i].style.color = "rgba(44,66,81,1)";
	}
	obj.style.backgroundColor = "rgba(44,66,81,1)";
	obj.style.color = "white";
}

function femClothingQuiz(){
	female = 1;
	male = 0;
	unisex = 0;
}

function maleClothingQuiz(){
	male = 1;
	female = 0;
	unisex = 0;
}
function uniClothingQuiz(){
	unisex = 1;
	male = 0;
	female = 0;
}

function clothingQuiz(){
	if (female == 1){
		document.getElementsByClassName("next-button")[0].href = "womenClothingQuiz.html"
	}
	else if (male == 1){
		document.getElementsByClassName("next-button")[0].href = "menClothingQuiz.html"
	}
	else if (unisex == 1){
		document.getElementsByClassName("next-button")[0].href = "menClothingQuiz.html"
	}
}

function filterSelection(ele,c) {
	temp = ele.parentNode.getElementsByClassName("activeFilter")[0];
	temp.classList.remove("activeFilter")
	temp.classList.add("filterButton")
	ele.classList.add("activeFilter")
	ele.classList.remove("filterButton")

	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
	    w3RemoveClass(x[i], "show");
	    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function showPassword(){
	var x = document.getElementById("password");
	if(x.type === "password"){
		x.type = "text";
	}
	else{
		x.type = "password"
	}
}
