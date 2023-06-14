const fetch = require('node-fetch'); // include fetch package 
const cheerio = require('cheerio')
// https://dummyjson.com/products/

// get
// fetch('https://dummyjson.com/products')
// .then(response=>response.json())
// .then(jsonData=>{
//    // console.log(jsonData)
//     return jsonData
// })

// console.log(jsonData)

// fetch data from bruzz
// fetch('https://www.bruzz.be/culture')
// .then(response=>response.text())
// .then(html=>{
//     let bruzzImages=[]
//     //console.log(html)
//     const $ = cheerio.load(html)
//     // console.log($('.card.is-list'))
//     $('.card.is-list').each((i,el)=>{
//         bruzzImages.push($(el).find('.card__image-img').attr('data-src'))
//     })
//     console.log(bruzzImages)
// })

// post
fetch('http://localhost:4000/products',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({username:'greg',password:'root123'})
})
.then(res=>res.json())
.then(data=>console.log(data,'saved'))

// PUT
// fetch('http://localhost:4000/products/1',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({username:'root',password:'admin123'})
// })
// .then(res=>res.json())
// .then(data=>console.log(data,'updated'))

// fetch('http://localhost:4000/products/1',{
//     method:'PATCH',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({password:'lol123'})
// })
// .then(res=>res.json())
// .then(data=>console.log(data,'updated'))

// DELETE
// fetch('http://localhost:4000/products/1',{
//     method:'DELETE'
// })
// .then(res=>res.json())
// .then(data=>console.log(data,'deleted'))

