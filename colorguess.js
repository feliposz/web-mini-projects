"use strict";

var squares = document.getElementsByClassName('square');
var displayColor = document.getElementById('displayColor');
var messageDisplay = document.getElementById('message');
var resetButton = document.getElementById('reset');
var modeButtons = document.getElementsByClassName('mode');
var h1 = document.querySelector('h1');

var colors = [], pickedColor = undefined, numColors = 6;

init();

function init() {
    var i;
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = 'Play again?';
            } else {
                messageDisplay.textContent = 'Wrong';
                this.style.backgroundColor = '#232323';
            }
        });
    }

    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            var i = 0;
            for (i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove('selected');
            }
            this.classList.add('selected');
            if (this.textContent === 'Easy') {
                numColors = 3;
            } else if (this.textContent === 'Medium') {
                numColors = 6;
            } else {
                numColors = 9;
            }

            reset();
        });
    }

    resetButton.addEventListener('click', function () {
        reset();
    });

    numColors = 6;
    reset();
}

function reset() {
    colors = generateColors(numColors);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    h1.style.backgroundColor = null;
    resetButton.textContent = 'New colors';
    messageDisplay.textContent = '';
    var i;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}

function changeColors(color) {
    var i;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var i = Math.floor(Math.random() * colors.length);
    return colors[i];
}

function generateColors(num) {
    var arr = [];
    var i;
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}