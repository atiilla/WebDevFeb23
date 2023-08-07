const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
// make db connection here
mongoose.connect(process.env.DB_URL)
.then(data=>{
    console.log('db connected')
})
.catch(err=>{
    console.log('DB error: ',err)
})


app.listen(3000,()=>{
    console.log('app is running...')
})