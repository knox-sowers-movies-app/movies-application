import {getMovieSearch, getMoviesDB, addMovie, deleteMovie, patchMovie, getTop20, getMoviesDBId, renderTop20, renderFaves} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";

//TODO: Functions are done, so now we have to:

// 1. Have to add: edit button
// 2. Make website look nice with CSS



const targetTop20Grid = document.getElementById('movie-grid');
//MAIN FUNCTION//
(async() => {
    const preloading = document.createElement('div');
    preloading.innerHTML = '<h1 style="font-size: 120px">Movies Loading...</h1>';
    targetTop20Grid.appendChild(preloading);

    var interval = 5000;
    let movies = [];
    let intervalID = setInterval(async function()  {
        // This loop calls our card render function **for each** one that is listed as Top 20
        movies = await getTop20();
        clearInterval(intervalID);
        targetTop20Grid.removeChild(preloading);

        // targetTop20Grid.removeChild(preloading);
    movies.results.forEach(movie => {
        const target = document.getElementById("movie-grid")
        renderTop20(movie, "fav-card");
    })
    }, interval);







    //This loop calls our card render function for our database movies ***for each*** one that is in our database.
    const faves = await getMoviesDB();
    console.log(faves.results);
    faves.forEach(movie => {
        const target = document.getElementById('fav-grid')
        renderFaves(movie, "fav-card");
    })

})();