'use strict';

let secretNumber  = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;



document.querySelector(".check").addEventListener("click", ()=>{
  const guess = +(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else  if (guess === secretNumber) {

    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else  if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To High!!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }

  } else  if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To Low!!!"
      score--;
      document.querySelector(".score").textContent = score;
    } else  {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }

  }
})

document.querySelector(".again").addEventListener("click", ()=>{
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  secretNumber  = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
})