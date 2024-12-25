//филтры к фото
var controls = document.querySelectorAll('.toggle-controls button');
var photo = document.querySelector('.photo');

for (var i = 0; i < controls.length; i++) {
  controls[i].innerHTML = controls[i].dataset.filter;
  clickControl(controls[i]);
}

function toggleFilter(control) {
  for (var j = 0; j < controls.length; j++) {
    controls[j].classList.remove('active');
    photo.classList.remove(controls[j].dataset.filter);
  }

  control.classList.add('active');

  if (photo) {
    photo.classList.add(control.dataset.filter);
  }
}

function clickControl(control) {
  control.addEventListener('click', function () {
    toggleFilter(control);
  });
}

var defaultFilter = document.querySelector('button.toaster');
toggleFilter(defaultFilter);

//todo
const inputToDo = document.querySelector('[data-input]');
const buttonTodo = document.querySelector('#addtodo');
const tasksToDo = document.querySelector('.tasks');
const task = document.querySelector('.task');


const toDoList = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage(key = "todos") {
    localStorage.setItem(key, JSON.stringify(toDoList));
    }

    function addBlockHtml(task) {
      const taskList = document.createElement('div');
      taskList.classList.add("taskList");
      taskList.innerHTML = 
      `<div class="task">${task} 
      <div class="buttons">
      <button class="completetask">✅</button>
      <button class="deletetask">❌</button>
      </div>
      </div>`;
      tasksToDo.append(taskList);
  }
  
  
  
  buttonTodo.addEventListener("click", () => {
      
      if (!(inputToDo.value.trim() === '')) {
          toDoList.push(inputToDo.value);
          addBlockHtml(inputToDo.value)
      inputToDo.value = '';
      saveToLocalStorage();
  } else {
      alert('Поле не может быть пустым')
  };
  });
  
  function render () {
      tasksToDo.innerHTML = '';
      toDoList.forEach((todo, index) => {
          addBlockHtml(todo);
  
      });
  };
  
  render ();
  
  log(toDoList);