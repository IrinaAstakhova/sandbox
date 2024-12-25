//todo

const log = console.log;

const inputToDo = document.querySelector('[data-input]');
const buttonTodo = document.querySelector('#addtodo');
const tasksToDo = document.querySelector('.tasks');

const toDoList = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage(key = "todos") {
    localStorage.setItem(key, JSON.stringify(toDoList));
    }

//Шаблон для прорисовки

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
      
  };

//Удаление из массива и тудушки
function delBtn() {
  const button = document.querySelectorAll('.deletetask');
  for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', () => {
      log("нажата кнопка удалить");
      toDoList.splice([i], 1);
      saveToLocalStorage();
      render();
    });
  };
};


//Добавляем стиль выполненной задачи
function doneBtn() {
  const button = document.querySelectorAll('.completetask');
  const item = document.querySelectorAll('.task');
    for (let j = 0; j < button.length; j++) {
      button[j].addEventListener('click', () => {
          item[j].classList.toggle('done-task');
      });
};
};
  
  
 //Ожидание и создание задачи 
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

  //Прорисовка из массива
  function render () {
      tasksToDo.innerHTML = '';
      toDoList.forEach(todo => {
      addBlockHtml(todo); 
    });

    delBtn();
    doneBtn();
  };



  log(toDoList);

  render ();
  
  