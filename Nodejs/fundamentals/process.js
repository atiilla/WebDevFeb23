// process nodejs
let result;

result = process

// args
result = process.argv[2]

// if(result === '-url'){
//     console.log(`URL is ${process.argv[3]}`)
//     console.log(process.argv)
// }

// for(let i=0; i<=10;i++){
//   //  console.log(i)
//     if(i >=5){
//         console.log(i)
//        process.exit() // terminate the process
//     }
//     console.log(i)
// }
// https://www.npmjs.com/package/dotenv
// console.log(result)

require('dotenv').config()

process.stdout.write('Hello World\n')
console.log(process.memoryUsage())
console.log(process.env)

fetch(`${process.env.REST_API}/todos`)
.then(res=>res.json())
.then(data=>console.log(data))