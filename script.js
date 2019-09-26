
    let canvas = document.getElementById("cvs"), ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    /* cloud 3shirheg */
    let img = new Image, img0 = new Image, img01 = new Image;

    /* background ub zurag */
    let img1 = new Image;

    /* land, zvleg 4shirheg */
    let img2 = new Image, img21 = new Image, img22 = new Image, img23 = new Image,
    imgPe1 = new Image, imgCar = new Image, imgDog = new Image, imgStatu = new Image;
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
        Xpe = 100;
        Ype = 350;

        /* car bairshil */
        Xcar = 1000;
        Ycar = 600;

        /* dog bairshil */ 
        Xdog = 1500;
        Ydog = 630;

        /* boy iin bairlal */
        Xpe = 500;
        Ype = 520;

        /* hushuu bairlal */
        xstatu = 650;
        ystatu = 300;   

        /* buh oruulsan zurgin holboos */
        img.src = 'cloud.png';
        img0.src = 'cloud.png';
        img01.src = 'cloud.png';
        img2.src = 'land.png';
        img21.src = 'land.png';
        img22.src = 'land.png';
        img23.src = 'land.png';
        imgPe1.src = 'boy.png';
        imgCar.src = 'car.png'; 
        imgDog.src = 'Dog.png';
        imgStatu.src = 'Statu.png';


        /* cloud helber hemjee */
        img.width = 400;
        img.height = 200;

        
        /* land, zvlegnii hemjee */
        img2.height = 150;
        img2.width = 1100;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /* boy girl hemjee */
        imgPe1.width = 150;
        imgPe1.height = 250;
        
        /* car hemjee */
        imgCar.width = 400;
        imgCar.height = 150;

        /* dog hemjee */ 
        imgDog.width = 170;
        imgDog.height = 120;

        /* hushuu hemjee */ 
        imgStatu.height = 400;
        imgStatu.width = 300;
    }

    init();
    function start(mode) {
        init();
        img1.src = mode == 0 ? 'nightbackground.jpg' : 'ulanbatar.jpeg';
    }
    
    setInterval(() => {
        x--;
        x0--;
        x01--;
        x2--;
        x21--;
        x22--;
        x23--;
        Xcar = Xcar - 1;
        Xdog = Xdog - 5; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        

        /* land zulegni orulsan hseg */
        ctx.drawImage(img2, x2, y2, img2.width, img2.height);
        ctx.drawImage(img21, x21, y21, img2.width, img2.height);
        ctx.drawImage(img22, x22, y22, img2.    width, img2.height);
        ctx.drawImage(img23, x23, y23, img2.width, img2.height);
        

        /* cloud orulsan hseg */
        ctx.drawImage(img, x, y, img.width / 2, img.height / 2);
        ctx.drawImage(img0, x0, y0, img.width, img.height);
        ctx.drawImage(img01, x01, y01, img.width + 50, img.height + 50);
        ctx.drawImage(img, x + 1000, y + 10 , img.width / 2, img.height / 2);
        ctx.drawImage(img0, x0 + 500, y0 - 10 , img.width, img.height);
        ctx.drawImage(img01, x01 + 1500, y01 , img.width + 50, img.height + 50);

        /* hushuu oruulssan heseg*/
        ctx.drawImage(imgStatu, xstatu, ystatu, imgStatu.width, imgStatu.height)

        /* car orulsan hseg */
        ctx.drawImage(imgCar, Xcar, Ycar, imgCar.width, imgCar.height);

        /* dog orulsan hseg */ 
        ctx.drawImage(imgDog, Xdog, Ydog, imgDog.width, imgDog.height);

        /* boy girl oruulsan ni */
        ctx.drawImage(imgPe1, Xpe, Ype, imgPe1.width, imgPe1.height);
        
    }, 100);