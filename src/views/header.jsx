import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from "axios"
// import {useHistory, Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import './script.js';

// import VideoPlayer from "react-video-js-player";
// import ReactPlayer from 'react-player'
// import profilePic from '../static/images/pikachu.png';
// import calPoly from '../static/images/cal_poly.png';
// import dojo from '../static/images/dojo.png';
// import colorado from '../static/images/colorado.png';
// import email from '../static/images/email.png';
// import linkedin from '../static/images/linkedin.png';
// import github from '../static/images/github.png';
// import snake from "../static/videos/snake.mp4";
// import elden from "../static/videos/elden.mp4";
// import alarm from "../static/videos/alarm.mp4";
// import dnd from "../static/videos/dnd.mp4";
// import profile from "../static/images/profile.jpg";
// import javascriptPic from "../static/images/javascript.png";
// import cssPic from "../static/images/css.png";
// import flaskPic from "../static/images/flask.png";
// import git from "../static/images/git.png";
// import html from "../static/images/html.png";
// import mongodb from "../static/images/mongodb.png";
// import mysql from  "../static/images/mysql.png";
// import node from "../static/images/node.png";
// import python from "../static/images/python.png";
// import react from "../static/images/react.png";
// import java from "../static/images/java.png";
// import bootstrap from "../static/images/bootstrap.png"
import './styles.scss';

const Header = () => {
    // const videoSrc = snake;
    // const poster = "http://www.coolmathgames.com/sites/default/files/snake.png"
    // const [videoFilePath, setVideoFilePath] = useState(null);
    // const [isOver, setIsOver] = useState(false);
    // const [line, setLine] = useState(false)
    // function changeLineOver(e) {
    //     e.target.style.textDecoration= 'underline';
    // }
    // function changeLineLeave(e) {
    //     e.target.style.textDecoration= null;
    // }
    // function changeBackground(e) {
    //     e.target.style.background= 'red';
    // }
    // function changeBackground2(e) {
    // e.target.style.background= '';
    // }
    return (
        <div >
            {/* <div >
                <ul id="nav">
                    {/* <li><a href="#title" onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Home</a></li> */}
                    {/* <li><a href="#title"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">About Me</a></li>
                    <li><a href="#project-title"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Projects</a></li>
                    <li><a href="#skills"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Skills</a></li>
                    <li><a href="#experience"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Work Experience</a></li>
                    <li><a href="#education"  onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Education</a></li>
                    <li><a href="#contact" onMouseOver={changeLineOver} onMouseLeave={changeLineLeave} onclick="spidey()">Contact Me</a></li>
                </ul>   
                <h1 id="title">Daniel Hernandez</h1>
            </div> */} 
            {/* <div class="about">
                <h1 id="title">Daniel Hernandez</h1>
                <img class="user-picL" src={profile} alt="user-circle" />
            </div> */}

            {/* <div id="row-about">
                <img class="user-pic" src={profile} alt="user-circle" />
                <div class="paragraph">
                    <p  class="pLarger">Hello! My name is Daniel Hernandez.  I recently graduated from Coding Dojo learning multitple different languages and was previously employed as an accountant.  Not satisfied with the repetitive the nature of accounting, I started looking into new career prospects.  Last summer, programming took my interest and I started self-studying Python before enrolling in Coding Dojo six months later.</p> 
                    <br/>
                    <p class="pLarger">I find programming to be challenging but very entertaining in finding solutions utilizing a variety of different methods. </p>
                </div>
            </div> */}
            {/* <div >
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
            </div> */}
            {/* <div>
                <h1 id="skills">Skills</h1>
                <div class="skills-Container">
                    <div class="skills-List">
                        {/* <ul class="skill-list">
                            <li><span class="bold-skills">Languages:</span> HTML, CSS, JavaScript, Python, Java</li>
                            <li><span class="bold-skills">Frameworks:</span> Flask, Express, Spring Framework</li>
                            <li><span class="bold-skills">Libraries:</span> jQuery, React and Bootstrap</li>
                            <li><span class="bold-skills">Databases:</span> MYSQL, MongoDB</li>
                            <li><span class="bold-skills">Technologies, IDE, Tools:</span> Java Server Pages (JSP), Spring Tool Suite, VSCode, Node</li>
                        </ul> */}
                        {/* <div class="skills-Item flex">
                            <div class="flex">
                                <img src={html} alt="javascript-circle" />
                            </div>
                            <p class="p-text">HTML</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={javascriptPic} alt="javascript-circle" />
                            </div>
                            <p class="p-text">JavaScript</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={cssPic} alt="javascript-circle" />
                            </div>
                            <p class="p-text">CSS</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={python} alt="javascript-circle" />
                            </div>
                            <p class="p-text">Python</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={java} alt="javascript-circle" />
                            </div>
                            <p class="p-text">Java</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={flaskPic} alt="javascript-circle" />
                            </div>
                            <p class="p-text">Flask</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={mongodb} alt="javascript-circle" />
                            </div>
                            <p class="p-text">MongoDB</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={react} alt="javascript-circle" />
                            </div>
                            <p class="p-text">React</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={node} alt="javascript-circle" />
                            </div>
                            <p class="p-text">Node</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={mysql} alt="javascript-circle" />
                            </div>
                            <p class="p-text">MySQL</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={git} alt="javascript-circle" />
                            </div>
                            <p class="p-text">Git</p>
                        </div>
                        <div class="skills-Item flex">
                            <div class="flex">
                                <img src={bootstrap} alt="javascript-circle" />
                            </div>
                            <p class="p-text">Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div>
                <h1 id="experience">Work Experience</h1>
                <div class="workBg">
                <div class="work">
                        <div class="location-years">
                            <h1>American X Air </h1>
                            <h2>Freelance May 2022</h2>
                        </div>
                        <h2 class="locationUnderline">Programmer</h2>
                        <ul class="responsiblities">
                            <li>Constructed invoice system allowing the business to easily fill needed information and allow user's to search for past invoices through the use of Java and Java Server Pages (JSP)</li>
                            <li>Created frontend invoice design using CSS</li>
                            <li>Utilized MySQL as a database to store user information and invoice information</li>
                        </ul>
                    </div>
                    <div class="work">
                        <div class="location-years">
                            <h1>Mikuni American Corporation</h1>
                            <h2>Northrige, CA (Feb 2019-Jan 2022)</h2>
                        </div>
                        <h2 class="locationUnderline">Accountant</h2>
                        <ul class="responsiblities">
                            <li>Responsible for tracking and managing financial data and reporting data to management to make informed business decisions</li>
                            <li>Responsible for creating financial statements to present monthly and quarterly to present to management and auditors</li>
                            <li>Created new excel spreadsheets to hasten certain procedures to increase efficiency and accuracy</li>
                        </ul>
                    </div>
                    <div class="work">
                        <div class="location-years">
                            <h1>Fundworks</h1>
                            <h2>Sherman Oaks, CA ( Nov 2017 -Jan 2019)</h2>
                        </div>
                        <h2 class="locationUnderline">Underwriter / Credit Analyst</h2>
                        <ul class="responsiblities">
                            <li>Analyze business financials and perform legal research on various businesses to report any potential dangers</li>
                            <li>Work closely with ISO/Brokers and businesses to build long-lasting relationships</li>
                            <li>Provided recommendations to improve credit analysis and underwriting process that were implemented</li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* <div>
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
            </div> */}
            
            {/* <div>
                <h1 id="contact">Contact Me!</h1>
                <p class="email">danielhernandez918@gmail.com</p>
                <div class="row-contact">
                    {/* <div class="icon-columns">
                        <a class="links-name" href="https://danielhernandez918@gmail.com/"><img class="icon" src={email} alt="email icon"/></a>
                        <p class="hide">Email</p>
                    </div> */}
                    {/* <div class="icon-columns">
                        <a class="links-name" href="https://www.linkedin.com/in/daniel-hernandez-6b472a113/"><img class="icon" src={linkedin} alt="linkedin icon"/></a>
                        <p class="hide">LinkedIn</p>
                    </div>
                    <div class="icon-columns">
                        <a class="links-name" href="https://github.com/danielhernandez918"><img class="icon" src={github} alt="github icon"/></a>
                        <p class="hide">GitHub</p>
                    </div>
                </div>
                </div> */}
        {/* <img id="swing" src="swing.gif"  alt="spider swing" style="display:none;"/> */}

        </div>
    )
}

export default Header;