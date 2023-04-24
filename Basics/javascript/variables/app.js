/*

To run javascript file in terminal:
> node app.js
> nodemon app.js
// `sudo npm install nodemon -g` ---->> linux or macos 
// `npm install nodemon -g` ----->> windows only

*/

// variables

// var const let 
/*

VarType VarName = Variable Value
let message = "hello world"
let message;
*/

/*

var hello ="world"

- can be update  hello = "jack"
- re-declare var hello = hello michael

let name = "Vlad"
- can be update name = "Gregory"
- can not be re-declare let name = "Joe"

const token ="abc123"
- can not be update or re-declare
- constant

*/

const token = "abc123"
console.log(token)

let name = "Micropsoft";
// re-init - update 
name = "Coffee" // correct

//let name = "Starbucks" // not correct
// SyntaxError: Identifier 'name' has already been declared
console.log(name)

var socialmedia = "twitter";

// re-init
var socialmedia = "facebook";

// re-assign - update
socialmedia = "instagram"

const x=0,y=0,z=1;
let a=1,b=2,c=3

console.log(socialmedia)

a=6
b="hello"
c=5+5

console.log(a,b,c)

let number1;
let number2;

console.log(number1+number2) // NaN = Not a number
console.log(typeof (number1+number2)) // NaN = number

// basic math in javascript
let result;

result = 10-5
result = 5*10
result = 100/4

const salary = 4000

// (salary * 100)/50 = TAX

// const TAX = (salary*30)/100

// console.log(result);
// console.log(salary - TAX)
result = "This" + " " + "is" + " " + "cool"

var NAme12 = "hello" // correct
// var 12name = "hello" // incorrect
//var ad asdasd = "hello" // incorrect no SPACE! between words 
var $ = "usd";
console.log($);

var _ = "hello"

// var -="sadsadsad"

// var %asdasdasd="asdasd"
// var hello%="asdasdasd"

const username = "jack"
const Username = "joe";
console.log(result)
console.log(username,Username)