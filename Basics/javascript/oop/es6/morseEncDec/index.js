

let hiddenMessage = `∵∴∴ ∵ ∴∵∵∵∵∵ ∵∴ ∵∴∵ ∵ ∴∵∵∵∵∵ ∵∴∴ ∵ ∴∵∵∵ ∴∵∵∵∵∵ ∴∵∵ ∵ ∵∵∵∴ ∵ ∵∴∵∵ ∴∴∴ ∵∴∴∵ ∵ ∵∴∵ ∵∵∵`

class Morse {
    constructor() {
        this.decrypted = ""
        this.encrypted = ""
        //  😎 🥸 
        this.morseDict = {
            'A': '∵∴',
            'B': '∴∵∵∵',
            'C': '∴∵∴∵',
            'D': '∴∵∵',
            'E': '∵',
            'F': '∵∵∴∵',
            'G': '∴∴∵',
            'H': '∵∵∵∵',
            'I': '∵∵',
            'J': '∵∴∴∴',
            'K': '∴∵∴',
            'L': '∵∴∵∵',
            'M': '∴∴',
            'N': '∴∵',
            'O': '∴∴∴',
            'P': '∵∴∴∵',
            'Q': '∴∴∵∴',
            'R': '∵∴∵',
            'S': '∵∵∵',
            'T': '∴',
            'U': '∵∵∴',
            'V': '∵∵∵∴',
            'W': '∵∴∴',
            'X': '∴∵∵∴',
            'Y': '∴∵∴∴',
            'Z': '∴∴∵∵',
            '0': '∵∵∵∵∵',
            '1': '∵∴∴∴∵',
            '2': '∵∵∴∴∵',
            '3': '∵∵∵∴∵',
            '4': '∵∵∵∵∴',
            '5': '∵∵∵∵∵',
            '6': '∴∵∵∵∵',
            '7': '∴∴∵∵∵',
            '8': '∴∴∴∵∵',
            '9': '∴∴∴∴∵',
            '.': '∵∴∵∴∵∴',
            ',': '∴∴∵∵∴∴',
            '?': '∵∵∴∴∵∵',
            "'": '∵∴∴∴∴∵',
            '!': '∴∵∵∴∴∵',
            '/': '∴∵∴∴∵',
            '(': '∴∵∴∴∵∴',
            ')': '∴∵∴∴∵∴∵',
            '&': '∵∴∵∵∵',
            ':': '∴∴∴∴∴∵∵',
            ';': '∴∵∴∵∴∵∴',
            '=': '∴∵∵∵∴',
            '+': '∵∴∵∴∵',
            '-': '∴∵∵∵∵∴',
            '_': '∵∵∴∴∵∴',
            '"': '∵∴∵∵∴∵',
            '$': '∴∴∴∴∵∵∴∴',
            '@': '∵∴∴∵∴∵',
            ' ': '∴∵∵∵∵∵'
        };
    }

    encrypt(message) {
        let msg = message.toUpperCase().split('')
        for (let letter of msg) {
            //console.log(this.morseDict[letter])
            this.encrypted += " " + this.morseDict[letter]
        }
        console.log(this.encrypted.trim())
    }

    decrypt(encrypted) {
        let splittedLetters = encrypted.split(" ")
        //   console.log(splittedLetters)
        // let i=0;
        // while(i<splittedLetters.length){
        //     console.log(splittedLetters[i])
        //     i++
        // }
        for (let letter of splittedLetters) {
            //    if("∵∴∴" === "∵∴∴"){
            //     console.log(letter)
            //    }
            for (let morseLetter in this.morseDict) {
                if (this.morseDict[morseLetter] === letter) {
                    // console.log(morseLetter)
                    this.decrypted += morseLetter
                }
            }
        }
        console.log(this.decrypted)
    }
}

let app = new Morse()
// app.decrypt(hiddenMessage)
app.encrypt('lol')

