import React from 'react'
import '../Stylesheets/About.css'
import DownArrow from '../Components/DownArrow'

const About = () => {
    return (
        <div>
            <div id="About">
                <h1>About</h1>
                    <p className="part1">A Javascript enthusiast</p>
                <div className="AboutParagraph">
                    <br />
                    <p className="part2"> I'm a full stack developer who has recently graduated from an intensive coding bootcamp at Northcoders, 
                        looking to continue a career within a creative and technical environment.</p>
                    <br />
                    <br />
                    <p className="part3">As well as obtaining a wealth of coding knowledge I have also learnt a 
                        lot of vital skills whilst on this bootcamp such as 
                        Test Driven development, Pair programming and Functional Programming</p>
                    <div className="iconSkills">
                        <i className="i-skill fab fa-js fa-3x"></i>
                        <i className="i-skill fab fa-react fa-3x"></i>
                        <i className="i-skill fas fa-heart fa-4x"></i>
                        <i className="i-skill fab fa-node-js fa-3x"></i>
                        <i className="i-skill fab fa-css3 fa-3x"></i>
                    </div>
                </div>
            </div>
            <DownArrow />
        </div>
    )
}

export default About
