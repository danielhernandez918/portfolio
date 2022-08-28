import React from 'react';

import profile from "../../static/images/profile.jpg";
import './aboutStyles.scss';

const About = () => {

    return (
        <div class="about">
            <h1 id="title">Daniel Hernandez</h1>
            <img class="user-picL" src={profile} alt="user-circle" />
            <div class="row-about">
                <div class="paragraph">
                    <p  class="pLarger">Hello! My name is Daniel Hernandez.  I recently graduated from Coding Dojo learning multitple different languages and was previously employed as an accountant.  Not satisfied with the repetitive the nature of accounting, I started looking into new career prospects.  Last summer, programming took my interest and I started self-studying Python before enrolling in Coding Dojo six months later.</p> 
                    <br/>
                    <p class="pLarger">I find programming to be challenging but very entertaining in finding solutions utilizing a variety of different methods. </p>
                </div>
            </div>
        </div>
    )
}

export default About;