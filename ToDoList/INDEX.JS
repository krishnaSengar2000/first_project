const todoList = [];

// this function handles add task
function addTodoHandler() {
  const task = document.getElementById("task").value;
  // check if task is valid
  if (!task) {
    return alert("Invalid task name");
  }
  // add task in todoList array
  todoList.push(task);
  const todoHtml = todoAsHtml();
  // set values
  document.getElementById("listTodo").innerHTML = todoHtml.join("");
  document.getElementById("task").value = "";
}

// this function returns array of table row elements
function todoAsHtml() {
  return todoList.map(
    (taskName, index) => ` <tr>
            <td>${1 + index}</td>
            <td>${taskName}</td>
            <td><button onclick="removeTaskHandler(${index})">Done</button></td>
        </tr>`
  );
  }