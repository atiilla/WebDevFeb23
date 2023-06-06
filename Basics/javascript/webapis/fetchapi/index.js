// fetch API 

/*
GET request

*/
const newsList = document.querySelector('ul')
const url = "https://www.bruzz.be/api/news/latest"
// fetch(url)
// .then(response=>response.json())
// .then(data=>{
//     data.items.forEach(news=>{
//         console.log(news)
//         newsList.innerHTML+=`<li>${news.title}</li>`
//     })
// })

// async function getNews(url) {
//     let response = await fetch(url) // make request
//     let data = await response.json() // read response data
//     return data
// }

// json-server data.json -p 1377
// macos or linux > sudo npm install json-server -g
// windows > npm install json-server -g

// getNews(url)
//     .then(result => console.log(result))
let todos = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

// getNews('http://localhost:1377/users')
// .then(result=>{
//     // console.log(result)
//     result.forEach(user=>{
//         console.log(user.id)
//         fetch(`http://localhost:1377/users/${user.id}`,{
//             method:'DELETE'
//         })
//     })
// })

// todos.forEach(todo=>{
//     console.log(todo)
//     fetch('http://localhost:1377/users',{
//         method:'POST',
//         headers:{
//             'Content-Type':"application/json"
//         },
//         body:JSON.stringify(todo)
//     })
// })

const [get, post, del, update] = document.querySelectorAll('button');
// console.log(get,post,del,update)


get.addEventListener('click', (e) => {
    fetch('http://localhost:1377/users',{
        headers:{
            'token':'secretkey'
        }
    })
        .then(res => res.json())
        .then(users => {
            console.log(users)
        })
})

post.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('http://localhost:1377/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'root',
            password: 'toor'
        })
    })
        .finally(() => console.log('user inserted!'))
})

del.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('http://localhost:1377/users/5', {
        method: 'DELETE'
    })
        .finally(() => console.log('user deleted'))
})


update.addEventListener('click', (e) => {
    e.preventDefault();
    // fetch('http://localhost:1377/users/11', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: 'admin',
    //         password: '123'
    //     })

    // }).then(res => res.json())
    //     .then(result => console.log('saved', result))

    fetch('http://localhost:1377/users/11', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'admin'
        })

    }).then(res => res.json())
        .then(result => console.log('saved', result))
 
})







document.querySelector('form').addEventListener('change', (e) => {
    e.preventDefault()
})


// http://localhost:1377/users/5

// fetch('https://api.mixcloud.com/popular/')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })

// for(let i=1;i<=1000;i++){
//     console.log(i)
//     fetch('http://192.168.68.192:1377/users',{
//         'method':'GET',
//         headers:{
//             'token':'developer',
//             'access-id':i
//         }
//     })
//     .then(res=>{
//         if(res.status !==401){
//             console.log('found the flag',i)
//         }else{
//             console.log('not allowed incorrect id')
//         }
//     })
// }


fetch("http://localhost:3001/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,tr;q=0.8,nl;q=0.7",
    "access-control-allow-origin": "wearedetectives.com",
    "if-none-match": "W/\"d-+DlfNhy7NlTvvqpa4vYmcjxX7sk\"",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "http://127.0.0.1:5500/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});