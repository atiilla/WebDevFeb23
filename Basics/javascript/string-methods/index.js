// String Methods
/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
*/

let message = "Hello World World World World! 🥸";
let result;

// length
result = message.length

// slice
result = message.slice(0,12)
result = message.slice(0,message.length)
result = message.slice(5,10)
result = message.slice(5,7)
// result = message[0,message.length/2]

// substring
result = message.substring(0,5);

// substr 
result = message.substr(0,5);

// replace
result = message.replace('World','Friend!')

// replaceAll
result = message.replaceAll('World','Friend!')

result = message.replace(/[a-z A-Z]/,'01')
result = message.replace(/[0-9]/)
result = message.replace(/🥸/,'🤓')

// toUpperCase() > convert lower letter to upper
result = message.toUpperCase()

// toLowerCase() > convert upper to lower
result = message.toLowerCase();

result = message.replace(/[a-z A-Z]/g,'01')

// concat
let firstname = 'Joe'
let lastname = 'Jackson';

result = firstname.concat(lastname,'asd','blabla','blabla')

/*

String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

*/

// trim() remove spaces
let msg = "    c++     "
result = msg.trim();

// trimStart()
result = msg.trimStart()

// trimEnd()
result = msg.trimEnd();

// padStart
result = msg.padStart(msg.length*2,'blablabla')

// padEnd
result = msg.trim().padEnd(msg.length*2,'010101')

result = msg.trim().replace('c++','python').toUpperCase().padStart(result.length*2,'*\n')

// charAt
result = msg.trim().charAt(1)
result = msg.trim()[0]

// charCodeAt
result = msg.trim().charCodeAt(0)

// split() > convert string into an array
msg = 'a,b,c,d,e,f,g'
// ['a','b','c','d','e','f','g']
result = msg.split()
// [ 'a,b,c,d,e,f,g' ]
result = msg.split(",")

msg = 'a-b-c-d-e-f-g'
result = msg.split('-')

msg = "21/12/2023"
result = msg.split('/').toString()

msg = `abc
dfg
h01
012
b01`

result = msg.split('\n')

msg = "I turn coffee into code";

// includes method
result = msg.includes('linux'); // bool data

// find
result = msg.search('coffee') // index number

// indexOf
result = msg.indexOf('turn');


let prefix = "!username"
result = prefix + " linus"
// result = result.startsWith(">username");

// endWith
result = result.endsWith('coffee')

// fromCharCode
// from utf-16 to utf-8
result = String.fromCharCode(102)

// function EncodeMyStringIntoCharCode(str){
//     return str.charCodeAt()
// }

// let StrNeedToBeConverted = "Secret Message";

// result = StrNeedToBeConverted.split("")

// let arr=[]
// result.forEach(letter=>{
//     console.log(letter.charCodeAt())
//     arr.push(letter.charCodeAt())
// })

// result = arr


// result = "Linux ".repeat(3)

const obj = "1 "
result = obj.repeat(10).trim().split(" ").fill("👻").toString().replaceAll(",","\n")
console.log(result);


