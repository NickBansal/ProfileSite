import React from 'react'
import '../Stylesheets/Navbar.css'
import ScrollIntoView from 'react-scroll-into-view'

const Navbar = () => {
    return (
        <nav>
            <ScrollIntoView selector="#TitlePage">
                <h1 id="Name">Nick Bansal</h1>
            </ScrollIntoView>
            <ul className="NavLinks">
            <ScrollIntoView selector="#About">
                <li>About</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#Skills">
                <li>Skills</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#Projects">
                <li>Projects</li>
            </ScrollIntoView>
            </ul>
        </nav>
    )
}

export default Navbar