import React, {useState, useEffect} from 'react'
import Search from '../search/Search'
import {Spinner} from "react-bootstrap";
import MovieList from '../MovieList/MovieList';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (term) => {
        setSearch(term)
    }
    // useEffect(() => {
    //     fetch(`https://www.omdbapi.com/?s=${search}&apikey=e4db3ced`)
    //         .then(response => response.json())
    //         .then(data=>setMovies(data))
    // }, [search])
    const getMovieRequest = async (search) => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=e4db3ced`;
    
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
          setMovies(responseJson.Search);
        }
      };

      useEffect(() => {
        getMovieRequest(search);
      }, [search]);

//[search] prašom kad stebėtu
    console.log(movies)
    console.log(movies.Search)
    return(
        <>
        <div className="container mt-4">
            <Search onSearch= {handleSearch}/>
            <h2 className="mt-4 mb-4" style={{textAlign:'center'}}>Informacija apie ieškoma filmą</h2>
        </div>
        <div className='container konteineris'>
                {!movies.hasOwnProperty("Error")?
                <MovieList movies={movies}
                    // title={m.Title}
                    // year={m.Year}
                    // poster={m.Poster}
                    />:
                    (
                        <Spinner animation="border" role="status" className='container mt-5'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )}
                    </div>
           </>
    )

}

export default Movies