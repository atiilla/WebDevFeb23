const {appMessage,appName,getDate,getRandomNumber} = require('./utils/hello')

// console.log(appMessage)
// console.log('hello')
// console.log(getDate())
// console.log(getRandomNumber())
// npm install node-fetch@v2
// CRUD OPERATIONS

let CRUD = require('./utils/actions')

// console.log(CRUD.register({
//     username:'root',
//     password:'verysecret'
// }))

// console.log(CRUD.login({
//     username:'admin',
//     password:'123'
// }))

const user1= {
    username:'root',
    password:'2323'
}

// CRUD.register(user1)

CRUD.login(user1)