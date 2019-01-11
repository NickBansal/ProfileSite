import React from 'react'
import '../Stylesheets/ProjectItems.css'
import Nasa from '../Stylesheets/Images/Nasa.png'

const NasaProject = () => {
    return (
        <div className="hvrbox">
            <img src={Nasa} alt="JS" className="hvrbox-layer_bottom" />
            <div className="hvrbox-layer_top hvrbox-layer_scale">
                <div className="hvrbox-text">
                    <h2>Nasa API Project</h2>
                    <br className="Break"/>
                    <p>This project was built in react and made calls to NASA's API. 
                        You can search for images or videos and view them seperately</p>
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/MarsRover">Mars Rover
                    </a>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default NasaProject