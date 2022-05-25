
const Movie = (props) => {

    const imgUrl= `https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`;
return(
    <div className="container">
    <div>
        <img className="moviePicture" src="https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}"/>
    </div>
    <div>
        <p>{props.movie.original_title} ({props.movie.release_date})</p>
        <p>{props.movie.original_language}</p>
        <p>{props.movie.vote_average}/10 <br/>
        {props.movie.vote_count}</p>
        <p>{props.movie.overview}</p>
    </div>
    </div>
)
}

export default Movie