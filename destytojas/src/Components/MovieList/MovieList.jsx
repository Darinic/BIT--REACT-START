import {Card} from "react-bootstrap";
import React from "react";

const MovieList = (props) => {
    console.log(props);
    return (
        <>
        {props.movies.map((movie) => 
        <Card style={{width:'16rem'}}>
            <Card.Header style={{height:'4rem',fontWeight:'bold'}}>{movie.Title}</Card.Header>
            <Card.Body>
                <Card.Title>Metai:{movie.Year}</Card.Title>
                <Card.Text>
                    <img className="img-fluid" src={movie.Poster} alt="poster"/>
                </Card.Text>
            </Card.Body>
        </Card>
    )}
    </>  
    )
}
 
export default MovieList