## Requirements
- cors 
- dotenv
- mongoose
- mongoose-unique-validator
- jsonwebtoken

## Installation
```
npm i cors mongoose mongoose-unique-validator jsonwebtoken
npm i dotenv --save-dev
```

## Modify package.json & create .env file
```
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
  },
```

```
DB_URL=mongodb://localhost:27017/jwt-app
PORT=8181
```

## load env variables in app.js
```
require('dotenv').config()
```

## Set path for static files
```
### old
app.use(express.static(path.join(__dirname, 'public')));

### new
app.use('/public',express.static(path.join(__dirname, 'public')));
```

## Make config folder and create db.js
```
const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('DB connected.'))
        .catch(e => console.log(e))
}
```

## Then import db.js in app.js
```
require('./config/db')();
```

## Strong password
min 8
max 16
alpha numeric + special character = strong password
Lg6pBZJMI$I5wj

```
openssl req -x509 \
            -sha256 -days 356 \
            -nodes \
            -newkey rsa:2048 \
            -subj "/CN=webdev.com/C=US/L=Web Developer" \
            -keyout rootCA.key -out rootCA.crt 
```