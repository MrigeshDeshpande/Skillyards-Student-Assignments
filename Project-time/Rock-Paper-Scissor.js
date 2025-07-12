const prompt = require('prompt-sync')();

const options = ['rock', 'paper', 'scissors'];

console.log("Welcome to Rock, Paper, Scissors!");

while (true) {
  const userInput = prompt("Enter rock, paper, or scissors (or 'q' to quit): ").toLowerCase();

  if (userInput === 'q') {
    console.log("Thanks for playing!");
    break;
  }

  if (!options.includes(userInput)) {
    console.log("Invalid input. Please try again.");
    continue;
  }

  const randomIndex = Math.floor(Math.random() * 3);
  const computer = options[randomIndex];

  console.log("Computer chose:", computer);

  if (userInput === computer) {
    console.log("It's a tie!");
  } else if (
    (userInput === 'rock' && computer === 'scissors') ||
    (userInput === 'paper' && computer === 'rock') ||
    (userInput === 'scissors' && computer === 'paper')
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}