#!/bin/bash

# Define colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Clear the screen
clear

# Display welcome message
echo -e "${GREEN}Express Project Generator Tool${NC}"
echo -e "${YELLOW}This tool will generate express project structure for you${NC}"
echo "-------------------------------------"
echo "Author: https://github.com/atiilla"
echo "Version: 0.1"
echo "-------------------------------------"


# npm init
npm init -y

# modify package.json
cat <<EOF > package.json
{
  "name": "netflix-backend",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
EOF

# Create config,controller,models,routes folder
mkdir config controller models routes

# Create db.js file in config folder
cat <<EOF > config/db.js
const mongoose = require('mongoose');

module.exports = ()=>{
        mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log(err);
    })
}
EOF

# Create index.js file in routes folder
cat <<EOF > routes/index.js
const express = require('express');
const router = express.Router();
const {home} = require('../controller/index')

router.get('/',home)

module.exports = router;
EOF

cat <<EOF > controller/index.js
const home = (req,res)=>{
    res.send('Hello World')
}

module.exports = {
    home
}
EOF

# Create .env file
cat <<EOF > .env
MONGO_URI="mongodb://localhost:27017/dbName"
PORT= 1337
JWT_SECRET="secretKey"
EOF

# mongoose schema
cat <<EOF > models/user.js

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User

EOF

# Create root file
cat <<EOF > app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');

// load env variables
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// db connection
require('./config/db')()

// routes
app.use('/',indexRouter);


app.listen(port,()=>{
    console.log('Server is running on port '+port);
})
EOF

# install dependencies
npm i express cors mongoose jsonwebtoken bcryptjs --save
npm i dotenv --save-dev

# run server
npm run dev
```
