let users = [];

class User {

    showProfile() {
        console.log(this);
    }

    updateProfile(obj) {
        Object.assign(this, obj);
    }

    Is_Admin() {
        console.log('auth', this.isAdmin)
        if (this.isAdmin) {
            console.log('User is an admin!')
            return true
        } else {
            // isAdmin = false
            console.log('User is not an admin!')
            return false
        }
    }

    Login(user) {
        console.log(this)
        if(user.username === this.username && user.password === this.password){
            console.log('User is logged in!')
            return true
        }else{
            console.log('User is not logged in!')
            return false
        }
    }

}

class Standard extends User { }

class Admin extends User {
    addUser(obj) {
        users.push(Object.assign(new User(), obj));
    }
}

let admin = new Admin();
admin.addUser({
    id: 1,
    username: 'root',
    password: 'admin123',
    isAdmin: true
});

admin.addUser({
    id: 2,
    username: 'user',
    password: 'user123',
    isAdmin: false
});


admin.addUser({
    id: 3,
    username: 'user1',
    password: 'user123',
    isAdmin: false
});

let user = new Standard();

// login
users[0].Login({
    username: 'root',
    password: 'admin123'
})

// check if user is admin
users[0].Is_Admin()? console.log('Welcome Admin!'):console.log('Welcome User!')

// show profile
users[0].showProfile();

// update profile
users[0].updateProfile({
    username: 'root1',
    password: 'admin123',
    isAdmin: true
});

users[0].showProfile();
users[0].Is_Admin();