let result;

// window
result = window

result = window.localStorage
result = window.innerHeight
result = window.innerWidth // px 

result = window.scrollX
result = window.scrollY
result = window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  })

result = window.location

// setTimeout(()=>{
//  window.location.reload()
// },3000)




// methods
/*
getElementById
getElementByTagName
getElementByClassName
*/

// Find the element you want change
//result = window.document.getElementById()
result = document.getElementById('app') // id="app"
result = document.getElementsByClassName('mario') // .mario
result = document.getElementsByTagName('p') // tagName (h1,p,a,div)
result = document.querySelector('h1') // accept css selector (#app > p)
// for(let x of result){
//     console.log(x)
// }
// Array.from(result).forEach(x=>console.log(x))

// console.log(typeof result)
drink.innerText= "Lolololol" // global variable
console.log(result)

fetch('http://localhost:3001',{
    mode:'cors',
    headers:{
        'Access-Control-Allow-Origin':'wearededectives.com',
        'User-Agent':'level1_{you_are_awesome}'
    }
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
   
})