import './App.css';
import Search from '../Search/Search';
import React, { Component } from 'react'
import MovieRow from '../MovieRow.js/MovieRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {}

    // const movies = [
    //   {id:0, poster_src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg", title: "Avengers: Infinity War", overview: "this is a first row"},
    //   {id:1, poster_src:"https://m.media-amazon.com/images/I/815oKqKUo4L._AC_SL1500_.jpg", title: "The Avengers", overview: "this is my second overview"},
    // ]

    // // this.state = {rows: [
    // // <p key="1">This is my row0</p>,
    // // <p key="2">This is my row1</p>,
    // // <p key="3">This is my row2</p>
    // // ]}

    // let movieRows= []
    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch()
  }
    performSearch(ieskom) {
      fetch("http://www.omdbapi.com/?s=${ieskom}&apikey=e4db3ced")
      console.log("perform search using moviedb")
    }

  render() {
  return (
    <div>
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="80px" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"/>
              </td>
              <td>
                <h2>MoviesDB Search</h2>
              </td>
            </tr>
          </tbody>
        </table>
          <Search/>

          {this.state.rows}
    </div>
  );
  }}

export default App;
