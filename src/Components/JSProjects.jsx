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
                    <p>I have built a few stand alone projects using ReactJS. 
                        The projects have not been deployed so in order to play you will have to follow the instructions on the readme</p>
                    <br />
                    <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/TicTacToe">Tic Tac Toe - with AI
                    </a>
                    <br />
                    <br />
                    <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/GameOfLife">Game of Life
                    </a>
                    <br />
                    <br />
                    <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/NickBansal/Snake">Snake
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JSProjects