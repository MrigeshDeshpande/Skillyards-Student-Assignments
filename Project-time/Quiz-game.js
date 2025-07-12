const prompt = require('prompt-sync')(); 

// Step 1: Define questions
const questions = [
  {
    question: "What is 2 + 2?",
    options: "a) 3  b) 4  c) 5",
    answer: "b"
  },
  {
    question: "What is the capital of India?",
    options: "a) Delhi  b) Mumbai  c) Kolkata",
    answer: "a"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: "a) Earth  b) Mars  c) Jupiter",
    answer: "b"
  },
  {
    question: "What color do you get by mixing red and white?",
    options: "a) Pink  b) Purple  c) Orange",
    answer: "a"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: "a) Tiger  b) Elephant  c) Lion",
    answer: "c"
  }
];

let score = 0;

// Step 2: Ask each question
for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  console.log(`\nQ${i + 1}: ${q.question}`);
  console.log(q.options);

  const userAnswer = prompt("Your answer (a, b, c): ").toLowerCase();

  if (userAnswer === q.answer) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong!");
  }
}

// Step 3: Show final score
console.log(`\nYour final score: ${score}/${questions.length}`);