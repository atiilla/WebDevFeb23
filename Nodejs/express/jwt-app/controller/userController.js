var UserModel = require('../model/user')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs')
var memoryCache = require('memory-cache')

const getUsers = (req, res, next) => {
    UserModel.find({})
        .then(users => {
            res.json(users)
        })
}

const getRandomUser = (req, res) => {
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    UserModel.find({})
        .then(users => {
            let randomIndex = randomIntFromInterval(0, users.length - 1)
            console.log(randomIndex, users.length)
            res.json(users[randomIndex])
        })
}

const getProfile = (req, res) => {
    let token = req.headers.authorization.split(' ')[1]
    let decoded = jwt.decode(token,{
        complete:true
    })
    UserModel.find({
        'username': decoded.payload.username
    })
        .then(user => {
            res.status(200).json(user[0])
        })

}

const login = async (req, res) => {

    // UserModel.find({ "username": req.body.username })
    //     .then(user => {
    //         // check if username is exists
    //         if (user.length > 0) {
    //             // user found
    //             res.status(200).json({
    //                 message: 'User found'
    //             })
    //         } else {
    //             // user not found
    //             res.status(401).json({
    //                 message: 'User not found'
    //             })
    //         }
    //     })
    let result = await UserModel.find({ "username": req.body.username })
    let isUserFound = result.length > 0
    isUserFound ?
        await bcrypt.compare(req.body.password, result[0].password) ? // true or false
            res.status(200).json({
                message: 'user_logged_in',
                token: jwt.sign(
                    { username: req.body.username, date: new Date().getTime() }, // payload
                    process.env.JWT_KEY, // secret key
                    { // token options 3rd arg
                        expiresIn: '1h' // expire time
                    })
            }) :
            res.status(401).json({
                message: 'password/username is not correct'
            }) :
        res.status(401).json({
            message: 'User not found'
        })

    // if(isUserFound){
    //     if(result[0].password === req.bodt.password){

    //     }else{

    //     }
    // }else{

    // }
}

const register = async (req, res) => {
    const userObj = req.body
    let user = (await UserModel.find({ 'username': userObj.username })).length > 0 ? true : false

    if (!user) {
        let hashed = await bcrypt.hash(userObj.password, 10);
        userObj.password = hashed
        let newUser = new UserModel(userObj);
        newUser.save()
            .then(result => {
                res.status(201).json(result)
            })
    } else {
        res.status(200).json({
            message: 'Choose another username'
        })
    }
}

const logout = (req,res)=>{
    let token = req.headers.authorization.split(' ')[1]
    memoryCache.put(token,token,1000*60*60) // 1 hour blacklist token
    res.status(200).json({
        message:'user logged out'
    })
}

// exports controllers
module.exports = {
    getUsers,
    getProfile,
    login,
    getRandomUser,
    register,
    logout
}