const MOVIEAPIKEY= "e4db3ced";
const APIERRORMESSAGE = "Error occured during request:";

function findMovieByTitle(title) {
    return fetch(constructApiURLString())
    .then(response => response.json())
    .catch(error => error + APIERRORMESSAGE) 

    function constructApiURLString() {
        return `https://www.omdbapi.com/?t=${title}&apikey=${MOVIEAPIKEY}`
    }
}

export default findMovieByTitle