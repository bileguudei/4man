function playBoy(){
    localStorage.setItem("gender", "boy");
    location.replace("index.html");
}


function playGirl(){
    localStorage.setItem("gender", "girl");
    location.replace("index.html");
}