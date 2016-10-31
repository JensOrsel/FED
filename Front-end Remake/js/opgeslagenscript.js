/*jslint browser:true */

var inputs = document.querySelectorAll("input");
var opgeslagen = document.querySelectorAll(".opgeslagen");
var select = document.querySelector("select");
var articles = document.querySelectorAll("article");
inputs[0].onclick = function inputChecker() {
    "use strict";
    if (inputs[0].checked) {
        opgeslagen[0].innerHTML = "OPGESLAGEN";
    } else {
        articles[0].classList.toggle("nosave");
    }
};

inputs[1].onclick = function inputChecker() {
    "use strict";
    if (inputs[1].checked) {
        opgeslagen[1].innerHTML = "OPGESLAGEN";
    } else {
        articles[1].classList.toggle("nosave");
    }
};

inputs[2].onclick = function inputChecker() {
    "use strict";
    if (inputs[2].checked) {
        opgeslagen[2].innerHTML = "OPGESLAGEN";
    } else {
        articles[2].classList.toggle("nosave");
    }
};

inputs[3].onclick = function inputChecker() {
    "use strict";
    if (inputs[3].checked) {
        opgeslagen[3].innerHTML = "OPGESLAGEN";
    } else {
        articles[3].classList.toggle("nosave");
    }
};

inputs[4].onclick = function inputChecker() {
    "use strict";
    if (inputs[4].checked) {
        opgeslagen[4].innerHTML = "OPGESLAGEN";
    } else {
        articles[4].classList.toggle("nosave");
    }
};

inputs[5].onclick = function inputChecker() {
    "use strict";
    if (inputs[5].checked) {
        opgeslagen[5].innerHTML = "OPGESLAGEN";
    } else {
        articles[5].classList.toggle("nosave");
    }
};

inputs[6].onclick = function inputChecker() {
    "use strict";
    if (inputs[6].checked) {
        opgeslagen[6].innerHTML = "OPGESLAGEN";
    } else {
        articles[6].classList.toggle("nosave");
    }
};

function jsfunc1() {
    if (select.value == "oud") {
        document.getElementById("reverser").style.flexDirection = "row";
    } else {
        document.getElementById("reverser").style.flexDirection = "row-reverse";
    }
};
