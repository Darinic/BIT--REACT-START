import React from "react";
import Jokes from "../jokes/Jokes";
import Favorites from "../favorites/Favorites";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from "../nav/Navigation";

class App extends React.Component{

  render(){
      return(
        <div className="container">
          <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Jokes/>}/>
                <Route path="/saved" element={<Favorites/>}/>
            </Routes>
          </Router>
          </div>
      )
  }

}

export default App;
