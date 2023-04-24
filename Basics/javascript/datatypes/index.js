/*
Primitive data types
String.
Number.
Boolean.
Undefined.
Null.
*/

let result;

// undefined data type
console.log(result) // undefined 

// string data type
result = "jack"

// number data type
result = 100;

// boolean > true or false
result = 'true'
result = false;

// null data type
result = null;

result = null == 0;

result = null + null

result = 0 + 0;


// primitive data type

// object
var numbers = [1, 2, 3, 4]
var user = {
    username: 'root'
}

result = numbers
result = user
result = null

console.log(typeof new Date())

console.log(typeof result)

// length; // returns size of data

console.log("Hello world".length)
console.log([1, 2, 3, 4, 5].length)
console.log({ username: 'root' }.username.length)

result = 'Jack\'s laptop';
result = "Jack's laptop";
result = `jack's laptop`;

// var 🤌 = "good";

var ф_ф = "emoji in js"

var username = "root"

console.log(ф_ф)


// function 
function getName(){ // 
    return "Joe"
}

result = typeof getName // type is function

// class 
class Human {

    getName(){
        return "Jack"
    }
}

// init object from class Human
result = Human // type here is class
result = new Human() // an object created from Human class
result = typeof result.getName



console.log(result)