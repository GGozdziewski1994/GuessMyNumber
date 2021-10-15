'use strict';

let secretNumber = Math.trunc(Math.random() * 50) + 1;

const displayMessage = message => {
  document.querySelector(".message").textContent = message;
};

const getSecretNumber = number => {
    document.querySelector(".number").textContent = number;
}

const getScore = value => {
    document.querySelector(".score").textContent = value;
}

const backgroundColor = color =>  {
    document.querySelector("body").style.backgroundColor = color;
}

let getGuess = document.querySelector(".guess");

const widthSecretNumber = width => {
    document.querySelector(".number").style.width = width;
}

let score = 10;
let highscore = 0;
let winner = null;

document.querySelector(".check").addEventListener("click", function () { 

  if(winner) return;

  const guess = Number(getGuess.value);

  if (!guess) {
    displayMessage(`⛔ No Number!`);

  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number !`);
    getSecretNumber(secretNumber)

    backgroundColor("green");
    widthSecretNumber("14rem");

    if(score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
    winner = score;

  } else if (guess !== secretNumber) {
      if(score > 1) {
          displayMessage(guess > secretNumber ? `💹 To hight !` : `📉 To low !`);
          score--;
          getScore(score);
      } else {
          displayMessage(`💣 Game Over !`);
          getScore(0);
      }
  }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 10;
    getScore(score);

    displayMessage("Start guessing...");

    secretNumber = Math.trunc(Math.random() * 50) + 1;

    backgroundColor("rgb(37, 30, 30)");
    widthSecretNumber("10rem");

    getSecretNumber('?');

    getGuess.value = '';

    winner = null;
})