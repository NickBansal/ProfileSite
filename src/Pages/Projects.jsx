import React from 'react'
import '../Stylesheets/Projects.css'
import Slider from "react-slick";
import NCProfile from '../Stylesheets/Images/NC.png'

const Projects = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const style = {
        backgroundImage: `url(${NCProfile})`,
        top: '0',
        left: '0',
        backgroundSize: '100% 99.9%',
        backgroundRepeat: 'none',
        zIndex: '-2',
        backgroundPosition: 'center'
    }

    return (
        <div id="Projects">
            <h1>Projects</h1>
            <div className="ProjectFull">
            <Slider {...settings}>
                <div>
                    <div 
                    style={style}
                    className="ProjectItem nc-profile">
                        {/* <h3>Northcoders Projects Site</h3> */}
                    </div>
                </div>
                <div>
                <div className="ProjectItem"><h3>JS Games</h3></div>
                </div>
                <div>
                <div className="ProjectItem"><h3>p5.js</h3></div>
                </div>
            </Slider>
            </div>
        </div>
    )
}

export default Projects