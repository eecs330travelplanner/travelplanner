
function picFav(ele) {
	if (ele.innerHTML == "favorite_border"){
		ele.innerHTML = "favorite";

		stored = JSON.parse(sessionStorage.getItem("favPics"));
		if (stored == null){stored = []}
		stored.push(ele.parentNode.parentNode.getElementsByTagName("img")[0].src);
		sessionStorage.setItem("favPics", JSON.stringify(stored));
	}
	else {
		ele.innerHTML = "favorite_border";

		stored = JSON.parse(sessionStorage.getItem("favPics"));
		find = stored.indexOf(ele.parentNode.parentNode.getElementsByTagName("img")[0].src);
		stored.splie(find,1);
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