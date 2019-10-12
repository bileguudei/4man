// import {onoo} from '../js/main.js';
function test1(){
    location.replace("game.html");
}
function test2(){
    location.replace("index.html");
}
var vOneLS = localStorage.getItem("Onoo");  
var test=document.getElementById("score");
test.innerHTML=vOneLS;

if (localStorage.getItem("gender") == "boy")
    document.getElementsByClassName('row')[0].style.backgroundImage = "url('./images/boy-head.png')";
else
    document.getElementsByClassName('row')[0].style.backgroundImage = "url('./images/girl-head.png')";
