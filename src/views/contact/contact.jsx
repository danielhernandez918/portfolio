import React from 'react';
// import email from '../../static/images/email.png';
import linkedin from '../../static/images/linkedin.png';
import github from '../../static/images/github.png';
import { motion } from 'framer-motion'
import './contactStyles.scss';

const Contact = () => {

    return (
        <motion.div
            whileInView={{y: [50, 0], opacity: [0, 1]}}
            transition={{ duraction: 0.5 }} >
            <h1 id="contact">Contact Me!</h1>
            <p className="email">danielhernandez918@gmail.com</p>
            <div className="row-contact">
                    {/* <div class="icon-columns">
                        <a class="links-name" href="https://danielhernandez918@gmail.com/"><img class="icon" src={email} alt="email icon"/></a>
                        <p class="hide">Email</p>
                    </div> */}
                    <div className="icon-columns">
                        <a className="links-name" href="https://www.linkedin.com/in/daniel-hernandez-6b472a113/"><img class="icon" src={linkedin} alt="linkedin icon"/></a>
                        <p className="hide">LinkedIn</p>
                    </div>
                    <div className="icon-columns">
                        <a className="links-name" href="https://github.com/danielhernandez918"><img class="icon" src={github} alt="github icon"/></a>
                        <p className="hide">GitHub</p>
                    </div>
                </div>
        </motion.div>
    )
}

export default Contact;