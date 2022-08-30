import React from 'react';

import profile from "../../static/images/profile.jpg";
import { motion } from 'framer-motion'
import './aboutStyles.scss';

const About = () => {

    return (
        <div>
            <h1 id="about">Daniel Hernandez</h1>
            <motion.div
            whileInView={{x: [-100, 0], opacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className = "about">
                <img className="user-picL" src={profile} alt="user-circle" />
                {/* <div className="row-about"> */}
                    <div className="paragraph">
                        <p  className="pLarger">Hello! My name is Daniel Hernandez.  I recently graduated from Coding Dojo learning multitple different languages and was previously employed as an accountant.  Not satisfied with the repetitive the nature of accounting, I started looking into new career prospects.  Last summer, programming took my interest and I started self-studying Python before enrolling in Coding Dojo six months later.</p> 
                        <p className="pLarger">I find programming to be challenging but very entertaining in finding solutions utilizing a variety of different methods. </p>
                    </div>
                {/* </div> */}
            </motion.div>
        </div>
    )
}

export default About;