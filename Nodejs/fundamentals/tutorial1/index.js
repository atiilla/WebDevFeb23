console.log('hello world');
const axios = require('axios').default
const hello = require('./myModule')
const fetch = require('node-fetch')
const {register,login} = require('./utils')
console.log(hello)
register()
login()

// GET req 
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })

// POST req
// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({name:'lol'})
// })
// .then(res=>res.json())
// .then(data=>console.log('sent',data))

// PATCH PUT
// fetch('https://jsonplaceholder.typicode.com/todos/9',{
//     method:'PATCH',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({name:'david'})
// })
// .then(res=>res.json())
// .then(data=>console.log(data))

const http = require('http')

// create webserver
// http.createServer(function(request,response){
//     response.write('hello world')
//     response.end();
// }).listen(3000,()=>console.log('WEb server is running'))


