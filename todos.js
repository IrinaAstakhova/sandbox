class LocalStorage {
    #keyName

    constructor(keyName){
        this.#keyName = keyName;
    }

    GetItem () {
        const items = localStorage.getItem(this.#keyName);
        return items ? JSON.parse(items) : [];
    }

    SetItem(itemsList) {
        localStorage.setItem(this.#keyName, JSON.stringify(itemsList))
    }
}

class DOM {
    query (selector) {
        return document.querySelector(selector);
    };

    create(type, textContent, ...classNames) {
        const item = document.createElement(type);
        item.textContent = textContent;
        if(classNames.length) {
            item.className = classNames.join(" ");
        }

        return item
    }

}

class Item {
    constructor (id, text) {
        this.id = id;
        this.text = text;
    }
}

class TodoItem extends Item {
    constructor (id, text, completed = false) {
        super(id, text);
        this.completed = completed;
    }
}

class TodoApp {
    constructor() {
        this.dom = new DOM();
        this.storage = new LocalStorage ("todo-Items");
        this.todoList = this.storage.GetItem();
        this.todoInput = this.dom.query("[data-todo-add]");
        this.todoContainer = this.dom.query("[data-todos-container]");

        this.bindEvents();
        this.render();
    }

    addTodo(text) {
        const newTodo = new TodoItem(Date.now(), text);
        this.todoList.push(newTodo);
        this.storage.SetItem(this.todoList);
        this.render();
    }

    removeTodos(id) {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
        this.storage.SetItem(this.todoList);
        this.render();
    }

    toogleTodos(id) {
        const todo = this.todoList.find(todo => todo.id === id);
        if(todo) {
            todo.completed = !todo.completed;
            this.storage.SetItem(this.todoList);
            this.render();
        }
    }

    bindEvents() {
        this.todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && this.todoInput.value.trim()) {
                this.addTodo(e.target.value.trim());
                this.todoInput.value = "";
            }

        })

        this.todoContainer.addEventListener("click", (e) => {
            const elem = e.target;

            if (elem.classList.contains("remove-btn")) {
                const id = +(elem.dataset.id);
                this.removeTodos(id);
                
            } else if (elem.classList.contains("todo-item")) {
                const id = +(elem.dataset.id);
                this.toogleTodos(id);
            }
        })
    }

    render() {
        this.todoContainer.innerHTML = '';
        this.todoList.forEach(todoEl => {
            const todoItem = this.dom.create("div", "", "todo-item", todoEl.completed ? "completed" : "");
            todoItem.dataset.id = todoEl.id;

            const todoText = this.dom.create("span", todoEl.text);

            const btnRemove = this.dom.create("button", "Удалить", "remove-btn");
            btnRemove.dataset.id = todoEl.id;
            btnRemove.disabled = !todoEl.completed;

            todoItem.appendChild(todoText);
            todoItem.appendChild(btnRemove);
            this.todoContainer.appendChild(todoItem);
        })
    }
}

new TodoApp();