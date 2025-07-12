const prompt = require('prompt-sync')();

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Guess the Number Game!");
console.log("Guess a number between 1 and 100. Type 'q' to quit.\n");

while (true) {
  const input = prompt("Your guess: ");

  if (input.toLowerCase() === 'q') {
    console.log(`You quit the game. The number was ${secretNumber}.`);
    break;
  }

  const guess = parseInt(input);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Please enter a valid number between 1 and 100.\n");
    continue;
  }

  attempts++;

  if (guess === secretNumber) {
    console.log(`Correct! You guessed it in ${attempts} attempts.`);
    break;
  } else if (guess < secretNumber) {
    console.log("Too low! Try again.\n");
  } else {
    console.log("Too high! Try again.\n");
  }
}