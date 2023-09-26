import {getMovieSearch, getMoviesDB, addMovie, deleteMovie, patchMovie, getTop20, getMoviesDBId, renderTop20, renderFaves} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";

//TODO: Functions are done, so now we have to:

// 1. Have to add: edit button
// 2. Make website look nice with CSS

//Loader | Needs work
document.onreadystatechange = function () {
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility='hidden';
        document.querySelector('#loader').style.visibility='visible';
    } else {
        document.querySelector('#loader').style.display='none';
        document.querySelector('body').style.visibility='visible';
    }
};

//MAIN FUNCTION//
(async() => {
    // This loop calls our card render function **for each** one that is listed as Top 20
    const movies = await getTop20();
    movies.results.forEach(movie => {
        const target = document.getElementById("movie-grid")
        renderTop20(movie, "fav-card");
    })

    // This loop calls our card render function for our database movies ***for each*** one that is in our database.
    const faves = await getMoviesDB();
    console.log(faves.results);
    faves.forEach(movie => {
        const target = document.getElementById('fav-grid')
        renderFaves(movie, "fav-card");
    })

})();