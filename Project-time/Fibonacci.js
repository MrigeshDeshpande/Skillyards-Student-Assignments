const prompt = require('prompt-sync')(); 

const input = prompt("Enter number of terms: ");
const terms = Number(input); 

if (isNaN(terms) || terms <= 0 || !Number.isInteger(terms)) {
  console.log("Invalid number of terms");
} else {
  const fib = [];

  if (terms === 1) {
    fib.push(0);
  } else if (terms === 2) {
    fib.push(0, 1);
  } else {
    fib.push(0, 1);
    for (let i = 2; i < terms; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  console.log("Fibonacci Sequence:");
  console.log(fib.join(", "));
}