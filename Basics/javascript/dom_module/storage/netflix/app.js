const listOfMovies = document.querySelector('.movies')
// https://api.themoviedb.org/3/movie/popular?api_key=8ebdaa7271fbf5cea7ecef7fdabc17e6&page=1
// find movies by keyword
// https://api.themoviedb.org/3/search/movie?query=Batman&&api_key=8ebdaa7271fbf5cea7ecef7fdabc17e6&page=1

// Movie by ID = https://api.themoviedb.org/3/movie/2661?api_key=8ebdaa7271fbf5cea7ecef7fdabc17e6

async function LoadMovies(page = 1) {
    let res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ebdaa7271fbf5cea7ecef7fdabc17e6&page=' + page)
    let data = res.json();
    return data
}

let page = 1;

function getMoviesFromStorage() {
    let movies = localStorage.getItem('movies')
    if (!movies) {
        localStorage.setItem('movies', JSON.stringify([]))
    }
    // console.log(JSON.parse(movies))
    return JSON.parse(movies)
}

function addMovieToStorage(movie) {
    let movies = JSON.parse(localStorage.getItem('movies'))
    let checkMovie = checkIfMovieInTheList(movie)
    if (checkMovie !== undefined) {

        Swal.fire('Movie is already in the list')
        return;
    }
    console.log(checkMovie)
    movies.push(movie)
    Swal.fire('Movie added into the list')
    localStorage.setItem('movies', JSON.stringify(movies))
}

async function getMovieById(id) {
    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8ebdaa7271fbf5cea7ecef7fdabc17e6`)
    let data = res.json()
    return data
}

function MakeMovie(movie) {
    let movieCard = document.createRange().createContextualFragment(`<div class="col-3">
            <div class="card" style="border-color:darkblue;">
              <img class="card-img-top" src="${movie.poster_path?`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`:movie.poster}" alt="Title">
              <div class="card-body">
                <h4 class="card-title">${movie.original_title}</h4>
                <p class="card-text">${movie.overview.substring(0, 50)}...
                </p>
                <button class="btn btn-warning read_detail">Read Detail</button>
                <button class="btn btn-warning watch_later" movie-id="${movie.id}">Watch Later</button>
              </div>
            </div>
        </div>`)

    listOfMovies.append(movieCard)
}

function checkIfMovieInTheList(movie) {
    // console.log(movie.id)
    let isExist = getMoviesFromStorage().find(m => m.id == movie.id)
    return isExist
}

function LoadMyList() {
    const WatchLaterListContainer = document.querySelector('.watch_later_list')
    let myMovieList = getMoviesFromStorage()
    WatchLaterListContainer.innerHTML = ""
    myMovieList.forEach(movie => {
        WatchLaterListContainer.innerHTML += `<tr class="">
        <td><img class="img-fluid" style="height:200px; width:auto" src="https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}" alt="Title"></td>
        <td>${movie.original_title}</td>
        <td style="width:40%">${movie.overview}</td>
    </tr>`
    })
}

// poster_url: https://www.themoviedb.org/t/p/w440_and_h660_face/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg

document.addEventListener('DOMContentLoaded', () => {
    LoadMovies()
        .then(movies => {
            movies.results.forEach(movie => {
                MakeMovie(movie)
            })
        })

    LoadMyList()
})

const [prev, next] = document.querySelectorAll('.pagination-btn')

next.addEventListener('click', (e) => {
    e.preventDefault();
    page++
    listOfMovies.innerHTML = ""
    LoadMovies(page)
        .then(movies => {
            movies.results.forEach(movie => {
                MakeMovie(movie)
            })
        })

})

prev.addEventListener('click', (e) => {
    e.preventDefault();
    if (page > 1) {
        page--
        listOfMovies.innerHTML = ""
        LoadMovies(page)
            .then(movies => {
                movies.results.forEach(movie => {
                    MakeMovie(movie)
                })
            })
    }

})

listOfMovies.addEventListener('click', (e) => {
    let moviesFromStorage = getMoviesFromStorage();
    if (e.target.classList.contains('watch_later')) {
        //   console.log(e.target.getAttribute('movie-id'))
        let movie_id = e.target.getAttribute('movie-id');
        getMovieById(movie_id)
            .then(movie_obj => {
                //   console.log(movie_obj)
                addMovieToStorage(movie_obj)
                LoadMyList()
            })
    }
})


const [movie_title,movie_poster,movie_desc] = document.querySelectorAll('.addMovie')
const saveMovie = document.querySelector('.save_movie')

saveMovie.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(movie_title,movie_poster,movie_desc)
    const obj = {
        original_title:movie_title.value,
        poster:movie_poster.value,
        overview:movie_desc.value
    }
    MakeMovie(obj)
    addMovieToStorage(obj)
})

const searchFilter = document.querySelector('.searchFilter')

async function fetchingMovies(keyword){
    console.log('fetching data...')
    let res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&&api_key=8ebdaa7271fbf5cea7ecef7fdabc17e6&page=1`)
    let data = res.json()
    return data
}

searchFilter.addEventListener('keyup',(e)=>{
  
    if(e.key.includes('Enter')){
        listOfMovies.innerHTML = ""
        fetchingMovies(e.target.value)
        .then(movies=>{
            movies.results.forEach(movie=>{
                MakeMovie(movie)
            })
        })
        console.log(e.target.value)
    }
})