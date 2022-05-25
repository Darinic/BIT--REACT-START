
import { Routes, Route } from 'react-router-dom';
import Exercise1 from "./exercises/Exercise1";
import Exercise2 from "./exercises/Exercise2";
import Exercise3 from "./exercises/Exercise3";
import Exercise4 from "./exercises/Exercise4";
import Exercise5 from "./exercises/Exercise5";
import Exercise6 from "./exercises/Exercise6";
import Exercise7 from "./exercises/Exercise7";
import Exercise8 from "./exercises/Exercise8";
import Exercise9 from "./exercises/Exercise9";
import Layout from "./Navigation/Layout"

function App() {
  return (
    <>
    <Layout>
     <Routes>
       <Route path="/" element={<Exercise1/>} />
       <Route path="/exercises2" element={<Exercise2/>} />
       <Route path="/exercises3" element={<Exercise3/>} />
       <Route path="/exercises4" element={<Exercise4/>} />
       <Route path="/exercises5" element={<Exercise5/>} />
       <Route path="/exercises6" element={<Exercise6/>} />
       <Route path="/exercises7" element={<Exercise7/>} />
       <Route path="/exercises8" element={<Exercise8/>} />
       <Route path="/exercises9" element={<Exercise9/>} />
     </Routes>
     </Layout>
    </>
  );
}

export default App;
