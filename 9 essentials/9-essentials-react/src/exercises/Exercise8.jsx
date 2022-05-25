import React from "react";
import RenderOne from "../components/RenderOne";
import Data from '../data/Data.json'

const Exercise8 = () => {
    return (
        <>
        <p>Test</p>
    {Data.map((joke) => {
                <RenderOne 
                setup={joke.setup}
                punchline={joke.punchline}
                />
        }) }
    
    </>
)}
 
export default Exercise8;