//todo

const log = console.log;

const inputToDo = document.querySelector('[data-input]');
const searchTask = document.querySelector('[data-search-filter]')
const buttonTodo = document.querySelector('#addtodo');
const tasksToDo = document.querySelector('.tasks');

let arrayFilterSearch = [];

function getDateRepresentation (date) {
  return Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "numeric", year: "numeric"
  }).format(date);
  }

function saveToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
    };

function getToLocalStorage() {
      return JSON.parse(localStorage.getItem("todos")) || [];
      };

const toDoList = getToLocalStorage();


//Шаблон для прорисовки

    function addBlockHtml(task, date, id ) {
      const taskList = document.createElement('div');
      taskList.classList.add("taskList");
      taskList.innerHTML = 
      `<div class="task" data-id="${id}"><div class="task-and-date"><span>${task}</span><span>${date}</span></div>
      <div class="buttons">
      <button class="completetask">✅</button>
      <button class="deletetask">❌</button>
      </div>
      </div>`;
      tasksToDo.append(taskList);
      
  };

//Поиск
searchTask.addEventListener('input', (e) => {
  searchFilter()
  searchRender()
});

function searchFilter() {
  let fiterSearchValue = searchTask.value.toLowerCase();
  arrayFilterSearch = toDoList.filter((item) => item.text.includes(fiterSearchValue));
};

function searchRender() {
  tasksToDo.innerHTML = '';
  if (arrayFilterSearch.length === 0) {
    tasksToDo.innerHTML = `<h3>No todos found...</h3>`;
  };
 
  const todoText = arrayFilterSearch.map(({ text }) => text);
  const todoDate = arrayFilterSearch.map(({ date }) => date);
  const todoId = arrayFilterSearch.map(({ id }) => id);
  for(let i = 0; i < todoText.length; i++) {
    addBlockHtml(todoText[i], todoDate[i], todoId[i])
  };


};



//Удаление из массива и тудушки
function delBtn() {

  const button = document.querySelectorAll('.deletetask');
  for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', () => {
      log("нажата кнопка удалить");
      toDoList.splice([i], 1);
      saveToLocalStorage(toDoList);
      render();
    });
  };
};



//Добавляем стиль выполненной задачи
function doneBtn() {
  const button = document.querySelectorAll('.completetask');
  const deleteBtn = document.querySelectorAll('.deletetask');
  const item = document.querySelectorAll('.task');
    for (let j = 0; j < button.length; j++) {
      button[j].addEventListener('click', () => {
          item[j].classList.toggle('done-task');
          deleteBtn[j].classList.toggle('disabled');
          toDoList[j].completed = !(toDoList[j].completed);
          saveToLocalStorage(toDoList);

      });
};
};

//Функция добавления задачи
  function addTask() {
    let inputValue = inputToDo.value.trim().toLowerCase();
    if (!(inputValue === '')) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        date: getDateRepresentation(),
        };
        toDoList.push(newTodo);
    inputToDo.value = '';
    render ();
    saveToLocalStorage(toDoList);
} else {
    alert('Поле не может быть пустым')
  };
};
  
 //Обработчики на создание задачи по клику и по нажатию на enter
 
  buttonTodo.addEventListener("click", () => {
    addTask()
  
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      addTask()
    };
});

  

  //Прорисовка из массива
  function render () {
      tasksToDo.innerHTML = '';
      if (toDoList.length === 0) {
        tasksToDo.innerHTML = `<h3>No todos found...</h3>`;
      }
      const todoText = toDoList.map(({ text }) => text);
      const todoDate = toDoList.map(({ date }) => date);
      const todoId = toDoList.map(({ id }) => id);
      for(let i = 0; i < todoText.length; i++) {
        addBlockHtml(todoText[i], todoDate[i], todoId[i])
      }

    const deleteBtn = document.querySelectorAll('.deletetask');
    const tasks = document.querySelectorAll('.task');
    
    //Логика внешнего отображения задач
    for (let k = 0; k < deleteBtn.length; k++) {
      deleteBtn[k].classList.add('disabled');
      tasks[k].classList.remove('done-task');
    }

    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i].completed === true) {
        tasks[i].classList.add('done-task');
        deleteBtn[i].classList.remove('disabled');
      } 
    };

    doneBtn();
    delBtn();
  };



  log(toDoList);
  render();
  
  