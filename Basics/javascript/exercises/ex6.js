// Exercise 6

const PlainMessage = "This is very secret message";
// map - charCodeAt 

// split 
let encoded = PlainMessage.split("").map(letter=>{
    // console.log(letter.charCodeAt())
    return letter.charCodeAt()
})

// join 
console.log(encoded.join("-"))
// 84-104-105-115-32-105-115-32-118-101-114-121-32-115-101-99-114-101-116-32-109-101-115-115-97-103-101

function Decrypt(utf16toutf8){
    let ConvertStringIntoArray = utf16toutf8.split('-');
    let ConvertLettersIntoUtf8 = ConvertStringIntoArray.map(letter=>{
        return String.fromCharCode(letter)
        // utf-16 to utf-8
    })
    let makeItReadable = ConvertLettersIntoUtf8.join("")
    return makeItReadable;
}

let dec = Decrypt("84-104-105-115-32-105-115-32-118-101-114-121-32-115-101-99-114-101-116-32-109-101-115-115-97-103-101")

// console.log(dec)

// console.log(String.fromCharCode(84<<8))
// 吀
// console.log("吀".charCodeAt())
// console.log(21504>>8)
// console.log(String.fromCharCode(84))

let EncryptIt = encoded.map((item,index)=>{
    return item << 8
})

let test = EncryptIt.map(letter=>{
    return String.fromCharCode(letter)
})

console.log(test.join(""))

// Decryption
let GetWordsBack = test.map(char=>{
    let shifted = char.charCodeAt() >> 8
    return String.fromCharCode(shifted)
})

// key 


console.log(GetWordsBack.join(""))