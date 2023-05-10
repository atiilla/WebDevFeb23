// Todo Application 
/*
* Tasks list
* Task Manage
    - Add
    - Remove
    - Update
* Single Task
    - Title/Subject
    - Date (created_date,deadline)
    - Category
    - Description
    - isDone
    - Owner/Author
*/

// elements
const tasksList = document.getElementById('tasksList')
const taskTitle = document.getElementById('taskTitle')
const taskDeadline = document.getElementById('taskDeadline')
const taskCategory = document.getElementById('taskCategory')
const taskDesc = document.getElementById('taskDesc')
const isDone = document.getElementById('isDone')
const taskOwner = document.getElementById('taskOwner')

// Make an object constructor for App
function TodoApplication() {
    this.todos = [] // all my todos/tasks
}

// Define your methods here

// Show or Print all tasks
TodoApplication.prototype.displayAllTasks = function () {

    this.todos.forEach(task => {
        tasksList.innerHTML += `
            <tr>
                            <td>${task.title}</td>
                            <td>${task.created_date}</td>
                            <td>${task.deadline}</td>
                            <td>${task.category}</td>
                            <td>${task.description}</td>
                            <td>${task.isDone}</td>
                            <td>${task.author}</td>
                        </tr>
        `
    })
    return this.todos
}

// Add new task method
TodoApplication.prototype.addTask = function (title, deadline, category, description, isDone = false, author) {
    // i need to insert new task into todos list
    let obj = {
        id: this.todos[this.todos.length - 1] ? this.todos[this.todos.length - 1].id + 1 : 1,
        title,
        created_date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        deadline,
        category,
        description,
        isDone,
        author
    }


    return this.todos.push(obj)
}

// Remove an object from array list
TodoApplication.prototype.removeTask = function (id) {
    let taskID = this.todos.findIndex(function (task) {
        return task.id === id // return id of the object/task
    })
    if (taskID !== -1) {
        return this.todos.splice(taskID, 1)
    } else {
        console.log('Invalid ID')
    }
}

// Update a task
TodoApplication.prototype.updateTask = function (id, newObject) {
    let taskID = this.todos.findIndex(function (task) {
        return task.id === id // return id of the object/task
    })
    newObject.id = id // new object includes ID
    newObject.created_date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    // taskID is position number of the object in the todos array

    return this.todos[taskID] = newObject // update current object with "newObject"
}

TodoApplication.prototype.removeAll = function () {
    //    param.forEach(id=>{
    //     console.log(id)
    //     this.removeTask(id)
    //    })
    let i = 0
    while (this.todos.length > 0) {
        this.todos.pop()
    }
}

TodoApplication.prototype.removeSelectedTasks = function (...ids) {
    ids.forEach(objId => {
        this.removeTask(objId)
    })
}


let app = new TodoApplication();


function clickHandler() {
  
    let BelgDateFormat = new Date(taskDeadline.value).toLocaleString('nl-NL').split(" ")[0]
    console.log(BelgDateFormat)
    let owner = taskOwner.options[taskOwner.selectedIndex]

    if (isDone.options[isDone.selectedIndex].value.includes('false') || isDone.options[isDone.selectedIndex].value.includes('true') && owner.value.includes('true')) {
        tasksList.innerHTML = ""
        let isDoneValue = JSON.parse(isDone.options[isDone.selectedIndex].value)
        

        // taskTitle.value
        app.addTask(taskTitle.value, taskDeadline.value, taskCategory.value, taskDesc.value, isDoneValue, owner.outerText)

        Swal.fire({
            title: 'Success!',
            text: 'Task is added!',
            icon: 'success',
            confirmButtonText: 'OK!'
        })

        app.displayAllTasks()

     


    } else {
        // alert('You can not leave input field blank')
        Swal.fire({
            title: 'Error!',
            text: 'You can not leave input field blank',
            icon: 'error',
            confirmButtonText: 'Understand!'
        })
    }




    // remove inputs values
   // reset inputs 
   taskTitle.value=""
   taskCategory.value=""
}

// app.removeTask(3)
// app.removeTask(1)
// app.removeTask(2)
// app.removeAll()

app.updateTask(3, {
    title: 'Learn Next.js',
    deadline: '10 June',
    category: 'Fullstack',
    description: 'React framework',
    isDone: false,
    author: 'admin'
})

// app.removeSelectedTasks(2,3,1)
// console.log(allTasks)

app.displayAllTasks()
