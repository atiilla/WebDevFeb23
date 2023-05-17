// regular for loop
//for(initvar;condition;increment/decrement)
let i=0;
let names = ['Joe','Mike','Smith']
let currentName = ""
// for(i;i<=10;i++){
//     // console.log(i)
// }
// console.log(i)
// console.log(i)
// for(i;i<names.length;i++){
//     // console.log(names[i])
//     currentName = names[i]
//     console.log('----')
//     // console.log(currentName)
// }

//  for of in 
const obj = {
    name:'joe',
    age:21
}

// for(let name of names){
//     console.log(name)
// }

// for(let key of obj){
//     console.log(key)
// }

// for(let key in obj){
//     console.log(key) // key:value or name:'joe'
//     console.log(obj[key])
// }

const computer = {
    size:'17inch',
    brand:'hp',
    os:'windows'
}

// {}.length /// 3 4 5 i<5 i 0 i  1 2 3 4
// Object.keys({a:1,b:2}) > ['a','b'].length
// 'a' 'b' > obj['a'] > 1

// for(let keyName in computer){
//     console.log(keyName)
// }

// you must use forEach or map
// Object.keys(computer).forEach(function(info){
//     console.log(computer[info])
// })

// Object.keys(computer).map(function(info){
//     console.log(computer[info])
// })
// {} > []
// for(let i =0;i<Object.keys(computer).length;i++){
//     let keyName = Object.keys(computer)[i] // size - brand - os
//     console.log(computer[keyName])
// }

let convertObjectToArray = Object.keys(computer)

// step1
for(let i=0;i<convertObjectToArray.length;i++){
    // step2 get propertyName
 //   console.log(convertObjectToArray[i])
    let PropertyName = convertObjectToArray[i];
    // step3 extract property value
    console.log(computer[PropertyName])

}






// console.log(currentName)

// Local scope variable?
// const name = "linux > Global scope variable";
// function Display(){
//     const name = "Windows > Local Scope variable"
//     console.log(name)
// }
// Display()

// console.log(name)

// Global scope variable?
