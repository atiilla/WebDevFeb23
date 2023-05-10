/*
Netflix app in vanillajs

// Single Movie 
movie_title
genres <many> +18
view_counts
reviews
description
director
casts <many str>
trailer <youtubeid>
movie_poster <img>
released_year
language
*/

function Netflix() {
    this.movies = []
}

// Display Movies
// FilterMoviesByViewCounts
// FilterMoviesByGenre
// SortMoviesBy

Netflix.prototype.displayAllMovies = function () {
    return this.movies
}

Netflix.prototype.addMovie = function (title, genres = [], description, director, casts = [], trailer, image, released_year, language = []) {
    let obj = {
        title,
        genres,
        view_counts: 0,
        reviews: [],
        description,
        director,
        casts,
        trailer,
        image,
        released_year,
        language
    }
    // insert the object in to movies arraylist
    this.movies.push(obj)
}

let app = new Netflix();

app.addMovie('The Purge',['Thriller','Action'],'BlablaDescription','Unknown',['Jack','Joe'],'trailer.mp4',
'the_purge.jpg',2013,['English'])

app.addMovie('Inception',['Sci-fi','Action'],'BlablaDescription','Unknown',['Jack','Joe'],'trailer.mp4','inception.jpg',2014,['English'])

console.log(app.displayAllMovies())

