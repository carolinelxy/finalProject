$(document).ready(function() {
    $('img').on('click',function(){
        $('img').css('border','2px solid');
    });
});

 
//const images = document.querySelectorAll('img');
//
//
//
//function changeOpacity(event) {
//  if (event.target.tagName == 'IMG') {
//    for (var i = 0; i < images.length; i++) {
//      images[i].className = 'semitransparent';
//    }
//    event.target.className = "opaque";
//    event.target.addEventListener('mouseout', resetOpacity);
//  }
//  event.stopPropagation();
//}
//
//function resetOpacity() {
//  for (var i = 0; i < images.length; i++) {
//    images[i].className = 'opaque';
//  }
//}
//
//gallery.addEventListener('mouseover', changeOpacity);
//
//
///*
//Secondary Colors
//*/
//
//// access buttons
//var buttons = document.querySelectorAll('svg.btn');
//// console.log(buttons);
//var cyanBtn = buttons[0];
//var magentaBtn = buttons[1];
//var yellowBtn = buttons[2];
//
//// access web page background
//var background = document.querySelector('body');
//
//// functions to change background colors
//function cyanBg() {
//  background.style.backgroundColor = "cyan";
//}
//
//function magentaBg() {
//  background.style.backgroundColor = "magenta";
//}
//
//function yellowBg() {
//  background.style.backgroundColor = "yellow";
//}
//
//// event listeners
//cyanBtn.addEventListener('click', cyanBg);
//magentaBtn.addEventListener('click', magentaBg);
//yellowBtn.addEventListener('click', yellowBg);