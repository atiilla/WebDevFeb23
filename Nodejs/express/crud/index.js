const express = require('express');
const app = express();
require('dotenv').config()


function isLoggedIn(req,res,next){
    let token = req.headers.authorization
    if(token){
        // token provided
        let isTokenValid = token.split(" ")[1]
        if(isTokenValid ===process.env.SECRET_KEY){
            // isTOken Valid?
            next()
        }else{
            // token expired or not correct
            res.status(401).json({
                msg:'Expired or Not Correct'
            })
        }
    }else{
        // no token provided
        res.status(401).json({
            msg:'No token provided'
        })
    }
}

app.use(isLoggedIn)
app.use(express.json())
app.use(express.urlencoded())

// http ops
app.get('/', (req, res) => {
    res.json({
        msg: 'Dashboard'
    })
})

// posts - users - categories
app.get('/posts', (req, res) => {
    res.json({
        msg: 'ok',
        data: [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    })
})

app.get('/users', (req, res) => {
    res.json({
        msg: 'ok',
        data: [
            {
                username:'admin'
            },
            {
                username:'user'
            }
        ]
    })
})

app.get('/categories', (req, res) => {
    res.json({
        msg: 'ok',
        data: [
            {
                id: 1,
                catName:'Politics'
            },
            {
                id: 2,
                catName:'World'
            }
        ]
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})