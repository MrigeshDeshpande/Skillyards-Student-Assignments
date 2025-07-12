// flow:
//1. User starts the program
//2. User chooses to add income or expense
//3. User enters amount and description
//4. User can view balance or transaction history
//5. User can exit the program
// 6. Program calculates and displays balance based on transactions
// 7. User can view all transactions in history
// 8. User can exit the program at any time
// 9. Program ends with a goodbye message
// 10. User can add multiple transactions and view updated balance/history
// 11. Program handles invalid inputs gracefully
// 12. Program continues until user chooses to exit
const prompt = require('prompt-sync')(); 
let transactions = [];

console.log("Welcome to Budget Tracker");

while (true) {
  console.log("\nMenu:");
  console.log("1. Add Income");
  console.log("2. Add Expense");
  console.log("3. View Balance");
  console.log("4. View History");
  console.log("5. Exit");

  const choice = prompt("Choose (1-5): ");

  if (choice === '1' || choice === '2') {
    const amount = Number(prompt("Enter amount: "));
    const desc = prompt("Enter description: ");

    if (isNaN(amount) || amount <= 0) {
      console.log("Amount must be a positive number.");
      continue;
    }

    if (desc.trim() === "") {
      console.log("Description cannot be empty.");
      continue;
    }

    const type = choice === '1' ? "income" : "expense";
    transactions.push({ type, amount, desc });
    console.log(`${type} added.`);

  } else if (choice === '3') {
    let balance = 0;
    for (let t of transactions) {
      if (t.type === "income") balance += t.amount;
      else balance -= t.amount;
    }
    console.log("Balance: ₹" + balance);

  } else if (choice === '4') {
    if (transactions.length === 0) {
      console.log("No transactions yet.");
    } else {
      console.log("History:");
      for (let i = 0; i < transactions.length; i++) {
        const t = transactions[i];
        console.log(`${i + 1}. ${t.type} - ₹${t.amount} - ${t.desc}`);
      }
    }

  } else if (choice === '5') {
    console.log("Goodbye!");
    break;

  } else {
    console.log("Please enter a number between 1 and 5.");
  }
}