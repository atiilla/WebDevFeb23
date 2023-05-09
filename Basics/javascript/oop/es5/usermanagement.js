// function UserManagement(id,username,email,password){
//     this.id=id;
//     this.username=username;
//     this.email=email;
//     this.password=password;
//     this.users=[]
// }

function UserManagement(){
    this.users=[]
}

UserManagement.prototype.addUser=function(id,username,email,password){
    this.users.push({
        id,
        username,
        email,
        password
    })
}

UserManagement.prototype.showUsers=function(){
    return this.users
}



UserManagement.prototype.findUserById=function(id){
    
    return this.users.filter(item=>item.id===id)
}

UserManagement.prototype.deleteById = function(id){
    let userId = this.users.findIndex(user=>user.id===id)
    return this.users.splice(userId,1)
}

let app = new UserManagement();
// let app1 = new UserManagement(2,'root1','root1@root.com','root111123');
app.addUser(1,'root','root@root.com','root123');
app.addUser(2,'root1','root1@root.com','root111123');
app.addUser(3,'root3','root3@root.com','roosadnasdaisdi')
// app1.addUser();
// console.log(app1.showUsers())
// console.log(app.showUsers())
console.log(app.findUserById())
app.findUserById().length===0 ? console.log('user not found'):console.log('user found!')

