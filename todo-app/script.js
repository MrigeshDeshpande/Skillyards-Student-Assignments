const vishakha = document.getElementById("todo-input");
// const sachin = document.getElementById("todo-button");
// const jaadugar = document.getElementById("todo-list");

let todos = {};

function addTask(e){
    e.preventDefault();
    const taskText = vishakha.value.trim();
    
    //new-list-item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    //add-item-to-list
    jaadugar.appendChild(listItem);

    vishakha.value = "";
}
sachin.addEventListener("click", addTask);