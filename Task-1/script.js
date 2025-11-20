const inputTask = document.getElementById('taskInput');
const addButton = document.getElementById('taskBtn');
const tasks = document.getElementById('addTask');

let editLi = null;  

addButton.addEventListener('click', () => {
  const valueInput = inputTask.value.trim();
  if (valueInput === "") {
    alert("Please enter a task");
    return;
  }

  if (editLi !== null) {
    const span = editLi.querySelector("span");
    span.innerText = valueInput; 
    addButton.innerText = "Add Task"; 
    inputTask.value = "";
    editLi = null; 
    return;
  }

  const list = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = valueInput;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "Delete";
  deleteBtn.style.margin = "10px";
  deleteBtn.style.borderRadius = "5px";
  deleteBtn.style.fontSize = "20px";
  deleteBtn.style.padding = "10px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.borderStyle = "none";
  deleteBtn.style.backgroundColor = "#ff4d4d";
  deleteBtn.style.fontFamily = "cursive";



  const editBtn = document.createElement('button');
  editBtn.innerText = "Edit";
  editBtn.style.margin = "10px";
  editBtn.style.borderRadius = "5px";
  editBtn.style.fontSize = "20px";
  editBtn.style.padding = "10px";
  editBtn.style.cursor = "pointer";
  editBtn.style.borderStyle = "none";
  editBtn.style.backgroundColor = "#65dbe1ff";
  editBtn.style.fontFamily = "cursive";

  list.appendChild(span);
  list.appendChild(editBtn);
  list.appendChild(deleteBtn);

  list.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  list.style.padding = "10px";
  list.style.listStyleType = "none";
  list.style.borderRadius = "10px";

  tasks.appendChild(list);
  inputTask.value = "";

  deleteBtn.addEventListener('click', () => {
    list.remove();
  });

  editBtn.addEventListener('click', () => {
    inputTask.value = span.innerText;
    addButton.innerText = "Update Task";

    editLi = list;  
  });

});
