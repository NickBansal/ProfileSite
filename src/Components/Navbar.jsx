import React from 'react'
import Mountain from '../Stylesheets/Images/Mountain.JPG'
import Me from '../Stylesheets/Images/Me.JPG'
import '../Stylesheets/Navbar.css'

const Navbar = () => {
    const style = {
        backgroundImage: `url(${Mountain})`,
        minHeight: '85vh',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        zIndex: '-1',
        backgroundPosition: 'center'
    }
    return (
        <div style={style} className="TitlePage">
            <nav>
                <h1 className="Name">Nick Bansal</h1>
                <h1 className="Job">Full Stack Developer</h1>
                <ul className="NavLinks">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="Hamburger">
                    <div className="burger-menu">
                        <div className="bar1" key="b1" />
                        <div className="bar2" key="b2" />
                        <div className="bar3" key="b3" />
                    </div>
                </div>
            </nav>
            <h1 id="MeJob">Full Stack Developer</h1>
            <img id="MePic" src={Me} alt="Me"/>
        </div>
    )
}

export default Navbar