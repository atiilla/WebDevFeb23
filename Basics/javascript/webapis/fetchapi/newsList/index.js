const base_url='https://api.currentsapi.services/v1/latest-news?language=en&apiKey=OWrdipYQ9gk4eQq1va3jzocqrS7xvVQTxAbLhCLkocLijp98'
const newsList = document.querySelector('.newsList') // <div class="row">

async function translateService(sourceLang,str){
    let res = await fetch(`https://api.mymemory.translated.net/get?q=${str}&langpair=${sourceLang.toUpperCase()}|EN`)
    let data = await res.json()
    return data.responseData.translatedText
}

// translateService('FR','Système de recommandations basé sur les contraintes pour les simulations de gestion de crise')
// .then(console.log)

fetch(base_url)
.then(res=>res.json())
.then(data=>{
    // for loop
    // console.log(data.news)
    data.news.forEach(news=>{
        // console.log(news.image)
        newsList.innerHTML+=`
        <div class="col-md-3">
        
                <div class="card">
                <a href="${news.url}" target="_blank">
                    <img class="card-img-top" src="${news.image!=='None'?news.image:'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg'}" alt="Title">
                    </a>
                    <div class="card-body">
                        <h4 class="card-title">${news.title}</h4>
                        <p class="card-text">${news.description}</p>
                    </div>
                </div>
            </div>`
    })
})

{/* <h4 class="card-title">${translateService(news.language,news.title).then()}</h4> */}



// google.com/param1?key=ThisIsValue&drink=tea&username=root

/*

GET
POST
DELETE
PUT > http://localhost/users/1
PATCH

*/

