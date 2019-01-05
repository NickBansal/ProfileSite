import React from 'react'
import Mountain from '../Stylesheets/Images/Mountain.JPG'
import '../Stylesheets/Navbar.css'

const Navbar = () => {
    const style = {
        backgroundImage: `url(${Mountain})`,
        minHeight: '80vh',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        zIndex: '-1'
    }
    return (
        <div style={style} className="TitlePage">
            <nav>
                <h1>Nick Bansal</h1>
                <ul className="NavLinks">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Links</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar