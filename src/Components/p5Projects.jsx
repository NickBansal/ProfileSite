import React from 'react'
import '../Stylesheets/ProjectItems.css'
import p5 from '../Stylesheets/Images/p5.png'

const P5Projects = () => {
    return (
    <div className="hvrbox">
        <img src={p5} alt="JS" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top hvrbox-layer_scale">
            <div className="hvrbox-text">
                <h2>p5.JS Projects</h2>
                <br/>
                <p>ComicNews is a news aggregation demo site built in React.js</p>
            </div>
        </div>
    </div>
    )
}
        
export default P5Projects