var selectImg = document.querySelectorAll("img");
var selectSecond = selectImg[1];
selectSecond.className = "red";


selectSecond.className = "test";

var div1 = selectSecond.parentElement;
var div2 = div1.nextElementSibling;
var img1 = div2.firstElementChild;
var img2 = img1.nextElementSibling;
img2.className = "red";

// var div1 = selectSecond.parentNode;