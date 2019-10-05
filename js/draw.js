function drawGeruud() {
    if (geruud.length != 0 && geruud[0].x < -100){
        geruud.shift();
    }

    geruud.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(Mongolger, element.x, element.y, element.w, element.h);
        }
    });

    if (geruud.length < 1) {
        let xPos = 600;
        let yPos = 0.6 * parseInt(canvas.height);
        let w = 0.3 * parseInt(canvas.height) * 1;
        let h = 0.2 * parseInt(canvas.height);
        geruud.push({ x: xPos, y: yPos, w: w, h: h})
    }
}

function drawHiids() {
    if (hiids.length != 0 && hiids[0].x < -100){
        hiids.shift();
    }
 
     hiids.forEach(element => {
         // console.log(element);
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(hiid, element.x, element.y, element.w, element.h);
        }
    });
 
    if (hiids.length < 1) {
        let xPos = 600;
        let yPos = 0.4 * parseInt(canvas.height);
        let w = 0.4 * parseInt(canvas.height) * 1;
        let h = 0.4 * parseInt(canvas.height);
        hiids.push({ x: xPos, y: yPos, w: w, h: h})
    }
}

function drawStatus() {
    if (status.length != 0 && status[0].x < -100){
        status.shift();
    }

    status.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(imgStatu, element.x, element.y, element.w, element.h);
        }
    });

    if (status.length < 1) {
        let xPos = 600;
        let yPos = 0.45 * parseInt(canvas.height);
        let w = 0.3 * parseInt(canvas.height) * 1;
        let h = 0.35 * parseInt(canvas.height);
        status.push({ x: xPos, y: yPos, w: w, h: h})
    }
}




function drawBlueskys() {
    if (blueskys.length != 0 && blueskys[0].x < -100) {
        blueskys.shift();
    }

    blueskys.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(bluesky, element.x, element.y, element.w, element.h);
        }
    });

    if (blueskys.length < 1) {
        let xPos = 600;
        let yPos = 0.18 * parseInt(canvas.height);
        let w = 0.4 * parseInt(canvas.height) * 1 ;
        let h = 0.63 * parseInt(canvas.height);
        blueskys.push({ x: xPos, y: yPos, w: w, h: h})
    }
}



function drawLands() {
    if (lands.length != 0 && lands[0].x < -parseInt(canvas.height)){
       lands.shift();
    }

    lands.forEach(element => {
        // console.log(element);
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(land, element.x, element.y, element.w, element.h);
        }
    });

    if (lands[lands.length - 1].x + lands[lands.length - 1].w - 10< canvas.width) {
        let xPos = parseInt(canvas.width) - 50;
        let yPos = 0.8 * parseInt(canvas.height);
        let w = parseInt(canvas.height);
        let h = 0.2 * parseInt(canvas.height);
        lands.push({ x: xPos, y: yPos, w: w, h: h})
    }
}


function drawClouds() {
    if (clouds.length != 0 && clouds[0].x < -100) {
        clouds.shift();
    }

    clouds.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(cloud, element.x, element.y, element.w, element.h);
        }
    });

    if (clouds.length < 3) {
        let xPos = 600;
        let yPos = 0.1 * parseInt(canvas.height);
        let w = 0.3 * parseInt(canvas.height) * 1;
        let h = 0.2 * parseInt(canvas.height);
        clouds.push({ x: xPos, y: yPos, w: w, h: h })
    }
}



function drawLamps() {
    if (lamps.length != 0 && lamps[0].x < -50) {
        lamps.shift();
    }

    lamps.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(lamppic, element.x, element.y, element.w, element.h);
        }
    });

    /*if (lamps.length < 2) {
        let xPos = 520;
        let yPos = 0.67 * parseInt(canvas.height);
        let w = 0.07 * parseInt(canvas.height) * 1;
        let h = 0.15 * parseInt(canvas.height);
        lamps.push({ x: xPos, y: yPos, w: w, h: h })
    }*/
}




function drawBaishins() {
    if (baishins.length != 0 && baishins[0].x < -100) {
        baishins.shift();
    }

    baishins.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(baishinpic, element.x, element.y, element.w, element.h);
        }
    });

    if (baishins.length < 1){
        let xPos = 600;
        let yPos = 0.5 * parseInt(canvas.height)
        let w = 0.3 * parseInt(canvas.height) * 1;
        let h = 0.3 * parseInt(canvas.height);
        baishins.push({x: xPos, y: yPos, w: w, h: h})
    } 

}
let alhalt = 0;
let hugatsaa = 0;
function drawDogs() {
    

    
    
    if (dogs.length != 0 && dogs[0].x < 0) {
        dogs.shift();
    }

    dogs.forEach(element => {
        
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            if(alhalt > 1){
                alhalt = 0;
            }
            var bulldog = new Image();
            bulldog.src = "./images/nohoi-yvah-1.png";

            if(alhalt == 0){
                ctx.drawImage(bulldog, element.x, element.y, element.h, element.w);
            }
            var bulldog1 = new Image();
            bulldog1.src = "./images/nohoi-yvah-2.png";

            if(alhalt == 1){
                ctx.drawImage(bulldog1, element.x, element.y, element.h, element.w);
            }
            if(hugatsaa % 32 == 0){
                alhalt++;
            }
            hugatsaa++;
    
        }
    });

    if (dogs.length < 1) {
        let xPos = 650;
        let yPos = 0.75 * parseInt(canvas.height);
        let w = 0.15 * parseInt(canvas.height);
        let h = 0.15 * parseInt(canvas.height);
        dogs.push({ x: xPos, y: yPos, w: w, h: h })
    }
}





function drawShavars() {
    if (shavars.length != 0 && shavars[0].x < 0) {
        shavars.shift();
    }

    shavars.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(shavarpic, element.x, element.y, element.w, element.h);
        }
    });

    if (shavars.length < 2) {
        let xPos = 500;
        let yPos = 0.85 * parseInt(canvas.height);
        let w = 0.12 * parseInt(canvas.height) * 1;
        let h = 0.07 * parseInt(canvas.height);
        shavars.push({ x: xPos, y: yPos, w: w, h: h })
    }
}


function drawNvhs() {
    if (nvhs.length != 0 && nvhs[0].x < 0) {
        nvhs.shift();
    }

    nvhs.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(nvhpic, element.x, element.y, element.w, element.h);
        }
    });

    if (nvhs.length < 2) {
        let xPos = 450;
        let yPos = 0.86 * parseInt(canvas.height);
        let w = 0.1 * parseInt(canvas.height) * 1;
        let h = 0.05 * parseInt(canvas.height);
        nvhs.push({ x: xPos, y: yPos, w: w, h: h })
    }
}
