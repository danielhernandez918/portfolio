import React from 'react';
import elden from "../../static/videos/elden.mp4";
import alarm from "../../static/videos/alarm.mp4";
import dnd from "../../static/videos/dnd.mp4";
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import './projectsStyles.scss';

const Projects = () => {

    return (
        <div>
            <h1 id="Projects">Projects</h1>
            <motion.div 
                // whileInView={{x: [150, 0], y: [-100, 0], opacity: [0, 1]}}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duraction: 0.5 }} >
                <h3 className="project-name">Alarm Breaks</h3>
                <div className="projectFlex">                            
                    <video src={alarm}  autoPlay loop muted/>
                    <div className="space">
                        <p className="projectDesc">Allows users to customize and activate multiple alarms.</p>
                        <br/>
                        <p>Created using Python, JavaScript and MySQL.</p>
                        <div className="icon-flex">
                            <a href={"https://github.com/danielhernandez918/Alarm_Breaks/blob/main/README.md"} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 2] }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <AiFillEye/>
                                </motion.div>
                            </a>
                            <a href={"https://github.com/danielhernandez918/Alarm_Breaks"} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 2] }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                // whileInView={{x: [-150, 0], y: [-100, 0],opacity: [0, 1]}}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duraction: 0.5 }} >
                <h3 className="project-name">Elden Ring Search</h3>
                <div className="projectFlex">
                    <video src={elden}  autoPlay loop muted/>
                    <div className="space">
                        <p className="projectDesc">Allows users to use searchbar or category lists to search for items, spells, weapons, etc via third-party API. </p>
                        <br/>
                        <p>Created using MongoDB, Express, React, and Node.</p>
                        <div className="icon-flex">
                            <a href={"https://github.com/danielhernandez918/EldenRingSearch/blob/main/README.md"} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 2] }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <AiFillEye/>
                                </motion.div>
                            </a>
                            <a href={"https://github.com/danielhernandez918/EldenRingSearch"} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 2] }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                // whileInView={{x: [150, 0], y: [-100, 0], opacity: [0, 1]}}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duraction: 0.5 }} >
                <h3 className="project-name">DND Minatures E-Commerce</h3>
                <div className="projectFlex">
                    <video src={dnd}  autoPlay loop muted/>
                    <div className="space">
                        <p className="projectDesc">Allow users to add DND miniatures to shopping cart and/or wishlist along with Stripe for payment processing. </p>
                        <br/>
                        <p>Created using Java, Java Server Pages, MySQL and Stripe.</p>
                        <div className="icon-flex">
                            <a href={"https://github.com/danielhernandez918/DNDcommerce/blob/main/README.md"} target="_blank" rel="noreferrer" >
                                <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 2] }}
                                        transition={{ duration: 0.25 }}
                                >
                                    <AiFillEye/>
                                </motion.div>
                            </a>
                            <a href={"https://github.com/danielhernandez918/DNDcommerce"} target="_blank" rel="noreferrer" >
                                <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 2] }}
                                        transition={{ duration: 0.25 }}
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects;