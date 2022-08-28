import React from 'react';

import calPoly from '../../static/images/cal_poly.png';
import dojo from '../../static/images/dojo.png';
import colorado from '../../static/images/colorado.png';
import './educationStyles.scss';

const Education = () => {

    return (
        <div>
        <h1 id="education">Education</h1>
        <div class="row-edu">
            <div class="even">
                <img class="icon" src={dojo} alt="coding dojo icon"/>
            </div>
            <div class="edu">
                <h1>Coding Dojo Bootcamp</h1>
                <h2>Computer Software Engineering</h2>
                <p>Jan 2022 - Apr 2022</p> 
            </div>
        </div>
        <div class="row-edu">
            <div class="even">
                <img class="icon" src={colorado} alt="colorado global campus icon"/>
            </div>
            <div class="edu">
                <h1>Colorada State University-Global Campus</h1>
                <h2>Master of Finance</h2>
                <p>Jan 2017 - Jun 2019</p>
            </div>
        </div>
        <div class="row-edu">
            <div class="even">
                <img class="icon" src={calPoly} alt="cal poly icon"/>
            </div>
            <div class="edu">
                <h1>California Polytechnic State University - Pomona</h1>
                <h2>Bachelor of Finance, Law and Real Estate</h2>
                <p>Sep 2011- Dec 2015</p>
            </div>
        </div>
    </div>
    )
}

export default Education;