import React from 'react'
import '../Stylesheets/DownArrow.css'
import ScrollIntoView from 'react-scroll-into-view'

const DownArrow = () => {
    return (
        <div>
            <div className="container">
            <div className="arrow bounce">
            <ScrollIntoView selector="#About">
                <i className="fa fa-angle-down fa-5x" aria-hidden="true"></i>
            </ScrollIntoView>
            </div>
            </div>
            <div className="below"></div>
        </div>
    )
}

export default DownArrow