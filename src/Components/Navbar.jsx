import React from 'react'
import '../Stylesheets/Navbar.css'
import ScrollTo from 'react-scroll-into-view'

const Navbar = () => {
    return (
        <nav>
            <ScrollTo selector="#TitlePage">
                <h1 id="Name">Nick Bansal</h1>
            </ScrollTo>
            <ul className="NavLinks">
            <ScrollTo selector="#About">
                <li>About</li>
            </ScrollTo>
            <ScrollTo selector="#Skills">
                <li>Skills</li>
            </ScrollTo>
            <ScrollTo selector="#Projects">
                <li>Projects</li>
            </ScrollTo>
            </ul>
        </nav>
    )
}

export default Navbar