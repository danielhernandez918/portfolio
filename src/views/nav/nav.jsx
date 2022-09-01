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
        <nav className="main">
            <ul id="nav">
                {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                    <li  key={item}>
                        <a href={`#${item}`} onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                ))}
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
                            {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                                <li  key={item}>
                                    <a href={`#${item}`} onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onClick={() => setToggle(false)}>{item}</a>
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