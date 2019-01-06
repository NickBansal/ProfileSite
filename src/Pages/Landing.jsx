import React from 'react'
import Mountain from '../Stylesheets/Images/Mountain.JPG'
import Me from '../Stylesheets/Images/Me.JPG'
import '../Stylesheets/Landing.css'
import IconLinks from '../Components/IconLinks'
import Snowflakes from '../Components/Snowflakes'
import DownArrow from '../Components/DownArrow'

const Navbar = () => {
    const style = {
        backgroundImage: `url(${Mountain})`,
        minHeight: '100vh',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        zIndex: '-2',
        backgroundPosition: 'center'
    }
    return (
        <div style={style} className="TitlePage">
            <nav>
                <h1 id="Name">Nick Bansal</h1>
                <ul className="NavLinks">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <h3>Author, DreamWeaver, Visionary...</h3>
            <h1 id="MeJob">Full Stack Developer</h1>
            <IconLinks />
            <Snowflakes />
            <img id="MePic" src={Me} alt="Me" />
            <DownArrow />
        </div>
    )
}

export default Navbar