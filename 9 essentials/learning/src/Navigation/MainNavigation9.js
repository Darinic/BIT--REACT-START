import { Link } from 'react-router-dom'
import './MainNavigation.css'

function MainNavigation() {
    return (  
        <header className='Header'>
            <nav className='nav'>
                <ul className='navigacija'>
                    <li>
                        <Link to="/">Exercise 1</Link>
                    </li>
                    <li>
                        <Link to='/exercises2'>Exercise 2</Link>
                    </li>
                    <li>
                        <Link to='/exercises3'>Exercise 3</Link>
                    </li>
                    <li>
                        <Link to='/exercises4'>Exercise 4</Link>
                    </li>
                    <li>
                        <Link to='/exercises5'>Exercise 5</Link>
                    </li>
                    <li>
                        <Link to='/exercises6'>Exercise 6</Link>
                    </li>
                    <li>
                        <Link to='/exercises7'>Exercise 7</Link>
                    </li>
                    <li>
                        <Link to='/exercises8'>Exercise 8</Link>
                    </li>
                    <li>
                        <Link to='/exercises9'>Exercise 9</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default MainNavigation;