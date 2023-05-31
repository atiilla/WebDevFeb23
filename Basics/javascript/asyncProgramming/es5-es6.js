let users = ['Staci', 'Vlad', 'Viktor', 'Gregory'];

// function getUsers(){
//     setTimeout(()=>{
//         console.log(users)
//     },2000)
// }


// function createUser(user,callback){
//     setTimeout(()=>{
//         users.push(user)
//         callback()
//     },3000)
// }

// createUser('Halid',getUsers)

// function getUsers(obj) {
//     return new Promise((resolve, reject) => {
//         console.log('Wait 2 seconds')
//         setTimeout(() => {
//             resolve(obj)
//         }, 2000)
//     })
// }

// function createUser(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             users.push(user)

//         }, 3000)

//     })
// }

// let App = new Promise((resolve,reject)=>{
//     resolve('started...')
// })

// App
// .then(createUser('Mike'))
// .then(getUsers)


// createUser('Aleks')
//     .then(()=>)
//     .then(createUser('Livina'))
//     .then(getUsers)
//     .then(createUser('Mohammed'))
//     .then(getUsers)
//     .then(createUser('Apple'))
//     .then(getUsers)

async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// createUser('Aleks')
// .then(createUser('Mike'))
// .then(createUser('Joe'))
// .then(createUser('Livina'))

function getUsers(all) {
    console.log('wait 2 seconds')
    console.log(all)
    return all
}

async function createUser(user) {

    let userObj = await user;
    users.push(userObj)
    return users
}


// createUser('mike')
// .then(getUsers)
// .then(createUser('joe'))

// let companyname=""

// let result = Promise.resolve(companyname)

// result
// .then(msg=>{
//     return msg
// })
// .then(data=>{
//     return data="Linux"
// })
// .then(newdata=>{
//     return newdata
// })
// .then(data=>console.log(data))
// .then(console.log)

// Promise.resolve(1).then(()=>'lol').then(console.log); // 1
// Promise.reject('this is failure').then(()=>[1,2]).then(console.log).catch(function(err){
//     console.log(err)
// }).finally(()=>console.log('task done'))


async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


async function App(all) {

}

async function addUser(user) {
    let allusers = await users;
    allusers.push(user)
    return allusers
}

async function Wait4Seconds() {
    console.log('wait 4 seconds')
    await delay(4000)
}

// App(users)
//     .then(addUser('joe'))
//     .then(async (users) => {
//         await delay(3000)
//         console.log(users)
//         return users
//     })
//     .then(addUser('joe1'))
//     .then(async (users) => {
//         await delay(3000)
//         console.log(users)
//         return users
//     })
//     .then(addUser('masdasd'))
//     .then(async (users) => {
//         await delay(3000)
//         console.log(users)
//         return users
// })