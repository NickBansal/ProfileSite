import React from 'react'
import '../Stylesheets/Projects.css'
import Slider from "react-slick";
import NCProfile from '../Stylesheets/Images/NC.png'
import p5 from '../Stylesheets/Images/p5.png'
import JS from '../Stylesheets/Images/JS.png'

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
                    <div 
                    style={{ backgroundImage: `url(${NCProfile})` }}
                    className="ProjectItem nc-profile">
                    </div>
                </div>
                <div>
                    <div 
                    style={{ backgroundImage: `url(${p5})` }}
                    className="ProjectItem">
                    </div>
                </div>
                <div>
                    <div 
                    style={{ backgroundImage: `url(${JS})` }}
                    className="ProjectItem">
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    )
}

export default Projects