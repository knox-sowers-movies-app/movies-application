import {getMovieSearch, getMoviesDB, addMovie, deleteMovie, patchMovie, getTop20, getMoviesDBId, renderTop20, renderFaves} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";


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


// TODO Refactoring ideas:

// > Carousel the favorite movies for easier access when the .json get larger
// > refactor how the cards look, could look cleaner
// > Add the movie poster on card for cleaner cards
// > More "movie" type colors
// > Style the loading view a bit more
// > refactor site to have a search box/query for our favorites
// > Add a form input for adding a movie completely from scratch
// > Make a function to re-render the cards rather than constantly re-making the foreach loop in each function.