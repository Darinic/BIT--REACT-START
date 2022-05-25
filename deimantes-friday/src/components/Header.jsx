import Search from "./Search"
import '../scss/Header.css'

const Header = (props) => {
    return(
        <header>
            <nav className="navbar">
                    <Search handleSelect={props.handleSelect} onSave={props.onSave} />  
            </nav>
        </header>
    )
}

export default Header