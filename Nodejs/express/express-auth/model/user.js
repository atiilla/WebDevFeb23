const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        minLength:3,
        maxLength:20,
        match:/^[a-zA-Z0-9]*$/gi
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

userSchema.plugin(uniqueValidator)

var userModel = mongoose.model('User',userSchema);

module.exports = userModel