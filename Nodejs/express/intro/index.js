// import express
const express = require('express');

// server init
const server = express();

server.use(express.json())
server.use(express.urlencoded())
// restful api
// fullstack app

server.get('/', (req, res) => {
    // http://localhost:1337/coffee
    // res.send('<h1>lol</h1>')

    console.log(req.query)
    res.status(200).send('<h1>lol</h1>')
})

server.get('/profile',(req,res)=>{
    console.log(req.query)
    // http://localhost:1337/profile?username=yourname > query string
    res.send(`<h1>Profile: ${req.query.username}</h1>`)
})

server.get('/profile/:username',(req,res)=>{
    console.log(req.params)
    // http://localhost:1337/profile/yourName > parameter
    res.send(`<h1>Profile: ${req.params.username}</h1>`)
})

// server.get('/user/*/*/*',(req,res)=>{
//     console.log(req.params)
//     res.json({
//         id:1
//     })
// })

server.get('/user/*/*/*',(req,res)=>{
// http://localhost:1337/user/dashboard/detail/privacy?isAdmin=true
    console.log(req.params)
    console.log(req.query)
    res.json({
        id:1
    })
})

server.post('/', (req, res) => {
    res.send('This is post request')
})

server.put('/', (req, res) => {
    res.json({
        id: 1
    })
})

server.patch('/', (req, res) => {
    res.json({
        id: 2
    })
})

server.delete('/', (req, res) => {
    res.send('<h1>deleted</h1>')
})

server.post('/create',(req,res)=>{
    console.log('lol',req.body)
    res.json({
        msg:'Created!'
    })
})

server.all('*', (req, res) => {
    res.json({
        msg: 'Not found!'
    })
})


// listener
server.listen(1337, () => {
    console.log('Server is running....')
})