import React from 'react'
import '../Stylesheets/DownArrow.css'

const DownArrow = () => {
    return (
        <div>
            <div className="container">
            <div className="arrow bounce">
                <i className="fa fa-angle-down fa-5x" aria-hidden="true"></i>
            </div>
            </div>
            <div className="below"></div>
        </div>
    )
}

export default DownArrow