// let arr = ['a','b','c','d']
// module.exports=arr
var cowsay = require("cowsay");
const fetch = require('node-fetch')
const baseURL = "http://localhost:3000"

// http://localhost:3000/user?username=root

async function isUserExist(username) {
    let isUser = false;
    let res = await fetch(`http://localhost:3000/user?username=${username}`)
    let data = await res.json()
    isUser = data.length > 0 ? true : false  // [].length > 0 true :false
    return isUser
}
// npm i cowsay
function register(obj) {
    isUserExist(obj.username)
        .then(user => {
            if (user) {
                // console.log('\x1b[33m user exist! Try another username \x1b[0m');
                console.log(cowsay.say({
                    text: '\x1b[33m user exist! Try another username \x1b[0m',
                    e: "oO",
                    T: "U "
                }));
            } else {
                fetch(`${baseURL}/user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                    .then(res => res.json())
                    .then(userObj => {
                        console.log(userObj, 'UserData saved.')
                    })
            }
        })
}

async function auth(userObj) {
    let isUser = false;
    let res = await fetch(`http://localhost:3000/user?username=${userObj.username}&password=${userObj.password}`)
    let data = await res.json()

    isUser = data.length > 0 ? true : false;
    return isUser
}


function login(obj) {
    auth(obj)
    .then(loggedIn=>{
        if(loggedIn){
            console.log(cowsay.say({
                text: `\x1b[33m User: ${obj.username} logged in! \x1b[0m`,
                e: "oO",
                T: "U "
            }));
        }else{
            console.log(cowsay.say({
                text: `\x1b[33m username or password is incorrect! \x1b[0m`,
                e: "oO",
                T: "U "
            }));
        }
    })
    return obj
}

module.exports = {
    register,
    login
}