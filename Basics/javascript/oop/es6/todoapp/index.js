// Todo Application
// database (storage)
let todos = []
// let users =['admin','user','user1','user2']
// // 

// class User{

//     getUsers(){
//         return users;
//     }
// }

// class Standard extends User{

//     getUsers(){
//         return users.slice(1)
//     }
// }

// class Admin extends User{

// }

// let user = new Standard()
// console.log(user.getUsers())

// let admin = new Admin()
// console.log(admin.getUsers())

class Utilities {


    static getDateOfToday() {
        return new Date()
    }



    // encodeString(str){

    // }

    // decodeString(str){

    // }


}

class UI {
    constructor(title, body) {
        this.id = todos.length + 1
        this.title = title
        this.body = body
        this.created_date = Utilities.getDateOfToday()
    }
}

class Todo extends Utilities {

    // getDateOfToday(){
    //     return 'hello world'
    // }

    addTodo(title, body) {
        let todo = new UI(title, body)
        todos.push(todo)
    }

    getTodos() {
        return todos;
    }

    removeTodo(id) {
        let todoIndex = todos.findIndex(todo => todo.id === id)
        return todoIndex>=0 ? todos.splice(todoIndex,1):console.log('Todo not found')
    }

    findTodoById(id){
        return todos.find(todo=>todo.id===id)
    }

    updateTodoById(id,newObj){
        let todo = this.findTodoById(id)
        console.log("before",todo)
        let todo_obj = {
            ...todo,
            ...newObj
        }
        console.log("after",todo_obj)
    }

}

let app = new Todo();
app.addTodo('Javascript', 'Still Learning')
app.addTodo('Node.js', 'Not done yet')
// console.log(app.getTodos())
// app.removeTodo(2)
// console.log(app.getTodos())
// console.log(app.findTodoById(2))
// app.updateTodoById(1,{title:'React.js',body:'not started yet',updated_date:new Date()})
// setTimeout(()=>{
//     app.updateTodoById(1,{title:'React.js',body:'not started yet',updated_date:new Date()})
// },5000)