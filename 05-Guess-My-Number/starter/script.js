'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score <= 0) {
        document.querySelector('.message').textContent = 'You lost the game!';
        return;
    }

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    }

    if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

    if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
    }

    if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
});
