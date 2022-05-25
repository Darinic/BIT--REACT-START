import './exercise4.css'
import { useState } from 'react'

function Exercise4() {
    const [count, setCount] = useState(0)
    function buttonHandler() {
        setCount(count+1)
    }

    return (  
        <div className="central">
            <p>The Button has been clicked {count} times</p>
            <button className='btn-primary' onClick={buttonHandler}>Click me</button>
        </div>
    )
};
 
export default Exercise4;