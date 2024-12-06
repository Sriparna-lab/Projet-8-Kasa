import React from "react"
import { Link } from 'react-router-dom'
 
function Nav() {
    return (
        <nav className="nav-header">
            <Link to="/"className="nav-header__nav-link-home">Accueil</Link>
            <Link to="/about" className="nav-header__nav-link-about">A Propos</Link>
        </nav>
    )
}
export default Nav
