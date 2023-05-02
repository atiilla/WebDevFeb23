/*
@ Array methods 
list of methods;

*/

// let names = [
//     'string',
//     true,
//     12,
//     null,
//     NaN,
//     undefined,
//     {},
//     function(){},
//     ['asd']
// ]

// names[0] = 'Joe Doe'

// names[100] = "This is cool";


// var result = names.length
// var result = names[10]

// // console.log(names[1])

// result = [1,2,3,[4,5,6,[7,8,9]]];
// /*
// [
//     1,
//     2,
//     3,
//         [
//         4,
//         5,
//         6,
//                 [
//                     7,
//                     8,
//                     9
//                 ]
//         ]

// ]

// */
// // console.log(result[3][3][1])
// // console.log(result[2])

// const response = {
//     data:[
//         {
//             id:1,
//             username:'asd0',
//             points:[['english',70],['math',80],['physics',90]],
//         },
//         {
//             id:2,
//             username:'asd1',
//             points:[['english',70],['math',80],['physics',90]],
//         },
//         {
//             id:3,
//             username:'asd2',
//             points:[['english',70],['math',80],['physics',90]],
//         }
//     ]
// }

// // console.log(response.data[2].points[2][0]);

// // const usernames = ['a','b','c','d','e','g','h'];

// var result;

// // map()
// // result = usernames.map(function(val,i){
// //     return val
// // })

// // usernames.map(function(val,i){

// //     console.log(`i letter is ${i}\nVal is ${val}`)
// // })

// // console.log(result)

// const todos = [{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   }];


// // todos.map((item,index)=>{
// //     //console.log(item) // object
// //     console.log(`User ID ${item.id}`)
// //     item['email'] = "joe@joe.com"

// //     if(item.id==3){
// //         item['password'] = 'querty123'
// //     }

// //     console.log(item)
// // })

// // response.data.map(function(item){
// //     // console.log(item.points)
// //     item.points.map(point=>{
// //          console.log(point[0] + ":" + point[1])
// //     })
// // })

// let company = "Salesforce".split("")
// console.log(company)
// // ['s','a','e','s','f','o','r','c','e']
// // var result = company.map(letter=>{
// //     // console.log(letter)
// //     return '$'+letter
// // })

// // var result = company.map(letter=>{
// //     // console.log(letter)
// //     return '$'+letter
// // })

// // company.forEach(function(val){
// //   //  console.log(val,"this is value")
// //     return val
// // })

// var usernames  = ['Bilal','Jeroom','Apple','Livina','Aliaksei','Vlad','Gregory']


// // result = company.map(function(val,index){
// //     console.log(index)
// //     return index>=5
// // })

// // function GetUsername(user){ // Aliaksei
// //     return usernames.map(function(val){
// //         return val == user
// //         // Bilal == "Aliaksei"
// //         // "Aliaksei" == "Aliaksei"
// //     })
// // }

// // result = GetUsername('Vlad')
// // console.log(result)

// // function A(){
// //     return 23
// // }

// // function B(){
// //     return A()
// // }

// // var result = B()

// // console.log(result,"resulttttt")

// // filter() 


// // result = usernames.filter(function(val,index){
// //     return index >=5
// // })



// // console.log(result)

// // let students = Array.from(Array(20)).map(function(val,index){
// //     index++
// //     return {
// //         username:`student${index}`,
// //         age:3*index
// //     }
// // })

// // let WHoAllowed = students.filter(function(student,index){
// //     return student.age >=20
// // })

// // console.log('hello',WHoAllowed)
// // console.log(students)


// const products = [
//     {
//         id:1,
//         title:'Samsung A7',
//         category:"Mobile"
//     },
//     {
//         id:1,
//         title:'Lenovo Laptop',
//         category:"computer"
//     },
//     {
//         id:1,
//         title:'Toshiba Laptop',
//         category:"computer"
//     },
//     {
//         id:1,
//         title:'Ethernet cable',
//         category:"Electronics"
//     },
//     {
//         id:1,
//         title:'Iphone 14',
//         category:"Mobile"
//     }
// ]

// let userInput = "computer"

// result = products.filter(function(productItem,index){
//     return productItem.category == userInput
// })

// console.log(result)


// concat
// const obj1 = [1,2,3]
// const obj2 = [4,5,6];
// const obj3 = [22,33,44,55,66,...[77,88,99]] // spread
// var result = obj1.concat(obj2,[7,8,9],[10,11,12],obj3) // merged obj1 with obj2

// console.log(result)

// let state = [1,2,3];
// state = [...state,4,5,6]
// state = [...state,'linus']
// state = [...state,'penguin']
// console.log(state)

// let obj1=[1,2,3]
// let obj2=[4,5,6]
// let result = [...obj1,...obj2] // merged two arrays
// console.log(result)

// every method

// let scores = [74,54,56,55,66,77,40];
// let result = scores.every(function(val){
//     return val >=50
// })


// // some method
// result = scores.some(function(val){
//     return val<=40
// })

// let users = ['Jeroom','Livina','Apple','Bilal'] // bilal
// result = users.includes('Apple') // case-sensitive

// result = users.some(user=>user.toLowerCase()==='bIlAl'.toLowerCase())

// console.log(result) // false

const scores = [1, 2, 3, 4, 5, 6, 7]
// 1+2 = 3
// 3+3 = 


// reduce 

let result = scores.reduce((prev,current,index,itself)=>{
    console.log(prev)
    return itself
})

console.log(result)