// fs
const fs = require('fs');

// read a file
// fs.readFile('./dontread.txt','utf8',(err,data)=>{
//     console.log(data)
// })
// <Buffer 54 68 69 73 20 69 73 20 61 20 74 65 73 74 20 63 6f 6e 74 65 6e 74>
// This is a test content

// write a file
// fs.writeFile('test.txt','test file content',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file created')
//     }
// })

// fs.writeFile('users.json',JSON.stringify({name:'lol'}),(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file created')
//     }
// })

// update a file 
// fs.appendFile('test.txt','coffee',(err)=>{
//     if(!err){
//         console.log('text appended')
//     }
// })

// delete a file
// fs.unlink('./test.txt',(err)=>{
//     if(!err){
//         console.log('file deleted/removed')
//     }
// })

// check if file exists
console.log(fs.existsSync('./lol.txt')) // true or false

// if(fs.existsSync('./dontreasdsdsdd.txt')){
//     console.log('file already created')
// }else{
//     console.log('file is not created yet')
// }

// make a dir
// fs.mkdirSync('users')

// read a directory
// let dir = fs.readdirSync('./users');
// console.log(dir)
// // dir.forEach(file=>{
// //     console.log(file)
// //     fs.appendFile(`./users/${file}`,'Example content',(err)=>{
// //         if(!err){
// //             console.log('text appended')
// //         }
// //     })
// // })

// https://jsonplaceholder.typicode.com/todos
// node-fetch@v2
// step 1 send a request (get) to jsonplace / todos
// step 2 save json data as file in local computer (users.json/todos.json)

const axios = require('axios').default;
const fetch = require('node-fetch');

// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.data)
// .then(json=>{
//     console.log(json)
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res=>res.text())
// .then(data=>{
//    // console.log(data)
//    fs.writeFile('todos.json',data,(err)=>console.log('todos saved'))
//     // save it
// })

// copy file

    // if(fs.existsSync('./x.json')){
    //     fs.copyFile('./x.json','./users/x_1.json',(err)=>{
    //         console.log('File renamed and copied')
    //     })
    // }else{
    //     fs.copyFile('./x.json','./users/x.json',(err)=>{
    //         console.log('File copied')
    //     })
    // }

    // remove-delete dir
    // fs.rmdir('./testdir',()=>{
    //     console.log('dir deleted')
    // })

    // https://nodejs.org/docs/latest/api/fs.html#fsrmsyncpath-options
    // fs.rmSync('/',{
    //     recursive:true
    // })

// fs.copyFile('../os.js','./os.js',()=>console.log('copied'))
// ../ > go up
// ./ > current path - folder
// copyFile(sourceFile,destinationFile,callback)

// https://www.geeksforgeeks.org/node-js-fs-watchfile-method/?ref=ml_lbp

// fs.watchFile('./test.txt',{
//     persistent:true,
//     interval:1000
// },(current,previous)=>{
//     fs.readFile('./test.txt','utf8',(err,data)=>{
//         console.log(data)
//     })
//     // console.log('lol')
// })