import React, { Component } from 'react'
import Mountain from '../Stylesheets/Images/Mountain.JPG'
import Me from '../Stylesheets/Images/Me.JPG'
import '../Stylesheets/Landing.css'

class Navbar extends Component {

    state = {
        open: false
    }

    render() {
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
                    <div 
                    onClick={this.handleClick}
                    className="Hamburger">
                        <div className={this.state.open ? "burger-menu open" : "burger-menu"}>
                            <div className="bar1" key="b1" />
                            <div className="bar2" key="b2" />
                            <div className="bar3" key="b3" />
                        </div>
                    </div>
                </nav>
                <h3>Author, DreamWeaver, Visionary...</h3>
                <h1 id="MeJob">Full Stack Developer</h1>
                <div className="ContactIcons">
                    <i class="fab fa-github fa-3x"></i>
                    <i class="fab fa-stack-overflow fa-3x"></i>
                    <i class="fab fa-codepen fa-3x"></i>
                    <i class="fas fa-code fa-3x"></i>
                </div>
                <img id="MePic" src={Me} alt="Me"/>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }
}

export default Navbar