const task_title = document.querySelector('input');
const task_content = document.querySelector('textarea');
const saveBtn = document.querySelector('.saveBtn')
const todoContainer = document.querySelector('.todoContainer')



let todos = []

class UI {
    constructor(todo_title, todo_content) {
        this.id = todos.length + 1
        this.todoTitle = todo_title
        this.todoContent = todo_content
        this.createdDate = new Date();
    }
}

class Todo {

    addTodo(title, content) {
        let todo = new UI(title, content)
        return todos.push(todo)
    }

    displayTodos() {
        todoContainer.innerHTML = ""
        todos.forEach(todo => {
            console.log(todo)
            // print all here
            todoContainer.innerHTML += `<li class="list-group-item">
            <div class="row justify-content-between align-items-center">
            <div class="col-md-9">
            <p class="lead">${todo.todoTitle}</p>
            <p class="">${todo.todoContent}</p>
            </div>
            <i class="fa-solid fa-trash-can col-md-1" data-id="${todo.id}"></i>
            </div>
            </li>`
        })
    }

    removeTodoFromStorage(id) {
        let todoIndex = todos.findIndex(todo => todo.id === id);
        return todos.splice(todoIndex, 1)
    }


}

let app = new Todo();

saveBtn.addEventListener('click', (e) => {
    e.preventDefault(); // preventing default settings in click event
    //console.log(task_title.value,task_content.value)
    if (task_title.value !== "" && task_content.value !== "") {
        app.addTodo(task_title.value, task_content.value)
        app.displayTodos()
    }else{
        alert('You can not leave inputs empty')
    }

    task_title.value = ""
    task_content.value = ""
})

todoContainer.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(e.target.classList.contains('fa-trash-can'))
    if (e.target.classList.contains('fa-trash-can')) {
        console.log('DELETE', e.target.closest('li'))
        e.target.closest('li').remove() // Remove Todo from UI
        // console.log(e.target.dataset.id)
        app.removeTodoFromStorage(e.target.dataset.id) // remove todo from storage by todo.id
    }
})