const prompt = require('prompt-sync')(); // To take user input

// Ask the user for a number
const input = prompt("Enter a number: ");
const num = Number(input); // Convert input to a number

// Check if input is a valid number
if (isNaN(num)) {
  console.log("Invalid number");
} else {
  // Print multiplication table from 1 to 10
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
