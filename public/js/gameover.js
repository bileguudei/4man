function test1(){
    location.replace("index.html");
}
function test2(){
    location.replace("menu.html");
}


if (localStorage.getItem("gender") == "boy")
    document.getElementsByClassName('row')[0].style.backgroundImage = "url('./images/boy-head.png')";
else
    document.getElementsByClassName('row')[0].style.backgroundImage = "url('./images/girl-head.png')";