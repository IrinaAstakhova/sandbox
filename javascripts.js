//todo

const log = console.log;

const inputToDo = document.querySelector('[data-input]');
const buttonTodo = document.querySelector('#addtodo');
const tasksToDo = document.querySelector('.tasks');

// const toDoList = JSON.parse(localStorage.getItem("todos")) || [];



function saveToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
    };

const getToLocalStorage = () => {
      return JSON.parse(localStorage.getItem("todos")) || [];
      };

const toDoList = getToLocalStorage ();


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
      saveToLocalStorage(toDoList);
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
          toDoList[j].completed = !(toDoList[j].completed);
          saveToLocalStorage(toDoList);

      });
};
};


  
  
 //Ожидание и создание задачи 
  buttonTodo.addEventListener("click", () => {
      if (!(inputToDo.value.trim() === '')) {
        const newTodo = {
          id: Date.now(),
          text: inputToDo.value.trim(),
          completed: false,
          };
          toDoList.push(newTodo);
      inputToDo.value = '';
      render ();
      saveToLocalStorage(toDoList);
  } else {
      alert('Поле не может быть пустым')
  };
  
  });

  //Прорисовка из массива
  function render () {
      tasksToDo.innerHTML = '';
      const todoText = toDoList.map(({ text }) => text);
      todoText.forEach(todo => {
      addBlockHtml(todo); 
      
    });
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.classList.remove('done-task');
    })
    
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i].completed === true) {
        tasks[i].classList.add('done-task');
      }
    }

    delBtn();
    doneBtn();

  };



  log(toDoList);

  render ();
  
  