const [plaintext,hiddenMessage] = document.querySelectorAll('textarea');
const [enc,dec] = document.querySelectorAll('button');

const EncString = (str)=>{
    return str.split("").map(letter=>{
        // console.log(letter.charCodeAt())
        return letter.charCodeAt()
    })
}

function Decrypt(utf16toutf8){
    let ConvertStringIntoArray = utf16toutf8.split('-');
    let ConvertLettersIntoUtf8 = ConvertStringIntoArray.map(letter=>{
        return String.fromCharCode(letter)
        // utf-16 to utf-8
    })
    let makeItReadable = ConvertLettersIntoUtf8.join("")
    return makeItReadable;
}

enc.addEventListener('click',(e)=>{
    e.preventDefault()
    let encryptedStr = EncString(plaintext.value)
    hiddenMessage.value = encryptedStr.join("-")
})

dec.addEventListener('click',(e)=>{
    e.preventDefault()
    let decryptedStr = Decrypt(hiddenMessage.value)
    plaintext.value = decryptedStr
})