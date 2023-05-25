// OOP classes and inheritance

// const obj ={
//     fullname:'joe michael'
// }

// let copy = JSON.parse(JSON.stringify(obj)) // deep copy
// let copy = obj
// copy.fullname = "linus"
// console.log(copy)
// let copy = Object.assign({},obj)
// let copy1 = Object.create(obj)
// console.log(copy)
// let container = document.getElementById('container')
// class Person {



//     displayName(name){ // provider
//         // task1
//        // container.innerHTML ="hello world"
//        return name
//     }

//     show(name){ // consumer
//         console.log(this.displayName(name))
//     }

// }
// constructor
// class Person {
    
//     // constructor(...name){
//     //     this.names = name
//     // }

//     static users =[]

//     constructor(name,city){
//         this.fullname = name;
//         this.city = city;
//     }

//     addUser(){
//        Person.users.push(this)
//     }
// }

// let app = new Person('Vlad','Brussels')
// let app1 = new Person('Aleks','London')
// let app2 = new Person('Gregory','Brussels')
// app.addUser()
// app1.addUser()
// app2.addUser()
// console.log(Person.users)


// class Person{
//     constructor(){
//         this.users=[]
//     }

//     addUser(values){
//         this.users.push({
//             fullname:values[0],
//             city:values[1]
//         })
//     }

//     displayUsers(){
//         return this.users
//     }
// }

// let app = new Person();
// app.addUser(['Vlad','Brussels'])
// app.addUser(['Archana','London'])
// app.addUser(['Viktor','London'])

// let arr = app.displayUsers()
// arr.forEach(user=>{
//     console.log(user)
// })


// let app = new Person({name:'Vlad',city:'Brussel'})
// let application = new Person({name:'Vlad',city:'Brussel'})
// console.log(application.names == app.names, typeof app.names, {}=={});

// app.show(app.displayName('Joe'))
// console.log(app)

class Person {
    constructor(){
        this.users=[]
    }

    addUser(values){
        this.users.push(values)
    }
}

// Inheritance
class Doctor extends Person{
    
    makeAppointment(){
        console.log('hello world')
    }
}

class Student extends Person{

}

let doctor1 = new Doctor();

doctor1.addUser({
    fullname:'Vlad',
    city:'Brussels'

})

doctor1.makeAppointment()

let student1 = new Student();
console.log(student1.users)

// console.log(JSON.stringify(Person))