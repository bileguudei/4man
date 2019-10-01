function drawGeruud() {
    geruud.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(Mongolger, element.x, element.y, element.w, element.h);
        }
    });

    if (geruud.length < 1) {
    }
}

function drawBlueskys() {
    blueskys.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(bluesky, element.x, element.y, element.w, element.h);
        }
    });

    if (blueskys.length < 1) {
        let xPos = 1800
    }
}

function drawLands() {
    //if (lands.length != 0 && lands[0].x < 0){
    //    lands.shift();
    //}

    lands.forEach(element => {
        // console.log(element);
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(land, element.x, element.y, element.w, element.h);
        }
    });

    if (lands.length < 2) {
        let xPos = 1800;
    }


}

function drawClouds() {
    if (clouds.length != 0 && clouds[0].x < 0) {
        clouds.shift();
    }

    clouds.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(clouds, element.x, element.y, element.w, element.h);
        }
    });

    if (clouds.length < 3) {
        let xPos = 500 + Math.floor(Math.random() * 50);
        let yPos = Math.floor(Math.random() * 50);
        let w = Math.floor(150 + Math.random() * 50);
        let h = Math.floor(80 + Math.random() * 50);
        clouds.push({ x: xPos, y: yPos, w: w, h: h })
    }
}


function drawDirts() {
    if (dirts.length != 0 && dirts[0].x < 0) {
        dirts.shift();
    }

    dirts.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(dirt, element.x, element.y, element.w, element.h);
        }
    });

    if (dirts.length < 1) {
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = 700 + Math.floor(Math.random() * 50);
        let w = Math.floor(50 + Math.random() * 40);
        let h = Math.floor(20 + Math.random() * 20);
        dirts.push({ x: xPos, y: yPos, w: w, h: h })
    }
}

function drawClouds() {
    if (clouds.length != 0 && clouds[0].x < 0) {
        clouds.shift();
    }

    clouds.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(cloud, element.x, element.y, element.w, element.h);
        }
    });

    if (clouds.length < 3) {
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = Math.floor(Math.random() * 50);
        let w = Math.floor(300 + Math.random() * 100);
        let h = Math.floor(100 + Math.random() * 100);
        clouds.push({ x: xPos, y: yPos, w: w, h: h })
    }
}

function drawLamps() {
    if (lamps.length != 0 && lamps[0].x < 0) {
        lamps.shift();
    }

    lamps.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(lamppic, element.x, element.y, element.w, element.h);
        }
    });

    if (lamps.length < 3) {
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = Math.floor(Math.random() * 50);
        let w = Math.floor(300 + Math.random() * 100);
        let h = Math.floor(100 + Math.random() * 100);
        lamps.push({ x: xPos, y: yPos, w: w, h: h })
    }
}

function drawBaishins() {
    if (baishins.length != 0 && baishins[0].x < 0) {
        baishins.shift();
    }

    baishins.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(baishinpic, element.x, element.y, element.w, element.h);
        }
    });

    /* if (baishins.length < 3){
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = Math.floor(Math.random() + 50);
        let w = Math.floor(300 + Math.random() * 100);
        let h = Math.floor(100 + Math.random() * 100);
        baishins.push({x: xPos, y: yPos, w: w, h: h})
    } */

}

function drawDogs() {
    if (dogs.length != 0 && dogs[0].x < 0) {
        dogs.shift();
    }

    dogs.forEach(element => {
        if (!(element.x + element.w < 0 && element.x > canvas.width)) {
            ctx.drawImage(dogpic, element.x, element.y, element.w, element.h);
        }
    });

    if (dogs.length < 3) {
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = Math.floor(Math.random() * 50);
        let w = Math.floor(300 + Math.random() * 100);
        let h = Math.floor(100 + Math.random() * 100);
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

    if (shavars.length < 3) {
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = Math.floor(Math.random() * 50);
        let w = Math.floor(300 + Math.random() * 100);
        let h = Math.floor(100 + Math.random() * 100);
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

    if (nvhs.length < 3) {
        let xPos = 1800 + Math.floor(Math.random() * 100);
        let yPos = Math.floor(Math.random() * 50);
        let w = Math.floor(300 + Math.random() * 100);
        let h = Math.floor(100 + Math.random() * 100);
        nvhs.push({ x: xPos, y: yPos, w: w, h: h })
    }
}