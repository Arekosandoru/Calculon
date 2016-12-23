'use strict'
var JohnDorian;

$(document).ready(function() {
    JohnDorian = $('#display');
    $("button").bind('tap', function() {
        buttonPressed()
    })
});


function isDlc(buttonText) {
    return "\u00B1" == buttonText;
}

function isClear(buttonText) {
    return "C" == buttonText;
}

function isCE(buttonText) {
    return "CE" == buttonText;
}

function isEqual(buttonText) {
    return "=" == buttonText;
}

function display(buttonText) {
    var newDisplay = JohnDorian.val() + buttonText;
    JohnDorian.val(newDisplay);
}

function clear() {
    JohnDorian.val("");
}

function backSpace() {
    var display = JohnDorian.val();

    if (display.length > 0) {
        var newDisplay = display.substr(0, display.length - 1);
        JohnDorian.val(newDisplay);
    }
}

function result() {
    try {
        var newDisplay = eval(JohnDorian.val());
        JohnDorian.val(newDisplay);
    } catch (error) {
        JohnDorian.val("Error");
    }
}

function buttonPressed() {
    console.log('pressed');
    var buttonText = event.target.innerText;

    if (isEqual(buttonText)) {
        result();
    } else if (isClear(buttonText)) {
        clear();
    } else if (isCE(buttonText)) {
        backSpace();
    } else if (isDlc(buttonText)) {
        alert("Please buy 5$ DLC to unlock this feature!");
    } else {
        display(buttonText);
    }
}
