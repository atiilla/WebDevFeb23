const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('DB connected.'))
        .catch(e => console.log(e))
}