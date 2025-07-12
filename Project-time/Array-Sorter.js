const prompt = require('prompt-sync')(); // For user input

const input = prompt("Enter numbers separated by commas (e.g., 5,2,8): ");
const parts = input.split(",").map(n => n.trim()); // Remove spaces
const numbers = parts.map(Number);

if (numbers.some(isNaN) || numbers.length === 0) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  const order = prompt("Sort order? (asc or desc): ").toLowerCase();

  if (order === "asc") {
    numbers.sort((a, b) => a - b);
    console.log("Sorted (ascending):", numbers.join(", "));
  } else if (order === "desc") {
    numbers.sort((a, b) => b - a);
    console.log("Sorted (descending):", numbers.join(", "));
  } else {
    console.log("Invalid sort order. Please enter 'asc' or 'desc'.");
  }
}