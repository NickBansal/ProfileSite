import React from 'react'
import '../Stylesheets/ProjectItems.css'
import RP from '../Stylesheets/Images/RP.png'

const ReactProjects = () => {
    return (
        <div className="hvrbox">
            <img src={RP} alt="JS" className="hvrbox-layer_bottom" />
            <div className="hvrbox-layer_top hvrbox-layer_scale">
                <div className="hvrbox-text">
                    <h2>JS Projects</h2>
                    <br className="Break"/>
                    <p>I have built a few stand alone projects using ReactJS. 
                        The projects have not been deployed so in order to play you will have to follow the instructions on the readme</p>
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/TicTacToe">Tic Tac Toe - with AI
                    </a>
                    <br />
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/GameOfLife">Game of Life
                    </a>
                    <br />
                    <br />
                    <a
                    className="MyProjects"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/Snake">Snake
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReactProjects