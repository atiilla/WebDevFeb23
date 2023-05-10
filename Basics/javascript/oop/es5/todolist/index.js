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

// Make an object constructor for App
function TodoApplication() {
    this.todos = [] // all my todos/tasks
}

// Define your methods here

// Show or Print all tasks
TodoApplication.prototype.displayAllTasks = function () {
    return this.todos
}

// Add new task method
TodoApplication.prototype.addTask = function (title, created_date, deadline, category, description, isDone = false, author) {
    // i need to insert new task into todos list
    let obj = {
        id: this.todos[this.todos.length - 1] ? this.todos[this.todos.length - 1].id + 1 : 1,
        title,
        created_date,
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
   if(taskID!==-1){
    return this.todos.splice(taskID, 1)
   }else{
    console.log('Invalid ID')
   }
}

// Update a task
TodoApplication.prototype.updateTask = function (id,newObject) {
    let taskID = this.todos.findIndex(function (task) {
        return task.id === id // return id of the object/task
    })
    newObject.id=id // new object includes ID
   
    // taskID is position number of the object in the todos array

    return this.todos[taskID] = newObject // update current object with "newObject"
}

TodoApplication.prototype.removeAll = function () {
    //    param.forEach(id=>{
    //     console.log(id)
    //     this.removeTask(id)
    //    })
    let i = 0
    while(this.todos.length>0){
        this.todos.pop()
    }
}

TodoApplication.prototype.removeSelectedTasks = function(...ids){
    ids.forEach(objId=>{
        this.removeTask(objId)
    })
}


let app = new TodoApplication();

app.addTask('learn javascript', 'asd', 'asd', 'asd', 'asdsda', false, 'jackie')
app.addTask('learn nodejs', 'asd', 'asd', 'asd', 'asdsda', false, 'jackie')
app.addTask('learn react.js', 'asd', 'asd', 'asd', 'asdsda', false, 'jackie')


// app.removeTask(3)
// app.removeTask(1)
// app.removeTask(2)
// app.removeAll()
let allTasks = app.displayAllTasks()
app.updateTask(3,{
    title:'Learn Next.js',
    created_date:'10 May',
    deadline:'10 June',
    category:'Fullstack',
    description:'React framework',
    isDone:false,
    author:'admin'
})

app.removeSelectedTasks(2,3,1)
console.log(allTasks)

