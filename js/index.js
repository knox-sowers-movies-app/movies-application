import {getMoviesAPI, getMoviesDB, addMovie, deleteMovie, patchMovie} from "./movie-functs/movie-functions.js"

// TODO: Example for use of website API

// const searchMovies = async (query) => {
//     // get the movies from the API
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${keys.tmdb}&language=en-US&query=${query}&page=1&include_adult=false`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     };
//     const response = await fetch(url);
//     const movies = await response.json();
//     return movies;
// }

//TODO: Functions needed to make:

// 1. SearchMovies: To find movies in the API ✓
// 2. getMovie: To grab a certain movie from our search and add it to our "Favorites" DB ✓
// 3. removeMovie: To remove a movie from our DB
// 4. editRating: To edit their personal rating on the movie
// 5. populateCard: To generate a card when search results come through
// 6. sortMovies: To generate a sorted list of movies by their genre

(async() => {

    const removeMovie = async () => {

    }

    // getMoviesAPI("Shrek");
    // getMoviesDB("Shrek");

})();