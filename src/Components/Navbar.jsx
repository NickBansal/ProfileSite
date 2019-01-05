import React from 'react'
import Mountain from '../Stylesheets/Images/Mountain.JPG'
import Me from '../Stylesheets/Images/Me.JPG'
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
            <h1 id="MeJob">Full Stack Developer</h1>
            <img id="MePic" src={Me} alt="Me"/>
        </div>
    )
}

export default Navbar