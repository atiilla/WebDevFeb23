// Date object constructor and its methods

let result;

let date = new Date();
result = date

// result = new Date('03/05/2023,12:30:40')

// date.setDate(01);
date.setFullYear(2022, 3, 1)
date.setHours(12)

// date.toLocaleString('en-US', { timeZone: 'America/New_York' })
result = new Date().toLocaleString('ua-UA', { timeZone: 'Europe/Kiev' })


// let currentTIme = new Date()
// let endTime = new Date()
// endTime.setDate(30)

// // result =endTime - currentTIme
// result = new Date()

let date1 = new Date("05/04/2024");
let date2 = new Date("05/04/2023");

result = date1.getTime() - date2.getTime();
result = result / (1000 * 60 * 60 * 24)
let months = (result / 30).toFixed()
let days = result
let hours = days*24
let minutes = hours * 60
console.log(new Date().getSeconds())
console.log(result,months,hours,minutes);

while(false){
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`)
}

