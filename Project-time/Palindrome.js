const prompt = require('prompt-sync')(); // For user input

// Step 1: Get input
const input = prompt("Enter a word or sentence: ");

// Step 2: Clean the input
const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");

// Step 3: Check for empty input after cleaning
if (cleaned === "") {
  console.log("Invalid input. Please enter letters or numbers.");
} else {
  // Step 4: Reverse and compare
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    console.log("It's a palindrome!");
  } else {
    console.log("Not a palindrome.");
  }
}