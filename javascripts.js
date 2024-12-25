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


const log = console.log;

const toDoList = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage(key = "todos") {
    localStorage.setItem(key, JSON.stringify(toDoList));
    }

//шаблон для прорисовки

    function addBlockHtml(task) {
      const taskList = document.createElement('div');
      taskList.classList.add("taskList");
      taskList.innerHTML = 
      `<div class="task"><span>${task}</span>
      <div class="buttons">
      <button class="completetask">✅</button>
      <button class="deletetask">❌</button>
      </div>
      </div>`;
      tasksToDo.append(taskList);

      
  }
 
  //ожидание нажатии и удаления задачи
  const delBtn = () => {
    const deleteBtn = document.querySelectorAll('.deletetask');
    deleteBtn.forEach(del => {
      del.addEventListener('click', () => {
        del.parentElement.parentElement.remove();
        delTaskFromArray();
        saveToLocalStorage();
      });
    }); 
  };

  //Добавляем стиль выполненной задачи
  function doneBtn() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.addEventListener('click', () => {
        task.classList.toggle('done-task');
        saveToLocalStorage();
      });
    });
  };
  
  
 //ожидание и создание задачи 
  buttonTodo.addEventListener("click", () => {
      if (!(inputToDo.value.trim() === '')) {
          toDoList.push(inputToDo.value);
          addBlockHtml(inputToDo.value);
      inputToDo.value = '';
      render ();
      saveToLocalStorage();
  } else {
      alert('Поле не может быть пустым')
  };
  
  });

  //прорисовка из массива
  function render () {
      tasksToDo.innerHTML = '';
      toDoList.forEach(todo => {
      addBlockHtml(todo); 
    });

    delBtn();
    doneBtn()
  };

  //удаление из массива
 function delTaskFromArray() {
  for (let i = 0; i < toDoList.length; i++) {
          if(toDoList[i]) {
          log('должен удалиться элемент из массива');
          toDoList.splice([i], 1);
          saveToLocalStorage();
      }; 
      break;
    };
  };

  log(toDoList);

  render ();
  
  