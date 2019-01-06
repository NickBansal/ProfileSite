import React from 'react'
import '../Stylesheets/Skills.css'

const Skills = () => {
    return (
        <div id="Skills">
            <h1>Skills</h1>
            <div className="SkillsList">
                <h4>Front-End</h4>
                <ul className="SkillArea">
                    <li>ReactJS</li>
                    <li>HTML5/CSS</li>
                    <li>JQuery/Vanilla JS</li>
                    <li>BootStrap</li>
                    <li>p5.js</li>
                </ul>
            </div>
            <div className="SkillsList">
                <h4>Back-End</h4>
                <ul className="SkillArea">
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>PassportJS</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div className="SkillsList">
                <h4>Testing</h4>
                <ul className="SkillArea">
                    <li>Mocha</li>
                    <li>Chai</li>
                    <li>SuperTest</li>
                    <li>Cypress</li>
                    <li>Jest</li>
                    <li>Enzyme</li>
                </ul>
            </div>
            <div className="SkillsList">
                <h4>Other</h4>
                <ul className="SkillArea">
                    <li>Cloud9</li>
                    <li>Heroku</li>
                    <li>Git/Github</li>
                </ul>
            </div>
            <div className="SkillsList">
                <h4>Music</h4>
                <ul className="SkillArea">
                    <li>Logic Audio</li>
                    <li>Reason</li>
                    <li>Massive NI</li>
                    <li>Machine NI</li>
                    <li>Battery NI</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills