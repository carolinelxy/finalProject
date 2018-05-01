

const canvasBase = document.getElementById('base');

const contextBase = canvasBase.getContext('2d');

var referenceWidth = 1440;
var referenceHeight = 800;

function setup() {

    // set display size
    canvasBase.style.width = referenceWidth + 'px';
    canvasBase.style.height = referenceHeight + 'px';
    
    
    // set actual device pixels 
    var scale = window.devicePixelRatio;

    canvasBase.width = referenceWidth * scale;
    canvasBase.height = referenceHeight * scale;
    
    
    // normalize the coordinate system
    contextBase.scale(scale, scale);
    
    // call the functions
    base();
    
}

function base() {
    contextBase.fillRect(0, 600, 1440, 20);
    contextBase.fillStyle = "#000000";
    contextBase.stroke();
    requestAnimationFrame(base);
}

function drawB(xB,yB,widthB,heightB) {
    
    contextBase.fillRect(xB, yB, widthB, heightB);
    contextBase.fillStyle = "#999999";    
    requestAnimationFrame(drawB);
    
    // drawing building
    
}

function roof1 () {
    
}

function roof2 () {
    // 
}

function drawW(xW, yW, widthW, heightW) {
    
    contextBase.fillRect(xW, yW, widthW, heightW);
    contextBase.fillStyle = "#000000";
    //contextBase.stroke();
    requestAnimationFrame(drawW);
    
    /*for (var i=0; i < 5, i++) {
        contextBase.fillRect();        
        drawW(loop, xW+30, yW+40, 20, 30);
    }
    contextBase.restore();
    context.translate(0, 20);*/
}

function window1() {
    
    // square windows
    
}

function window2 () {
    // rectangle windows 
} 

setup();
base();
drawB(100, 300, 160, 300);
drawB(100, 300, 160, 300);
drawB(300, 350, 160, 250);
drawB(500, 200, 160, 400);
drawB(700, 150, 160, 450);
drawB(900, 350, 160, 250);
drawB(1100, 300, 160, 300);
//drawW(110, 325, 20, 30);
//drawW(160, 600, 20, 30);


// roof building 1
drawB(120, 250, 120, 300);
drawB(140, 200, 80, 300);
drawB(160, 125, 40, 300);

// roof building 2
drawB(320, 300, 120, 300);
//drawB(340, 200, 80, 300);
//drawB(360, 125, 40, 300);

drawB(920, 300, 120, 300);

drawB(1120, 250, 120, 300);
drawB(1140, 200, 80, 300);
drawB(1160, 125, 40, 300);



function building1() {
    for (var i=0; i<= 5; i++) {
        var x = 30;
        var y = 40;
        drawW(110, 325, 15, 35);
        drawW(110, 325+(y*i), 15, 35);
        drawW(140, 325+(y*i), 15, 35);
        drawW(170, 325+(y*i), 15, 35);
        drawW(200, 325+(y*i), 15, 35);
        drawW(230, 325+(y*i), 15, 35);
    }       
}
building1();

// for 300
function building2() {
    for (var i=0; i<= 4; i++) {
        var x = 30;
        var y = 40;
        //drawW(310, 375, 20, 30);
        drawW(310, 375+(y*i), 20, 30);
        drawW(310+(x*i), 375, 20, 30);
        drawW(340, 375+(y*i), 20, 30);
        drawW(370, 375+(y*i), 20, 30);
        drawW(400, 375+(y*i), 20, 30);
        drawW(430, 375+(y*i), 20, 30);
    }
}
building2();

/*
drawW(310, 375, 20, 30); //this turned out to be black
drawW(310, 375, 20, 30);
drawW(340, 375, 20, 30);
drawW(370, 375, 20, 30);
drawW(400, 375, 20, 30);
drawW(430, 375, 20, 30);

drawW(310, 415, 20, 30);
drawW(310, 455, 20, 30);
drawW(310, 495, 20, 30);
drawW(310, 535, 20, 30);

drawW(340, 415, 20, 30);*/

// rectangular windows for 500
function building3() {
    for (var i=0; i <= 8 ; i++) {
        var j = 40;
        drawW(510, 225, 140, 30);
        drawW(510, 225 + (j*i), 140, 30);   
}
}
building3();

// building 4
function building4() {
    for (var i=0; i<= 9; i++) {
        var x = 30;
        var y = 40;
        drawW(710, 175+(y*i), 15, 35);
        drawW(740, 175+(y*i), 15, 35);
        drawW(770, 175+(y*i), 15, 35);
        drawW(800, 175+(y*i), 15, 35);
        drawW(830, 175+(y*i), 15, 35);
    }    
}
building4();

// building 5
function building5() {
    for (var i=0; i<= 4; i++) {
        var x = 30;
        var y = 40;
        //drawW(310, 375, 20, 30);
        drawW(910, 375+(y*i), 20, 30);
        drawW(910+(x*i), 375, 20, 30);
        drawW(940, 375+(y*i), 20, 30);
        drawW(970, 375+(y*i), 20, 30);
        drawW(1000, 375+(y*i), 20, 30);
        drawW(1030, 375+(y*i), 20, 30);
    }
}
building5();

function building6() {
        for (var i=0; i <= 6 ; i++) {
        var j = 40;
        drawW(1110, 315, 140, 30);
        drawW(1110, 315 + (j*i), 140, 30);   
}
}
building6();

//drawW(510, 225, 140, 30);
//drawW(510, 265, 140, 30);

//drawB(400, 260, 160, 240);

//roof1();
//roof2();
//window1();
//windwo2();
