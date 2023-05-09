// for of loop

const numbers = [55,66,77,88];
const company = "Belfius"

// for(let coffee of numbers){
//     console.log(coffee) 
// }
let coffee; // undefined variable
// let coffee = "sadadasd" // undefined
console.log(coffee)
// let x =0
// for(coffee of numbers){
//     console.log(coffee)
// }

// for(let letter of company){
//     console.log(letter)
// }

const user = {
    id:1,
    username:'root',
    email:'blabla@bla.com'
}

const users = [
    {
        id:1,
        username:'root'
    },
    {
        id:2,
        username:'admin'
    },
    {
        id:3,
        username:'JoeDalton'
    }
]

// for(let val of user){ // for of loop can not be used for an object data. User is not iterable
//     console.log(val)
// }

// for(let person of users){
//     console.log(`ID:${person.id}\nUSERNAME:${person.username}`)
// }

// for in loop
// console.log(user['email'])
// for(let propertyName in user){
//     if(propertyName ==='username' || propertyName==='email'){
//            console.log(user[propertyName])
//     }
// }

// do while loop


// while loop
let count=0;
// true || false = true
// true && false = false
// false || false = false
// false || true = true

// while(count<=10){
//     count++ // 0 + 1 / ++ 2+1 =3 
    
//     if(count >5){
//         break;
//     }
//     console.log('hello world',count) 
// }

while(false){
    console.log('hello world')
}

// do while
// do{
//     //console.log('Hello hello ',count)
//     count++
//     // do something
// }while(count<10)

// do{
//     console.log('Hello hello ',count)
//     // do something
// }while(false)

//console.log('Hello hello ',count)
let x=0
// while(x<users.length){
//     console.log(users[x].username)
//     x++
// }

do{
    console.log(users[x].username)
    x++
}while(false)


