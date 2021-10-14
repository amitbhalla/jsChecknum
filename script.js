'use strict';

let score = 20;
let highScore = 0;
let secretNumber;

const setSecretNum = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

setSecretNum();

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  setSecretNum();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //  No Input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number given!';
  } else if (guess === secretNumber) {
    //  Player Won

    document.querySelector('.message').textContent = '🎉 Correct Guess!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber) {
    // Guess too high

    if (score > 0) {
      document.querySelector('.message').textContent =
        'Your guess is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
    }
  } else if (guess < secretNumber) {
    //  Guess to low

    if (score > 0) {
      document.querySelector('.message').textContent = 'Your guess is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
    }
  }
});
