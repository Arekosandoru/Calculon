'use strict'
var resultFrame;

$(document).ready(function() {
    resultFrame = $('#display');
    $("button").bind('tap', function() {
        buttonPressed();
    });
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
    var newDisplay = resultFrame.val() + buttonText;
    resultFrame.val(newDisplay);
}

function clear() {
    resultFrame.val("");
}

function backSpace() {
    var display = resultFrame.val();

    if (display.length > 0) {
        var newDisplay = display.substr(0, display.length - 1);
        resultFrame.val(newDisplay);
    }
}

function result() {
    try {
        var newDisplay = eval(resultFrame.val());
        $('.story-anchor').after('<p>'+ resultFrame.val() + ' = ' + newDisplay +'</p>').fadeIn('slow');
        resultFrame.val(newDisplay);
    } catch (error) {
        resultFrame.val("Error");
    }
}

function buttonPressed() {
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
