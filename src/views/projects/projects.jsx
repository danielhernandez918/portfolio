import React from 'react';

import elden from "../../static/videos/elden.mp4";
import alarm from "../../static/videos/alarm.mp4";
import dnd from "../../static/videos/dnd.mp4";
import './projectsStyles.scss';

const Projects = () => {

    return (
        <div class="z-index">
            <h1 id="project-title">Projects</h1>

            <h3 class="project-name">Alarm Breaks</h3>
            <div class="projectFlex">
                <video src={alarm} width="1000" height="720" autoPlay loop muted/>
                <div>
                    <p class="projectDesc">Allows users to customize and activate multiple alarms.</p>
                    <br/>
                    <p>Created using Python and JavaScript.</p>
                </div>
            </div>

            <h3 class="project-name">Elden Ring Search</h3>
            <div class="projectFlex">
                <video src={elden} width="1000" height="720" autoPlay loop muted/>
                <div>
                    <p class="projectDesc">Allows users to use searchbar or category lists to search for items, spells, weapons, etc via third-party API. </p>
                    <br/>
                    <p>Created using React.</p>
                </div>
            </div>
            
            <h3 class="project-name">DND Minatures E-Commerce</h3>
            <div class="projectFlex">
                <video src={dnd} width="1000" height="720" autoPlay loop muted/>
                <div>
                    <p class="projectDesc">Allow users to add DND miniatures to wishlist and/or shopping cart along with Stripe for payment processing. </p>
                    <br/>
                    <p>Created using Java.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;