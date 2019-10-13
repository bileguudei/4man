let audioPlay = false;

let isRunning = true;
let isJumping = false;
let time = 0;
let step = 0;
let speed, goingUp;
let gravity = 0.1;

// let gameSpeed = 8.5;
let gameSpeed = 10;

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

function resizeCanvas() {
    let canvas = document.getElementById("cvs");
    canvas.width = Math.max(window.innerWidth, window.innerHeight);
    canvas.height = Math.min(window.innerWidth, window.innerHeight);
}

let canvas = document.getElementById("cvs"), ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);


function init() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

init();

function checkCollision() {

    let vp = Math.max(canvas.width, canvas.height) / 100;
    console.log(vp);

    if (dogs.length != 0){
        if (boy.x < dogs[0].x && dogs[0].x < boy.x + boy.height - boy.height / 3) {
            if (boy.y < dogs[0].y && dogs[0].y < boy.y + boy.width) {
                console.log("1TRUE");
                return true;
            }
        }
<<<<<<< HEAD
    }
    if ( boy.x + 10 < dogs[0].x + dogs[0].w && dogs[0].x + dogs[0].w < boy.x + boy.height + 10){
        if (boy.y + 10 < dogs[0].y + 15 && dogs[0].y + 15 < boy.y + boy.width - 10){
            console.log("2TRUE");
            return true;
=======
        if (boy.x + boy.height / 10 < dogs[0].x + dogs[0].w - dogs[0].w / 3 && dogs[0].x + dogs[0].w - dogs[0].w / 3 < boy.x + boy.height - boy.height / 3) {
            if (boy.y < dogs[0].y && dogs[0].y < boy.y + boy.width) {
                console.log("2TRUE");
                return true;
            }
>>>>>>> 581efc2b2bca441385a02662429a3f35a145d965
        }
    }

    if (shavars.length != 0){
        if (boy.x < shavars[0].x && shavars[0].x < boy.x + boy.height - boy.height / 3) {
            if (boy.y < shavars[0].y && shavars[0].y < boy.y + boy.width) {
                console.log("COLL SHAVAR1");
                return true;
            }
        }
<<<<<<< HEAD
    }

    if ( boy.x - 10 < shavars[0].x + shavars[0].w - 10  && shavars[0].x + shavars[0].w - 10 < boy.x + boy.height - 10){
        if (boy.y < shavars[0].y  && shavars[0].y < boy.y + boy.width - 10){
            console.log("COLL SHAVAR2");
            return true;
=======
        if (boy.x + boy.height / 10 < shavars[0].x + shavars[0].w && shavars[0].x + shavars[0].w < boy.x + boy.height - boy.height / 3) {
            if (boy.y < shavars[0].y && shavars[0].y < boy.y + boy.width) {
                console.log("COLL SHAVAR2");
                return true;
            }
>>>>>>> 581efc2b2bca441385a02662429a3f35a145d965
        }
    }

    if (nvhs.length != 0){
        if (boy.x < nvhs[0].x && nvhs[0].x < boy.x + boy.height - boy.height / 3) {
            if (boy.y < nvhs[0].y && nvhs[0].y < boy.y + boy.width) {
                console.log("COLL NUH");
                return true;
            }
        }

<<<<<<< HEAD
    if ( boy.x < nvhs[0].x + nvhs[0].w - 10 && nvhs[0].x + nvhs[0].w - 10 < boy.x + boy.height - 10){
        if (boy.y < nvhs[0].y && nvhs[0].y < boy.y + boy.width - 10){
            console.log("COLL NUH");
            return true;
=======
        if (boy.x + boy.height / 10 < nvhs[0].x + nvhs[0].w - vp && nvhs[0].x + nvhs[0].w - vp < boy.x + boy.height - boy.height / 3) {
            if (boy.y < nvhs[0].y && nvhs[0].y < boy.y + boy.width) {
                console.log("COLL NUH");
                return true;
            }
>>>>>>> 581efc2b2bca441385a02662429a3f35a145d965
        }
    }
    return false;
}
let random = 0;
var drawInterval = setInterval(() => {

    // cloud movements
    clouds.forEach(element => {
        element.x -= 1;

    });

    lands.forEach(element => {
        element.x -= 3;
    })

    baishins.forEach(element => {
        element.x -= 1;
    });

    status.forEach(element => {
        element.x -= 1;
    })

    blueskys.forEach(element => {
        element.x -= 1;
    })

    geruud.forEach(element => {
        element.x -= 1;
    })

    nvhs.forEach(element => {
        element.x -= 3;
    });

    dogs.forEach(element => {
        element.x -= 4;
    });

    lamps.forEach(element => {
        element.x -= 1;
    });

    shavars.forEach(element => {
        element.x -= 3;
    });

    hiids.forEach(element => {
        element.x -= 1;
    })


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    /* baishin2 oruulsan hseg */
    //ctx.drawImage(imgBaishin2, xbaishin2, ybaishin2, imgBaishin2.width, imgBaishin2.height);

    /* baishin oruulsan heseg */
    //ctx.drawImage(imgBaishin, xbaishin, ybaishin, imgBaishin.width, imgBaishin.height)

    drawLands();
    drawStatus();
    drawGeruud();
    drawBlueskys();
    drawBaishins();

    drawClouds();
    drawHiids();
    drawLamps();
    drawBoy();

    drawDogs();
    drawNvhs();
    drawShavars();
    
  



    if (isRunning == false) {
        if (goingUp) {
            speed = Math.max(0, speed - gravity);
            if (speed == 0)
                goingUp = false;
            else
                boy.y = Math.max(0.1 * parseInt(canvas.height), boy.y - speed);
        } else {
            speed = speed + gravity;
            boy.y = Math.min(0.65 * parseInt(canvas.height), boy.y + speed);
        }

        if (boy.y == 0.65 * parseInt(canvas.height)) {
            setTimeout(function () { isRunning = true; }, 0.01);
        }
        // console.log(speed, goingUp);
    }
}, gameSpeed);



<<<<<<< HEAD
},8.5);
=======
>>>>>>> 581efc2b2bca441385a02662429a3f35a145d965


function drawBoy() {
    if (checkCollision()) {

        stopGame();
        return true;
    }
    if (isRunning) {
        if (step > 2) { step = 0; }

        if (localStorage.getItem("gender") == "boy"){
            ctx.drawImage(boyWalk[step], boy.x, boy.y, boy.height, boy.width);
        }    
        else
            ctx.drawImage(girlWalk[step], boy.x, boy.y, boy.height, boy.width);

        if (time % 16 == 0)
            step++;
        time++;
    } else {

        if (step > 2) {

        }

        if (step > 3) {
            // isRunning = true;
            step = 0;
        }
        var zurag = new Image();
        if (localStorage.getItem("gender") == "boy")
            zurag.src = "./images/boy-jump-1.png";
        else
            zurag.src = "./images/girl-jump-1.png";

        if (step == 0) {
            ctx.drawImage(zurag, boy.x, boy.y, boy.height - 9, boy.width);

        }

        var zurag1 = new Image();
        if (localStorage.getItem("gender") == "boy")
            zurag1.src = "./images/boy-jump-2.png";
        else
            zurag1.src = "./images/girl-jump-2.png";

        if (step == 1) {
            ctx.drawImage(zurag1, boy.x, boy.y, boy.height - 9, boy.width);
        }

        var zurag2 = new Image();
        if (localStorage.getItem("gender") == "boy")
            zurag2.src = "./images/boy-jump-3.png";
        else
            zurag2.src = "./images/girl-jump-3.png";

        if (step == 2) {
            ctx.drawImage(zurag2, boy.x, boy.y, boy.height + 13, boy.width);
        }

        var zurag3 = new Image();
        if (localStorage.getItem("gender") == "boy")
            zurag3.src = "./images/boy-jump-4.png";
        else
            zurag3.src = "./images/girl-jump-4.png";

        if (step == 3) {
            ctx.drawImage(zurag3, boy.x, boy.y, boy.height + 50, boy.width);
<<<<<<< HEAD
        }  
        if(time % 25 == 0){
=======
        }
        if (time % 32 == 0) {
>>>>>>> 581efc2b2bca441385a02662429a3f35a145d965
            step++;
        }
        time++;
    }

}
<<<<<<< HEAD

document.onkeyup = function (event) {
    if (event.key == " ") {
=======
document.getElementById('cvs').addEventListener("click", usreh);
function usreh(){
    if (isRunning == true) {
>>>>>>> 581efc2b2bca441385a02662429a3f35a145d965
        console.log("JUMP");
        time = 0;
        step = 0;
        isRunning = false;
        speed = 0.01 * canvas.height;
        gravity = 0.0003 * canvas.height;
        goingUp = true;
    }

    if (audioPlay == false){
        const duu = new Audio();
        duu.src = "gametheme.mp3";
        duu.play();
        
        audioPlay = true;
    }
}

let onoo = 0;
var scoreInterval = setInterval(() => {
    onoo++;
    document.getElementById("onoo").innerHTML = onoo;
    localStorage.setItem("Onoo", onoo);
}, 200);

function stopGame() {
    if(onoo>=100){
            location.replace("ending.html");
    }else{
        location.replace("gameover.html");
    }
}

    // function jumpBoy(){   
    //     clearInterval(drawBoy);  
    //     if(isJumping){
    //         if(step > 2){
    //             isRunning = true;
    //             drawBoy();
    //         }
    //         ctx.drawImage(boyJump[step], boy.x, boy.y-(step+1)*50, boy.height-20, boy.width);
    //         if(time % 1000 == 0){
    //             step++;
    //         }
    //         time++;

    //     }

    // }
