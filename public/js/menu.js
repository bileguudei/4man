function meenu(){
    location.replace("nest.html");
}


 function playBoy(){
    localStorage.setItem("gender", "boy");
    location.replace("game.html");
}

 function playGirl(){
    localStorage.setItem("gender", "girl");
    location.replace("game.html");
}