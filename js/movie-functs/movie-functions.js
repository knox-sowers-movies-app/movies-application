import {movieKey} from "../keys.js";

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

export {getMoviesAPI}