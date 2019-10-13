// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function () {
        console.log('Service Worker Registered');
    });
}

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