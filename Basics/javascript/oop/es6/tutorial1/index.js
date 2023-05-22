// intro to classes
// Convert es6 script to es5 : https://jstool.gitlab.io/babel-es6-to-es5/

// class A{

//     constructor(){
//         this.message = "hello world"
//     }

// }
const fetch = require('node-fetch')

class Drink {

    displayName() {
        console.log('first method')
        return 'hello world'
    }

    generatePassword(size) {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = ""
        Array.from({ length: size }).forEach((x, i) => {
            var getRandomNumber = Math.floor(Math.random() * chars.length)
            password = password + chars[getRandomNumber]
          ///  console.log(Math.floor(Math.random() * chars.length))

        })

        return password
    }

    getUsername(user) {
        return user
    }

    // 'joe','mike','peter'
    getUsers(...params) {
        return params
    }

    getUserData(username, password) {
        return `${username}:${password}`
    }

    generateFakeUserData(howMany) { // n times
        let users=[]
        let prefix = "root"
        // 30
        for (let i = 0; i < howMany; i++) {
            const userObj={
                username:`${prefix}${i+1}`,
                password:this.generatePassword(10),
                email:`${prefix}${i}@yopmail.com`
            }
            users.push(userObj)
        }
        return users;
    }
    
    sendUserstoServer(fakeDatas){
        // fakeDatas.forEach(user=>{
        //   //  console.log(user.username)
       
        //     // code here to send each user to backend app (server) or do something else with user data
        //     // fetch('http://localhost:4000/database',{
        //     //     method:'POST',
        //     //     headers:{
        //     //         'Content-Type':'application/json'
        //     //     },
        //     //     body:JSON.stringify(user)
        //     // })
        //     // .then(res=>res.json())
        //     // .finally(()=>{
        //     //     console.log(user,'saved')
        //     // })
        // })
        console.log(faker)
    }

}

// console.log(Drink)
// console.log(typeof Drink)
// Drink.prototype - not recommended for class but it is available to use

let app = new Drink();
// console.log(typeof app)
// console.log(app.getUsername('linux'))
// console.log(app.getUsers('joe','mike','peter','gregory'))
// console.log(app.getUserData('joe','joe123'))
// console.log(app.displayName())
// console.log(app.generateFakeUserData(3))
// console.log(app.generatePassword(20))
app.sendUserstoServer(app.generateFakeUserData(1000))