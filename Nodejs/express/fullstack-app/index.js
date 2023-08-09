const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const Url = require('./model/urlSchema')
const { shorten, home, shortCode } = require('./controller')
const db = require('./config/db')
require('dotenv').config()

// Connect to MongoDB
db()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Static files
app.use(express.static('public'))

app.get('/', home)

// Create and Save a URL
app.post('/shorten', shorten)

// Redirect to original URL
app.get('/:shortcode',shortCode)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
