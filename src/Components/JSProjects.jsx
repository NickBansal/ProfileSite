import React from 'react'
import '../Stylesheets/JSProjects.css'
import JS from '../Stylesheets/Images/JS.png'

const JSProjects = () => {
    return (
    <div className="hvrbox">
        <img src={JS} alt="JS" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top">
            <div className="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
        </div>
    </div>
    )
}
        
export default JSProjects