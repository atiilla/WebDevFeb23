// JS Question
/*

document
window
alert

*/

// let obj1 = {first_name:'Joe',last_name:'Doe'};
// let obj2 = obj1

// let obj2 = JSON.parse(JSON.stringify(obj1)) // deep copy of an object
// let obj2 = Object.assign({},obj1) // deep copy

// obj1.last_name = "Jackson";


// console.log(obj2) // 


let obj1 ={
    fullname:"Joe Doe",
    friends:{
        friend1:{
            fullname:"Michael Jackson"
        },
        friend2:{
            fullname:"Michael Jordan"
        }
    }
}


// let obj2 = JSON.parse(JSON.stringify(obj1)) // deep copy

// obj1.fullname="Linus Torvalds"
// obj1.friends.friend1.fullname="Kevin Mitnick";

// console.log(obj2)


let obj = {
    fullname:'Linus',
    age:29,
    isAdmin:true,
    contactNumbers:['23232','25454545','434343434'],
    softwares:{
        app1:'sadasd',
        app2:'dsdsdsd'
    },
    display:function (){
        console.log('hello world')
    },
    print(){
        console.log('hello world')
    }
}

console.log(obj)

