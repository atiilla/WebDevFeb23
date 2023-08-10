const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors({
    origin:'*'
})) // accept req from anywhere anydomain

mongoose.connect(process.env.DB_URL)
.then(()=>console.log('DB CONNECTED'))
// http://192.168.68.213:4000
// 127.0.0.1
app.get('/',(req,res)=>{ // home endpoint
    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress)
    console.log(req.headers['user-agent']);
    res.json({
        message:'Restful API',
        siteInfo:{
            appName:'Coffee',
            version:'0.0.1',
            email:'info@srilankacoffee.com',
            socialMedia:{
                facebook:"http://facebook.com/coffee",
                twitter:"http://twitter.com/coffee",
                instagram:"http://instagram.com/coffee"
            }
        }
    })
})

app.listen(4000,()=>console.log('webserver is running at http://localhost:4000'))
