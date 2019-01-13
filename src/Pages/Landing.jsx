import React from 'react'
import Mountain from '../Stylesheets/Images/MountainView.jpg'
import Me from '../Stylesheets/Images/Me.JPG'
import IconLinks from '../Components/IconLinks'
import DownArrow from '../Components/DownArrow';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Stylesheets/Landing.css'

const Landing = () => {
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