const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator (+, -, *, /, %): ');
const num2 = parseFloat(prompt('Enter second number: '));

if (isNaN(num1) || isNaN(num2)) {
  console.log('Please enter valid numbers.');
} else {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      console.log('Cannot divide by zero.');
      return;
    }
    result = num1 / num2;
  } else if (operator === '%') {
    if (num2 === 0) {
      console.log('Cannot divide by zero.');
      return;
    }
    result = num1 % num2;
  } else {
    console.log('Invalid operator. Use +, -, *, /, or %.');
    return;
  }

  console.log(`Result: ${result}`);
}