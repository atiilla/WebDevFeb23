// https://www.npmjs.com/package/bcryptjs
var bcrypt = require('bcryptjs') // npm i bcryptjs
// encrypt (hash) plaintext password

var myPassword = "coffee21" // user password (plaintext)

let encryptedPass = bcrypt.hash(myPassword,10)
encryptedPass.then(hashed=>console.log(hashed))
// $2a$12$43YXXuyCkYntvkk2YMVJXe1P9I7iHYgJ0F2OOh3K50LrXTtaYwM/S

// secret

let checkIfPassCorrect = bcrypt.compare(myPassword,"$2a$12$43YXXuyCkYntvkk2YMVJXe1P9I7iHYgJ0F2OOh3K50LrXTtaYwM/S")

checkIfPassCorrect.then(console.log)

// "$2a$12$43YXXuyCkYntvkk2YMVJXe1P9I7iHYgJ0F2OOh3K50LrXTtaYwM/S"