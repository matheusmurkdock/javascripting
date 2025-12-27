
const addBtn = document.querySelector("#add-btn")
console.log(addBtn)

const arrTasks = [
]

console.log(arrTasks)

addBtn.addEventListener("click", function() {
  let taskInput = document.querySelector("#task-input");
  arrTasks.push(taskInput.value);
  taskInput.value = "";
  console.log(arrTasks)
})
