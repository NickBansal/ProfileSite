import React from 'react'
import '../Stylesheets/DownArrow.css'

const DownArrow = () => {
    return (
        <div>
            <div class="container">
            <div class="arrow bounce">
                <i class="fa fa-angle-down fa-5x" aria-hidden="true"></i>
            </div>
            </div>
            <div class="below"></div>
        </div>
    )
}

export default DownArrow