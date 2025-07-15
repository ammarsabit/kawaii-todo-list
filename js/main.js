const inputBox = document.getElementById("input-box");
const addTask = document.getElementById("add-task");
const addedTasks = document.getElementById("added-tasks");

addTask.onclick = addNewTask;

addedTasks.addEventListener("click", function (event) {
  const removeBtn = event.target.closest('.remove-task')
  const completedBtn = event.target.closest('.task')

  if (completedBtn) {
    completedBtn.classList.toggle("task-done")
  }

  if (removeBtn) {
    removeBtn.parentNode.remove();
  }
});


function addNewTask(event) {
  event.preventDefault();
  if (inputBox.value.trim() === "") {
    alert("You must write smthing");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
          <span class = "task">
            ${inputBox.value}
          </span>
          <button class="remove-task">
            <svg>
              <use href="/assets/xmark-solid.svg"></use>
            </svg>
          </button>
        `;
  addedTasks.appendChild(li);

  inputBox.value = "";
}
