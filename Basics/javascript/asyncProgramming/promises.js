// promise - async programming
// then - catch - finally - Promise chain methods
// console.log(typeof promiseMe)
// let promiseMe = Promise.resolve('Promise that i will provide this data')
// let value= ""
// promiseMe
//     .then(val=>{
//         return val.toUpperCase()
//     })
//     .then(val1=>{
//         return val1.concat('hello world')
//     })
//     .then(result=>{
//        console.log(result)
//         value=result
//     })
//     .catch((err)=>{
//         if(err){
//             return err
//         }
//     })
//     .finally(()=>{
//         console.log(value)
//     })



let users = ['joe', 'jack', 'mike']
let users1 = []

// function DisplayUsers() {
//     return new Promise((resolve, reject) => {
//       try {
//         if (users1.length > 0) {
//           resolve(users1);
//         } else {
//           reject('No data found');
//         }
//       } catch (error) {
//         reject('Error occurred');
//       }
//     });
//   }

// let result = DisplayUsers()

// result
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// let companyName=undefined
// const fetch = require('node-fetch')
// function displayCompany(str){
//     return new Promise((resolve,reject)=>{
//         // resolve -> provide data
//         // reject -> return error message
//         console.log('loading')
//         // downloading content here
//         fetch('http://localhost:3000/database')
//         .then(res=>res.json()) // 
//         .then(data=>{
//             console.log('data is loaded')
//             resolve(data)
//         })
//         .catch(err=>reject('error'))

//     })
// }

// // displayCompany()
// // .then(res=>console.log(res))
// // .catch(err=>console.log(err))


// // fetch('http://localhost:3000/database')
// // .then(res=>{
// //     return res.json()
// // })
// // .then()
// // .finally(()=>{
// //     console.log('remove spinner')
// // })

// let u1 = Promise.resolve([1,2,3])
// let u2 = new Promise((resolve)=>{
//     setTimeout(()=>resolve([4,5,6]),3000)
// })
// let u3 = Promise.reject('idk')


// let result = Promise.all([u1,u2,u3])
// let result = Promise.allSettled([u1,u2,u3])

// result
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))

// let result = Promise.race([u2, u1, u3])
// let result = Promise.all([u1,u2,u3])

// function displayResult(str) {
//     console.log(str)
// }

// result.then(displayResult).catch(err=>console.log('errorrrr'));

