import {getMoviesAPI, getMoviesDB, addMovie, deleteMovie, patchMovie} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";

//TODO: Functions are done, so now we have to:

// 1. Must make our const to produce cards that are shown in our favorites
// 2. Must make our const that will show randomly generated cards in our other section
// 3. Make our main function call necessary parts
// 4. CSS/Style our site more

//This function makes the cards already in our DB, still need a function to call our cards, this will go into the async section
const renderMovie = (movies, favorite) => {
    const modal = document.createElement("div");
    model.classList.add('modal');
    model.innerHTML = `            <article class="fav-card">
                <h3 class="movie-title">${movies[0].title}</h3>
                <p class="movie-year">Year: ${movies[0].release_date}</p>
                <p class="movie-description">${movies[0].overview}</p>
                <div class="d-flex align-items-center justify-content-between">
                    <span>My Rating:</span>
                    <span class="personal-card-rating"></span>
                </div>
                <span>Average Rating:</span>
                <meter class="movie-meter" min="0" max="10" value="4"></meter>
                <div class="d-flex, align-items-center justify-content-start">
                ${renderGenres(movies[0].genre_ids[0])}
                </div>
            </article>
        ` }

const renderGenres = (genre) => {
    const genreHTML = genre.map((genre) => `<span class="movie-card-tag">${movies[0].genre_id[0]}</span>`).join("");
    return genreHTML;
};

(async() => {
    const movies = await getMoviesDB();
    for (let movie of movies) {
        const target = document.querySelector(".movie-grid");
        renderMovie(movie, target);
    }
})();