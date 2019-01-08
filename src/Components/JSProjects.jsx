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
                    <br className="Break"/>
                    <p>Here I have listed a selection of Javascript projects I created using JQuery/Vanilla JS with links to my Codepen page</p>
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://codepen.io/NickyBee/pen/rorNjq">JS-Clock
                    </a>
                    <br />
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://codepen.io/NickyBee/pen/yGqLWG">Color Game
                    </a>
                    <br />
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://codepen.io/NickyBee/pen/vdawoq">Wikipedia Viewer
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JSProjects