import React from 'react'
import '../Stylesheets/Projects.css'
import Slider from "react-slick";
import JSProjects from '../Components/JSProjects'
import P5Projects from '../Components/p5Projects'
import NCProject from '../Components/NCProject'

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
                        <P5Projects />
                    </div>
                    <div>
                        <JSProjects />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Projects