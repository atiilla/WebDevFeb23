// sessionStorage and methods

let result;

// result = sessionStorage
// result = sessionStorage.length // size of storage data

// // get data
// result = sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')
// result = sessionStorage.getItem('drink') // tea

// // create sessionStorage data
// sessionStorage.setItem('language','javascript')

// // remove item
// // sessionStorage.removeItem('language')

// // remove all
// // sessionStorage.clear()

// sessionStorage.setItem('language','python');

// // result = sessionStorage.getItem(sessionStorage.key(1))

// result = sessionStorage.length

// // for(let i=0;i<sessionStorage.length;i++){
// //     let keyName = sessionStorage.key(i)
// //     // console.log(keyName)
// //     let keyValue = sessionStorage.getItem(keyName)
// //     console.log(`${keyName}:${keyValue}`)
// // }

// // for(let x in sessionStorage){
// //     console.log(typeof sessionStorage[x] ==='string'?sessionStorage[x]:null)
// // }

// // Object.keys(sessionStorage).forEach(key=>{
// //     console.log(sessionStorage[key])
// // })

// let i=0;
// while(i<sessionStorage.length){
//     // console.log(sessionStorage.getItem(sessionStorage.key(i)))
//     console.log(sessionStorage[sessionStorage.key(i)])
//     i++
// }

// result = localStorage.getItem('drink')

// localStorage.setItem('testData',1)
// localStorage.setItem('testData',true)
// localStorage.setItem('testData',[1,2,3,4,5])
// localStorage.setItem('testData',['as','b','c','d'])
// // localStorage.setItem('testData',JSON.stringify([1,2,3,4,5,6]))

// localStorage.setItem('testData',JSON.stringify({name:'lol'}))
// localStorage.setItem('testData',JSON.stringify([{name:'a'},{name:'b'}]))
// result = typeof localStorage.getItem('testData')
// result = JSON.parse(localStorage.getItem('testData'))
// console.log(result)

const btn = document.querySelector('.btn-primary');
const [username,password] = document.querySelectorAll('input')

btn.addEventListener('click',(e)=>{
    // console.log('lol')
    const userObj = {
        username:username.value,
        password:password.value
    }
    localStorage.setItem('user',JSON.stringify(userObj))
})

document.querySelector('.back').addEventListener('click',(e)=>{
    window.history.back()
})