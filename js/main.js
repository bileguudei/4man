let isRunning = true;
let time = 0;
let step = 0;

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



setInterval(() => {

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
}, 50);


function drawBoy() {
    if (isRunning){
        if (step > 2) {step = 0;}
        ctx.drawImage(boyWalk[step], boy.x, boy.y, boy.height, boy.width);
        if (time % 3 == 0)
            step++;
        time++;
    }
}