import React from 'react';

import './navStyles.scss';

const Nav = () => {

    function changeLineOver(e) {
        e.target.style.textDecoration= 'underline';
    }
    function changeLineLeave(e) {
        e.target.style.textDecoration= null;
    }

    return (
        <div >
            <ul id="nav">
                <li><a href="#title"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">About Me</a></li>
                <li><a href="#project-title"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Projects</a></li>
                <li><a href="#skill"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Skills</a></li>
                <li><a href="#experience"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Work Experience</a></li>
                <li><a href="#education"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Education</a></li>
                <li><a href="#contact" onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Contact Me</a></li>
            </ul>
        </div>
    )
}

export default Nav;