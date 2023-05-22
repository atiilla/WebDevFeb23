// regular for loop
//for(initvar;condition;increment/decrement)
let i=0;

let currentName = ""
// for(i;i<=10;i++){
//     // console.log(i)
// }
// console.log(i)
// console.log(i)
// for(i;i<names.length;i++){
//     // console.log(names[i])
//     currentName = names[i]
//     console.log('----')
//     // console.log(currentName)
// }

//  for of in 
// const obj = {
//     name:'joe',
//     age:21
// }

// for(let name of names){
//     console.log(name)
// }

// for(let key of obj){
//     console.log(key)
// }

// for(let key in obj){
//     console.log(key) // key:value or name:'joe'
//     console.log(obj[key])
// }

const computer = {
    size:'17inch',
    brand:'hp',
    os:'windows'
}

// {}.length /// 3 4 5 i<5 i 0 i  1 2 3 4
// Object.keys({a:1,b:2}) > ['a','b'].length
// 'a' 'b' > obj['a'] > 1

// for(let keyName in computer){
//     console.log(keyName)
// }

// you must use forEach or map
// Object.keys(computer).forEach(function(info){
//     console.log(computer[info])
// })

// Object.keys(computer).map(function(info){
//     console.log(computer[info])
// })
// {} > []
// for(let i =0;i<Object.keys(computer).length;i++){
//     let keyName = Object.keys(computer)[i] // size - brand - os
//     console.log(computer[keyName])
// }

let convertObjectToArray = Object.keys(computer)

// step1
for(let i=0;i<convertObjectToArray.length;i++){
    // step2 get propertyName
 //   console.log(convertObjectToArray[i])
    let PropertyName = convertObjectToArray[i];
    // step3 extract property value
    console.log(computer[PropertyName])

}


// console.log(currentName)

// Local scope variable?
// const name = "linux > Global scope variable";
// function Display(){
//     const name = "Windows > Local Scope variable"
//     console.log(name)
// }
// Display()

// console.log(name)

// Global scope variable?

let names = ['Joe','Mike','Smith']

// let result = names.map(name=>name) // undefined - null - [] - ['Joe','Mike','Smith']
// result = names.forEach(name=>name) // undefined - null - [] - ['Joe','Mike','Smith']
// console.log(result);
let result;
// result = names.map(name=>name.includes('i')?name:null)
// console.log(result)
// result = names.filter(name=>name.includes('i'))
// names.splice(0,2) // splice changes original array
// names.slice(0,4)
// result = names


// console.log(result)

// const posts = [
//     {
//         title:'blabla',
//         images:'https://play-lh.googleusercontent.com/OABfRfKxyvf6PUg_6YBJXvbKSbegFsBKvFDEm5jOA0rC5k1la-OwmnWz6GK55vr3EGA'
//     },
//     {
//         title:'blabla1',
//         images:'https://play-lh.googleusercontent.com/OABfRfKxyvf6PUg_6YBJXvbKSbegFsBKvFDEm5jOA0rC5k1la-OwmnWz6GK55vr3EGA'
//     },
//     {
//         title:'blabla2',
//         images:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png'
//     }
// ]


// let btnTitles  = document.querySelector('.btn-title')

// posts.forEach(post=>{
//     btnTitles.innerHTML+=`<button type="button" class="btn btn-primary" id="${post.title}">${post.title}</button>`
// })

// document.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(e.target.tagName==='BUTTON'){
//         let post = posts.find(item=>item.title===e.target.id)
//         console.log(post)
//         document.querySelector('img').src=post.images
//     }
// })