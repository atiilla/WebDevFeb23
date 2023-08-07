const express = require('express');
const server = express();

// built-in middlewares
server.use(express.json())
server.use(express.urlencoded())

// custom middleware
function Logger(req, res, next) {
    console.log(req.body)
    req.body = {
        username: 'root',
        password: 'toor'
    }
    next()
}


function ValidToken(req, res, next) {
    //console.log(req.headers.authorization)
    let token = req.headers.authorization
    // console.log(token)aa
    if (token) {
        token = token.split(" ")[1]
        if (token === 'coffee') {
            next()
        } else {
            res.status(401).json({
                msg: 'you are not allowed'
            })
        }
    } else {
        res.status(401).json({
            msg: 'no token provided'
        })
    }
}

server.get('/', Logger, ValidToken, (req, res) => {
    res.json({
        id: 1
    })
})

server.post('/', Logger, (req, res) => {
    console.log(req.body)
    res.json({
        data: req.body
    })
})


server.listen(1337, () => {
    console.log('Webserver running...')
})