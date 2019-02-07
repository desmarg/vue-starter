const userId = "9eb5de11-37aa-4996-8a58-199c6e0a2789";
const baseUrl = "https://glo3102lab4.herokuapp.com/" + userId;

window.onload = function() {
  fetchTasks();
};

function buildTaskHtml(task) {
  return '<div class="task-container"><div class="task-header"><div class="task-title"><b>' + task.title + '</b></div><button>X</button></div>' + task.message + '</div>';
}

function addTask(task) {
  const taskHtml = buildTaskHtml(task);
  document.getElementById("tasks").appendChild(taskHtml);
}

function handleNewTask() {
  console.log("yes")
}

function fetchTasks() {
  fetch(baseUrl + "/tasks").then((response) => {
    console.log(response)
  })
}