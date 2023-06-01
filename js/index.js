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

// left.addEventListener("click", () => {
//     desc();
//     position();
//     clearInterval(time);
//     timer();
// })

// right.addEventListener("click", () => {
//     add();
//     position();
//     clearInterval(time);
//     timer();
// })

for (let i = 0; i < min.length; i++) {
    min[i].addEventListener("click", () => {
        index = i;
        position();
        clearInterval(time);
        timer();
    })
}
timer();

var navbox = document.querySelector(".nav-box");
var f1 = document.querySelector(".f1");
var rf = document.querySelector(".rf");
var rn = document.querySelector(".rn");
var reface = document.querySelector(".reface");
var rename = document.querySelector(".rename");
var xiala = document.querySelector(".xiala");
var rfimg = reface.childNodes;
var checkname = document.querySelector(".checkname");
var username = document.querySelector("#username");
var nowname = document.querySelector(".name");

document.addEventListener('click', function (event) {
    var clickedElement = event.target;
    if (!clickedElement.closest('.wai')) {
        xiala.style.display = 'none';
        reface.style.display = 'none';
        rename.style.display = 'none';
    }
});

function recolor1(it) {
    it.style.backgroundColor = "#f1f1f1";
}
function recolor2(it) {
    it.style.backgroundColor = "#fff";
}
navbox.addEventListener("mouseover", () => {
    recolor1(navbox);
})
navbox.addEventListener("mouseout", () => {
    recolor2(navbox);
})
navbox.addEventListener("click", () => {
    reface.style.display = 'none';
    rename.style.display = 'none';
    xiala.style.display = "block";
})

rf.addEventListener("click", () => {
    xiala.style.display = "none";
    reface.style.display = "flex";
})
rn.addEventListener("click", () => {
    xiala.style.display = "none";
    rename.style.display = "block";
})

rf.addEventListener("mouseover", () => {
    recolor1(rf);
})
rf.addEventListener("mouseout", () => {
    recolor2(rf);
})

rn.addEventListener("mouseover", () => {
    recolor1(rn);
})
rn.addEventListener("mouseout", () => {
    recolor2(rn);
})

rn.addEventListener("mouseover", () => {
    recolor1(rn);
})
rn.addEventListener("mouseout", () => {
    recolor2(rn);
})


for (let i = 0; i < rfimg.length; i++) {

    rfimg[i].addEventListener("mouseover", () => {
        recolor1(rfimg[i]);
    })
    rfimg[i].addEventListener("mouseout", () => {
        recolor2(rfimg[i]);
    })
    let j = (i + 1) / 2;
    rfimg[i].addEventListener("click", () => {
        f1.style.backgroundImage = "url('../src/img/f" + j + ".jpg')";
    })
}

navbox.addEventListener("click", () => {
    xiala.style.display = "block";
})

var newname = "kk";
checkname.addEventListener("click", () => {
    newname = username.value;
    nowname.textContent = newname;
})

function getElementToPageTop(el) {
    if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
    }
    return el.offsetTop
}
window.addEventListener('scroll', function () {
    var grade = document.querySelector('.grade');
    if (window.pageYOffset > getElementToPageTop(grade)) {
        grade.style.position = 'fixed';
        grade.style.top = '0';
        grade.style.right = '17%';
    } else {
        grade.style.position = 'absolute';
        grade.style.top = 'none';
        grade.style.right = '-43%';
    }
});