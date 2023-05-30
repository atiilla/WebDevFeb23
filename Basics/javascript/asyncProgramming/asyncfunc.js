// async 
let companyName = "hello"

// async function GetName(){
//     // async 
//     // await 
//     let data = await companyName
//     return data
// }

// let GetName = async ()=>{
//     let data = await companyName
//     return data
// }

// GetName().then(name=>console.log(name))

// const fetch = require('node-fetch');

async function GetTodos() {
    console.log('step1')
    let response = await fetch('http://localhost:3000/database/1') // undefined
    console.log('step2')
    let data = response.json() // resolve object
    return data;


    // try {
    //     let response = await fetch('https://jsonplaceholder.typicddsdsdode.com/todoxs')
    //     return await response.json()

    // } catch (error) {
    //     return 'errorrr'
    // }
}

// let result = GetTodos()
// result
// .then(todo=>console.log(todo))
// // .then(data=>console.log(data))
// .catch(err=>console.log(err))

const btn = document.querySelector('.btn')
const output = document.querySelector('.output')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    output.innerText="Loading..."
    //  console.log(Promise.allSettled([GetTodos]))
    // GetTodos().then(console.log)
    GetTodos()
    .then(todo=>{
        output.innerText=todo.username
    })
    .catch(err=>{
        console.log(err,'errorrrrr')
    })
    .finally(()=>{
        console.log('done')
    })
})
