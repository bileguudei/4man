// import {onoo} from '../js/main.js';
function test1(){
    location.replace("index.html");
}
function test2(){
    location.replace("menu.html");
}
var vOneLS = localStorage.getItem("Onoo");  
var test=document.getElementById("score");
test.innerHTML=vOneLS;