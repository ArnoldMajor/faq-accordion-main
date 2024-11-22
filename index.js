"use strict";

const sub1 = document.getElementById("sub-1");
const icon1 = document.getElementById("icon-1");
const info1 = document.getElementById("info-1");
const sub2 = document.getElementById("sub-2");
const icon2 = document.getElementById("icon-2");
const info2 = document.getElementById("info-2");
const sub3 = document.getElementById("sub-3");
const icon3 = document.getElementById("icon-3");
const info3 = document.getElementById("info-3");
const sub4 = document.getElementById("sub-4");
const icon4 = document.getElementById("icon-4");
const info4 = document.getElementById("info-4");


const infoAll = document.querySelectorAll(".more-info");
const iconAll = document.querySelectorAll(".icon-plus")

let infoStatus;
function loopInfoAll() {
    infoAll.forEach((e) => {
        const hidden = e.classList.contains("hidden");
        infoStatus = hidden;
    })
}

function setHidden() {
    infoAll.forEach((e) => {
        e.classList.add("hidden");
    })
    iconAll.forEach((e) => {
        e.classList.replace("icon-minus", "icon-plus");
    })
}

function changeHidden(e, icon) {
    if (e.classList.contains("hidden")) {
        setHidden();
        loopInfoAll();
        if (infoStatus) {
            e.classList.remove("hidden")
        }
        icon.classList.replace("icon-plus", "icon-minus")
    } else if (!e.classList.contains("hidden")) {
        e.classList.add("hidden");
        icon.classList.replace("icon-minus", "icon-plus");
    };

}

function animateHoverIn(icon) {
    icon.style.transform = "scale(1.2) rotate(180deg)";
    icon.style.transition = "0.2s ease-in-out";
    icon.style.zIndex = 999;
    icon.style.cursor = "pointer";
}

function animateHoverOut(icon) {
    icon.style.transform = "scale(1) rotate(-180deg)";
    icon.style.transition = "0.2s ease-in-out";
    icon.style.zIndex = 999;
    icon.style.cursor = "pointer";
}


sub1.addEventListener("click", function () { changeHidden(info1, icon1) });
icon1.addEventListener("click", function () { changeHidden(info1, icon1) });
sub2.addEventListener("click", function () { changeHidden(info2, icon2) });
icon2.addEventListener("click", function () { changeHidden(info2, icon2) });
sub3.addEventListener("click", function () { changeHidden(info3, icon3) });
icon3.addEventListener("click", function () { changeHidden(info3, icon3) });
sub4.addEventListener("click", function () { changeHidden(info4, icon4) });
icon4.addEventListener("click", function () { changeHidden(info4, icon4) });


icon1.addEventListener("mouseenter", function () { animateHoverIn(icon1) })
icon2.addEventListener("mouseenter", function () { animateHoverIn(icon2) })
icon3.addEventListener("mouseenter", function () { animateHoverIn(icon3) })
icon4.addEventListener("mouseenter", function () { animateHoverIn(icon4) })

icon1.addEventListener("mouseleave", function () { animateHoverOut(icon1) })
icon2.addEventListener("mouseleave", function () { animateHoverOut(icon2) })
icon3.addEventListener("mouseleave", function () { animateHoverOut(icon3) })
icon4.addEventListener("mouseleave", function () { animateHoverOut(icon4) })
