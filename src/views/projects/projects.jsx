import React from 'react';

import elden from "../../static/videos/elden.mp4";
import alarm from "../../static/videos/alarm.mp4";
import dnd from "../../static/videos/dnd.mp4";
import { motion } from 'framer-motion'
import './projectsStyles.scss';

const Projects = () => {

    return (
        <div className="z-index">
            <h1 id="projects">Projects</h1>
            <motion.div 
                whileInView={{x: [100, 0], opacity: [0, 1]}}
                transition={{ duraction: 0.5 }} >
                <h3 className="project-name">Alarm Breaks</h3>
                <div className="projectFlex">
                    <video src={alarm}  autoPlay loop muted/>
                    <div>
                        <p className="projectDesc">Allows users to customize and activate multiple alarms.</p>
                        <br/>
                        <p>Created using Python and JavaScript.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{ duraction: 0.5 }} >
                <h3 className="project-name">Elden Ring Search</h3>
                <div className="projectFlex">
                    <video src={elden}  autoPlay loop muted/>
                    <div>
                        <p className="projectDesc">Allows users to use searchbar or category lists to search for items, spells, weapons, etc via third-party API. </p>
                        <br/>
                        <p>Created using React.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{x: [100, 0], opacity: [0, 1]}}
                transition={{ duraction: 0.5 }} >
                <h3 className="project-name">DND Minatures E-Commerce</h3>
                <div className="projectFlex">
                    <video src={dnd}  autoPlay loop muted/>
                    <div>
                        <p className="projectDesc">Allow users to add DND miniatures to wishlist and/or shopping cart along with Stripe for payment processing. </p>
                        <br/>
                        <p>Created using Java.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects;