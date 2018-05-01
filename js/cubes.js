var cube1 = document.querySelector('.container').children[0];
var cube2 = document.querySelector('.container').children[1];
var cube3 = document.querySelector('.container').children[2];
var panelClassName_1 = 'front';
var panelClassName2_1 = 'show-front';

var panelClassName_2 = 'front';
var panelClassName2_2 = 'show-front';

var panelClassName_3 = 'front';
var panelClassName2_3 = 'show-front';

var names = ["front", "back", "right", "left", "top", "bottom"];
var names2 = ["show-front", "show-back", "show-right", "show-left", "show-top", "show-bottom"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
  setInterval(function() {
    // Cube 1
    var num = getRandomInt(0, 5);
    cube1.classList.remove(panelClassName_1);
    cube1.classList.remove(panelClassName2_1);
    panelClassName_1 = names[num];
    panelClassName2_1 = names2[num];
    cube1.classList.add(panelClassName_1);
    cube1.classList.add(panelClassName2_1);

    // Cube 2
    num = getRandomInt(0, 5);
    cube2.classList.remove(panelClassName_2);
    cube2.classList.remove(panelClassName2_2);
    panelClassName_2 = names[num];
    panelClassName2_2 = names2[num];
    cube2.classList.add(panelClassName_2);
    cube2.classList.add(panelClassName2_2);

    // Cube 3
    num = getRandomInt(0, 5);
    cube3.classList.remove(panelClassName_3);
    cube3.classList.remove(panelClassName2_3);
    panelClassName_3 = names[num];
    panelClassName2_3 = names2[num];
    cube3.classList.add(panelClassName_3);
    cube3.classList.add(panelClassName2_3);
  }, 1000);
}