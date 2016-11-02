/*jslint browser:true */

var inputs = document.querySelectorAll('input');
var buttons = document.querySelectorAll('button');
var feedback = document.querySelectorAll('.feedback');

buttons[1].onclick = function () {
    if (inputs[0].checkValidity() === false) {
        feedback[0].style.display = "block";
    } else {
        feedback[0].style.display = "none";
    }

    if (inputs[1].checkValidity() === false) {
        feedback[1].style.display = "block";
    } else {
        feedback[1].style.display = "none";
    }

    if (inputs[2].checkValidity() === false) {
        feedback[2].style.display = "block";
    } else {
        feedback[2].style.display = "none";
    }

    if (inputs[3].checkValidity() === false) {
        feedback[3].style.display = "block";
    } else {
        feedback[3].style.display = "none";
    }

    if (inputs[4].checkValidity() === false) {
        feedback[4].style.display = "block";
    } else {
        feedback[4].style.display = "none";
    }
};
