'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

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
        if (score > highScore) {
            highScore = score;
        }

        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = highScore;
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

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});
