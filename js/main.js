const inputBox = document.getElementById("input-box");
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const radio = document.querySelectorAll('input[type="radio"]');
console.log(radio)
addTask.onclick = addNewTask;
 
function addNewTask(event) {
  event.preventDefault();
  if (inputBox.value.trim() === "") {
    alert("You must write smthing");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
          <span>
            <input type="radio" />
            ${inputBox.value}
          </span>
          <span class="icon-container">
            <button>
              <svg class="icon">
                <use href="/assets/pen-clip-solid.svg"></use>
              </svg>
            </button>
            <button>
              <svg class="icon">
                <use href="/assets/xmark-solid.svg"></use>
              </svg>
            </button>
          </span>
        `;
  taskContainer.appendChild(li);

  inputBox.value = '';
}
