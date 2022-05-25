import React from "react";
import {Link} from "react-router-dom"

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Pradinis</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/saved">Išsaugoti</Link></li>    
                </ul>
            </nav>
        )
    }
}

export default Navigation