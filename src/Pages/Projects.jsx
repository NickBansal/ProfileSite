import React from 'react'
import '../Stylesheets/Projects.css'
import Slider from "react-slick";
import JSProjects from '../Components/JSProjects'
import P5Projects from '../Components/p5Projects'
import NCProject from '../Components/NCProject'
import SoundCloud from '../Components/SoundCloud'
import ReactProjects from '../Components/ReactProjects'
import NasaProject from '../Components/NasaProject'

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="Projects">
            <h1>Projects</h1>
            <div className="ProjectFull">
                <Slider {...settings}>
                    <div>
                        <NCProject />
                    </div>
                    <div>
                        <ReactProjects />
                    </div>
                    <div>
                        <NasaProject />
                    </div>
                    <div>
                        <JSProjects />
                    </div>
                    <div>
                        <P5Projects />
                    </div>
                    <div>
                        <SoundCloud />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Projects