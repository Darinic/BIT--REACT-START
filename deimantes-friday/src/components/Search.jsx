import "../scss/Search.css";
import React, { useEffect, useState } from "react";
import { ReactComponent as YourSvg } from "../svg/movie.svg";
import MovieList from "./MovieList";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [movieData, setMovieData] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c2e4035e123e962f3bff733f39f8ccf7&language=en-US&query=${term}`
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data.results.slice(0, 8)))
      .catch((error) => console.log(error));
  }, [term]);

  const handleSelect = (data) => {
    props.onSave(data)
    setTerm('')
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <span className="picture">
              <YourSvg fill="white" />
            </span>
            <input
              type="text"
              placeholder="Enter your movie..."
              onChange={handleChange}
              value={term}
              className="form-control"
            />
          </div>
        </div>
        <div className="sutvarkyti">
        {term.length > 2 ? (
          movieData.map((movie) => (
            <MovieList
              key={movie.id}
              title={movie.original_title}
              year={movie.release_date}
              rating={movie.vote_average}
              language={movie.original_language}
              votes={movie.vote_count}
              img={movie.backdrop_path}
              overview={movie.overview}
              handleSelect={()=>handleSelect(movie)}
            />
          ))
        ) : (
          <p></p>
        )}
        </div>
      </div>
    </>
  );
};

export default Search;
