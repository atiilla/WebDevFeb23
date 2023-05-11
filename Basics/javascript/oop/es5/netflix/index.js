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

Netflix.prototype.sortedByTitle = function () {
    return this.movies.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
}

Netflix.prototype.findMoviesByCategory = function (cat) {
    let userInputCat = cat.toLowerCase() // function parameter category
    return this.movies.filter((movie, i) => { // here we are retrive movie object in filter method
        let categoryArr = movie.genres // subarray of each movie object
        return categoryArr.filter(item => { // return final filter result by category name of a movie 
            let catName = item.toLowerCase()
            catName.includes(userInputCat) // condition <check if userInputCat includes in catName> true or false
        })
    })
}
// Batman = bAtMan
// batman = batman

Netflix.prototype.findMoviesByTitle = function (keyword) {
    return this.movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
}

Netflix.prototype.findMoviesBy = function (prop, userinput) {
    // prop used as property name to extract the value 
    return this.movies.filter(movie => String(movie[prop]).toLowerCase().includes(userinput.toLowerCase()))
    // get movies by any property
}

Netflix.prototype.findMovieByTitleAndDelete = function (title) {

    if (title !== undefined) { // check if title is defined? yes
        
        // then use title to find object position number in array
        let findMovieIndex = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase()) // get position number of the object in the array list

        if (findMovieIndex !== -1) { // title is defined and check if findMovieindex is correct

            // do the tasks
            console.log(findMovieIndex, title)
            return this.movies.splice(findMovieIndex, 1) // remove now
            // -1 - undefined
        }else{
            console.log('Title is well defined but no movie found')
        }
    } else {
        console.log('Title can not leave empty')
    }
}



let app = new Netflix();

app.addMovie('American Pie', ['thriller', 'action'], 'BlablaDescription', 'Unknown', ['Jack', 'Joe'], 'trailer.mp4',
    'the_purge.jpg', 2013, ['English'])

app.addMovie('the Purge', ['Thriller', 'Action'], 'BlablaDescription', 'Unknown', ['Jack', 'Joe'], 'trailer.mp4',
    'the_purge.jpg', 2013, ['English'])

app.addMovie('Inception', ['Sci-fi', 'Action'], 'BlablaDescription', 'Unknown', ['Jack', 'Joe'], 'trailer.mp4', 'inception.jpg', 2014, ['English'])

app.addMovie('The Mask', ['Sci-fi', 'Action'], 'BlablaDescription', 'Unknown', ['Jack', 'Joe'], 'trailer.mp4', 'inception.jpg', 2014, ['English'])

app.addMovie('batman', ['Sci-fi', 'Action'], 'BlablaDescription', 'Unknown', ['Jack', 'Joe'], 'trailer.mp4', 'inception.jpg', 2014, ['English'])




// console.log(app.displayAllMovies())

// console.log(app.sortedByTitle())
// console.log(app.findMoviesByCategory('action'))

// console.log(app.findMoviesByTitle('the'))

// console.log(app.findMoviesBy('title','the'))

app.findMovieByTitleAndDelete('batman')
app.findMovieByTitleAndDelete('The Mask')
app.findMovieByTitleAndDelete('Inception')
app.findMovieByTitleAndDelete('Inception') // -1 - undefined
app.findMovieByTitleAndDelete('asdasijdadajsidi')
console.log(app.displayAllMovies())