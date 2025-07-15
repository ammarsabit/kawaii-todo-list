const inputBox = document.getElementById("input-box");
const addTask = document.getElementById("add-task");
const addedTasks = document.getElementById("added-tasks");
const completedTasks = document.getElementById("completed-tasks");
const countcompletedTasks = document.getElementById("count-completed");
const collapsible = document.querySelector(".collapsible");
const collapsibleContent = document.querySelector(".collapsible--content");
const toggler = document.querySelector('.toggler')


// update completed task count

function updateCompletedCount() {
  const completedCount = completedTasks.querySelectorAll("li").length;
  countcompletedTasks.textContent = ` (${completedCount})`;
}

// Add New Tasks

addTask.onclick = addNewTask;

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

// Remove and mark as completed existing tasks

addedTasks.addEventListener("click", function (event) {
  const removeBtn = event.target.closest(".remove-task");
  const markCompleted = event.target.closest(".task");

  if (markCompleted) {
    completedTasks.appendChild(markCompleted.parentNode);
    markCompleted.classList.toggle("task-done");
    updateCompletedCount();
  }

  if (removeBtn) {
    removeBtn.parentNode.remove();
  }
});

// Completed task tab

completedTasks.addEventListener("click", function (event) {
  const removeBtn = event.target.closest(".remove-task");
  const uncomplete = event.target.closest(".task");

  if (uncomplete) {
    addedTasks.appendChild(uncomplete.parentNode);
    uncomplete.classList.toggle("task-done");
    updateCompletedCount();
  }

  if (removeBtn) {
    removeBtn.parentNode.remove();
    updateCompletedCount();
  }
});

// collapsible

collapsible.addEventListener("click", function (event) {
  completedTasks.classList.toggle("collapsible--expanded");
  collapsible.lastElementChild.classList.toggle("toggler-expanded")
});
