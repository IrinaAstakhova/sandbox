class TodoApp {
    constructor() {
        this.todoList = [];
        this.todoInput = document.querySelector("[data-todo-add]");
        this.todoContainer = document.querySelector("[data-todos-container]");

        this.bindEvents();
    }

    addTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }

        this.todoList.push(newTodo);
    }

    bindEvents() {
        this.todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && this.todoInput.value.trim()) {
                this.addTodo(e.target.value.trim());
                this.todoInput.value = "";
            }

        })
    }
}

new TodoApp();