import http from "./httpService";
import apiUrl from "../config.json";
const apiEndpoint = apiUrl.apiUrl + "/movies";

export function getMovies() {
    return http.get('https://sairamakrishna.herokuapp.com/api/movies');
}


export function getMovie(movieId) {
    console.log(movieId, 'movieId')
    return http.get('https://sairamakrishna.herokuapp.com/api/movies'+ "/" + movieId );
}


export function saveMovie(movie){
    
    if(movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(apiEndpoint + "/" + movie._id, body);
    }
    return http.post(apiEndpoint, movie);
}
export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + "/" + movieId);
} 