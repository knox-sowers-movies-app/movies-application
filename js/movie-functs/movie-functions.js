import {movieKey} from "../keys.js";


// Function to search the API database for a movie based on title
    const getMovieSearch = async (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const res = await fetch(url);
        const movies = await res.json();
        console.log(movies);
        return movies;
    };

// Function to search OUR Database for movies added to our favorites
    const getMoviesDB = async () => {
        const url = `http://localhost:3000/movies`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(url, options);
        const movies = await res.json();
        return movies;
    };

//Gets the ID?
    const getMoviesDBId = async (id) => {
        const url = `http://localhost:3000/movies?${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(url, options);
        const movies = await res.json();
        return movies;
    };

//Function to post movie
    const addMovie = async (movie) => {
        try {
            const url = `http://localhost:3000/movies`;
            const body = {
                id: movie.id,
                ...movie
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            };
            const response = await fetch(url, options);
            const newId = await response.json();
            return console.log(newId);
        } catch (error) {
            console.log(error);
            return null;
        }
    };

//Function to delete movie
    const deleteMovie = async (id) => {
        const url = `http://localhost:3000/movies/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, options);
        const movie = await response.json();
        return movie;
    };

//Function to Edit
    const patchMovie = async (movie, user_rating) => {
        try {
            const url = `http://localhost:3000/movies/${movie}`;
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user_rating)
            };
            const response = await fetch(url, options);
            const newId = await response.json();
            return newId;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

// Function  to call top 20 from API
    const getTop20 = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDBhZWE4NDZlM2Q1ZmJmZjRhZmUxMjBiZDYxNTVhNiIsInN1YiI6IjY1MGM1Y2QwYjViYzIxMDBlYWNhYmNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWmrat2iN2I9euQNdvYrPsJk4k9X8FCf1LORWOey1Ow'
            }
        };
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const movies =  await res.json();
        return movies;
    };

//This is a function that will render the top 20 cards
    const renderTop20 = (movies, type) => {
        const favGrid = document.getElementById('fav-grid');
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

        // Add button programming: This will pull the individual values from the buttons and then adding them as variables to the object variable to be stored in movies.json
        const addButton = modal.querySelector('button');
            addButton.addEventListener('click',  async(event) => {
                favGrid.innerHTML="";
                let title = modal.querySelector('.movie-title').innerHTML
                let year = modal.querySelector('.movie-year').innerHTML
                let description = modal.querySelector('.movie-description').innerHTML
                let rating = modal.querySelector('.movie-meter').value
                console.log(title);
                let obj = await addMovie({
                    title: title,
                    release_date: year,
                    overview: description,
                    vote_average: rating,
                    my_rating: 0,
        });
               getMoviesDB().then(faves =>{
                   faves.forEach(movie => {
                       renderFaves(movie, "fav-card");
                   });
               })
            })
    };

// This is a function that will render the favorites we've added to movies.json
    const renderFaves = (movies, type) => {

        const favGrid = document.getElementById('fav-grid')
        const modal = document.createElement("div");
        modal.classList.add('modal');
        modal.innerHTML = `            <article class="${type}">
                    <h3 class="movie-title">${movies.title}</h3>
                    <p class="movie-year">Year: ${movies.release_date}</p>
                    <p class="movie-description">${movies.overview}</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <span>My Rating:</span>
                        <span class="personal-card-rating"><meter class="movie-meter" min="0" max="10" value="${movies.my_rating}"></meter></span>
                    </div>
                    <span>Average Rating:</span>
                    <meter class="movie-meter" min="0" max="10" value="${movies.vote_average}"></meter><br>
                    <input class="id-input" type="hidden" value="${movies.id}"><br>
                    <button class="delete-button" >Delete</button>
                    <button class="edit-button">Edit Rating</button>
                </article>
            `
        //Calling the cards specifically to the div we want in it
        favGrid.appendChild(modal)

        // Delete button programming: This will take in the id from the hidden input from render movies and then after take that id and use it to delete from movies.json
        const deleteButton = modal.querySelector('.delete-button');
        deleteButton.addEventListener('click', e => {
            const movieID = modal.querySelector('.id-input').value;
            deleteMovie(movieID).then(() =>{
                const favGrid = document.getElementById('fav-grid')
                favGrid.replaceChildren();
                favGrid.innerHTML = "";
                getMoviesDB().then(faves => {
                    faves.forEach(movie => {
                        renderFaves(movie, "fav-card");
                    })
                });
            })
        });

// Edit button will PATCH a part of the movies.json and
    const editRating = modal.querySelector('.edit-button');
    editRating.addEventListener('click', (e) => {
        let user_rating = prompt('' +
            'Enter your movie rating between 1 and 10 which may include on decimal point such as 7.8...');
        const data = {
                        my_rating: user_rating,
                    };
        patchMovie(movies.id, data).then(() => {
            favGrid.innerHTML="";
            getMoviesDB().then(faves =>{
                faves.forEach(movie => {
                    renderFaves(movie, "fav-card");
                });
            })
        })
    })

}

export {getMovieSearch, getMoviesDB, addMovie, deleteMovie, patchMovie, getTop20, getMoviesDBId, renderTop20, renderFaves}

