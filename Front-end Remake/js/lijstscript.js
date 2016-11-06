/*jslint browser:true */

var inputs = document.querySelectorAll("input");
var opgeslagen = document.querySelectorAll(".opgeslagen");
var select = document.querySelector("select");
var popup = document.querySelector(".popup");
var buttons = document.querySelector("button");
var header = document.querySelector(".home");

header.onclick = function () {
    window.location.href = 'landing.html';
}

inputs[0].onclick = function inputChecker() {
    "use strict";
    if (inputs[0].checked) {
        opgeslagen[0].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[0].innerHTML = "OPSLAAN";
    }
};

inputs[1].onclick = function inputChecker() {
    "use strict";
    if (inputs[1].checked) {
        opgeslagen[1].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[1].innerHTML = "OPSLAAN";
    }
};

inputs[2].onclick = function inputChecker() {
    "use strict";
    if (inputs[2].checked) {
        opgeslagen[2].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[2].innerHTML = "OPSLAAN";
    }
};

inputs[3].onclick = function inputChecker() {
    "use strict";
    if (inputs[3].checked) {
        opgeslagen[3].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[3].innerHTML = "OPSLAAN";
    }
};

inputs[4].onclick = function inputChecker() {
    "use strict";
    if (inputs[4].checked) {
        opgeslagen[4].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[4].innerHTML = "OPSLAAN";
    }
};

inputs[5].onclick = function inputChecker() {
    "use strict";
    if (inputs[5].checked) {
        opgeslagen[5].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[5].innerHTML = "OPSLAAN";
    }
};

inputs[6].onclick = function inputChecker() {
    "use strict";
    if (inputs[6].checked) {
        opgeslagen[6].innerHTML = "OPGESLAGEN";
        popup.classList.toggle("hide");
    } else {
        opgeslagen[6].innerHTML = "OPSLAAN";
    }
};

function jsfunc1() {
    if (select.value == "oud") {
        document.getElementById("reverser").style.flexDirection = "row";
    } else {
        document.getElementById("reverser").style.flexDirection = "row-reverse";
    }
};

function closePopup() {
    popup.classList.toggle("hide");
}

buttons.addEventListener('click', closePopup);
