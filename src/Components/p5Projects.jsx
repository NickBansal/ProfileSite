import React from 'react'
import '../Stylesheets/ProjectItems.css'
import p5 from '../Stylesheets/Images/p5.png'

const P5Projects = () => {
    return (
    <div className="hvrbox">
        <img src={p5} alt="JS" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top hvrbox-layer_scale">
            <div className="hvrbox-text">
                <h2> p5.Js Projects </h2>
                <br/>
                <p>I have recently taught myself how to build interesting projects using p5.JS</p>
                <br className="Break"/>
                <p>The links can be found to these projects below, although not completed, they still offer a lot of fun. 
                Click on the link, press play - Enjoy
                </p>
                <br className="Break"/>
                <a
                className="MyProjects"
                rel="noopener noreferrer"
                target="_blank"
                href="https://editor.p5js.org/bansal321/sketches/rJtdJIBg4">Space Invaders
                </a>
                <br />
                <br />
                <a
                className="MyProjects"
                rel="noopener noreferrer"
                target="_blank"
                href="https://editor.p5js.org/bansal321/sketches/HJAFXebeV">Breakout
                </a>
            </div>
        </div>
    </div>
    )
}
        
export default P5Projects