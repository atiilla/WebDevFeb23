// class User{
//     constructor(username="user",password="123456"){
//         this.username = username;
//         this.password = password;
//     }

//     addUser(){
//         console.log('user class')
//     }
// }

// class Admin extends User{
//     constructor(username,password,role){
//         super(username,password) // 
//         this.role = role;
//     }

//     display(){
//         console.log(`username: ${this.username}\npassword: ${this.password}\nrole: ${this.role}`)
//     }
// }


// let admin = new Admin('asdasd') // a1 , a3 , a2 
// // a1 a3 a2
// // a1 a2 a3
// // 
// // admin.display()

// // let role = "ad"
// // let admin1 = new Admin(null,null,role="asd")
// // admin1.display()

// /*

// Admin
// Standart

// */


// class User{
//     constructor(users=[],posts=[]){
//         this.users=users
//         this.posts=posts
//     }

//     displayArticles(){
//         return this.posts;
//     }

//     getUser(){
//         return 'Not allowed'
//     }

//     readArticle(id){
//         // get article by id
//         return this.posts.find(article=>article.id ===id)
//     }

// }

// class Standard extends User{
//     constructor(users,posts){
//         super(users,posts)
//     }
//     getUser(){
//         return this.users
//     }
// }

// class Admin extends User{
//     constructor(users,posts){
//         super(users,posts)
//     }

//     addUser(obj){
//         this.users.push(obj)
//     }

//     getUser(id){
//         let user = this.users.find(x=>x.id===id)
//         return user
//     }

// }

// let admin = new Admin();
// let user = new Standard();

// admin.addUser({
//     id:1,
//     username:'root',
//     password:'123',
//     role:'admin'
// })

// admin.addUser({
//     id:2,
//     username:'joe',
//     password:'123',
//     role:'user'
// })


// console.log(user.displayArticles())
// console.log(user.getUser())
// // console.log(admin.getUser(1))

let users=[]
let articles=[]

class User {

    readProfile(id){
        console.log(this)
        let user = users.find(article=>article.id ===id) // return single article object
        if(user){
            // check if user found
            if(user.isAdmin){
                return 'not allowed'
            }else{
                return user
            }
        }else{
            return 'user not found'
        }
    }

    readArticle(id){
        let article = articles.find(article=>article.id ===id) // return single article object
        if(article){
            return article
        }else{
            return 'article not found'
        }
    }
    getAllArticles(){

        return articles

    }
    getAllProfiles(role){
        return users.slice(1)
    }


    login(obj){
        // {username:'root',password:'123'}
        let user = users.find(x=>(x.username === obj.username) && (x.password === obj.password))
        if(user){
            return user
        }else{
            return false
        }
    }

    verify(obj){
        console.log(obj ? 'user found':'user not found')
        // check if user is exists then
        // control for admin role
        // is Admin?
        // yes
        if(obj.isAdmin){
            console.log('Welcome to dashboard')
            return true
        }else{
            // isAdmin = false
            console.log('User is not an admin!')
            return false
        }
    }
    
}


class Standard extends User{

}

class Admin extends User{

    addUser(obj){
        users.push(Object.assign(new User(),obj))
    }

    addArticle(obj){
        articles.push(obj)
    }
}

let admin = new Admin()

admin.addUser({
    id:1,
    username:'root',
    password:'admin123',
    isAdmin:true
})

admin.addUser({
    id:2,
    username:'user',
    password:'user123',
    isAdmin:false
})

admin.addArticle({
    id:1,
    title:'lol',
    body:'trolololo'
})

let user = new Standard();

// console.log(user.getAllArticles())
// console.log(user.readArticle(2))
// // console.log(user.readProfile(2))
// console.log(user.getAllProfiles())

// console.log(user.login({
//     username:'root',
//     password:'admin123'
// }))

console.log(user.verify(user.login({
    username:'root',
    password:'admin123'
})))

// console.log(users[1].getAllProfiles())
// console.log(users)
// console.log(user.readProfile(2))



