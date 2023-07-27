// import packages and modules
const yargs = require('yargs');
const fetch = require('node-fetch')
const cowsay  = require('cowsay')
const options = {
    username: {type:'string', describe:'enter user\'s username',demandOption: true},
    password: {type:'string', describe:'enter user\'s password',demandOption: false},
    register: {type:'boolean',describe:'to create account',demandOption:true},
    getuser: {type:'boolean',describe:'to get account',demandOption:true},
}

let App =  yargs.usage(`

Usage: --username root`)
.options(options).argv;

function GetUser(username){
    fetch(`http://localhost:3000/user?username=${username}`)
.then(res=>res.json())
.then(data=>{
    if(data.length>0){
        console.log(cowsay.say({
            text: `\x1b[33m User: ${data[0].username} logged in! \x1b[0m`,
            e: "oO",
            T: "U "
        }));
    }else{
        console.log(cowsay.say({
            text: `\x1b[33m No user found :( \x1b[0m`,
            e: "oO",
            T: "U "
        }));
    }
})
}

async function RegisterAccount(obj){
    let res = await fetch(`http://localhost:3000/user`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    let data = await res.json()
    return data;
}

if(App.getuser){
    GetUser(App.username)
}

if(App.register){
    RegisterAccount({
        username:App.username,
        password:App.password
    })
    .then(account=>{
        console.log(cowsay.say({
            text: `\x1b[33m User Created ${account} \x1b[0m`,
            e: "oO",
            T: "U "
        }));
    })
}