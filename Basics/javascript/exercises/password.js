// password generator

// this is the array of characters that can be used to generate the password
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
let letters
let numbers
let specialchars
let letterUpper



// create a function GeneratePassword(size) that takes a number as argument for length of password 
/*
* in the function, create a variable to store the password.
* create a loop that runs the number of times as the length of password.
* inside the loop, generate a random number between 0 and the length of chars.
* use the random number to get a character from chars and add it to the password variable.
* return the password variable.
*/

const passSize = document.getElementById('passSize')
const GenBtn = document.getElementById('genBtn')
const Output = document.getElementById('output')


function GeneratePassword(size) {
    let password = ""
    Array.from({ length: size }).forEach((x, i) => {
        var getRandomNumber = Math.floor(Math.random() * chars.length)
        //console.log(chars[getRandomNumber])
        password = password + chars[getRandomNumber]
        console.log(Math.floor(Math.random() * chars.length))

    })

    return password
}

// let result = GeneratePassword(16)

// console.log(result)

// create another function that takes a number as argument for how many passwords you want to generate
/*
* create a loop that invokes the GeneratePassword function the number of times as the number of passwords you want to generate.
* print the password to the console.
*/

function HowManyPassYouWantGenerate(N, PasswordLength) {
    Array.from({ length: N }).forEach(() => {
        let result = GeneratePassword(PasswordLength)
        console.log(`#Pass: ${result}`)
    })
}

// HowManyPassYouWantGenerate(8,10)



GenBtn.addEventListener('click',(e)=>{
    console.log(GeneratePassword(Number(passSize.value)))
    Output.innerText = `Password is ${GeneratePassword(Number(passSize.value))}`
})