const request = require('request');
const appkey = require('./../server/config/apiKey.js');
const $ = require('jquery');

const sayHi = () => {
  return 'Hi from helpers.js';
}

const getMovies = (callback) => {
  
  // API get request to get the now-playing movies
  $.ajax({
    url: `https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&${appkey.API_KEY}=%3C%3C${appkey.API_KEY}%3E%3E`,
    method: "GET",
    contentType: 'application/json',
    success: (data) => {
      console.log('This is our API retreieved data: ', data);
      callback(data);
    }, 
    error: (err) => {
      console.log('There was an error querying the API: ', err);
    }
  });

}

// example movie search request
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

module.exports.hi = sayHi;
module.exports.getMovies = getMovies;