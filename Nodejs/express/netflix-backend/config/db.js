const mongoose = require('mongoose')

module.exports = ()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connected to DB'))
    .catch((e)=>console.log(err))
}