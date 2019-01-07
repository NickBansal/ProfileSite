import React from 'react'
import '../Stylesheets/ProjectItems.css'
import JS from '../Stylesheets/Images/JS.png'

const JSProjects = () => {
    return (
        <div className="hvrbox">
            <img src={JS} alt="JS" className="hvrbox-layer_bottom" />
            <div className="hvrbox-layer_top hvrbox-layer_scale">
                <div className="hvrbox-text">
                    <h2>JS Projects</h2>
                    <br />
                    <p>ComicNews is a news aggregation demo site built in React.js</p>
                </div>
            </div>
        </div>
    )
}

export default JSProjects