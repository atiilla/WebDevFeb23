var n1 = 2;
var n2 = "2";
var result;

// equal to -> Control only value 
result = undefined == undefined
result = n1 == n2 
result = 1==2
result = 1 == "2"

// equal to (===) value and data type
result = 1==="1" // false
result = 1===1
result = "hello" === "hello" // true
result = {} === {}
result = NaN === NaN

// not equal 
result = 1 != 2
result = "Hello" != "World" // true
result = "Hello" != "Hello" // false

// not equal !==
result = 1 !== 1
result = 6 !== "6" // true

// greater than >
result = 10 > 11 // false
result = 10>9 // true
result = 10>10 // false

// greater than or equal >=
result = 10>=10 // true
result = 10>=4 // true

// less than 
result = 5<3 // false
result = 5<4 // false
result = 5<6 // true
result = 5<5 // false

// less than or equal to
result = 5<=5 // true

let michael = 18;
result = michael>=18 ? 'Allowed to drink tequila' : 'Soft drink'

if(michael>=18){
    console.log('allowed')
}else{
    console.log('not allowed')
}


// Logical Operators
// not operator
result = !(michael>=18)

// // and operator
// let startRange =5;
// let endRange=18;
// result = startRange>=5 && endRange<=14 ? 'Range is correct' : 'Range is not correct'


// or operator
let startRange =5; // false
let endRange=18; // true
result = startRange>=5 || endRange<=14 ? 'Range is correct' : 'Range is not correct'

console.log(result)

// 1,2,3,4,5,6,7,8,9,10
// number % 2 == 0


// Array.from({
//     length:20
// },(v,k)=>{
//     k++
//     // console.log(k%2)
//     // console.log(k%2 ? `${k} is odd number`:`${k} is even number`)
//     // if(k%2){
//     //     console.log(`${k} is odd number`)
//     // }else{
//     //     console.log(`${k} is even number`)
//     // }

//     if(k%2===0){
//         console.log(`${k} is odd number`)
//     }else if(k%2===1){
//         console.log(`${k} is even number`)
//     }else{
//         console.log('none')
//     }
// })


let number = 4;
// betweeen 5 and 10
// if(number<=2){ // false
//     console.log('number is greater')
// }else if (number <=5){ // true
//     console.log('number is less than 5 or equal')
// }else{ // false
//     console.log('none of them are true!!!')
// }

// let _result = number>=5 && number <=10 ? number : 'out of range'

let _result = number>=5 ?
number<=10?
number
:
'out of the range'
:
'out of the range'

console.log(_result)


console.log(_result)