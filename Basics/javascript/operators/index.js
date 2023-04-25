// Arithmetic operator
/*
+ , - , * , / , ++ , --
*/
let number = 50;

// increase
number++
number = number + 1
number += 1

// decrease
number--
number = number - 1
number -= 1


// add operator (+)
number = number + 10;
number += 10

// subtract op (-)
number -= 20;
number = number - 20

// multiply (*)
number = number * 2
number *= 2

// divide (/)
number = number / 2
number /= 2

++number
--number

let i = 0;

// for(i; i<20;++i){
//     console.log(i)
//     if(i>=10){
//         i--
//     }
// }
number *= 3

// expo (**)
number = number ** 2
number **= 2

// mod (%)
// number %=1
// number = number % 3
console.log(13 % 5);

// Comparison Operators

var number1 = 5
var number2 = Number("5")


// equal to (==)
number = number1 == number2 // check if n1 equal to number2 using value only

// equal to (===)
number = number1 === number2 // false value and data type


// not equal (!=)
number = number1 != number2 // check only value

var result;

result = "Python" == "Python" // true
result = "PytHon" == "Python" // false

result = "PytHon" != "Python" // true
result = "Python" != "Python" // false

result = null === null // true
result = undefined == undefined // true
result = null + 10
result = undefined === undefined  // true

result = "5" !==5 // true

// greater than symbol (>)

result = 10>11 // false
result = 10>=11 // false


number2= 14;
number1 = Number("14");
number = number


result = number1 < number2
result = number1 <= number2
result = number1 > number2

// ternary operator ?

result = number1===number2 ? 'yes':'no';

// nested ternary

// result = number1===number2 ?
// (number1>number2)?
// 'yes its greater'
// :'no its small number'
// :'Not equal'

const user={
    username:'joe',
    age:20
}

result = user.username === 'Joe'?
(user.age>20)?
'Welcome Joe'
:'Age is not greater than or equal to 20'
:
'unknown user'

const user1 = {
    username:'root',
    password:"qwerty123"
}

result = user1.username === "root" ?
user1.password === 'qwerty123' ?
'Welcome Root'
:
'Incorrect Password'
:'username is incorrect'


// Logical Operators
// result = user.username
result = user.username.toLowerCase();
result = user.username === "JOE".toLowerCase();


// Logical Operators
// and operator (&&)

result = number1 == number2 && number2>=number1;

// or operator
result = number1 == number2 || number2<number1

// not operator
result = !(number1 != number2) || (number2<number1)
result = !(number1 != number2)

number1 = 6;
number2 = 5

result = number1 & number2
result = number1|number2
result = number1 << number2




// examples 
var michael = {
    fullname : 'Michael Jordan',
    age:55,
    email:'michael@yopyop.com',
    country:'USA'
}

michael['age']++ // increase
michael['country'] = 'Japan'
michael.country = 'USA'
++michael['age']

result = michael.age ===55 ?
michael['country'] === 'usa'.toUpperCase()?
'country is correct'
:
'country is not correct'
:'check age value'


var person1 = {username:'joe'};
var person2 = {username:'joe'};

result = person1.username == person2.username
result = [] == [] // false

var drink;

result = drink!=undefined?
drink
:
'No drink found'

result = drink?
drink
:
'No drink found (new)'

result = false?'1':'0'


result = !(!false == true) // false

// result = Boolean(drink)
console.log(result)

//console.log(number)

/*

Bit-level manipulation of data: By using bitwise operators, you can manipulate individual bits of data stored in a computer's memory.

Encryption and decryption: Bitwise operators can be used in encryption and decryption algorithms to scramble or unscramble data.

Image processing: Bitwise operators are commonly used in image processing applications, where they can be used to perform operations such as masking and blending.

Networking: Bitwise operators can be used in networking applications to perform tasks such as subnetting and IP address manipulation.

Device drivers: Bitwise operators are often used in device drivers to control hardware devices at a low level.

Data analysis: Bitwise operators can be used to perform data analysis tasks such as counting the number of bits that are set to 1 in a binary number.
*/

console.log(10|15)