// An exercise using function and operators

// Example of Dataflow

// 1. Define a function that takes a number as a parameter and passes it to a callback function
// function ParentFunction(number,callback){
//         return callback()
// }


// function MultiplyBy2(number){
//     return `Number is ${number*2}`
// }

// let result = ParentFunction(20,MultiplyBy2)

// let result = ParentFunction(10,function(number){
//     return `The number is ${number}`
// })

// console.log(result)
// console.log(ParentFunction(20,MultiplyBy2))

// Define a function that takes a number as a parameter and returns the number multiplied by 2

// 4. store the result in a variable and log it to the console

// print the result to the console
//console.log(result);


// function GetName(name,PrintService){
//     return PrintService(name)
// }

// function PrintService(whoSent){
//     return `Mail sent by ${whoSent}`
// }

// let result = GetName('Livina',PrintService)

// console.log(result)

// function GetLogin(account,callback){
//     // account need to be an object.
//     return callback(account)
// }

// function VerifyAccount(login){
//     let isVerified = typeof(login) ==='object'?
//     login.username ==='root' && login.password ==='toor'?
//     'Account is verified':
//     'Account is not verified'
//     :
//     'Login is not an object!'
//     return isVerified
// }

// let result = GetLogin({username:'admin',password:'toor'},VerifyAccount)

// console.log(result)

function GetUsername(username){
    return username
}

function GetEmail(email){
    return email
}

function App(_username,_email){
    let username = GetUsername(_username);
    let email = GetEmail(_email)
    return {
        username,
        email
    }
}

let user = App('root','toor');
console.log(user);

// ternary operator ?
// typeof 
// function
// arithmetic operator + * - /
var PowOfHeight = height*height