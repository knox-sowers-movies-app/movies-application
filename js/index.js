import {getMoviesAPI, getMoviesDB, addMovie, deleteMovie, patchMovie} from "./movie-functs/movie-functions.js"

//TODO: Functions are done, so now we have to:

// 1. Must make our const to produce cards that are shown in our favorites
// 2. Must make our const that will show randomly generated cards in our other section
// 3. Make our main function call necessary parts
// 4. CSS/Style our site more

(async() => {

    getMoviesAPI("Shrek");
    // getMoviesDB("Shrek");

})();