import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from "axios"
// import {useHistory, Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import './script.js';

// import email from '../../static/images/email.png';
import linkedin from '../../static/images/linkedin.png';
import github from '../../static/images/github.png';
import './contactStyles.scss';

const Contact = () => {

    return (
        <div>
            <h1 id="contact">Contact Me!</h1>
            <p class="email">danielhernandez918@gmail.com</p>
            <div class="row-contact">
                {/* <div class="icon-columns">
                    <a class="links-name" href="https://danielhernandez918@gmail.com/"><img class="icon" src={email} alt="email icon"/></a>
                    <p class="hide">Email</p>
                </div> */}
                <div class="icon-columns">
                    <a class="links-name" href="https://www.linkedin.com/in/daniel-hernandez-6b472a113/"><img class="icon" src={linkedin} alt="linkedin icon"/></a>
                    <p class="hide">LinkedIn</p>
                </div>
                <div class="icon-columns">
                    <a class="links-name" href="https://github.com/danielhernandez918"><img class="icon" src={github} alt="github icon"/></a>
                    <p class="hide">GitHub</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;