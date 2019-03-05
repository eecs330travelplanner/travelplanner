
function picFav(ele) {
	if (ele.parentNode.parentNode.getElementsByClassName("fav-button-dropdown")[0].style.display == "inline-block"){
		ele.parentNode.parentNode.getElementsByClassName("fav-button-dropdown")[0].style.display = "none";
	}
	else {
		ele.parentNode.parentNode.getElementsByClassName("fav-button-dropdown")[0].style.display = "inline-block";
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
