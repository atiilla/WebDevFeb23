// Decode flag to get the message

var flag1 = [
    '=', 'E', 'S', 'Z', 'z', 'l', '2', 'Y',
    'y', 'V', 'G', 'e', 'l', 'B', 'S', 'Z',
    'o', 'R', 'H', 'I', 'k', 'V', 'G', 'd',
    'l', 'x', 'G', 'c'
]

var flag2 = ['t', '9', '2', 'Y',
    'g', 'U', 'm', 'd', 'n', 'U', '3', 'b',
    'Z', 'B', 'S', 'I', 'l', '5', '2', 'b',
    'k', 'B', 'C', 'b', 's', 'V', '2', 'V']

// 1. Merge the two arrays into one array
flag1=[...flag1,...flag2] // concat > merge 2 arrays 

// 2. Reverse the array (.reverse())
flag1 = flag1.reverse() // array method

// 3. Convert the array to a string
// flag1 = flag1.toString().replaceAll(',','')
flag1 = flag1.join("") // array method

// 4. Print the decrypted message  (Possible algorithms: Base64 Encoded String)
let flagFound = atob(flag1) // built-in enc-dec method 
console.log(flagFound)

