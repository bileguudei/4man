
    let canvas = document.getElementById("cvs"), ctx = canvas.getContext("2d");

    /* cloud 3shirheg */
    let img = new Image, img0 = new Image, img01 = new Image;

    /* background ub zurag */
    let img1 = new Image;

    /* land, zvleg 4shirheg */
    let img2 = new Image, img21 = new Image, img22 = new Image, img23 = new Image, imgPe1 = new Image, imgCar = new Image, imgDog = new Image;
    function init() {
        /* cloud bairshlin hemjee */
        x = 1800;
        y = 50;
        x0 = 2000;
        y0 = 50;
        x01 = 700;
        y01 = 50;

        /* land, zvlegnii bairshlin hemjee */
        x2 = 2000;
        y2 = 700;
        x21 = 1000;
        y21 = 700;
        x22 = 0;
        y22 = 700;
        x23 = -1000;
        y23 = 700;
        Xpe = 450;
        Ype = 350;

        /* car bairshil */
        Xcar = 1000;
        Ycar = 100;

        /* dog bairshil */
        Xdog = 1500;
        Ydog = 500;

        /* buh oruulsan zurgin holboos */
        img.src = 'cloud.png';
        img0.src = 'cloud.png';
        img01.src = 'cloud.png';
        img1.src = 'ulanbatar.jpeg';
        img2.src = 'ground.png';
        img21.src = 'ground.png';
        img22.src = 'ground.png';
        img23.src = 'ground.png';
        imgPe1.src = 'boy.svg';
        imgCar.src = 'car.png';
        imgDog.src = 'dog2.png';


        /* cloud helber hemjee */
        img.width = 400;
        img.height = 200;

        /* background zuragni hemjee */
        img1.height = 850;
        img1.width = 2000;

        /* land, zvlegnii hemjee */
        img2.height = 300;
        img2.width = 1100;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /* boy girl hemjee */
        imgPe1.width = 250;
        imgPe1.height = 500;

        /* car hemjee */
        imgCar.width = 1200;
        imgCar.height = 1100;

        /* dog hemjee */
        imgDog.width = 400;
        imgDog.height = 300;
    }

    init();

    function start(mode) {
        init();
        img1.src = mode == 0 ? 'nightbackground.jpg' : 'ulanbatar.jpeg';

        img.src = mode == 0 ? 'nightcloud.png' : 'cloud.png';
        img0.src = mode == 0 ? 'nightcloud.png' : 'cloud.png';
        img01.src = mode == 0 ? 'nightcloud.png' : 'cloud.png';

        img2.src = mode == 0 ? 'nightland.svg' : 'ground.png';
        img21.src = mode == 0 ? 'nightland.svg' : 'ground.png';
        img22.src = mode == 0 ? 'nightland.svg' : 'ground.png';
        img23.src = mode == 0 ? 'nightland.svg' : 'ground.png';

        imgPe1.src = mode == 2 ? 'boy.svg' : 'girl.png';

    }

    setInterval(() => {
        x--;
        x0--;
        x01--;
        x2--;
        x21--;
        x22--;
        x23--;
        Xcar--;
        Xdog = Xdog - 3;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /* background oruulsan hseg */
        ctx.drawImage(img1, 0, 0, img1.width, img1.height);



        /* land zulegni orulsan hseg */
        ctx.drawImage(img2, x2, y2, img2.width, img2.height);
        ctx.drawImage(img21, x21, y21, img2.width, img2.height);
        ctx.drawImage(img22, x22, y22, img2.width, img2.height);
        ctx.drawImage(img23, x23, y23, img2.width, img2.height);


        /* cloud orulsan hseg */
        ctx.drawImage(img, x, y, img.width / 2, img.height / 2);
        ctx.drawImage(img0, x0, y0, img.width, img.height);
        ctx.drawImage(img01, x01, y01, img.width + 100, img.height + 100);

        /* car orulsan hseg */
        ctx.drawImage(imgCar, Xcar, Ycar, imgCar.width, imgCar.height);

        /* dog orulsan hseg */
        ctx.drawImage(imgDog, Xdog, Ydog, imgDog.width, imgDog.height);

        /* boy girl oruulsan ni */
        ctx.drawImage(imgPe1, Xpe, Ype, imgPe1.width, imgPe1.height);

    }, 100);

    startGame = () => {

        document.getElementById("startButton").style.visibility = "hidden";
        stopGame = () => {
            clearInterval(drawInterval);
            clearInterval(scoreInterval);
            document.getElementById("startButton").style.visibility = "visible";
            document.getElementById('scoore').style.visibility = "visible";
        }


        function checkCollision() {
            if ((imgPe1.width >= Xdog && Xdog + imgDog.width > 0 && 700 - Ype - imgPe1.height <= imgDog.height)) {
                return true;

                return false;
            }


            function move() {
                Xdog--;
            }

            function draw() {
                // manai hun
                ctx.drawImage( Xpe, Ype, imgPe1.width, imgPe1.height);
                // ailiin  hun
                ctx.drawImage( Xdog, Ydog, imgDog.width, imgDog.height);

                if (checkCollision()) {
                    stopGame();
                }

                move();

            }

            let usersen = 0;
            let gravity = 0.05;
            let score = 0;

            var scoreInterval = setInterval(() => {
                score++;
                document.getElementById("score").innerHTML = score;
            }, 1000);





            function jump() {
                usersen = 1;
                let speed = 3.2;
                let goingUp = true;

                let a = setInterval(() => {

                    if (goingUp) {
                        speed = Math.max(0, speed - gravity);
                        if (speed == 0)
                            goingUp = false;
                        else
                            Ype = Math.min(350, Ype - speed);
                    } else {
                        speed = speed + gravity;
                        Ype = Math.min(350, Ype + speed);
                    }

                    if (Ype == 350) {
                        clearInterval(a);
                        usersen = 0;
                    }
                }, 8.1);

            }

            document.onkeyup = function (event) {
                if (event.key == "q") {
                    console.log("JUMP");
                    if (usersen == 0)
                        jump();
                }
            }


            var drawInterval = setInterval(() => {

                if (x < -50) {

                    x = 500;

                    draw();
                }
                draw();
            }, 2
            );

        };
    }


    startGame();

