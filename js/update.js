var input = document.querySelector("#username");
var nowname = document.querySelector(".nowname");
var nowname2 = document.querySelector(".nowname-2");
var moodnum = document.querySelectorAll(".moodnum");
var mood = document.querySelectorAll(".mood");
var nowMoment = document.querySelector(".nowMoment");
var memMoment = document.querySelector(".memMoment");
var updates = document.querySelector(".updates");
var heartnum = document.querySelector(".heartnum");

var savedName = localStorage.getItem("nowname");

if (savedName) {
    nowname.textContent = savedName;
    nowname2.textContent = savedName;
} else {
    localStorage.setItem("nowname", nowname.textContent);
}

var checkname = document.querySelector(".checkname");
checkname.addEventListener("click", function () {
    var newName = input.value;
    nowname.textContent = newName;
    nowname2.textContent = newName;
    localStorage.setItem("nowname", newName);
});

var savedFace = localStorage.getItem("savedFace");
var f2 = document.querySelector(".f2");
if (savedFace) {
    f1.style.backgroundImage = savedFace;
    f2.style.backgroundImage = savedFace;
} else {
    localStorage.setItem("savedFace", getComputedStyle(f1).backgroundImage);
}
for (let i = 0; i < rfimg.length; i++) {
    let j = (i + 1) / 2;
    rfimg[i].addEventListener("click", () => {
        f1.style.backgroundImage = "url('../src/img/f" + j + ".jpg')";
        f2.style.backgroundImage = "url('../src/img/f" + j + ".jpg')";
        var newFace = getComputedStyle(f1).backgroundImage;
        localStorage.setItem("savedFace", newFace);
    })
}

var upmoment = document.querySelector(".upmoment");
var loc = window.localStorage;
var locnum = parseInt(loc.getItem("locnum"));
if (!locnum) {
    loc.setItem("locnum", 0);
}



upmoment.addEventListener("click", () => {
    var text = document.querySelector("#newmoment").value;
    if (!text) {
        alert("内容不能为空！");
    } else {
        locnum += 1;
        var mem = document.createElement("div");
        var nowbox = document.createElement("div");
        var memface = document.createElement("div");
        var memname = document.createElement("div");
        var memcontent = document.createElement("div");
        var mood = document.createElement("span");
        var moodnum = document.createElement("span");
        var x = document.createElement("div");

        mem.className = "mem";
        nowbox.className = "now-box";
        memface.className = "memface";
        memname.className = "memname";
        memcontent.className = "mem-content";
        mood.className = "mood";
        moodnum.className = "moodnum";
        x.className = "x";

        nowbox.appendChild(memface);
        nowbox.appendChild(memname);
        mem.appendChild(nowbox);
        mem.appendChild(memcontent);
        mem.appendChild(mood);
        mem.appendChild(moodnum);
        mem.appendChild(x);

        mood.innerHTML = "&#10084;";
        moodnum.innerHTML = "0";
        x.innerHTML = "&#215;";

        var loctext = "loctext" + locnum;
        var locface = "locface" + locnum;
        var locname = "locname" + locnum;
        var locmoodnum = "locmoodnum" + locnum;
        loc.setItem(loctext, text);
        loc.setItem(locface, getComputedStyle(f1).backgroundImage);
        loc.setItem(locname, nowname.textContent);
        loc.setItem(locmoodnum, moodnum.textContent);

        memcontent.innerHTML = text;
        memface.style.backgroundImage = getComputedStyle(f1).backgroundImage;
        memname.textContent = nowname.textContent;

        memMoment.appendChild(mem);
        document.querySelector("#newmoment").value = "";
        loc.setItem("locnum", locnum);
    }

})


for (let i = 1; i <= parseInt(locnum); i++) {
    var loctext = "loctext" + i;
    var locface = "locface" + i;
    var locname = "locname" + i;
    var locmoodnum = "locmoodnum" + i;
    console.log(locmoodnum, i, localStorage.getItem(locmoodnum));
    
    var mem = document.createElement("div");
    var nowbox = document.createElement("div");
    var memface = document.createElement("div");
    var memname = document.createElement("div");
    var memcontent = document.createElement("div");
    var mood = document.createElement("span");
    var moodnum = document.createElement("span");
    var x = document.createElement("div");

    mem.className = "mem";
    nowbox.className = "now-box";
    memface.className = "memface";
    memname.className = "memname";
    memcontent.className = "mem-content";
    mood.className = "mood";
    moodnum.className = "moodnum";
    x.className = "x";

    nowbox.appendChild(memface);
    nowbox.appendChild(memname);
    mem.appendChild(nowbox);
    mem.appendChild(memcontent);
    mem.appendChild(mood);
    mem.appendChild(moodnum);
    mem.appendChild(x);

    mood.innerHTML = "&#10084;";
    x.innerHTML = "&#215;";

    memcontent.innerHTML = localStorage.getItem(loctext);
    memface.style.backgroundImage = localStorage.getItem(locface);
    memname.textContent = localStorage.getItem(locname);
    moodnum.textContent = localStorage.getItem(locmoodnum);

    if (parseInt(moodnum.textContent) > 0) {
        mood.style.color = "red";
    }

    memMoment.appendChild(mem);
    if (localStorage.getItem(locmoodnum) == ".") {
        mem.style.display="none";
    }
}

$(document).on("click", ".mood", function (event) {
    event.target.style.color = "red";
    event.target.nextSibling.textContent = (parseInt(event.target.nextSibling.textContent) + 1);
    var i = $(event.target.parentNode).index();
    var locmoodnum = "locmoodnum" + i;
    console.log(locmoodnum,event.target.nextSibling.textContent); 
    localStorage.setItem(locmoodnum, event.target.nextSibling.textContent);
    var htnum=parseInt(localStorage.getItem("htnum"))+1;
    localStorage.setItem("htnum",htnum);
    heartnum.textContent = htnum;
});

$(document).on("click", ".x", function (event) {
    var i = $(event.target.parentNode).index();
    console.log(i);
    var locmoodnum = "locmoodnum" + i;
    event.target.parentNode.style.display="none";
    var htnum=parseInt(localStorage.getItem("htnum"))-parseInt(localStorage.getItem(locmoodnum));
    localStorage.setItem("htnum",htnum);
    localStorage.setItem(locmoodnum, ".");
    heartnum.textContent = htnum;
});

$(document).on("click", ".backtop", function (event) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});

var htnum=loc.getItem("htnum");
if(!htnum){
    loc.setItem("htnum",0);
}else{
    heartnum.textContent=parseInt(htnum);
}

console.log(loc);
// loc.clear();

