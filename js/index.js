import {getMoviesAPI, getMoviesDB, addMovie, deleteMovie, patchMovie} from "./movie-functs/movie-functions.js"
import {movieKey} from "./keys.js";

//TODO: Functions are done, so now we have to:

// 1. Must make our const to produce cards that are shown in our favorites
// 2. Must make our const that will show randomly generated cards in our other section
// 3. Make our main function call necessary parts
// 4. CSS/Style our site more

(async() => {

    // const  getMoviesAPI("Shrek");
    // await getMoviesDB("Shrek");
    // await getMoviesAPI('jaws');
    const renderModel = (movies, favorite) => {
        const modal = document.createElement("div");
        model.classList.add('modal');
        model.innerHTML = `
            <div class="fav-card">
                <h3>Movie Title</h3>
                <img src="" alt="movie icon">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget.</p>
                <a href="#">Genre 1</a> <a href="#">Genre 2</a> <a href="#">Genre 3</a>
                My Rating
                <meter class="book-card-meter" min="0" max="10" value="4"></meter>

                Official Rating
                <meter class="book-card-meter" min="0" max="10" value="4"></meter>

                <button type="button">Remove</button>
            </div>`
    }
})();