import React from 'react'
import Me from '../Stylesheets/Images/Me.JPG'
import IconLinks from '../Components/IconLinks'
import DownArrow from '../Components/DownArrow';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Stylesheets/Landing.css'

const Landing = () => {
    return (
        <div id="TitlePage">
            <Navbar />
            <div style={{ paddingTop: '100px' }}>
                <h3 id="MeDescription">Author, DreamWeaver, Visionary...</h3>
                <h1 id="MeJob">Full Stack Developer</h1>
                <IconLinks />
                <img id="MePic" src={Me} alt="Me" />
            </div>
            <DownArrow />
            <Footer />
        </div>
    )
}

export default Landing