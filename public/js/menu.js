// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function () {
        console.log('Service Worker Registered');
    });
}

function neest (){
    location.replace("game.html");
}
function meenu(){
    location.replace("index.html");
}


function playBoy(){
    localStorage.setItem("gender", "boy");
    location.replace("nest.html");
}


function playGirl(){
    localStorage.setItem("gender", "girl");
    location.replace("nest.html");
}