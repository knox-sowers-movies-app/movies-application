import {getMovieSearch, getMoviesDB, addMovie, deleteMovie, patchMovie, getTop20} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";

//TODO: Functions are done, so now we have to:

// 1. Have to add: Add button, Delete button, and edit button
// 2. search function to search through movies
// 3. Make website look nice with CSS

//This is a function that will render the top 20 cards
const renderTop20 = (movies, type) => {
    const modal = document.createElement("div");
    modal.classList.add('modal');
    modal.innerHTML = `            <article class="${type}">
                <h3 class="movie-title">${movies.title}</h3>
                <p class="movie-year">Year: ${movies.release_date}</p>
                <p class="movie-description">${movies.overview}</p>
                <span>Average Rating:</span>
                <meter class="movie-meter" min="0" max="10" value="${movies.vote_average}"></meter><br>
                <button class="add-movie-button">Add Movie</button>
            </article>
        `
    //Calling the cards specifically to the div we want in it.
    const movieGrid = document.getElementById('movie-grid')
    movieGrid.appendChild(modal)
};

// This is a function that will render the favorites we've added to movies.json
const renderFavs = (movies, type) => {
    const modal = document.createElement("div");
    modal.classList.add('modal');
    modal.innerHTML = `            <article class="${type}">
                <h3 class="movie-title">${movies.title}</h3>
                <p class="movie-year">Year: ${movies.release_date}</p>
                <p class="movie-description">${movies.overview}</p>
                <div class="d-flex align-items-center justify-content-between">
                    <span>My Rating:</span>
                    <span class="personal-card-rating"></span>
                </div>
                <span>Average Rating:</span>
                <meter class="movie-meter" min="0" max="10" value="${movies.vote_average}"></meter><br>
                <button class="delete-button">Delete</button>
            </article>
        `
    //Calling the cards specifically to the div we want in it.
    const favGrid = document.getElementById('fav-grid')
    favGrid.appendChild(modal)
};

const grabId = () =>{

}


const deleteButton = document.getElementsByClassName('delete-button');
deleteButton.addEventListener ("Click", ()=>{

})

//Loader
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
        renderFavs(movie, "fav-card");
    })


})();