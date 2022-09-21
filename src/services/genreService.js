import http from './httpService';
import config  from '../config.json';
var apiUrl = process.env.apiUrl

export  function getGenres() {
  var apiUrl = process.env.apiUrl

    return http.get('https://sairamakrishna.herokuapp.com/api' + "/genres");
  }