import React from 'react'
import '../Stylesheets/IconLinks.css'

const IconLinks = () => {
    return (
        <div className="ContactIcons">
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/NickBansal">
                <i className="i-link fab fa-github fa-3x"></i></a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://stackoverflow.com/users/10775236/nick-bansal">
                <i className="i-link fab fa-stack-overflow fa-3x"></i></a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://codepen.io/NickyBee/">
                <i className="i-link fab fa-codepen fa-3x"></i>
            </a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.codewars.com/users/NickBansal">
                <i className="i-link fas fa-code fa-3x"></i>
            </a>
        </div>
    )
}

export default IconLinks