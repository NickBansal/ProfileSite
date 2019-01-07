import React from 'react'
import '../Stylesheets/ProjectItems.css'
import SC from '../Stylesheets/Images/Soundcloud.jpg'

const SoundCloud = () => {
    return (
        <div className="hvrbox">
            <img src={SC} alt="JS" className="hvrbox-layer_bottom" />
            <div className="hvrbox-layer_top hvrbox-layer_scale">
                <div className="hvrbox-text">
                    <h2>Music Production</h2>
                    <br />
                    <p>A huge passion of mine is music production and although this doesnt showcase my coding skills
                        I felt it neccessary to include it in my site
                    </p>
                    <br />
                    <p>The following playlist was created using Logic Audio, Massive, Maschine and a host of other VST's</p>
                    <br />
                    <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://soundcloud.com/bansal321/tracks">Playlist
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SoundCloud