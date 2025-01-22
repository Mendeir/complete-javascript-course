'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Helper functions to reduce duplicate code
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const updateScore = function (newScore) {
    score = newScore;
    document.querySelector('.score').textContent = score;
};

const updateDisplay = function (number, backgroundColor, width) {
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = backgroundColor;
    document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score <= 0) {
        displayMessage('You lost the game!');
        return;
    }

    if (!guess) {
        displayMessage('No number!');
        return;
    }

    if (guess === secretNumber) {
        displayMessage('Correct Number!');
        updateDisplay(secretNumber, '#60b347', '30rem');

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        updateScore(score - 1);
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    updateDisplay('?', '#222', '15rem');
    updateScore(score);
    document.querySelector('.guess').value = '';
});
