'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('❌ No number!');

    // When Player wins
  } else if (guess === secretNumber) {
    console.log(document.querySelector('.message').textContent);
    //document.querySelector('.message').textContent = '🎉 Correct Number!'; Refactored all messages queries a Function (DRY)
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? '🎢 Too high!' : '⬇ Too low!';
        score--;
        displayMessage(guess > secretNumber ? '🎢 Too high!' : '⬇ Too low!');
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('😭 You lost the game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

//Reset Again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  DisplayMessage('Start guessing...!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
