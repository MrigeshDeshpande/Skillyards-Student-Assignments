const prompt = require('prompt-sync')(); // To take user input
const tasks = []; // List to store tasks

console.log("Welcome to the To-Do List Manager");

while (true) {
  // Show menu
  console.log("\nMenu:");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Remove Task");
  console.log("4. Exit");

  const choice = prompt("Enter your choice (1-4): ");

  //logiv:
  // Check user input
  // If the input is not a number or not between 1 and 4, prompt again
  if (choice === '1') {
    // Add a task
    const task = prompt("Enter a task: ");
    if (task === "") {
      console.log("Task cannot be empty.");
    } else {
      tasks.push(task);
      console.log("Task added.");
    }

  }
  
  // If the input is 2, show all tasks
  else if (choice === '2') {
    // Show all tasks
    if (tasks.length === 0) {
      console.log("No tasks yet.");
    } else {
      console.log("Your Tasks:");
      for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
      }
    }

  } else if (choice === '3') {
    if (tasks.length === 0) {
      console.log("No tasks to remove.");
    } else {
      const number = prompt("Enter task number to remove: ");
      const index = parseInt(number) - 1;

      if (index >= 0 && index < tasks.length) {
        const removedTask = tasks.splice(index, 1);
        console.log("Removed: " + removedTask[0]);
      } else {
        console.log("Invalid task number.");
      }
    }

  } else if (choice === '4') {
    // Exit the loop
    console.log("Exiting...");
    break;

  } else {
    // Invalid input
    console.log("Please enter a number between 1 and 4.");
  }
}