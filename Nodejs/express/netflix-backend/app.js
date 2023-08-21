const express = require('express')
const cors = require('cors');
const app = express();

// routes
const indexRouter = require('./routes/index');
const movieRouter = require('./routes/movie');
const userRouter = require('./routes/user')
// middlewares
app.use(cors({origin:'*'}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// dotenv
require('dotenv').config()

app.use('/',indexRouter)
app.use('/movies',movieRouter)
app.use('/user',userRouter)
app.use("*",(req,res)=>res.json({message:404}))

app.listen(process.env.PORT,()=>console.log('Server is running...'+process.env.PORT))