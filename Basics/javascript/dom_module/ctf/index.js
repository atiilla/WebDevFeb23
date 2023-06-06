const express= require('express')
const app = express()
const cors = require('cors');

let level1_flag = "level1_{you_are_awesome}"
let level2_flag = "wearededectives.com"

app.use(cors())

function Rules(req,res,next){
    res.setHeader('Secret-User-Agent', level1_flag);
    res.setHeader('Access-Allow-Origin', level2_flag);
    next()
}

app.use(Rules)

function Level1(req,res,next){
    let level1 = req.headers['user-agent'];
    console.log(level1)
    if(level1 == level1_flag){
        next()
    }else{
        res.status(418).send(`
            <h1 style="color:red">Level 1: I'm a teapot</h1>
            <h1>Machine response: I'm a teapot</h1>
            <h1>Hint: You need to change your user-agent to the secret user agent</h1>
            <h1>Headers are your friend</h1>`);
    }
}

function Level2(req,res,next){
    let level1 = req.headers['user-agent'];
    let level2 = req.headers['origin'];
    if(level1 == level1_flag){
        if(level2 === level2_flag){
            next()
        }else{
            res.status(403).send(`
                <h1 style="color:red">Level 2: Forbidden</h1>
                <h1>Machine response: Forbidden</h1>
                <h1>Origin is not allowed by Access-Control-Allow-Origin</h1>
                <h1>Hint: You need to change your origin to the secret origin</h1>
                <h1>Response headers are your friend</h1>`);
        }
    }else{
        res.status(418).send(`
            <h1 style="color:red">Level 1: I'm a teapot</h1>
            <h1>Machine response: I'm a teapot</h1>
            <h1>Hint: You need to change your user-agent to the secret user agent</h1>
            <h1>Headers are your friend</h1>`);
    }
}

app.use(express.urlencoded())
app.use(express.json())

app.get('/',Level1,(req,res)=>{
    res.send(`
    <h1>Awesome! You have passed level 1</h1>
    <h1>Now you need to pass level 2</h1>
    <h1>/level2</h1>
    `)
})

app.get('/level2',Rules,Level2,(req,res)=>{
    res.status(200).send(`
                <h1 style="color:red">Level 3: Decrypt the flag</h1>
                <h1>
                You've completed level 2!<br>
                You're awesome!<br>
                Uvd cpld aol yvbal /slcls3 pu joyvtl/mpylmve<br>
                Now you need to decrypt the flag.<br>
                This function may help you: <a href="https://gist.github.com/atiilla/d680bb226889c28851f1e04e3d69ee58">https://gist.github.com/atiilla/d680bb226889c28851f1e04e3d69ee58</a><br>
                Ceaser knows the secret to decrypt this flag. <br>
                He has a secret key that he uses to encrypt and decrypt messages. <br>
                </h1>`);
})

app.get('/level3',(req,res)=>{
    res.redirect('https://youtu.be/mghhLqu31cQ?t=101')
})

app.listen(3001,()=>console.log('running...'))