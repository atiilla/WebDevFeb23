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
    this.movies.push(obj)
}


console.log()