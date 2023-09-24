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
    modal.classList.add('modal');
    modal.innerHTML = `            <article class="fav-card">
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





//
// const api_key = 'api_key=48f68dcd82cc8a35116e0848fdceaeb6';
// const base_url = 'https://api.themoviedb.org/3';
// const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;
// const img_url = 'https://image.tmbd.org/t/p/500';
//
// const main = document.getElementById('main');
//
// getMovies(api_url);
// async function getMovies(url) {
//     fetch(url).then(res => res.json()).then(data => {
//         // console.log(data);
//         showMovies(data);
//     })
// }
// let data1 = getMoviesAPI().value
// function showMovies(data) {
//     main.innerHTML = "";
//
//     data.foreach(movie => {
//         const {title, poster_path, vote_average, overview, release_date}= movie;
//         const movieEl = document.createElement('div');
//         movie.classlist.add('movie');
//         movieEl.innerHTML = `
//        <h3 class="movie-title">${title}}</h3>
//        <img src="${img_url + poster_path}" alt="${title}}
//         <p class="movie-year">${release_date}</p>
//         <p class="movie-description">${overview}</p>
//         <div class="d-flex align-items-center justify-content-between">
//         <span>My Rating:</span>
//         <span class="personal-card-rating ${getColor(vote_average)}">${vote_average}</span>
//         </div>
//         <meter class="movie-meter" min="0" max="10" value="4"></meter>
//         <div class="d-flex, align-items-center justify-content-start">
//         <div class="movie-genre-tag">${genre_ids}</div>
//         </div>
//
//         `
//
//         console.log(movieEl);
//         main.appendChild(movieEl);
//
//     })
// }
//
// function getColor(vote) {
//     if(vote >= 8) {
//         return 'green';
//     } else if (vote >= 5) {
//         return 'orange';
//     } else {
//         return 'red';
//     }
// }