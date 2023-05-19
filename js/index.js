function setFontSize() {
    const screenWidth = document.documentElement.clientWidth;
    const fontSize = screenWidth / 80;
    document.documentElement.style.fontSize = fontSize + 'px';
}

window.addEventListener('load', setFontSize);
window.addEventListener('resize', setFontSize);

$(function () {
    var navigation_height = $('.navbar').outerHeight();
    var start_height = $(document).scrollTop();
    $(window).scroll(function () {
        var end_height = $(document).scrollTop();
        if (end_height > navigation_height) {
            $('.navbar').addClass('hide');
        } else {
            $('.navbar').removeClass('hide');
        }
        if (end_height < start_height) {
            $('.navbar').removeClass('hide');
        }
        start_height = $(document).scrollTop();
    });
});

let left = document.querySelector(".button-left");
let right = document.querySelector(".button-right");
let min = document.querySelectorAll(".min");
let images = document.querySelector(".images");
let index = 0;
let time;

function position() {
    images.style.left = (index * -100) + "%";
}

function add() {
    if (index >= min.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

function desc() {
    if (index < 1) {
        index = min.length - 1;
    } else {
        index--;
    }
}

function timer() {
    time = setInterval(() => {
        index++;
        desc();
        add();
        position();
    }, 3000)
}

left.addEventListener("click", () => {
    desc();
    position();
    clearInterval(time);
    timer();
})

right.addEventListener("click", () => {
    add();
    position();
    clearInterval(time);
    timer();
})

for (let i = 0; i < min.length; i++) {
    min[i].addEventListener("click", () => {
        index = i;
        position();
        clearInterval(time);
        timer();
    })
}

timer();