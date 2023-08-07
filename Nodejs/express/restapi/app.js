// import express library
const express = require('express');
const path = require('path')
const multer = require('multer')
const cors = require('cors')
// create an instance from express() 
const server = express();

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const ext = file.originalname.split(".")
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + ext[1])
    }
})

const uploader = multer({
    storage: diskStorage
})

// import built-in middlewares
server.use(express.json()) // body-parser
server.use(express.urlencoded()) // form data
server.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// server.use(cors({
//     origin:"alex.com"
// }))

var whitelist = ['source1.com', 'source2.com', 'source3.com']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

server.use(cors(corsOptions))

// import controllers
const { homeController, detailController } = require('./controllers/homeController')
const { todoController, todosController } = require('./controllers/todoController')
const { makeAccountController } = require('./controllers/userController')

// routing
server.get('/', homeController)
// server.get('/:id',detailController)
server.get('/todos', todosController)
server.get('/todos/:id', todoController)
server.post('/profile', uploader.single('avatar'), makeAccountController)

// https://jsonplaceholder.typicode.com/todos/1

// dotenv configuration
// npm install dotenv --save
// server.use((req, res, next) => {
//     res.status(404).send("Sorry can't find that!")
// })

// handle 404
server.get('*', function (req, res) {
    res.send('what???', 404);

});

// Handle 500 > server error
server.use(function (error, req, res, next) {
   // console.log(res)
    res.status(500).send('<h1 style="color:red">500: Internal Server Error</h1>',500);
});

// handle 401 408


require('dotenv').config()
// https://www.npmjs.com/package/dotenv

// set port number
server.listen(process.env.PORT, () => {
    // console.log(process.env)
    console.log(`Server is running on ${process.env.PORT}`)
})