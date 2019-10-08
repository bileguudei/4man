let imgPe1 = new Image; imgPe1.src = './images/P_boy.png';
/* cloud */
let cloud = new Image; cloud.src = './images/P_cloud.png';
/* nvh */
let nvhpic = new Image; nvhpic.src = './images/P_nuh.png';
/* lamp */
let lamppic = new Image; lamppic.src = './images/P_Lamp.png';
/* baishin */
let baishinpic = new Image; baishinpic.src = './images/P_baishin.png';
/* shavar */
let shavarpic = new Image; shavarpic.src = './images/P_shavar.png';
/* dog */
let dogpic = new Image; dogpic.src = './images/P_dog.png';
/* shalbaag */
let dirt = new Image; dirt.src = './images/P_shavar.png';
/* land */
let land = new Image; land.src = './images/P_land.png';
/* mashin zurag */
let imgCar = new Image; imgCar.src = './images/P_car.png';
/* nohoi zurag */
let imgDog = new Image; imgDog.src = './images/P_dog.png';
/* hushuu zurag */
let imgStatu = new Image; imgStatu.src = './images/P_Statu.png';
/* bluesky zurag */
let bluesky = new Image; bluesky.src = './images/P_BlueSky.png';
/* mongol ger */
let Mongolger = new Image; Mongolger.src = './images/P_Ger.png';
/* svmhiid  */
let hiid = new Image; hiid.src = './images/P_SvmHiid.png';
/* nar */
let nara = new Image; nara.src = './images/nar.png'

let boyWalk = [];
[0, 1, 2].forEach(function(val){
    let img = new Image();
    img.src = "./images/boy-walk-" + val + ".png";
    boyWalk.push(img);
});
/*
let dogWalk = [];
[0, 1, 2].forEach(function (vol){
    let nohoi = new Image();
    nohoi.src = "./images/nohoi-yvah-" + vol + ".png";
    dogWalk.push(nohoi);
});*/

/*let boyJump = [];
[1, 2, 3].forEach(function(vel){
    let zurag = new Image();
    zurag.src = "./images/boy-jump-" + vel + ".png";

    boyJump.push(zurag);
})*/

let status = [{ x: 350, y: 0.45 * parseInt(canvas.height), h: 0.35 * parseInt(canvas.height), w: 0.3 * parseInt(canvas.height) * 1 }];
let baishins = [{ x: 50, y: 0.5 * parseInt(canvas.height), h: 0.3 * parseInt(canvas.height), w: 0.3 * parseInt(canvas.height) * 1 }];
let clouds = [{ x: 80, y: 0.1 * parseInt(canvas.height), h: 0.15 * parseInt(canvas.height), w: 0.3 * parseInt(canvas.height) * 1}, { x: 300, y: 0.1 * parseInt(canvas.height), h: 0.25 * parseInt(canvas.height), w: 0.4 * parseInt(canvas.height) * 1}, { x: 550, y: 0.1 * parseInt(canvas.height), h: 0.2 * parseInt(canvas.height), w: 0.35 * parseInt(canvas.height) * 1}];
let boy = { x: 50, y: 0.65 * parseInt(canvas.height), height: 0.15 * parseInt(canvas.height), width: 0.25 * parseInt(canvas.height) * 1 };
let lands = [{ x: 0, y: 0.8 * parseInt(canvas.height), h: 0.2 * parseInt(canvas.height), w: 0.5 * parseInt(canvas.width) * 1 }, { x: 0.5 * parseInt(canvas.width), y: 0.8 * parseInt(canvas.height), h: 0.2 * parseInt(canvas.height), w: 0.5 * parseInt(canvas.width) * 1 }];
let blueskys = [{ x: 190, y: 0.18 * parseInt(canvas.height), h: 0.63 * parseInt(canvas.height), w: 0.4 * parseInt(canvas.height) * 1 }];
let geruud = [{ x: 600, y: 0.6 * parseInt(canvas.height), h: 0.2 * parseInt(canvas.height), w: 0.3 * parseInt(canvas.height) * 1 }];
let dogs = [{ x: 650, y: 0.8 * parseInt(canvas.height), h: 0.1 * parseInt(canvas.height), w: 0.1 * parseInt(canvas.height) * 1 }];
let nvhs = [{ x: 450, y: 0.86 * parseInt(canvas.height), h: 0.05 * parseInt(canvas.height), w: 0.1 * parseInt(canvas.height) * 1 }];
let shavars = [{ x: 250, y: 0.85 * parseInt(canvas.height), h: 0.07 * parseInt(canvas.height), w: 0.12 * parseInt(canvas.height) * 1 }];
let lamps = [{ x: 20, y: 0.67 * parseInt(canvas.height), h: 0.15 * parseInt(canvas.height), w: 0.07 * parseInt(canvas.height) * 1 }, { x: 165, y: 0.67 * parseInt(canvas.height), h: 0.15 * parseInt(canvas.height), w: 0.07 * parseInt(canvas.height) * 1 }, { x: 330, y: 0.67 * parseInt(canvas.height), h: 0.15 * parseInt(canvas.height), w: 0.07 * parseInt(canvas.height) * 1 }, { x: 440, y: 0.67 * parseInt(canvas.height), h: 0.15 * parseInt(canvas.height), w: 0.07 * parseInt(canvas.height) * 1 }, {x: 580, y: 0.67 * parseInt(canvas.height), h: 0.15 * parseInt(canvas.height), w: 0.07 * parseInt(canvas.height) * 1}];
let hiids = [{ x: 450, y: 0.4 * parseInt(canvas.height), h: 0.4 * parseInt(canvas.height), w: 0.4 * parseInt(canvas.height) * 1 }];