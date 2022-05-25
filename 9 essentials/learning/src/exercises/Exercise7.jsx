import './exercise7.css'
import { useState } from 'react'

const Exercise7 = () => {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');

    function formHandler(event) {
        event.preventDefault()
        alert(`Welcome Back ${name} ${surName}`)
        setName('')
        setSurName('')

    }

    return (  
        <div className='divCenter'>
         <form onSubmit={formHandler}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Enter your name'/> <br/>
            <input type="text" value={surName} onChange={e=>setSurName(e.target.value)} placeholder='Enter our last name'/> <br/>
            <button className="btn-primary">Greet me</button>
          </form>
        </div>
    );
}
 
export default Exercise7