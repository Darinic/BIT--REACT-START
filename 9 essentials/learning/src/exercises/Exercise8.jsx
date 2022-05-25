import React from "react";
import RenderOne from "../components/RenderOne";
import Data from '../data/Data.json'

const Exercise8 = () => {
    return (
        <>
    {Data.map((joke) => 
                <RenderOne 
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
                />
        ) 
    }
    
    </>
)}
 
export default Exercise8;