const appMessage = "Hello friend!"
const appName = "Linux 0.0.1"

function getDate(){
    return new Date()
}

function getRandomNumber(){
    return Math.random()
}

// variable exposed
module.exports = {
    appMessage,
    appName,
    getDate,
    getRandomNumber
}