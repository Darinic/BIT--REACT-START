import Header from "./components/Header"
import {useState} from 'react'
import Movie from "./components/Movie";

function App() {
  const [selectedMovie, setSelectedMovie] =useState();

const onSave = (data) => {
  setSelectedMovie(data)
}
console.log(selectedMovie)
  return (
    <div className="App">
    <Header onSave={onSave}/>
    {selectedMovie && 
    <Movie movie={selectedMovie}/>}
    </div>
  );
}

export default App;
