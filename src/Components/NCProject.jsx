import React from 'react'
import '../Stylesheets/ProjectItems.css'
import NC from '../Stylesheets/Images/NC.png'

const NCProject = () => {
    return (
    <div className="hvrbox">
        <img src={NC} alt="JS" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top hvrbox-layer_scale">
            <div className="hvrbox-text">
                <h2>NC Comic-News</h2>
                <br/>
                <p>ComicNews is a news aggregation demo site built in React.js</p>
                <br/>
                <p>I created both front end and back end of this project and the links can be found below</p>
                <br/>
                <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://evening-plains-23561.herokuapp.com/">WebSite
                </a>
                <br/>
                <br/>
                <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/NickBansal/Comic-News">Github - FrontEnd
                </a>
                <br/>
                <br/>
                <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/NickBansal/Comic-News-Backend">Github - BackEnd
                </a>
            </div>
        </div>
    </div>
    )
}
        
export default NCProject