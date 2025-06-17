document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //array to store the tasks

  tasks.forEach((task) => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    const taskTest = todoInput.value.trim(); //trim removes any white spaces in the input value
    if (taskTest === "") return; // checks if user does not input value and clicks button

    const newTask = {
      id: Date.now(),
      text: taskTest,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    todoInput.value = ""; // clears the input field
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;
    todoList.appendChild(li);
  }

  function saveTasks() {
    // this function is used to add things to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks)); // local storage api gets invoked and setitem to add to local storage
  }
});
