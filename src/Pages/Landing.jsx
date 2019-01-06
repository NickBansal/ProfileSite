import React from 'react'
import Mountain from '../Stylesheets/Images/Mountain.JPG'
import Me from '../Stylesheets/Images/Me.JPG'
import IconLinks from '../Components/IconLinks'
import Snowflakes from '../Components/Snowflakes'
import DownArrow from '../Components/DownArrow';
import ScrollIntoView from 'react-scroll-into-view'

import '../Stylesheets/Landing.css'

const Navbar = () => {
    const style = {
        backgroundImage: `url(${Mountain})`,
        minHeight: '100vh',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        zIndex: '-2',
        backgroundPosition: 'center'
    }


    return (
        <div style={style} id="TitlePage">
            <nav>
                <ScrollIntoView selector="#TitlePage">
                    <h1 id="Name">Nick Bansal</h1>
                </ScrollIntoView>
                <ul className="NavLinks">
                <ScrollIntoView selector="#About">
                    <li>About</li>
                </ScrollIntoView>
                <ScrollIntoView selector="#Projects">
                    <li>Projects</li>
                </ScrollIntoView>
                    <li>Contact</li>
                </ul>
            </nav>
            <div style={{ paddingTop: '100px' }}>
                <h3>Author, DreamWeaver, Visionary...</h3>
                <h1 id="MeJob">Full Stack Developer</h1>
                <IconLinks />
                <Snowflakes />
                <img id="MePic" src={Me} alt="Me" />
            </div>
            <DownArrow />
        </div>
    )
}

export default Navbar