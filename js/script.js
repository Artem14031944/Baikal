"use strict"

let offset = 0;
let timer = 0;
const slider = document.querySelector('.slider_line');


function right() {
    offset += 553;
    if(offset > 1106) {
        offset = 0;
    }
    slider.style.left = -offset + 'px'
};

function left() {
    offset -= 553;
    if(offset < 0) {
        offset = 1106;
    }
    slider.style.left = -offset + 'px'
};

document.querySelector('.slider_right').addEventListener('click', right);
document.querySelector('.slider_left').addEventListener('click', left);




function autoSlider() {
    timer = setInterval(left, 4000);
};

autoSlider();