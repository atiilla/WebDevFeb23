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

## DB connection in app.js
```
mongoose.connect(process.env.DB_URL)
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});
```