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
    return console.log(movies);
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

export {getMoviesAPI, getMoviesDB}