// https://www.w3schools.com/js/js_if_else.asp
// Conditional Statements
/*
if
if else
else if
switch
*/

var n1 = 10;
var n2 = 10;

// // if statement if(condition){}
// if(n1>n2){ // true
//     // do something
//     console.log('n1 is less than n2')
// }

// // if else
// if(n1>n2){ // true
//     // do something
//     console.log('n1 is less than n2')
// }else{
//     // do something else when result is false
//     console.log('n1 is not bigger than n2')
// }

// // if else if
// if(n1>n2){ // false
//     // do something
//     console.log('n1 is less than n2')
// }else if(n1==n2){
//     console.log('n1 and n2 are equal')
// }else{
//     console.log('invalid value')
// }

// if(n1>n2){ // false
//     // do something
//     console.log('n1 is less than n2')
// }else if(n1==n2){
//     console.log('n1 and n2 are equal')
// }else if(n1>=n2){

// }else if(n1===n2){

// }

let hour = new Date().getHours() // 
console.log(hour)

// if(hour<=9){
//     console.log('good morning')
// }else{
//     console.log('good afternoon')
// }

if (hour <= 9 && hour >= 5) {
    console.log('good morning')
} else if (hour >= 16 && hour <= 20) {
    console.log('good evening')
} else {
    console.log('good night')
}


var names = ['Joe', 'John', 'Jack', 'Jackie', 'Bruce', 'Wills'];

names.forEach(fullname => {
    // console.log(fullname)
    if (fullname.toLowerCase() === 'jackie              '.trim()) {
        console.log(fullname)
    } else if (fullname === 'Bruce') {
        console.log(fullname)
    } else if (fullname.includes('W')) {
        console.log(fullname)
    }

})

// const fetch = require('node-fetch')
// // hln.be

// fetch('https://www.hln.be/buitenland/olivier-vandecasteele-is-slachtoffer-van-deal-gevangenenruil-iraanse-oppositie-lekt-geheime-documenten-over-akkoord-met-belgie~aa467ca1/')
// .then(res=>res.text())
// .then(news=>{
//     if(news.includes("blablabla")){
//         console.log(news)
//         // save news 
//     }
// })

// discordObj.messages.user.content = "!ping google.com"
/*

if(discordObj.messages.user.content.startsWith("!ping")){
    ExecuteCMD('ping google.com')
}

*/

// Switch statement
/*

switch(condition){
    case value:
        // do something
    break;
    case value:
        // do something else
    break;
    default:
        console.log('Default message')
}
*/

var Today = new Date().getDay();
console.log(Today)
// 0 - 1
switch (Today) {
    case 0:
        console.log('Zondag')
        break;
    case 1:
        console.log('Maandag')
        break;
    case 2:
        console.log('Dinsdag')
        break;
    case 3:
        console.log('Woensdag')
        break;
    case 4:
        console.log('Donderdag')
        break;
    case 5:
        console.log('Vrijdag')
        break;
    case 6:
        console.log('Zaterdag')
        break;
    default:
        console.log('Invalid value')
}

var score = 90
/*
50 = its ok
60-70 = normal
80-90 good
100 very good

*/

switch (true) {
    case score == 50:
        console.log('its ok')
        break;
    case score >= 60 && score <= 70: // true false
        console.log('its ok')
        break;
    case score >= 80 && score < 90:
        console.log('good score')
        break;
    case score >= 90 && score <= 100:
        console.log('Very good score')
        break;
    default:
        console.log('invalid')
}

