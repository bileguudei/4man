function test1(){
    location.replace("index.html");
}
function test2(){
    location.replace("menu.html");
}
var picture = new Image();
if (localStorage.getItem("gender") == "boy")
    picture.src = "./images/Tolgoi 1.png";
else
    picture.src = "./images/girl-head.png";