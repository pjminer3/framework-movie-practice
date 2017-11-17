const request = require('request');
const appkey = require('./../server/config/apiKey.js');

const sayHi = () => {
  return 'Hi from helpers.js';
}

const getMovies = () => {

}

module.exports.hi = sayHi;
module.exports.getMovies = getMovies;