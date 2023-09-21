import {movieKey} from "../keys.js";

// Function to search the API database for a movie based on title
const getMoviesAPI = async (query) => {
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
const getMoviesDB = async (title) => {
    const url = `http://localhost:3000/movies?title=${title}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const res = await fetch(url, options);
    const movies = await res.json();
    return console.log(movies);
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
// addMovie();
getMoviesAPI("the ring");

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
const patchMovie = async (movie) => {
    try {
        const url = `http://localhost:3000/books/${book.id}`;
        const body = movie;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        const response = await fetch(url, options);
        const newId = await response.json();
        return newId;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export {getMoviesAPI, getMoviesDB, addMovie, deleteMovie, patchMovie}