const express = require('express');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config()

app.use(express.json()) // parse body data

// make db connection here
mongoose.connect(process.env.DB_URL)
    .then(data => {
        console.log('db connected')
    })
    .catch(err => {
        console.log('DB error: ', err)
    })

// Create schema for table(collection)
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String
    },
})

// compile schema to model
const User = mongoose.model('User', userSchema);

const moment = require('moment');

// todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    task: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

// compile todoschema 
const Todo = mongoose.model('Todo', todoSchema)


app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    })
})

app.post('/', (req, res) => {
    const userData = req.body
    // use model and insert new user in database
    // const newuser = new User({
    //     username:req.body.username,
    //     password:req.body.password
    // })
    const newuser = new User(userData)

    // save newuser in database
    newuser.save()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.json({
                status: 'error',
                error: err
            })
        })

})

app.get('/todo/:id', (req, res) => {
    const { id } = req.params
    // Todo.findById(id)
    Todo.find({
        '_id': id
    })
        .then(result => {
            res.json({
                msg: 'success',
                todo: result
            })
        })
        .catch(err => {
            res.json({
                msg: 'failure',
                error: err
            })
        })
})

app.delete('/todo/:id', (req, res) => {
    const { id } = req.params
    Todo.findByIdAndDelete(id)
        .then(() => {
            res.json({
                msg: `${id} is deleted`
            })
        })
        .catch(err => {
            res.json({
                msg: 'failure',
                error: err
            })
        })
})


app.get('/find', (req, res) => {
    const { q } = req.query
    // http://localhost:3000/find?q=Vue.js
    if (q) {
        Todo.find({
            "title": { "$regex": q, "$options": "i" }
        })
            .then(result => {
                res.json({
                    msg: 'success',
                    todo: result
                })
            })
            .catch(err => {
                res.json({
                    msg: 'failure',
                    error: err
                })
            })
    } else {
        res.json({
            msg: 'You must send req with q='
        })
    }

})

// get all todos from database
app.get('/todos', (req, res) => {
    Todo.find({})
        .then(allTodo => {
            res.json({
                msg: 'success',
                todos: allTodo
            })
        })
        .catch(err => {
            res.json({
                msg: 'failure',
                error: err
            })
        })

})

// http://localhost:3000/todo?q=Python

// save a new todo in database
app.post('/todo', (req, res) => {
    let newTodo = new Todo(req.body)
    console.log(req.body.time)
    newTodo.save()
        .then(result => {
            res.json({
                msg: 'success',
                data: result
            })
        })
        .catch(err => {
            res.json({
                msg: 'failure',
                error: err
            })
        })

})


app.listen(3000, () => {
    console.log('app is running...')
})