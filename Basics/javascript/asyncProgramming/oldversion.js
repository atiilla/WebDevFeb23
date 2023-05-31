let users = ['Staci', 'Vlad', 'Viktor', 'Gregory'];

// function createUser(user,callback){
//     // insert new user into usersList
//     users.push(user)
//     callback()
// }

// createUser('Apple',()=>{
//     console.log(users)
// })

// function createUser(user){
//     return new Promise((resolve,reject)=>{
//         users.push(user)
//         console.log(users)
//     })
// }

// createUser('Apple')
// .then(result=>console.log(result))

// async function createUser(user){
//     let newUser = await user;
//     users.push(newUser)
//     return users
// }

// createUser('Apple')
// .then(result=>{
//     console.log(result)
// })

// function Keeper(callback){
//     return callback()
// }

// Keeper(function(){
//     console.log('keeper1')
//     Keeper(()=>{
//         console.log('keeper2')
//         Keeper(()=>{
//             console.log('keeper3')
//             Keeper(()=>{
//                 console.log('keeper4')
//                 Keeper(()=>{
//                     console.log('keeper5')
//                 })
//             })
//         })
//     })
// })

async function Keeper1(str) {
    try {
        let newString = await str
        return newString
    } catch (error) {
        console.log("ad")
        throw new Error('error message')
    }
}

Keeper1('lol')
    .then(data => data.toUpperCase())
    .then(newData => newData)
    .then(mouse => mouse.split(""))
    .then(data => data)
    .then(data => data.join("-"))
    .then(data => console.log(data))
    .catch(err => console.error('lol',err))
    .finally(() => console.log('task done!'))