'use strict';

let secretNumber  = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector(".message").textContent = message;
}



document.querySelector(".check").addEventListener("click", ()=>{
  const guess = +(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number!!!");
  } else  if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "To High!!!" : "To Low!!!")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lose the game");
      document.querySelector(".score").textContent = 0;
    }
  }
})

document.querySelector(".again").addEventListener("click", ()=>{
  displayMessage("Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  secretNumber  = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
})