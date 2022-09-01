import React from 'react';
import calPoly from '../../static/images/cal_poly.png';
import dojo from '../../static/images/dojo.png';
import colorado from '../../static/images/colorado.png';
import { motion } from 'framer-motion';
import './educationStyles.scss';

const Education = () => {

    return (
    <div className="color">
        <h1 id="Education">Education</h1>
        <motion.div 
                whileInView={{y: [50, 0], opacity: [0, 1]}}
                transition={{ duraction: 0.5 }} >
            <div className="row-edu">
                <div className="even">
                    <img className="icon" src={dojo} alt="coding dojo icon"/>
                </div>
                <div className="edu">
                    <h1>Coding Dojo Bootcamp</h1>
                    <h2>Computer Software Engineering</h2>
                    <p>Jan 2022 - May 2022</p> 
                </div>
            </div>
            <br/>
            <div className="row-edu">
                <div className="even">
                    <img className="icon" src={colorado} alt="colorado global campus icon"/>
                </div>
                <div className="edu">
                    <h1>Colorada State University-Global Campus</h1>
                    <h2>Master of Finance</h2>
                    <p>Jan 2017 - Jun 2019</p>
                </div>
            </div>
            <br/>
            <div className="row-edu">
                <div className="even">
                    <img className="icon" src={calPoly} alt="cal poly icon"/>
                </div>
                <div className="edu">
                    <h1>California Polytechnic State University - Pomona</h1>
                    <h2>Bachelor of Finance, Law and Real Estate</h2>
                    <p>Sep 2011- Dec 2015</p>
                </div>
            </div>
        </motion.div>
    </div>
    )
}

export default Education;