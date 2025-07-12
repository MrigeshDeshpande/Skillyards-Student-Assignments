// // const prompt = require('prompt-sync')()
// // const tasks= [];

// // console.log("welcome guys...")

// // while(true)
// // {
// //   console.log("menu")
// //   console.log("1. Add task")
// //   console.log("2. View task")
// //   console.log("3. Remove task")
// //   console.log("4. Exit")

// //   const choice = prompt("Enter Your Number (1 to 4):")
// //   if(choice ==='1')
// //   {
// //     //add a task
// //     const task = prompt("Enter new task:")
// //     if(task === "")
// //     {
// //       console.log("task connot be empty")
// //     }
// //     else{
// //       tasks.push(task);
// //       console.log("Task added")
// //     }
// //   }

// //   if(choice === '2')
// //   {
// //     if(tasks.length === 0)
// //     {
// //       console.log("no task yet");
// //     }
// //     else{
// //       console.log("your tasks:")
// //       tasks.forEach((task, i)=>{
// //         console.log(`${i}. ${task}`)
// //       })
// //     }
// //   }

// //   else if (choice === '3') {
// //     if (tasks.length === 0) {
// //       console.log("No tasks to remove.");
// //     } else {

// //       const number = prompt("Enter task number to remove: ");
// //       const index = parseInt(number) ;

// //       if (index >= 0 && index < tasks.length) {

// //         const removedTask = tasks.splice(index, 1);
// //         console.log("Removed: " + removedTask[0]);

// //       } else {
// //         console.log("Invalid task number.");
// //       }
// //     }
// // }

// // else if (choice === '4')
// // {
// //   console.log("Exit...")
// // break;
// // }

// // else{
// //   console.log("enter valid number")
// // }
// // }

// const person ={
//     name: " Jaadugar".
//     age: 26
// };

// console.log(person.name);
// console.log(person["age"]);


const prompt = require('prompt-sync')()

const input = parseFloat(prompt("enter a number:"))

if(isNaN(input))
{
    console.log("Enter a valid number")
}else{
    for(let i =1; i<=10 ;i++)
    {
        console.log(`${input} x ${i} = ${input * i} `)
    }
}