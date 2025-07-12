const prompt = require('prompt-sync')(); // For user input

let inventory = []; // Store items as objects: { name, quantity, price }

console.log("Welcome to Inventory Management System");

while (true) {
  console.log("\nMenu:");
  console.log("1. Add Item");
  console.log("2. Update Item");
  console.log("3. Delete Item");
  console.log("4. View Inventory");
  console.log("5. Exit");

  const choice = prompt("Choose (1-5): ");

  if (choice === '1') {
    const name = prompt("Item name: ").trim();
    const quantity = Number(prompt("Quantity: "));
    const price = Number(prompt("Price: "));

    if (!name || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
      console.log("Invalid input. Quantity and price must be positive.");
      continue;
    }

    const exists = inventory.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (exists) {
      console.log("Item already exists.");
    } else {
      inventory.push({ name, quantity, price });
      console.log("Item added.");
    }

  } else if (choice === '2') {
    const name = prompt("Enter item name to update: ").trim();
    const item = inventory.find(i => i.name.toLowerCase() === name.toLowerCase());

    if (!item) {
      console.log("Item not found.");
    } else {
      const newQty = Number(prompt("New quantity: "));
      const newPrice = Number(prompt("New price: "));

      if (isNaN(newQty) || isNaN(newPrice) || newQty <= 0 || newPrice <= 0) {
        console.log("Invalid input.");
      } else {
        item.quantity = newQty;
        item.price = newPrice;
        console.log("Item updated.");
      }
    }

  } else if (choice === '3') {
    const name = prompt("Enter item name to delete: ").trim();
    const index = inventory.findIndex(i => i.name.toLowerCase() === name.toLowerCase());

    if (index === -1) {
      console.log("Item not found.");
    } else {
      inventory.splice(index, 1);
      console.log("Item deleted.");
    }

  } else if (choice === '4') {
    if (inventory.length === 0) {
      console.log("Inventory is empty.");
    } else {
      console.log("Inventory:");
      inventory.forEach((item, i) => {
        const warning = item.quantity < 5 ? " (Low stock!)" : "";
        console.log(`${i + 1}. ${item.name} - Qty: ${item.quantity}, Price: ₹${item.price}${warning}`);
      });
    }

  } else if (choice === '5') {
    console.log("Exiting Inventory System.");
    break;

  } else {
    console.log("Please enter a number between 1 and 5.");
  }
}