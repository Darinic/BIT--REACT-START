import Header from "../header/Header";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import About from "../about/About";
import Search from "../search/Search";

const App = ()=> {
  return (
    <Container>
      <Router>
      <Header/>
        <Container style= {{marginTop:'80px'}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/search" element={<Search/>}/>
         </Routes>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
