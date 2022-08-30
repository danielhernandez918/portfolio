import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import './navStyles.scss';

const Nav = () => {

    function changeLineOver(e) {
        e.target.style.textDecoration= 'underline';
    }
    function changeLineLeave(e) {
        e.target.style.textDecoration= null;
    }

    const [toggle, setToggle] = useState(false);

    return (
        <nav >
            <ul id="nav">
                <li><a href="#title"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">About Me</a></li>
                <li><a href="#project-title"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Projects</a></li>
                <li><a href="#skill"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Skills</a></li>
                <li><a href="#experience"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Work Experience</a></li>
                <li><a href="#education"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Education</a></li>
                <li><a href="#contact" onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Contact Me</a></li>
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
                                <li  key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Nav;