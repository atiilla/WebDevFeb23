/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object const user = {}
for/of - loops through the values of an iterable object const user = {}
while - loops through a block of code while a specified condition is true 
do/while - also loops through a block of code while a specified condition is true
*/
// let username= "root"
// for(let i=1;i<=10;i++){
//     console.log(`root${i}`)
//     // SaveEmployeData.save(`root${i}`)
// }

// let x=0;
// for(x;x<10;){

//     console.log('hello',x) // print
//     x++
// }

const user = {
    id: 1,
    username: 'root',
    password: 'toor'
}

// console.log(Object.keys(user))
// // console.log(user['username'])

// for (let x = 0; x < Object.keys(user).length; x++) {
//  //  console.log(Object.keys(user)[x])
//     let propertyName = Object.keys(user)[x]
//     console.log(user[propertyName])
// }

// console.log(Object.entries(user))
let UserArr = Object.entries(user)

// for(let i=0;i<UserArr.length;i++){
//     const property = UserArr[i]
//     console.log(`Property Name: ${property[0]}\nProperty Value: ${property[1]}`)
// }

// for in loop
const person = {
    fullname:'joe jackson',
    address:{
        street:'stalingrad',
        location:{
            lat:5343434,
            lon:3232323
        }
    }
}
function Recursiveloop(obj) {
    for (let val in obj) {
        if (typeof obj[val] === 'object') {
            Recursiveloop(obj[val])
        } else {
            console.log(obj[val])
        }
    }
}

// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f:{
//                 g:55
//             }
//         }
//     }
// }


// Recursiveloop(person)

// const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>{
//     for(let i=0;i<data.length;i++){
//         console.log(`username: ${data[i].username}\naddress:${data[i].address.street}\nlocated at:${data[i].address.geo.lat},${data[i].address.geo.lng}`)
//     }
// })

// const username = "nullpointerexception"
// let newuser=""
// for(let letter=0;letter<username.length;letter++){
//    // console.log(username[letter].toUpperCase())
//     newuser += username[letter].toUpperCase()
//     console.log(newuser)
// }

// const number = 100;
// for(let i=0;i<=number;i++){
//     console.log('hello',i)
// }

/*
1-100
let total =1
total = 1+2
total = 3 + 4
total = 7 + 5

total+=1-2-3-4-5-6-7-8
let number=[]
*/

// 1000 , 3000, 4000
// 1000 + 3000 + 4000 = 


// let messages = [['bla','lol','trololo'],['bla1','lol1','trololo1'],['bla2','lol2','trololo2']]

// for(let i =0;i<10;i++){
//     for(let x=0;x<10;x++){
//         console.log(`i=${i}\nx=${x}`)
//     }
// }

let messages = [['bla','lol','trololo'],['bla1','lol1','trololo1'],['bla2','lol2','trololo2']]
for(let firstIndex=0;firstIndex<messages.length;firstIndex++){
    // nesting here
    for(let secondIndex=0;secondIndex<messages[firstIndex].length;secondIndex++){
        console.log(messages[firstIndex][secondIndex])
    }
}



// for(let i=100;i>=0;i--){
  
//     if(i>=30 && i<=50){ 
//     }else{
//         continue
//     }

//     console.log('hello',i)
// }


// for(let i=0;i<=100;i++){
  
//     if(i>=30 && i<=50){ 
//         console.log('hello',i)
//         // code here
//     }


// }

var number = 11;

