
let isRunning = true;
let isJumping = false;
let time = 0;
let step = 0;
let speed, goingUp;
let gravity = 0.2;




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


   


var drawInterval = setInterval(() => {

    // cloud movements
    clouds.forEach(element => {
        element.x -= 1;
    });

    dirts.forEach(element => {
        element.x -= 1;
    });

    lands.forEach(element => {
        element.x -= 2;
    })

    baishins.forEach(element => {
        element.x -= 1;
    });
    blueskys.forEach(element => {
        element.x -= 1;
    })

    geruud.forEach(element => {
        element.x -= 1;
    })

    nvhs.forEach(element => {
        element.x -= 1;
    });

    dogs.forEach(element => {
        element.x -= 1;
    });

    lamps.forEach(element => {
        element.x -= 1;
    });

    shavars.forEach(element => {
        element.x -= 1;
    });


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    /* baishin2 oruulsan hseg */
    //ctx.drawImage(imgBaishin2, xbaishin2, ybaishin2, imgBaishin2.width, imgBaishin2.height);

    /* baishin oruulsan heseg */
    //ctx.drawImage(imgBaishin, xbaishin, ybaishin, imgBaishin.width, imgBaishin.height)

    drawClouds();
    drawDirts();
    drawLands();
    drawShavars();
    drawDogs();
    drawBaishins();
    drawLamps();
    drawNvhs();

    /* land orulsan heseg */
    ctx.drawImage(land, lands[0].x, lands[0].y, lands[0].height, lands[0].width);

    /* baishin orulsan hseg */
    ctx.drawImage(baishinpic, baishins[0].x, baishins[0].y, baishins.width, baishins.height);
    drawBlueskys();
    drawGeruud();

    /* lamp oruulsan heseg */
    //ctx.drawImage(imgLamp, xlamp, ylamp, imgLamp.width, imgLamp.height);

    /* lamp oruulsan heseg */
    ctx.drawImage(lamppic, lamps[0].x, lamps[0].y, lamps[0].width, lamps[0].height);

    /* dog orulsan hseg */
    ctx.drawImage(dogpic, dogs[0].x, dogs[0].y, dogs.width, dogs.height);
    //ctx.drawImage(imgDog, Xdog, Ydog, imgDog.width, imgDog.height);

    /* boy girl oruulsan ni */

    // ctx.drawImage(imgPe1, boy.x, boy.y, boy.height, boy.width);
    drawBoy();

    if (isRunning == false){
        if (goingUp) {
            speed = Math.max(0, speed - gravity);
            if (speed == 0)
                goingUp = false;
            else
                boy.y = Math.max(0.1 * parseInt(canvas.height), boy.y - speed);
        } else {
            speed = speed + gravity;
            boy.y = Math.min(0.6 * parseInt(canvas.height), boy.y + speed);
        }

        if (boy.y == 0.6 * parseInt(canvas.height)) {
            setTimeout(function(){isRunning = true;}, 150);
        }
        console.log(speed, goingUp);
    }

}, 20);


function drawBoy() {
    if (isRunning){
        if (step > 2) {step = 0;}
        ctx.drawImage(boyWalk[step], boy.x, boy.y, boy.height, boy.width);
        if (time % 16 == 0)
            step++;
     time++;
    } else {
     
        if(step > 3){
            // isRunning = true;
            step = 0;
        }
        var zurag = new Image();
        zurag.src = "/.images/boy-jump-1.png";

        if(step == 0){
        ctx.drawImage(zurag, boy.x, boy.y, boy.height - 9, boy.width);
        }

        var zurag1= new Image();
        zurag1.src = "./images/boy-jump-2.png";

        if(step == 1){
        ctx.drawImage(zurag1, boy.x, boy.y, boy.height - 9, boy.width);
        }

        var zurag2 = new Image();
        zurag2.src = "./images/boy-jump-3.png";

        if(step == 2){
        ctx.drawImage(zurag2, boy.x, boy.y, boy.height + 23, boy.width);
        } 

        var zurag3 = new Image();
        zurag3.src = "./images/boy-jump-4.png";

        if(step == 3){
            ctx.drawImage(zurag3, boy.x, boy.y, boy.height + 70, boy.width);
        }  
        if(time % 32 == 0){
            step++;
        }
        time++;
    }
}
document.onkeyup = function (event) {
    if (event.key == " " && isRunning == true) {
        console.log("JUMP");
        // isRunning = false;
        // isJumping = true;
        time = 0;
        step = 0;
        isRunning = false;
        speed = 0.01 * canvas.height;
        gravity = 0.0003 * canvas.height;
        goingUp = true;
    }
}
let onoo = 0;
var scoreInterval = setInterval(() => {
    onoo++;
    document.getElementById("onoo").innerHTML = onoo;
}, 200);


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
