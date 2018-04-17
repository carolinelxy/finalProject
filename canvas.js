// General Prototype/setup

var canvas = document.getElementById('buildings');
var context = canvas.getContext('2d');
var xB;
var yB;
var widthB;
var heightB;

var baseline = 300;
var refWidth = 600;


function setup() {
    var scale = window.devicePixelRatio;

    canvas.width = referenceWidth * scale;
    canvas.height = referenceHeight * scale;
    context.scale(scale, scale);
    
}

function base() {
    context.fillRect(0, 300, canvas.width, 2);
    context.stroke();
    requestAnimationFrame(base);
    
}

function drawB(xB,yB,widthB,heightB  ) {
    
    // drawing buildings
    
    
}

function roof1 () {
    // block roof
    
}

function roof2 () {
    // triangle roof 
}

function window1() {
    
    // square windows
    
}

function window2 () {
    // rectangle windows 
} 

setup();
base();
roof1();
roof2();
window1();
windwo2();
