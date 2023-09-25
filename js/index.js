import {getMovieSearch, getMoviesDB, addMovie, deleteMovie, patchMovie, getTop20, getMoviesDBId, renderTop20, renderFaves} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";

//TODO: Functions are done, so now we have to:

// 1. Have to add: edit button
// 2. Make website look nice with CSS

//Loader | Needs work
document.documentElement.onload =function (){
    document.getElementById('loader').style.display ='block';
};
window.onload= function (){
    document.getElementById('loader').style.display='none';
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

    // Delete button programming: This will take in the id from the hidden input from render movies and then after take that id and use it to delete from movies.json
    const deleteButton = document.getElementsByClassName('delete-button');
   for(let button of deleteButton) {
       button.addEventListener ("click", async (event)=>{
       const movieID = event.target.previousElementSibling.value
       const deletedFave = deleteMovie(movieID);
       const favGrid = document.getElementById('fav-grid')
       favGrid.replaceChildren();
       const faves = await getMoviesDB();
       faves.forEach(movie => {
           renderFaves(movie, "fav-card");
       });
    })}

})();