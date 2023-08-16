var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users')
require('dotenv').config() // load your env variables
var cors = require('cors')
// npm install dotenv --save-dev
var app = express();

app.use(cors({
    origin:'http://webdevelopers.com:5500',
    credentials:true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets',express.static(path.join(__dirname, 'public')));



// make db connection here
mongoose.connect(process.env.DB_URL)
.finally(()=>console.log('DB connected'))
.catch(err=>console.log(err))

// http://localhost:8181/ > root/home endpoint
app.use('/', indexRouter);
app.use('/user',userRouter); //
/*
http://localhost:8181/user
http://localhost:8181/user/login
http://localhost:8181/user/register
*/

module.exports = app;
