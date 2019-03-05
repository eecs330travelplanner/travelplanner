
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

function styleGenderCircle(obj) {
	circles = obj.parentNode.getElementsByClassName("gender-circle");
	for (i = 0;i < 3;i++) {
		circles[i].style.backgroundColor = "rgba(44,66,81,0)";
		circles[i].style.color = "rgba(44,66,81,1)";
	}
	obj.style.backgroundColor = "rgba(44,66,81,1)";
	obj.style.color = "white";
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

